import*as e from"@dropins/tools/event-bus.js";import*as t from"@dropins/tools/fetch-graphql.js";export const id=4272;export const ids=[4272];export const modules={1212:(e,t,r)=>{r.d(t,{m:()=>s});var n=r(3584),i=r(1092);function o(e,t,r,n,i,o,s){try{var a=e[o](s),l=a.value}catch(e){return void r(e)}a.done?t(l):Promise.resolve(l).then(n,i)}var s=function(){var e,t=(e=function*(){var e,{data:t,errors:r}=yield(0,n.CA)('\n  query fetchAddressFormFields {\n    attributesForm(formCode: "customer_register_address") {\n      items {\n        frontend_input\n        code\n        label\n        default_value\n        is_required\n        options {\n          label\n          value\n          is_default\n        }\n        ... on CustomerAttributeMetadata {\n          multiline_count\n          sort_order\n          validate_rules {\n            name\n            value\n          }\n        }\n      }\n      errors {\n        message\n        type\n      }\n    }\n  }\n',{method:"GET",cache:"no-cache"}).catch(i.i);if(r)throw Error(r.map((e=>e.message)).join(" "));return(null==t||null===(e=t.attributesForm)||void 0===e?void 0:e.items)||[]},function(){var t=this,r=arguments;return new Promise((function(n,i){var s=e.apply(t,r);function a(e){o(s,n,i,a,l,"next",e)}function l(e){o(s,n,i,a,l,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}()},2532:(e,t,r)=>{r.d(t,{W:()=>c});var n=r(3760),i=r(3112),o="\n  mutation setBillingAddress(\n    $cartId: String!\n    $input: BillingAddressInput!\n  ) {\n    setBillingAddressOnCart(\n      input: { cart_id: $cartId, billing_address: $input }\n    ) {\n      cart {\n        id\n        ...CheckoutData\n        ...CartSummaryItems\n      }\n    }\n  }\n  ".concat(i.e2,"\n  ").concat(i.Qz,"\n"),s=r(9120),a=r(6824);function l(e,t,r,n,i,o,s){try{var a=e[o](s),l=a.value}catch(e){return void r(e)}a.done?t(l):Promise.resolve(l).then(n,i)}var c=function(){var e,t=(e=function*(e){var{signal:t,cartId:r,input:i}=e,{address:l,same_as_shipping:c}=i;if(!r)throw new n.Ij;if(!c&&!l)throw new n.o8;return yield(0,s.m)({type:"mutation",query:o,options:{signal:t,variables:{cartId:r,input:i}},path:"setBillingAddressOnCart.cart",signalType:"cart",transformer:a.o})},function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function s(e){l(o,n,i,s,a,"next",e)}function a(e){l(o,n,i,s,a,"throw",e)}s(void 0)}))});return function(e){return t.apply(this,arguments)}}()},8572:(e,t,r)=>{r.d(t,{_:()=>z,i:()=>q});var n=r(2532),i=r(4944),o=r(3792),s=r(3388),a=r(8412),l=()=>(0,a.im)(s.W,{className:"bill-to-shipping-address__skeleton",children:(0,a.im)(s.K,{variant:"row",size:"small"})}),c=r(5536),d=r.n(c),u=r(7008),p=r.n(u),f=r(1496),v=r.n(f),m=r(9356),b=r.n(m),h=r(9904),g=r.n(h),y=r(9960),O={attributes:{"data-dropin":"storefront-checkout","data-sdk":"0.21.2"},styleTagTransform:function(e,t){window._loadedStyles=window._loadedStyles??{};const r=e?.match(/^\.dropin-(\w+)/)?.[1],n=t.getAttribute("data-sdk"),i=r?`sdk/${r}`:t.getAttribute("data-dropin");t.setAttribute("data-dropin",i),t.removeAttribute("data-sdk");const o=window._loadedStyles[i];if(o){const i=function(e,t){const[r,n]=e.split("-"),[i,o]=t.split("-"),s=[...r.split("."),n],a=[...i.split("."),o],l=parseInt(s[0],10),c=parseInt(a[0],10);if(l!==c)return l>c?e:t;const d=parseInt(s[1],10),u=parseInt(a[1],10);if(d!==u)return d>u?e:t;const p=parseInt(s[2],10),f=parseInt(a[2],10);if(p!==f)return p>f?e:t;if(s[3]&&a[3]){const r=/(alpha|beta)(.*)/,n=s[3].match(r),i=a[3].match(r),o=n[1],l=i[1],c=parseInt(n[2],10),d=parseInt(i[2],10);if(o===l)return c>d?e:t;if("alpha"===o&&"beta"===l)return t;if("beta"===o&&"alpha"===l)return e}return s[3]?t:e}(n,o.sdk);if(!r||r&&i===o.sdk){const t=o.style.textContent;o.style.textContent=`${t}\n/* --- MERGED --- */\n${e}`}else r&&i!==o.sdk&&(o.style.textContent=`/* --- UPGRADED --- */\n${e}`);return void t.remove()}t.textContent=e,window._loadedStyles[i]={sdk:n,core:r,style:t};const s=document.querySelector("head"),{lastDropinStyleInjected:a,lastSDKStyleInjected:l}=window._loadedStyles;r?(l?s.insertBefore(t,l.nextSibling):s.insertBefore(t,s.firstChild),window._loadedStyles.lastSDKStyleInjected=t):(a?s.insertBefore(t,a.nextSibling):l?s.insertBefore(t,l.nextSibling):s.insertBefore(t,s.firstChild),window._loadedStyles.lastDropinStyleInjected=t)}};O.setAttributes=b(),O.insert=v().bind(null,"head"),O.domAPI=p(),O.insertStyleElement=g();d()(y.c,O);y.c&&y.c.locals&&y.c.locals;var S=r(2460),j=["className","isInitialized","checked"];function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e,t,r){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var I=e=>{var{className:t,isInitialized:r=!0,checked:n=!0}=e,s=P(e,j),c=(0,S.cF)({title:"Checkout.BillToShippingAddress.title"});return r?(0,a.im)("div",{className:(0,i.i)(["checkout-bill-to-shipping-address",t]),children:(0,a.im)(o.y,_({"data-testid":"bill-to-shipping-checkbox",className:"checkout-bill-to-shipping-address__checkbox",checked:n,name:"checkout-bill-to-shipping-address__checkbox",label:c.title},s))}):(0,a.im)(l,{})},A=r(5668),B=r(9488),C=r(2796),x=r(40),T=r(2236),D=["children"];function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){N(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function N(e,t,r){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function $(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function q(e,t,r){return!t&&!r||!(!t||!r)&&e.every((e=>{var n=e.code;return function(e,t,r){var n=e[r],i=t[r];return void 0===n&&void 0===i||null===n&&null===i||("object"==typeof n&&"object"==typeof i?JSON.stringify(n)===JSON.stringify(i):n===i)}(t,r,n)}))}var z=e=>{var{children:t}=e,r=$(e,D),{data:i}=A.cartSignal.value,o=(null==i?void 0:i.id)||"",s=B.isBillToShippingSignal.value.checked,{isInitialized:l}=(e=>{var t,{isBillToShipping:r}=e,[n,i]=(0,C.oT)(!1),{fields:o}=(0,T.q)(),s=A.cartSignal.value.data,a=!!s,l=null==s?void 0:s.billingAddress,c=null==s||null===(t=s.shippingAddresses)||void 0===t?void 0:t[0];return(0,C.YB)((()=>{if(o){var e=localStorage.getItem(x.c);if(!n&&e)return i(!0),void(r.value={checked:"true"===e,setByUser:!1});if(!n&&a){i(!0);var t=q(o,l,c);r.value={checked:null!=s&&s.billingAddress?t:r.value.checked,setByUser:!1}}}}),[l,null==s?void 0:s.billingAddress,o,a,r,n,c]),{isInitialized:n}})({isBillToShipping:B.isBillToShippingSignal});return(0,a.im)(I,F(F({},r),{},{checked:s,isInitialized:l,onChange:e=>{var t,r=e.target.checked,i=A.cartSignal.value.data,s=Boolean(null==i||null===(t=i.shippingAddresses)||void 0===t?void 0:t[0]);if(B.isBillToShippingSignal.value={checked:r,setByUser:!0},localStorage.setItem(x.c,r.toString()),l&&r&&s){var a=new AbortController;return(0,n.W)({signal:a.signal,cartId:o,input:{same_as_shipping:!0}}).catch((e=>{console.error(e)})),()=>{a.abort()}}},disabled:A.cartSignal.value.pending}))}},40:(e,t,r)=>{r.d(t,{c:()=>n});var n="is_bill_to_shipping_address"},9700:(e,t,r)=>{r.d(t,{_k:()=>i._,cT:()=>n.c,cp:()=>i._,iI:()=>i.i});var n=r(40),i=r(8572)},2236:(e,t,r)=>{r.d(t,{Y:()=>l,q:()=>c});var n=r(304),i=r(8596),o=r(1212),s=r(8412),a=(0,n.GY)(void 0);function l(e){var{children:t}=e,[r,n]=(0,i.oT)({});return(0,i.YB)((()=>{(0,o.m)().then((e=>n({fields:e})))}),[]),(0,s.im)(a.Provider,{value:r,children:t})}function c(){var e=(0,i.Co)(a);if(void 0!==e)return e;throw new Error("useAddressFormFields must be used within an AddressFormFieldsProvider")}},9488:(e,t,r)=>{r.d(t,{isBillToShippingSignal:()=>n});var n=(0,r(1520).OC)({checked:!0,setByUser:!1})},9960:(e,t,r)=>{r.d(t,{c:()=>a});var n=r(6008),i=r.n(n),o=r(2076),s=r.n(o)()(i());s.push([e.id,".checkout-bill-to-shipping-address{\n  display:grid;\n}\n\n.checkout-bill-to-shipping-address label{\n  font:var(--type-body-2-default-font);\n  letter-spacing:var(--type-body-2-default-letter-spacing);\n  gap:0;\n}\n",""]);const a=s},8122:(t,r,n)=>{t.exports=(e=>{var t={};return n.d(t,e),t})({events:()=>e.events})},8616:(e,r,n)=>{e.exports=(e=>{var t={};return n.d(t,e),t})({FetchGraphQL:()=>t.FetchGraphQL})}};import r from"../runtime.js";import*as n from"../8412.js";r.C(n);import*as i from"../2892.js";r.C(i);import*as o from"../2328.js";r.C(o);import*as s from"../8668.js";r.C(s);import*as a from"../5068.js";r.C(a);import*as l from"./BillToShippingAddress.js";r.C(l);var c,d=(c=9700,r(r.s=c)),u=d.cT,p=d._k,f=d.iI,v=d.cp;export{u as BILL_TO_SHIPPING_KEY,p as BillToShippingAddress,f as compareAddresses,v as default};