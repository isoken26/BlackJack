/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * abstract抽象クラス
 */
class Human {
    constructor() {
        //手札を初期化する
        this.resetHnad();
    }
    /** 手札をリセットする */
    resetHnad() {
        this.myCards = new Array();
    }
    ;
    /** 手札を合計するロジック */
    myCardsCalc() {
        return (accum, currentValue, idx) => {
            if (idx === 0) {
                accum = accum < 11 ? accum : 10;
            }
            return accum + (currentValue < 11 ? currentValue : 10);
        };
    }
    /** 手札の配列を返す */
    getCardList() {
        return this.myCards;
    }
}
/**
 * ディーラークラス
 */
class Dealer extends Human {
    constructor() {
        super(...arguments);
        /** 全てのカードを初期値として持つ */
        this.cards = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 //ダイヤ
        ];
    }
    /** 名前を取得する */
    getName() {
        return 'ディーラー';
    }
    /** カードをシャッフルする */
    shuftle() {
        this.cards = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 //ダイヤ
        ];
        for (let i = this.cards.length - 1; i >= 0; i--) {
            //0〜52のランダムな数値を取得
            let rand = Math.floor(Math.random() * (i + 1));
            //配列の数値を入れ替える
            [this.cards[i], this.cards[rand]] = [this.cards[rand], this.cards[i]];
        }
    }
    /** cardsからランダムで2枚のカードをArrayListで返す */
    deal() {
        return this.cards.filter((v, i, a) => {
            if (i > 1)
                return false;
            //配列の先頭から要素を削除
            a.shift();
            //2枚のカードを配列として返す
            return true;
        });
    }
    /** cardsからランダムで1枚のカードをArrayListで返す */
    hit() {
        return this.cards.filter((v, i, a) => {
            if (i > 0)
                return false;
            //配列の先頭から要素を削除
            a.shift();
            //1枚のカードを配列として返す
            return true;
        });
    }
    /** myCardsの合計値を返す */
    open() {
        return this.myCards.reduce(this.myCardsCalc());
    }
    /** カードをセットする */
    setCard(arrList) {
        this.myCards = this.myCards.concat(arrList);
    }
    /** 手札をリセットする */
    resetHnad() {
        this.myCards = new Array();
    }
    /**
     * myCardsを確認し、まだカードが必要ならtrue,
     * 必要なければ falseを返す
     * */
    checkSum() {
        //手札の合計が16以下の場合はhit,17以上はstand
        return this.open() < 17;
    }
}
/**
 * ユーザークラス
 */
