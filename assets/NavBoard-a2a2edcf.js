import{_ as t}from"./app-f746a503.js";import c from"./LinkNavigation-9b8f3779.js";import{_ as m,r as d,o as v,Q as s,S as u,a9 as p,aa as f,ab as E}from"./framework-ec2af7a3.js";import"./Collapse-147eeb1a.js";const P=(_,o)=>{const a=_[o];return a?typeof a=="function"?a():Promise.resolve(a):new Promise((l,e)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+o)))})},y={__name:"NavBoard",props:{filePath:String,fileName:String},setup(_){const o=_,a=d([]);v(async()=>{let{filePath:e,fileName:n}=o;const i=(await l(e,n)).default;a.value=i,console.log(i)});async function l(e,n){try{return await P(Object.assign({"../../data/nav/导航/导航网站.json":()=>t(()=>import("./导航网站-7ceb7e8c.js"),[]),"../../data/nav/导航/文档转换.json":()=>t(()=>import("./文档转换-44faa2e6.js"),[]),"../../data/nav/导航/环境配置.json":()=>t(()=>import("./环境配置-867aa2a2.js"),[]),"../../data/nav/导航/镜像站.json":()=>t(()=>import("./镜像站-82095ae9.js"),[]),"../../data/nav/常用/CSS.json":()=>t(()=>import("./CSS-0d5e3d95.js"),[]),"../../data/nav/常用/在线编辑器.json":()=>t(()=>import("./在线编辑器-3c007be3.js"),[]),"../../data/nav/常用/正则表达式工具.json":()=>t(()=>import("./正则表达式工具-630662b6.js"),[]),"../../data/nav/常用/素材库.json":()=>t(()=>import("./素材库-9840bb98.js"),[])}),`../../data/nav/${e}/${n}.json`)}catch{return console.log("找不到资源"),{}}}return(e,n)=>(s(),u("div",null,[(s(!0),u(p,null,f(a.value,(r,i)=>(s(),E(c,{key:i,typeName:r.typeName,list:r.list},null,8,["typeName","list"]))),128))]))}},N=m(y,[["__file","NavBoard.vue"]]);export{N as default};