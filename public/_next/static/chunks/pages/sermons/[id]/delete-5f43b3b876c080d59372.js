(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[262],{382:function(t,e,s){"use strict";s.r(e);var n=s(5893),o=s(7294),r=s(1163),i=s(3836),a=s(1508);e.default=(0,r.withRouter)((function(){var t=(0,r.useRouter)().asPath,e="".concat(t).split("/")[2],s=(0,o.useState)({target:"",csrf:"",postTitle:"",postID:"",permission:!1}),c=s[0],u=s[1];return(0,o.useEffect)((function(){var t="/api/sermons/delete/".concat(e);(0,i.L)(t,"GET").then((function(t){u({target:"sermons",csrf:t.data.csrf,postTitle:t.data.sermon.title,permission:t.data.permission,postID:e,sermon:t.data.sermon})})).catch((function(t){alert(t.message),window.location.replace("/sermons")}))}),[]),(0,n.jsx)(n.Fragment,{children:c.permission&&(0,n.jsx)(a.Z,{postID:c.postID,item:c})})}))},3522:function(t,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sermons/[id]/delete",function(){return s(382)}])}},function(t){t.O(0,[774,456,480,433,403],(function(){return e=3522,t(t.s=e);var e}));var e=t.O();_N_E=e}]);