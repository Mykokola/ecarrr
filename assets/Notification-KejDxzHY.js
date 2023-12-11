import{s as n,j as e,l as g,d as v,a as j,n as f,o as w,p as b,r as h,c as y,C as u}from"./index-TQRwHZlM.js";const C=n.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 50px;
  column-gap: 29px;
  margin: 50px auto 0;
`,k=n.button`
  font-family: ManropeSemiBold;
  padding: 12px;
  width: 100%;
  border-radius: 12px;
  background-color: var(--accent-color);
  color: var(--white-color);
  font-size: 14px;

  &:hover {
    background-color: var(--accent-color-full);
    transition: background-color var(--transition-dur-and-fun);
  }
`;function m({text:o,onClick:t,paddingX:r,width:l}){return e.jsx(k,{onClick:t,style:{paddingInline:r,width:l},children:o})}const M=n.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 274px;
  height: 426px;
`,z=n.div`
  display: inline-block;
  position: relative;
  background-color: aqua;
  margin-bottom: 14px;
  width: 100%;
  border-radius: 14px;
  overflow: hidden;
  line-height: 1.5;
  background: var(--linear-gradient);
  width: 274px;
  height: 268px;
`,F=n.img`
  position: relative;
  width: 100%;
  height: 268px;
  object-fit: cover;
  z-index: -1;
`,I=n.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: var(--text-color-full);
  font-family: ManropeMedium;
  margin-bottom: 8px;
`,S=n.h3`
  font-size: 16px;
`,L=n.span`
  color: var(--accent-color);
  font-size: 16px;
`,T=n.p`
  color: var(--text-color-ful);
  font-size: 16px;
  margin-left: auto;
`,$=n.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 4px;
  margin-bottom: 28px;
  height: 36px;
  overflow: hidden;
  color: var(--text-color-translucent);
  font-family: ManropeRegular;
`,p=n.li`
  color: var(--text-color-translucent);
  font-size: 12px;

  &:not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.1);
    margin-right: 6px;
    padding-right: 6px;
  }
`,E=n.button`
  position: absolute;
  top: 14px;
  right: 14px;
  color: var(--accent-color);
  transition: color var(--transition-dur-and-fun);

  &:hover {
    color: var(--accent-color-full);
  }

  & svg {
    width: 18px;
    height: 18px;
    stroke: currentColor;

    fill: ${o=>o.$isInFavorites?"currentColor":"transparent"};
    transition: fill var(--transition-dur-and-fun);
  }
`,re=o=>o.cars,B=o=>o.cars.itemsAll,W=o=>o.favorites,ne=o=>o.filters,P=o=>o.filters.brand,H=o=>o.filters.price,N=o=>o.filters.mileageFrom,R=o=>o.filters.mileageTo,te=g([B,P,H,N,R],(o,t,r,l,i)=>{let s=[...o];return t&&(s=s.filter(({make:a})=>a.toLowerCase().includes(t.toLowerCase()))),r&&(s=s.filter(({rentalPrice:a})=>a.split("$")[1].includes(r))),l&&(s=s.filter(({mileage:a})=>a>=l)),i&&(s=s.filter(({mileage:a})=>a<=i)),o.length==s.length?null:s});function D({data:o}){const t=v(),l=j(W).favorites.find(({id:s})=>s===o.id),i=()=>{t(l?w(o):b(o))};return e.jsx(E,{onClick:i,$isInFavorites:l,children:e.jsx("svg",{children:e.jsx("use",{href:f+"#heart-normal"})})})}const q=n.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--text-color-translucent);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  pointer-events: none;
  transition: opacity var(--transition-dur-and-fun);

  &.active {
    opacity: 1;
    pointer-events: all;
  }
`,A=n.div`
  position: relative;
  padding: 40px;
  margin: 20px;
  background-color: var(--white-color);
  border-radius: 24px;

  transform: scale(0);
  transition: transform var(--transition-dur-and-fun);
  max-width: 540px;

  &.active {
    transform: scale(1);
  }
`,U=n.button`
  position: absolute;
  top: 16px;
  right: 16px;
  color: var(--text-color-full);
  transition: color var(--transition-dur-and-fun);

  &:hover {
    color: var(--accent-color-full);
  }

  & svg {
    width: 24px;
    height: 24px;
    stroke: currentColor;
  }
`,Y=n.img`
  width: 100%;
  object-fit: cover;
  border-radius: 14px;
`,V=n.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin-top: 14px;
  margin-bottom: 24px;
  line-height: 1.5;
`,X=n.h2`
  font-family: ManropeMedium;
  font-size: 18px;
  margin-bottom: 8px;
`,_=n.span`
  color: var(--accent-color);
`,d=n.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: var(--text-color-translucent);

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`,c=n.li`
  display: flex;
  align-items: center;
  color: var(--text-color-translucent);
  font-size: 12px;

  &:not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.1);
    margin-right: 6px;
    padding-right: 6px;
  }
