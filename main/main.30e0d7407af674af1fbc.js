!function(t){var e={};function s(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=e,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(o,i,function(e){return t[e]}.bind(null,i));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=7)}([function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));class o{constructor(t){this.options=t}saveKey(t,e){localStorage.setItem(t,JSON.stringify(e))}getKey(t){return JSON.parse(localStorage.getItem(t))}removeKey(t){localStorage.removeItem(t)}}},function(t,e,s){"use strict";const o={navButton:document.querySelector(".button__burger"),"navСurtain":document.querySelector(".header__nav"),navAuthButton:document.querySelector(".header__button-login"),saveArticles:document.querySelector(".link-save"),loginButton:document.querySelector(".header__button-logout"),buttonText:document.querySelector(".header__button-logout-text")};e.a=o},function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));class o{constructor(t,e){this.options=t,this.localStorage=e}navControl(){this.options.navСurtain.classList.toggle("header__nav_open"),this.options.navButton.classList.toggle("active")}colorControl(){}headerLogin(t){this.name=t,this.options.saveArticles.classList.remove("disabled"),this.options.loginButton.classList.remove("disabled"),this.options.navAuthButton.classList.add("disabled"),this.options.buttonText.textContent=this.name}headerLogout(){!0===confirm("Вы действительно хотите выйти")&&(this.options.saveArticles.classList.add("disabled"),this.options.loginButton.classList.add("disabled"),this.options.navAuthButton.classList.remove("disabled"),this.options.buttonText.textContent="Hacker",window.location.href="../index.html",localStorage.clear())}"accessСheck"(){void 0!==localStorage.authorizedUser&&(console.log("я нашел!"),this.options.buttonText.textContent=this.localStorage.getKey("authorizedUser"),this.options.navAuthButton.classList.add("disabled"),this.options.loginButton.classList.remove("disabled"),this.options.saveArticles.classList.remove("disabled"))}headerListener(){this.options.loginButton.addEventListener("click",this.headerLogout.bind(this)),this.options.navButton.addEventListener("click",this.navControl.bind(this)),this.options.navAuthButton.addEventListener("click",this.navControl.bind(this))}}},function(t,e,s){"use strict";e.a={baseUrl:"http://localhost:3000"}},function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));class o{constructor(t,e){this.options=t,this.localStorage=e}login(t,e){return console.log(this.options.baseUrl+"/signin"),fetch(this.options.baseUrl+"/signin",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:e})}).then(t=>t.ok?t.json():Promise.reject("Ошибка: "+t.status)).catch(t=>{console.log(t)})}registration(t,e,s){return fetch(this.options.baseUrl+"/signup",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:e,name:s})}).then(o=>o.ok?o.json():(console.log(JSON.stringify({email:t,password:e,name:s})),Promise.reject("Ошибка: "+o.status))).catch(t=>{console.log(t)})}getUser(t){return console.log(t),fetch(this.options.baseUrl+"/users/me",{method:"GET",credentials:"include",headers:{authorization:"Bearer "+t}}).then(t=>t.ok?t.json():Promise.reject("Ошибка: "+t.status))}getArticles(){return fetch(this.options.baseUrl+"/articles",{method:"GET",credentials:"include",headers:{authorization:"Bearer "+this.localStorage.getKey("key"),"Content-Type":"application/json"}}).then(t=>t.ok?t.json():Promise.reject("Ошибка: "+t.status))}postArticles(t,e,s,o,i,n,r){return fetch(this.options.baseUrl+"/articles",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json",authorization:"Bearer "+this.localStorage.getKey("key")},body:JSON.stringify({keyword:t,title:e,text:s,date:o,source:i,link:n,image:r})}).then(t=>t.ok?t.json():Promise.reject("Ошибка: "+t.status)).catch(t=>{console.log(t)})}deleteArticles(t){return fetch(`${this.options.baseUrl}/articles/${t}`,{method:"DELETE",credentials:"include",headers:{authorization:"Bearer "+this.localStorage.getKey("key"),"Content-Type":"application/json"}})}}},function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));class o{constructor({container:t,setFormatDate:e,idCreator:s,button:o,classCreate:i},n){this.container=t,this.setFormatDate=e,this.idCreator=s,this.button=o,this.classCreate=i,this.api=n,this.showСards=this.showСards.bind(this)}addCard(t,e,s,o,i,n,r,a,c){let l;l="Redrawing"===a?s:this.setFormatDate(s);const d=this.classCreate(this.api).create(t,e,l,o,i,n,r,a,c);this.container.appendChild(d)}render(t){this.cardArr=t,this.cardArr.forEach(t=>{this.addCard(t.title,t.description,t.publishedAt,t.urlToImage,t.source.name,t.url)})}renderPrivateCard(t){this.cardArr=t,this.cardArr.forEach(t=>{this.addCard(t.title,t.text,t.date,t.image,t.source,t.link,t.keyword,"Redrawing",t._id)})}arrayControl(t){this.array=t,this.currentIndex=0,this.currentLimit=0,this.checkingSavedCard(t)}"showСards"(t){for(t.preventDefault(),this.currentLimit+=3,this.currentIndex;this.currentIndex<this.currentLimit&&this.currentIndex<this.array.length;this.currentIndex++)this.render([this.array[this.currentIndex]])}refreshCardList(){if(0!==this.container.childNodes.lenght)for(localStorage.removeItem("articleKey");this.container.firstChild;)this.container.removeChild(this.container.firstChild)}listener(){this.button.addEventListener("click",this.showСards)}checkingSavedCard(t){this.api.getArticles().then(e=>{if(0===e.totalResults)console.log("0");else{const s=e.data.title;console.log(s,t.title),t.title.every((t,e)=>t===s[e])?console.log("О такая уже есть"):console.log("хто я")}})}}},function(t,e,s){"use strict";var o=t=>{console.log(t);return new Date(t).toLocaleString("ru",{year:"numeric",month:"long",day:"numeric"})};var i=()=>"f"+(~~(1e8*Math.random())).toString(16);class n{constructor(t){this.api=t}create(t,e,s,o,i,n,r,a,c){const l=document.createElement("div"),d=document.createElement("button"),u=document.createElement("p"),h=document.createElement("img"),p=document.createElement("span"),m=document.createElement("h3"),g=document.createElement("p"),b=document.createElement("a"),v=document.createElement("button");v.classList.add("place-card__backet");const f=document.createElement("p");return f.classList.add("place-card__keyword"),l.classList.add("place-card"),d.classList.add("place-card__flag"),u.classList.add("place-card__prompt"),h.classList.add("place-card__image"),p.classList.add("place-card__date"),m.classList.add("place-card__title"),g.classList.add("place-card__text"),b.classList.add("place-card__link"),b.classList.add("link"),h.setAttribute("alt","Изображение"),h.setAttribute("src",""+o),b.setAttribute("target","_blank"),b.setAttribute("href",""+n),u.textContent="Войдите, чтобы сохранять статьи",p.textContent=s,m.textContent=t,g.textContent=e,b.textContent=i,l.appendChild(d),l.appendChild(u),l.appendChild(h),l.appendChild(p),l.appendChild(m),l.appendChild(g),l.appendChild(b),"Redrawing"===a&&(u.textContent="Убрать из сохранённых",l.appendChild(v),l.appendChild(f),f.textContent=r,l.removeChild(d),l.dataset.id=c,this.cardBucket=v,this.cardControlKey=a,this.bucketListener()),this.cardFlag=d,this.cardPrompt=u,this.cardTitle=m,this.cardText=g,this.cardDate=p,this.cardlink=b,this.cardImage=h,this.accessСheck(),this.placeCard=l,l}promt(){this.cardPrompt.classList.toggle("place-card__prompt_visible")}deleteCard(){this.api.deleteArticles(this.placeCard.dataset.id).then(t=>{t.ok&&(console.log("удалилась"),this.cardFlag.classList.remove("place-card__flag_active"),this.removelistener(),"Redrawing"===this.cardControlKey&&this.placeCard.remove())}).catch(t=>{console.log(t)})}"accessСheck"(){void 0!==localStorage.authorizedUser?this.loginListener():this.promtListener()}saveCard(){console.log(localStorage.getItem("articleKey")),this.api.postArticles(JSON.parse(localStorage.getItem("articleKey")),this.cardTitle.textContent,this.cardText.textContent,this.cardDate.textContent,this.cardlink.textContent,this.cardlink.href,this.cardImage.src).then(t=>{void 0!==t?(console.log("Сохранилась"),this.placeCard.dataset.id=t.id,console.log(this.placeCard.dataset.id),this.cardFlag.classList.add("place-card__flag_active")):(this.cardPrompt.textContent="Не могу сохранить:(",this.cardPrompt.classList.toggle("place-card__prompt_visible"))}).catch(t=>{console.log(t)})}flagControl(){this.cardFlag.classList.contains("place-card__flag_active")?this.deleteCard():this.saveCard()}removelistener(){"Redrawing"===this.cardControlKey?(this.cardBucket.removeEventListener("mouseout",this.promt.bind(this)),this.cardBucket.removeEventListener("mouseover",this.promt.bind(this)),this.cardBucket.removeEventListener("click",this.deleteCard.bind(this)),console.log("я удалил слушатель")):(this.cardFlag.removeEventListener("mouseout",this.promt.bind(this)),this.cardFlag.removeEventListener("mouseover",this.promt.bind(this)),this.cardFlag.removeEventListener("click",this.flagControl.bind(this)),console.log("Я удалил слшуатель с флага"))}promtListener(){this.cardFlag.addEventListener("mouseout",this.promt.bind(this)),this.cardFlag.addEventListener("mouseover",this.promt.bind(this))}loginListener(){this.cardFlag.addEventListener("click",this.flagControl.bind(this))}bucketListener(){this.cardBucket.addEventListener("mouseout",this.promt.bind(this)),this.cardBucket.addEventListener("mouseover",this.promt.bind(this)),this.cardBucket.addEventListener("click",this.deleteCard.bind(this))}}const r={container:document.querySelector(".place-list__container"),setFormatDate:o,idCreator:i,button:document.querySelector(".place-list__button"),classCreate:t=>new n(t)};e.a=r},function(t,e,s){"use strict";s.r(e),s.d(e,"newsApi",(function(){return B})),s.d(e,"cardList",(function(){return A}));var o=s(0),i=s(1),n=s(2);var r={baseUrl:"https://newsapi.org/v2/",sortBy:"popularity",pageSize:"100",apiKey:"cefe7cbdc6b94355ae9ee08e1066ea96",endpoint:"everything"};var a=s(3),c=s(4),l=s(6),d=s(5);var u={validationLenght:"Должно быть от 2 до 30 символов",validationNull:"Это обязательное поле",validationEmail:"Неправильный формат Email"};const h={words:u,formElement:[...document.querySelector(".popup-login").querySelectorAll(".popup__input")],formImput:document.forms.login,popupButton:document.querySelector(".button__login")},p={words:u,formElement:[...document.querySelector(".popup-registration").querySelectorAll(".popup__input")],formImput:document.forms.registration,popupButton:document.querySelector(".button__registration")};class m{constructor({words:t,formElement:e,formImput:s,popupButton:o}){this.words=t,this.formElement=e,this.formImput=s,this.popupButton=o}setEventListeners(){let t=!0;this.formElement.forEach(e=>(this.checkInputValidity(e)||(t=!1),t)),this.setSubmitButtonState(t,this.popupButton)}checkInputValidity(t){let e=t.id;const s=t.nextElementSibling.id;return!0===t.validity.tooShort?(e+="-error",e===s&&(t.nextElementSibling.textContent=this.words.validationLenght),!1):!0===t.validity.valueMissing?(e+="-error",e===s&&(t.nextElementSibling.textContent=this.words.validationNull),!1):!0===t.validity.typeMismatch?(e+="-error",e===s&&(t.nextElementSibling.textContent=this.words.validationEmail),!1):(t.nextElementSibling.textContent="",!0)}setSubmitButtonState(t,e){!0===t?(e.removeAttribute("disabled"),e.classList.add("popup__button_enable")):(e.setAttribute("disabled",!0),e.classList.remove("popup__button_enable"))}listener(){this.formImput.addEventListener("input",this.setEventListeners.bind(this))}}var g=(t=0)=>{const e=new Date;e.setDate(e.getDate()-t);const s=e.getFullYear(),o=e.getMonth()+1,i=e.getDate();return`${s}-${o<10?"0"+o:o}-${i<10?"0"+i:i}`};var b={imput:document.querySelector(".intro__search"),setTimeAgo:g,preloader:document.querySelector(".preloader"),section:document.querySelector(".place-list"),searchError:document.querySelector(".not-found")};const v=[...document.querySelectorAll(".popup__close")];var f={element:document.querySelector(".popup-login"),buttonOpen:document.querySelector(".header__button-login"),buttonClose:v[0],secondButton:document.querySelector(".button-registration"),secondForm:document.querySelector(".popup-registration")};class y{constructor(t){this.option=t}open(){this.option.element.classList.remove("disabled")}close(){this.option.element.classList.add("disabled")}listener(){this.option.buttonOpen.addEventListener("click",this.open.bind(this)),this.option.buttonClose.addEventListener("click",this.close.bind(this))}}const L=[...document.querySelectorAll(".popup__close")];var S={element:document.querySelector(".popup-registration"),buttonOpen:document.querySelector(".popup__button-another-form"),buttonClose:L[1],secondButton:document.querySelector(".button-login-one"),secondForm:document.querySelector(".popup-login")};const C=[...document.querySelectorAll(".popup__close")];var _={element:document.querySelector(".popup-successful"),buttonClose:C[2],secondButton:document.querySelector(".button-login-two"),secondForm:document.querySelector(".popup-login")};var E={formLogin:document.forms.login,formRegistration:document.forms.registration,loginPopup:document.querySelector(".popup-login"),registrationPopup:document.querySelector(".popup-registration"),successfulPopup:document.querySelector(".popup-successful")};const k=new o.a,w=new n.a(i.a,k);w.headerListener(),w.accessСheck();const B=new class{constructor({baseUrl:t,endpoint:e,sortBy:s,pageSize:o,apiKey:i}){this.baseUrl=t,this.endpoint=e,this.sortBy=s,this.apiKey=i,this.pageSize=o}getNews(t,e){return fetch(`${this.baseUrl}${this.endpoint}?q=${t}&from=${e(7)}&sortBy=${this.sortBy}&pageSize=${this.pageSize}&apiKey=`+this.apiKey).then(t=>t.ok?t.json():Promise.reject("Ошибка: "+t.status))}}(r),x=new c.a(a.a,k),A=new d.a(l.a,x);A.listener();const q=new m(h),O=new m(p);q.listener(),O.listener();const I=new class{constructor({imput:t,setTimeAgo:e,preloader:s,section:o,searchError:i},n,r){this.imput=t,this.cardList=n,this.setTimeAgo=e,this.newsApi=r,this.preloader=s,this.section=o,this.searchError=i,this.keyword=this.keyword.bind(this)}keyword(t){t.preventDefault(),this.open();const e=document.forms.search.elements.search.value;this.newsApi.getNews(e,this.setTimeAgo).then(s=>{0===s.totalResults?this.searchError.classList.remove("disabled"):(this.section.classList.remove("disabled"),this.searchError.classList.add("disabled"),this.cardList.refreshCardList(),localStorage.setItem("articleKey",JSON.stringify(e)),this.cardList.arrayControl(s.articles),this.cardList.showСards(t),console.log(JSON.parse(localStorage.getItem("articleKey"))))}).catch(t=>{console.log(t)}).finally(()=>{this.close()})}open(){this.searchError.classList.add("disabled"),this.preloader.classList.remove("disabled"),this.section.classList.add("disabled")}close(){this.preloader.classList.add("disabled")}}(b,A,B);document.forms.search.addEventListener("submit",I.keyword);new class extends y{constructor({element:t,buttonOpen:e,buttonClose:s,secondButton:o}){super({element:t,buttonOpen:e,buttonClose:s}),super.listener(),this.element=t,this.secondButton=o}closeLogin(){this.element.classList.add("disabled")}listenerLogin(){this.secondButton.addEventListener("click",this.closeLogin.bind(this))}}(f).listenerLogin();new class extends y{constructor({element:t,buttonOpen:e,buttonClose:s,secondButton:o,secondForm:i}){super({element:t,buttonOpen:e,buttonClose:s}),super.listener(),this.element=t,this.secondButton=o,this.secondForm=i}openRegistration(){this.secondForm.classList.remove("disabled")}closeRegistration(){this.element.classList.add("disabled")}listenerRegistration(){this.secondButton.addEventListener("click",this.openRegistration.bind(this)),this.secondButton.addEventListener("click",this.closeRegistration.bind(this))}}(S).listenerRegistration();new class{constructor({element:t,buttonClose:e,secondForm:s,secondButton:o}){this.element=t,this.secondForm=s,this.buttonClose=e,this.secondButton=o}openSuccessful(){this.secondForm.classList.remove("disabled")}closeSuccessful(){this.element.classList.add("disabled")}listenerSuccessful(){this.buttonClose.addEventListener("click",this.closeSuccessful.bind(this)),this.secondButton.addEventListener("click",this.openSuccessful.bind(this)),this.secondButton.addEventListener("click",this.closeSuccessful.bind(this))}}(_).listenerSuccessful();const T=new class{constructor(t,e,s,o){this.options=t,this.api=e,this.header=s,this.localStorage=o,this.submitLogin=this.submitLogin.bind(this),this.submitRegistration=this.submitRegistration.bind(this)}submitLogin(t){t.preventDefault();const e=this.options.formLogin.elements.email.value,s=this.options.formLogin.elements.password.value;this.api.login(e,s).then(t=>{void 0===t?console.log(t):(this.options.loginPopup.classList.add("disabled"),this.localStorage.saveKey("key",t.token),this.api.getUser(t.token).then(t=>{console.log(t),this.header.headerLogin(t.user),this.localStorage.saveKey("authorizedUser",t.user)}).catch(t=>{console.log(t)}))}).catch(t=>{console.log(t)})}submitRegistration(t){t.preventDefault();const e=this.options.formRegistration.elements.password.value,s=this.options.formRegistration.elements.email.value,o=this.options.formRegistration.elements.name.value;this.api.registration(s,e,o).then(t=>{void 0===t?console.log(t):(this.options.registrationPopup.classList.add("disabled"),this.options.successfulPopup.classList.remove("disabled"))}).catch(t=>{console.log(t)})}}(E,x,w,k),P=document.forms.login,j=document.forms.registration;P.addEventListener("submit",T.submitLogin),j.addEventListener("submit",T.submitRegistration),console.log((new Date).toISOString(),Date.now()),console.log((new Date).toISOString())}]);