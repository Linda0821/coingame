!function(e){function t(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="./",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1);n.n(i),n(2)},function(e,t){},function(e,t,n){"use strict";function i(e,t,n,i,c,o,s,r){if(2*o>i||2*o>c)return!1;e.save(),e.translate(t,n),a(e,i,c,o),e.fillStyle=r||"#000",e.fill(),e.restore(),e.fillStyle="#e7cea8",g.font="16px Verdana",e.fillText(s,t+10,n+32,i)}function a(e,t,n,i){e.beginPath(0),e.arc(t-i,n-i,i,0,Math.PI/2),e.lineTo(i,n),e.arc(i,n-i,i,Math.PI/2,Math.PI),e.lineTo(0,i),e.arc(i,i,i,Math.PI,3*Math.PI/2),e.lineTo(t-i,0),e.arc(t-i,i,i,3*Math.PI/2,2*Math.PI),e.lineTo(t,n-i),e.closePath()}function c(e){w.init();popup.open({width:11.22222,height:"10.11111",title:"",content:'<div class="notice">快来领取专属于你的辛苦指数吧30秒内，作为劳动人民的你想做什么就接住这项任务</div><div class="notice2">参与即可获得一枚光荣勋章</div><button class="startbtn"></button>'}),document.getElementById("popMask").removeEventListener("click",popup.closeDiv,!1),$(".popUp_c").css({"background-color":"#be2a2a","boeder-radius":".8rem"}),$(".popUp_c h2").css({height:"1.6rem"}),$(".popUp_close ").hide(),$(".popUp_btn ").hide(),$(".notice").css({"text-align":"center","font-size":".58889rem",color:"#e7cea8",padding:"0 .84444rem 0.88889rem","line-height":"1rem"}),$(".notice2").css({"text-align":"center","font-size":".58889rem",color:"#e7cea8",padding:"0.33333rem .84444rem 0.22222rem","line-height":"1rem"}),$(".startbtn").click(function(){deletePop(),$("#f").show(),$("#r").show(),w.start(e)})}function o(e){var t="";t=e<=20?"总觉得自己的性格不适合上班，只适合领工资":e>=21&&e<=40?"成长就是你哪怕难过的快挂了还依然向前":e>=41&&e<=60?"成功要学，健康要学，创业要学，你的努力注定了你的不平凡！":e>=61&&e<=80?"有理想在的地方，<br>地狱就是天堂":"人生累，不拼不博人生白活，不苦不累人生无味";var n=1==w.isFirstPlay?"已":"",i='<button class="glory-big"></button><div class="notice3">'+n+'获得一枚光荣勋章<br>今年五一的辛苦指数：<span style="color:rgba(255,234,90,1)">'+e+'%</span></div><div class="notice">'+t+'</div><button class="sharebtn"></button><button class="endbtn"></button><div class="clear:both;"></div><div class="notice2">.分享图片到朋友圈并发给微微可快速提现</div>';popup.open({width:11.44444,height:"12.66666",title:"",content:i}),document.getElementById("popMask").removeEventListener("click",popup.closeDiv,!1),$(".popUp_c").css({"background-color":"#be2a2a","boeder-radius":".8rem"}),$(".popUp_c h2").css({height:".6rem"}),$(".popUp_close ").hide(),$(".popUp_btn ").hide(),$(".notice").css({"text-align":"center","font-size":".58889rem",color:"#e7cea8",padding:"0 .84444rem 0.88889rem","line-height":"1rem"}),$(".notice2").css({"text-align":"center","font-size":".48888rem",color:"#e7cea8",padding:"2rem .22222rem 0.22222rem","line-height":"1rem"}),$(".notice3").css({"text-align":"center","font-size":".58889rem",color:"#e7cea8",padding:".22222rem .22222rem 0.22222rem","line-height":"1rem"}),$(".sharebtn").click(function(){deletePop(),_czc.push(["_trackEvent","收徒活动","click","朋友圈邀请","",""]),window.App.shareToWeChatFriends(window.location.href,0)}),$(".endbtn").click(function(){deletePop(),w.isFirstPlay=!0,w.start(!1)})}function s(e,t){$.ajax({type:"GET",url:"http://browser.umeweb.com/cn_ume_api/wy/api/check/"+e,dataType:"json",cache:!1,xhrFields:{withCredentials:!0},success:function(e){debug_print("sucess:"+JSON.stringify(e));var n=!1;0==e.Code&&(debug_print(e.User.lastplaytime),n=isTodayToDot(e.User.lastplaytime)),t(n)},error:function(e,n){debug_print(n),t(!1)}})}function r(e){h("http://browser.umeweb.com/cn_ume_api/wy/api/reward/"+e,{uid:e}).catch(function(e){debug_print("error: "+JSON.stringify(e))}).then(function(e){debug_print("postMoonVote value: "+JSON.stringify(e))})}function h(e,t){return new Promise(function(n,i){var a=new XMLHttpRequest;a.open("POST",e,!0),a.setRequestHeader("Content-type","application/json;charset=utf-8"),a.onreadystatechange=function(){if(4===this.readyState)if(200===this.status)n(JSON.parse(this.responseText),this);else{var e={code:this.status,response:this.response};i(e,this)}},a.withCredentials=!0,a.send(JSON.stringify(t))})}var p,u=n(3),l=n.n(u),d=n(4),m=n.n(d),v=$("#canvas"),f=document.getElementById("canvas"),g=f.getContext("2d"),w={B:.56,isFirstPlay:!1,tu:new Array,cuyu:new Array,img:{bg:new Image},canvas:{canvasW:window.innerWidth,canvasH:window.innerHeight},people:new Object,time:{beginTime:new Date,gameTime:30,remainTime:0},count:{playNum:0,canPlayNum:3,continuePlayNum:0},coin:{gk:1,h:20,sudu:10,zl:100,chi:0,shi:0,fs:0,rc:0,sc:0,fc:0,sm:1,range:300},init:function(e){this.img.bg.src=l.a,this.canvas.canvasW=this.canvas.canvasW>420?420:this.canvas.canvasW,this.canvas.canvasH=this.canvas.canvasW/360*567,this.canvas.canvasH=this.canvas.canvasH<window.innerHeight?window.innerHeight:this.canvas.canvasH,v.css("margin-top",(window.innerHeight-this.canvas.canvasH)/2),v.css("margin-left",(window.innerWidth-this.canvas.canvasW)/2),v.attr("width",this.canvas.canvasW),v.attr("height",this.canvas.canvasH),this.people.img=new Image,this.people.img.src=m.a,this.people.width=111.6,this.people.height=114,this.people.x=0,this.people.y=this.canvas.canvasH-this.people.height,this.coin.range=this.canvas.canvasW-55,this.cuyu=["爱国","知识","工作","睡觉","迟到","游戏"],console.info(this.people.y),console.info(this.canvas.canvasH)},reset:function(){this.time.remainTime=this.time.gameTime,this.time.beginTime=new Date,this.coin.fs=0,this.coin.fc=0,this.coin.sc=0,this.coin.rc=0},start:function(e){var t=this;t.init(),0==e?t.reset():t.isFirstPlay=!0,p=setInterval(function(){g.clearRect(0,0,t.canvas.canvasW,t.canvas.canvasH),g.drawImage(t.img.bg,0,0,t.canvas.canvasW,t.canvas.canvasH),g.drawImage(t.people.img,t.people.x,t.people.y,t.people.width,t.people.height),t.draw(),document.getElementById("f").innerHTML="你的辛苦指数："+t.coin.fs+"%",t.checkTime()},100),t.addListener(f,"touchmove",t.move)},draw:function(){function e(){this.x=0,this.y=0,this.l=11,this.image=new Image}var t=this;!function(){t.time.remainTime>10?(t.coin.sudu=20,t.coin.h=20):t.time.remainTime>5?(t.coin.sudu=30,t.coin.h=20):(t.coin.sudu=50,t.coin.h=20)}(),function(){if(t.coin.shi%t.coin.h==0){for(var n=2*t.coin.chi;n<2*(t.coin.chi+1);n++){t.tu[n]=new e;var i=Math.round(Math.random()*t.coin.range);if(n==2*t.coin.chi+1)for(;Math.abs(i-t.tu[2*t.coin.chi].x)<55;)i=Math.round(Math.random()*t.coin.range);var a=Math.round(Math.random()*t.coin.zl);t.tu[n].q=a<70?1:2,t.tu[n].x=i,t.tu[n].y=-Math.round(300*Math.random())}++t.coin.chi==t.coin.h&&(t.coin.chi=0)}t.coin.shi++}();for(var n=0,a=3,c=0;c<t.tu.length;c++)t.jianche(t.people,t.tu[c])?(1===t.tu[c].q?(t.coin.fs+=5,t.coin.fc+=1):(t.coin.fs-=3,t.coin.rc+=1),t.tu[c].y+=200):t.jianche(t.people,t.tu[c])||(t.tu[c].y+=t.coin.sudu),1===t.tu[c].q?(i(g,t.tu[c].x,t.tu[c].y,50,55,10,t.cuyu[n],"#be2a2a"),3===++n&&(n=0)):(i(g,t.tu[c].x,t.tu[c].y,50,55,10,t.cuyu[a],"#407c30"),6===++a&&(a=3))},jianche:function(e,t){var n=e.x-t.x,i=e.y-t.y;return n<t.image.width&&n>-e.width&&i<t.image.height&&i>-e.height},checkTime:function(){var e=new Date;if(this.time.remainTime=this.time.gameTime-parseInt((e.getTime()-this.time.beginTime.getTime())/1e3),document.getElementById("r").innerHTML=this.time.remainTime+"s",this.time.remainTime<=0){this.stop()}},addListener:function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)},move:function(){!function(e){e&&e.stopPropagation?e.stopPropagation():window.event.cancelBubble=!0}(event),function(e){e&&e.preventDefault?e.preventDefault():window.event.returnValue=!1}(event);var e=event.touches?event.touches[0]:event;e.pageY>=w.people.y&&e.pageY<=w.canvas.canvasH&&(w.people.x=e.pageX-w.people.width/2,w.people.x+w.people.width>=w.canvas.canvasW?w.people.x=w.canvas.canvasW-w.people.width:w.people.x<=w.people.width/2&&(w.people.x=0))},stop:function(){clearInterval(p);var e=this;setTimeout(function(){0==e.isFirstPlay&&r(b),o(e.coin.fs),e.reset()},300)}},b="";try{b=window.App.getObjectId()}catch(e){debug_print("201:\r\n"+e),b="d9fb4fbaa4b9ce1852ef8a2c"}window.onload=function(){s(b,function(e){c(e)})}},function(e,t,n){e.exports=n.p+"img/91cbaf97.bj.png"},function(e,t,n){e.exports=n.p+"img/f18214a0.ren.png"}]);