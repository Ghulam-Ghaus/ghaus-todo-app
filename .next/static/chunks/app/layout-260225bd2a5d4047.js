(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1337:function(e,t,l){Promise.resolve().then(l.bind(l,5828))},5828:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return p}});var a=l(1844),s=l(1942),n=l(5784),r=l(9332);let i=[{name:"Home",link:"/",photo:"/pros.jpg",title:'What"s Up Ghulam Ghaus'},{name:"About",link:"/about",photo:"/pros.jpg",title:"About! Me"}];var c=l(9583);let o=()=>{let[e,t]=(0,n.useState)(()=>"undefined"!=typeof localStorage&&localStorage.getItem("theme")?localStorage.getItem("theme"):window.matchMedia("prefers-color-scheme: dark").matches?"dark":"light"),l=()=>{let l="light"===e?"dark":"light";localStorage.setItem(e,l),t(l)};return(0,n.useEffect)(()=>{let t=document.documentElement;"light"===e?t.classList.remove("dark"):t.classList.add("dark")},[e]),(0,a.jsx)("button",{onClick:l,type:"button",title:"Theme Toggle",className:"grid place-items-center w-10 h-10 rounded-full bg-gray-600",children:"light"===e?(0,a.jsx)(c.Mei,{className:"text-yellow-400"}):(0,a.jsx)(c.TLr,{className:"text-yellow-400"})})},u=e=>{let{isActiveNav:t,onButtonClick:l}=e;return(0,a.jsxs)("header",{className:"flex h-10 justify-between items-center",children:[(0,a.jsx)("button",{type:"button",title:"Menu",onClick:l,className:"text-3xl",children:t?(0,a.jsx)(c.aHS,{}):(0,a.jsx)(c.Fm7,{})}),(0,a.jsx)(o,{})]})};var d=l(5675),h=l.n(d),m=l(1664),f=l.n(m);let x=e=>{let{href:t,children:l}=e,s=(0,r.useSelectedLayoutSegment)();return(0,a.jsx)(f(),{href:t,className:j({active:t==="/".concat(s||"")}),children:l})},j=(0,s.j)(["w-44 max-w-full my-2 p-2 rounded text-center text-lg font-medium transition-colors item-center"],{variants:{active:{true:"bg-[#0b9219] text-white"}},defaultVariants:{active:!1}}),v=e=>{let{nav:t}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)(h(),{src:"/pro.jpg",alt:"Ghaus",width:160,height:160,className:"mt-[12vh] mb-8 mx-auto rounded-full border-4 dark:border-gray-400"}),(0,a.jsx)("h1",{className:"text-3xl text-center font-bold",children:" Hi! Ghulam Ghaus"}),(0,a.jsx)("nav",{className:"flex flex-col items-center mt-6",children:t.map((e,t)=>(0,a.jsx)(x,{href:e.link,children:e.name},t))})]})},g=e=>{let{title:t,src:l}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"relative w-full h-32",children:(0,a.jsx)(h(),{src:l,title:t,fill:!0,priority:!0,className:"object-container",alt:"Banner"})}),(0,a.jsx)("h2",{className:"my-4 text-3xl text-center font-bold",children:t})]})},b=e=>{let{children:t}=e,l=(0,r.usePathname)(),[s,c]=(0,n.useState)(!1),o=()=>{c(e=>!e)},d=(0,n.useMemo)(()=>i.find(e=>e.link===l||null),[l]);return(0,n.useEffect)(()=>{o()},[l]),(0,a.jsxs)("main",{className:"relative min-h-screen overflow-x-hidden flex w-full",children:[(0,a.jsx)("div",{className:N({active:s}),children:(0,a.jsx)(v,{nav:i})}),(0,a.jsxs)("div",{className:k({active:s}),children:[(0,a.jsx)(u,{isActiveNav:s,onButtonClick:o}),d&&(0,a.jsx)(g,{title:d.title,src:d.photo}),(0,a.jsx)("div",{className:"relative flex-1",children:t})]})]})};var p=b;let N=(0,s.j)(["bg-[#ccc] dark:bg-[#111] absolute top-0 w-3/4 h-full transition-all duration-300"],{variants:{active:{true:["left-0"],false:["-left-3/4"]}},defaultVariants:{active:!1}}),k=(0,s.j)(["absolute top-0 flex flex-col w-full h-screen p-4 transition-all duration-300"],{variants:{active:{true:["left-3/4"],false:["left-0"]}},defaultVariants:{active:!1}})},2431:function(){}},function(e){e.O(0,[445,877,17,744],function(){return e(e.s=1337)}),_N_E=e.O()}]);