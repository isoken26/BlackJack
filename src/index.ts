/**
 * abstract抽象クラス
 */
abstract class Human { 

  constructor() { 
    //手札を初期化する
    this.resetHnad();
  }

  /** 手札 */
  protected myCards: Array<number>;

 /** openの抽象メソッド */
  public abstract open(): void;

  /** カードをセットするabstractメソッド */
  public abstract setCard(arrList: Array<number>): void;

  /** カードをチェックするabstractメソッド */
  public abstract checkSum(): boolean;

  /** 手札をリセットする */
  public resetHnad(): void { 
    this.myCards = new Array<number>();
  };

  /** 手札を合計するロジック */
  protected myCardsCalc(): (accumlator: number, currentValue: number) => number {
    return (accum: number, currentValue: number): number => {
      return accum + currentValue;
    }
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

  /** カードをシャッフルする */
  public shuftle(): void { 
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
      //配列の先頭から要素を削除
      a.pop();
      //2枚のカードを配列として返す
      if (i < 2) return true;
    });
  }
  
  /** cardsからランダムで1枚のカードをArrayListで返す */
  public hit(): Array<number> { 
    return this.cards.filter((v, i, a) => {
      //配列の先頭から要素を削除
      a.pop();
      //1枚のカードを配列として返す
      if (i < 1) return true;
    });
  }

  /** myCardsの合計値を返す */
  public open(): number { 
    return this.myCards.reduce(this.myCardsCalc());
  }

  /** カードをセットする */
  public setCard(arrList: Array<number>) { 
    this.myCards.concat(arrList);
  }

  /** 手札をリセットする */
  public resetHnad(): void{
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

  /** カードをセットする */
  public setCard(arrList: Array<number>) {
    this.myCards.concat(arrList);
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
/** BlackJackクラス */
class BlackJack {
  /** ディーラー */
  private dealer: Dealer;
  /** ユーザー */   
  private user: User;

  /** ログの管理 */
  private logger: Logger;

  /** ユーザーとディーラーを初期化する */
  constructor() { 
    this.dealer = new Dealer();
    this.user = new User();
    this.logger = new Logger();
  }

  /** ゲームを実行する */
  public execGame(): void { 
    //UserとDealerの手札をリセットする。
    this.resetHand();

    //手札をシャッフルする
    this.dealer.shuftle();

    //カードを配る
    this.dealCard(this.dealer);
    this.dealCard(this.user);

    //ゲームを自動実行
    //プレイヤーがカードを引く
    if (!this.autoExecGame(this.user)) { 
      //プレイヤーがバストした時点でプレイヤーの敗北が決定する
      return;
    }

    //ディーラーがカードを引く
    if (!this.autoExecGame(this.dealer)) { 
      //ディーラーがバストした時点でプレイヤーの勝利が決定する
      return;
    }

    //プレイヤー、ディーラーどちらもバストしなかった為、勝敗判定にもつれ込む
    this.logger.showJugeMessage(this.judge());

    //ゲームの終了
    return;
  }

  /** ゲームを自動実行する */
  private autoExecGame(human: Human): boolean { 
    //手札の合計が17以上の時はstandする
    if (!human.checkSum()) { 
      return human.checkSum();
    }

    //手札の合計が16以下の為、hitする
    this.hitCard(human);

    //再帰的に手札の合計が17以上になるまで実行する
    return this.autoExecGame(human);
  }

  /** 指定されたHumanにカードを二枚渡す */
  public dealCard(humnan: Human): void { 
    humnan.setCard(this.dealer.deal());
  }

  /** 指定されたHumanにカードを一枚渡す */
  public hitCard(human: Human): void {
    human.setCard(this.dealer.hit());
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

  /** メッセージを表示する */
  private showMessage(message: string): void { 
    console.log(message);
  }
}

class Logger { 

  public showJugeMessage(judgeFlag: JudgeFlag) { 
    let message: string;
    let createMessage = (name: string) => `${ name }が勝利しました。`;

    switch (judgeFlag) { 
      case JudgeFlag.USER:
        message = createMessage('ユーザー');
        break;
      case JudgeFlag.DEALER:
        message = createMessage('ディーラー');
        break;
      case JudgeFlag.DROW:
        message = '引き分けです。';
        break;
    }

    this.showMessage(message);
  }

  private showMessage(message: string) { 
    console.log(message);
  }
}

const blackJack = new BlackJack();

blackJack.execGame();