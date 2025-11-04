import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-D4lIrffr.js";import{c as v}from"./clsx-B-dksMZM.js";import{S as w}from"./SVG_Help-Bk3cT9ec.js";const c=({button:o,style:f,content:y,className:x=""})=>{const[g,d]=r.useState(!1),s=r.useRef(null),i=r.useRef(null),b=()=>d(t=>!t),l=()=>d(!1);return r.useEffect(()=>{const t=a=>{s.current&&!s.current.contains(a.target)&&i.current&&!i.current.contains(a.target)&&l()};return document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),()=>{document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}},[]),e.jsxs("div",{className:v("component_Dropdown_wrapper","no_select",x),style:f,children:[e.jsx("div",{ref:i,onClick:b,className:"component_Dropdown_button",children:o}),g&&e.jsx("div",{ref:s,className:"component_Dropdown_content",children:y(l)})]})};c.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{style:{required:!1,tsType:{name:"any"},description:""},button:{required:!0,tsType:{name:"ReactNode"},description:""},content:{required:!0,tsType:{name:"signature",type:"function",raw:"(close: () => void) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"close"}],return:{name:"ReactNode"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const C={title:"Components/Dropdown",component:c},n=()=>e.jsx("div",{style:{display:"flex",flexDirection:"column"},children:e.jsx(c,{button:e.jsx(w,{}),content:o=>e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("button",{onClick:()=>o(),style:{border:"1px solid gray"},children:"Profile"}),e.jsx("button",{onClick:()=>o(),style:{border:"1px solid gray"},children:"Settings"}),e.jsx("button",{onClick:()=>o(),style:{border:"1px solid gray"},children:"Controls"})]})})});n.__docgenInfo={description:"",methods:[],displayName:"Primary"};var u,p,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  flexDirection: "column"
}}>\r
    <Dropdown button={<SVG_Help />} content={close => {
    return <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>\r
            <button onClick={() => close()} style={{
        border: "1px solid gray"
      }}>Profile</button>\r
            <button onClick={() => close()} style={{
        border: "1px solid gray"
      }}>Settings</button>\r
            <button onClick={() => close()} style={{
        border: "1px solid gray"
      }}>Controls</button>\r
          </div>;
  }} />\r
  </div>`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const N=["Primary"];export{n as Primary,N as __namedExportsOrder,C as default};
