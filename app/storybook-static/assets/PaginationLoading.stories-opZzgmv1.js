import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-D4lIrffr.js";const m=({request:n,stopLoading:r})=>{const[s,a]=i.useState(!1),e=i.useRef(null);return i.useEffect(()=>{if(r)return;const d=e.current;if(!d)return;const c=new IntersectionObserver(p=>{p[0].isIntersecting&&!s&&(a(!0),n().finally(()=>a(!1)))},{threshold:1});return c.observe(d),()=>{c.unobserve(d)}},[n,s,r]),t.jsx("div",{ref:e,className:"component_PaginationLoading",children:s&&t.jsx("div",{className:"component_PaginationLoading_loadingBar",children:t.jsx("div",{className:"component_PaginationLoading_progress"})})})};m.__docgenInfo={description:"",methods:[],displayName:"PaginationLoading",props:{request:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<unknown>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"unknown"}],raw:"Promise<unknown>"}}},description:""},stopLoading:{required:!1,tsType:{name:"boolean"},description:""}}};const v={title:"Components/PaginationLoading",component:m},o=()=>{const[n,r]=i.useState([]),[s,a]=i.useState(!1);return t.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[n.map(e=>t.jsx("div",{children:`item - ${e}`},e)),t.jsx(m,{request:async()=>{await new Promise(e=>setTimeout(e,1e3)),n.length<30?r([...n,Math.random()]):a(!0)},stopLoading:s})]})};o.__docgenInfo={description:"",methods:[],displayName:"Primary"};var l,u,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const [items, setItems] = useState<any>([]);
  const [isStopLoading, setStopLoading] = useState(false);
  return <div style={{
    display: "flex",
    flexDirection: "column"
  }}>\r
      {items.map(it => {
      return <div key={it}>{\`item - \${it}\`}</div>;
    })}\r
      <PaginationLoading request={async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (items.length < 30) {
        setItems([...items, Math.random()]);
      } else {
        setStopLoading(true);
      }
    }} stopLoading={isStopLoading} />\r
    </div>;
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const P=["Primary"];export{o as Primary,P as __namedExportsOrder,v as default};
