(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{85:function(e,t,n){},86:function(e,t,n){},92:function(e,t,n){},94:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var a,r,c,s,i,o,l,d,u,j,b,h,m=n(3),O=n.n(m),x=n(67),g=n.n(x),p=(n(85),n(18)),f=n(75),v=n(106),y=n(107),w=n(105),N=n(74),k=n(15),S=n(10),_=n(68),C=n(69),T=n(56),A=new(function(){function e(){Object(_.a)(this,e)}return Object(C.a)(e,[{key:"getProfile",value:function(){return Object(T.a)(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return Object(T.a)(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),$=(n(86),n(1)),I=function(){return Object($.jsx)("header",{className:"mb-4 py-2 flex-row align-center",children:Object($.jsxs)("div",{className:"container flex-row justify-space-between-lg justify-center align-center",children:[Object($.jsxs)(k.b,{to:"/",children:[Object($.jsx)("h1",{children:"KISS ANIME / \u30ad\u30b9\u30a2\u30cb\u30e1 "}),Object($.jsx)("h4",{children:"FROM THE ASHES REBORN"})]}),Object($.jsx)("nav",{className:"text-center susi",children:A.loggedIn()?Object($.jsxs)($.Fragment,{children:[Object($.jsx)(k.b,{to:"/profile",children:"Me"}),Object($.jsx)(k.b,{to:"/MyAnime",children:"My Anime"}),Object($.jsx)("a",{href:"/",onClick:function(e){e.preventDefault(),A.logout()},children:"Logout"})]}):Object($.jsxs)($.Fragment,{children:[Object($.jsx)(k.b,{to:"/login",children:"Login"}),Object($.jsx)(k.b,{to:"/signup",children:"Signup"})]})})]})})},E=(n(92),function(){return Object($.jsx)("footer",{className:"w-100 mt-auto bg-secondary p-4 footer",children:Object($.jsx)("div",{className:"container",children:Object($.jsxs)("p",{id:"footer-content",children:["\xa92021 by",Object($.jsx)("a",{href:"https://github.com/bgerner",target:"_blank",rel:"noreferrer",children:" Ben Gerner "}),"/\\",Object($.jsx)("a",{href:"https://github.com/RotichD",target:"_blank",rel:"noreferrer",children:" Dylan Rotich "}),"/\\",Object($.jsx)("a",{href:"https://github.com/d-trecker",target:"_blank",rel:"noreferrer",children:" Dylan Trecker "}),"/\\",Object($.jsx)("a",{href:"https://github.com/thisEmcee",target:"_blank",rel:"noreferrer",children:" Michael Chambers "}),"/\\",Object($.jsx)("a",{href:"https://github.com/theoneandonlyzako",target:"_blank",rel:"noreferrer",children:" Zak Stamps "})]})})})}),D=function(e){var t=e.friendCount,n=e.username,a=e.friends;return a&&a.length?Object($.jsxs)("div",{children:[Object($.jsxs)("h5",{children:[n," is ","following"," ",t," users"]}),a.map((function(e){return Object($.jsx)("button",{className:"btn w-100 display-block mb-2",children:Object($.jsx)(k.b,{to:"/profile/".concat(e.username),children:e.username})},e._id)}))]}):Object($.jsxs)("p",{className:"bg-dark text-light p-3",children:[n,", make some friends!"]})},B=n(109),L=n(20),R=n(108),q=Object(R.a)(a||(a=Object(L.a)(["\n  query thoughts($username: String) {\n    thoughts(username: $username) {\n      _id\n      thoughtText\n      createdAt\n      username\n      reactionCount\n      reactions {\n        _id\n        createdAt\n        username\n        reactionBody\n      }\n    }\n  }\n"]))),M=Object(R.a)(r||(r=Object(L.a)(["\n  query thought($id: ID!) {\n    thought(_id: $id) {\n      _id\n      thoughtText\n      createdAt\n      username\n      reactionCount\n      reactions {\n        _id\n        createdAt\n        username\n        reactionBody\n      }\n    }\n  }\n"]))),F=Object(R.a)(c||(c=Object(L.a)(["\n  query user($username: String!) {\n    user(username: $username) {\n      _id\n      username\n      email\n      friendCount\n      friends {\n        _id\n        username\n      }\n      thoughts {\n        _id\n        thoughtText\n        createdAt\n        reactionCount\n      }\n      animes {\n        _id\n        animeText\n        animeEpisodes\n        createdAt\n      }\n    }\n  }\n"]))),U=Object(R.a)(s||(s=Object(L.a)(["\n  {\n    me {\n      _id\n      username\n      email\n      friendCount\n      thoughts {\n        _id\n        thoughtText\n        createdAt\n        reactionCount\n        reactions {\n          _id\n          createdAt\n          reactionBody\n          username\n        }\n      }\n      friends {\n        _id\n        username\n      }\n      animes {\n        _id\n        animeText\n        animeEpisodes\n        createdAt\n      }\n    }\n  }\n"]))),Y=Object(R.a)(i||(i=Object(L.a)(["\n  {\n    me {\n      _id\n      username\n      email\n      friendCount\n      friends {\n        _id\n        username\n      }\n      animes { \n        _id\n        animeText\n        animeEpisodes\n      }\n    }\n  }\n"]))),H=function(e){var t=e.thoughts,n=e.title;return t.length?Object($.jsxs)("div",{children:[Object($.jsx)("h3",{children:n}),t&&t.map((function(e){return Object($.jsxs)("div",{className:"card mb-3",children:[Object($.jsxs)("p",{className:"card-header",children:[Object($.jsx)(k.b,{to:"/profile/".concat(e.username),style:{fontWeight:700},className:"text-light",children:e.username})," ","thought on ",e.createdAt]}),Object($.jsx)("div",{className:"card-body",children:Object($.jsxs)(k.b,{to:"/thought/".concat(e._id),children:[Object($.jsx)("p",{children:e.thoughtText}),Object($.jsxs)("p",{className:"mb-0",children:["Reactions: ",e.reactionCount," || Click to"," ",e.reactionCount?"see":"start"," the discussion!"]})]})})]},e._id)}))]}):Object($.jsx)("h3",{children:"No Thoughts Yet"})},W=n(11),Q=n.n(W),P=n(17),z=n(62),G=n(12),J=n(111),K=Object(R.a)(o||(o=Object(L.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),V=Object(R.a)(l||(l=Object(L.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),Z=Object(R.a)(d||(d=Object(L.a)(["\n  mutation addThought($thoughtText: String!) {\n    addThought(thoughtText: $thoughtText) {\n      _id\n      thoughtText\n      createdAt\n      username\n      reactionCount\n      reactions {\n        _id\n      }\n    }\n  }\n"]))),X=Object(R.a)(u||(u=Object(L.a)(["\n  mutation addReaction($thoughtId: ID!, $reactionBody: String!) {\n    addReaction(thoughtId: $thoughtId, reactionBody: $reactionBody) {\n      _id\n      reactionCount\n      reactions {\n        _id\n        reactionBody\n        createdAt\n        username\n      }\n    }\n  }\n"]))),ee=Object(R.a)(j||(j=Object(L.a)(["\n  mutation addFriend($id: ID!) {\n    addFriend(friendId: $id) {\n      _id\n      username\n      friendCount\n      friends {\n        _id\n        username\n      }\n    }\n  }\n"]))),te=(Object(R.a)(b||(b=Object(L.a)(["\n  mutation removeFriend($id: ID!) {\n    removeFriend(id: $id) {\n      _id\n      username\n      friends {\n        _id\n        username\n      }\n    }\n  }\n"]))),Object(R.a)(h||(h=Object(L.a)(["\n  mutation addAnime($animeText: String!, $animeEpisodes: String!) {\n    addAnime(animeText: $animeText, animeEpisodes:$animeEpisodes) {\n      _id\n      animeText\n      animeEpisodes\n      createdAt\n    }\n  }\n"])))),ne=(n(94),function(){var e=Object(m.useState)(""),t=Object(G.a)(e,2),n=t[0],a=t[1],r=Object(m.useState)(0),c=Object(G.a)(r,2),s=c[0],i=c[1],o=Object(J.a)(Z,{update:function(e,t){var n=t.data.addThought;try{var a=e.readQuery({query:q}).thoughts;e.writeQuery({query:q,data:{thoughts:[n].concat(Object(z.a)(a))}})}catch(c){console.error(c)}var r=e.readQuery({query:U}).me;e.writeQuery({query:U,data:{me:Object(p.a)(Object(p.a)({},r),{},{thoughts:[].concat(Object(z.a)(r.thoughts),[n])})}})}}),l=Object(G.a)(o,2),d=l[0],u=l[1].error,j=function(){var e=Object(P.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d({variables:{thoughtText:n}});case 4:alert("One more Anime to share with your followers!"),a(""),i(0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object($.jsxs)("div",{children:[Object($.jsxs)("p",{className:"m-0 ".concat(280===s||u?"text-error":""),children:["Character Count: ",s,"/280",u&&Object($.jsx)("span",{className:"ml-2",children:"Oops something went wrong..."})]}),Object($.jsxs)("form",{className:"flex-row justify-center justify-space-between-md align-stretch",onSubmit:j,children:[Object($.jsx)("textarea",{placeholder:"Here's a new Anime...",value:n,className:"form-input col-12 col-md-9",onChange:function(e){e.target.value.length<=280&&(a(e.target.value),i(e.target.value.length))}}),Object($.jsx)("button",{className:"btn col-12 col-md-3",id:"submittt",type:"submit",children:"Submit"})]})]})}),ae=function(){var e=Object(B.a)(q),t=e.loading,n=e.data,a=Object(B.a)(Y).data,r=(null===n||void 0===n?void 0:n.thoughts)||[],c=A.loggedIn();return Object($.jsx)("main",{children:Object($.jsxs)("div",{className:"flex-row justify-space-between",children:[c&&Object($.jsx)("div",{className:"col-12 mb-3",children:Object($.jsx)(ne,{})}),Object($.jsx)("div",{className:"col-12 mb-3 ".concat(c&&"col-lg-8"),children:t?Object($.jsx)("div",{children:"Loading..."}):Object($.jsx)(H,{thoughts:r,title:"This is very anime, wouldn't you say?"})}),c&&a?Object($.jsx)("div",{className:"col-12 col-lg-3 mb-3",children:Object($.jsx)(D,{username:a.me.username,friendCount:a.me.friendCount,friends:a.me.friends})}):null]})})},re=n(39),ce=function(e){var t=Object(m.useState)({email:"",password:""}),n=Object(G.a)(t,2),a=n[0],r=n[1],c=Object(J.a)(K),s=Object(G.a)(c,2),i=s[0],o=s[1].error,l=function(e){var t=e.target,n=t.name,c=t.value;r(Object(p.a)(Object(p.a)({},a),{},Object(re.a)({},n,c)))},d=function(){var e=Object(P.a)(Q.a.mark((function e(t){var n,c;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,i({variables:Object(p.a)({},a)});case 4:n=e.sent,c=n.data,A.login(c.login.token),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:r({email:"",password:""});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object($.jsx)("main",{className:"flex-row justify-center mb-4",children:Object($.jsx)("div",{className:"col-12 col-md-6",children:Object($.jsxs)("div",{className:"card",children:[Object($.jsx)("h4",{className:"card-header",children:"Login"}),Object($.jsxs)("div",{className:"card-body",children:[Object($.jsxs)("form",{onSubmit:d,children:[Object($.jsx)("input",{className:"form-input",placeholder:"Your email",name:"email",type:"email",id:"email",value:a.email,onChange:l}),Object($.jsx)("input",{className:"form-input",placeholder:"******",name:"password",type:"password",id:"password",value:a.password,onChange:l}),Object($.jsx)("button",{className:"btn d-block w-100",type:"submit",children:"Submit"})]}),o&&Object($.jsx)("div",{children:"Login failed"})]})]})})})},se=function(){return Object($.jsx)("div",{children:"Oops, we couldn't find that page."})},ie=function(e){var t=e.reactions;return Object($.jsxs)("div",{className:"card mb-3",children:[Object($.jsx)("div",{className:"card-header",children:Object($.jsx)("span",{className:"text-light",children:"Reactions"})}),Object($.jsx)("div",{className:"card-body",children:t&&t.map((function(e){return Object($.jsxs)("p",{className:"pill mb-3",children:[e.reactionBody," ","// ",Object($.jsxs)(k.b,{to:"/profile/".concat(e.username),style:{fontWeight:700},children:[e.username," on ",e.createdAt]})]},e._id)}))})]})},oe=function(e){var t=e.thoughtId,n=Object(m.useState)(""),a=Object(G.a)(n,2),r=a[0],c=a[1],s=Object(m.useState)(0),i=Object(G.a)(s,2),o=i[0],l=i[1],d=Object(J.a)(X),u=Object(G.a)(d,2),j=u[0],b=u[1].error,h=function(){var e=Object(P.a)(Q.a.mark((function e(n){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,j({variables:{reactionBody:r,thoughtId:t}});case 4:c(""),l(0),alert("Reaction has been made!"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object($.jsxs)("div",{children:[Object($.jsxs)("p",{className:"m-0 ".concat(280===o||b?"text-error":""),children:["Character Count: ",o,"/280",b&&Object($.jsx)("span",{className:"ml-2",children:"Something went wrong..."})]}),Object($.jsxs)("form",{className:"flex-row justify-center justify-space-between-md align-stretch",onSubmit:h,children:[Object($.jsx)("textarea",{placeholder:"Leave a reaction to this thought...",value:r,className:"form-input col-12 col-md-9",onChange:function(e){e.target.value.length<=280&&(c(e.target.value),l(e.target.value.length))}}),Object($.jsx)("button",{className:"btn col-12 col-md-3",type:"submit",children:"Submit"})]})]})},le=function(e){var t=Object(S.g)().id,n=Object(B.a)(M,{variables:{id:t}}),a=n.loading,r=n.data,c=(null===r||void 0===r?void 0:r.thought)||{};return a?Object($.jsx)("div",{children:"Loading..."}):Object($.jsxs)("div",{children:[Object($.jsxs)("div",{className:"card mb-3",children:[Object($.jsxs)("p",{className:"card-header",children:[Object($.jsx)("span",{style:{fontWeight:700},className:"text-light",children:c.username})," ","thought on ",c.createdAt]}),Object($.jsx)("div",{className:"card-body",children:Object($.jsx)("p",{children:c.thoughtText})})]}),c.reactionCount>0&&Object($.jsx)(ie,{reactions:c.reactions}),A.loggedIn()&&Object($.jsx)(oe,{thoughtId:c._id})]})},de=function(){var e=Object(J.a)(ee),t=Object(G.a)(e,1)[0],n=Object(S.g)().username,a=Object(B.a)(n?F:U,{variables:{username:n}}),r=a.loading,c=a.data,s=(null===c||void 0===c?void 0:c.me)||(null===c||void 0===c?void 0:c.user)||{};if(A.loggedIn()&&A.getProfile().data.username===n)return Object($.jsx)(S.a,{to:"/profile"});if(r)return Object($.jsx)("div",{children:"Loading..."});if(!(null===s||void 0===s?void 0:s.username))return Object($.jsx)("h4",{children:"You need to be logged in to see this page. Use the navigation links above to sign up or log in!"});var i=function(){var e=Object(P.a)(Q.a.mark((function e(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t({variables:{id:s._id}});case 3:alert("One more friend to share life with!"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object($.jsxs)("div",{children:[Object($.jsxs)("div",{className:"flex-row mb-3",children:[Object($.jsxs)("h2",{className:"profile-title text-secondary p-3 display-inline-block",children:[n?"".concat(s.username,"'s"):"Your"," profile"]}),n&&Object($.jsxs)("button",{className:"btn ml-auto",onClick:i,children:["Follow ",n?"".concat(s.username):"User"]})]}),Object($.jsx)("div",{className:"mb-3",children:!n&&Object($.jsx)(ne,{})}),Object($.jsxs)("div",{className:"flex-row justify-space-between mb-3",children:[Object($.jsx)("div",{className:"col-12 mb-3 col-lg-8",children:Object($.jsx)(H,{thoughts:s.thoughts,title:"".concat(s.username,"'s thoughts...")})}),Object($.jsx)("div",{className:"col-12 col-lg-3 mb-3",children:Object($.jsx)(D,{username:s.username,friendCount:s.friendCount,friends:s.friends})})]})]})},ue=function(){var e=Object(m.useState)({username:"",email:"",password:""}),t=Object(G.a)(e,2),n=t[0],a=t[1],r=Object(J.a)(V),c=Object(G.a)(r,2),s=c[0],i=c[1].error,o=function(e){var t=e.target,r=t.name,c=t.value;a(Object(p.a)(Object(p.a)({},n),{},Object(re.a)({},r,c)))},l=function(){var e=Object(P.a)(Q.a.mark((function e(t){var a,r;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,s({variables:Object(p.a)({},n)});case 4:a=e.sent,r=a.data,A.login(r.addUser.token),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object($.jsx)("main",{className:"flex-row justify-center mb-4",children:Object($.jsx)("div",{className:"col-12 col-md-6",children:Object($.jsxs)("div",{className:"card",children:[Object($.jsx)("h4",{className:"card-header",children:"Sign Up"}),Object($.jsxs)("div",{className:"card-body",children:[Object($.jsxs)("form",{onSubmit:l,children:[Object($.jsx)("input",{className:"form-input",placeholder:"Your username",name:"username",type:"username",id:"username",value:n.username,onChange:o}),Object($.jsx)("input",{className:"form-input",placeholder:"Your email",name:"email",type:"email",id:"email",value:n.email,onChange:o}),Object($.jsx)("input",{className:"form-input",placeholder:"******",name:"password",type:"password",id:"password",value:n.password,onChange:o}),Object($.jsx)("button",{className:"btn d-block w-100",type:"submit",children:"Submit"})]}),i&&Object($.jsx)("div",{children:"Sign up failed"})]})]})})})};n(96);var je=function(e){var t=e.anime,n=Object(J.a)(te),a=Object(G.a)(n,1)[0],r=function(){var e=Object(P.a)(Q.a.mark((function e(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.title),console.log(t.rated),e.prev=2,e.next=5,a({variables:{animeText:t.title,animeEpisodes:t.rated}});case 5:alert("DANGER! YOU'VE ADDED ANOTHER ANIME!"),window.location.reload(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return Object($.jsxs)("article",{className:"anime-card",children:[Object($.jsx)("figure",{children:Object($.jsx)("a",{href:t.url,target:"_blank",rel:"noreferrer",children:Object($.jsx)("img",{src:t.image_url,alt:"Anime Cover"})})}),Object($.jsx)("h3",{children:t.title}),Object($.jsxs)("p",{children:["Number of Episodes: ",t.episodes]}),Object($.jsx)("button",{className:"btn ml-auto",onClick:r,children:"Add to Watch List"})]})};n(97);var be=function(e){return Object($.jsxs)("div",{children:[Object($.jsxs)("form",{className:"searchBox",onSubmit:e.HandleSearch,children:[Object($.jsx)("input",{className:"search",type:"search",placeholder:"Search for an anime",required:!0,value:e.search,onChange:function(t){return e.SetSearch(t.target.value)}}),Object($.jsx)("button",{className:"searchAnimeBtn d-block w-100",type:"submit",children:"Submit"})]}),Object($.jsx)("div",{className:"anime-list",children:e.animeList.map((function(e){return Object($.jsx)(je,{anime:e},e.mal_id)}))})]})},he=function(e){var t=e.username,n=e.animes;return n&&n.length?Object($.jsx)("div",{children:n.map((function(e){return Object($.jsxs)("div",{className:"btn w-100 display-block mb-2",children:[e.animeText," ",e.animeEpisodes]},e._id)}))}):Object($.jsxs)("p",{className:"bg-dark text-light p-3",children:[t,", go watch some animes!"]})},me=function(){var e=Object(m.useState)([]),t=Object(G.a)(e,2),n=t[0],a=t[1],r=Object(m.useState)(""),c=Object(G.a)(r,2),s=c[0],i=c[1],o=Object(B.a)(Y).data,l=Object(S.g)().username,d=Object(B.a)(l?F:U,{variables:{username:l}}),u=d.loading,j=d.data,b=(null===j||void 0===j?void 0:j.me)||(null===j||void 0===j?void 0:j.user)||{};if(A.loggedIn()&&A.getProfile().data.username===l)return Object($.jsx)(S.a,{to:"/MyAnime"});if(u)return Object($.jsx)("div",{children:"Loading..."});if(!(null===b||void 0===b?void 0:b.username))return Object($.jsx)("h4",{children:"You need to be logged in to see this page. Use the navigation links above to sign up or log in!"});var h=function(){var e=Object(P.a)(Q.a.mark((function e(t){var n;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.jikan.moe/v3/search/anime?q=".concat(t,"\n          &order_by=title&sort=asc&limit=10")).then((function(e){return e.json()}));case 2:n=e.sent,console.log(n.results),a(n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object($.jsxs)("div",{children:[Object($.jsx)(be,{HandleSearch:function(e){e.preventDefault(),h(s)},search:s,SetSearch:i,animeList:n}),Object($.jsx)(he,{username:o.me.username,animes:o.me.animes})]})},Oe=Object(f.a)({uri:"/graphql"}),xe=Object(N.a)((function(e,t){var n=t.headers,a=localStorage.getItem("id_token");return{headers:Object(p.a)(Object(p.a)({},n),{},{authorization:a?"Bearer ".concat(a):""})}})),ge=new v.a({link:xe.concat(Oe),cache:new y.a});var pe=function(){return Object($.jsx)(w.a,{client:ge,children:Object($.jsx)(k.a,{children:Object($.jsxs)("div",{className:"flex-column justify-flex-start min-100-vh",children:[Object($.jsx)(I,{}),Object($.jsx)("div",{className:"container",children:Object($.jsxs)(S.d,{children:[Object($.jsx)(S.b,{exact:!0,path:"/",component:ae}),Object($.jsx)(S.b,{exact:!0,path:"/login",component:ce}),Object($.jsx)(S.b,{exact:!0,path:"/signup",component:ue}),Object($.jsx)(S.b,{exact:!0,path:"/profile/:username?",component:de}),Object($.jsx)(S.b,{exact:!0,path:"/MyAnime/:username?",component:me}),Object($.jsx)(S.b,{exact:!0,path:"/thought/:id",component:le}),Object($.jsx)(S.b,{component:se})]})}),Object($.jsx)(E,{})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));g.a.render(Object($.jsx)(O.a.StrictMode,{children:Object($.jsx)(pe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[98,1,2]]]);
//# sourceMappingURL=main.69f4b80e.chunk.js.map