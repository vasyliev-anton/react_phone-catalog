(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{61:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var a=c(29),s=c.n(a),n=c(11),r=c(46),i=c(6),o=(c(61),c(1)),l=c.n(o),j=c(14),d=c.n(j),u=c.p+"static/media/LOGO.13ce922e.svg",b=c.p+"static/media/Shopping bag (Cart).1962e424.svg",O=c.p+"static/media/Favourites (Heart Like).dbd19c03.svg",h=c(3),m=c.p+"static/media/Search.eb670dd9.svg",p=c.p+"static/media/Close.3ea864f5.svg",_=c(0),x=function(){var e=Object(o.useState)(""),t=Object(h.a)(e,2),c=t[0],a=t[1],s=Object(o.useState)(!1),n=Object(h.a)(s,2),r=n[0],l=n[1],j=Object(i.d)(),d=Object(h.a)(j,2),u=d[0],b=d[1];return Object(o.useEffect)((function(){u.has("query")?(l(!0),a(u.get("query")||"")):l(!1)}),[u]),r?Object(_.jsxs)("div",{className:"SearchField",children:[!!c.length&&Object(_.jsx)("button",{type:"button",onClick:function(){return a(""),void b({query:""})},children:Object(_.jsx)("img",{src:p,alt:"close"})}),Object(_.jsx)("input",{type:"text",value:c,onChange:function(e){var t=e.target.value;a(t),b({query:t})},placeholder:"Search in phones...",className:"SearchField__input"}),Object(_.jsx)("img",{src:m,alt:"search"})]}):null},f=function(){var e=Object(n.c)((function(e){return e.favorites})),t=Object(n.c)((function(e){return e.cart}));return Object(_.jsxs)("div",{className:"header",id:"headerNavBar",children:[Object(_.jsxs)("nav",{className:"header__nav",children:[Object(_.jsx)(i.b,{to:"/",className:"header__logo",children:Object(_.jsx)("img",{src:u,alt:""})}),Object(_.jsxs)("ul",{className:"header__menu",children:[Object(_.jsx)("li",{className:"header__item",children:Object(_.jsx)(i.c,{to:"/",className:function(e){var t=e.isActive;return d()("header__link",{"header__link--active":t})},children:"Home"})}),Object(_.jsx)("li",{className:"header__item",children:Object(_.jsx)(i.c,{to:"/phones",className:"header__link",children:"Phones"})}),Object(_.jsx)("li",{className:"header__item",children:Object(_.jsx)(i.c,{to:"/tablets",className:function(e){var t=e.isActive;return d()("header__link",{"header__link--active":t})},children:"Tablets"})}),Object(_.jsx)("li",{className:"header__item",children:Object(_.jsx)(i.c,{to:"/accessories",className:function(e){var t=e.isActive;return d()("header__link",{"header__link--active":t})},children:"Accessories"})})]})]}),Object(_.jsxs)("div",{className:"header__buttons",children:[Object(_.jsx)(x,{}),Object(_.jsx)(i.c,{to:"/favorites",className:function(e){var t=e.isActive;return d()("header__buttons--link",{"header__buttons--link--active":t})},children:Object(_.jsx)("button",{type:"button",className:"button button__cart","data-counter":"".concat(e.length),children:Object(_.jsx)("img",{src:O,alt:"",className:"button__cart--image"})})}),Object(_.jsx)(i.c,{to:"/cart",className:function(e){var t=e.isActive;return d()("header__buttons--link",{"header__buttons--link--active":t})},children:Object(_.jsx)("button",{type:"button",className:"button button__cart","data-counter":"".concat(t.length),children:Object(_.jsx)("img",{src:b,alt:"",className:"button__cart--image"})})})]})]})},v=c.p+"static/media/Chevron (Arrow Up).1ea6958a.svg",g=c.p+"static/media/Chevron (Arrow Down).98c9dd6d.svg",N=c.p+"static/media/Chevron (Arrow Right).e028d388.svg",y=c.p+"static/media/Chevron (Arrow Left).7460d679.svg",k=function(e){var t=e.direction,c=e.handler,a=Object(o.useState)(""),s=Object(h.a)(a,2),n=s[0],r=s[1];return Object(o.useEffect)((function(){switch(t){case"up":r(v);break;case"right":r(N);break;case"left":r(y);break;case"down":r(g);break;default:throw new Error("none")}}),[]),Object(_.jsx)("button",{className:"arrowButton",type:"button",onClick:c,children:Object(_.jsx)("img",{src:n,alt:""})})},C=function(){return Object(_.jsx)("footer",{className:"footer",children:Object(_.jsxs)("div",{className:"footer__content",children:[Object(_.jsx)(i.b,{to:"/",className:"header__logo",children:Object(_.jsx)("img",{src:u,alt:""})}),Object(_.jsxs)("ul",{className:"footer__menu",children:[Object(_.jsx)("li",{className:"footer__item",children:Object(_.jsx)(i.b,{to:"https://github.com/vasyliev-anton",className:"footer__link",target:"__blank",children:"GitHub"})}),Object(_.jsx)("li",{className:"footer__item",children:Object(_.jsx)(i.b,{to:"#/",className:"footer__link",children:"contacts"})}),Object(_.jsx)("li",{className:"footer__item",children:Object(_.jsx)(i.b,{to:"#/",className:"footer__link",children:"rights"})})]}),Object(_.jsxs)("div",{className:"footer__button",children:[Object(_.jsx)("span",{className:"footer__button-text",children:"Back to top"}),Object(_.jsx)(i.b,{to:"#headerNavBar",className:"footer__button-arrow",children:Object(_.jsx)(k,{direction:"up"})})]})]})})},w=c(4),S=c(9),F=c(5),P=c.n(F),E="https://mate-academy.github.io/react_phone-catalog/_new";function A(e){return new Promise((function(t){setTimeout(t,e)}))}function I(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a={method:t};return c&&(a.body=JSON.stringify(c),a.headers={"Content-Type":"application/json; charset=UTF-8"}),A(600).then((function(){return fetch(E+e,a)})).then((function(e){if(!e.ok)throw new Error;return e.json()}))}var q=function(e){return I(e)},L=function(){var e=Object(S.a)(P.a.mark((function e(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",q("/products.json"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(S.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",q("/products/".concat(t,".json")));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=c.p+"static/media/banner1.8e14917d.png",B=c.p+"static/media/banner2.2031098c.jpg",M=c.p+"static/media/banner3.314264dc.jpg",R=c.p+"static/media/arrow-right.7365d53e.svg",D=c.p+"static/media/arrow-left.081ebe62.svg",G=[T,B,M],U=function(){var e=Object(o.useState)(0),t=Object(h.a)(e,2),c=t[0],a=t[1];return Object(_.jsxs)("div",{className:"slider slider--with-margin",children:[Object(_.jsx)("button",{className:"slider__button slider__button--left",type:"button",onClick:function(){a((function(e){return e-1}))},disabled:c<=0,children:Object(_.jsx)("img",{src:D,alt:""})}),Object(_.jsx)("div",{className:"slider__img-container",children:Object(_.jsx)("img",{className:"slider__img",src:G[c],alt:"banner"})}),Object(_.jsx)("button",{className:"slider__button slider__button--right",type:"button",onClick:function(){a((function(e){return e+1}))},disabled:c>=G.length-1,children:Object(_.jsx)("img",{src:R,alt:""})})]})},$=c(8),J=c.p+"static/media/Favourites Filled (Heart Like).d554a185.svg",z=c(18),W=Object(z.b)({name:"favorites",initialState:[],reducers:{deleteFavorite:function(e,t){return e.filter((function(e){return e.id!==t.payload}))},addFavorites:function(e,t){return[].concat(Object($.a)(e),[t.payload])}}}),Y=W.actions,Q=Y.deleteFavorite,K=Y.addFavorites,V=W.reducer,X=function(e){var t=e.phone,c=Object(o.useState)(!1),a=Object(h.a)(c,2),s=a[0],r=a[1],i=Object(n.c)((function(e){return e.favorites})),l=Object(n.b)();Object(o.useEffect)((function(){r(i.some((function(e){return e.itemId===t.itemId})))}),[i]);return Object(_.jsx)("button",{type:"button",className:"button button__fav",onClick:function(){return e=t,void l(s?Q(e.id):K(e));var e},"data-cy":"addToFavorite",children:Object(_.jsx)("img",{src:s?J:O,alt:""})})},Z=c(15),ee=Object(z.b)({name:"cart",initialState:[],reducers:{deleteCart:function(e,t){return e.filter((function(e){return e.itemId!==t.payload}))},incrementProductCount:function(e,t){var c=e.find((function(e){return e.itemId===t.payload}));null!==c&&void 0!==c&&c.count&&(c.count+=1)},discernmentProductCount:function(e,t){var c=e.find((function(e){return e.itemId===t.payload}));null!==c&&void 0!==c&&c.count&&(c.count-=1)},addCart:function(e,t){return[].concat(Object($.a)(e),[Object(Z.a)(Object(Z.a)({},t.payload),{},{count:1})])}}}),te=ee.actions,ce=te.deleteCart,ae=te.addCart,se=te.incrementProductCount,ne=te.discernmentProductCount,re=ee.reducer,ie=function(e){var t=e.phone,c=Object(o.useState)(!1),a=Object(h.a)(c,2),s=a[0],r=a[1],i=Object(n.c)((function(e){return e.cart}));Object(o.useEffect)((function(){r(i.find((function(e){return e.itemId===t.itemId})))}),[i]);var l=Object(n.b)();return Object(_.jsx)("button",{className:d()("button","button__add",{"button__add--selected":s}),type:"button",onClick:function(){return e=t,void l(s?ce(e.itemId):ae(e));var e},children:s?"Added to cart":"Add to Cart"})},oe=function(e){var t=e.card,c=t.itemId,a=t.name,s=t.price,n=t.screen,r=t.capacity,l=t.ram,j=t.image,d=Object(o.useState)(!1),u=Object(h.a)(d,2),b=u[0],O=u[1];Object(o.useEffect)((function(){O(!0)}),[b]);var m="/new/".concat(j);return Object(_.jsxs)("div",{className:"card","data-cy":"cardsContainer",children:[Object(_.jsxs)(i.b,{to:"/phones/".concat(c),className:"card__content",children:[Object(_.jsx)("div",{className:"card__img-container",children:Object(_.jsx)("img",{src:m,alt:"imagine-".concat(a),className:"card__img"})}),Object(_.jsx)("h2",{className:"card__name",children:a}),Object(_.jsxs)("h3",{className:"card__price",children:["$",s]})]}),Object(_.jsxs)("div",{className:"card__info",children:[Object(_.jsxs)("div",{className:"card__info-str",children:[Object(_.jsx)("span",{children:"Screen"}),Object(_.jsx)("span",{className:"card__info-str-value",children:n})]}),Object(_.jsxs)("div",{className:"card__info-str",children:[Object(_.jsx)("span",{children:"Capacity"}),Object(_.jsx)("span",{className:"card__info-str-value",children:r})]}),Object(_.jsxs)("div",{className:"card__info-str",children:[Object(_.jsx)("span",{children:"RAM"}),Object(_.jsx)("span",{className:"card__info-str-value",children:l})]})]}),Object(_.jsxs)("div",{className:"card__menu",children:[Object(_.jsx)(ie,{phone:t}),Object(_.jsx)(X,{phone:t})]})]})},le=function(e){var t=e.list,c=e.title,a=Object(o.useState)(4),s=Object(h.a)(a,2),n=s[0],r=s[1],i=Object(o.useMemo)((function(){return Object($.a)(t).slice(n-4,n)}),[t,n]),l=Object(o.useCallback)((function(){r((function(e){return e+1}))}),[]),j=Object(o.useCallback)((function(){r((function(e){return e-1}))}),[]);return Object(_.jsxs)("div",{className:"CatalogShortCut",children:[Object(_.jsxs)("div",{className:"CatalogShortCut__top",children:[Object(_.jsx)("h1",{className:"CatalogShortCut__title",children:c}),Object(_.jsxs)("div",{className:"CatalogShortCut__buttons",children:[Object(_.jsx)("button",{type:"button",className:"CatalogShortCut__button",onClick:j,disabled:4===n,children:Object(_.jsx)("img",{src:D,alt:""})}),Object(_.jsx)("button",{type:"button",className:"CatalogShortCut__button",onClick:l,disabled:n===t.length,children:Object(_.jsx)("img",{src:R,alt:""})})]})]}),Object(_.jsx)("div",{className:"CatalogShortCut__cards",children:i.map((function(e){return Object(_.jsx)(oe,{card:e},e.id)}))})]})},je=c(76),de=c(23),ue=c.n(de),be=c.p+"static/media/mobile.9fbffbeb.png",Oe=c.p+"static/media/tablets.2f41a1b7.png",he=c.p+"static/media/accessories.72de678d.png",me=function(){var e=Object(o.useState)([]),t=Object(h.a)(e,2),c=t[0],a=t[1],s=Object(o.useState)(!0),n=Object(h.a)(s,2),r=n[0],l=n[1],j=function(e,t){return e.filter((function(e){return e.category===t})).length},d=function(){var e=Object(S.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,L();case 4:t=e.sent,a(t),l(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),ue()({icon:"Error",title:"Empty list, Data Error!",text:"Try again in 5 minutes"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){d()}),[]),Object(_.jsxs)("div",{className:"categories",children:[Object(_.jsx)("h3",{className:"categories__title",children:"Shop by category"}),Object(_.jsxs)("div",{className:"categories__content",children:[Object(_.jsxs)(i.b,{to:"/phones",className:"categories__container",children:[Object(_.jsx)("div",{className:"categories__img-box categories__img-box-mobile",children:Object(_.jsx)("img",{src:be,alt:"",className:"categories__img"})}),Object(_.jsx)("p",{className:"categories__type",children:"Mobile Phones"}),Object(_.jsxs)("span",{className:"categories__quantity",children:[r?Object(_.jsx)(je.a,{}):j(c,"phones")," ","models"]})]}),Object(_.jsxs)(i.b,{to:"/tablets",className:"categories__container",children:[Object(_.jsx)("div",{className:"categories__img-box categories__img-box-tablets",children:Object(_.jsx)("img",{src:Oe,alt:"",className:"categories__img"})}),Object(_.jsx)("p",{className:"categories__type",children:"Tablets"}),Object(_.jsxs)("span",{className:"categories__quantity",children:[r?Object(_.jsx)(je.a,{}):j(c,"tablets")," ","models"]})]}),Object(_.jsxs)(i.b,{to:"/accessories",className:"categories__container",children:[Object(_.jsx)("div",{className:"categories__img-box categories__img-box-accessories",children:Object(_.jsx)("img",{src:he,alt:"",className:"categories__img"})}),Object(_.jsx)("p",{className:"categories__type",children:"Accessories"}),Object(_.jsxs)("span",{className:"categories__quantity",children:[r?Object(_.jsx)(je.a,{}):j(c,"accessories")||"0"," ","models"]})]})]})]})},pe=function(){var e=Object(o.useState)([]),t=Object(h.a)(e,2),c=t[0],a=t[1],s=function(){var e=Object(S.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L();case 3:return t=e.sent,e.t0=a,e.next=7,t;case 7:e.t1=e.sent,(0,e.t0)(e.t1),e.next=14;break;case 11:throw e.prev=11,e.t2=e.catch(0),new Error("Hello, Mario, HotPrices comp");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){s()}),[]);var n=c.filter((function(e){return"phones"===e.category&&e.capacity.length>0})),r=c.sort((function(e,t){return t.price-e.price}));return Object(_.jsxs)("div",{className:"container",children:[Object(_.jsx)(U,{}),Object(_.jsx)(le,{title:"Hot Price",list:n}),Object(_.jsx)(me,{}),Object(_.jsx)(le,{title:"Brand New",list:r})]})},_e=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},xe=function(){var e=Object(w.p)().category;return Object(_.jsxs)("div",{className:"NoResult",children:[_e(e||"")," ","not found"]})},fe=function(e){var t=e.onGetListLength,c=e.sort,a=e.quantity,s=e.currPage,r=e.query,l=Object(o.useState)([]),j=Object(h.a)(l,2),d=j[0],u=j[1],b=Object(w.p)().category,O=Object(i.d)(),m=Object(h.a)(O,2),p=m[0],x=m[1],f=Object(n.c)((function(e){return e.favorites})),v=Object(o.useState)(!0),g=Object(h.a)(v,2),N=g[0],y=g[1],k=function(){var e=Object(S.a)(P.a.mark((function e(){var c,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y(!0),e.next=4,L();case 4:c=e.sent,a=c.filter((function(e){return e.category===b})),u(a),t(a.length),y(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),ue()({icon:"error",title:"Empty list, Data Error!",text:"Try again in 5 minutes"});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){"favorites"===b?(y(!0),u(f),t(f.length),y(!1)):k(),p.get("query")||x({query:""})}),[b]);var C=Object($.a)(d).sort((function(e,t){switch(c){case"age":return t.year-e.year;case"name":return t.name.localeCompare(e.name);case"price":return e.price-t.price;default:return t.price-e.price}})).slice(s*a-a,s*a);return r&&(C=C.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}))),N?Object(_.jsx)("div",{className:"container",style:{margin:"25px 0px"},children:Object(_.jsx)(je.a,{color:"secondary"})}):Object(_.jsx)("div",{className:"catalog__content","data-cy":"productList",children:C.length?C.map((function(e){return Object(_.jsx)(oe,{card:e},e.itemId)})):Object(_.jsx)(xe,{})})};function ve(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(h.a)(e,2),a=t[0],s=t[1];null===s?c.delete(a):Array.isArray(s)?(c.delete(a),s.forEach((function(e){c.append(a,e)}))):c.set(a,s)})),c.toString()}var ge=function(e){var t=e.total,c=e.perPage,a=e.currPage,s=Object(o.useState)(a||1),n=Object(h.a)(s,2),r=n[0],l=n[1],j=Object(i.d)(),u=Object(h.a)(j,2),b=u[0],O=u[1],m=Math.ceil(t/c),p=[];if(Object(o.useEffect)((function(){l(a||1)}),[a]),m<=1)return null;a>m&&O({page:"1"});for(var x=1;x<=m;x+=1)p.push(x);var f;return f=r>3?p.slice(r-3,r+1):p.slice(0,4),Object(_.jsxs)("div",{className:"pagination",children:[r>1&&Object(_.jsx)(i.b,{to:{search:ve(b,{page:"".concat(r+1)})},children:Object(_.jsx)(k,{direction:"left",handler:function(){ve(b,{page:"".concat(r-1)})}})}),Object(_.jsx)("ul",{className:"pagination__list",children:f.map((function(e){return Object(_.jsx)("li",{className:d()("pagination__item",{current:r===e}),children:Object(_.jsx)(i.b,{to:{search:ve(b,{page:"".concat(e)})},className:d()("pagination__link",{current:r===e}),children:e})},e)}))}),r<Math.max.apply(Math,p)&&Object(_.jsx)(i.b,{to:{search:ve(b,{page:"".concat(r+1)})},children:Object(_.jsx)(k,{direction:"right",handler:function(){O({page:"".concat(r+1)})}})})]})},Ne=c(7),ye=function(e){var t=e.list,c=e.type,a=Object(i.d)(),s=Object(h.a)(a,1)[0],n=Object(o.useState)(""),r=Object(h.a)(n,2),l=r[0],j=r[1];return Object(o.useEffect)((function(){j(_e(s.get("".concat(c))||t[0]))}),[]),Object(_.jsxs)("div",{className:"dropdown",children:[Object(_.jsx)("button",{className:"dropbtn",type:"button",children:l}),Object(_.jsx)("div",{className:"dropdown-content",children:t.map((function(e){return Object(_.jsx)(i.b,{to:{search:ve(s,Object(Ne.a)({},c,"".concat(e)))},onClick:function(){j(_e(e))},children:_e(e)},"".concat(e))}))})]})},ke=c.p+"static/media/Home.d4c29e4f.svg",Ce=function(){var e,t=Object(w.p)(),c=t.category,a=t.id;return Object(_.jsxs)("div",{className:"NavigationField",children:[Object(_.jsx)(i.b,{to:"/",children:Object(_.jsx)("img",{src:ke,alt:"",className:"NavigationField__button--home"})}),Object(_.jsxs)("ul",{className:"NavigationField__list",children:[Object(_.jsx)("li",{className:"NavigationField__item",children:Object(_.jsxs)(i.b,{to:"/categories/".concat(c),children:[Object(_.jsx)("img",{src:N,alt:"right",className:"NavigationField__arrow"}),_e(c||"")]})}),Object(_.jsx)("li",{children:a&&Object(_.jsxs)(i.b,{to:"/categories/".concat(c,"/").concat(a),children:[Object(_.jsx)("img",{src:N,alt:"right",className:"NavigationField__arrow"}),(e=a,e.split("-").map((function(e){return _e(e)})).join(" "))]})})]})]})},we=["age","price","name"],Se=["16","8","4"],Fe=function(){var e=Object(w.l)(),t=new URLSearchParams(e.search).get("page")||"1",c=Object(o.useState)(0),a=Object(h.a)(c,2),s=a[0],n=a[1],r=Object(o.useState)(""),l=Object(h.a)(r,2),j=l[0],d=l[1],u=Object(o.useState)(16),b=Object(h.a)(u,2),O=b[0],m=b[1],p=Object(o.useState)(""),x=Object(h.a)(p,2),f=x[0],v=x[1],g=Object(i.d)(),N=Object(h.a)(g,1)[0];Object(o.useEffect)((function(){d(N.get("sort")||"age"),m(Number(N.get("perPage")||"16")),v(N.get("query")||"")}),[t,N]);return Object(_.jsxs)("div",{className:"container",children:[Object(_.jsx)(Ce,{}),Object(_.jsxs)("div",{className:"filter",children:[Object(_.jsx)(ye,{list:we,type:"sort"}),Object(_.jsx)(ye,{list:Se,type:"perPage"})]}),Object(_.jsx)(fe,{onGetListLength:function(e){n(e)},sort:j,quantity:O,query:f,currPage:Number(t)}),Object(_.jsx)(ge,{total:s,perPage:O,currPage:Number(t)||1})]})},Pe=function(e){var t=e.images,c=Object(o.useState)("../../_new/".concat(t[0])),a=Object(h.a)(c,2),s=a[0],n=a[1],r=function(e){return"../../_new/".concat(e)};return Object(_.jsxs)("div",{className:"photos description__photos",children:[Object(_.jsx)("ul",{className:"photos__list",children:t.map((function(e){return Object(_.jsx)("li",{className:"photos__item",children:Object(_.jsx)("img",{onClick:function(){return function(e){var t=r(e);n(t)}(e)},src:r(e),alt:"photos",className:"photos__link"})},e)}))}),Object(_.jsx)("div",{className:"photos__main-container",children:Object(_.jsx)("img",{src:s,alt:"main",className:"photos__main"})})]})},Ee=function(e){var t=e.description,c=e.currentProduct;return Object(_.jsxs)("div",{className:"description__short-info",children:[Object(_.jsxs)("div",{className:"description__filter",children:[Object(_.jsxs)("div",{className:"description__colors",children:[Object(_.jsx)("span",{className:"description__colors-title",children:"Available colors"}),Object(_.jsx)("ul",{className:"description__colors-list",children:t.colorsAvailable.map((function(e){return Object(_.jsx)("li",{className:d()("description__colors-item",{current__color:t.color===e}),children:Object(_.jsx)(i.b,{className:"description__color ".concat(e),to:"/phones/".concat(t.namespaceId,"-").concat(t.capacity.toLocaleLowerCase(),"-").concat(e)})},e)}))})]}),Object(_.jsxs)("div",{className:"description__capacity",children:[Object(_.jsx)("span",{className:"description__capacity-text",children:"Select capacity"}),Object(_.jsx)("ul",{className:"description__capacity-list",children:null===t||void 0===t?void 0:t.capacityAvailable.map((function(e){return Object(_.jsx)("li",{className:"description__capacity-item",children:Object(_.jsx)(i.b,{className:d()("description__capacity-link",{current:t.capacity===e}),to:"/phones/".concat(t.namespaceId,"-").concat(e.toLocaleLowerCase(),"-").concat(t.color),children:e})},e)}))})]})]}),Object(_.jsxs)("div",{className:"description__buy",children:[Object(_.jsxs)("div",{className:"description__price",children:[Object(_.jsx)("span",{className:"description__price-disc",children:"$".concat(t.priceDiscount)}),Object(_.jsx)("span",{className:"description__price-regular",children:"$".concat(t.priceRegular)})]}),Object(_.jsxs)("div",{className:"description__buttons",children:[Object(_.jsx)(ie,{phone:c}),Object(_.jsx)(X,{phone:c})]}),Object(_.jsxs)("ul",{className:"description__info",children:[Object(_.jsxs)("li",{className:"description__info-str",children:[Object(_.jsx)("span",{children:"Screen"}),Object(_.jsx)("span",{className:"description__info-str-value",children:t.screen})]}),Object(_.jsxs)("li",{className:"description__info-str",children:[Object(_.jsx)("span",{children:"Resolution"}),Object(_.jsx)("span",{className:"description__info-str-value",children:t.resolution})]}),Object(_.jsxs)("li",{className:"description__info-str",children:[Object(_.jsx)("span",{children:"Processor"}),Object(_.jsx)("span",{className:"description__info-str-value",children:t.processor})]}),Object(_.jsxs)("li",{className:"description__info-str",children:[Object(_.jsx)("span",{children:"RAM"}),Object(_.jsx)("span",{className:"description__info-str-value",children:t.ram})]})]})]})]})},Ae=function(e){var t=e.description;return Object(_.jsxs)("div",{className:"about description__about","data-cy":"productDescription",children:[Object(_.jsx)("h2",{className:"about__title",children:"About"}),t.description.map((function(e){return Object(_.jsxs)("div",{className:"section description__section",children:[Object(_.jsx)("h3",{className:"section__title",children:e.title}),Object(_.jsx)("article",{className:"section__text",children:e.text.map((function(e){return Object(_.jsx)("p",{className:"section__paragraph",children:e},e.length+ +new Date)}))})]},e.title)}))]})},Ie=["screen","resolution","processor","ram","capacity","camera","zoom"],qe=function(e){var t=e.description;return Object(_.jsxs)("div",{className:"tech description__tech",children:[Object(_.jsx)("h2",{className:"tech__title",children:"Tech specs"}),Object(_.jsx)("ul",{className:"tech__list",children:Ie.map((function(e){return Object(_.jsxs)("li",{className:"tech__item",children:[Object(_.jsx)("span",{className:"tech__spec",children:_e(e)}),Object(_.jsx)("span",{className:"tech__value",children:t[e]})]},e)}))})]})},Le=function(){var e=Object(w.n)();return Object(_.jsxs)("div",{className:"HistoryBackPusher","data-cy":"backButton",children:[Object(_.jsx)("img",{src:y,alt:"left",className:"HistoryBackPusher__icon--left"}),Object(_.jsx)("button",{className:"HistoryBackPusher__button",type:"button",onClick:function(){e(-1)},children:"Back"})]})},He=function(){var e=Object(w.p)(),t=Object(o.useState)(!0),c=Object(h.a)(t,2),a=c[0],s=c[1],n=Object(o.useState)([]),r=Object(h.a)(n,2),i=r[0],l=r[1],j=Object(o.useState)(null),d=Object(h.a)(j,2),u=d[0],b=d[1],O=Object(o.useState)(null),m=Object(h.a)(O,2),p=m[0],x=m[1],f=function(){var e=Object(S.a)(P.a.mark((function e(t){var c,a,n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),e.next=4,H(t);case 4:return c=e.sent,e.next=7,L();case 7:a=e.sent,n=a.find((function(e){return e.itemId===t}))||null,x(c),l(a),b(n),s(!1),e.next=18;break;case 15:throw e.prev=15,e.t0=e.catch(0),new Error("Didn't catch data");case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){e.id&&f(e.id)}),[e.id]);var v=Object($.a)(i).sort((function(){return.5-Math.random()}));return null===p||null===u||a?Object(_.jsx)("div",{className:"container",children:Object(_.jsx)(je.a,{})}):Object(_.jsxs)("div",{className:"container",children:[Object(_.jsx)(Ce,{}),Object(_.jsx)(Le,{}),Object(_.jsxs)("div",{className:"description",children:[Object(_.jsx)("h1",{children:p.name}),Object(_.jsxs)("div",{className:"description__top",children:[Object(_.jsx)(Pe,{images:p.images}),Object(_.jsx)(Ee,{description:p,currentProduct:u})]})]}),Object(_.jsxs)("div",{className:"description__content",children:[Object(_.jsx)(Ae,{description:p}),Object(_.jsx)(qe,{description:p})]}),Object(_.jsx)(le,{list:v,title:"You may also like"})]})},Te=c(47),Be=c.n(Te),Me=function(e){var t=e.product,c=Object(n.b)();return Object(_.jsxs)("li",{className:"cart__item productField",children:[Object(_.jsx)("button",{type:"button",onClick:function(){return c(ce(t.itemId))},className:"productField__cross",children:Object(_.jsx)("img",{src:p,alt:""})}),Object(_.jsx)("img",{src:"../_new/".concat(t.image),alt:"",className:"productField__image"}),Object(_.jsx)(i.b,{to:"/".concat(t.category,"/").concat(t.itemId),className:"productField__name",children:t.name}),Object(_.jsxs)("div",{className:"productField__quantity",children:[Object(_.jsx)("button",{type:"button",className:"productField__quantity-button",disabled:t.count<=1,onClick:function(){c(ne(t.itemId))},children:"-"}),Object(_.jsx)("span",{className:"productField__quantity-count",children:t.count}),Object(_.jsx)("button",{type:"button",className:"productField__quantity-button",onClick:function(){c(se(t.itemId))},children:"+"})]}),Object(_.jsx)("span",{className:"productField__price",children:"$".concat(t.price*t.count)})]},t.itemId)},Re=function(){var e=Object(n.c)((function(e){return e.cart})),t=Object(o.useState)(!1),c=Object(h.a)(t,2),a=c[0],s=c[1],r=e.reduce((function(e,t){return e+t.price*t.count}),0);return Object(_.jsxs)("div",{className:"cart",children:[Object(_.jsx)("h1",{className:"cart__title",children:"Cart"}),Object(_.jsxs)("div",{className:"cart__content",children:[Object(_.jsx)("ul",{className:"cart__list",children:e.length?e.map((function(e){return Object(_.jsx)(Me,{product:e},e.itemId)})):Object(_.jsx)("span",{children:"Your cart is empty"})}),Object(_.jsxs)("div",{className:"cart__summary","data-cy":"productQauntity",children:[Object(_.jsxs)("p",{className:"cart__summary-text",children:[Object(_.jsx)("span",{children:"$".concat(r)}),Object(_.jsxs)("span",{className:"cart__summary-total",children:["Total for"," ",e.length," ","items"]})]}),Object(_.jsx)("hr",{}),Object(_.jsx)("button",{type:"button",className:"cart__checkout-button",onClick:function(){return s(!0),void ue()("Well done!","We are sorry, but this feature is not implemented yet!","success")},children:"Checkout"})]})]}),a&&Object(_.jsx)(Be.a,{})]})},De=function(){return Object(_.jsxs)("div",{className:"container",children:[Object(_.jsx)(Le,{}),Object(_.jsx)(Re,{})]})},Ge=function(){return Object(_.jsxs)("div",{className:"container",children:[Object(_.jsx)("h1",{children:"Page not found"}),Object(_.jsx)("p",{children:"The page you are looking for does not exist."}),Object(_.jsx)(i.b,{to:"/",children:"Go to Homepage"})]})},Ue=function(){return Object(_.jsxs)(w.c,{children:[Object(_.jsx)(w.a,{path:"/",element:Object(_.jsx)(pe,{})}),Object(_.jsx)(w.a,{path:":category",element:Object(_.jsx)(Fe,{})}),Object(_.jsx)(w.a,{path:":category/:id",element:Object(_.jsx)(He,{})}),Object(_.jsx)(w.a,{path:"/cart",element:Object(_.jsx)(De,{})}),Object(_.jsx)(w.a,{path:"*",element:Object(_.jsx)(Ge,{})})]})},$e=function(){return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)(f,{}),Object(_.jsx)(l.a.StrictMode,{children:Object(_.jsx)(Ue,{})}),Object(_.jsx)(C,{})]})},Je=c(40),ze=c(48),We=c.n(ze),Ye=c(13),Qe=Object(Ye.b)({favorites:V,cart:re}),Ke={key:"root",storage:We.a},Ve=Object(Je.a)(Ke,Qe),Xe=Object(z.a)({reducer:Ve,middleware:function(e){return e({serializableCheck:!1})}}),Ze=Object(Je.b)(Xe);s.a.render(Object(_.jsx)(i.a,{children:Object(_.jsx)(n.a,{store:Xe,children:Object(_.jsx)(r.a,{loading:null,persistor:Ze,children:Object(_.jsx)($e,{})})})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.bb19e562.chunk.js.map