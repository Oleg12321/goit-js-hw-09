import"./assets/modulepreload-polyfill-3cfb730f.js";const e=document.querySelector("form");let a={email:"",message:""};const l=localStorage.getItem("feedback-form-state"),s="feedback-form-state";if(l){const t=JSON.parse(l);e.elements.email.value=t.email??"",e.elements.message.value=t.message??""}e.addEventListener("input",t=>{t.preventDefault(),a={email:e.elements.email.value.trim(),message:e.elements.message.value.trim()},localStorage.setItem(s,JSON.stringify(a))});e.addEventListener("submit",t=>{if(t.preventDefault(),e.elements.email.value===""||e.elements.message.value===""){alert("Fill please all fields");return}console.log(a),localStorage.removeItem(s),e.reset(),a={email:"",message:""}});
//# sourceMappingURL=commonHelpers2.js.map
