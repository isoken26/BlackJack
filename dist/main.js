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

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * abstract抽象クラス
 */
var Human = /** @class */ (function () {
    function Human() {
        //手札を初期化する
        this.resetHnad();
    }
    /** 手札をリセットする */
    Human.prototype.resetHnad = function () {
        this.myCards = new Array();
    };
    ;
    /** 手札を合計するロジック */
    Human.prototype.myCardsCalc = function () {
        return function (accum, currentValue, idx) {
            if (idx === 0) {
                accum = accum < 11 ? accum : 10;
            }
            return accum + (currentValue < 11 ? currentValue : 10);
        };
    };
    /** 手札の配列を返す */
    Human.prototype.getCardList = function () {
        return this.myCards;
    };
    return Human;
}());
/**
 * ディーラークラス
 */
var Dealer = /** @class */ (function (_super) {
    __extends(Dealer, _super);
    function Dealer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 全てのカードを初期値として持つ */
        _this.cards = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 //ダイヤ
        ];
        return _this;
    }
    /** 名前を取得する */
    Dealer.prototype.getName = function () {
        return 'ディーラー';
    };
    /** カードをシャッフルする */
    Dealer.prototype.shuftle = function () {
        var _a;
        this.cards = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 //ダイヤ
        ];
        for (var i = this.cards.length - 1; i >= 0; i--) {
            //0〜52のランダムな数値を取得
            var rand = Math.floor(Math.random() * (i + 1));
            //配列の数値を入れ替える
            _a = [this.cards[rand], this.cards[i]], this.cards[i] = _a[0], this.cards[rand] = _a[1];
        }
    };
    /** cardsからランダムで2枚のカードをArrayListで返す */
    Dealer.prototype.deal = function () {
        return this.cards.filter(function (v, i, a) {
            if (i > 1)
                return false;
            //配列の先頭から要素を削除
            a.shift();
            //2枚のカードを配列として返す
            return true;
        });
    };
    /** cardsからランダムで1枚のカードをArrayListで返す */
    Dealer.prototype.hit = function () {
        return this.cards.filter(function (v, i, a) {
            if (i > 0)
                return false;
            //配列の先頭から要素を削除
            a.shift();
            //1枚のカードを配列として返す
            return true;
        });
    };
    /** myCardsの合計値を返す */
    Dealer.prototype.open = function () {
        return this.myCards.reduce(this.myCardsCalc());
    };
    /** カードをセットする */
    Dealer.prototype.setCard = function (arrList) {
        this.myCards = this.myCards.concat(arrList);
    };
    /** 手札をリセットする */
    Dealer.prototype.resetHnad = function () {
        this.myCards = new Array();
    };
    /**
     * myCardsを確認し、まだカードが必要ならtrue,
     * 必要なければ falseを返す
     * */
    Dealer.prototype.checkSum = function () {
        //手札の合計が16以下の場合はhit,17以上はstand
        return this.open() < 17;
    };
    return Dealer;
}(Human));
/**
 * ユーザークラス
 */
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** myCardsの合計値を返す */
    User.prototype.open = function () {
        return this.myCards.reduce(this.myCardsCalc());
    };
    /** 名前を取得する */
    User.prototype.getName = function () {
        return 'ユーザー';
    };
    /** カードをセットする */
    User.prototype.setCard = function (arrList) {
        this.myCards = this.myCards.concat(arrList);
    };
    /**
     * myCardsを確認し、まだカードが必要ならtrue,
     * 必要なければ falseを返す
     * */
    User.prototype.checkSum = function () {
        //手札の合計が16以下の場合はhit,17以上はstand
        return this.myCards.reduce(this.myCardsCalc()) < 17;
    };
    return User;
}(Human));
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
var BlackJack = /** @class */ (function () {
    /** ユーザーとディーラーを初期化する */
    function BlackJack() {
        /** アクション名の定数 */
        this.HIT = 'hit';
        this.DEAL = 'deal';
        this.dealer = new Dealer();
        this.user = new User();
        this.logger = new Logger(this.dealer, this.user);
    }
    /** ゲームを実行する */
    BlackJack.prototype.execGame = function () {
        //UserとDealerの手札をリセットする。
        this.resetHand();
        //手札をシャッフルする
        this.dealer.shuftle();
        //カードを配る
        this.dealCard(this.user);
        this.dealCard(this.dealer);
        //ゲームを自動実行
        //プレイヤーがカードを引く
        var userHandState = this.autoExecHitCard(this.user);
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
        var dealerHandState = this.autoExecHitCard(this.dealer);
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
    };
    /**
     *  ゲームを自動実行する
     *  バスト：true
     * */
    BlackJack.prototype.autoExecHitCard = function (human) {
        //手札の合計が17以上の時はstandする
        if (!human.checkSum()) {
            return this.checkHandState(human);
        }
        //手札の合計が16以下の為、hitする
        this.hitCard(human);
        //再帰的に手札の合計が17以上になるまで実行する
        return this.autoExecHitCard(human);
    };
    /** 指定されたHumanにカードを二枚渡す */
    BlackJack.prototype.dealCard = function (humnan) {
        humnan.setCard(this.dealer.deal());
        this.logger.showCardMessage(this.DEAL, humnan);
    };
    /** 指定されたHumanにカードを一枚渡す */
    BlackJack.prototype.hitCard = function (human) {
        human.setCard(this.dealer.hit());
        this.logger.showCardMessage(this.HIT, human);
    };
    /** 手札をリセットする */
    BlackJack.prototype.resetHand = function () {
        this.dealer.resetHnad();
        this.user.resetHnad();
    };
    /** 勝敗を判定する */
    BlackJack.prototype.judge = function () {
        var userSum = this.user.open();
        var dealerSum = this.dealer.open();
        return userSum > dealerSum ? JudgeFlag.USER : userSum < dealerSum ? JudgeFlag.DEALER : JudgeFlag.DROW;
    };
    /** hit終了後のハンドの状態を判定 */
    BlackJack.prototype.checkHandState = function (human) {
        return this.checkBust(human) ? HandState.BUST : this.checkBlackJack(human) ? HandState.BLACKJACK : HandState.STANDING;
    };
    /**
     * バストしているか判定する
     * @param human
     */
    BlackJack.prototype.checkBust = function (human) {
        return human.open() > 21;
    };
    /**
     * BlackJackかチェックする
     * @param human
     */
    BlackJack.prototype.checkBlackJack = function (human) {
        return human.open() === 21;
    };
    return BlackJack;
}());
/** ログの制御 */
var Logger = /** @class */ (function () {
    /** ディーラーとユーザーを初期化 */
    function Logger(dealer, user) {
        this.dealer = dealer;
        this.user = user;
    }
    /** 判定メッセージを表示する */
    Logger.prototype.showJugeMessage = function (judgeFlag, handstate) {
        if (handstate === void 0) { handstate = null; }
        var message;
        var createMessage = function (human) { return human.getName() + "\u304C\u52DD\u5229\u3057\u307E\u3057\u305F\u3002"; };
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
    };
    /** 手札の情報を表示する */
    Logger.prototype.showCardMessage = function (action, human) {
        var message = "[\u30D7\u30EC\u30A4\u30E4\u30FC]\uFF1A" + human.getName() + ",[\u30A2\u30AF\u30B7\u30E7\u30F3]\uFF1A" + action + ",  [\u30CF\u30F3\u30C9]\uFF1A" + human.getCardList().toString() + ", [\u5408\u8A08]\uFF1A" + human.open();
        this.showMessage(message);
    };
    /** 手札の状態を表示する */
    Logger.prototype.showHandStateMessage = function (human, handstate) {
        var message = human.getName() + "\u306F" + HandState[handstate] + "\u306B\u306A\u308A\u307E\u3057\u305F";
        this.showMessage(message);
    };
    /** メッセージをログに出力する */
    Logger.prototype.showMessage = function (message) {
        console.log(message);
    };
    return Logger;
}());
//BlackJackインスタンスを生成
var blackJack = new BlackJack();
//ゲームを始める
blackJack.execGame();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRkE7O0dBRUc7QUFDSDtJQUVFO1FBQ0UsVUFBVTtRQUNWLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBaUJELGdCQUFnQjtJQUNULHlCQUFTLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFDO0lBQ3JDLENBQUM7SUFBQSxDQUFDO0lBRUYsa0JBQWtCO0lBQ1IsMkJBQVcsR0FBckI7UUFDRSxPQUFPLFVBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxHQUFHO1lBQzlCLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtnQkFDYixLQUFLLEdBQUcsS0FB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QUNUO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsaUJBQWlCO0lBQ1YsZ0NBQWUsR0FBdEIsVUFBdUIsTUFBYyxFQUFFLEtBQVk7UUFDakQsSUFBSSxPQUFPLEdBQVcsMkNBQVksS0FBSyxDQUFDLE9BQU8sRUFBRSwrQ0FBYyxNQUFNLHFDQUFjLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLEVBQUUsOEJBQVksS0FBSyxDQUFDLElBQUksRUFBSyxDQUFDO1FBQzdJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFNUIsQ0FBQztJQUVELGlCQUFpQjtJQUNWLHFDQUFvQixHQUEzQixVQUE0QixLQUFZLEVBQUUsU0FBb0I7UUFDNUQsSUFBSSxPQUFPLEdBQU8sS0FBSyxDQUFDLE9BQU8sRUFBRSxjQUFNLFNBQVMsQ0FBQyxTQUFTLENBQUMseUNBQVMsQ0FBQztRQUNyRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxvQkFBb0I7SUFDWiw0QkFBVyxHQUFuQixVQUFvQixPQUFlO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUNILGFBQUM7QUFBRCxDQUFDO0FBRUQsb0JBQW9CO0FBQ3BCLElBQU0sU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7QUFFbEMsU0FBUztBQUNULFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBkZWJ1ZyB9IGZyb20gXCJ1dGlsXCI7XG5cbi8qKlxuICogYWJzdHJhY3Tmir3osaHjgq/jg6njgrlcbiAqL1xuYWJzdHJhY3QgY2xhc3MgSHVtYW4ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8v5omL5pyt44KS5Yid5pyf5YyW44GZ44KLXG4gICAgdGhpcy5yZXNldEhuYWQoKTtcbiAgfVxuXG4gIC8qKiDlkI3liY3jgpLlj5blvpfjgZnjgosgKi9cbiAgcHVibGljIGFic3RyYWN0IGdldE5hbWUoKTogc3RyaW5nO1xuXG4gIC8qKiDmiYvmnK0gKi9cbiAgcHJvdGVjdGVkIG15Q2FyZHM6IEFycmF5PG51bWJlcj47XG5cbiAgLyoqIG9wZW7jga7mir3osaHjg6Hjgr3jg4Pjg4kgKi9cbiAgcHVibGljIGFic3RyYWN0IG9wZW4oKTogbnVtYmVyO1xuXG4gIC8qKiDjgqvjg7zjg4njgpLjgrvjg4Pjg4jjgZnjgothYnN0cmFjdOODoeOCveODg+ODiSAqL1xuICBwdWJsaWMgYWJzdHJhY3Qgc2V0Q2FyZChhcnJMaXN0OiBBcnJheTxudW1iZXI+KTogdm9pZDtcblxuICAvKiog44Kr44O844OJ44KS44OB44Kn44OD44Kv44GZ44KLYWJzdHJhY3Tjg6Hjgr3jg4Pjg4kgKi9cbiAgcHVibGljIGFic3RyYWN0IGNoZWNrU3VtKCk6IGJvb2xlYW47XG5cbiAgLyoqIOaJi+acreOCkuODquOCu+ODg+ODiOOBmeOCiyAqL1xuICBwdWJsaWMgcmVzZXRIbmFkKCk6IHZvaWQge1xuICAgIHRoaXMubXlDYXJkcyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG4gIH07XG5cbiAgLyoqIOaJi+acreOCkuWQiOioiOOBmeOCi+ODreOCuOODg+OCryAqL1xuICBwcm90ZWN0ZWQgbXlDYXJkc0NhbGMoKSB7XG4gICAgcmV0dXJuIChhY2N1bSwgY3VycmVudFZhbHVlLCBpZHgpOiBudW1iZXIgPT4ge1xuICAgICAgaWYgKGlkeCA9PT0gMCkge1xuICAgICAgICBhY2N1bSA9IGFjY3VtIDwgMTEgPyBhY2N1bSA6IDEwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjY3VtICsgKGN1cnJlbnRWYWx1ZSA8IDExID8gY3VycmVudFZhbHVlIDogMTApO1xuICAgIH1cbiAgfVxuXG4gIC8qKiDmiYvmnK3jga7phY3liJfjgpLov5TjgZkgKi9cbiAgcHVibGljIGdldENhcmRMaXN0KCk6IEFycmF5PG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLm15Q2FyZHM7XG4gIH1cbn1cblxuLyoqXG4gKiDjg4fjgqPjg7zjg6njg7zjgq/jg6njgrlcbiAqL1xuY2xhc3MgRGVhbGVyIGV4dGVuZHMgSHVtYW4ge1xuXG4gIC8qKiDlhajjgabjga7jgqvjg7zjg4njgpLliJ3mnJ/lgKTjgajjgZfjgabmjIHjgaQgKi9cbiAgcHJpdmF0ZSBjYXJkczogQXJyYXk8bnVtYmVyPiA9IFtcbiAgICAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgLy/jg4/jg7zjg4hcbiAgICAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgLy/jgrnjg5rjg7zjg4lcbiAgICAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgLy/jgq/jg6njg5ZcbiAgICAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMyAgLy/jg4DjgqTjg6RcbiAgXTtcblxuICAvKiog5ZCN5YmN44KS5Y+W5b6X44GZ44KLICovXG4gIHB1YmxpYyBnZXROYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICfjg4fjgqPjg7zjg6njg7wnO1xuICB9XG5cbiAgLyoqIOOCq+ODvOODieOCkuOCt+ODo+ODg+ODleODq+OBmeOCiyAqL1xuICBwdWJsaWMgc2h1ZnRsZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNhcmRzID0gW1xuICAgICAgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMiwgMTMsIC8v44OP44O844OIXG4gICAgICAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgLy/jgrnjg5rjg7zjg4lcbiAgICAgIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAvL+OCr+ODqeODllxuICAgICAgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMiwgMTMgIC8v44OA44Kk44OkXG4gICAgXTtcblxuICAgIGZvciAobGV0IGkgPSB0aGlzLmNhcmRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cbiAgICAgIC8vMOOAnDUy44Gu44Op44Oz44OA44Og44Gq5pWw5YCk44KS5Y+W5b6XXG4gICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuXG4gICAgICAvL+mFjeWIl+OBruaVsOWApOOCkuWFpeOCjOabv+OBiOOCi1xuICAgICAgW3RoaXMuY2FyZHNbaV0sIHRoaXMuY2FyZHNbcmFuZF1dID0gW3RoaXMuY2FyZHNbcmFuZF0sIHRoaXMuY2FyZHNbaV1dO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBjYXJkc+OBi+OCieODqeODs+ODgOODoOOBpzLmnprjga7jgqvjg7zjg4njgpJBcnJheUxpc3Tjgafov5TjgZkgKi9cbiAgcHVibGljIGRlYWwoKTogQXJyYXk8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuY2FyZHMuZmlsdGVyKCh2LCBpLCBhKSA9PiB7XG4gICAgICBpZiAoaSA+IDEpIHJldHVybiBmYWxzZTtcbiAgICAgIC8v6YWN5YiX44Gu5YWI6aCt44GL44KJ6KaB57Sg44KS5YmK6ZmkXG4gICAgICBhLnNoaWZ0KCk7XG4gICAgICAvLzLmnprjga7jgqvjg7zjg4njgpLphY3liJfjgajjgZfjgabov5TjgZlcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIGNhcmRz44GL44KJ44Op44Oz44OA44Og44GnMeaemuOBruOCq+ODvOODieOCkkFycmF5TGlzdOOBp+i/lOOBmSAqL1xuICBwdWJsaWMgaGl0KCk6IEFycmF5PG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLmNhcmRzLmZpbHRlcigodiwgaSwgYSkgPT4ge1xuICAgICAgaWYgKGkgPiAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAvL+mFjeWIl+OBruWFiOmgreOBi+OCieimgee0oOOCkuWJiumZpFxuICAgICAgYS5zaGlmdCgpO1xuICAgICAgLy8x5p6a44Gu44Kr44O844OJ44KS6YWN5YiX44Go44GX44Gm6L+U44GZXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBteUNhcmRz44Gu5ZCI6KiI5YCk44KS6L+U44GZICovXG4gIHB1YmxpYyBvcGVuKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubXlDYXJkcy5yZWR1Y2UodGhpcy5teUNhcmRzQ2FsYygpKTtcbiAgfVxuXG4gIC8qKiDjgqvjg7zjg4njgpLjgrvjg4Pjg4jjgZnjgosgKi9cbiAgcHVibGljIHNldENhcmQoYXJyTGlzdDogQXJyYXk8bnVtYmVyPikge1xuICAgIHRoaXMubXlDYXJkcyA9IHRoaXMubXlDYXJkcy5jb25jYXQoYXJyTGlzdCk7XG4gIH1cblxuICAvKiog5omL5pyt44KS44Oq44K744OD44OI44GZ44KLICovXG4gIHB1YmxpYyByZXNldEhuYWQoKTogdm9pZCB7XG4gICAgdGhpcy5teUNhcmRzID0gbmV3IEFycmF5PG51bWJlcj4oKTtcbiAgfVxuXG4gIC8qKiBcbiAgICogbXlDYXJkc+OCkueiuuiqjeOBl+OAgeOBvuOBoOOCq+ODvOODieOBjOW/heimgeOBquOCiXRydWUsXG4gICAqIOW/heimgeOBquOBkeOCjOOBsCBmYWxzZeOCkui/lOOBmVxuICAgKiAqL1xuICBwdWJsaWMgY2hlY2tTdW0oKTogYm9vbGVhbiB7XG4gICAgLy/miYvmnK3jga7lkIjoqIjjgYwxNuS7peS4i+OBruWgtOWQiOOBr2hpdCwxN+S7peS4iuOBr3N0YW5kXG4gICAgcmV0dXJuIHRoaXMub3BlbigpIDwgMTc7XG4gIH1cbn1cblxuLyoqXG4gKiDjg6bjg7zjgrbjg7zjgq/jg6njgrlcbiAqL1xuY2xhc3MgVXNlciBleHRlbmRzIEh1bWFuIHtcbiAgLyoqIG15Q2FyZHPjga7lkIjoqIjlgKTjgpLov5TjgZkgKi9cbiAgcHVibGljIG9wZW4oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5teUNhcmRzLnJlZHVjZSh0aGlzLm15Q2FyZHNDYWxjKCkpO1xuICB9XG5cbiAgLyoqIOWQjeWJjeOCkuWPluW+l+OBmeOCiyAqL1xuICBwdWJsaWMgZ2V0TmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAn44Om44O844K244O8JztcbiAgfVxuICAvKiog44Kr44O844OJ44KS44K744OD44OI44GZ44KLICovXG4gIHB1YmxpYyBzZXRDYXJkKGFyckxpc3Q6IEFycmF5PG51bWJlcj4pIHtcbiAgICB0aGlzLm15Q2FyZHMgPSB0aGlzLm15Q2FyZHMuY29uY2F0KGFyckxpc3QpO1xuICB9XG5cbiAgLyoqIFxuICAgKiBteUNhcmRz44KS56K66KqN44GX44CB44G+44Gg44Kr44O844OJ44GM5b+F6KaB44Gq44KJdHJ1ZSxcbiAgICog5b+F6KaB44Gq44GR44KM44GwIGZhbHNl44KS6L+U44GZXG4gICAqICovXG4gIHB1YmxpYyBjaGVja1N1bSgpOiBib29sZWFuIHtcbiAgICAvL+aJi+acreOBruWQiOioiOOBjDE25Lul5LiL44Gu5aC05ZCI44GvaGl0LDE35Lul5LiK44Gvc3RhbmRcbiAgICByZXR1cm4gdGhpcy5teUNhcmRzLnJlZHVjZSh0aGlzLm15Q2FyZHNDYWxjKCkpIDwgMTc7XG4gIH1cbn1cblxuLyoqIOWLneaVl+WIpOWumuODleODqeOCsCAqL1xuZW51bSBKdWRnZUZsYWcge1xuICBERUFMRVIgPSAwLFxuICBVU0VSID0gMSxcbiAgRFJPVyA9IDJcbn1cblxuLyoqIOaJi+acreOBrueKtuaFi+ODleODqeOCsCAqL1xuZW51bSBIYW5kU3RhdGUge1xuICBCVVNUID0gMCxcbiAgQkxBQ0tKQUNLID0gMSxcbiAgU1RBTkRJTkcgPSAyXG59XG5cbi8qKiBCbGFja0phY2vjgq/jg6njgrkgKi9cbmNsYXNzIEJsYWNrSmFjayB7XG4gIC8qKiDjg4fjgqPjg7zjg6njg7wgKi9cbiAgcHJpdmF0ZSBkZWFsZXI6IERlYWxlcjtcbiAgLyoqIOODpuODvOOCtuODvCAqL1xuICBwcml2YXRlIHVzZXI6IFVzZXI7XG5cbiAgLyoqIOODreOCsOOBrueuoeeQhiAqL1xuICBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyO1xuXG4gIC8qKiDjgqLjgq/jgrfjg6fjg7PlkI3jga7lrprmlbAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBISVQ6IHN0cmluZyA9ICdoaXQnO1xuICBwcml2YXRlIHJlYWRvbmx5IERFQUw6IHN0cmluZyA9ICdkZWFsJztcblxuICAvKiog44Om44O844K244O844Go44OH44Kj44O844Op44O844KS5Yid5pyf5YyW44GZ44KLICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGVhbGVyID0gbmV3IERlYWxlcigpO1xuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgdGhpcy5sb2dnZXIgPSBuZXcgTG9nZ2VyKHRoaXMuZGVhbGVyLCB0aGlzLnVzZXIpO1xuICB9XG5cbiAgLyoqIOOCsuODvOODoOOCkuWun+ihjOOBmeOCiyAqL1xuICBwdWJsaWMgZXhlY0dhbWUoKTogdm9pZCB7XG5cbiAgICAvL1VzZXLjgahEZWFsZXLjga7miYvmnK3jgpLjg6rjgrvjg4Pjg4jjgZnjgovjgIJcbiAgICB0aGlzLnJlc2V0SGFuZCgpO1xuXG4gICAgLy/miYvmnK3jgpLjgrfjg6Pjg4Pjg5Xjg6vjgZnjgotcbiAgICB0aGlzLmRlYWxlci5zaHVmdGxlKCk7XG5cbiAgICAvL+OCq+ODvOODieOCkumFjeOCi1xuICAgIHRoaXMuZGVhbENhcmQodGhpcy51c2VyKTtcbiAgICB0aGlzLmRlYWxDYXJkKHRoaXMuZGVhbGVyKTtcblxuICAgIC8v44Ky44O844Og44KS6Ieq5YuV5a6f6KGMXG4gICAgLy/jg5fjg6zjgqTjg6Tjg7zjgYzjgqvjg7zjg4njgpLlvJXjgY9cbiAgICBsZXQgdXNlckhhbmRTdGF0ZTogSGFuZFN0YXRlID0gdGhpcy5hdXRvRXhlY0hpdENhcmQodGhpcy51c2VyKTtcblxuICAgIHN3aXRjaCAodXNlckhhbmRTdGF0ZSkge1xuICAgICAgY2FzZSBIYW5kU3RhdGUuQlVTVDpcbiAgICAgICAgdGhpcy5sb2dnZXIuc2hvd0hhbmRTdGF0ZU1lc3NhZ2UodGhpcy51c2VyLCB1c2VySGFuZFN0YXRlKTtcbiAgICAgICAgLy/jg5fjg6zjgqTjg6Tjg7zjgYzjg5Djgrnjg4jjgZfjgZ/mmYLngrnjgafjg5fjg6zjgqTjg6Tjg7zjga7mlZfljJfjgYzmsbrlrprjgZnjgotcbiAgICAgICAgdGhpcy5sb2dnZXIuc2hvd0p1Z2VNZXNzYWdlKEp1ZGdlRmxhZy5ERUFMRVIpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIEhhbmRTdGF0ZS5CTEFDS0pBQ0s6XG4gICAgICAgIHRoaXMubG9nZ2VyLnNob3dIYW5kU3RhdGVNZXNzYWdlKHRoaXMudXNlciwgdXNlckhhbmRTdGF0ZSk7XG4gICAgICAgIC8v44OX44Os44Kk44Ok44O844GMQmxhY2tKYWNr44Gu5pmC54K544Gn44OX44Os44Kk44Ok44O844Gu5Yud5Yip44GM5rG65a6a44GZ44KLXG4gICAgICAgIHRoaXMubG9nZ2VyLnNob3dKdWdlTWVzc2FnZShKdWRnZUZsYWcuVVNFUik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZGVhbGVySGFuZFN0YXRlOiBIYW5kU3RhdGUgPSB0aGlzLmF1dG9FeGVjSGl0Q2FyZCh0aGlzLmRlYWxlcik7XG5cbiAgICBzd2l0Y2ggKGRlYWxlckhhbmRTdGF0ZSkge1xuICAgICAgY2FzZSBIYW5kU3RhdGUuQlVTVDpcbiAgICAgICAgdGhpcy5sb2dnZXIuc2hvd0hhbmRTdGF0ZU1lc3NhZ2UodGhpcy5kZWFsZXIsIGRlYWxlckhhbmRTdGF0ZSk7XG4gICAgICAgIC8v44OH44Kj44O844Op44O844GM44OQ44K544OI44GX44Gf5pmC54K544Gn44OX44Os44Kk44Ok44O844Gu5Yud5Yip44GM5rG65a6a44GZ44KLXG4gICAgICAgIHRoaXMubG9nZ2VyLnNob3dKdWdlTWVzc2FnZShKdWRnZUZsYWcuVVNFUik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgSGFuZFN0YXRlLkJMQUNLSkFDSzpcbiAgICAgICAgdGhpcy5sb2dnZXIuc2hvd0hhbmRTdGF0ZU1lc3NhZ2UodGhpcy5kZWFsZXIsIGRlYWxlckhhbmRTdGF0ZSk7XG4gICAgICAgIC8v44OH44Kj44O844Op44O844GMQmxhY2tKYWNr44Gu5pmC54K544Gn44OX44Os44Kk44Ok44O844Gu5pWX5YyX44GM5rG65a6a44GZ44KLXG4gICAgICAgIHRoaXMubG9nZ2VyLnNob3dKdWdlTWVzc2FnZShKdWRnZUZsYWcuREVBTEVSKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8v44OX44Os44Kk44Ok44O844CB44OH44Kj44O844Op44O844Gp44Gh44KJ44KC44OQ44K544OI44CB44OW44Op44OD44Kv44K444Oj44OD44Kv44GY44KD44Gq44GL44Gj44Gf54K644CB5Yud5pWX5Yik5a6a44Gr44KC44Gk44KM6L6844KAXG4gICAgdGhpcy5sb2dnZXIuc2hvd0p1Z2VNZXNzYWdlKHRoaXMuanVkZ2UoKSk7XG5cbiAgICAvL+OCsuODvOODoOOBrue1guS6hlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiAg44Ky44O844Og44KS6Ieq5YuV5a6f6KGM44GZ44KLXG4gICAqICDjg5Djgrnjg4jvvJp0cnVlXG4gICAqICovXG4gIHByaXZhdGUgYXV0b0V4ZWNIaXRDYXJkKGh1bWFuOiBIdW1hbik6IEhhbmRTdGF0ZSB7XG4gICAgLy/miYvmnK3jga7lkIjoqIjjgYwxN+S7peS4iuOBruaZguOBr3N0YW5k44GZ44KLXG4gICAgaWYgKCFodW1hbi5jaGVja1N1bSgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja0hhbmRTdGF0ZShodW1hbik7XG4gICAgfVxuXG4gICAgLy/miYvmnK3jga7lkIjoqIjjgYwxNuS7peS4i+OBrueCuuOAgWhpdOOBmeOCi1xuICAgIHRoaXMuaGl0Q2FyZChodW1hbik7XG5cbiAgICAvL+WGjeW4sOeahOOBq+aJi+acreOBruWQiOioiOOBjDE35Lul5LiK44Gr44Gq44KL44G+44Gn5a6f6KGM44GZ44KLXG4gICAgcmV0dXJuIHRoaXMuYXV0b0V4ZWNIaXRDYXJkKGh1bWFuKTtcbiAgfVxuXG4gIC8qKiDmjIflrprjgZXjgozjgZ9IdW1hbuOBq+OCq+ODvOODieOCkuS6jOaemua4oeOBmSAqL1xuICBwdWJsaWMgZGVhbENhcmQoaHVtbmFuOiBIdW1hbik6IHZvaWQge1xuICAgIGh1bW5hbi5zZXRDYXJkKHRoaXMuZGVhbGVyLmRlYWwoKSk7XG4gICAgdGhpcy5sb2dnZXIuc2hvd0NhcmRNZXNzYWdlKHRoaXMuREVBTCwgaHVtbmFuKTtcbiAgfVxuXG4gIC8qKiDmjIflrprjgZXjgozjgZ9IdW1hbuOBq+OCq+ODvOODieOCkuS4gOaemua4oeOBmSAqL1xuICBwdWJsaWMgaGl0Q2FyZChodW1hbjogSHVtYW4pOiB2b2lkIHtcbiAgICBodW1hbi5zZXRDYXJkKHRoaXMuZGVhbGVyLmhpdCgpKTtcbiAgICB0aGlzLmxvZ2dlci5zaG93Q2FyZE1lc3NhZ2UodGhpcy5ISVQsIGh1bWFuKTtcbiAgfVxuXG4gIC8qKiDmiYvmnK3jgpLjg6rjgrvjg4Pjg4jjgZnjgosgKi9cbiAgcHJpdmF0ZSByZXNldEhhbmQoKTogdm9pZCB7XG4gICAgdGhpcy5kZWFsZXIucmVzZXRIbmFkKCk7XG4gICAgdGhpcy51c2VyLnJlc2V0SG5hZCgpO1xuICB9XG5cbiAgLyoqIOWLneaVl+OCkuWIpOWumuOBmeOCiyAqL1xuICBwcml2YXRlIGp1ZGdlKCk6IEp1ZGdlRmxhZyB7XG4gICAgbGV0IHVzZXJTdW0gPSB0aGlzLnVzZXIub3BlbigpO1xuICAgIGxldCBkZWFsZXJTdW0gPSB0aGlzLmRlYWxlci5vcGVuKCk7XG5cbiAgICByZXR1cm4gdXNlclN1bSA+IGRlYWxlclN1bSA/IEp1ZGdlRmxhZy5VU0VSIDogdXNlclN1bSA8IGRlYWxlclN1bSA/IEp1ZGdlRmxhZy5ERUFMRVIgOiBKdWRnZUZsYWcuRFJPVztcbiAgfVxuXG4gIC8qKiBoaXTntYLkuoblvozjga7jg4/jg7Pjg4njga7nirbmhYvjgpLliKTlrpogKi9cbiAgcHJpdmF0ZSBjaGVja0hhbmRTdGF0ZShodW1hbjogSHVtYW4pOiBIYW5kU3RhdGUge1xuICAgIHJldHVybiB0aGlzLmNoZWNrQnVzdChodW1hbikgPyBIYW5kU3RhdGUuQlVTVCA6IHRoaXMuY2hlY2tCbGFja0phY2soaHVtYW4pID8gSGFuZFN0YXRlLkJMQUNLSkFDSyA6IEhhbmRTdGF0ZS5TVEFORElORztcbiAgfVxuXG4gIC8qKlxuICAgKiDjg5Djgrnjg4jjgZfjgabjgYTjgovjgYvliKTlrprjgZnjgotcbiAgICogQHBhcmFtIGh1bWFuIFxuICAgKi9cbiAgcHJpdmF0ZSBjaGVja0J1c3QoaHVtYW46IEh1bWFuKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGh1bWFuLm9wZW4oKSA+IDIxO1xuICB9XG5cbiAgLyoqXG4gICAqIEJsYWNrSmFja+OBi+ODgeOCp+ODg+OCr+OBmeOCi1xuICAgKiBAcGFyYW0gaHVtYW4gXG4gICAqL1xuICBwcml2YXRlIGNoZWNrQmxhY2tKYWNrKGh1bWFuOiBIdW1hbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBodW1hbi5vcGVuKCkgPT09IDIxO1xuICB9XG59XG5cbi8qKiDjg63jgrDjga7liLblvqEgKi9cbmNsYXNzIExvZ2dlciB7XG5cbiAgLyoqIOODh+OCo+ODvOODqeODvCAqL1xuICBwcml2YXRlIGRlYWxlcjogRGVhbGVyO1xuICAvKiog44Om44O844K244O8ICovXG4gIHByaXZhdGUgdXNlcjogVXNlcjtcblxuICAvKiog44OH44Kj44O844Op44O844Go44Om44O844K244O844KS5Yid5pyf5YyWICovXG4gIGNvbnN0cnVjdG9yKGRlYWxlcjogRGVhbGVyLCB1c2VyOiBVc2VyKSB7XG4gICAgdGhpcy5kZWFsZXIgPSBkZWFsZXI7XG4gICAgdGhpcy51c2VyID0gdXNlcjtcbiAgfVxuXG4gIC8qKiDliKTlrprjg6Hjg4Pjgrvjg7zjgrjjgpLooajnpLrjgZnjgosgKi9cbiAgcHVibGljIHNob3dKdWdlTWVzc2FnZShqdWRnZUZsYWc6IEp1ZGdlRmxhZywgaGFuZHN0YXRlOiBIYW5kU3RhdGUgPSBudWxsKSB7XG4gICAgbGV0IG1lc3NhZ2U6IHN0cmluZztcbiAgICBsZXQgY3JlYXRlTWVzc2FnZSA9IChodW1hbjogSHVtYW4pID0+IGAkeyBodW1hbi5nZXROYW1lKCkgfeOBjOWLneWIqeOBl+OBvuOBl+OBn+OAgmA7XG5cbiAgICBzd2l0Y2ggKGp1ZGdlRmxhZykge1xuICAgICAgY2FzZSBKdWRnZUZsYWcuVVNFUjogLy/jg6bjg7zjgrbjg7zjga7li53liKlcbiAgICAgICAgbWVzc2FnZSA9IGNyZWF0ZU1lc3NhZ2UodGhpcy51c2VyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEp1ZGdlRmxhZy5ERUFMRVI6IC8v44OH44Kj44O844Op44O844Gu5Yud5YipXG4gICAgICAgIG1lc3NhZ2UgPSBjcmVhdGVNZXNzYWdlKHRoaXMuZGVhbGVyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEp1ZGdlRmxhZy5EUk9XOiAvL+W8leOBjeWIhuOBkVxuICAgICAgICBtZXNzYWdlID0gJ+W8leOBjeWIhuOBkeOBp+OBmeOAgic7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd01lc3NhZ2UobWVzc2FnZSk7XG4gIH1cblxuICAvKiog5omL5pyt44Gu5oOF5aCx44KS6KGo56S644GZ44KLICovXG4gIHB1YmxpYyBzaG93Q2FyZE1lc3NhZ2UoYWN0aW9uOiBzdHJpbmcsIGh1bWFuOiBIdW1hbik6IHZvaWQge1xuICAgIGxldCBtZXNzYWdlOiBzdHJpbmcgPSBgW+ODl+ODrOOCpOODpOODvF3vvJokeyBodW1hbi5nZXROYW1lKCkgfSxb44Ki44Kv44K344On44OzXe+8miR7IGFjdGlvbiB9LCAgW+ODj+ODs+ODiV3vvJokeyBodW1hbi5nZXRDYXJkTGlzdCgpLnRvU3RyaW5nKCkgfSwgW+WQiOioiF3vvJokeyBodW1hbi5vcGVuKCkgfWA7XG4gICAgdGhpcy5zaG93TWVzc2FnZShtZXNzYWdlKTtcblxuICB9XG5cbiAgLyoqIOaJi+acreOBrueKtuaFi+OCkuihqOekuuOBmeOCiyAqL1xuICBwdWJsaWMgc2hvd0hhbmRTdGF0ZU1lc3NhZ2UoaHVtYW46IEh1bWFuLCBoYW5kc3RhdGU6IEhhbmRTdGF0ZSk6IHZvaWQge1xuICAgIGxldCBtZXNzYWdlID0gYCR7IGh1bWFuLmdldE5hbWUoKSB944GvJHsgSGFuZFN0YXRlW2hhbmRzdGF0ZV0gfeOBq+OBquOCiuOBvuOBl+OBn2A7XG4gICAgdGhpcy5zaG93TWVzc2FnZShtZXNzYWdlKTtcbiAgfVxuXG4gIC8qKiDjg6Hjg4Pjgrvjg7zjgrjjgpLjg63jgrDjgavlh7rlipvjgZnjgosgKi9cbiAgcHJpdmF0ZSBzaG93TWVzc2FnZShtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgfVxufVxuXG4vL0JsYWNrSmFja+OCpOODs+OCueOCv+ODs+OCueOCkueUn+aIkFxuY29uc3QgYmxhY2tKYWNrID0gbmV3IEJsYWNrSmFjaygpO1xuXG4vL+OCsuODvOODoOOCkuWni+OCgeOCi1xuYmxhY2tKYWNrLmV4ZWNHYW1lKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==