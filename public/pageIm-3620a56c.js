import{a as o,e as t,g as r,_ as a,l as s}from"./index-782ff7e8.js";import{P as l}from"./page-e8011fea.js";const n=()=>(o.managers.appStateManager.pushToState("authState",{_:"authStateSignedIn"}),t.requestedServerLanguage||t.getCacheLangPack().then(e=>{e.local&&t.getLangPack(e.lang_code)}),i.pageEl.style.display="",r(),Promise.all([a(()=>import("./appDialogsManager-e7513f9a.js"),["./appDialogsManager-e7513f9a.js","./avatar-2706603c.js","./button-a0897326.js","./index-782ff7e8.js","./index-7366e9f4.css","./page-e8011fea.js","./wrapEmojiText-30eea6f0.js","./scrollable-076252fe.js","./putPreloader-ee1dedc5.js","./htmlToSpan-e5ae8d61.js","./countryInputField-de2c729a.js","./textToSvgURL-c6ebb454.js","./codeInputField-c509e14d.js","./appDialogsManager-7750a65c.css"],import.meta.url),s(),"requestVideoFrameCallback"in HTMLVideoElement.prototype?Promise.resolve():a(()=>import("./requestVideoFrameCallbackPolyfill-d3040205.js"),[],import.meta.url)]).then(([e])=>{e.default.start(),setTimeout(()=>{document.getElementById("auth-pages").remove()},1e3)})),i=new l("page-chats",!1,n);export{i as default};
//# sourceMappingURL=pageIm-3620a56c.js.map