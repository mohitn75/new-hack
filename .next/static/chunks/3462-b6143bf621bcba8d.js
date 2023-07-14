"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3462],{5676:function(e,i,l){l.r(i);var a=l(828),s=l(5893),p=l(7294),n=l(619),t=l(6094),c=l(5020),o=l(3457),r=l(6148),m=l(4870),b=l(1020),d=l(9403),u=l(4382),h=l(2094),f=l(462),x=l(1163);i.default=function(e){var i=e.children,l=(0,a.Z)((0,p.useState)(0),2),w=l[0],j=l[1],g=(0,p.useRef)(null),v=(0,p.useRef)(null),I=(0,x.useRouter)(),N=(0,p.useCallback)(function(){var e=I.pathname.split("/");switch(e[e.length-1]){case"seat":j(1);break;case"payment":j(2);break;case"confirmation":j(3)}},[I]);(0,p.useEffect)(function(){N()},[N]);var C=[{label:"Personal",command:function(){return I.push("/uikit/menu")}},{label:"Seat",command:function(){return I.push("/uikit/menu/seat")}},{label:"Payment",command:function(){return I.push("/uikit/menu/payment")}},{label:"Confirmation",command:function(){return I.push("/uikit/menu/confirmation")}}],k=[{label:"Fashion",icon:"pi pi-fw pi-tag",items:[[{label:"Woman",items:[{label:"Woman Item"},{label:"Woman Item"},{label:"Woman Item"}]},{label:"Men",items:[{label:"Men Item"},{label:"Men Item"},{label:"Men Item"}]}],[{label:"Kids",items:[{label:"Kids Item"},{label:"Kids Item"}]},{label:"Luggage",items:[{label:"Luggage Item"},{label:"Luggage Item"},{label:"Luggage Item"}]}]]},{label:"Electronics",icon:"pi pi-fw pi-desktop",items:[[{label:"Computer",items:[{label:"Computer Item"},{label:"Computer Item"}]},{label:"Camcorder",items:[{label:"Camcorder Item"},{label:"Camcorder Item"},{label:"Camcorder Item"}]}],[{label:"TV",items:[{label:"TV Item"},{label:"TV Item"}]},{label:"Audio",items:[{label:"Audio Item"},{label:"Audio Item"},{label:"Audio Item"}]}],[{label:"Sports.7",items:[{label:"Sports.7.1"},{label:"Sports.7.2"}]}]]},{label:"Furniture",icon:"pi pi-fw pi-image",items:[[{label:"Living Room",items:[{label:"Living Room Item"},{label:"Living Room Item"}]},{label:"Kitchen",items:[{label:"Kitchen Item"},{label:"Kitchen Item"},{label:"Kitchen Item"}]}],[{label:"Bedroom",items:[{label:"Bedroom Item"},{label:"Bedroom Item"}]},{label:"Outdoor",items:[{label:"Outdoor Item"},{label:"Outdoor Item"},{label:"Outdoor Item"}]}]]},{label:"Sports",icon:"pi pi-fw pi-star",items:[[{label:"Basketball",items:[{label:"Basketball Item"},{label:"Basketball Item"}]},{label:"Football",items:[{label:"Football Item"},{label:"Football Item"},{label:"Football Item"}]}],[{label:"Tennis",items:[{label:"Tennis Item"},{label:"Tennis Item"}]}]]}];return(0,s.jsxs)("div",{className:"grid p-fluid",children:[(0,s.jsx)("div",{className:"col-12",children:(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("h5",{children:"Menubar"}),(0,s.jsx)(n.n,{model:[{label:"Customers",icon:"pi pi-fw pi-table",items:[{label:"New",icon:"pi pi-fw pi-user-plus",items:[{label:"Customer",icon:"pi pi-fw pi-plus"},{label:"Duplicate",icon:"pi pi-fw pi-copy"}]},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",icon:"pi pi-fw pi-shopping-cart",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]},{label:"Shipments",icon:"pi pi-fw pi-envelope",items:[{label:"Tracker",icon:"pi pi-fw pi-compass"},{label:"Map",icon:"pi pi-fw pi-map-marker"},{label:"Manage",icon:"pi pi-fw pi-pencil"}]},{label:"Profile",icon:"pi pi-fw pi-user",items:[{label:"Settings",icon:"pi pi-fw pi-cog"},{label:"Billing",icon:"pi pi-fw pi-file"}]},{label:"Quit",icon:"pi pi-fw pi-sign-out"}],end:function(){return(0,s.jsxs)("span",{className:"p-input-icon-left",children:[(0,s.jsx)("i",{className:"pi pi-search"}),(0,s.jsx)(t.o,{type:"text",placeholder:"Search"})]})}})]})}),(0,s.jsx)("div",{className:"col-12",children:(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("h5",{children:"Breadcrumb"}),(0,s.jsx)(c.c,{home:{icon:"pi pi-home",to:"/"},model:[{label:"Computer"},{label:"Notebook"},{label:"Accessories"},{label:"Backpacks"},{label:"Item"}]})]})}),(0,s.jsx)("div",{className:"col-12 md:col-6",children:(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("h5",{children:"Steps"}),(0,s.jsx)(o.R,{model:C,activeIndex:w,onSelect:function(e){return j(e.index)},readOnly:!1}),"/uikit/menu"===I.pathname?(0,s.jsxs)("div",{className:"flex align-items-center py-5 px-3",children:[(0,s.jsx)("i",{className:"pi pi-fw pi-user mr-2 text-2xl"}),(0,s.jsx)("p",{className:"m-0 text-lg",children:"Personal Component Content via Child Route"})]}):(0,s.jsx)(s.Fragment,{children:i})]})}),(0,s.jsx)("div",{className:"col-12 md:col-6",children:(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("h5",{children:"TabMenu"}),(0,s.jsx)(r.d,{model:C,activeIndex:w,onTabChange:function(e){return j(e.index)}}),"/uikit/menu"===I.pathname?(0,s.jsxs)("div",{className:"flex align-items-center py-5 px-3",children:[(0,s.jsx)("i",{className:"pi pi-fw pi-user mr-2 text-2xl"}),(0,s.jsx)("p",{className:"m-0 text-lg",children:"Personal Component Content via Child Route"})]}):(0,s.jsx)(s.Fragment,{children:i})]})}),(0,s.jsx)("div",{className:"col-12 md:col-4",children:(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("h5",{children:"Tiered Menu"}),(0,s.jsx)(m.y,{model:[{label:"Customers",icon:"pi pi-fw pi-table",items:[{label:"New",icon:"pi pi-fw pi-user-plus",items:[{label:"Customer",icon:"pi pi-fw pi-plus"},{label:"Duplicate",icon:"pi pi-fw pi-copy"}]},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",icon:"pi pi-fw pi-shopping-cart",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]},{label:"Shipments",icon:"pi pi-fw pi-envelope",items:[{label:"Tracker",icon:"pi pi-fw pi-compass"},{label:"Map",icon:"pi pi-fw pi-map-marker"},{label:"Manage",icon:"pi pi-fw pi-pencil"}]},{label:"Profile",icon:"pi pi-fw pi-user",items:[{label:"Settings",icon:"pi pi-fw pi-cog"},{label:"Billing",icon:"pi pi-fw pi-file"}]},{separator:!0},{label:"Quit",icon:"pi pi-fw pi-sign-out"}]})]})}),(0,s.jsx)("div",{className:"col-12 md:col-4",children:(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("h5",{children:"Plain Menu"}),(0,s.jsx)(b.v,{model:[{label:"Customers",items:[{label:"New",icon:"pi pi-fw pi-plus"},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]}]})]})}),(0,s.jsxs)("div",{className:"col-12 md:col-4",children:[(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("h5",{children:"Overlay Menu"}),(0,s.jsx)(b.v,{ref:g,model:[{label:"Save",icon:"pi pi-save"},{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-trash"},{separator:!0},{label:"Home",icon:"pi pi-home"}],popup:!0}),(0,s.jsx)(d.z,{type:"button",label:"Options",icon:"pi pi-angle-down",onClick:function(e){var i;null===(i=g.current)||void 0===i||i.toggle(e)},style:{width:"auto"}})]}),(0,s.jsxs)("div",{className:"card",onContextMenu:function(e){var i;null===(i=v.current)||void 0===i||i.show(e)},children:[(0,s.jsx)("h5",{children:"ContextMenu"}),"Right click to display.",(0,s.jsx)(u.x,{ref:v,model:[{label:"Save",icon:"pi pi-save"},{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-trash"},{separator:!0},{label:"Options",icon:"pi pi-cog"}]})]})]}),(0,s.jsx)("div",{className:"col-12 md:col-6",children:(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("h5",{children:"MegaMenu - Horizontal"}),(0,s.jsx)(h.V,{model:k}),(0,s.jsx)("h5",{style:{marginTop:"1.55em"},children:"MegaMenu - Vertical"}),(0,s.jsx)(h.V,{model:k,orientation:"vertical"})]})}),(0,s.jsx)("div",{className:"col-12 md:col-6",children:(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("h5",{children:"PanelMenu"}),(0,s.jsx)(f.f,{model:[{label:"Customers",icon:"pi pi-fw pi-table",items:[{label:"New",icon:"pi pi-fw pi-user-plus",items:[{label:"Customer",icon:"pi pi-fw pi-plus"},{label:"Duplicate",icon:"pi pi-fw pi-copy"}]},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",icon:"pi pi-fw pi-shopping-cart",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]},{label:"Shipments",icon:"pi pi-fw pi-envelope",items:[{label:"Tracker",icon:"pi pi-fw pi-compass"},{label:"Map",icon:"pi pi-fw pi-map-marker"},{label:"Manage",icon:"pi pi-fw pi-pencil"}]},{label:"Profile",icon:"pi pi-fw pi-user",items:[{label:"Settings",icon:"pi pi-fw pi-cog"},{label:"Billing",icon:"pi pi-fw pi-file"}]}]})]})})]})}}}]);