webpackJsonp([1],{IQTM:function(e,n){},zSHs:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t={name:"Directive",data:function(){return{count:0,myBgColor:"red"}},methods:{handleClick:function(){this.count++},skin:function(){for(var e=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],n="#",o=0;o<6;o++)n+=e[Math.floor(16*Math.random())];this.myBgColor=n}},directives:{change:{bind:function(e,n){console.log("指令已经绑定到元素了"),console.log(e),console.log(n),console.log(n.rawName,"v-指令名称"),console.log(n.name,"指令名称"),console.log(n.def.bind),console.log(n.def.update),console.log(n.def.unbind),e.innerHTML=0},update:function(e,n){console.log("指令的数据有所变化"),console.log(e),e.innerHTML=Number(e.innerHTML)+1},unbind:function(){console.log("解除绑定了")}},backgroundColor:{bind:function(e,n){console.log(n),e.style.backgroundColor=n.value},update:function(e,n){console.log(n),e.style.backgroundColor=n.value}}}},l={render:function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",[e.count<5?o("div",[o("el-button",{attrs:{size:"small"},on:{click:e.handleClick}},[e._v("\n            点击\n        ")]),e._v(" "),o("span",{directives:[{name:"change",rawName:"v-change"}]},[e._v("\n            自定义指令\n        ")])],1):o("div",[o("h3",{directives:[{name:"background-color",rawName:"v-background-color",value:e.myBgColor,expression:"myBgColor"}]},[e._v("\n            it is a header1\n        ")]),e._v(" "),o("el-button",{attrs:{size:"small"},on:{click:e.skin}},[e._v("\n            换肤\n        ")])],1)])},staticRenderFns:[]},r=o("C7Lr")(t,l,!1,null,null,null).exports,s=o("xd7I");s.default.directive("drag",function(e){e.onmousedown=function(n){(n=n||window.event)&&n.preventDefault?n.preventDefault():window.event.returnValue=!1;var o=n.clientX-e.offsetLeft,t=n.clientY-e.offsetTop;document.onmousemove=function(n){var l=n.clientX-o,r=n.clientY-t;e.style.left=l+"px",e.style.top=r+"px"},document.onmouseup=function(e){document.onmousemove=null,document.onmouseup=null}}}),s.default.directive("world",{bind:function(e,n){console.log(e),e.style.color="red",console.log(n),e.innerHTML=n.value}}),s.default.directive("wbs",function(e,n){console.log(e),console.log(n),e.innerHTML=n.value});var i={data:function(){return{msg:"welcome to beijing",firstName:"张三",lastName:"李四"}},computed:{msg2:function(){return"欢迎来到北京"},reverseMsg:function(){return this.msg.split(" ").reverse().join(" ")},fullName:{get:function(){return this.firstName+" love "+this.lastName},set:function(e){var n=e.split(" ").reverse();this.firstName=n[0],this.lastName=n[n.length-1]}}},methods:{changeMsg:function(){this.msg="I am from ganzhou"}},directives:{changeBackground:{bind:function(e,n){e.style.background="pink",e.style.height=n.value}}},beforeCreate:function(){console.log("组件实例刚刚创建")},created:function(){console.log("实例已经创建完成")},beforeMount:function(){console.log("模板编译之前")},mounted:function(){console.log("模板编译之后"),this.fullName="张三 love 李四"},beforeUpdate:function(){console.log("组件更新之前")},updated:function(){console.log("组件更新之后")},beforeDestroy:function(){console.log("组件销毁之前")},destroyed:function(){console.log("组件销毁之后")}},c={render:function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",[o("main",{directives:[{name:"world",rawName:"v-world",value:"directive",expression:"`directive`"}]}),e._v(" "),o("br"),e._v(" "),o("article",{directives:[{name:"wbs",rawName:"v-wbs",value:"江西.赣州",expression:"`江西.赣州`"}]}),e._v(" "),o("br"),e._v(" "),o("section",{directives:[{name:"changeBackground",rawName:"v-changeBackground",value:"20px",expression:"`20px`"}]}),e._v(" "),o("br"),e._v(" "),o("aside",{directives:[{name:"drag",rawName:"v-drag"}],staticClass:"aside"}),e._v(" "),o("br"),e._v(" "),o("p",[o("span",[e._v("普通属性："+e._s(e.msg))]),e._v(" "),o("br"),e._v(" "),o("span",[e._v("计算属性："+e._s(e.msg2))]),e._v(" "),o("br"),e._v(" "),o("span",[e._v("计算属性："+e._s(e.reverseMsg))]),e._v(" "),o("br"),e._v(" "),o("el-button",{attrs:{size:"small"},on:{click:e.changeMsg}},[e._v("changeMsg")]),e._v(" "),o("br"),e._v("\n        计算属性："),o("mark",[e._v(e._s(e.fullName))])],1)])},staticRenderFns:[]};var a={name:"News",data:function(){return{title:"",content:""}},mounted:function(){this.title=this.$route.query.title,this.content=this.$route.query.content},components:{Directive:r,"v-VueBase":o("C7Lr")(i,c,!1,function(e){o("IQTM")},null,null).exports}},u={render:function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",[e._v("\n    新闻\n    "),o("p",[e._v("\n        标题："+e._s(e.title)+"\n        "),o("br"),e._v("\n        内容："+e._s(e.content)+"\n\n        "),e._v(" "),o("Directive")],1),e._v(" "),o("hr"),e._v(" "),o("v-VueBase")],1)},staticRenderFns:[]},v=o("C7Lr")(a,u,!1,null,null,null);n.default=v.exports}});
//# sourceMappingURL=1.864c578c08a0d6848ab4.js.map