import { debug } from "util";

/**
 * abstract抽象クラス
 */
abstract class Human {

  constructor() {
    //手札を初期化する
    this.resetHnad();
  }

  /** 名前を取得する */
  public abstract getName(): string;

  /** 手札 */
  protected myCards: Array<number>;

  /** openの抽象メソッド */
  public abstract open(): number;

  /** カードをセットするabstractメソッド */
  public abstract setCard(arrList: Array<number>): void;

  /** カードをチェックするabstractメソッド */
  public abstract checkSum(): boolean;

  /** 手札をリセットする */
  public resetHnad(): void {
    this.myCards = new Array<number>();
  };

  /** 手札を合計するロジック */
  protected myCardsCalc() {
    return (accum, currentValue, idx): number => {
      if (idx === 0) {
        accum = accum < 11 ? accum : 10;
      }
      return accum + (currentValue < 11 ? currentValue : 10);
    }
  }

  /** 手札の配列を返す */
  public getCardList(): Array<number> {
    return this.myCards;
  }
}

/**
 * ディーラークラス
 */
class Dealer extends Human {

  /** 全てのカードを初期値として持つ */
  private cards: Array<number> = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, //ハート
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, //スペード
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, //クラブ
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13  //ダイヤ
  ];

  /** 名前を取得する */
  public getName(): string {
    return 'ディーラー';
  }

  /** カードをシャッフルする */
  public shuftle(): void {
    this.cards = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, //ハート
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, //スペード
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, //クラブ
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13  //ダイヤ
    ];

    for (let i = this.cards.length - 1; i >= 0; i--) {

      //0〜52のランダムな数値を取得
      let rand = Math.floor(Math.random() * (i + 1));

      //配列の数値を入れ替える
      [this.cards[i], this.cards[rand]] = [this.cards[rand], this.cards[i]];
    }
  }

  /** cardsからランダムで2枚のカードをArrayListで返す */
  public deal(): Array<number> {
    return this.cards.filter((v, i, a) => {
      if (i > 1) return false;
      //配列の先頭から要素を削除
      a.shift();
      //2枚のカードを配列として返す
      return true;
    });
  }

  /** cardsからランダムで1枚のカードをArrayListで返す */
  public hit(): Array<number> {
    return this.cards.filter((v, i, a) => {
      if (i > 0) return false;
      //配列の先頭から要素を削除
      a.shift();
      //1枚のカードを配列として返す
      return true;
    });
  }

  /** myCardsの合計値を返す */
  public open(): number {
    return this.myCards.reduce(this.myCardsCalc());
  }

  /** カードをセットする */
  public setCard(arrList: Array<number>) {
    this.myCards = this.myCards.concat(arrList);
  }

  /** 手札をリセットする */
  public resetHnad(): void {
    this.myCards = new Array<number>();
  }

  /** 
   * myCardsを確認し、まだカードが必要ならtrue,
   * 必要なければ falseを返す
   * */
  public checkSum(): boolean {
    //手札の合計が16以下の場合はhit,17以上はstand
    return this.open() < 17;
  }
}

/**
 * ユーザークラス
 */
class User extends Human {
  /** myCardsの合計値を返す */
  public open(): number {
    return this.myCards.reduce(this.myCardsCalc());
  }

  /** 名前を取得する */
  public getName(): string {
    return 'ユーザー';
  }
  /** カードをセットする */
  public setCard(arrList: Array<number>) {
    this.myCards = this.myCards.concat(arrList);
  }

  /** 
   * myCardsを確認し、まだカードが必要ならtrue,
   * 必要なければ falseを返す
   * */
  public checkSum(): boolean {
    //手札の合計が16以下の場合はhit,17以上はstand
    return this.myCards.reduce(this.myCardsCalc()) < 17;
  }
}

/** 勝敗判定フラグ */
enum JudgeFlag {
  DEALER = 0,
  USER = 1,
  DROW = 2
}

/** 手札の状態フラグ */
enum HandState {
  BUST = 0,
  BLACKJACK = 1,
  STANDING = 2
}

/** BlackJackクラス */
class BlackJack {
  /** ディーラー */
  private dealer: Dealer;
  /** ユーザー */
  private user: User;

  /** ログの管理 */
  private logger: Logger;

  /** アクション名の定数 */
  private readonly HIT: string = 'hit';
  private readonly DEAL: string = 'deal';

  /** ユーザーとディーラーを初期化する */
  constructor() {
    this.dealer = new Dealer();
    this.user = new User();
    this.logger = new Logger(this.dealer, this.user);
  }

