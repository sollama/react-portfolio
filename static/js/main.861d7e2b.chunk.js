(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{115:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(24),l=n.n(r),o=n(121),c=n(122),m=n(123),u=n(64),s=n.n(u),p=n(10),d=n(11),f=n(13),h=n(12),E=n(49),g=n.n(E),v=n(50),b=n.n(v),y=n(51),k=n.n(y),x=[{id:1,link:"mailto:solana.liu@alumni.emory.edu",image:g.a},{id:2,link:"https://github.com/sollama",image:b.a},{id:3,link:"https://www.linkedin.com/in/solanaliu/",image:k.a}],j=function(e){var t=e.socialProfile,n=t.link,a=t.image;return i.a.createElement("span",null,i.a.createElement("a",{href:n},i.a.createElement("img",{src:a,alt:"social-profile",style:{width:35,height:35,margin:10}})))},O=function(){return i.a.createElement("div",null,i.a.createElement("h2",null,"Connect with me!"),i.a.createElement("div",null,x.map((function(e){return i.a.createElement(j,{key:e.id,socialProfile:e})}))))},w=["a software engineer with a background in neuroscience research ","a lifelong learner and I always enjoy a good challenge"],M=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={titleIndex:0,fadeIn:!0},e.animateTitles=function(){e.titleInterval=setInterval((function(){var t=(e.state.titleIndex+1)%w.length;e.setState({titleIndex:t,fadeIn:!0}),e.timeout=setTimeout((function(){return e.setState({fadeIn:!1})}),2e3)}),4e3)},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timeout=setTimeout((function(){return e.setState({fadeIn:!1})}),2e3),this.animateTitles()}},{key:"componentWillUnmount",value:function(){clearInterval(this.titleInterval),clearTimeout(this.timeout)}},{key:"render",value:function(){var e=this.state,t=e.fadeIn,n=e.titleIndex,a=w[n];return i.a.createElement("p",{className:t?"title-fade-in":"title-fade-out"},"I am ",a)}}]),n}(a.Component),I=n(52),C=n.n(I),S=n(53),T=n.n(S),N=n(54),B=n.n(N),L=n(55),_=n.n(L),P=n(56),A=n.n(P),R=n(57),W=n.n(R),D=n(58),G=n.n(D),J=[{id:1,title:"PokeMan",description:"Poke Bowls & Japanese Cuisine",image:T.a},{id:2,title:"Mango Tree Supermarket",description:"A Grocery Store",image:B.a},{id:3,title:"The Bridges Connection",description:"Real Estate",image:_.a},{id:4,title:"Atomic Ant Models",description:"Set Design & Architectural Models",image:A.a},{id:5,title:"Twitterism",description:"Book Promotion",image:W.a},{id:6,title:"Fontana Plaza",description:"Shopping Center",image:G.a}],U=(n(73),function(e){var t=e.portfolio,n=t.title,a=t.image,r=t.description;return i.a.createElement("div",{style:{display:"inline-block",width:300,margin:10}},i.a.createElement("h3",null,n),i.a.createElement("img",{src:a,alt:"profile",style:{display:"inline-block",width:300,margin:10,padding:10}}),i.a.createElement("p",null,r))}),z=function(){return i.a.createElement("div",null,i.a.createElement("h2",null,"Featured Websites"),i.a.createElement("div",null,J.map((function(e){return i.a.createElement(U,{key:e.id,portfolio:e})}))))},F=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={displayBio:!1},e.toggleDisplayBio=function(){e.setState({displayBio:!e.state.displayBio})},e}return Object(d.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("img",{src:C.a,alt:"profile",className:"profile"}),i.a.createElement("h1",null,"Hello!"),i.a.createElement("p",null,"My name is Solana."),i.a.createElement(M,null),i.a.createElement("p",null,"I'm always looking forward to working on meaningful projects."),this.state.displayBio?i.a.createElement("div",null,i.a.createElement("p",null,"In addition to coding, I enjoy hot yoga, painting, and making moodboards."),i.a.createElement("button",{onClick:this.toggleDisplayBio},"Show Less")):i.a.createElement("div",null,i.a.createElement("button",{onClick:this.toggleDisplayBio},"Read more")),i.a.createElement("hr",null),i.a.createElement(z,null),i.a.createElement("hr",null),i.a.createElement(O,null))}}]),n}(a.Component),H=n(120),V=(n(74),function(e){var t=e.linkLocation,n=e.labelText;return i.a.createElement("div",{className:"header-menu"},i.a.createElement(H.a,{to:t},n))}),q=function(e){var t=e.children;return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(V,{linkLocation:"/",labelText:"Home"}),i.a.createElement(V,{linkLocation:"/Generator",labelText:"Meme Generator"})),t)},K=n(15),Q=(n(80),function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).state={hovered:!1},e}return Object(d.a)(n,[{key:"postMeme",value:function(){var e=this.props,t=e.text0,n=e.text1,a={template_id:this.props.meme.id,text0:t,text1:n};this.props.createMeme(a)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"meme-item",onMouseEnter:function(){return e.setState({hovered:!0})},onMouseLeave:function(){return e.setState({hovered:!1})},onClick:function(){return e.postMeme()}},i.a.createElement("img",{src:this.props.meme.url,alt:this.props.meme.name,className:this.state.hovered?"meme-img darken-img":"meme-img"}),i.a.createElement("p",{className:this.state.hovered?"meme-text":"no-txt"},this.props.meme.name))}}]),n}(a.Component)),X=Object(K.b)(null,{createMeme:function(e){return function(t){return function(e){e.username="reactportfolio",e.password="narwhalscutetho";var t=Object.keys(e).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&");return console.log("bodyParams",t),fetch("https://api.imgflip.com/caption_image",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t}).then((function(e){return e.json()}))}(e).then((function(e){return t({type:"NEW_MEME",meme:e})}))}}})(Q),Y=n(117),Z=n(124),$=n(118),ee=n(119),te=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null,this.props.myMemes.map((function(e,t){return i.a.createElement("img",{key:t,src:e.data.url,alt:"my-meme",className:"my-meme-img"})})))}}]),n}(a.Component);var ne=Object(K.b)((function(e){return{myMemes:e.myMemes}}),null)(te),ae=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).state={memeLimit:10,text0:"",text1:""},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"generator"},i.a.createElement("h2",null,"Welcome to the Meme Generator!"),i.a.createElement(ne,null),i.a.createElement("h4",{className:"pad"},i.a.createElement("i",null," Write some text and click on a picture to generate a meme!")),i.a.createElement(Y.a,{className:"pad",inline:!0},i.a.createElement(Z.a,null,i.a.createElement($.a,null,"Top \xa0 "),"",i.a.createElement(ee.a,{type:"text",onChange:function(t){return e.setState({text0:t.target.value})}})),"\xa0 \xa0\xa0",i.a.createElement(Z.a,null,i.a.createElement($.a,null,"Bottom \xa0"),"",i.a.createElement(ee.a,{type:"text",onChange:function(t){return e.setState({text1:t.target.value})}}))),this.props.memes.slice(0,this.state.memeLimit).map((function(t,n){return i.a.createElement(X,{key:n,meme:t,text0:e.state.text0,text1:e.state.text1})})),i.a.createElement("div",{className:"meme-button",onClick:function(){e.setState({memeLimit:e.state.memeLimit+10})}},"Load 10 more memes..."))}}]),n}(a.Component);var ie=Object(K.b)((function(e){return e}),null)(ae),re=n(17),le=n(66);var oe=Object(re.c)({memes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_MEMES":return t.memes;default:return e}},myMemes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_MEME":return e=[].concat(Object(le.a)(e),[t.meme]);default:return e}}}),ce=n(63),me=Object(re.d)(oe,Object(re.a)(ce.a));me.subscribe((function(){return console.log("store",me.getState())})),me.dispatch((function(e){return fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){return e(function(e){return{type:"RECEIVE_MEMES",memes:e.data.memes}}(t))}))}));var ue=function(){return i.a.createElement("div",null,i.a.createElement(K.a,{store:me},i.a.createElement(ie,null)))};l.a.render(i.a.createElement("div",null,i.a.createElement(o.a,{history:s()()},i.a.createElement(c.a,null,i.a.createElement(m.a,{exact:!0,path:"/",render:function(){return i.a.createElement(q,null,i.a.createElement(F,null))}}),i.a.createElement(m.a,{path:"/generator",render:function(){return i.a.createElement(q,null,i.a.createElement(ue,null))}}),i.a.createElement(m.a,{path:"*",render:function(){return i.a.createElement(q,null,i.a.createElement(F,null))}})))),document.getElementById("root"))},49:function(e,t,n){e.exports=n.p+"static/media/email_icon.fd99f8e3.png"},50:function(e,t,n){e.exports=n.p+"static/media/github_icon.e2a62886.png"},51:function(e,t,n){e.exports=n.p+"static/media/linkedin_icon.56ab00e8.png"},52:function(e,t,n){e.exports=n.p+"static/media/profile.c7a8266e.JPG"},53:function(e,t,n){e.exports=n.p+"static/media/pokeman.bfcd2dd1.png"},54:function(e,t,n){e.exports=n.p+"static/media/mangotreesupermarket.58c7cbb9.png"},55:function(e,t,n){e.exports=n.p+"static/media/thebridgesconnection.a46b32a1.png"},56:function(e,t,n){e.exports=n.p+"static/media/atomicantmodels.900596d7.png"},57:function(e,t,n){e.exports=n.p+"static/media/twitterism.63b8b407.png"},58:function(e,t,n){e.exports=n.p+"static/media/fontanaplaza.5524dc1a.png"},68:function(e,t,n){e.exports=n(115)},73:function(e,t,n){},74:function(e,t,n){},80:function(e,t,n){}},[[68,1,2]]]);
//# sourceMappingURL=main.861d7e2b.chunk.js.map