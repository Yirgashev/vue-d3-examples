(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0db36954"],{"15bc":function(t,e,n){"use strict";n("c6d1")},"49e9":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("TreeIII")]),n("div",[t._v("tree editor with node create, delete, and rename")]),n("div",{staticClass:"container container-border"},[n("div",{staticClass:"width-300"},[t._v(" Current Node "),n("br"),n("br"),t._v(" Id: "+t._s(t.currentNode.id)+" "),n("br"),n("br"),t._v(" Name: "+t._s(t.currentNode.data.name)+" ")]),n("div",{staticClass:"width-300"},[t._v(" New Node "),n("br"),n("br"),t._v("Name: "),n("v-text-field",{attrs:{label:"New node name"},model:{value:t.newNode.name,callback:function(e){t.$set(t.newNode,"name",e)},expression:"newNode.name"}})],1),n("div",{staticClass:"width-300"},[n("v-btn",{attrs:{small:"",color:"primary"},on:{click:t.addNode}},[t._v("Add Node")]),n("br"),n("br"),n("v-btn",{attrs:{small:"",color:"success"},on:{click:t.addSomeNodes}},[t._v("Add Some Nodes")]),n("br"),n("br"),n("v-btn",{attrs:{small:"",color:"secondary"},on:{click:t.renameNode}},[t._v("Rename Node")]),n("br"),n("br"),n("v-btn",{attrs:{small:"",color:"error"},on:{click:t.deleteNode}},[t._v("Delete Node")])],1)]),n("svg",{staticClass:"container-border",attrs:{id:"vizTreeIII"}})])},i=[],a=(n("ac6a"),n("7f7f"),n("5698")),o={data:function(){return{root:null,svg:null,duration:null,treeData:{name:"Top Level"},i:null,treemap:null,currentNode:{id:null,data:{name:""}},newNode:{id:0,name:""},nodeObj:null}},mounted:function(){var t={top:-200,right:90,bottom:30,left:90},e=960-t.left-t.right,n=500-t.top-t.bottom;this.svg=a["D"]("#vizTreeIII").attr("viewBox",[-10,-10,e,n]).append("g").attr("transform","translate("+t.left+","+t.top+")"),this.nodeObj=a["n"].prototype.constructor,this.i=0,this.duration=750,this.treemap=a["H"]().size([n,e]),this.root=a["n"](this.treeData,(function(t){return t.children})),this.root.x0=n/2,this.root.y0=0;var r=a["I"]().on("zoom",i).scaleExtent([.5,8]);function i(){}this.svg.call(r).on("dblclick.zoom",null),r(this.svg),this.update(this.root)},methods:{addSomeNodes:function(){console.log("add some nodes");var t={name:"addFibonacciHeap3",id:1767,children:[{name:"add333FibonacciHeap",id:1,children:[{name:"335fff",id:4,children:[{name:"666",id:6},{name:"777",id:7,children:[{name:"9",id:9},{name:"10",id:10},{name:"1111",id:11}]},{name:"888",id:8,children:[{name:"12",id:"12"}]}]},{name:"vxfff",id:5}]},{name:"add22FibonacciHeap2",id:2},{name:"add1FibonacciHeap3",id:3}]},e=[];function n(t){if(e.push({id:t.id,name:t.name}),t.children&&t.children.length>0)for(var r=t.children.length,i=0;i<r;i++)n(t.children[i])}n(t);var r=this;function i(t,e){var n=a["n"].prototype.constructor,o=Object.assign(new n,{parent:e,depth:e.depth+1});if(o.id=t.id,o.data={name:t.name},e.children?e.children.push(o):e.children=[o],r.nodes.push(o),r.links.push({source:e,target:o}),r.update(e),t.children&&t.children.length>0)for(var c=t.children.length,d=0;d<c;d++)i(t.children[d],o)}i(t,this.currentNode)},addNode:function(){var t=100,e=999,n=parseInt(Math.random()*(e-t+1)+t,10),r=this.currentNode,i=Object.assign(new this.nodeObj,{parent:r,depth:r.depth+1});i.id=n,i.data={name:this.newNode.name},r.children?r.children.push(i):r.children=[i],this.nodes.push(i),this.links.push({source:r,target:i}),this.update(r)},renameNode:function(){this.currentNode.data.name=this.newNode.name;var t=this.currentNode.parent;this.update(t)},deleteNode:function(){var t=this,e=this;this.currentNode.parent&&this.currentNode.parent.children.length>0?this.currentNode.parent.children.filter((function(n,r){n.id&&n.id===e.currentNode.id&&(e.currentNode.parent.children.splice(r,1),0===t.currentNode.parent.children.length&&delete t.currentNode.parent.children,t.update(t.currentNode))})):console.log("node is empty")},update:function(t){var e=this,n=this.treemap(this.root);this.nodes=n.descendants(),this.links=n.descendants().slice(1),this.nodes.forEach((function(t){t.y=180*t.depth}));var r=this.svg.selectAll("g.node").data(e.nodes,(function(t){return t.id||(t.id=++e.i)})),i=r.enter().append("g").attr("class","node").attr("transform",(function(){return"translate("+t.y0+","+t.x0+")"})).on("click",e.click);i.append("circle").attr("class","node").attr("r",1e-6).style("fill",(function(t){return t._children?"lightsteelblue":"#fff"})),i.append("text").attr("dy",".35em").attr("x",(function(t){return t.children||t._children?-13:13})).attr("text-anchor",(function(t){return t.children||t._children?"end":"start"})).text((function(t){return t.data.name}));var a=i.merge(r);r.select("text").attr("dy",".35em").attr("x",(function(t){return t.children||t._children?-13:13})).attr("text-anchor",(function(t){return t.children||t._children?"end":"start"})).text((function(t){return t.data.name})),a.transition().duration(e.duration).attr("transform",(function(t){return"translate("+t.y+","+t.x+")"})),a.select("circle.node").attr("r",10).style("fill",(function(t){return t._children?"lightsteelblue":"#fff"})).attr("cursor","pointer");var o=r.exit().transition().duration(e.duration).attr("transform",(function(){return"translate("+t.y+","+t.x+")"})).remove();o.select("circle").attr("r",1e-6),o.select("text").style("fill-opacity",1e-6);var c=this.svg.selectAll("path.link").data(e.links,(function(t){return t.id})),d=c.enter().insert("path","g").attr("class","link").attr("d",(function(){var e={x:t.x0,y:t.y0};return l(e,e)})),s=d.merge(c);function l(t,e){var n="M ".concat(t.y," ").concat(t.x,"\n            C ").concat((t.y+e.y)/2," ").concat(t.x,",\n              ").concat((t.y+e.y)/2," ").concat(e.x,",\n              ").concat(e.y," ").concat(e.x);return n}s.transition().duration(e.duration).attr("d",(function(t){return l(t,t.parent)})),c.exit().transition().duration(e.duration).attr("d",(function(){var e={x:t.x,y:t.y};return l(e,e)})).remove(),this.nodes.forEach((function(t){t.x0=t.x,t.y0=t.y}))},click:function(t){this.currentNode=t,t.children?(t._children=t.children,t.children=null):(t.children=t._children,t._children=null),this.update(t)}}},c=o,d=(n("15bc"),n("e1e5"),n("2877")),s=Object(d["a"])(c,r,i,!1,null,"1b727e9b",null);e["default"]=s.exports},"7f7f":function(t,e,n){var r=n("86cc").f,i=Function.prototype,a=/^\s*function ([^ (]*)/,o="name";o in i||n("9e1e")&&r(i,o,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},ac6a:function(t,e,n){for(var r=n("cadf"),i=n("0d58"),a=n("2aba"),o=n("7726"),c=n("32e9"),d=n("84f2"),s=n("2b4c"),l=s("iterator"),u=s("toStringTag"),h=d.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=i(f),p=0;p<m.length;p++){var v,b=m[p],N=f[b],g=o[b],y=g&&g.prototype;if(y&&(y[l]||c(y,l,h),y[u]||c(y,u,b),d[b]=h,N))for(v in r)y[v]||a(y,v,r[v],!0)}},c6d1:function(t,e,n){},e1e5:function(t,e,n){"use strict";n("f77e")},f77e:function(t,e,n){}}]);
//# sourceMappingURL=chunk-0db36954.872db150.js.map