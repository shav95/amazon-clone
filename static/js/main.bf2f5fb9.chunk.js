(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var a=c(3),n=c.n(a),s=c(28),i=c.n(s),r=(c(49),c(50),c(19)),o=c(10),l=c(13),j=(c(51),c(41)),d=c.n(j),u=c(42),m=c.n(u),b=c(2),h=Object(a.createContext)(),_=function(e){var t=e.reducer,c=e.initialState,n=e.children;return Object(b.jsx)(h.Provider,{value:Object(a.useReducer)(t,c),children:n})},O=function(){return Object(a.useContext)(h)};var p=function(){var e=O(),t=Object(l.a)(e,2),c=t[0].basket;return t[1],Object(b.jsxs)("nav",{className:"header",children:[Object(b.jsx)(r.b,{to:"/",children:Object(b.jsx)("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:""})}),Object(b.jsxs)("div",{className:"header__search",children:[Object(b.jsx)("input",{type:"text",className:"header__searchInput"}),Object(b.jsx)(d.a,{className:"header__searchIcon"})]}),Object(b.jsxs)("div",{className:"header__nav",children:[Object(b.jsx)(r.b,{className:"header__link",to:"/login",children:Object(b.jsxs)("div",{className:"header__option",children:[Object(b.jsx)("span",{className:"header__optionLineOne",children:"Hello"}),Object(b.jsx)("span",{className:"header__optionLineTwo",children:"Sign In"})]})}),Object(b.jsx)(r.b,{className:"header__link",to:"/",children:Object(b.jsxs)("div",{className:"header__option",children:[Object(b.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(b.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]})}),Object(b.jsx)(r.b,{className:"header__link",to:"/",children:Object(b.jsxs)("div",{className:"header__option",children:[Object(b.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(b.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]})}),Object(b.jsx)(r.b,{to:"/checkout",className:"header__link",children:Object(b.jsxs)("div",{className:"header__optionBasket",children:[Object(b.jsx)(m.a,{}),Object(b.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:c.length})]})})]})]})},g=(c(58),c(59),c(32)),x=c.n(g),f=c(31),v=c.n(f);var N=function(e){var t=e.id,c=e.title,n=e.price,s=e.rating,i=e.image,r=O(),o=Object(l.a)(r,2),j=(o[0].basket,o[1]),d=Object(a.useState)("1"),u=Object(l.a)(d,2),m=u[0],h=u[1];return console.log(m),Object(b.jsxs)("div",{className:"product",children:[Object(b.jsxs)("div",{className:"product__info",children:[Object(b.jsx)("p",{children:c}),Object(b.jsxs)("p",{className:"product__price",children:[Object(b.jsx)("small",{children:"$"}),Object(b.jsx)("strong",{children:n})]}),Object(b.jsx)("div",{className:"product__rating",children:Array(s).fill().map((function(e){return Object(b.jsx)("p",{children:"\u2b50"})}))})]}),Object(b.jsx)("img",{src:i,alt:""}),Object(b.jsx)("button",{onClick:function(){console.log(m),Array(m).fill().map((function(e){return j({type:"ADD_TO_BASKET",item:{id:t,title:c,price:n,rating:s,image:i}})}))},children:"Add to basket"}),Object(b.jsxs)("div",{className:"counter",children:[Object(b.jsx)(v.a,{onClick:function(){h(parseInt(m)-1)},className:"counter__minus"}),Object(b.jsx)("input",{type:"number",value:m,min:"0",max:"50",onChange:function(e){h(e.target.value)},className:"counter__input"}),Object(b.jsx)(x.a,{onClick:function(){h(parseInt(m)+1)},className:"counter__plus"})]})]})};var k=function(){return Object(b.jsxs)("div",{className:"home",children:[Object(b.jsx)("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:"home img"}),Object(b.jsxs)("div",{className:"home__row",children:[Object(b.jsx)(N,{id:"12321347",title:"Crest 3D White Toothpaste Radiant Mint (3 Count of 4.1 oz Tubes), 12.3 oz Packaging May Vary",price:11.96,rating:5,image:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"}),Object(b.jsx)(N,{id:"12321346",title:"Crest 3D White Toothpaste Radiant Mint (3 Count of 4.1 oz Tubes), 12.3 oz Packaging May Vary",price:19.65,rating:5,image:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"})]}),Object(b.jsxs)("div",{className:"home__row",children:[Object(b.jsx)(N,{id:"12321342",title:"Daniel Tiger's Neighborhood Friends & Family Figure Set (10 Pack) Includes: Daniel",price:11.96,rating:5,image:"https://m.media-amazon.com/images/I/71CIocNP7lL._AC_UL480_FMwebp_QL65_.jpg"}),Object(b.jsx)(N,{id:"12321343",title:"Wild Republic Penguin Plush, Stuffed Animal, Plush Toy, Gifts for Kids, Cuddlekins 8",price:11.96,rating:5,image:"https://m.media-amazon.com/images/I/6171taaLJZL._AC_UL480_FMwebp_QL65_.jpg"}),Object(b.jsx)(N,{id:"12321344",title:"Sesame Street Little Laughs Tickle Me Elmo, Talking",price:11.96,rating:5,image:"https://m.media-amazon.com/images/I/71qqqhUGH3L._AC_UL480_FMwebp_QL65_.jpg"})]}),Object(b.jsx)("div",{className:"home__row",children:Object(b.jsx)(N,{id:"12321345",title:'Samsung Electronics UN32N5300AFXZA 32" 1080p Smart LED TV (2018), Black',price:11.96,rating:4,image:"https://m.media-amazon.com/images/I/91UsHjAPTlL._AC_UL480_FMwebp_QL65_.jpg"})})]})};c(60),c(61);var C=function(e){var t=e.id,c=e.title,n=e.image,s=e.price,i=e.rating,r=O(),o=Object(l.a)(r,2),j=(o[0].basket,o[1]),d=Object(a.useState)("1"),u=Object(l.a)(d,2),m=u[0],h=u[1];return Object(b.jsxs)("div",{className:"checkoutProduct",children:[Object(b.jsx)("img",{className:"checkoutProduct__image",src:n,alt:""}),Object(b.jsxs)("div",{className:"checkoutProduct__info",children:[Object(b.jsx)("p",{className:"checkoutProduct__title",children:c}),Object(b.jsxs)("p",{className:"checkoutProduct__price",children:[Object(b.jsx)("small",{children:"$"}),Object(b.jsx)("strong",{children:s})]}),Object(b.jsx)("div",{className:"checkoutProduct__rating",children:Array(i).fill().map((function(e){return Object(b.jsx)("p",{children:"\u2b50"})}))}),Object(b.jsx)("button",{onClick:function(){j({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from basket"}),Object(b.jsxs)("div",{className:"counter",children:[Object(b.jsx)(v.a,{onClick:function(){h(parseInt(m)-1)},className:"counter__minus"}),Object(b.jsx)("input",{type:"number",value:m,min:"0",max:"50",onChange:function(e){h(e.target.value)},className:"counter__input"}),Object(b.jsx)(x.a,{onClick:function(){h(parseInt(m)+1)},className:"counter__plus"})]})]})]})},y=c(34),A=c.n(y),S=(c(63),c(38)),T=c(23),P=function(e){return e.reduce((function(e,t){return t.price+e}),0)},I=function(e,t){switch(t.type){case"ADD_TO_BASKET":return Object(T.a)(Object(T.a)({},e),{},{basket:[].concat(Object(S.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var c=Object(S.a)(e.basket),a=e.basket.findIndex((function(e){return e.id===t.id}));return a>=0?c.splice(a,1):console.warn("Cant remove (id: ".concat(t.id,") as its not")),Object(T.a)(Object(T.a)({},e),{},{basket:c});default:return e}};var z=function(){var e=O(),t=Object(l.a)(e,2),c=t[0].basket;return t[1],Object(b.jsxs)("div",{className:"subtotal",children:[Object(b.jsx)(A.a,{renderText:function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("p",{children:["Subtotal (",c.length," items): ",Object(b.jsx)("strong",{children:"".concat(e," ")})]}),Object(b.jsxs)("small",{className:"subtotal__gift",children:[Object(b.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:P(c),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(b.jsx)("button",{children:"Proceed to Checkout"})]})};var B=function(){var e=O(),t=Object(l.a)(e,1)[0].basket;return Object(b.jsxs)("div",{className:"checkout",children:[Object(b.jsxs)("div",{className:"checkout__left",children:[Object(b.jsx)("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),0===t.length?Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Your Shopping Basket is empty"}),Object(b.jsx)("p",{children:'You have no items in your basket. To buy one or more itemst, click "Add to basket" next to the item.'})]}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"checkout__title",children:"Your Shopping Basket"}),t.map((function(e){return Object(b.jsx)(C,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),t.length>0&&Object(b.jsx)("div",{className:"checkout__right",children:Object(b.jsx)(z,{})})]})},L=(c(64),c(37)),w=(L.a.initializeApp({apiKey:"AIzaSyAKZnJB0OuBNTM10MBPwFYpZNOmY140b3U",authDomain:"clone-31ee9.firebaseapp.com",projectId:"clone-31ee9",storageBucket:"clone-31ee9.appspot.com",messagingSenderId:"495695942358",appId:"1:495695942358:web:f3e814ce7350afc2a82f77",measurementId:"G-008K8G11ZG"}),L.a.auth());var F=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),i=Object(l.a)(s,2),o=i[0],j=i[1];return Object(b.jsxs)("div",{className:"login",children:[Object(b.jsx)(r.b,{to:"/",children:Object(b.jsx)("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:""})}),Object(b.jsxs)("div",{className:"login__container",children:[Object(b.jsx)("h1",{children:"Sign in"}),Object(b.jsxs)("form",{children:[Object(b.jsx)("h5",{children:"Email"}),Object(b.jsx)("input",{value:c,onChange:function(e){return n(e.target.value)},type:"email"}),Object(b.jsx)("h5",{children:"Password"}),Object(b.jsx)("input",{value:o,onChange:function(e){return j(e.target.value)},type:"password"}),Object(b.jsx)("button",{onClick:function(e){e.preventDefault(),w.signInWithEmailAndPassword(c,o)},type:"submit",className:"login__signInButton",children:"Sign In"})]}),Object(b.jsx)("p",{children:"By signing-in you agree Amazon's conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(b.jsx)("button",{onClick:function(e){e.preventDefault()},className:"login__registerButton",children:"Create your Amazon Account"})]})]})};var M=function(){return Object(b.jsx)(r.a,{children:Object(b.jsx)("div",{className:"app",children:Object(b.jsxs)(o.c,{children:[Object(b.jsxs)(o.a,{path:"/checkout",children:[Object(b.jsx)(p,{}),Object(b.jsx)(B,{})]}),Object(b.jsx)(o.a,{path:"/login",children:Object(b.jsx)(F,{})}),Object(b.jsxs)(o.a,{path:"/",children:[Object(b.jsx)(p,{}),Object(b.jsx)(k,{})]})]})})})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,81)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(_,{initialState:{basket:[],user:null},reducer:I,children:Object(b.jsx)(M,{})})}),document.getElementById("root")),D()}},[[69,1,2]]]);
//# sourceMappingURL=main.bf2f5fb9.chunk.js.map