import{_ as t}from"./preload-helper-101896b7.js";import p from"./LinkNavigation-19412d69.js";import{_ as c,r as u,o as E,C as P,Q as v,S as m,ad as D,ae as I,af as L}from"./framework-d7e1aa10.js";import"./Collapse-3b4793ab.js";const R=(i,a)=>{const o=i[a];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((s,_)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(_.bind(null,new Error("Unknown variable dynamic import: "+a)))})};const j={__name:"NavBoard",props:{filePath:String,fileName:String},setup(i){const a=i,o=u([]);u(-1);var s=null,_=null;E(async()=>{let{filePath:n,fileName:r}=a;const d=(await l(n,r)).default;o.value=d,_=document.querySelector(".theme-hope-content"),_.style.overflow="visible",s=document.querySelector("#toc"),document.documentElement.style.setProperty("--content-right",_.getBoundingClientRect().right+"px"),document.documentElement.style.setProperty("--content-top",_.getBoundingClientRect().top+"px")}),P(()=>{s.style.display=""});async function l(n,r){try{const e=await R(Object.assign({"../../data/nav/工具箱/AI工具.json":()=>t(()=>import("./AI工具-769f0091.js"),[]),"../../data/nav/工具箱/PPT.json":()=>t(()=>import("./PPT-736a8bc9.js"),[]),"../../data/nav/工具箱/PSD.json":()=>t(()=>import("./PSD-d0b08353.js"),[]),"../../data/nav/工具箱/前端工具.json":()=>t(()=>import("./前端工具-9992569b.js"),[]),"../../data/nav/工具箱/后端工具.json":()=>t(()=>import("./后端工具-4f39c53c.js"),[]),"../../data/nav/工具箱/图片资源.json":()=>t(()=>import("./图片资源-6166a97e.js"),[]),"../../data/nav/工具箱/在线工具.json":()=>t(()=>import("./在线工具-6926b78d.js"),[]),"../../data/nav/工具箱/字体资源.json":()=>t(()=>import("./字体资源-e9af1bb1.js"),[]),"../../data/nav/工具箱/开发工具.json":()=>t(()=>import("./开发工具-4570ef0e.js"),[]),"../../data/nav/工具箱/版本库.json":()=>t(()=>import("./版本库-458ab9b0.js"),[]),"../../data/nav/工具箱/视频资源.json":()=>t(()=>import("./视频资源-31c9557c.js"),[]),"../../data/nav/工具箱/论坛.json":()=>t(()=>import("./论坛-61c96529.js"),[]),"../../data/nav/工具箱/配色方案.json":()=>t(()=>import("./配色方案-6ca11045.js"),[]),"../../data/nav/工具箱/音频资源.json":()=>t(()=>import("./音频资源-e4e9b278.js"),[]),"../../data/nav/常用/CSS.json":()=>t(()=>import("./CSS-31200bc8.js"),[]),"../../data/nav/常用/在线编辑器.json":()=>t(()=>import("./在线编辑器-3c007be3.js"),[]),"../../data/nav/常用/正则表达式工具.json":()=>t(()=>import("./正则表达式工具-630662b6.js"),[]),"../../data/nav/常用/素材库.json":()=>t(()=>import("./素材库-9840bb98.js"),[]),"../../data/nav/搜索导航/导航.json":()=>t(()=>import("./导航-f0be819b.js"),[]),"../../data/nav/搜索导航/搜索.json":()=>t(()=>import("./搜索-71861172.js"),[]),"../../data/nav/搜索导航/文档转换.json":()=>t(()=>import("./文档转换-44faa2e6.js"),[]),"../../data/nav/搜索导航/环境配置.json":()=>t(()=>import("./环境配置-867aa2a2.js"),[]),"../../data/nav/搜索导航/镜像站.json":()=>t(()=>import("./镜像站-82095ae9.js"),[]),"../../data/nav/算法/刷题平台.json":()=>t(()=>import("./刷题平台-08e0ba48.js"),[])}),`../../data/nav/${n}/${r}.json`);return console.log(e),e}catch{return console.log("找不到资源"),{}}}return(n,r)=>(v(),m("div",null,[(v(!0),m(D,null,I(o.value,(e,d)=>(v(),L(p,{key:d,id:e.typeName,typeName:e.typeName,list:e.list},null,8,["id","typeName","list"]))),128))]))}},V=c(j,[["__scopeId","data-v-ae4b78c8"],["__file","NavBoard.vue"]]);export{V as default};