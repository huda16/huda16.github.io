!function(n){function t(t){for(var r,o,c=t[0],s=t[1],u=t[2],p=0,d=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r]);for(l&&l(t);d.length;)d.shift()();return a.push.apply(a,u||[]),e()}function e(){for(var n,t=0;t<a.length;t++){for(var e=a[t],r=!0,c=1;c<e.length;c++){var s=e[c];0!==i[s]&&(r=!1)}r&&(a.splice(t--,1),n=o(o.s=e[0]))}return n}var r={},i={2:0},a=[];function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=n,o.c=r,o.d=function(n,t,e){o.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,t){if(1&t&&(n=o(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)o.d(e,r,function(t){return n[t]}.bind(null,r));return e},o.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(t,"a",t),t},o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.p="";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;a.push([10,1,0]),e()}({10:function(n,t,e){"use strict";e.r(t);e(0),e(4),e(5),e(6);var r={init:function(n){var t=this,e=n.button,r=n.drawer,i=n.content;e.addEventListener("click",(function(n){t._toggleDrawer(n,e,r)})),i.addEventListener("click",(function(n){t._closeDrawer(n,e,r)}))},_toggleDrawer:function(n,t,e){n.stopPropagation(),t.classList.toggle("is-active"),e.classList.toggle("active")},_closeDrawer:function(n,t,e){n.stopPropagation(),t.classList.remove("is-active"),e.classList.remove("active")}},i={parseActiveUrlWithCombiner:function(){var n=window.location.hash.slice(1).toLowerCase(),t=this._urlSplitter(n);return this._urlCombiner(t)},parseActiveUrlWithoutCombiner:function(){var n=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(n)},_urlSplitter:function(n){var t=n.split("/");return{resource:t[1]||null,id:t[2]||null,verb:t[3]||null}},_urlCombiner:function(n){return(n.resource?"/".concat(n.resource):"/")+(n.id?"/:id":"")+(n.verb?"/".concat(n.verb):"")}},a={KEY:"12345",BASE_URL:"https://restaurant-api.dicoding.dev/",BASE_IMAGE_URL:"https://restaurant-api.dicoding.dev/images",DEFAULT_LANGUAGE:"en-us",CACHE_NAME:(new Date).toISOString(),DATABASE_NAME:"restaurant-catalogue-database",DATABASE_VERSION:1,OBJECT_STORE_NAME:"restaurants"},o={HOME:"".concat(a.BASE_URL,"list"),DETAIL:function(n){return"".concat(a.BASE_URL,"detail/").concat(n)}};function c(n,t,e,r,i,a,o){try{var c=n[a](o),s=c.value}catch(n){return void e(n)}c.done?t(s):Promise.resolve(s).then(r,i)}function s(n){return function(){var t=this,e=arguments;return new Promise((function(r,i){var a=n.apply(t,e);function o(n){c(a,r,i,o,s,"next",n)}function s(n){c(a,r,i,o,s,"throw",n)}o(void 0)}))}}function u(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function l(n){return fetch(o.DETAIL(n)).then((function(n){if(!n.ok)throw new Error(n.statusText);return n.json()})).catch((function(n){console.log(n)})).finally((function(){var n=document.querySelector(".loader");if(n)return n.remove()}))}var p=function(){function n(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n)}var t,e,r,i,a;return t=n,e=null,r=[{key:"listRestaurants",value:(a=s(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch(o.HOME).then((function(n){if(!n.ok)throw new Error(n.statusText);return n.json()})).catch((function(n){console.log(n)})).finally((function(){var n=document.querySelector(".loader");if(n)return n.remove()}));case 3:return t=n.sent,n.abrupt("return",t.restaurants);case 7:n.prev=7,n.t0=n.catch(0),alert(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])}))),function(){return a.apply(this,arguments)})},{key:"detailRestaurant",value:(i=s(regeneratorRuntime.mark((function n(t){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l(t);case 3:return e=n.sent,n.abrupt("return",e.restaurant);case 7:n.prev=7,n.t0=n.catch(0),alert(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])}))),function(n){return i.apply(this,arguments)})}],e&&u(t.prototype,e),r&&u(t,r),n}(),d=function(n){return'\n      <picture class="lazyload">\n        <source media="(max-width: 600px)" srcset="'.concat(a.BASE_IMAGE_URL+"/medium/"+n.pictureId,'">\n          <img class="restaurant__poster lazyload" src="').concat(a.BASE_IMAGE_URL+"/large/"+n.pictureId,'" alt="').concat(n.name,'" tabindex="0">\n      </picture>\n      <div class="sub_content">\n        <h2 class="restaurant__title" tabindex="0">').concat(n.name,'</h2>\n        <div class="restaurant__info">\n          <h3 tabindex="0">City</h3>\n          <p tabindex="0">').concat(n.city,'</p>\n          <h3 tabindex="0">Address</h3>\n          <p tabindex="0">').concat(n.address,'</p>\n          <h3 tabindex="0">Rating: ').concat(n.rating,'</h3>\n          <h3 tabindex="0">Description</h3>\n          <p tabindex="0">').concat(n.description,'</p>\n          <h3 tabindex="0">Menu Categories</h3>\n          <p tabindex="0">').concat(n.categories.map((function(n){return" ".concat(n.name)})),'</p>\n          <h3 tabindex="0">Food Menu</h3>\n          <p tabindex="0">').concat(n.menus.foods.map((function(n){return" ".concat(n.name)})),'</p>\n          <h3 tabindex="0">Drink Menu</h3>\n          <p tabindex="0">').concat(n.menus.drinks.map((function(n){return" ".concat(n.name)})),'</p>\n          <h3 tabindex="0">Customer Review</h3>\n          ').concat(n.customerReviews.map((function(n){return'<div class="review" tabindex="0"> <p class="name">'.concat(n.name,'</p> <p class="message">').concat(n.review,'</p>  <p class="date">').concat(n.date,"</p> </div>")})).join(""),"\n        </div>\n      </div>")},g=function(n){return'<article class="item">\n                <a href="'.concat("/#/detail/".concat(n.id),'">\n                    <p class="item_city">',n.city,'</p>\n                    <picture class="lazyload">\n                      <source media="(max-width: 600px)" srcset="').concat(a.BASE_IMAGE_URL+"/small/"+n.pictureId,'">\n                        <img class="item_thumbnail lazyload" src="').concat(a.BASE_IMAGE_URL+"/small/"+n.pictureId,'" alt="').concat(n.name,'" tabindex="0">\n                    </picture>\n                    <div class="item_content">\n                        <p class="item_rating">Rating: ').concat(n.rating,'</p>\n                        <h1 class="item_title">').concat(n.name,'</h1>\n                        <p class="item_description">\n                            ').concat(n.description,"\n                        </p>\n                    </div>\n                </a>\n            </article>")};function h(n,t,e,r,i,a,o){try{var c=n[a](o),s=c.value}catch(n){return void e(n)}c.done?t(s):Promise.resolve(s).then(r,i)}function x(n){return function(){var t=this,e=arguments;return new Promise((function(r,i){var a=n.apply(t,e);function o(n){h(a,r,i,o,c,"next",n)}function c(n){h(a,r,i,o,c,"throw",n)}o(void 0)}))}}var m={render:function(){return x(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n    <div class="hero" tabindex="0">\n            <picture class="lazyload">\n                <source media="(max-width: 600px)" srcset="./images/hero-image_1-small.jpg">\n                <img \n                    src=\'./images/hero-image_1-medium.jpg\' \n                    alt="Hero Image" class="slides lazyload" width="640" height="360">\n            </picture>\n            <picture class="lazyload">\n                <source media="(max-width: 600px)" srcset="./images/hero-image_2-small.jpg">\n                <img \n                    src=\'./images/hero-image_2-medium.jpg\' \n                    alt="Hero Image" class="slides lazyload" width="640" height="360">\n            </picture>\n            <picture class="lazyload">\n                <source media="(max-width: 600px)" srcset="./images/hero-image_3-small.jpg">\n                <img \n                    src=\'./images/hero-image_3-medium.jpg\' \n                    alt="Hero Image" class="slides lazyload" width="640" height="360">\n            </picture>\n            <picture class="lazyload">\n                <source media="(max-width: 600px)" srcset="./images/hero-image_4-small.jpg">\n                <img \n                    src=\'./images/hero-image_4-medium.jpg\' \n                    alt="Hero Image" class="slides lazyload" width="640" height="360">\n            </picture>\n            <p class="hero_text">up&co poster</p>\n            <button onclick="plusDivs(-1)" class="hero_left">&#10094;</button>\n            <button onclick="plusDivs(1)" class="hero_right">&#10095;</button>\n        </div>\n        <h1 class="main_title" tabindex="0">Explore Restaurant</h1>\n        <section class="content" id="content">\n        </section>');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return x(regeneratorRuntime.mark((function n(){var t,e,r,i,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.listRestaurants();case 2:t=n.sent,e=document.querySelector("#content"),t.forEach((function(n){e.innerHTML+=g(n)})),i=function(n){return a(r+=n)},(a=function(n){var t=document.querySelectorAll(".slides");n>t.length?r=1:n<1&&(r=t.length),t.forEach((function(n){n.style.display="none"})),t[r-1].style.display="block"})(r=1),window.plusDivs=i;case 10:case"end":return n.stop()}}),n)})))()}},f=e(3);function b(n,t,e,r,i,a,o){try{var c=n[a](o),s=c.value}catch(n){return void e(n)}c.done?t(s):Promise.resolve(s).then(r,i)}function v(n){return function(){var t=this,e=arguments;return new Promise((function(r,i){var a=n.apply(t,e);function o(n){b(a,r,i,o,c,"next",n)}function c(n){b(a,r,i,o,c,"throw",n)}o(void 0)}))}}var w=a.DATABASE_NAME,_=a.DATABASE_VERSION,y=a.OBJECT_STORE_NAME,k=Object(f.a)(w,_,{upgrade:function(n){n.createObjectStore(y,{keyPath:"id"})}}),R={getRestaurant:function(n){return v(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,k;case 4:return t.abrupt("return",t.sent.get(y,n));case 5:case"end":return t.stop()}}),t)})))()},getAllRestaurants:function(){return v(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k;case 2:return n.abrupt("return",n.sent.getAll(y));case 3:case"end":return n.stop()}}),n)})))()},putRestaurant:function(n){return v(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.hasOwnProperty("id")){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,k;case 4:return t.abrupt("return",t.sent.put(y,n));case 5:case"end":return t.stop()}}),t)})))()},deleteRestaurant:function(n){return v(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k;case 2:return t.abrupt("return",t.sent.delete(y,n));case 3:case"end":return t.stop()}}),t)})))()}};function z(n,t,e,r,i,a,o){try{var c=n[a](o),s=c.value}catch(n){return void e(n)}c.done?t(s):Promise.resolve(s).then(r,i)}function E(n){return function(){var t=this,e=arguments;return new Promise((function(r,i){var a=n.apply(t,e);function o(n){z(a,r,i,o,c,"next",n)}function c(n){z(a,r,i,o,c,"throw",n)}o(void 0)}))}}var A={init:function(n){var t=this;return E(regeneratorRuntime.mark((function e(){var r,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.likeButtonContainer,i=n.restaurant,t._likeButtonContainer=r,t._restaurant=i,e.next=5,t._renderButton();case 5:case"end":return e.stop()}}),e)})))()},_renderButton:function(){var n=this;return E(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n._restaurant.id,t.next=3,n._isRestaurantExist(e);case 3:if(!t.sent){t.next=7;break}n._renderLiked(),t.next=8;break;case 7:n._renderLike();case 8:case"end":return t.stop()}}),t)})))()},_isRestaurantExist:function(n){return E(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R.getRestaurant(n);case 2:return e=t.sent,t.abrupt("return",!!e);case 4:case"end":return t.stop()}}),t)})))()},_renderLike:function(){var n=this;this._likeButtonContainer.innerHTML='\n  <button aria-label="like this restaurant" id="likeButton" class="like">\n     <i class="fa fa-heart-o" aria-hidden="true"></i>\n  </button>\n',document.querySelector("#likeButton").addEventListener("click",E(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R.putRestaurant(n._restaurant);case 2:n._renderButton();case 3:case"end":return t.stop()}}),t)}))))},_renderLiked:function(){var n=this;this._likeButtonContainer.innerHTML='\n  <button aria-label="unlike this restaurant" id="likeButton" class="like">\n    <i class="fa fa-heart" aria-hidden="true"></i>\n  </button>\n',document.querySelector("#likeButton").addEventListener("click",E(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R.deleteRestaurant(n._restaurant.id);case 2:n._renderButton();case 3:case"end":return t.stop()}}),t)}))))}};function S(n,t,e,r,i,a,o){try{var c=n[a](o),s=c.value}catch(n){return void e(n)}c.done?t(s):Promise.resolve(s).then(r,i)}function j(n){return function(){var t=this,e=arguments;return new Promise((function(r,i){var a=n.apply(t,e);function o(n){S(a,r,i,o,c,"next",n)}function c(n){S(a,r,i,o,c,"throw",n)}o(void 0)}))}}function L(n,t,e,r,i,a,o){try{var c=n[a](o),s=c.value}catch(n){return void e(n)}c.done?t(s):Promise.resolve(s).then(r,i)}function P(n){return function(){var t=this,e=arguments;return new Promise((function(r,i){var a=n.apply(t,e);function o(n){L(a,r,i,o,c,"next",n)}function c(n){L(a,r,i,o,c,"throw",n)}o(void 0)}))}}var B={"/":m,"/home":m,"/detail/:id":{render:function(){return j(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n      <h1 class="main_title" tabindex="0">Detail Restaurant</h1>\n      <div id="restaurant" class="restaurant">\n      </div>\n      <div id="likeButtonContainer"></div>\n    ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return j(regeneratorRuntime.mark((function n(){var t,e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=i.parseActiveUrlWithoutCombiner(),n.next=3,p.detailRestaurant(t.id);case 3:e=n.sent,document.querySelector("#restaurant").innerHTML=d(e),A.init({likeButtonContainer:document.querySelector("#likeButtonContainer"),restaurant:{id:e.id,name:e.name,description:e.description,pictureId:e.pictureId,rating:e.rating,city:e.city}});case 7:case"end":return n.stop()}}),n)})))()}},"/like":{render:function(){return P(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n      <h1 class="main_title" tabindex="0">Favorite Restaurant</h1>\n        <section class="content" id="content">\n        </section>\n    ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return P(regeneratorRuntime.mark((function n(){var t,e,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,R.getAllRestaurants();case 2:t=n.sent,e=document.querySelector("#content"),0===t.length&&(document.querySelector("#mainContent").innerHTML='<h1 class="main_title" tabindex="0">Favorite restaurant is empty</h1>'),(r=document.querySelector(".loader"))&&r.remove(),t.forEach((function(n){e.innerHTML+=g(n)}));case 8:case"end":return n.stop()}}),n)})))()}}};function M(n,t,e,r,i,a,o){try{var c=n[a](o),s=c.value}catch(n){return void e(n)}c.done?t(s):Promise.resolve(s).then(r,i)}function C(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var O=function(){function n(t){var e=t.button,r=t.drawer,i=t.content;!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this._button=e,this._drawer=r,this._content=i,this._initialAppShell()}var t,e,a,o,c;return t=n,(e=[{key:"_initialAppShell",value:function(){r.init({button:this._button,drawer:this._drawer,content:this._content})}},{key:"renderPage",value:(o=regeneratorRuntime.mark((function n(){var t,e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=i.parseActiveUrlWithCombiner(),e=B[t],n.next=4,e.render();case 4:return this._content.innerHTML=n.sent,n.next=7,e.afterRender();case 7:case"end":return n.stop()}}),n,this)})),c=function(){var n=this,t=arguments;return new Promise((function(e,r){var i=o.apply(n,t);function a(n){M(i,e,r,a,c,"next",n)}function c(n){M(i,e,r,a,c,"throw",n)}a(void 0)}))},function(){return c.apply(this,arguments)})}])&&C(t.prototype,e),a&&C(t,a),n}(),T=e(2),I=e.n(T);function D(n,t,e,r,i,a,o){try{var c=n[a](o),s=c.value}catch(n){return void e(n)}c.done?t(s):Promise.resolve(s).then(r,i)}var q=function(){var n,t=(n=regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!("serviceWorker"in navigator)){n.next=4;break}return n.next=3,I.a.register();case 3:return n.abrupt("return");case 4:console.log("Service worker not supported in this browser");case 5:case"end":return n.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(r,i){var a=n.apply(t,e);function o(n){D(a,r,i,o,c,"next",n)}function c(n){D(a,r,i,o,c,"throw",n)}o(void 0)}))});return function(){return t.apply(this,arguments)}}(),H=new O({button:document.querySelector("#drawer"),drawer:document.querySelector(".nav"),content:document.querySelector("#mainContent")});window.addEventListener("hashchange",(function(){H.renderPage()})),window.addEventListener("load",(function(){H.renderPage(),q()}))},6:function(n,t,e){var r=e(7),i=e(8);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);n.exports=i.locals||{}},8:function(n,t,e){(t=e(9)(!1)).push([n.i,'* {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  scroll-behavior: smooth;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  font: 12px/18px "Quicksand", arial, sans-serif;\n  height: 100%;\n}\n\na {\n  text-decoration: none;\n  color: white;\n}\n\nmain {\n  width: 100%;\n  margin: 0 auto;\n}\n\n.slides {\n  display: none;\n}\n\n.skip-link {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  background-color: #bf1722;\n  color: white;\n  padding: 8px;\n  z-index: 9999;\n}\n\n.skip-link:focus {\n  top: 0;\n}\n\n/*\n   Like\n*/\n.like {\n  font-size: 18px;\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  background-color: #db0000;\n  color: white;\n  border: 0;\n  border-radius: 50%;\n  width: 55px;\n  height: 55px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\n/*\nloader \n */\n.loader {\n  border: 16px solid #f3f3f3; /* Light grey */\n  border-top: 16px solid #1c1b29; /* Blue */\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  animation: spin 2s linear infinite;\n  margin: auto;\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n/* tampilan desktop */\n@media screen and (min-width: 1000px) {\n  nav {\n    color: white;\n    background: #1c1b29;\n    height: 80px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.2rem;\n    position: sticky;\n    top: 0;\n    z-index: 999;\n  }\n\n  .nav_title {\n    text-align: center;\n    margin: auto;\n  }\n\n  .nav {\n    display: flex;\n    list-style: none;\n    align-items: flex-end;\n    margin: auto;\n  }\n\n  .nav_item {\n    margin: 0px 0px 0px 20px;\n    font-size: 22px;\n    padding: 15px 10px;\n    text-align: center;\n    color: white;\n    text-decoration: none;\n    list-style: none;\n    margin-left: 10px;\n  }\n\n  .nav_item:hover {\n    background-color: rgba(255, 255, 255, 0.5);\n  }\n\n  .hero {\n    width: 100%;\n    max-height: 500px;\n    box-sizing: border-box;\n  }\n\n  .hero img {\n    width: 100%;\n    height: auto;\n    max-height: 500px;\n    box-sizing: border-box;\n    object-fit: cover;\n    object-position: 100% 20%;\n  }\n\n  .hero_text {\n    color: white;\n    padding: 10px;\n    background-color: rgba(0, 0, 0, 0.2);\n    font-size: large;\n    position: absolute;\n    top: 300px;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n  .hero_left {\n    padding: 5px 20px;\n    font-size: 40px;\n    position: absolute;\n    top: 280px;\n    background-color: rgba(255, 255, 255, 0.5);\n  }\n\n  .hero_right {\n    padding: 5px 20px;\n    font-size: 40px;\n    position: absolute;\n    top: 280px;\n    right: 0;\n    background-color: rgba(255, 255, 255, 0.5);\n  }\n\n  .main_title {\n    margin: 20px 0;\n    text-align: center;\n  }\n\n  .content {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-column-gap: 10px;\n    grid-row-gap: 10px;\n    padding: 10px;\n    box-sizing: border-box;\n  }\n\n  .item {\n    width: 100%;\n    max-height: 350px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    box-sizing: border-box;\n    overflow: hidden;\n  }\n\n  .item_thumbnail {\n    width: 100%;\n    height: 60%;\n    object-fit: cover;\n    object-position: 80% 100%;\n  }\n\n  .item_content {\n    padding: 0px 5px;\n  }\n\n  .item_city {\n    color: white;\n    font-size: small;\n    position: absolute;\n    background-color: rgba(0, 0, 0, 0.8);\n    padding: 3px 10px;\n  }\n\n  .item_rating {\n    font-size: 12px;\n    color: black;\n  }\n\n  .item_title {\n    color: #1c1b29;\n    font-size: large;\n    line-height: normal;\n  }\n\n  .item_description {\n    line-height: normal;\n    font-size: 12px;\n    color: black;\n  }\n\n  footer {\n    color: white;\n    background-color: #1c1b29;\n    margin: auto;\n    width: 100%;\n    height: 60px;\n  }\n\n  footer p {\n    padding: 20px;\n    font-size: 18px;\n    text-align: center;\n    font-weight: bold;\n  }\n\n  /*\n  restaurant\n    */\n\n  .restaurant {\n    margin: 0 auto;\n    width: 100%;\n    max-width: 800px;\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 18px 16px;\n  }\n\n  .restaurant .restaurant__poster {\n    width: 100%;\n    box-sizing: border-box;\n  }\n\n  .sub_content {\n    width: 100%;\n    box-sizing: border-box;\n    background-color: white;\n    margin-bottom: 20px;\n    border-radius: 30px 30px 0 0;\n    padding: 20px;\n  }\n\n  .restaurant__title {\n    margin-bottom: 10px;\n    font-size: x-large;\n  }\n\n  .restaurant .restaurant__info {\n    line-height: normal;\n  }\n\n  .restaurant .restaurant__info h3 {\n    font-size: large;\n  }\n  .restaurant .restaurant__info p {\n    font-size: medium;\n  }\n\n  .restaurant .review {\n    margin: 10px 0;\n    background-color: white;\n    width: 100%;\n    min-height: 50px;\n    border-radius: 5px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    padding: 5px;\n    box-sizing: border-box;\n  }\n\n  .restaurant .review .name {\n    font-weight: bold;\n  }\n\n  .restaurant .review .date {\n    text-align: end;\n  }\n}\n\n@media screen and (min-width: 1400px) {\n  .content {\n    grid-template-columns: repeat(5, 1fr);\n  }\n\n  .item {\n    width: 100%;\n    max-height: 400px;\n  }\n}\n\n@media screen and (min-width: 1900px) {\n  .content {\n    grid-template-columns: repeat(6, 1fr);\n  }\n\n  .item {\n    width: 100%;\n    max-height: 400px;\n  }\n}\n\n/* tampilan tablet */\n@media screen and (min-width: 551px) and (max-width: 1000px) {\n  nav {\n    color: white;\n    background: #1c1b29;\n    height: 80px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.2rem;\n    position: sticky;\n    top: 0;\n    z-index: 999;\n  }\n\n  .nav_title {\n    text-align: center;\n    margin: auto;\n  }\n\n  .nav {\n    display: flex;\n    list-style: none;\n    align-items: flex-end;\n    margin: auto;\n  }\n\n  .nav_item {\n    margin: 0px 0px 0px 20px;\n    font-size: 20px;\n    padding: 15px 10px;\n    text-align: center;\n    color: white;\n    text-decoration: none;\n    list-style: none;\n    margin-left: 10px;\n  }\n\n  .nav_item:hover {\n    background-color: rgba(255, 255, 255, 0.5);\n  }\n\n  .hero {\n    width: 100%;\n    max-height: 500px;\n    box-sizing: border-box;\n  }\n\n  .hero img {\n    width: 100%;\n    height: auto;\n    max-height: 300px;\n    box-sizing: border-box;\n    object-fit: cover;\n  }\n\n  .hero_text {\n    color: white;\n    padding: 10px;\n    background-color: rgba(0, 0, 0, 0.2);\n    font-size: large;\n    position: absolute;\n    top: 220px;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n  .hero_left {\n    padding: 5px 20px;\n    font-size: 40px;\n    position: absolute;\n    top: 190px;\n    background-color: rgba(255, 255, 255, 0.5);\n  }\n\n  .hero_right {\n    padding: 5px 20px;\n    font-size: 40px;\n    position: absolute;\n    top: 190px;\n    right: 0;\n    background-color: rgba(255, 255, 255, 0.5);\n  }\n\n  .main_title {\n    margin: 20px 0;\n    text-align: center;\n  }\n\n  .content {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-column-gap: 10px;\n    grid-row-gap: 10px;\n    box-sizing: border-box;\n    padding: 10px;\n  }\n\n  .item {\n    width: 100%;\n    height: 300px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    box-sizing: border-box;\n    overflow: hidden;\n  }\n\n  .item_thumbnail {\n    width: 100%;\n    height: 60%;\n    object-fit: cover;\n    object-position: 80% 100%;\n  }\n\n  .item_content {\n    padding: 0px 5px;\n  }\n\n  .item_city {\n    color: white;\n    font-size: 11px;\n    position: absolute;\n    background-color: rgba(0, 0, 0, 0.8);\n    padding: 3px 10px;\n  }\n\n  .item_title {\n    font-size: medium;\n    color: #1c1b29;\n  }\n\n  .item_rating {\n    color: black;\n  }\n\n  .item_description {\n    line-height: normal;\n    color: black;\n  }\n\n  footer {\n    color: white;\n    background-color: #1c1b29;\n    margin: auto;\n    width: 100%;\n    height: 60px;\n  }\n\n  footer p {\n    padding: 20px;\n    font-size: 18px;\n    text-align: center;\n    font-weight: bold;\n  }\n\n  /*\n  restaurant\n    */\n\n  .restaurant {\n    margin: 0 auto;\n    width: 100%;\n    max-width: 1000px;\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 18px 16px;\n  }\n\n  .restaurant .restaurant__poster {\n    width: 100%;\n    box-sizing: border-box;\n  }\n\n  .sub_content {\n    width: 100%;\n    box-sizing: border-box;\n    background-color: white;\n    margin-top: -40px;\n    margin-bottom: 20px;\n    border-radius: 30px 30px 0 0;\n    padding: 20px;\n  }\n\n  .restaurant__title {\n    margin-bottom: 10px;\n    font-size: x-large;\n  }\n\n  .restaurant .restaurant__info {\n    line-height: normal;\n  }\n\n  .restaurant .restaurant__info h3 {\n    font-size: large;\n  }\n  .restaurant .restaurant__info p {\n    font-size: medium;\n  }\n\n  .restaurant .review {\n    margin: 10px 0;\n    background-color: white;\n    width: 100%;\n    min-height: 50px;\n    border-radius: 5px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    padding: 5px;\n    box-sizing: border-box;\n  }\n\n  .restaurant .review .name {\n    font-weight: bold;\n  }\n\n  .restaurant .review .date {\n    text-align: end;\n  }\n}\n\n/* tampilan mobile */\n@media screen and (max-width: 550px) {\n  nav {\n    color: white;\n    background-color: #1c1b29;\n    width: 100%;\n    height: 80px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.2rem;\n    position: sticky;\n    top: 0;\n    z-index: 999;\n  }\n\n  .nav_title {\n    width: 100%;\n    text-align: center;\n    margin-left: 10%;\n  }\n\n  .nav {\n    display: grid;\n    grid-template-columns: auto;\n    width: 100%;\n    list-style: none;\n    margin: auto;\n    position: absolute;\n    top: -1000px;\n    opacity: 1;\n    transition: all 0.5s ease;\n    z-index: -1;\n  }\n\n  .navbar_toggle .bar {\n    width: 25px;\n    height: 3px;\n    margin: 5px 20px;\n    transition: all 0.3s ease;\n    background: white;\n  }\n\n  .nav.active {\n    top: 100%;\n    background: #1c1b29;\n    opacity: 1;\n    z-index: 99;\n    height: 150px;\n    font-size: 1.6rem;\n    transition: all 0.5s ease;\n  }\n\n  .nav.active li {\n    border-bottom: 1px solid white;\n  }\n\n  .nav.active li a {\n    position: relative;\n    left: 5%;\n    top: 25%;\n    margin: auto;\n    color: white;\n    text-align: left;\n    box-sizing: border-box;\n  }\n\n  #mobile-menu {\n    position: absolute;\n    top: 20%;\n    right: 5%;\n    transform: translate(5%, 20%);\n  }\n\n  .navbar_toggle .bar {\n    display: block;\n    cursor: pointer;\n  }\n\n  #drawer {\n    background-color: #1c1b29;\n    padding: 10px 0;\n  }\n\n  #drawer.is-active .bar:nth-child(2) {\n    opacity: 0;\n  }\n\n  #drawer.is-active .bar:nth-child(1) {\n    transform: translateY(8px) rotate(45deg);\n  }\n\n  #drawer.is-active .bar:nth-child(3) {\n    transform: translateY(-8px) rotate(-45deg);\n  }\n\n  .nav_item {\n    width: 100%;\n    padding: 5px 0;\n  }\n\n  .nav_item a {\n    width: 100%;\n    text-align: center;\n    color: white;\n    margin-left: 10px;\n  }\n\n  .hero {\n    width: 100%;\n    max-height: 500px;\n    box-sizing: border-box;\n  }\n\n  .hero img {\n    width: 100%;\n    height: auto;\n    max-height: 300px;\n    box-sizing: border-box;\n    object-fit: cover;\n  }\n\n  .hero_text {\n    color: white;\n    padding: 10px;\n    background-color: rgba(0, 0, 0, 0.2);\n    font-size: large;\n    position: absolute;\n    top: 200px;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n  .hero_left {\n    padding: 5px 15px;\n    font-size: 20px;\n    position: absolute;\n    top: 180px;\n    background-color: rgba(255, 255, 255, 0.5);\n  }\n\n  .hero_right {\n    padding: 5px 15px;\n    font-size: 20px;\n    position: absolute;\n    top: 180px;\n    right: 0;\n    background-color: rgba(255, 255, 255, 0.5);\n  }\n\n  .main_title {\n    margin: 20px 0;\n    text-align: center;\n  }\n\n  .main_title {\n    margin-top: 20px;\n    text-align: center;\n    font-size: large;\n  }\n\n  .content {\n    margin: 20px 0;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-column-gap: 10px;\n    grid-row-gap: 10px;\n    box-sizing: border-box;\n    padding: 10px;\n  }\n\n  .item {\n    margin: 0px 0;\n    width: 100%;\n    max-height: 250px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    box-sizing: border-box;\n    overflow: hidden;\n  }\n\n  .item_thumbnail {\n    width: 100%;\n    height: 60%;\n    object-fit: cover;\n    object-position: 80% 100%;\n  }\n\n  .item_content {\n    padding: 0px 5px;\n  }\n\n  .item_city {\n    color: white;\n    font-size: xx-small;\n    position: absolute;\n    background-color: rgba(0, 0, 0, 0.8);\n    padding: 3px 10px;\n  }\n\n  .item_title {\n    color: #1c1b29;\n  }\n\n  .item_rating {\n    font-size: 11px;\n    color: black;\n  }\n\n  .item_description {\n    line-height: normal;\n    color: black;\n  }\n\n  footer {\n    color: white;\n    background-color: #1c1b29;\n    margin: auto;\n    width: 100%;\n    height: 60px;\n  }\n\n  footer p {\n    padding: 20px;\n    font-size: 18px;\n    text-align: center;\n    font-weight: bold;\n  }\n\n  /*\n  restaurant\n    */\n\n  .restaurant {\n    margin: 0 auto;\n    width: 100%;\n    max-width: 800px;\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 18px 16px;\n  }\n\n  .restaurant .restaurant__poster {\n    width: 100%;\n    box-sizing: border-box;\n  }\n\n  .sub_content {\n    width: 100%;\n    box-sizing: border-box;\n    background-color: white;\n    margin-top: -40px;\n    margin-bottom: 20px;\n    border-radius: 30px 30px 0 0;\n    padding: 20px;\n  }\n\n  .restaurant__title {\n    margin-bottom: 10px;\n  }\n\n  .restaurant .review {\n    margin: 5px 0;\n    background-color: white;\n    width: 100%;\n    min-height: 50px;\n    border-radius: 5px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    padding: 5px;\n    box-sizing: border-box;\n  }\n\n  .restaurant .review .name {\n    font-weight: bold;\n  }\n\n  .restaurant .review .date {\n    text-align: end;\n  }\n}\n',""]),n.exports=t}});