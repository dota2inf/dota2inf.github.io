import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{L as a,m as i,y as r}from"./index-CObfn6Bf.js";import"./index-D4lIrffr.js";import"./clsx-B-dksMZM.js";const u={title:"Components/Toast",component:a},o=()=>t.jsxs("div",{children:[t.jsx(a,{position:"top-center",autoClose:4e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!1,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light",transition:i}),t.jsx("button",{onClick:()=>{r("Simple toast")},children:"toast"}),t.jsx("br",{}),t.jsx("button",{title:"toast warn",onClick:()=>{r.warn("Toast warn")},children:"toast warn"}),t.jsx("br",{}),t.jsx("button",{onClick:()=>{r.error("Toast error")},children:"toast Error"})]});o.__docgenInfo={description:"",methods:[],displayName:"Primary"};var s,e,n;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => <div>\r
    <ToastContainer position="top-center" autoClose={4000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" transition={Slide} />\r
    <button onClick={() => {
    toast("Simple toast");
  }}>toast</button>\r
    <br />\r
    <button title="toast warn" onClick={() => {
    toast.warn("Toast warn");
  }}>toast warn</button>\r
    <br />\r
    <button onClick={() => {
    toast.error("Toast error");
  }}>toast Error</button>\r
  </div>`,...(n=(e=o.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const d=["Primary"];export{o as Primary,d as __namedExportsOrder,u as default};