  /** ゲームを実行する */
  public execGame(): void {

    //UserとDealerの手札をリセットする。
    this.resetHand();

    //手札をシャッフルする
    this.dealer.shuftle();

    //カードを配る
    this.dealCard(this.user);
    this.dealCard(this.dealer);

    //ゲームを自動実行
    //プレイヤーがカードを引く
    let userHandState: HandState = this.autoExecHitCard(this.user);

    switch (userHandState) {
      case HandState.BUST:
        this.logger.showHandStateMessage(this.user, userHandState);
        //プレイヤーがバストした時点でプレイヤーの敗北が決定する
        this.logger.showJugeMessage(JudgeFlag.DEALER);
        return;
      case HandState.BLACKJACK:
        this.logger.showHandStateMessage(this.user, userHandState);
        //プレイヤーがBlackJackの時点でプレイヤーの勝利が決定する
        this.logger.showJugeMessage(JudgeFlag.USER);
        return;
    }

    let dealerHandState: HandState = this.autoExecHitCard(this.dealer);

    switch (dealerHandState) {
      case HandState.BUST:
        this.logger.showHandStateMessage(this.dealer, dealerHandState);
        //ディーラーがバストした時点でプレイヤーの勝利が決定する
        this.logger.showJugeMessage(JudgeFlag.USER);
        return;
      case HandState.BLACKJACK:
        this.logger.showHandStateMessage(this.dealer, dealerHandState);
        //ディーラーがBlackJackの時点でプレイヤーの敗北が決定する
        this.logger.showJugeMessage(JudgeFlag.DEALER);
        return;
    }

    //プレイヤー、ディーラーどちらもバスト、ブラックジャックじゃなかった為、勝敗判定にもつれ込む
    this.logger.showJugeMessage(this.judge());

    //ゲームの終了
    return;
  }

  /**
   *  ゲームを自動実行する
   *  バスト：true
   * */
  private autoExecHitCard(human: Human): HandState {
    //手札の合計が17以上の時はstandする
    if (!human.checkSum()) {
      return this.checkHandState(human);
    }

    //手札の合計が16以下の為、hitする
    this.hitCard(human);

    //再帰的に手札の合計が17以上になるまで実行する
    return this.autoExecHitCard(human);
  }

  /** 指定されたHumanにカードを二枚渡す */
  public dealCard(humnan: Human): void {
    humnan.setCard(this.dealer.deal());
    this.logger.showCardMessage(this.DEAL, humnan);
  }

  /** 指定されたHumanにカードを一枚渡す */
  public hitCard(human: Human): void {
    human.setCard(this.dealer.hit());
    this.logger.showCardMessage(this.HIT, human);
  }

  /** 手札をリセットする */
  private resetHand(): void {
    this.dealer.resetHnad();
    this.user.resetHnad();
  }

  /** 勝敗を判定する */
  private judge(): JudgeFlag {
    let userSum = this.user.open();
    let dealerSum = this.dealer.open();

    return userSum > dealerSum ? JudgeFlag.USER : userSum < dealerSum ? JudgeFlag.DEALER : JudgeFlag.DROW;
  }

  /** hit終了後のハンドの状態を判定 */
  private checkHandState(human: Human): HandState {
    return this.checkBust(human) ? HandState.BUST : this.checkBlackJack(human) ? HandState.BLACKJACK : HandState.STANDING;
  }

  /**
   * バストしているか判定する
   * @param human 
   */
  private checkBust(human: Human): boolean {
    return human.open() > 21;
  }

  /**
   * BlackJackかチェックする
   * @param human 
   */
  private checkBlackJack(human: Human): boolean {
    return human.open() === 21;
  }
}

/** ログの制御 */
class Logger {

  /** ディーラー */
  private dealer: Dealer;
  /** ユーザー */
  private user: User;

  /** ディーラーとユーザーを初期化 */
  constructor(dealer: Dealer, user: User) {
    this.dealer = dealer;
    this.user = user;
  }

  /** 判定メッセージを表示する */
  public showJugeMessage(judgeFlag: JudgeFlag, handstate: HandState = null) {
    let message: string;
    let createMessage = (human: Human) => `${ human.getName() }が勝利しました。`;

    switch (judgeFlag) {
      case JudgeFlag.USER: //ユーザーの勝利
        message = createMessage(this.user);
        break;
      case JudgeFlag.DEALER: //ディーラーの勝利
        message = createMessage(this.dealer);
        break;
      case JudgeFlag.DROW: //引き分け
        message = '引き分けです。';
        break;
    }

    this.showMessage(message);
  }

  /** 手札の情報を表示する */
  public showCardMessage(action: string, human: Human): void {
    let message: string = `[プレイヤー]：${ human.getName() },[アクション]：${ action },  [ハンド]：${ human.getCardList().toString() }, [合計]：${ human.open() }`;
    this.showMessage(message);

  }

  /** 手札の状態を表示する */
  public showHandStateMessage(human: Human, handstate: HandState): void {
    let message = `${ human.getName() }は${ HandState[handstate] }になりました`;
    this.showMessage(message);
  }

  /** メッセージをログに出力する */
  private showMessage(message: string) {
    console.log(message);
  }
}

//BlackJackインスタンスを生成
const blackJack = new BlackJack();

for (let i = 0; i < 10; i++) { 
  //ゲームを始める
  blackJack.execGame();
}