_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"1xXU":function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),c=n.n(r),a=n("nKUr"),o=n("HaE+"),u=n("rePB"),i=n("BHzR"),s=n("q1tI"),l=n("l1VB"),p=n("oDCQ"),b=n("7Cbv"),f=n("20a2"),O=n("k20a"),j=n.n(O),d=(n("FQ0y"),n("Y/v6"));function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w={title:"",content:""};t.default=Object(i.a)((function(){var e=Object(s.useState)(w),t=e[0],n=e[1],r=Object(s.useState)(null),i=r[0],O=r[1],h=Object(s.useRef)(null),y=t.title,m=t.content,x=Object(f.useRouter)();function v(){return(v=Object(o.a)(c.a.mark((function e(){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y&&m){e.next=2;break}return e.abrupt("return");case 2:if(n=Object(b.a)(),t.id=n,!i){e.next=9;break}return r="".concat(i.name,"_").concat(Object(b.a)()),t.coverImage=r,e.next=9,l.a.put(r,i);case 9:return e.next=11,p.a.graphql({query:d.a,variables:{input:t},authMode:"AMAZON_COGNITO_USER_POOLS"});case 11:x.push("/posts/".concat(n));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=Object(o.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h.current.click();case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:"text-3xl font-semibold tracking-wide mt-6",children:"Create new post"}),Object(a.jsx)("input",{onChange:function(e){n((function(){return g(g({},t),{},Object(u.a)({},e.target.name,e.target.value))}))},name:"title",placeholder:"Title",value:t.title,className:"border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"}),i&&Object(a.jsx)("img",{src:URL.createObjectURL(i),className:"my-4"}),Object(a.jsx)(j.a,{value:t.content,onChange:function(e){return n(g(g({},t),{},{content:e}))}}),Object(a.jsx)("input",{type:"file",ref:h,className:"absolute w-0 h-0",onChange:function(e){var t=e.target.files[0];t&&O(t)}}),Object(a.jsx)("button",{className:"bg-purple-600 text-white font-semibold px-8 py-2 rounded-lg mr-2",onClick:function(){return _.apply(this,arguments)},children:"Upload Cover Image"}),Object(a.jsx)("button",{type:"button",className:"mb-4 bg-blue-600 text-white font-semibold px-8 py-2 rounded-lg",onClick:function(){return v.apply(this,arguments)},children:"Create Post"})]})}))},zddE:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create-post",function(){return n("1xXU")}])}},[["zddE",2,3,1,4,12,0,5,6,7,8,9,11,10]]]);