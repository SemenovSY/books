(this.webpackJsonpbooks=this.webpackJsonpbooks||[]).push([[0],[,,,,,,,,,,,function(t,e,c){},function(t,e){},,function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},,function(t,e,c){"use strict";c.r(e);var n=c(1),i=c.n(n),r=c(5),o=c.n(r),s=(c(11),c(12),c(4)),a=c.n(s),l=c(6),u=c(2),j=(c(14),c(15),c(16),c(17),c(0));var d=function(t){var e=t.active,c=t.setActive,n=t.content,i=(t.setContent,null);return n&&(i=JSON.parse(n),console.log(i)),Object(j.jsx)("div",{className:e?"modal active":"modal",onClick:function(){return c(!1)},children:Object(j.jsx)("div",{className:e?"modal_result active":"modal_result",onClick:function(t){return t.stopPropagation()},children:i?Object(j.jsxs)("div",{className:"book_info",children:[Object(j.jsx)("div",{id:"currentBook_cover",children:Object(j.jsx)("img",{src:"http://covers.openlibrary.org/b/id/".concat(i.cover_i,"-L.jpg"),alt:"null",width:"100%",height:"100%"})}),Object(j.jsx)("div",{id:"currentBook_title",children:i.title}),Object(j.jsx)("div",{id:"currentBook_author",children:"Author: ".concat(i.author_name)}),Object(j.jsx)("div",{id:"currentBook_publishDate",children:"Publish Date: ".concat(i.publish_date[0])}),Object(j.jsx)("div",{id:"currentBook_publisher",children:"Publisher: ".concat(i.publisher[0])}),Object(j.jsx)("div",{id:"currentBook_isbn",children:"ISBN: ".concat(i.isbn[0])})]}):null})})};var b=function(t){var e=t.res,c=Object(n.useState)(!1),i=Object(u.a)(c,2),r=i[0],o=i[1],s=Object(n.useState)(""),a=Object(u.a)(s,2),l=a[0],b=a[1];return Object(j.jsxs)("div",{className:"result",children:[e.map((function(t,e){return Object(j.jsxs)("div",{className:"book",children:[Object(j.jsx)("div",{id:"cover",onClick:function(){o(!0),b(JSON.stringify(t))},children:Object(j.jsx)("img",{src:"http://covers.openlibrary.org/b/id/".concat(t.cover_i,"-M.jpg"),alt:"null",width:"200px",height:"310px"})}),Object(j.jsx)("div",{id:"title",children:t.title}),Object(j.jsx)("div",{id:"description",children:"Author: ".concat(t.author_name)})]},e)})),Object(j.jsx)(d,{active:r,setActive:o,content:l,setContent:b})]})};var h=function(){var t=Object(n.useState)(""),e=Object(u.a)(t,2),c=e[0],i=e[1],r=Object(n.useState)(!1),o=Object(u.a)(r,2),s=o[0],d=o[1],h=Object(n.useState)(""),v=Object(u.a)(h,2),O=v[0],p=v[1],f=Object(n.useState)([]),x=Object(u.a)(f,2),m=x[0],g=x[1];function k(){return(k=Object(l.a)(a.a.mark((function t(e){var c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:d(!0),c=e.split(" ").join("+"),fetch("https://openlibrary.org/search.json?title=".concat(c)).then((function(t){return t.json()})).then((function(t){i(t),g(t.docs)})).then((function(){return d()})).catch(p);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return s?Object(j.jsx)("h2",{className:"animate",children:"Receiving data..."}):O?Object(j.jsx)("pre",{children:JSON.stringify(O,null,2)}):(c.docs,console.log(m),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"search",children:[Object(j.jsx)("input",{type:"text",id:"search-bar",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438"}),Object(j.jsx)("a",{id:"search-button",onClick:function(){var t=document.getElementById("search-bar");t.value&&function(t){k.apply(this,arguments)}(t.value)},children:"search"})]}),m?Object(j.jsx)(b,{res:m}):null]}))},v=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(e){var c=e.getCLS,n=e.getFID,i=e.getFCP,r=e.getLCP,o=e.getTTFB;c(t),n(t),i(t),r(t),o(t)}))};o.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),v()}],[[19,1,2]]]);
//# sourceMappingURL=main.adf4612a.chunk.js.map