/*! For license information please see 394.06f3ae6f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_test_task=self.webpackChunkreact_test_task||[]).push([[394],{5566:function(n,t,r){r.r(t),r.d(t,{default:function(){return an}});var e=r(1413),o=r(6288),i=r.p+"static/media/picture.db6709e825b888acd80e.png",a=r(1002);function c(){c=function(){return n};var n={},t=Object.prototype,r=t.hasOwnProperty,e=Object.defineProperty||function(n,t,r){n[t]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function l(n,t,r){return Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{l({},"")}catch(B){l=function(n,t,r){return n[t]=r}}function f(n,t,r,o){var i=t&&t.prototype instanceof h?t:h,a=Object.create(i.prototype),c=new P(o||[]);return e(a,"_invoke",{value:j(n,r,c)}),a}function p(n,t,r){try{return{type:"normal",arg:n.call(t,r)}}catch(B){return{type:"throw",arg:B}}}n.wrap=f;var d={};function h(){}function A(){}function g(){}var x={};l(x,i,(function(){return this}));var v=Object.getPrototypeOf,w=v&&v(v(E([])));w&&w!==t&&r.call(w,i)&&(x=w);var m=g.prototype=h.prototype=Object.create(x);function y(n){["next","throw","return"].forEach((function(t){l(n,t,(function(n){return this._invoke(t,n)}))}))}function b(n,t){function o(e,i,c,s){var u=p(n[e],n,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==(0,a.Z)(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(n){o("next",n,c,s)}),(function(n){o("throw",n,c,s)})):t.resolve(f).then((function(n){l.value=n,c(l)}),(function(n){return o("throw",n,c,s)}))}s(u.arg)}var i;e(this,"_invoke",{value:function(n,r){function e(){return new t((function(t,e){o(n,r,t,e)}))}return i=i?i.then(e,e):e()}})}function j(n,t,r){var e="suspendedStart";return function(o,i){if("executing"===e)throw new Error("Generator is already running");if("completed"===e){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=Z(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===e)throw e="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);e="executing";var s=p(n,t,r);if("normal"===s.type){if(e=r.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(e="completed",r.method="throw",r.arg=s.arg)}}}function Z(n,t){var r=t.method,e=n.iterator[r];if(void 0===e)return t.delegate=null,"throw"===r&&n.iterator.return&&(t.method="return",t.arg=void 0,Z(n,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=p(e,n.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,d;var i=o.arg;return i?i.done?(t[n.resultName]=i.value,t.next=n.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function O(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function N(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function P(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(O,this),this.reset(!0)}function E(n){if(n){var t=n[i];if(t)return t.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var e=-1,o=function t(){for(;++e<n.length;)if(r.call(n,e))return t.value=n[e],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return A.prototype=g,e(m,"constructor",{value:g,configurable:!0}),e(g,"constructor",{value:A,configurable:!0}),A.displayName=l(g,u,"GeneratorFunction"),n.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===A||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,g):(n.__proto__=g,l(n,u,"GeneratorFunction")),n.prototype=Object.create(m),n},n.awrap=function(n){return{__await:n}},y(b.prototype),l(b.prototype,s,(function(){return this})),n.AsyncIterator=b,n.async=function(t,r,e,o,i){void 0===i&&(i=Promise);var a=new b(f(t,r,e,o),i);return n.isGeneratorFunction(r)?a:a.next().then((function(n){return n.done?n.value:a.next()}))},y(m),l(m,u,"Generator"),l(m,i,(function(){return this})),l(m,"toString",(function(){return"[object Generator]"})),n.keys=function(n){var t=Object(n),r=[];for(var e in t)r.push(e);return r.reverse(),function n(){for(;r.length;){var e=r.pop();if(e in t)return n.value=e,n.done=!1,n}return n.done=!0,n}},n.values=E,P.prototype={constructor:P,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!n)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var t=this;function e(r,e){return a.type="throw",a.arg=n,t.next=r,e&&(t.method="next",t.arg=void 0),!!e}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(n,t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=n,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),d},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===n)return this.complete(r.completion,r.afterLoc),N(r),d}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===n){var e=r.completion;if("throw"===e.type){var o=e.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,t,r){return this.delegate={iterator:E(n),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},n}function s(n,t,r,e,o,i,a){try{var c=n[i](a),s=c.value}catch(u){return void r(u)}c.done?t(s):Promise.resolve(s).then(e,o)}function u(n){return function(){var t=this,r=arguments;return new Promise((function(e,o){var i=n.apply(t,r);function a(n){s(i,e,o,a,c,"next",n)}function c(n){s(i,e,o,a,c,"throw",n)}a(void 0)}))}}var l,f,p,d,h,A,g,x,v,w,m,y,b,j,Z,O,N,P,E,k=r(9439),B=r(168),X=r(6444),W=X.ZP.button(l||(l=(0,B.Z)(["\nwidth: 196px;\nheight: 50px;\nbackground-color: ",";\nbox-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\nborder-radius: 10.3108px;\nborder: none;\nfont-size: 18px;\nline-height: 22px;\nfont-weight: 600;\ncolor: #373737;\ntransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\ntransition-duration: 250ms;\ncursor: pointer;\n\n\n&:hover {\n    background-color: ",";\n}\n"])),(function(n){return n.following?"#5CD3A8":"#EBD8FF"}),(function(n){return n.following?"#EBD8FF":"#5CD3A8"})),I=r(184),L=function(n){var t=n.user,r=n.refetch,i=t.isFollowing,a=t.followers,s=(0,o.kD)(),l=(0,k.Z)(s,1)[0],f=function(){var n=u(c().mark((function n(o){var i;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=(0,e.Z)((0,e.Z)({},t),{},{followers:a+1,isFollowing:!0}),n.next=3,l(i).unwrap().then((function(){return r()}));case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=u(c().mark((function n(o){var i;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=(0,e.Z)((0,e.Z)({},t),{},{followers:a-1,isFollowing:!1}),n.next=3,l(i).unwrap().then((function(){return r()}));case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return(0,I.jsx)(I.Fragment,{children:i?(0,I.jsx)(W,{following:i,onClick:p,children:"FOLLOWING"}):(0,I.jsx)(W,{following:i,onClick:f,children:"FOLLOW"})})},F=X.ZP.li(f||(f=(0,B.Z)(["\n    width: 380px;\n    height: 460px;\n    background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);\n    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n    border-radius: 20px;\n    position: relative;\n    padding-bottom: 36px;\n    display: flex;\n    flex-direction: column;\n    justify-content: end;\n    align-items: center;\n    margin-bottom: 20px;\n"]))),z=(X.ZP.div(p||(p=(0,B.Z)(["\n\n"]))),X.ZP.img(d||(d=(0,B.Z)(["\n    width: 76px;\n    height: 22px;\n    position: absolute;\n    top: 20px;\n    left: 20px;\n"])))),R=X.ZP.img(h||(h=(0,B.Z)(["\n    position: absolute;\n    top: 30px;\n    right: 20px;\n    max-width: 100%;\n    max-height: 168px;\n\n"]))),S=X.ZP.img(A||(A=(0,B.Z)(["\n    position: absolute;\n    top: 214px;\n    left: 0;\n    max-width: 100%;\n"]))),H=X.ZP.img(g||(g=(0,B.Z)(["\n    position: absolute;\n    top: 178px;\n    /* left: 150px; */\n    /* top: 50%; */\n    left: 50%;\n    transform: translate(-50%, 0);\n    z-index: 1;\n"]))),Y=X.ZP.img(x||(x=(0,B.Z)(["\n    position: absolute;\n    top: 178px;\n    left: 50%;\n    transform: translate(-50%, 0);\n    border-radius: 50%;\n    width: 76px;\n    height: 76px;\n    \n"]))),V=X.ZP.div(v||(v=(0,B.Z)(["\nfont-size: 20px;\nline-height: 24px;\nfont-weight: 500;\ntext-align: center;\nmargin-bottom: 26px;\ndisplay: flex;\nflex-direction: column;\ngap: 16px;\n"]))),D=X.ZP.p(w||(w=(0,B.Z)(["\n\ncolor: ","\n"])),(function(n){return n.name?"#5CD3A8":"#EBD8FF"})),U=function(n){var t=n.user,r=n.refetch,e=t.name,o=t.tweets,a=t.followers,c=t.avatar,s=a.toLocaleString("en-US");return(0,I.jsxs)(F,{children:[(0,I.jsx)(z,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ4SURBVHgB1Vg9U9tAEH3OxIVdODNQhMIUbijiwilS2C11fjNFmrhIEQooKKCAAgozA4VdWDNmn7UnzoekO4sPL29mR6fT6rh77L5dubVarX5j95iL/Wm1WlmVg+xzIpd97BhfYANdsZ/4BLBCGHEgUXQE47BEGHEkpB3AMKwRRoyEtC6MwiJhbbGxkPYVBpG6qaXYldhMbIH8UD2xPsorF/1uxe713Y7YofqnwBWBf2gG/u1zHQ/UiL/I918F7nNS8zyJMJb8qZT8eTD/IHatQu2L9YX4XpSsMRNfzo+RExLDugiUrJWCzO1X1lh684uScxQQX8QQS8kNsmTBtlgv0Jhv3vjGP6D6F766zlQsQxreughw7/tqRbC4ORnuxRaIRdi9RxYPXkSH3DNF+d/77vn7ZDENGHkkrSCeJveX2IzKOrAIPOJt8Msbn4hleq5J6gKxCLv2xiPkZJ2J/UeeknMdM2IeAnKHyLUO+t7IW2uGdKyLAJ7X2iliEeYLZEevd6EOqI5lJb6omKsTXtOIRVjZITuMIOpTjS9TKNSpRYVvDEz7qV53jhhhfstwijwFme/HeNlOdFU4Ke483Jn3bK7vOxwiHad1le2jEUvJgZBw48Ra7k9Un5ZKSgimJnsdksaWg/1Q2z+wvp/aj7FFuYUhxCLMdd0brYFPluqXe87yPPR8lyVkjZGGu4Y92LsipXHlIY8Zacg7aJLlOv0BXlYvRiVbDbYdrh2gD9O1j7Rq56pvU+zJHtzPRb0Knx/ik2HL6rvN91of233aDNEMa5GvSPlUdBH/mmjUEFv8+DYl8iGsEWZO5ENYIsykyIewQthrRf7D8ASrKwNlc4GdUAAAAABJRU5ErkJggg==",alt:"logo",loading:"lazy"}),(0,I.jsx)(R,{src:i,alt:"background",loading:"lazy"}),(0,I.jsx)(S,{src:"data:image/png;base64,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",alt:"line"}),(0,I.jsx)(H,{src:"data:image/png;base64,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",alt:"ellipse"}),(0,I.jsx)(Y,{src:c,alt:e}),(0,I.jsxs)(V,{children:[(0,I.jsx)(D,{name:e,children:e}),(0,I.jsxs)(D,{children:[o," TWEETS"]}),(0,I.jsxs)(D,{children:[s," FOLLOWERS"]})]}),(0,I.jsx)(L,{user:t,refetch:r})]})},G=r(5048),T=X.ZP.ul(m||(m=(0,B.Z)(["\ndisplay: flex;\njustify-content: center;\ngap: 20px;\nflex-wrap: wrap;\n"]))),C=X.ZP.div(y||(y=(0,B.Z)(["\ndisplay: flex;\ngap: 10px;\njustify-content: center;\n"]))),K=X.ZP.button(b||(b=(0,B.Z)(["\n    height: 30px;\n    width: 120px;\n    border-radius: 10px;\n    border: none;\n    background-color: #EBD8FF;\n    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 250ms;\n\n    .isDisable:hover {\n        background-color: #EBD8FF;\n    }\n\n    &:hover {\n        background-color: ",";\n    }\n\n\n"])),(function(n){return n.disabled?"#EBD8FF":"#5CD3A8"})),M=X.ZP.p(j||(j=(0,B.Z)(["\ntext-align: center;\n"]))),J=r(6895),q=function(){var n=(0,G.v9)((function(n){return n.filter})),t=(0,G.I0)(),r=(0,o.wv)(n),i=r.data,a=r.error,c=r.isLoading,s=r.refetch;if(c)return(0,I.jsx)("p",{children:"Loading..."});if(a)return(0,I.jsx)("p",{children:"Ooops...Something wrong"});var u=function(){var r=(0,e.Z)((0,e.Z)({},n),{},{page:n.page-1});t((0,J.nv)(r))},l=function(){var r=(0,e.Z)((0,e.Z)({},n),{},{page:n.page+1});t((0,J.nv)(r))};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(T,{children:i&&i.map((function(n){return(0,I.jsx)(U,{user:n,refetch:s},n.id)}))}),0===i.length?(0,I.jsx)(M,{children:"Thank you! We don't have anymore tweets for you:)"}):(0,I.jsxs)(C,{children:[1===n.page?(0,I.jsx)(K,{disabled:!0,onClick:u,children:"PREV"}):(0,I.jsx)(K,{onClick:u,children:"PREV"}),6===i.length||c?(0,I.jsx)(K,{onClick:l,children:"NEXT"}):(0,I.jsx)(K,{disabled:!0,onClick:l,children:"NEXT"})]})]})},Q=r(1087),_=X.ZP.section(Z||(Z=(0,B.Z)(["\n    padding: 15px 0;\n"]))),$=(0,X.ZP)(Q.rU)(O||(O=(0,B.Z)(["\n    width: 196px;\n    height: 50px;\n    border-radius: 10px;\n    text-align: center;\n    background-color: #EBD8FF;\n    text-decoration: none;\n    margin: 0 auto;\n    font-size: 16px;\n    padding: 10px;\n    color: #373737;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);;\n    transition-duration: 250ms;\n    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n\n    &:hover, :focus {\n        background-color: #5CD3A8;\n\n    }\n"]))),nn=r(2791),tn=X.ZP.div(N||(N=(0,B.Z)(["\n    position: absolute;\n    right: 20px;\n    top: 60px;\n    z-index: 5;\n    border-radius: 10px;\n    background-color: #EBD8FF;\n    text-decoration: none;\n    margin: 0 auto;\n    font-size: 16px;\n    padding: 10px;\n    color: #373737;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);;\n    transition-duration: 250ms;\n    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n\n    &:hover, :focus {\n        background-color: ",";\n\n    }\n    \n"])),(function(n){return n.isOpen?"#EBD8FF":"#5CD3A8"})),rn=X.ZP.ul(P||(P=(0,B.Z)(["\n    list-style: none;\n    text-decoration: none;\n"]))),en=X.ZP.li(E||(E=(0,B.Z)(["\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);;\n    transition-duration: 250ms;\n    &:hover {\n        background-color: #5CD3A8;\n        cursor: pointer;\n    }\n"]))),on=function(){var n=(0,G.I0)(),t=(0,nn.useState)(!1),r=(0,k.Z)(t,2),e=r[0],o=r[1],i=function(t){var r={page:1,isFollowing:t.target.id};n((0,J.nv)(r))};return(0,I.jsxs)(tn,{onClick:function(){return o((function(n){return!n}))},isOpen:e,children:[(0,I.jsx)("p",{children:"Filter"}),e&&(0,I.jsxs)(rn,{children:[(0,I.jsx)(en,{onClick:i,id:"",children:"Show all"}),(0,I.jsx)(en,{onClick:i,id:"true",children:"Show following"}),(0,I.jsx)(en,{onClick:i,id:"false",children:"Show follow"})]})]})},an=function(){return(0,I.jsxs)(_,{children:[(0,I.jsx)($,{to:"/",children:"BACK"}),(0,I.jsx)(on,{}),(0,I.jsx)(q,{})]})}}}]);
//# sourceMappingURL=394.06f3ae6f.chunk.js.map