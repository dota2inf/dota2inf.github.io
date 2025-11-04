import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-D4lIrffr.js";import{D as l}from"./DropdownSelect-BKnraIsC.js";import"./clsx-B-dksMZM.js";import"./useTranslation-D6ercXXe.js";import"./i18nInstance-DBIXdvxg.js";const p={title:"Components/DropdownSelect",component:l},t=()=>{const[i,s]=n.useState("de");return e.jsxs("div",{style:{background:"black"},children:[e.jsx("div",{style:{color:"white"},children:"uncontrolable"}),e.jsx(l,{onChange:console.log,data:[{label:"English",value:"en"},{label:"Deutsch",value:"de"},{label:"Italiano",value:"it"}]}),e.jsx("div",{children:"some text"}),e.jsx("div",{children:"some text"}),e.jsx("div",{children:"some text"}),e.jsx("div",{children:"some text"}),e.jsx("div",{style:{color:"white"},children:"controlable"}),e.jsx(l,{value:i,onChange:d=>s(d.value),data:[{label:"English",value:"en"},{label:"Deutsch",value:"de"},{label:"Italiano",value:"it"}]}),e.jsx("div",{children:"some text"}),e.jsx("div",{children:"some text"}),e.jsx("div",{children:"some text"}),e.jsx("div",{children:"some text"})]})};t.__docgenInfo={description:"",methods:[],displayName:"Primary"};var o,a,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("de");
  return <div style={{
    background: 'black'
  }}>\r
      <div style={{
      color: 'white'
    }}>uncontrolable</div>\r
      <DropdownSelect onChange={console.log} data={[{
      label: "English",
      value: "en"
    }, {
      label: "Deutsch",
      value: "de"
    }, {
      label: "Italiano",
      value: "it"
    }]} />\r
      <div>some text</div>\r
      <div>some text</div>\r
      <div>some text</div>\r
      <div>some text</div>\r
      <div style={{
      color: 'white'
    }}>controlable</div>\r
      <DropdownSelect value={value} onChange={it => setValue(it.value)} data={[{
      label: "English",
      value: "en"
    }, {
      label: "Deutsch",
      value: "de"
    }, {
      label: "Italiano",
      value: "it"
    }]} />\r
      <div>some text</div>\r
      <div>some text</div>\r
      <div>some text</div>\r
      <div>some text</div>\r
    </div>;
}`,...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const b=["Primary"];export{t as Primary,b as __namedExportsOrder,p as default};
