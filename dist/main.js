!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e){var r,n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),o=function(){function t(){this.resetHnad()}return t.prototype.resetHnad=function(){this.myCards=new Array},t.prototype.myCardsCalc=function(){return function(t,e){return t+e}},t}(),i=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.cards=[1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13],e}return n(e,t),e.prototype.shuftle=function(){for(var t,e=this.cards.length-1;e>=0;e--){var r=Math.floor(Math.random()*(e+1));t=[this.cards[r],this.cards[e]],this.cards[e]=t[0],this.cards[r]=t[1]}},e.prototype.deal=function(){return this.cards.filter(function(t,e,r){if(r.pop(),e<2)return!0})},e.prototype.hit=function(){return this.cards.filter(function(t,e,r){if(r.pop(),e<1)return!0})},e.prototype.open=function(){return this.myCards.reduce(this.myCardsCalc())},e.prototype.setCard=function(t){this.myCards.concat(t)},e.prototype.resetHnad=function(){this.myCards=new Array},e.prototype.checkSum=function(){return this.open()<17},e}(o),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.open=function(){return this.myCards.reduce(this.myCardsCalc())},e.prototype.setCard=function(t){this.myCards.concat(t)},e.prototype.checkSum=function(){return this.myCards.reduce(this.myCardsCalc())<17},e}(o);!function(t){t[t.DEALER=0]="DEALER",t[t.USER=1]="USER",t[t.DROW=2]="DROW"}(r||(r={}));var s=function(){function t(){this.dealer=new i,this.user=new u,this.logger=new a}return t.prototype.execGame=function(){this.resetHand(),this.dealer.shuftle(),this.dealCard(this.dealer),this.dealCard(this.user),this.autoExecGame(this.user)&&this.autoExecGame(this.dealer)&&this.logger.showJugeMessage(this.judge())},t.prototype.autoExecGame=function(t){return t.checkSum()?(this.hitCard(t),this.autoExecGame(t)):t.checkSum()},t.prototype.dealCard=function(t){t.setCard(this.dealer.deal())},t.prototype.hitCard=function(t){t.setCard(this.dealer.hit())},t.prototype.resetHand=function(){this.dealer.resetHnad(),this.user.resetHnad()},t.prototype.judge=function(){var t=this.user.open(),e=this.dealer.open();return t>e?r.USER:t<e?r.DEALER:r.DROW},t.prototype.showMessage=function(t){console.log(t)},t}(),a=function(){function t(){}return t.prototype.showJugeMessage=function(t){var e,n=function(t){return t+"が勝利しました。"};switch(t){case r.USER:e=n("ユーザー");break;case r.DEALER:e=n("ディーラー");break;case r.DROW:e="引き分けです。"}this.showMessage(e)},t.prototype.showMessage=function(t){console.log(t)},t}();(new s).execGame()}]);