class User extends Human {
    /** myCardsの合計値を返す */
    open() {
        return this.myCards.reduce(this.myCardsCalc());
    }
    /** 名前を取得する */
    getName() {
        return 'ユーザー';
    }
    /** カードをセットする */
    setCard(arrList) {
        this.myCards = this.myCards.concat(arrList);
    }
    /**
     * myCardsを確認し、まだカードが必要ならtrue,
     * 必要なければ falseを返す
     * */
    checkSum() {
        //手札の合計が16以下の場合はhit,17以上はstand
        return this.myCards.reduce(this.myCardsCalc()) < 17;
    }
}
/** 勝敗判定フラグ */
var JudgeFlag;
(function (JudgeFlag) {
    JudgeFlag[JudgeFlag["DEALER"] = 0] = "DEALER";
    JudgeFlag[JudgeFlag["USER"] = 1] = "USER";
    JudgeFlag[JudgeFlag["DROW"] = 2] = "DROW";
})(JudgeFlag || (JudgeFlag = {}));
/** 手札の状態フラグ */
var HandState;
(function (HandState) {
    HandState[HandState["BUST"] = 0] = "BUST";
    HandState[HandState["BLACKJACK"] = 1] = "BLACKJACK";
    HandState[HandState["STANDING"] = 2] = "STANDING";
})(HandState || (HandState = {}));
/** BlackJackクラス */
class BlackJack {
    /** ユーザーとディーラーを初期化する */
    constructor() {
        /** アクション名の定数 */
        this.HIT = 'hit';
        this.DEAL = 'deal';
        this.dealer = new Dealer();
        this.user = new User();
        this.logger = new Logger(this.dealer, this.user);
    }
    /** ゲームを実行する */
    execGame() {
        //UserとDealerの手札をリセットする。
        this.resetHand();
        //手札をシャッフルする
        this.dealer.shuftle();
        //カードを配る
        this.dealCard(this.user);
        this.dealCard(this.dealer);
        //ゲームを自動実行
        //プレイヤーがカードを引く
        let userHandState = this.autoExecHitCard(this.user);
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
        let dealerHandState = this.autoExecHitCard(this.dealer);
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
    autoExecHitCard(human) {
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
    dealCard(humnan) {
        humnan.setCard(this.dealer.deal());
        this.logger.showCardMessage(this.DEAL, humnan);
    }
    /** 指定されたHumanにカードを一枚渡す */
    hitCard(human) {
        human.setCard(this.dealer.hit());
        this.logger.showCardMessage(this.HIT, human);
    }
    /** 手札をリセットする */
    resetHand() {
        this.dealer.resetHnad();
        this.user.resetHnad();
    }
    /** 勝敗を判定する */
    judge() {
        let userSum = this.user.open();
        let dealerSum = this.dealer.open();
        return userSum > dealerSum ? JudgeFlag.USER : userSum < dealerSum ? JudgeFlag.DEALER : JudgeFlag.DROW;
    }
    /** hit終了後のハンドの状態を判定 */
    checkHandState(human) {
        return this.checkBust(human) ? HandState.BUST : this.checkBlackJack(human) ? HandState.BLACKJACK : HandState.STANDING;
    }
    /**
     * バストしているか判定する
     * @param human
     */
    checkBust(human) {
        return human.open() > 21;
    }
    /**
     * BlackJackかチェックする
     * @param human
     */
    checkBlackJack(human) {
        return human.open() === 21;
    }
}
/** ログの制御 */
class Logger {
    /** ディーラーとユーザーを初期化 */
    constructor(dealer, user) {
        this.dealer = dealer;
        this.user = user;
    }
    /** 判定メッセージを表示する */
    showJugeMessage(judgeFlag, handstate = null) {
        let message;
        let createMessage = (human) => `${human.getName()}が勝利しました。`;
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
    showCardMessage(action, human) {
        let message = `[プレイヤー]：${human.getName()},[アクション]：${action},  [ハンド]：${human.getCardList().toString()}, [合計]：${human.open()}`;
        this.showMessage(message);
    }
    /** 手札の状態を表示する */
    showHandStateMessage(human, handstate) {
        let message = `${human.getName()}は${HandState[handstate]}になりました`;
        this.showMessage(message);
    }
    /** メッセージをログに出力する */
    showMessage(message) {
        console.log(message);
    }
}
//BlackJackインスタンスを生成
const blackJack = new BlackJack();
for (let i = 0; i < 10; i++) {
    //ゲームを始める
    blackJack.execGame();
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hGQTs7R0FFRztBQUNILE1BQWUsS0FBSztJQUVsQjtRQUNFLFVBQVU7UUFDVixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQWlCRCxnQkFBZ0I7SUFDVCxTQUFTO1FBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFDO0lBQ3JDLENBQUM7SUFBQSxDQUFDO0lBRUYsa0JBQWtCO0lBQ1IsV0FBVztRQUNuQixPQUFPLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQVUsRUFBRTtZQUMxQyxJQUFJLEdBQUcsS0FBSyxDQUFDLEVBQUU7Z0JBQ2IsS0FBSyxHQUFHLEtBQUssR0FB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QVksS0FBSyxDQUFDLE9BQU8sRUFBRyxZQUFhLE1BQU8sWUFBYSxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxFQUFHLFVBQVcsS0FBSyxDQUFDLElBQUksRUFBRyxFQUFFLENBQUM7UUFDN0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUU1QixDQUFDO0lBRUQsaUJBQWlCO0lBQ1Ysb0JBQW9CLENBQUMsS0FBWSxFQUFFLFNBQW9CO1FBQzVELElBQUksT0FBTyxHQUFHLEdBQUksS0FBSyxDQUFDLE9BQU8sRUFBRyxJQUFLLFNBQVMsQ0FBQyxTQUFTLENBQUUsUUFBUSxDQUFDO1FBQ3JFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELG9CQUFvQjtJQUNaLFdBQVcsQ0FBQyxPQUFlO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkIsQ0FBQztDQUNGO0FBRUQsb0JBQW9CO0FBQ3BCLE1BQU0sU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7QUFFbEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUMzQixTQUFTO0lBQ1QsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO0NBQ3RCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IGRlYnVnIH0gZnJvbSBcInV0aWxcIjtcblxuLyoqXG4gKiBhYnN0cmFjdOaKveixoeOCr+ODqeOCuVxuICovXG5hYnN0cmFjdCBjbGFzcyBIdW1hbiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy/miYvmnK3jgpLliJ3mnJ/ljJbjgZnjgotcbiAgICB0aGlzLnJlc2V0SG5hZCgpO1xuICB9XG5cbiAgLyoqIOWQjeWJjeOCkuWPluW+l+OBmeOCiyAqL1xuICBwdWJsaWMgYWJzdHJhY3QgZ2V0TmFtZSgpOiBzdHJpbmc7XG5cbiAgLyoqIOaJi+acrSAqL1xuICBwcm90ZWN0ZWQgbXlDYXJkczogQXJyYXk8bnVtYmVyPjtcblxuICAvKiogb3BlbuOBruaKveixoeODoeOCveODg+ODiSAqL1xuICBwdWJsaWMgYWJzdHJhY3Qgb3BlbigpOiBudW1iZXI7XG5cbiAgLyoqIOOCq+ODvOODieOCkuOCu+ODg+ODiOOBmeOCi2Fic3RyYWN044Oh44K944OD44OJICovXG4gIHB1YmxpYyBhYnN0cmFjdCBzZXRDYXJkKGFyckxpc3Q6IEFycmF5PG51bWJlcj4pOiB2b2lkO1xuXG4gIC8qKiDjgqvjg7zjg4njgpLjg4Hjgqfjg4Pjgq/jgZnjgothYnN0cmFjdOODoeOCveODg+ODiSAqL1xuICBwdWJsaWMgYWJzdHJhY3QgY2hlY2tTdW0oKTogYm9vbGVhbjtcblxuICAvKiog5omL5pyt44KS44Oq44K744OD44OI44GZ44KLICovXG4gIHB1YmxpYyByZXNldEhuYWQoKTogdm9pZCB7XG4gICAgdGhpcy5teUNhcmRzID0gbmV3IEFycmF5PG51bWJlcj4oKTtcbiAgfTtcblxuICAvKiog5omL5pyt44KS5ZCI6KiI44GZ44KL44Ot44K444OD44KvICovXG4gIHByb3RlY3RlZCBteUNhcmRzQ2FsYygpIHtcbiAgICByZXR1cm4gKGFjY3VtLCBjdXJyZW50VmFsdWUsIGlkeCk6IG51bWJlciA9PiB7XG4gICAgICBpZiAoaWR4ID09PSAwKSB7XG4gICAgICAgIGFjY3VtID0gYWNjdW0gPCAxMSA/IGFjY3VtIDogMTA7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjdW0gKyAoY3VycmVudFZhbHVlIDwgMTEgPyBjdXJyZW50VmFsdWUgOiAxMCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIOaJi+acreOBrumFjeWIl+OCkui/lOOBmSAqL1xuICBwdWJsaWMgZ2V0Q2FyZExpc3QoKTogQXJyYXk8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMubXlDYXJkcztcbiAgfVxufVxuXG4vKipcbiAqIOODh+OCo+ODvOODqeODvOOCr+ODqeOCuVxuICovXG5jbGFzcyBEZWFsZXIgZXh0ZW5kcyBIdW1hbiB7XG5cbiAgLyoqIOWFqOOBpuOBruOCq+ODvOODieOCkuWIneacn+WApOOBqOOBl+OBpuaMgeOBpCAqL1xuICBwcml2YXRlIGNhcmRzOiBBcnJheTxudW1iZXI+ID0gW1xuICAgIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAvL+ODj+ODvOODiFxuICAgIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAvL+OCueODmuODvOODiVxuICAgIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAvL+OCr+ODqeODllxuICAgIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzICAvL+ODgOOCpOODpFxuICBdO1xuXG4gIC8qKiDlkI3liY3jgpLlj5blvpfjgZnjgosgKi9cbiAgcHVibGljIGdldE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ+ODh+OCo+ODvOODqeODvCc7XG4gIH1cblxuICAvKiog44Kr44O844OJ44KS44K344Oj44OD44OV44Or44GZ44KLICovXG4gIHB1YmxpYyBzaHVmdGxlKCk6IHZvaWQge1xuICAgIHRoaXMuY2FyZHMgPSBbXG4gICAgICAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgLy/jg4/jg7zjg4hcbiAgICAgIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAvL+OCueODmuODvOODiVxuICAgICAgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMiwgMTMsIC8v44Kv44Op44OWXG4gICAgICAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMyAgLy/jg4DjgqTjg6RcbiAgICBdO1xuXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2FyZHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblxuICAgICAgLy8w44CcNTLjga7jg6njg7Pjg4Djg6DjgarmlbDlgKTjgpLlj5blvpdcbiAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG5cbiAgICAgIC8v6YWN5YiX44Gu5pWw5YCk44KS5YWl44KM5pu/44GI44KLXG4gICAgICBbdGhpcy5jYXJkc1tpXSwgdGhpcy5jYXJkc1tyYW5kXV0gPSBbdGhpcy5jYXJkc1tyYW5kXSwgdGhpcy5jYXJkc1tpXV07XG4gICAgfVxuICB9XG5cbiAgLyoqIGNhcmRz44GL44KJ44Op44Oz44OA44Og44GnMuaemuOBruOCq+ODvOODieOCkkFycmF5TGlzdOOBp+i/lOOBmSAqL1xuICBwdWJsaWMgZGVhbCgpOiBBcnJheTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5jYXJkcy5maWx0ZXIoKHYsIGksIGEpID0+IHtcbiAgICAgIGlmIChpID4gMSkgcmV0dXJuIGZhbHNlO1xuICAgICAgLy/phY3liJfjga7lhYjpoK3jgYvjgonopoHntKDjgpLliYrpmaRcbiAgICAgIGEuc2hpZnQoKTtcbiAgICAgIC8vMuaemuOBruOCq+ODvOODieOCkumFjeWIl+OBqOOBl+OBpui/lOOBmVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cblxuICAvKiogY2FyZHPjgYvjgonjg6njg7Pjg4Djg6Djgacx5p6a44Gu44Kr44O844OJ44KSQXJyYXlMaXN044Gn6L+U44GZICovXG4gIHB1YmxpYyBoaXQoKTogQXJyYXk8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuY2FyZHMuZmlsdGVyKCh2LCBpLCBhKSA9PiB7XG4gICAgICBpZiAoaSA+IDApIHJldHVybiBmYWxzZTtcbiAgICAgIC8v6YWN5YiX44Gu5YWI6aCt44GL44KJ6KaB57Sg44KS5YmK6ZmkXG4gICAgICBhLnNoaWZ0KCk7XG4gICAgICAvLzHmnprjga7jgqvjg7zjg4njgpLphY3liJfjgajjgZfjgabov5TjgZlcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIG15Q2FyZHPjga7lkIjoqIjlgKTjgpLov5TjgZkgKi9cbiAgcHVibGljIG9wZW4oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5teUNhcmRzLnJlZHVjZSh0aGlzLm15Q2FyZHNDYWxjKCkpO1xuICB9XG5cbiAgLyoqIOOCq+ODvOODieOCkuOCu+ODg+ODiOOBmeOCiyAqL1xuICBwdWJsaWMgc2V0Q2FyZChhcnJMaXN0OiBBcnJheTxudW1iZXI+KSB7XG4gICAgdGhpcy5teUNhcmRzID0gdGhpcy5teUNhcmRzLmNvbmNhdChhcnJMaXN0KTtcbiAgfVxuXG4gIC8qKiDmiYvmnK3jgpLjg6rjgrvjg4Pjg4jjgZnjgosgKi9cbiAgcHVibGljIHJlc2V0SG5hZCgpOiB2b2lkIHtcbiAgICB0aGlzLm15Q2FyZHMgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuICB9XG5cbiAgLyoqIFxuICAgKiBteUNhcmRz44KS56K66KqN44GX44CB44G+44Gg44Kr44O844OJ44GM5b+F6KaB44Gq44KJdHJ1ZSxcbiAgICog5b+F6KaB44Gq44GR44KM44GwIGZhbHNl44KS6L+U44GZXG4gICAqICovXG4gIHB1YmxpYyBjaGVja1N1bSgpOiBib29sZWFuIHtcbiAgICAvL+aJi+acreOBruWQiOioiOOBjDE25Lul5LiL44Gu5aC05ZCI44GvaGl0LDE35Lul5LiK44Gvc3RhbmRcbiAgICByZXR1cm4gdGhpcy5vcGVuKCkgPCAxNztcbiAgfVxufVxuXG4vKipcbiAqIOODpuODvOOCtuODvOOCr+ODqeOCuVxuICovXG5jbGFzcyBVc2VyIGV4dGVuZHMgSHVtYW4ge1xuICAvKiogbXlDYXJkc+OBruWQiOioiOWApOOCkui/lOOBmSAqL1xuICBwdWJsaWMgb3BlbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm15Q2FyZHMucmVkdWNlKHRoaXMubXlDYXJkc0NhbGMoKSk7XG4gIH1cblxuICAvKiog5ZCN5YmN44KS5Y+W5b6X44GZ44KLICovXG4gIHB1YmxpYyBnZXROYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICfjg6bjg7zjgrbjg7wnO1xuICB9XG4gIC8qKiDjgqvjg7zjg4njgpLjgrvjg4Pjg4jjgZnjgosgKi9cbiAgcHVibGljIHNldENhcmQoYXJyTGlzdDogQXJyYXk8bnVtYmVyPikge1xuICAgIHRoaXMubXlDYXJkcyA9IHRoaXMubXlDYXJkcy5jb25jYXQoYXJyTGlzdCk7XG4gIH1cblxuICAvKiogXG4gICAqIG15Q2FyZHPjgpLnorroqo3jgZfjgIHjgb7jgaDjgqvjg7zjg4njgYzlv4XopoHjgarjgol0cnVlLFxuICAgKiDlv4XopoHjgarjgZHjgozjgbAgZmFsc2XjgpLov5TjgZlcbiAgICogKi9cbiAgcHVibGljIGNoZWNrU3VtKCk6IGJvb2xlYW4ge1xuICAgIC8v5omL5pyt44Gu5ZCI6KiI44GMMTbku6XkuIvjga7loLTlkIjjga9oaXQsMTfku6XkuIrjga9zdGFuZFxuICAgIHJldHVybiB0aGlzLm15Q2FyZHMucmVkdWNlKHRoaXMubXlDYXJkc0NhbGMoKSkgPCAxNztcbiAgfVxufVxuXG4vKiog5Yud5pWX5Yik5a6a44OV44Op44KwICovXG5lbnVtIEp1ZGdlRmxhZyB7XG4gIERFQUxFUiA9IDAsXG4gIFVTRVIgPSAxLFxuICBEUk9XID0gMlxufVxuXG4vKiog5omL5pyt44Gu54q25oWL44OV44Op44KwICovXG5lbnVtIEhhbmRTdGF0ZSB7XG4gIEJVU1QgPSAwLFxuICBCTEFDS0pBQ0sgPSAxLFxuICBTVEFORElORyA9IDJcbn1cblxuLyoqIEJsYWNrSmFja+OCr+ODqeOCuSAqL1xuY2xhc3MgQmxhY2tKYWNrIHtcbiAgLyoqIOODh+OCo+ODvOODqeODvCAqL1xuICBwcml2YXRlIGRlYWxlcjogRGVhbGVyO1xuICAvKiog44Om44O844K244O8ICovXG4gIHByaXZhdGUgdXNlcjogVXNlcjtcblxuICAvKiog44Ot44Kw44Gu566h55CGICovXG4gIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXI7XG5cbiAgLyoqIOOCouOCr+OCt+ODp+ODs+WQjeOBruWumuaVsCAqL1xuICBwcml2YXRlIHJlYWRvbmx5IEhJVDogc3RyaW5nID0gJ2hpdCc7XG4gIHByaXZhdGUgcmVhZG9ubHkgREVBTDogc3RyaW5nID0gJ2RlYWwnO1xuXG4gIC8qKiDjg6bjg7zjgrbjg7zjgajjg4fjgqPjg7zjg6njg7zjgpLliJ3mnJ/ljJbjgZnjgosgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kZWFsZXIgPSBuZXcgRGVhbGVyKCk7XG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgICB0aGlzLmxvZ2dlciA9IG5ldyBMb2dnZXIodGhpcy5kZWFsZXIsIHRoaXMudXNlcik7XG4gIH1cblxuICAvKiog44Ky44O844Og44KS5a6f6KGM44GZ44KLICovXG4gIHB1YmxpYyBleGVjR2FtZSgpOiB2b2lkIHtcblxuICAgIC8vVXNlcuOBqERlYWxlcuOBruaJi+acreOCkuODquOCu+ODg+ODiOOBmeOCi+OAglxuICAgIHRoaXMucmVzZXRIYW5kKCk7XG5cbiAgICAvL+aJi+acreOCkuOCt+ODo+ODg+ODleODq+OBmeOCi1xuICAgIHRoaXMuZGVhbGVyLnNodWZ0bGUoKTtcblxuICAgIC8v44Kr44O844OJ44KS6YWN44KLXG4gICAgdGhpcy5kZWFsQ2FyZCh0aGlzLnVzZXIpO1xuICAgIHRoaXMuZGVhbENhcmQodGhpcy5kZWFsZXIpO1xuXG4gICAgLy/jgrLjg7zjg6DjgpLoh6rli5Xlrp/ooYxcbiAgICAvL+ODl+ODrOOCpOODpOODvOOBjOOCq+ODvOODieOCkuW8leOBj1xuICAgIGxldCB1c2VySGFuZFN0YXRlOiBIYW5kU3RhdGUgPSB0aGlzLmF1dG9FeGVjSGl0Q2FyZCh0aGlzLnVzZXIpO1xuXG4gICAgc3dpdGNoICh1c2VySGFuZFN0YXRlKSB7XG4gICAgICBjYXNlIEhhbmRTdGF0ZS5CVVNUOlxuICAgICAgICB0aGlzLmxvZ2dlci5zaG93SGFuZFN0YXRlTWVzc2FnZSh0aGlzLnVzZXIsIHVzZXJIYW5kU3RhdGUpO1xuICAgICAgICAvL+ODl+ODrOOCpOODpOODvOOBjOODkOOCueODiOOBl+OBn+aZgueCueOBp+ODl+ODrOOCpOODpOODvOOBruaVl+WMl+OBjOaxuuWumuOBmeOCi1xuICAgICAgICB0aGlzLmxvZ2dlci5zaG93SnVnZU1lc3NhZ2UoSnVkZ2VGbGFnLkRFQUxFUik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgSGFuZFN0YXRlLkJMQUNLSkFDSzpcbiAgICAgICAgdGhpcy5sb2dnZXIuc2hvd0hhbmRTdGF0ZU1lc3NhZ2UodGhpcy51c2VyLCB1c2VySGFuZFN0YXRlKTtcbiAgICAgICAgLy/jg5fjg6zjgqTjg6Tjg7zjgYxCbGFja0phY2vjga7mmYLngrnjgafjg5fjg6zjgqTjg6Tjg7zjga7li53liKnjgYzmsbrlrprjgZnjgotcbiAgICAgICAgdGhpcy5sb2dnZXIuc2hvd0p1Z2VNZXNzYWdlKEp1ZGdlRmxhZy5VU0VSKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBkZWFsZXJIYW5kU3RhdGU6IEhhbmRTdGF0ZSA9IHRoaXMuYXV0b0V4ZWNIaXRDYXJkKHRoaXMuZGVhbGVyKTtcblxuICAgIHN3aXRjaCAoZGVhbGVySGFuZFN0YXRlKSB7XG4gICAgICBjYXNlIEhhbmRTdGF0ZS5CVVNUOlxuICAgICAgICB0aGlzLmxvZ2dlci5zaG93SGFuZFN0YXRlTWVzc2FnZSh0aGlzLmRlYWxlciwgZGVhbGVySGFuZFN0YXRlKTtcbiAgICAgICAgLy/jg4fjgqPjg7zjg6njg7zjgYzjg5Djgrnjg4jjgZfjgZ/mmYLngrnjgafjg5fjg6zjgqTjg6Tjg7zjga7li53liKnjgYzmsbrlrprjgZnjgotcbiAgICAgICAgdGhpcy5sb2dnZXIuc2hvd0p1Z2VNZXNzYWdlKEp1ZGdlRmxhZy5VU0VSKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSBIYW5kU3RhdGUuQkxBQ0tKQUNLOlxuICAgICAgICB0aGlzLmxvZ2dlci5zaG93SGFuZFN0YXRlTWVzc2FnZSh0aGlzLmRlYWxlciwgZGVhbGVySGFuZFN0YXRlKTtcbiAgICAgICAgLy/jg4fjgqPjg7zjg6njg7zjgYxCbGFja0phY2vjga7mmYLngrnjgafjg5fjg6zjgqTjg6Tjg7zjga7mlZfljJfjgYzmsbrlrprjgZnjgotcbiAgICAgICAgdGhpcy5sb2dnZXIuc2hvd0p1Z2VNZXNzYWdlKEp1ZGdlRmxhZy5ERUFMRVIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy/jg5fjg6zjgqTjg6Tjg7zjgIHjg4fjgqPjg7zjg6njg7zjganjgaHjgonjgoLjg5Djgrnjg4jjgIHjg5bjg6njg4Pjgq/jgrjjg6Pjg4Pjgq/jgZjjgoPjgarjgYvjgaPjgZ/ngrrjgIHli53mlZfliKTlrprjgavjgoLjgaTjgozovrzjgoBcbiAgICB0aGlzLmxvZ2dlci5zaG93SnVnZU1lc3NhZ2UodGhpcy5qdWRnZSgpKTtcblxuICAgIC8v44Ky44O844Og44Gu57WC5LqGXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqICDjgrLjg7zjg6DjgpLoh6rli5Xlrp/ooYzjgZnjgotcbiAgICogIOODkOOCueODiO+8mnRydWVcbiAgICogKi9cbiAgcHJpdmF0ZSBhdXRvRXhlY0hpdENhcmQoaHVtYW46IEh1bWFuKTogSGFuZFN0YXRlIHtcbiAgICAvL+aJi+acreOBruWQiOioiOOBjDE35Lul5LiK44Gu5pmC44Gvc3RhbmTjgZnjgotcbiAgICBpZiAoIWh1bWFuLmNoZWNrU3VtKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNoZWNrSGFuZFN0YXRlKGh1bWFuKTtcbiAgICB9XG5cbiAgICAvL+aJi+acreOBruWQiOioiOOBjDE25Lul5LiL44Gu54K644CBaGl044GZ44KLXG4gICAgdGhpcy5oaXRDYXJkKGh1bWFuKTtcblxuICAgIC8v5YaN5biw55qE44Gr5omL5pyt44Gu5ZCI6KiI44GMMTfku6XkuIrjgavjgarjgovjgb7jgaflrp/ooYzjgZnjgotcbiAgICByZXR1cm4gdGhpcy5hdXRvRXhlY0hpdENhcmQoaHVtYW4pO1xuICB9XG5cbiAgLyoqIOaMh+WumuOBleOCjOOBn0h1bWFu44Gr44Kr44O844OJ44KS5LqM5p6a5rih44GZICovXG4gIHB1YmxpYyBkZWFsQ2FyZChodW1uYW46IEh1bWFuKTogdm9pZCB7XG4gICAgaHVtbmFuLnNldENhcmQodGhpcy5kZWFsZXIuZGVhbCgpKTtcbiAgICB0aGlzLmxvZ2dlci5zaG93Q2FyZE1lc3NhZ2UodGhpcy5ERUFMLCBodW1uYW4pO1xuICB9XG5cbiAgLyoqIOaMh+WumuOBleOCjOOBn0h1bWFu44Gr44Kr44O844OJ44KS5LiA5p6a5rih44GZICovXG4gIHB1YmxpYyBoaXRDYXJkKGh1bWFuOiBIdW1hbik6IHZvaWQge1xuICAgIGh1bWFuLnNldENhcmQodGhpcy5kZWFsZXIuaGl0KCkpO1xuICAgIHRoaXMubG9nZ2VyLnNob3dDYXJkTWVzc2FnZSh0aGlzLkhJVCwgaHVtYW4pO1xuICB9XG5cbiAgLyoqIOaJi+acreOCkuODquOCu+ODg+ODiOOBmeOCiyAqL1xuICBwcml2YXRlIHJlc2V0SGFuZCgpOiB2b2lkIHtcbiAgICB0aGlzLmRlYWxlci5yZXNldEhuYWQoKTtcbiAgICB0aGlzLnVzZXIucmVzZXRIbmFkKCk7XG4gIH1cblxuICAvKiog5Yud5pWX44KS5Yik5a6a44GZ44KLICovXG4gIHByaXZhdGUganVkZ2UoKTogSnVkZ2VGbGFnIHtcbiAgICBsZXQgdXNlclN1bSA9IHRoaXMudXNlci5vcGVuKCk7XG4gICAgbGV0IGRlYWxlclN1bSA9IHRoaXMuZGVhbGVyLm9wZW4oKTtcblxuICAgIHJldHVybiB1c2VyU3VtID4gZGVhbGVyU3VtID8gSnVkZ2VGbGFnLlVTRVIgOiB1c2VyU3VtIDwgZGVhbGVyU3VtID8gSnVkZ2VGbGFnLkRFQUxFUiA6IEp1ZGdlRmxhZy5EUk9XO1xuICB9XG5cbiAgLyoqIGhpdOe1guS6huW+jOOBruODj+ODs+ODieOBrueKtuaFi+OCkuWIpOWumiAqL1xuICBwcml2YXRlIGNoZWNrSGFuZFN0YXRlKGh1bWFuOiBIdW1hbik6IEhhbmRTdGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tCdXN0KGh1bWFuKSA/IEhhbmRTdGF0ZS5CVVNUIDogdGhpcy5jaGVja0JsYWNrSmFjayhodW1hbikgPyBIYW5kU3RhdGUuQkxBQ0tKQUNLIDogSGFuZFN0YXRlLlNUQU5ESU5HO1xuICB9XG5cbiAgLyoqXG4gICAqIOODkOOCueODiOOBl+OBpuOBhOOCi+OBi+WIpOWumuOBmeOCi1xuICAgKiBAcGFyYW0gaHVtYW4gXG4gICAqL1xuICBwcml2YXRlIGNoZWNrQnVzdChodW1hbjogSHVtYW4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gaHVtYW4ub3BlbigpID4gMjE7XG4gIH1cblxuICAvKipcbiAgICogQmxhY2tKYWNr44GL44OB44Kn44OD44Kv44GZ44KLXG4gICAqIEBwYXJhbSBodW1hbiBcbiAgICovXG4gIHByaXZhdGUgY2hlY2tCbGFja0phY2soaHVtYW46IEh1bWFuKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGh1bWFuLm9wZW4oKSA9PT0gMjE7XG4gIH1cbn1cblxuLyoqIOODreOCsOOBruWItuW+oSAqL1xuY2xhc3MgTG9nZ2VyIHtcblxuICAvKiog44OH44Kj44O844Op44O8ICovXG4gIHByaXZhdGUgZGVhbGVyOiBEZWFsZXI7XG4gIC8qKiDjg6bjg7zjgrbjg7wgKi9cbiAgcHJpdmF0ZSB1c2VyOiBVc2VyO1xuXG4gIC8qKiDjg4fjgqPjg7zjg6njg7zjgajjg6bjg7zjgrbjg7zjgpLliJ3mnJ/ljJYgKi9cbiAgY29uc3RydWN0b3IoZGVhbGVyOiBEZWFsZXIsIHVzZXI6IFVzZXIpIHtcbiAgICB0aGlzLmRlYWxlciA9IGRlYWxlcjtcbiAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICB9XG5cbiAgLyoqIOWIpOWumuODoeODg+OCu+ODvOOCuOOCkuihqOekuuOBmeOCiyAqL1xuICBwdWJsaWMgc2hvd0p1Z2VNZXNzYWdlKGp1ZGdlRmxhZzogSnVkZ2VGbGFnLCBoYW5kc3RhdGU6IEhhbmRTdGF0ZSA9IG51bGwpIHtcbiAgICBsZXQgbWVzc2FnZTogc3RyaW5nO1xuICAgIGxldCBjcmVhdGVNZXNzYWdlID0gKGh1bWFuOiBIdW1hbikgPT4gYCR7IGh1bWFuLmdldE5hbWUoKSB944GM5Yud5Yip44GX44G+44GX44Gf44CCYDtcblxuICAgIHN3aXRjaCAoanVkZ2VGbGFnKSB7XG4gICAgICBjYXNlIEp1ZGdlRmxhZy5VU0VSOiAvL+ODpuODvOOCtuODvOOBruWLneWIqVxuICAgICAgICBtZXNzYWdlID0gY3JlYXRlTWVzc2FnZSh0aGlzLnVzZXIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgSnVkZ2VGbGFnLkRFQUxFUjogLy/jg4fjgqPjg7zjg6njg7zjga7li53liKlcbiAgICAgICAgbWVzc2FnZSA9IGNyZWF0ZU1lc3NhZ2UodGhpcy5kZWFsZXIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgSnVkZ2VGbGFnLkRST1c6IC8v5byV44GN5YiG44GRXG4gICAgICAgIG1lc3NhZ2UgPSAn5byV44GN5YiG44GR44Gn44GZ44CCJztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5zaG93TWVzc2FnZShtZXNzYWdlKTtcbiAgfVxuXG4gIC8qKiDmiYvmnK3jga7mg4XloLHjgpLooajnpLrjgZnjgosgKi9cbiAgcHVibGljIHNob3dDYXJkTWVzc2FnZShhY3Rpb246IHN0cmluZywgaHVtYW46IEh1bWFuKTogdm9pZCB7XG4gICAgbGV0IG1lc3NhZ2U6IHN0cmluZyA9IGBb44OX44Os44Kk44Ok44O8Xe+8miR7IGh1bWFuLmdldE5hbWUoKSB9LFvjgqLjgq/jgrfjg6fjg7Nd77yaJHsgYWN0aW9uIH0sICBb44OP44Oz44OJXe+8miR7IGh1bWFuLmdldENhcmRMaXN0KCkudG9TdHJpbmcoKSB9LCBb5ZCI6KiIXe+8miR7IGh1bWFuLm9wZW4oKSB9YDtcbiAgICB0aGlzLnNob3dNZXNzYWdlKG1lc3NhZ2UpO1xuXG4gIH1cblxuICAvKiog5omL5pyt44Gu54q25oWL44KS6KGo56S644GZ44KLICovXG4gIHB1YmxpYyBzaG93SGFuZFN0YXRlTWVzc2FnZShodW1hbjogSHVtYW4sIGhhbmRzdGF0ZTogSGFuZFN0YXRlKTogdm9pZCB7XG4gICAgbGV0IG1lc3NhZ2UgPSBgJHsgaHVtYW4uZ2V0TmFtZSgpIH3jga8keyBIYW5kU3RhdGVbaGFuZHN0YXRlXSB944Gr44Gq44KK44G+44GX44GfYDtcbiAgICB0aGlzLnNob3dNZXNzYWdlKG1lc3NhZ2UpO1xuICB9XG5cbiAgLyoqIOODoeODg+OCu+ODvOOCuOOCkuODreOCsOOBq+WHuuWKm+OBmeOCiyAqL1xuICBwcml2YXRlIHNob3dNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICB9XG59XG5cbi8vQmxhY2tKYWNr44Kk44Oz44K544K/44Oz44K544KS55Sf5oiQXG5jb25zdCBibGFja0phY2sgPSBuZXcgQmxhY2tKYWNrKCk7XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykgeyBcbiAgLy/jgrLjg7zjg6DjgpLlp4vjgoHjgotcbiAgYmxhY2tKYWNrLmV4ZWNHYW1lKCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==