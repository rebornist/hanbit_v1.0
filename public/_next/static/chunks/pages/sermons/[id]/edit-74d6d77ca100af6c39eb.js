(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[715],{7665:function(t,e,n){"use strict";n.d(e,{K:function(){return r}});var r=["\uce7c\ub7fc","\ubb35\uc0c1"]},5272:function(t,e,n){"use strict";n.r(e);var r=n(5893),o=n(6156),s=n(7294),i=n(1163),c=n(3836),a=n(5052),p=n(7665);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){(0,o.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.default=(0,i.withRouter)((function(){var t=(0,i.useRouter)().asPath,e="".concat(t).split("/")[2],n=(0,s.useState)({target:"",csrf:"",postTitle:"",postContent:"",postID:"",permission:!1,sermon:{}}),o=n[0],u=n[1];return(0,s.useEffect)((function(){var t="/api/sermons/edit/".concat(e);(0,c.L)(t,"GET").then((function(t){u({target:"sermons",csrf:t.data.csrf,postTypes:p.K,idToken:t.data.idToken,sermon:t.data.sermon,postTitle:t.data.sermon.title,postContent:t.data.sermon.content,postID:e,permission:t.data.permission})})).catch((function(t){alert(t.message),window.location.replace("/sermons")}))}),[]),(0,r.jsx)(r.Fragment,{children:o.permission&&(0,r.jsx)(a.Z,{postID:o.postID,target:o.target,csrf:o.csrf,postTypes:o.postTypes,title:o.postTitle,content:o.postContent,item:f(f({},o.sermon),{},{photoId:o.sermon.photo,idToken:o.idToken})})})}))},1838:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sermons/[id]/edit",function(){return n(5272)}])}},function(t){t.O(0,[774,456,480,433,921,348],(function(){return e=1838,t(t.s=e);var e}));var e=t.O();_N_E=e}]);