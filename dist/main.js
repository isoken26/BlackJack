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
        return function (accum, currentValue) {
            return accum + (currentValue < 11 ? currentValue : 10);
        };
    };
    /** バストしているかチェックする */
    Human.prototype.checkBust = function () {
        return this.open() > 21;
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
/** BlackJackクラス */
var BlackJack = /** @class */ (function () {
    /** ユーザーとディーラーを初期化する */
    function BlackJack() {
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
        //カードメッセージを表示
        this.logger.showCardMessage(this.user);
        this.logger.showCardMessage(this.dealer);
        //ゲームを自動実行
        //プレイヤーがカードを引く
        if (this.autoExecGame(this.user)) {
            //プレイヤーがバストした時点でプレイヤーの敗北が決定する
            this.logger.showJugeMessage(JudgeFlag.DEALER);
            return;
        }
        //ディーラーがカードを引く
        if (this.autoExecGame(this.dealer)) {
            //ディーラーがバストした時点でプレイヤーの勝利が決定する
            this.logger.showJugeMessage(JudgeFlag.USER);
            return;
        }
        //プレイヤー、ディーラーどちらもバストしなかった為、勝敗判定にもつれ込む
        this.logger.showJugeMessage(this.judge());
        //ゲームの終了
        return;
    };
    /** ゲームを自動実行する */
    BlackJack.prototype.autoExecGame = function (human) {
        //手札の合計が17以上の時はstandする
        if (!human.checkSum()) {
            return human.checkBust();
        }
        //手札の合計が16以下の為、hitする
        this.hitCard(human);
        //再帰的に手札の合計が17以上になるまで実行する
        return this.autoExecGame(human);
    };
    /** 指定されたHumanにカードを二枚渡す */
    BlackJack.prototype.dealCard = function (humnan) {
        humnan.setCard(this.dealer.deal());
    };
    /** 指定されたHumanにカードを一枚渡す */
    BlackJack.prototype.hitCard = function (human) {
        human.setCard(this.dealer.hit());
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
    Logger.prototype.showJugeMessage = function (judgeFlag) {
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
    Logger.prototype.showCardMessage = function (human) {
        var message = human.getName() + ": " + human.getCardList().toString() + ", \u5408\u8A08\uFF1A" + human.open();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRkE7O0dBRUc7QUFDSDtJQUVFO1FBQ0UsVUFBVTtRQUNWLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBaUJELGdCQUFnQjtJQUNULHlCQUFTLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFDO0lBQ3JDLENBQUM7SUFBQSxDQUFDO0lBRUYsa0JBQWtCO0lBQ1IsMkJBQVcsR0FBckI7UUFDRSxPQUFPLFVBQUMsS0FBSyxFQUFFLFlBQVk7WUFDekIsT0FBTyxLQUFLLEdBQUcsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZ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QXRCLFVBQXVCLEtBQVk7UUFDakMsSUFBSSxPQUFPLEdBQWUsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFPLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLEVBQUUsNEJBQVUsS0FBSyxDQUFDLElBQUksRUFBSyxDQUFDO1FBQ3hHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELG9CQUFvQjtJQUNaLDRCQUFXLEdBQW5CLFVBQW9CLE9BQWU7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ0gsYUFBQztBQUFELENBQUM7QUFFRCxvQkFBb0I7QUFDcEIsSUFBTSxTQUFTLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztBQUVsQyxTQUFTO0FBQ1QsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IGRlYnVnIH0gZnJvbSBcInV0aWxcIjtcblxuLyoqXG4gKiBhYnN0cmFjdOaKveixoeOCr+ODqeOCuVxuICovXG5hYnN0cmFjdCBjbGFzcyBIdW1hbiB7IFxuXG4gIGNvbnN0cnVjdG9yKCkgeyBcbiAgICAvL+aJi+acreOCkuWIneacn+WMluOBmeOCi1xuICAgIHRoaXMucmVzZXRIbmFkKCk7XG4gIH1cblxuICAvKiog5ZCN5YmN44KS5Y+W5b6X44GZ44KLICovXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXROYW1lKCk6IHN0cmluZztcblxuICAvKiog5omL5pytICovXG4gIHByb3RlY3RlZCBteUNhcmRzOiBBcnJheTxudW1iZXI+O1xuXG4gLyoqIG9wZW7jga7mir3osaHjg6Hjgr3jg4Pjg4kgKi9cbiAgcHVibGljIGFic3RyYWN0IG9wZW4oKTogbnVtYmVyO1xuXG4gIC8qKiDjgqvjg7zjg4njgpLjgrvjg4Pjg4jjgZnjgothYnN0cmFjdOODoeOCveODg+ODiSAqL1xuICBwdWJsaWMgYWJzdHJhY3Qgc2V0Q2FyZChhcnJMaXN0OiBBcnJheTxudW1iZXI+KTogdm9pZDtcblxuICAvKiog44Kr44O844OJ44KS44OB44Kn44OD44Kv44GZ44KLYWJzdHJhY3Tjg6Hjgr3jg4Pjg4kgKi9cbiAgcHVibGljIGFic3RyYWN0IGNoZWNrU3VtKCk6IGJvb2xlYW47XG5cbiAgLyoqIOaJi+acreOCkuODquOCu+ODg+ODiOOBmeOCiyAqL1xuICBwdWJsaWMgcmVzZXRIbmFkKCk6IHZvaWQgeyBcbiAgICB0aGlzLm15Q2FyZHMgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuICB9O1xuXG4gIC8qKiDmiYvmnK3jgpLlkIjoqIjjgZnjgovjg63jgrjjg4Pjgq8gKi9cbiAgcHJvdGVjdGVkIG15Q2FyZHNDYWxjKCkge1xuICAgIHJldHVybiAoYWNjdW0sIGN1cnJlbnRWYWx1ZSk6IG51bWJlciA9PiB7XG4gICAgICByZXR1cm4gYWNjdW0gKyAoY3VycmVudFZhbHVlIDwgMTEgPyBjdXJyZW50VmFsdWUgOiAxMCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIOODkOOCueODiOOBl+OBpuOBhOOCi+OBi+ODgeOCp+ODg+OCr+OBmeOCiyAqL1xuICBwdWJsaWMgY2hlY2tCdXN0KCk6IGJvb2xlYW4geyBcbiAgICByZXR1cm4gdGhpcy5vcGVuKCkgPiAyMTtcbiAgfVxuXG4gIC8qKiDmiYvmnK3jga7phY3liJfjgpLov5TjgZkgKi9cbiAgcHVibGljIGdldENhcmRMaXN0KCk6IEFycmF5PG51bWJlcj4geyBcbiAgICByZXR1cm4gdGhpcy5teUNhcmRzO1xuICB9XG59XG5cbi8qKlxuICog44OH44Kj44O844Op44O844Kv44Op44K5XG4gKi9cbmNsYXNzIERlYWxlciBleHRlbmRzIEh1bWFuIHsgXG5cbiAgLyoqIOWFqOOBpuOBruOCq+ODvOODieOCkuWIneacn+WApOOBqOOBl+OBpuaMgeOBpCAqL1xuICBwcml2YXRlIGNhcmRzOiBBcnJheTxudW1iZXI+ID0gW1xuICAgIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAvL+ODj+ODvOODiFxuICAgIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAvL+OCueODmuODvOODiVxuICAgIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAvL+OCr+ODqeODllxuICAgIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzICAvL+ODgOOCpOODpFxuICBdO1xuXG4gIC8qKiDlkI3liY3jgpLlj5blvpfjgZnjgosgKi9cbiAgcHVibGljIGdldE5hbWUoKTogc3RyaW5nIHsgXG4gICAgcmV0dXJuICfjg4fjgqPjg7zjg6njg7wnO1xuICB9XG5cbiAgLyoqIOOCq+ODvOODieOCkuOCt+ODo+ODg+ODleODq+OBmeOCiyAqL1xuICBwdWJsaWMgc2h1ZnRsZSgpOiB2b2lkIHsgXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2FyZHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHsgXG5cbiAgICAgIC8vMOOAnDUy44Gu44Op44Oz44OA44Og44Gq5pWw5YCk44KS5Y+W5b6XXG4gICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuXG4gICAgICAvL+mFjeWIl+OBruaVsOWApOOCkuWFpeOCjOabv+OBiOOCi1xuICAgICAgW3RoaXMuY2FyZHNbaV0sIHRoaXMuY2FyZHNbcmFuZF1dID0gW3RoaXMuY2FyZHNbcmFuZF0sIHRoaXMuY2FyZHNbaV1dO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBjYXJkc+OBi+OCieODqeODs+ODgOODoOOBpzLmnprjga7jgqvjg7zjg4njgpJBcnJheUxpc3Tjgafov5TjgZkgKi9cbiAgcHVibGljIGRlYWwoKTogQXJyYXk8bnVtYmVyPiB7IFxuICAgIHJldHVybiB0aGlzLmNhcmRzLmZpbHRlcigodiwgaSwgYSkgPT4ge1xuICAgICAgaWYgKGkgPiAxKSByZXR1cm4gZmFsc2U7XG4gICAgICAvL+mFjeWIl+OBruWFiOmgreOBi+OCieimgee0oOOCkuWJiumZpFxuICAgICAgYS5zaGlmdCgpO1xuICAgICAgLy8y5p6a44Gu44Kr44O844OJ44KS6YWN5YiX44Go44GX44Gm6L+U44GZXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuICBcbiAgLyoqIGNhcmRz44GL44KJ44Op44Oz44OA44Og44GnMeaemuOBruOCq+ODvOODieOCkkFycmF5TGlzdOOBp+i/lOOBmSAqL1xuICBwdWJsaWMgaGl0KCk6IEFycmF5PG51bWJlcj4geyBcbiAgICByZXR1cm4gdGhpcy5jYXJkcy5maWx0ZXIoKHYsIGksIGEpID0+IHtcbiAgICAgIGlmIChpID4gMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgLy/phY3liJfjga7lhYjpoK3jgYvjgonopoHntKDjgpLliYrpmaRcbiAgICAgIGEuc2hpZnQoKTtcbiAgICAgIC8vMeaemuOBruOCq+ODvOODieOCkumFjeWIl+OBqOOBl+OBpui/lOOBmVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cblxuICAvKiogbXlDYXJkc+OBruWQiOioiOWApOOCkui/lOOBmSAqL1xuICBwdWJsaWMgb3BlbigpOiBudW1iZXIgeyBcbiAgICByZXR1cm4gdGhpcy5teUNhcmRzLnJlZHVjZSh0aGlzLm15Q2FyZHNDYWxjKCkpO1xuICB9XG5cbiAgLyoqIOOCq+ODvOODieOCkuOCu+ODg+ODiOOBmeOCiyAqL1xuICBwdWJsaWMgc2V0Q2FyZChhcnJMaXN0OiBBcnJheTxudW1iZXI+KSB7IFxuICAgIHRoaXMubXlDYXJkcyA9IHRoaXMubXlDYXJkcy5jb25jYXQoYXJyTGlzdCk7XG4gIH1cblxuICAvKiog5omL5pyt44KS44Oq44K744OD44OI44GZ44KLICovXG4gIHB1YmxpYyByZXNldEhuYWQoKTogdm9pZHtcbiAgICB0aGlzLm15Q2FyZHMgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuICB9XG5cbiAgLyoqIFxuICAgKiBteUNhcmRz44KS56K66KqN44GX44CB44G+44Gg44Kr44O844OJ44GM5b+F6KaB44Gq44KJdHJ1ZSxcbiAgICog5b+F6KaB44Gq44GR44KM44GwIGZhbHNl44KS6L+U44GZXG4gICAqICovXG4gIHB1YmxpYyBjaGVja1N1bSgpOiBib29sZWFuIHtcbiAgICAvL+aJi+acreOBruWQiOioiOOBjDE25Lul5LiL44Gu5aC05ZCI44GvaGl0LDE35Lul5LiK44Gvc3RhbmRcbiAgICByZXR1cm4gdGhpcy5vcGVuKCkgPCAxNztcbiAgfVxufVxuXG4vKipcbiAqIOODpuODvOOCtuODvOOCr+ODqeOCuVxuICovXG5jbGFzcyBVc2VyIGV4dGVuZHMgSHVtYW4geyBcbiAgLyoqIG15Q2FyZHPjga7lkIjoqIjlgKTjgpLov5TjgZkgKi9cbiAgcHVibGljIG9wZW4oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5teUNhcmRzLnJlZHVjZSh0aGlzLm15Q2FyZHNDYWxjKCkpO1xuICB9XG5cbiAgLyoqIOWQjeWJjeOCkuWPluW+l+OBmeOCiyAqL1xuICBwdWJsaWMgZ2V0TmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAn44Om44O844K244O8JztcbiAgfVxuICAvKiog44Kr44O844OJ44KS44K744OD44OI44GZ44KLICovXG4gIHB1YmxpYyBzZXRDYXJkKGFyckxpc3Q6IEFycmF5PG51bWJlcj4pIHtcbiAgICB0aGlzLm15Q2FyZHMgPSB0aGlzLm15Q2FyZHMuY29uY2F0KGFyckxpc3QpO1xuICB9XG5cbiAgLyoqIFxuICAgKiBteUNhcmRz44KS56K66KqN44GX44CB44G+44Gg44Kr44O844OJ44GM5b+F6KaB44Gq44KJdHJ1ZSxcbiAgICog5b+F6KaB44Gq44GR44KM44GwIGZhbHNl44KS6L+U44GZXG4gICAqICovXG4gIHB1YmxpYyBjaGVja1N1bSgpOiBib29sZWFuIHtcbiAgICAvL+aJi+acreOBruWQiOioiOOBjDE25Lul5LiL44Gu5aC05ZCI44GvaGl0LDE35Lul5LiK44Gvc3RhbmRcbiAgICByZXR1cm4gdGhpcy5teUNhcmRzLnJlZHVjZSh0aGlzLm15Q2FyZHNDYWxjKCkpIDwgMTc7XG4gIH1cbn1cblxuLyoqIOWLneaVl+WIpOWumuODleODqeOCsCAqL1xuZW51bSBKdWRnZUZsYWcgeyBcbiAgREVBTEVSID0gMCxcbiAgVVNFUiA9IDEsXG4gIERST1cgPSAyXG59XG4vKiogQmxhY2tKYWNr44Kv44Op44K5ICovXG5jbGFzcyBCbGFja0phY2sge1xuICAvKiog44OH44Kj44O844Op44O8ICovXG4gIHByaXZhdGUgZGVhbGVyOiBEZWFsZXI7XG4gIC8qKiDjg6bjg7zjgrbjg7wgKi8gICBcbiAgcHJpdmF0ZSB1c2VyOiBVc2VyO1xuXG4gIC8qKiDjg63jgrDjga7nrqHnkIYgKi9cbiAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlcjtcblxuICAvKiog44Om44O844K244O844Go44OH44Kj44O844Op44O844KS5Yid5pyf5YyW44GZ44KLICovXG4gIGNvbnN0cnVjdG9yKCkgeyBcbiAgICB0aGlzLmRlYWxlciA9IG5ldyBEZWFsZXIoKTtcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih0aGlzLmRlYWxlciwgdGhpcy51c2VyKTtcbiAgfVxuXG4gIC8qKiDjgrLjg7zjg6DjgpLlrp/ooYzjgZnjgosgKi9cbiAgcHVibGljIGV4ZWNHYW1lKCk6IHZvaWQgeyBcbiAgICAvL1VzZXLjgahEZWFsZXLjga7miYvmnK3jgpLjg6rjgrvjg4Pjg4jjgZnjgovjgIJcbiAgICB0aGlzLnJlc2V0SGFuZCgpO1xuXG4gICAgLy/miYvmnK3jgpLjgrfjg6Pjg4Pjg5Xjg6vjgZnjgotcbiAgICB0aGlzLmRlYWxlci5zaHVmdGxlKCk7XG5cbiAgICAvL+OCq+ODvOODieOCkumFjeOCi1xuICAgIHRoaXMuZGVhbENhcmQodGhpcy51c2VyKTtcbiAgICB0aGlzLmRlYWxDYXJkKHRoaXMuZGVhbGVyKTtcblxuICAgIC8v44Kr44O844OJ44Oh44OD44K744O844K444KS6KGo56S6XG4gICAgdGhpcy5sb2dnZXIuc2hvd0NhcmRNZXNzYWdlKHRoaXMudXNlcik7XG4gICAgdGhpcy5sb2dnZXIuc2hvd0NhcmRNZXNzYWdlKHRoaXMuZGVhbGVyKTtcblxuICAgIC8v44Ky44O844Og44KS6Ieq5YuV5a6f6KGMXG4gICAgLy/jg5fjg6zjgqTjg6Tjg7zjgYzjgqvjg7zjg4njgpLlvJXjgY9cbiAgICBpZiAodGhpcy5hdXRvRXhlY0dhbWUodGhpcy51c2VyKSkgeyBcbiAgICAgIC8v44OX44Os44Kk44Ok44O844GM44OQ44K544OI44GX44Gf5pmC54K544Gn44OX44Os44Kk44Ok44O844Gu5pWX5YyX44GM5rG65a6a44GZ44KLXG4gICAgICB0aGlzLmxvZ2dlci5zaG93SnVnZU1lc3NhZ2UoSnVkZ2VGbGFnLkRFQUxFUik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy/jg4fjgqPjg7zjg6njg7zjgYzjgqvjg7zjg4njgpLlvJXjgY9cbiAgICBpZiAodGhpcy5hdXRvRXhlY0dhbWUodGhpcy5kZWFsZXIpKSB7IFxuICAgICAgLy/jg4fjgqPjg7zjg6njg7zjgYzjg5Djgrnjg4jjgZfjgZ/mmYLngrnjgafjg5fjg6zjgqTjg6Tjg7zjga7li53liKnjgYzmsbrlrprjgZnjgotcbiAgICAgIHRoaXMubG9nZ2VyLnNob3dKdWdlTWVzc2FnZShKdWRnZUZsYWcuVVNFUik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy/jg5fjg6zjgqTjg6Tjg7zjgIHjg4fjgqPjg7zjg6njg7zjganjgaHjgonjgoLjg5Djgrnjg4jjgZfjgarjgYvjgaPjgZ/ngrrjgIHli53mlZfliKTlrprjgavjgoLjgaTjgozovrzjgoBcbiAgICB0aGlzLmxvZ2dlci5zaG93SnVnZU1lc3NhZ2UodGhpcy5qdWRnZSgpKTtcblxuICAgIC8v44Ky44O844Og44Gu57WC5LqGXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqIOOCsuODvOODoOOCkuiHquWLleWun+ihjOOBmeOCiyAqL1xuICBwcml2YXRlIGF1dG9FeGVjR2FtZShodW1hbjogSHVtYW4pOiBib29sZWFuIHsgXG4gICAgLy/miYvmnK3jga7lkIjoqIjjgYwxN+S7peS4iuOBruaZguOBr3N0YW5k44GZ44KLXG4gICAgaWYgKCFodW1hbi5jaGVja1N1bSgpKSB7IFxuICAgICAgcmV0dXJuIGh1bWFuLmNoZWNrQnVzdCgpO1xuICAgIH1cblxuICAgIC8v5omL5pyt44Gu5ZCI6KiI44GMMTbku6XkuIvjga7ngrrjgIFoaXTjgZnjgotcbiAgICB0aGlzLmhpdENhcmQoaHVtYW4pO1xuXG4gICAgLy/lho3luLDnmoTjgavmiYvmnK3jga7lkIjoqIjjgYwxN+S7peS4iuOBq+OBquOCi+OBvuOBp+Wun+ihjOOBmeOCi1xuICAgIHJldHVybiB0aGlzLmF1dG9FeGVjR2FtZShodW1hbik7XG4gIH1cblxuICAvKiog5oyH5a6a44GV44KM44GfSHVtYW7jgavjgqvjg7zjg4njgpLkuozmnprmuKHjgZkgKi9cbiAgcHVibGljIGRlYWxDYXJkKGh1bW5hbjogSHVtYW4pOiB2b2lkIHsgXG4gICAgaHVtbmFuLnNldENhcmQodGhpcy5kZWFsZXIuZGVhbCgpKTtcbiAgfVxuXG4gIC8qKiDmjIflrprjgZXjgozjgZ9IdW1hbuOBq+OCq+ODvOODieOCkuS4gOaemua4oeOBmSAqL1xuICBwdWJsaWMgaGl0Q2FyZChodW1hbjogSHVtYW4pOiB2b2lkIHtcbiAgICBodW1hbi5zZXRDYXJkKHRoaXMuZGVhbGVyLmhpdCgpKTtcbiAgfVxuXG4gIC8qKiDmiYvmnK3jgpLjg6rjgrvjg4Pjg4jjgZnjgosgKi9cbiAgcHJpdmF0ZSByZXNldEhhbmQoKTogdm9pZCB7IFxuICAgIHRoaXMuZGVhbGVyLnJlc2V0SG5hZCgpO1xuICAgIHRoaXMudXNlci5yZXNldEhuYWQoKTtcbiAgfVxuXG4gIC8qKiDli53mlZfjgpLliKTlrprjgZnjgosgKi9cbiAgcHJpdmF0ZSBqdWRnZSgpOiBKdWRnZUZsYWcge1xuICAgIGxldCB1c2VyU3VtID0gdGhpcy51c2VyLm9wZW4oKTtcbiAgICBsZXQgZGVhbGVyU3VtID0gdGhpcy5kZWFsZXIub3BlbigpO1xuICAgIFxuICAgIHJldHVybiB1c2VyU3VtID4gZGVhbGVyU3VtID8gSnVkZ2VGbGFnLlVTRVIgOiB1c2VyU3VtIDwgZGVhbGVyU3VtID8gSnVkZ2VGbGFnLkRFQUxFUiA6IEp1ZGdlRmxhZy5EUk9XO1xuICAgfVxufVxuXG4vKiog44Ot44Kw44Gu5Yi25b6hICovXG5jbGFzcyBMb2dnZXIgeyBcblxuICAvKiog44OH44Kj44O844Op44O8ICovXG4gIHByaXZhdGUgZGVhbGVyOiBEZWFsZXI7XG4gIC8qKiDjg6bjg7zjgrbjg7wgKi9cbiAgcHJpdmF0ZSB1c2VyOiBVc2VyO1xuXG4gIC8qKiDjg4fjgqPjg7zjg6njg7zjgajjg6bjg7zjgrbjg7zjgpLliJ3mnJ/ljJYgKi9cbiAgY29uc3RydWN0b3IoZGVhbGVyOiBEZWFsZXIsIHVzZXI6IFVzZXIpIHsgXG4gICAgdGhpcy5kZWFsZXIgPSBkZWFsZXI7XG4gICAgdGhpcy51c2VyID0gdXNlcjtcbiAgfVxuXG4gIC8qKiDliKTlrprjg6Hjg4Pjgrvjg7zjgrjjgpLooajnpLrjgZnjgosgKi9cbiAgcHVibGljIHNob3dKdWdlTWVzc2FnZShqdWRnZUZsYWc6IEp1ZGdlRmxhZykgeyBcbiAgICBsZXQgbWVzc2FnZTogc3RyaW5nO1xuICAgIGxldCBjcmVhdGVNZXNzYWdlID0gKGh1bWFuOiBIdW1hbikgPT4gYCR7IGh1bWFuLmdldE5hbWUoKSB944GM5Yud5Yip44GX44G+44GX44Gf44CCYDtcblxuICAgIHN3aXRjaCAoanVkZ2VGbGFnKSB7IFxuICAgICAgY2FzZSBKdWRnZUZsYWcuVVNFUjogLy/jg6bjg7zjgrbjg7zjga7li53liKlcbiAgICAgICAgbWVzc2FnZSA9IGNyZWF0ZU1lc3NhZ2UodGhpcy51c2VyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEp1ZGdlRmxhZy5ERUFMRVI6IC8v44OH44Kj44O844Op44O844Gu5Yud5YipXG4gICAgICAgIG1lc3NhZ2UgPSBjcmVhdGVNZXNzYWdlKHRoaXMuZGVhbGVyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEp1ZGdlRmxhZy5EUk9XOiAvL+W8leOBjeWIhuOBkVxuICAgICAgICBtZXNzYWdlID0gJ+W8leOBjeWIhuOBkeOBp+OBmeOAgic7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd01lc3NhZ2UobWVzc2FnZSk7XG4gIH1cblxuICAvKiog5omL5pyt44Gu5oOF5aCx44KS6KGo56S644GZ44KLICovXG4gIHB1YmxpYyBzaG93Q2FyZE1lc3NhZ2UoaHVtYW46IEh1bWFuKTogdm9pZCB7IFxuICAgIGxldCBtZXNzYWdlOiBzdHJpbmcgPSBgJHsgaHVtYW4uZ2V0TmFtZSgpIH06ICR7IGh1bWFuLmdldENhcmRMaXN0KCkudG9TdHJpbmcoKSB9LCDlkIjoqIjvvJokeyBodW1hbi5vcGVuKCkgfWA7XG4gICAgdGhpcy5zaG93TWVzc2FnZShtZXNzYWdlKTtcbiAgfVxuXG4gIC8qKiDjg6Hjg4Pjgrvjg7zjgrjjgpLjg63jgrDjgavlh7rlipvjgZnjgosgKi9cbiAgcHJpdmF0ZSBzaG93TWVzc2FnZShtZXNzYWdlOiBzdHJpbmcpIHsgXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gIH1cbn1cblxuLy9CbGFja0phY2vjgqTjg7Pjgrnjgr/jg7PjgrnjgpLnlJ/miJBcbmNvbnN0IGJsYWNrSmFjayA9IG5ldyBCbGFja0phY2soKTtcblxuLy/jgrLjg7zjg6DjgpLlp4vjgoHjgotcbmJsYWNrSmFjay5leGVjR2FtZSgpOyJdLCJzb3VyY2VSb290IjoiIn0=