`,G=n.p`
  color: var(--text-color);
  margin-top: 14px;
  font-size: 14px;
  width: 90%;
`,x=n.h3`
  font-family: ManropeMedium;
  font-size: 14px;
  margin-top: 24px;
  margin-bottom: 8px;
`,J=n.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  font-size: 12px;
  letter-spacing: -0.24px;

  & li {
    border-radius: 35px;
    background-color: #f9f9f9;
    padding: 7px 14px;
  }
  & span {
    font-family: ManropeSemiBold;
    color: var(--accent-color);
  }
`,K=document.querySelector("#root_modal");function O({active:o,setActive:t,data:r}){h.useEffect(()=>{const i=s=>{s.code==="Escape"&&t(!1)};return window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)}},[t]);function l(){window.location.href="tel:+380634767370"}return y.createPortal(e.jsx(q,{className:o?"active":"",onClick:()=>t(!1),children:e.jsxs(A,{className:o?"active":"",onClick:i=>i.stopPropagation(),children:[e.jsx(U,{type:"button","aria-label":"close",onClick:()=>t(!1),children:e.jsx("svg",{children:e.jsx("use",{href:f+"#cross"})})}),e.jsx(Y,{src:r.img,alt:r.make,width:"460"}),e.jsxs(V,{children:[e.jsxs(X,{children:[r.make," ",e.jsxs(_,{children:[r.model,", "]}),r.year]}),e.jsxs(d,{children:[e.jsx(c,{children:r.address.split(",")[1]}),e.jsx(c,{children:r.address.split(",")[2]}),e.jsxs(c,{children:["Id: ",r.id]}),e.jsxs(c,{children:["Year: ",r.year]}),e.jsxs(c,{children:["Type: ",r.type]})]}),e.jsxs(d,{children:[e.jsxs(c,{children:["Fuel Consumption: ",r.fuelConsumption]}),e.jsxs(c,{children:["Engine Size: ",r.engineSize]})]}),e.jsx(G,{children:r.description}),e.jsx(x,{children:"Accessories and functionalities:"}),e.jsx(d,{children:r.accessories.map(i=>e.jsx(c,{children:i},i))}),e.jsx(d,{children:r.functionalities.map(i=>e.jsx(c,{children:i},i))}),e.jsx(x,{children:"Rental Conditions:"}),e.jsxs(J,{children:[e.jsxs("li",{children:["Minimum age: ",e.jsx("span",{children:new Date().getFullYear()-r.year})]}),e.jsx("li",{children:r.rentalConditions.split(`
`)[1]}),e.jsx("li",{children:r.rentalConditions.split(`
`)[2]}),e.jsxs("li",{children:["Mileage: ",e.jsx("span",{children:r.mileage.toLocaleString("en-US")})]}),e.jsxs("li",{children:["Price: ",e.jsx("span",{children:r.rentalPrice})]})]})]}),e.jsx(m,{as:"a",text:"Rental car",paddingX:"50px",width:"auto",onClick:()=>l()})]})}),K)}function Q({data:o}){const[t,r]=h.useState(!1);return t?document.body.style.overflow="hidden":document.body.style.overflow="auto",e.jsxs(M,{children:[e.jsxs(z,{children:[e.jsx(D,{data:o}),e.jsx(F,{src:o.img,alt:o.make})]}),e.jsxs(I,{children:[e.jsxs(S,{children:[o.make,e.jsxs(L,{children:[" ",o.model]}),", ",o.year]}),e.jsxs(T,{children:[" ",o.rentalPrice]})]}),e.jsxs($,{children:[e.jsx(p,{children:o.address.split(",")[1]}),e.jsx(p,{children:o.address.split(",")[2]}),e.jsx(p,{children:o.rentalCompany}),e.jsx(p,{children:o.type}),e.jsx(p,{children:o.model}),e.jsx(p,{children:o.mileage.toLocaleString("en-US")}),e.jsx(p,{children:o.accessories[0]})]}),e.jsx(m,{onClick:()=>{r(!0)},text:"Learn more"}),t&&e.jsx(O,{active:t,setActive:r,data:o})]})}function ie({data:o}){return e.jsx(u,{children:o&&e.jsx(C,{children:o.map((t,r)=>e.jsx(Q,{data:t},r))})})}const se=n.div`
  margin-top: 0 auto;
  padding-top: 72px;
  padding-bottom: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    column-gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    column-gap: 100px;
  }
`,le=n.h1`
  font-size: 56px;

  margin-bottom: 24px;
  max-width: 450px;

  & span {
    color: var(--accent-color);
  }
`,ce=n.p`
  margin-bottom: 36px;
`,Z=n.p`
  font-family: ManropeBold;
  text-align: center;
  font-size: 24px;
  color: var(--error-color);
  padding-top: 36px;
  padding-bottom: 36px;
`,ee=({message:o})=>e.jsx(u,{children:e.jsx(Z,{children:o})}),ae=ee;export{m as B,ie as C,se as H,ae as N,le as a,ce as b,ne as c,te as d,W as e,re as s};
