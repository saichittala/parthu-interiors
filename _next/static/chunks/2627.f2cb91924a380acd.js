"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2627],{2627:(e,t,i)=>{let a,r,n;i.r(t),i.d(t,{default:()=>gz});var s=i(19749),o=i(95155);let l={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},d={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},u={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HAS_SEEKED:"mediaHasSeeked",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},c=Object.entries(u),h=c.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),m=c.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"});Object.entries(m).reduce((e,[t,i])=>{let a=h[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"});let p=Object.entries(h).reduce((e,[t,i])=>{let a=m[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),b="subtitles",g="captions",f="disabled",E="showing",y="unavailable",_="unsupported",k={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"};function T(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function w(e){if(e){let[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function A(e){if(e){let{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(e=>null!=e).join(":")}}function C(e){if(e){let[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function S(e){return"number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}function I(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))}let R=e=>new Promise(t=>setTimeout(t,e)),L={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function x(e){return String(e).replace(/[&<>"']/g,e=>L[e])}let M={en:{"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it.",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds","{time} remaining":"{time} remaining","{currentTime} of {totalTime}":"{currentTime} of {totalTime}","video not loaded, unknown time.":"video not loaded, unknown time."}},D=(null==(dI=globalThis.navigator)?void 0:dI.language)||"en",O=(e,t={})=>(e=>{var t,i,a;let[r]=D.split("-");return(null==(t=M[D])?void 0:t[e])||(null==(i=M[r])?void 0:i[e])||(null==(a=M.en)?void 0:a[e])||e})(e).replace(/\{(\w+)\}/g,(e,i)=>i in t?String(t[i]):`{${i}}`),P=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],N=(e,t)=>{let i=1===e?O(P[t].singular):O(P[t].plural);return`${e} ${i}`},U=e=>{if(!S(e))return"";let t=Math.abs(e),i=t!==e,a=[Math.floor(t/3600),Math.floor(t/60%60),Math.floor(t%60)].map((e,t)=>e&&N(e,t)).filter(e=>e).join(", ")||N(0,2);return i?O("{time} remaining",{time:a}):a};function H(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),r=Math.floor(e/60%60),n=Math.floor(e/3600),s=Math.floor(t/60%60),o=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(n=r=a="0"),r=(((n=n>0||o>0?n+":":"")||s>=10)&&r<10?"0"+r:r)+":",(i?"-":"")+n+r+(a=a<10?"0"+a:a)}Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});class W{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class B extends W{}class $ extends B{constructor(){super(...arguments),this.role=null}}class q{observe(){}unobserve(){}disconnect(){}}let V={createElement:function(){return new F.HTMLElement},createElementNS:function(){return new F.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},F={ResizeObserver:q,document:V,Node:B,Element:$,HTMLElement:class extends ${constructor(){super(...arguments),this.innerHTML=""}get content(){return new F.DocumentFragment}},DocumentFragment:class extends W{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e}),DOMParser:class{parseFromString(e,t){return{body:{textContent:e}}}}},K="global"in globalThis&&(null==globalThis?void 0:globalThis.global)===globalThis||"u"<typeof window||void 0===window.customElements,j=Object.keys(F).every(e=>e in globalThis),G=K&&!j?F:globalThis,Y=K&&!j?V:globalThis.document,z=new WeakMap,Q=e=>{let t=z.get(e);return t||z.set(e,t=new Set),t},Z=new G.ResizeObserver(e=>{for(let t of e)for(let e of Q(t.target))e(t)});function X(e,t){Q(e).add(t),Z.observe(e)}function J(e,t){let i=Q(e);i.delete(t),i.size||Z.unobserve(e)}function ee(e){let t={};for(let i of e)t[i.name]=i.value;return t}function et(e){var t;return null!=(t=ei(e))?t:es(e,"media-controller")}function ei(e){var t;let{MEDIA_CONTROLLER:i}=d,a=e.getAttribute(i);if(a)return null==(t=el(e))?void 0:t.getElementById(a)}let ea=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},er=(e,t)=>{let i,a;return(i=`slot[name="${t}"]`,!(a=e.shadowRoot.querySelector(i))?[]:a.children)[0]},en=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||en(e,t.getRootNode().host)),es=(e,t)=>{if(!e)return null;let i=e.closest(t);return i||es(e.getRootNode().host,t)};function eo(e=document){var t;let i=null==e?void 0:e.activeElement;return i?null!=(t=eo(i.shadowRoot))?t:i:null}function el(e){var t;let i=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function ed(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=e;for(;r&&t>0;){let e=getComputedStyle(r);if(i&&"0"===e.opacity||a&&"hidden"===e.visibility||"none"===e.display)return!1;r=r.parentElement,t--}return!0}function eu(e,t){let i=function(e,t){var i,a;let r;for(r of null!=(i=e.querySelectorAll("style:not([media])"))?i:[]){let e;try{e=null==(a=r.sheet)?void 0:a.cssRules}catch{continue}for(let i of null!=e?e:[])if(t(i.selectorText))return i}}(e,e=>e===t);return i||ec(e,t)}function ec(e,t){var i,a;let r=null!=(i=e.querySelectorAll("style:not([media])"))?i:[],n=null==r?void 0:r[r.length-1];if(!(null==n?void 0:n.sheet))return console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}};let s=null==n?void 0:n.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length);return null==(a=n.sheet.cssRules)?void 0:a[s]}function eh(e,t,i=NaN){let a=e.getAttribute(t);return null!=a?+a:i}function em(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}eh(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function ep(e,t){return e.hasAttribute(t)}function ev(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}ep(e,t)!=i&&e.toggleAttribute(t,i)}function eb(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function eg(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;eb(e,t,void 0)!==a&&e.setAttribute(t,a)}var ef=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},eE=(e,t,i)=>(ef(e,t,"read from private field"),i?i.call(e):t.get(e)),ey=(e,t,i,a)=>(ef(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class e_ extends G.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,dR,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ee(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[d.MEDIA_CONTROLLER,h.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===d.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=eE(this,dR))?void 0:a.unassociateElement)||r.call(a,this),ey(this,dR,null)),i&&this.isConnected&&(ey(this,dR,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=eE(this,dR))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i,a;let r;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),ey(this,dR,(i=this,(r=i.getAttribute(d.MEDIA_CONTROLLER))?null==(a=i.getRootNode())?void 0:a.getElementById(r):es(i,"media-controller"))),this.getAttribute(d.MEDIA_CONTROLLER)&&(null==(t=null==(e=eE(this,dR))?void 0:e.associateElement)||t.call(e,this)),eE(this,dR)&&(eE(this,dR).addEventListener("pointerdown",this),eE(this,dR).addEventListener("click",this),eE(this,dR).hasAttribute("tabindex")||(eE(this,dR).tabIndex=0))}disconnectedCallback(){var e,t,i,a;this.getAttribute(d.MEDIA_CONTROLLER)&&(null==(t=null==(e=eE(this,dR))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=eE(this,dR))||i.removeEventListener("pointerdown",this),null==(a=eE(this,dR))||a.removeEventListener("click",this),ey(this,dR,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:r,width:n,height:s}=this.getBoundingClientRect(),o=t-a,l=i-r;if(o<0||l<0||o>n||l>s||0===n&&0===s)return;let d=this._pointerType||"mouse";if(this._pointerType=void 0,"touch"===d)return void this.handleTap(e);if("mouse"===d||"pen"===d)return void this.handleMouseClick(e)}}}get mediaPaused(){return ep(this,h.MEDIA_PAUSED)}set mediaPaused(e){ev(this,h.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?l.MEDIA_PLAY_REQUEST:l.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new G.CustomEvent(t,{composed:!0,bubbles:!0}))}}dR=new WeakMap,e_.shadowRootOptions={mode:"open"},e_.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `},G.customElements.get("media-gesture-receiver")||G.customElements.define("media-gesture-receiver",e_);var ek=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},eT=(e,t,i)=>(ek(e,t,"read from private field"),i?i.call(e):t.get(e)),ew=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},eA=(e,t,i,a)=>(ek(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),eC=(e,t,i)=>(ek(e,t,"access private method"),i);let eS="audio",eI="autohide",eR="breakpoints",eL="gesturesdisabled",ex="keyboardcontrol",eM="noautohide",eD="userinactive",eO="autohideovercontrols",eP=Object.values(h);function eN(e,t){var i,a,r;if(!e.isConnected)return;let n=Object.fromEntries((null!=(i=e.getAttribute(eR))?i:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),s=(a=n,r=t,Object.keys(a).filter(e=>r>=parseInt(a[e]))),o=!1;if(Object.keys(n).forEach(t=>{if(s.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),o=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),o=!0)}),o){let t=new CustomEvent(m.BREAKPOINTS_CHANGE,{detail:s});e.dispatchEvent(t)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(m.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class eU extends G.HTMLElement{constructor(){if(super(),ew(this,dH),ew(this,dB),ew(this,dq),ew(this,dF),ew(this,dj),ew(this,dL,void 0),ew(this,dx,0),ew(this,dM,null),ew(this,dD,null),ew(this,dO,void 0),this.breakpointsComputed=!1,ew(this,dP,e=>{let t=this.media;for(let i of e)if("childList"===i.type){for(let e of i.removedNodes){if("media"!=e.slot||i.target!=this)continue;let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}if(t)for(let e of i.addedNodes)e===t&&this.handleMediaUpdated(t)}}),ew(this,dN,!1),ew(this,dU,e=>{eT(this,dN)||(setTimeout(()=>{eN(e.target,e.contentRect.width),eA(this,dN,!1)},0),eA(this,dN,!0))}),ew(this,dY,void 0),ew(this,dz,()=>{if(!eT(this,dY).assignedElements({flatten:!0}).length){eT(this,dM)&&this.mediaUnsetCallback(eT(this,dM));return}this.handleMediaUpdated(this.media)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ee(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}eA(this,dL,new MutationObserver(eT(this,dP)))}static get observedAttributes(){return[eI,eL].concat(eP).filter(e=>![h.MEDIA_RENDITION_LIST,h.MEDIA_AUDIO_TRACK_LIST,h.MEDIA_CHAPTERS_CUES,h.MEDIA_WIDTH,h.MEDIA_HEIGHT,h.MEDIA_ERROR,h.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==eI&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(eA(this,dM,e),e.localName.includes("-")&&await G.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;eT(this,dL).observe(this,{childList:!0,subtree:!0}),X(this,eT(this,dU));let t=null!=this.getAttribute(eS)?O("audio player"):O("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(eD,""),eN(this,this.getBoundingClientRect().width);let i=this.querySelector(":scope > slot[slot=media]");i&&(eA(this,dY,i),eT(this,dY).addEventListener("slotchange",eT(this,dz))),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=G.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;J(this,eT(this,dU)),clearTimeout(eT(this,dD)),eT(this,dL).disconnect(),this.media&&this.mediaUnsetCallback(this.media),null==(e=G.window)||e.removeEventListener("mouseup",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointermove",this),this.removeEventListener("pointerup",this),this.removeEventListener("mouseleave",this),this.removeEventListener("keyup",this),eT(this,dY)&&(eT(this,dY).removeEventListener("slotchange",eT(this,dz)),eA(this,dY,null)),eA(this,dN,!1)}mediaSetCallback(e){}mediaUnsetCallback(e){eA(this,dM,null)}handleEvent(e){switch(e.type){case"pointerdown":eA(this,dx,e.timeStamp);break;case"pointermove":eC(this,dH,dW).call(this,e);break;case"pointerup":eC(this,dB,d$).call(this,e);break;case"mouseleave":eC(this,dq,dV).call(this);break;case"mouseup":this.removeAttribute(ex);break;case"keyup":eC(this,dj,dG).call(this),this.setAttribute(ex,"")}}set autohide(e){let t=Number(e);eA(this,dO,isNaN(t)?0:t)}get autohide(){return(void 0===eT(this,dO)?2:eT(this,dO)).toString()}get breakpoints(){return eb(this,eR)}set breakpoints(e){eg(this,eR,e)}get audio(){return ep(this,eS)}set audio(e){ev(this,eS,e)}get gesturesDisabled(){return ep(this,eL)}set gesturesDisabled(e){ev(this,eL,e)}get keyboardControl(){return ep(this,ex)}set keyboardControl(e){ev(this,ex,e)}get noAutohide(){return ep(this,eM)}set noAutohide(e){ev(this,eM,e)}get autohideOverControls(){return ep(this,eO)}set autohideOverControls(e){ev(this,eO,e)}get userInteractive(){return ep(this,eD)}set userInteractive(e){ev(this,eD,e)}}dL=new WeakMap,dx=new WeakMap,dM=new WeakMap,dD=new WeakMap,dO=new WeakMap,dP=new WeakMap,dN=new WeakMap,dU=new WeakMap,dH=new WeakSet,dW=function(e){if("mouse"!==e.pointerType&&e.timeStamp-eT(this,dx)<250)return;eC(this,dF,dK).call(this),clearTimeout(eT(this,dD));let t=this.hasAttribute(eO);([this,this.media].includes(e.target)||t)&&eC(this,dj,dG).call(this)},dB=new WeakSet,d$=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(eD);[this,this.media].includes(e.target)&&t?eC(this,dq,dV).call(this):eC(this,dj,dG).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&eC(this,dj,dG).call(this)},dq=new WeakSet,dV=function(){if(0>eT(this,dO)||this.hasAttribute(eD))return;this.setAttribute(eD,"");let e=new G.CustomEvent(m.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},dF=new WeakSet,dK=function(){if(!this.hasAttribute(eD))return;this.removeAttribute(eD);let e=new G.CustomEvent(m.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},dj=new WeakSet,dG=function(){eC(this,dF,dK).call(this),clearTimeout(eT(this,dD));let e=parseInt(this.autohide);e<0||eA(this,dD,setTimeout(()=>{eC(this,dq,dV).call(this)},1e3*e))},dY=new WeakMap,dz=new WeakMap,eU.shadowRootOptions={mode:"open"},eU.getTemplateHTML=function(e){return`
    <style>
      
      :host([${h.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${eS}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${eS}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${eS}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${eS}])[${eL}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${eS}])[${eL}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${eS}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${eS}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${eS}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${eS}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${eM}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${eD}]:not([${h.MEDIA_PAUSED}]):not([${h.MEDIA_IS_AIRPLAYING}]):not([${h.MEDIA_IS_CASTING}]):not([${eS}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${eM}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${eD}]:not([${eM}]):not([${h.MEDIA_PAUSED}]):not([${h.MEDIA_IS_CASTING}]):not([${eS}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${eD}][${eO}]:not([${eM}]):not([${h.MEDIA_PAUSED}]):not([${h.MEDIA_IS_CASTING}]):not([${eS}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      
      :host(:not([${eS}])[${h.MEDIA_HAS_PLAYED}]) slot[name=poster],
      :host(:not([${eS}])[${h.MEDIA_STREAM_TYPE}="${k.ON_DEMAND}"][${h.MEDIA_HAS_SEEKED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${e_.shadowRootOptions.mode}">
          ${e_.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `},G.customElements.get("media-container")||G.customElements.define("media-container",eU);var eH=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},eW=(e,t,i)=>(eH(e,t,"read from private field"),i?i.call(e):t.get(e)),eB=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},e$=(e,t,i,a)=>(eH(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),eq=(e,t,i)=>(eH(e,t,"access private method"),i);let eV="open";class eF extends G.HTMLElement{constructor(){super(),eB(this,dJ),eB(this,d1),eB(this,d3),eB(this,d5),eB(this,d8),eB(this,d7),eB(this,dQ,!1),eB(this,dZ,null),eB(this,dX,null)}static get observedAttributes(){return[eV,"anchor"]}get open(){return ep(this,eV)}set open(e){ev(this,eV,e)}handleEvent(e){switch(e.type){case"invoke":eq(this,d5,d9).call(this,e);break;case"focusout":eq(this,d8,d6).call(this,e);break;case"keydown":eq(this,d7,ue).call(this,e)}}connectedCallback(){eq(this,dJ,d0).call(this),this.role||(this.role="dialog"),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}disconnectedCallback(){this.removeEventListener("invoke",this),this.removeEventListener("focusout",this),this.removeEventListener("keydown",this)}attributeChangedCallback(e,t,i){eq(this,dJ,d0).call(this),e===eV&&i!==t&&(this.open?eq(this,d1,d2).call(this):eq(this,d3,d4).call(this))}focus(){e$(this,dZ,eo());let e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||t)return;let i=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==i||i.focus()}get keysUsed(){return["Escape","Tab"]}}dQ=new WeakMap,dZ=new WeakMap,dX=new WeakMap,dJ=new WeakSet,d0=function(){if(!eW(this,dQ)&&(e$(this,dQ,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let e=ee(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{let{style:e}=eu(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},d1=new WeakSet,d2=function(){var e;null==(e=eW(this,dX))||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},d3=new WeakSet,d4=function(){var e;null==(e=eW(this,dX))||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},d5=new WeakSet,d9=function(e){e$(this,dX,e.relatedTarget),en(this,e.relatedTarget)||(this.open=!this.open)},d8=new WeakSet,d6=function(e){var t;!en(this,e.relatedTarget)&&(null==(t=eW(this,dZ))||t.focus(),eW(this,dX)&&eW(this,dX)!==e.relatedTarget&&this.open&&(this.open=!1))},d7=new WeakSet,ue=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;o||l||d||this.keysUsed.includes(s)&&(e.preventDefault(),e.stopPropagation(),"Tab"===s?(e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()):"Escape"===s&&(null==(n=eW(this,dZ))||n.focus(),this.open=!1))},eF.shadowRootOptions={mode:"open"},eF.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `},eF.getSlotTemplateHTML=function(e){return`
    <slot id="content"></slot>
  `},G.customElements.get("media-chrome-dialog")||G.customElements.define("media-chrome-dialog",eF);var eK=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)},ej=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};let eG="hotkeys",eY=[{keys:[{key:" ",label:"Space"},{key:"k"}],description:"Toggle Playback"},{keys:[{key:"m"}],description:"Toggle mute"},{keys:[{key:"f"}],description:"Toggle fullscreen"},{keys:[{key:"c"}],description:"Toggle captions or subtitles, if available"},{keys:[{key:"p"}],description:"Toggle Picture in Picture"},{keys:[{key:"ArrowLeft",label:"←"},{key:"j"}],description:"Seek back 10s"},{keys:[{key:"ArrowRight",label:"→"},{key:"l"}],description:"Seek forward 10s"},{keys:[{key:"ArrowUp",label:"↑"}],description:"Turn volume up"},{keys:[{key:"ArrowDown",label:"↓"}],description:"Turn volume down"},{keys:[{key:"<",label:"< (SHIFT+,)"}],description:"Decrease playback rate"},{keys:[{key:">",label:"> (SHIFT+.)"}],description:"Increase playback rate"},{keys:[{key:"shift+/",label:"SHIFT+/"}],description:"Show keyboard shortcuts"}];function ez(e){return" "===e?"nospace":`no${e.toLowerCase()}`}function eQ(e){let t,i=(t=new Set(null==e?void 0:e.split(/\s+/)),eY.map(({keys:e,description:i})=>({keys:e.filter(({key:e})=>!t.has(ez(e))),description:i})).filter(({keys:e})=>e.length)).map(({keys:e,description:t})=>{let i=e.map(({key:e,label:t=e},i)=>i>0?`<span class="key-separator">or</span><span class="key">${t}</span>`:`<span class="key">${t}</span>`).join("");return`
        <tr>
          <td>
            <div class="key-combo">${i}</div>
          </td>
          <td class="description">${t}</td>
        </tr>
      `}).join("");return`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${i}</table>
  `}class eZ extends eF{constructor(){super(...arguments),ej(this,ut,e=>{var t;if(!this.open)return;let i=null==(t=this.shadowRoot)?void 0:t.querySelector("#content");if(!i)return;let a=e.composedPath(),r=a[0]===this||a.includes(this),n=a.includes(i);r&&!n&&(this.open=!1)}),ej(this,ui,e=>{if(!this.open)return;let t=e.shiftKey&&("/"===e.key||"?"===e.key);"Escape"!==e.key&&!t||e.ctrlKey||e.altKey||e.metaKey||(this.open=!1,e.preventDefault(),e.stopPropagation())})}static get observedAttributes(){return[...super.observedAttributes,eG]}get hotkeys(){var e;return null!=(e=eb(this,eG))?e:void 0}set hotkeys(e){eg(this,eG,e)}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",eK(this,ut)),document.addEventListener("keydown",eK(this,ui)))}disconnectedCallback(){this.removeEventListener("click",eK(this,ut)),document.removeEventListener("keydown",eK(this,ui))}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),"open"===e)this.open?(this.addEventListener("click",eK(this,ut)),document.addEventListener("keydown",eK(this,ui))):(this.removeEventListener("click",eK(this,ut)),document.removeEventListener("keydown",eK(this,ui)));else if(e===eG&&i!==t){let e=null==(a=this.shadowRoot)?void 0:a.querySelector("#content");e&&(e.innerHTML=eQ(i))}}}ut=new WeakMap,ui=new WeakMap,eZ.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${eQ(e[eG])}
    </slot>
  `},G.customElements.get("media-keyboard-shortcuts-dialog")||G.customElements.define("media-keyboard-shortcuts-dialog",eZ);var eX=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},eJ=(e,t,i)=>(eX(e,t,"read from private field"),i?i.call(e):t.get(e)),e0=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},e1=(e,t,i,a)=>(eX(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class e2{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){e0(this,uo),e0(this,ua,void 0),e0(this,ur,void 0),e0(this,un,void 0),e0(this,us,new Set),e1(this,ua,e),e1(this,ur,t),e1(this,un,new Set(i))}[Symbol.iterator](){return eJ(this,uo,ul).values()}get length(){return eJ(this,uo,ul).size}get value(){var e;return null!=(e=[...eJ(this,uo,ul)].join(" "))?e:""}set value(e){var t;e!==this.value&&(e1(this,us,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...eJ(this,uo,ul)][e]}values(){return eJ(this,uo,ul).values()}forEach(e,t){eJ(this,uo,ul).forEach(e,t)}add(...e){var t,i;e.forEach(e=>eJ(this,us).add(e)),(""!==this.value||(null==(t=eJ(this,ua))?void 0:t.hasAttribute(`${eJ(this,ur)}`)))&&(null==(i=eJ(this,ua))||i.setAttribute(`${eJ(this,ur)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>eJ(this,us).delete(e)),null==(t=eJ(this,ua))||t.setAttribute(`${eJ(this,ur)}`,`${this.value}`)}contains(e){return eJ(this,uo,ul).has(e)}toggle(e,t){if(void 0!==t)if(t)return this.add(e),!0;else return this.remove(e),!1;return this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}ua=new WeakMap,ur=new WeakMap,un=new WeakMap,us=new WeakMap,uo=new WeakSet,ul=function(){return eJ(this,us).size?eJ(this,us):eJ(this,un)};let e3=(e="")=>{let[t,i,a]=e.split(":");return{kind:"cc"===t?g:b,language:i,label:void 0!==a?decodeURIComponent(a):void 0}},e4=(e="",t={})=>((e="")=>e.split(/\s+/))(e).map(e=>{let i=e3(e);return{...t,...i}}),e5=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?e3(e):e):"string"==typeof e?e4(e):[e]:[],e9=({kind:e,label:t,language:i}={kind:"subtitles"})=>`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(null!=t?t:"")}`,e8=(e=[])=>Array.prototype.map.call(e,e9).join(" "),e6=e=>{let t=Object.entries(e).map(([e,t])=>i=>i[e]===t);return e=>t.every(t=>t(e))},e7=(e,t=[],i=[])=>{let a=e5(i).map(e6);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},te=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:e6(t);return Array.from(e.textTracks).filter(i)},tt=e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(h.MEDIA_SUBTITLES_SHOWING)},ti="exitFullscreen"in Y?"exitFullscreen":"webkitExitFullscreen"in Y?"webkitExitFullscreen":"webkitCancelFullScreen"in Y?"webkitCancelFullScreen":void 0,ta="fullscreenElement"in Y?"fullscreenElement":"webkitFullscreenElement"in Y?"webkitFullscreenElement":void 0,tr="fullscreenEnabled"in Y?"fullscreenEnabled":"webkitFullscreenEnabled"in Y?"webkitFullscreenEnabled":void 0,tn=()=>{var e;return a||(a=null==(e=null==Y?void 0:Y.createElement)?void 0:e.call(Y,"video"))},ts=async(e=tn())=>{if(!e)return!1;let t=e.volume;e.volume=t/2+.1;let i=new AbortController,a=await Promise.race([to(e,i.signal),tl(e,t)]);return i.abort(),a},to=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),tl=async(e,t)=>{for(let i=0;i<10;i++){if(e.volume===t)return!1;await R(10)}return e.volume!==t},td=/.*Version\/.*Safari\/.*/.test(G.navigator.userAgent),tu=(e=tn())=>(!G.matchMedia("(display-mode: standalone)").matches||!td)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),tc=(e=tn())=>(e=>{let{documentElement:t,media:i}=e;return!!(null==t?void 0:t[tr])||i&&"webkitSupportsFullscreen"in i})({documentElement:Y,media:e}),th=tc(),tm=tu(),tp=!!G.WebKitPlaybackTargetAvailabilityEvent,tv=!!G.chrome,tb=e=>te(e.media,e=>[b,g].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),tg=e=>te(e.media,e=>e.mode===E&&[b,g].includes(e.kind)),tf=(e,t)=>{let i=tb(e),a=tg(e),r=!!a.length;if(i.length){if(!1===t||r&&!0!==t)e7(f,i,a);else if(!0===t||!r&&!1!==t){let t=i[0],{options:r}=e;if(!(null==r?void 0:r.noSubtitlesLangPref)){let e=G.localStorage.getItem("media-chrome-pref-subtitles-lang"),a=e?[e,...G.navigator.languages]:G.navigator.languages,r=i.filter(e=>a.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>a.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-a.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));r[0]&&(t=r[0])}let{language:n,label:s,kind:o}=t;e7(f,i,a),e7(E,i,[{language:n,label:s,kind:o}])}}},tE=(e,t)=>e===t||null!=e&&null!=t&&typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?ty(e,t):Object.entries(e).every(([e,i])=>e in t&&tE(i,t[e])))),ty=(e,t)=>{let i=Array.isArray(e),a=Array.isArray(t);return i===a&&(!i&&!a||e.length===t.length&&e.every((e,i)=>tE(e,t[i])))},t_=Object.values(k),tk=ts().then(e=>r=e),tT=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof G.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let i=G.customElements.get(t);i&&e instanceof i||(await G.customElements.whenDefined(t),G.customElements.upgrade(e))}))},tw=new G.DOMParser,tA={mediaError:{get(e,t){let{media:i}=e;if((null==t?void 0:t.type)!=="playing")return null==i?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var i;let{media:a}=e;if((null==t?void 0:t.type)!=="playing")return null==(i=null==a?void 0:a.error)?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var i,a;let{media:r}=e;if((null==t?void 0:t.type)!=="playing")return null!=(a=null==(i=null==r?void 0:r.error)?void 0:i.message)?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoWidth)?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoHeight)?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;let{media:i}=e;return null==(t=null==i?void 0:i.paused)||t},set(e,t){var i;let{media:a}=t;a&&(e?a.pause():null==(i=a.play())||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:i}=e;return!!i&&(t?"playing"===t.type:!i.paused)},mediaEvents:["playing","emptied"]},mediaHasSeeked:{get(e,t){let{media:i}=e;return!!i&&(t?"seeking"===t.type:!!i.seeking)},mediaEvents:["seeking","emptied"]},mediaEnded:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.playbackRate)?t:1},set(e,t){let{media:i}=t;!i||Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.muted)&&t},set(e,t){let{media:i,options:{noMutedPref:a}={}}=t;if(i){i.muted=e;try{let t=null!==G.localStorage.getItem("media-chrome-pref-muted"),r=i.hasAttribute("muted");if(a){t&&G.localStorage.removeItem("media-chrome-pref-muted");return}if(r&&!t)return;G.localStorage.setItem("media-chrome-pref-muted",e?"true":"false")}catch(e){console.debug("Error setting muted pref",e)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noMutedPref:i}}=t,{media:a}=t;if(a&&!a.muted&&!i)try{let i="true"===G.localStorage.getItem("media-chrome-pref-muted");tA.mediaMuted.set(i,t),e(i)}catch(e){console.debug("Error getting muted pref",e)}}]},mediaLoop:{get(e){let{media:t}=e;return null==t?void 0:t.loop},set(e,t){let{media:i}=t;i&&(i.loop=e)},mediaEvents:["medialooprequest"]},mediaVolume:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.volume)?t:1},set(e,t){let{media:i,options:{noVolumePref:a}={}}=t;if(i){try{null==e?G.localStorage.removeItem("media-chrome-pref-volume"):i.hasAttribute("muted")||a||G.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){console.debug("Error setting volume pref",e)}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:i}}=t;if(!i)try{let{media:i}=t;if(!i)return;let a=G.localStorage.getItem("media-chrome-pref-volume");if(null==a)return;tA.mediaVolume.set(+a,t),e(+a)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.currentTime)?t:0},set(e,t){let{media:i}=t;i&&S(e)&&(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata","seeking"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(null==t?void 0:t.duration)?t.duration:NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(a||r)return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:i}=e,a=null!=(t=null==i?void 0:i.buffered)?t:[];return Array.from(a).map((e,t)=>[Number(a.start(t).toFixed(3)),Number(a.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:i}={}}=e,a=[k.LIVE,k.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;let{streamType:r}=t;if(t_.includes(r))return r===k.UNKNOWN?a:r;let n=t.duration;return n===1/0?k.LIVE:Number.isFinite(n)?k.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return NaN;let{targetLiveWindow:i}=t,a=tA.mediaStreamType.get(e);return(null==i||Number.isNaN(i))&&a===k.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(tA.mediaStreamType.get(e)!==k.LIVE)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let r=a.end(a.length-1)-i;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>tb(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>tg(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;let{media:r,options:n}=t;if(!r)return;let s=e=>{var i;n.defaultSubtitles&&(e&&![g,b].includes(null==(i=null==e?void 0:e.track)?void 0:i.kind)||tf(t,!0))};return r.addEventListener("loadstart",s),null==(i=r.textTracks)||i.addEventListener("addtrack",s),null==(a=r.textTracks)||a.addEventListener("removetrack",s),()=>{var e,t;r.removeEventListener("loadstart",s),null==(e=r.textTracks)||e.removeEventListener("addtrack",s),null==(t=r.textTracks)||t.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(e){var t;let{media:i}=e;if(!i)return[];let[a]=te(i,{kind:"chapters"});return Array.from(null!=(t=null==a?void 0:a.cues)?t:[]).map(({text:e,startTime:t,endTime:i})=>({text:e&&tw.parseFromString(e,"text/html").body.textContent||e,startTime:t,endTime:i}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(!a)return;let r=a.querySelector('track[kind="chapters"][default][src]'),n=null==(i=a.shadowRoot)?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==r||r.addEventListener("load",e),null==n||n.addEventListener("load",e),()=>{null==r||r.removeEventListener("load",e),null==n||n.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;let{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return!!(null==(t=a.localName)?void 0:t.includes("-"))&&en(a,r.pictureInPictureElement);if(r.pictureInPictureElement.localName.includes("-")){let e=r.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===a)return!0;e=null==(i=e.pictureInPictureElement)?void 0:i.shadowRoot}}return!1},set(e,t){let{media:i}=t;if(i)if(e){if(!Y.pictureInPictureEnabled)return void console.warn("MediaChrome: Picture-in-picture is not enabled");if(!i.requestPictureInPicture)return void console.warn("MediaChrome: The current media does not support picture-in-picture");let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(t=>{if(11===t.code){if(!i.src)return void console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");if(0===i.readyState&&"none"===i.preload){let t=()=>{i.removeEventListener("loadedmetadata",a),i.preload="none"},a=()=>{i.requestPictureInPicture().catch(e),t()};i.addEventListener("loadedmetadata",a),i.preload="metadata",setTimeout(()=>{0===i.readyState&&e(),t()},1e3)}else throw t}else throw t})}else Y.pictureInPictureElement&&Y.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;let{media:r}=e;return null==(a=null==(i=null==r?void 0:r.videoRenditions)?void 0:i[null==(t=r.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.videoRenditions))return void console.warn("MediaController: Rendition selection not supported by this media.");let a=Array.prototype.findIndex.call(i.videoRenditions,t=>t.id==e);i.videoRenditions.selectedIndex!=a&&(i.videoRenditions.selectedIndex=a)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.audioTracks))return void console.warn("MediaChrome: Audio track selection not supported by this media.");for(let t of i.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:e=>(e=>{var t;let{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;let n=(e=>{let{documentElement:t,media:i}=e,a=null==t?void 0:t[ta];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&"fullscreen"===i.webkitPresentationMode?i:a})(e);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let e=n.shadowRoot;if(!(ta in e))return en(n,r);for(;null==e?void 0:e[ta];){if(e[ta]===r)return!0;e=null==(t=e[ta])?void 0:t.shadowRoot}}return!1})(e),set(e,t,i){var a,r;e?((e=>{var t;let{media:i,fullscreenElement:a}=e;try{let e=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(e){let i=null==(t=a[e])?void 0:t.call(a);if(i instanceof Promise)return i.catch(()=>{})}else(null==i?void 0:i.webkitEnterFullscreen)?i.webkitEnterFullscreen():(null==i?void 0:i.requestFullscreen)&&i.requestFullscreen()}catch(e){console.error(e)}})(t),!i.detail||(null==(a=t.media)?void 0:a.inert)||null==(r=t.media)||r.focus()):(e=>{var t;let{documentElement:i}=e;if(ti){let e=null==(t=null==i?void 0:i[ti])?void 0:t.call(i);if(e instanceof Promise)return e.catch(()=>{})}})(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;let{media:i}=e;return!!(null==i?void 0:i.remote)&&(null==(t=i.remote)?void 0:t.state)!=="disconnected"&&"connected"===i.remote.state},set(e,t){var i,a;let{media:r}=t;if(r&&(!e||(null==(i=r.remote)?void 0:i.state)==="disconnected")&&(e||(null==(a=r.remote)?void 0:a.state)==="connected")){if("function"!=typeof r.remote.prompt)return void console.warn("MediaChrome: Casting is not supported in this environment");r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&G.WebKitPlaybackTargetAvailabilityEvent))return void console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!th||!tc(t))return _}},mediaPipUnavailable:{get(e){let{media:t}=e;return tm&&tu(t)?(null==t?void 0:t.disablePictureInPicture)?y:void 0:_}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(!1===r||(null==t?void 0:t.volume)==void 0)return _},stateOwnersUpdateHandlers:[e=>{null==r&&tk.then(t=>e(t?void 0:_))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;let{media:a}=e;return tv&&(null==(i=null==a?void 0:a.remote)?void 0:i.state)?null!=t&&"available"!==t?y:void 0:_},stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>tp?(null==t?void 0:t.availability)==="not-available"?y:void 0:_,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:y:_},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?y:void 0:_},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(e){let{options:{mediaLang:t}={}}=e;return null!=t?t:"en"}}},tC={[l.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,n;let s,o,{media:l}=t,d=null!=i?i:void 0;if(l&&null!=d){let[e]=te(l,{kind:"metadata",label:"thumbnails"}),t=Array.prototype.find.call(null!=(a=null==e?void 0:e.cues)?a:[],(e,t,i)=>0===t?e.endTime>d:t===i.length-1?e.startTime<=d:e.startTime<=d&&e.endTime>d);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)||null==(r=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:r.src,i=new URL(t.text,e);o=new URLSearchParams(i.hash).get("#xywh").split(",").map(e=>+e),s=i.href}}let u=e.mediaDuration.get(t),c=null==(n=e.mediaChaptersCues.get(t).find((e,t,i)=>t===i.length-1&&u===e.endTime?e.startTime<=d&&e.endTime>=d:e.startTime<=d&&e.endTime>d))?void 0:n.text;return null!=i&&null==c&&(c=""),{mediaPreviewTime:d,mediaPreviewImage:s,mediaPreviewCoords:o,mediaPreviewChapter:c}},[l.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[l.MEDIA_PLAY_REQUEST](e,t){var i,a,r,n;let s=e.mediaStreamType.get(t)===k.LIVE,o=!(null==(i=t.options)?void 0:i.noAutoSeekToLive),l=e.mediaTargetLiveWindow.get(t)>0;if(s&&o&&!l){let i=null==(a=e.mediaSeekable.get(t))?void 0:a[1];if(i){let a=null!=(n=null==(r=t.options)?void 0:r.seekToLiveOffset)?n:0;e.mediaCurrentTime.set(i-a,t)}}e.mediaPaused.set(!1,t)},[l.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){e.mediaPlaybackRate.set(i,t)},[l.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[l.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[l.MEDIA_LOOP_REQUEST](e,t,{detail:i}){let a=!!i;return e.mediaLoop.set(a,t),{mediaLoop:a}},[l.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){i&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(i,t)},[l.MEDIA_SEEK_REQUEST](e,t,{detail:i}){e.mediaCurrentTime.set(i,t)},[l.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i,a,r;let n=null==(i=e.mediaSeekable.get(t))?void 0:i[1];if(Number.isNaN(Number(n)))return;let s=null!=(r=null==(a=t.options)?void 0:a.seekToLiveOffset)?r:0;e.mediaCurrentTime.set(n-s,t)},[l.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;let{options:r}=t,n=tb(t),s=e5(i),o=null==(a=s[0])?void 0:a.language;o&&!r.noSubtitlesLangPref&&G.localStorage.setItem("media-chrome-pref-subtitles-lang",o),e7(E,n,s)},[l.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){e7(f,tb(t),null!=i?i:[])},[l.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){tf(t,i)},[l.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){e.mediaRenditionSelected.set(i,t)},[l.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){e.mediaAudioTrackEnabled.set(i,t)},[l.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[l.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[l.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t,i){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t,i)},[l.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[l.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[l.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[l.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}};var tS=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tI=(e,t,i)=>(tS(e,t,"read from private field"),i?i.call(e):t.get(e)),tR=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tL=(e,t,i,a)=>(tS(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),tx=(e,t,i)=>(tS(e,t,"access private method"),i);let tM=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],tD="defaultsubtitles",tO="defaultstreamtype",tP="defaultduration",tN="fullscreenelement",tU="hotkeys",tH="keyboardbackwardseekoffset",tW="keyboardforwardseekoffset",tB="keyboarddownvolumestep",t$="keyboardupvolumestep",tq="keysused",tV="lang",tF="loop",tK="liveedgeoffset",tj="noautoseektolive",tG="nodefaultstore",tY="nohotkeys",tz="nomutedpref",tQ="nosubtitleslangpref",tZ="novolumepref",tX="seektoliveoffset";class tJ extends eU{constructor(){super(),tR(this,ug),tR(this,uy),tR(this,uk),tR(this,uw),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,tR(this,ud,new e2(this,tU)),tR(this,uu,void 0),tR(this,uc,void 0),tR(this,uh,null),tR(this,um,void 0),tR(this,up,void 0),tR(this,uv,e=>{var t;null==(t=tI(this,uc))||t.dispatch(e)}),tR(this,ub,void 0),tR(this,uE,e=>{let{key:t,shiftKey:i}=e;i&&("/"===t||"?"===t)||tM.includes(t)?this.keyboardShortcutHandler(e):this.removeEventListener("keyup",tI(this,uE))}),this.associateElement(this);let e={};tL(this,um,t=>{Object.entries(t).forEach(([t,i])=>{if(t in e&&e[t]===i)return;this.propagateMediaState(t,i);let a=t.toLowerCase(),r=new G.CustomEvent(p[a],{composed:!0,detail:i});this.dispatchEvent(r)}),e=t})}static get observedAttributes(){return super.observedAttributes.concat(tY,tU,tO,tD,tP,tz,tZ,tV,tF,tK,tX,tj)}get mediaStore(){return tI(this,uc)}set mediaStore(e){var t,i;(tI(this,uc)&&(null==(t=tI(this,up))||t.call(this),tL(this,up,void 0)),tL(this,uc,e),tI(this,uc)||this.hasAttribute(tG))?tL(this,up,null==(i=tI(this,uc))?void 0:i.subscribe(tI(this,um))):tx(this,ug,uf).call(this)}get fullscreenElement(){var e;return null!=(e=tI(this,uu))?e:this}set fullscreenElement(e){var t;this.hasAttribute(tN)&&this.removeAttribute(tN),tL(this,uu,e),null==(t=tI(this,uc))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return ep(this,tD)}set defaultSubtitles(e){ev(this,tD,e)}get defaultStreamType(){return eb(this,tO)}set defaultStreamType(e){eg(this,tO,e)}get defaultDuration(){return eh(this,tP)}set defaultDuration(e){em(this,tP,e)}get noHotkeys(){return ep(this,tY)}set noHotkeys(e){ev(this,tY,e)}get keysUsed(){return eb(this,tq)}set keysUsed(e){eg(this,tq,e)}get liveEdgeOffset(){return eh(this,tK)}set liveEdgeOffset(e){em(this,tK,e)}get noAutoSeekToLive(){return ep(this,tj)}set noAutoSeekToLive(e){ev(this,tj,e)}get noVolumePref(){return ep(this,tZ)}set noVolumePref(e){ev(this,tZ,e)}get noMutedPref(){return ep(this,tz)}set noMutedPref(e){ev(this,tz,e)}get noSubtitlesLangPref(){return ep(this,tQ)}set noSubtitlesLangPref(e){ev(this,tQ,e)}get noDefaultStore(){return ep(this,tG)}set noDefaultStore(e){ev(this,tG,e)}get resolvedLang(){return(()=>{let[e]=D.split("-");return M[D]?D:M[e]?e:"en"})()}attributeChangedCallback(e,t,i){var a,r,n,s,o,d,u,c,h,m,p,b;if(super.attributeChangedCallback(e,t,i),e===tY)i!==t&&""===i?(this.hasAttribute(tU)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys(),tx(this,uk,uT).call(this);else if(e===tU)tI(this,ud).value=i,tx(this,uk,uT).call(this);else if(e===tD&&i!==t)null==(a=tI(this,uc))||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(tD)}});else if(e===tO)null==(n=tI(this,uc))||n.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(r=this.getAttribute(tO))?r:void 0}});else if(e===tK&&i!==t)null==(s=tI(this,uc))||s.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(tK)?+this.getAttribute(tK):void 0,seekToLiveOffset:this.hasAttribute(tX)?+this.getAttribute(tX):this.hasAttribute(tK)?+this.getAttribute(tK):void 0}});else if(e===tX&&i!==t)null==(o=tI(this,uc))||o.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(tX)?+this.getAttribute(tX):this.hasAttribute(tK)?+this.getAttribute(tK):void 0}});else if(e===tj)null==(d=tI(this,uc))||d.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(tj)}});else if(e===tN){let e=i?null==(u=this.getRootNode())?void 0:u.getElementById(i):void 0;tL(this,uu,e),null==(c=tI(this,uc))||c.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===tV&&i!==t?(D=i,null==(h=tI(this,uc))||h.dispatch({type:"optionschangerequest",detail:{mediaLang:i}})):e===tF&&i!==t?null==(m=tI(this,uc))||m.dispatch({type:l.MEDIA_LOOP_REQUEST,detail:null!=i}):e===tZ&&i!==t?null==(p=tI(this,uc))||p.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(tZ)}}):e===tz&&i!==t&&(null==(b=tI(this,uc))||b.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(tz)}}))}connectedCallback(){var e,t,i;this.associateElement(this),tI(this,uc)||this.hasAttribute(tG)||tx(this,ug,uf).call(this),null==(e=tI(this,uc))||e.dispatch({type:"documentelementchangerequest",detail:Y}),null==(t=tI(this,uc))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement}),super.connectedCallback(),tI(this,uc)&&!tI(this,up)&&tL(this,up,null==(i=tI(this,uc))?void 0:i.subscribe(tI(this,um))),void 0!==tI(this,ub)&&tI(this,uc)&&this.media&&setTimeout(()=>{var e,t,i;(null==(t=null==(e=this.media)?void 0:e.textTracks)?void 0:t.length)&&(null==(i=tI(this,uc))||i.dispatch({type:l.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:tI(this,ub)}))},0),this.hasAttribute(tY)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,t,i,a,r,n;if(null==(e=super.disconnectedCallback)||e.call(this),this.disableHotkeys(),tI(this,uc)){let e=tI(this,uc).getState();tL(this,ub,!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)),null==(i=tI(this,uc))||i.dispatch({type:"fullscreenelementchangerequest",detail:void 0}),null==(a=tI(this,uc))||a.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(r=tI(this,uc))||r.dispatch({type:l.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}tI(this,up)&&(null==(n=tI(this,up))||n.call(this),tL(this,up,void 0)),this.unassociateElement(this),tI(this,uh)&&(tI(this,uh).remove(),tL(this,uh,null))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=tI(this,uc))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=tI(this,uc))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){t6(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let i=t7(e,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(l).forEach(t=>{e.addEventListener(t,tI(this,uv))}),t.set(e,i)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(l).forEach(t=>{e.removeEventListener(t,tI(this,uv))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),tI(this,uc)&&Object.entries(tI(this,uc).getState()).forEach(([t,i])=>{t6([e],t,i)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",tx(this,uy,u_))}disableHotkeys(){this.removeEventListener("keydown",tx(this,uy,u_)),this.removeEventListener("keyup",tI(this,uE))}get hotkeys(){return tI(this,ud)}set hotkeys(e){eg(this,tU,e)}keyboardShortcutHandler(e){var t,i,a,r,n,s,o,d,u;let c,h,m,p=e.target;if(!((null!=(a=null!=(i=null==(t=p.getAttribute(tq))?void 0:t.split(" "))?i:null==p?void 0:p.keysUsed)?a:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||tI(this,ud).contains(ez(e.key)))&&!(e.shiftKey&&("/"===e.key||"?"===e.key)&&tI(this,ud).contains("noshift+/")))switch(e.key){case" ":case"k":c=tI(this,uc).getState().mediaPaused?l.MEDIA_PLAY_REQUEST:l.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new G.CustomEvent(c,{composed:!0,bubbles:!0}));break;case"m":c="off"===this.mediaStore.getState().mediaVolumeLevel?l.MEDIA_UNMUTE_REQUEST:l.MEDIA_MUTE_REQUEST,this.dispatchEvent(new G.CustomEvent(c,{composed:!0,bubbles:!0}));break;case"f":c=this.mediaStore.getState().mediaIsFullscreen?l.MEDIA_EXIT_FULLSCREEN_REQUEST:l.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new G.CustomEvent(c,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new G.CustomEvent(l.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{let e=this.hasAttribute(tH)?+this.getAttribute(tH):10;h=Math.max((null!=(r=this.mediaStore.getState().mediaCurrentTime)?r:0)-e,0),m=new G.CustomEvent(l.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:h}),this.dispatchEvent(m);break}case"ArrowRight":case"l":{let e=this.hasAttribute(tW)?+this.getAttribute(tW):10;h=Math.max((null!=(n=this.mediaStore.getState().mediaCurrentTime)?n:0)+e,0),m=new G.CustomEvent(l.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:h}),this.dispatchEvent(m);break}case"ArrowUp":{let e=this.hasAttribute(t$)?+this.getAttribute(t$):.025;h=Math.min((null!=(s=this.mediaStore.getState().mediaVolume)?s:1)+e,1),m=new G.CustomEvent(l.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:h}),this.dispatchEvent(m);break}case"ArrowDown":{let e=this.hasAttribute(tB)?+this.getAttribute(tB):.025;h=Math.max((null!=(o=this.mediaStore.getState().mediaVolume)?o:1)-e,0),m=new G.CustomEvent(l.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:h}),this.dispatchEvent(m);break}case"<":h=Math.max((null!=(d=this.mediaStore.getState().mediaPlaybackRate)?d:1)-.25,.25).toFixed(2),m=new G.CustomEvent(l.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:h}),this.dispatchEvent(m);break;case">":h=Math.min((null!=(u=this.mediaStore.getState().mediaPlaybackRate)?u:1)+.25,2).toFixed(2),m=new G.CustomEvent(l.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:h}),this.dispatchEvent(m);break;case"/":case"?":e.shiftKey&&tx(this,uw,uA).call(this);break;case"p":c=this.mediaStore.getState().mediaIsPip?l.MEDIA_EXIT_PIP_REQUEST:l.MEDIA_ENTER_PIP_REQUEST,m=new G.CustomEvent(c,{composed:!0,bubbles:!0}),this.dispatchEvent(m)}}}ud=new WeakMap,uu=new WeakMap,uc=new WeakMap,uh=new WeakMap,um=new WeakMap,up=new WeakMap,uv=new WeakMap,ub=new WeakMap,ug=new WeakSet,uf=function(){var e;this.mediaStore=(({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=tA,requestMap:r=tC,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{let o,l=[],d={options:{...n}},u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),c=e=>{void 0==e||tE(e,u)||(u=Object.freeze({...u,...e}),l.forEach(e=>e(u)))},h=()=>{c(Object.entries(a).reduce((e,[t,{get:i}])=>(e[t]=i(d),e),{}))},m={},p=async(e,t)=>{var i,r,n,u,p,b,g,f,E,y,_,k,T,w,A,C;let S=!!o;if(o={...d,...null!=o?o:{},...e},S)return;await tT(...Object.values(e));let I=l.length>0&&0===t&&s,R=d.media!==o.media,L=(null==(i=d.media)?void 0:i.textTracks)!==(null==(r=o.media)?void 0:r.textTracks),x=(null==(n=d.media)?void 0:n.videoRenditions)!==(null==(u=o.media)?void 0:u.videoRenditions),M=(null==(p=d.media)?void 0:p.audioTracks)!==(null==(b=o.media)?void 0:b.audioTracks),D=(null==(g=d.media)?void 0:g.remote)!==(null==(f=o.media)?void 0:f.remote),O=d.documentElement!==o.documentElement,P=!!d.media&&(R||I),N=!!(null==(E=d.media)?void 0:E.textTracks)&&(L||I),U=!!(null==(y=d.media)?void 0:y.videoRenditions)&&(x||I),H=!!(null==(_=d.media)?void 0:_.audioTracks)&&(M||I),W=!!(null==(k=d.media)?void 0:k.remote)&&(D||I),B=!!d.documentElement&&(O||I),$=P||N||U||H||W||B,q=0===l.length&&1===t&&s,V=!!o.media&&(R||q),F=!!(null==(T=o.media)?void 0:T.textTracks)&&(L||q),K=!!(null==(w=o.media)?void 0:w.videoRenditions)&&(x||q),j=!!(null==(A=o.media)?void 0:A.audioTracks)&&(M||q),G=!!(null==(C=o.media)?void 0:C.remote)&&(D||q),Y=!!o.documentElement&&(O||q),z=V||F||K||j||G||Y;if(!($||z)){Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0;return}Object.entries(a).forEach(([e,{get:t,mediaEvents:i=[],textTracksEvents:a=[],videoRenditionsEvents:r=[],audioTracksEvents:n=[],remoteEvents:s=[],rootEvents:l=[],stateOwnersUpdateHandlers:u=[]}])=>{let h;m[e]||(m[e]={});let p=i=>{c({[e]:t(d,i)})};h=m[e].mediaEvents,i.forEach(t=>{h&&P&&(d.media.removeEventListener(t,h),m[e].mediaEvents=void 0),V&&(o.media.addEventListener(t,p),m[e].mediaEvents=p)}),h=m[e].textTracksEvents,a.forEach(t=>{var i,a;h&&N&&(null==(i=d.media.textTracks)||i.removeEventListener(t,h),m[e].textTracksEvents=void 0),F&&(null==(a=o.media.textTracks)||a.addEventListener(t,p),m[e].textTracksEvents=p)}),h=m[e].videoRenditionsEvents,r.forEach(t=>{var i,a;h&&U&&(null==(i=d.media.videoRenditions)||i.removeEventListener(t,h),m[e].videoRenditionsEvents=void 0),K&&(null==(a=o.media.videoRenditions)||a.addEventListener(t,p),m[e].videoRenditionsEvents=p)}),h=m[e].audioTracksEvents,n.forEach(t=>{var i,a;h&&H&&(null==(i=d.media.audioTracks)||i.removeEventListener(t,h),m[e].audioTracksEvents=void 0),j&&(null==(a=o.media.audioTracks)||a.addEventListener(t,p),m[e].audioTracksEvents=p)}),h=m[e].remoteEvents,s.forEach(t=>{var i,a;h&&W&&(null==(i=d.media.remote)||i.removeEventListener(t,h),m[e].remoteEvents=void 0),G&&(null==(a=o.media.remote)||a.addEventListener(t,p),m[e].remoteEvents=p)}),h=m[e].rootEvents,l.forEach(t=>{h&&B&&(d.documentElement.removeEventListener(t,h),m[e].rootEvents=void 0),Y&&(o.documentElement.addEventListener(t,p),m[e].rootEvents=p)});let b=m[e].stateOwnersUpdateHandlers;if(b&&$&&(Array.isArray(b)?b:[b]).forEach(e=>{"function"==typeof e&&e()}),z){let t=u.map(e=>e(p,o)).filter(e=>"function"==typeof e);m[e].stateOwnersUpdateHandlers=1===t.length?t[0]:t}else $&&(m[e].stateOwnersUpdateHandlers=void 0)}),Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0};return p({media:e,fullscreenElement:t,documentElement:i,options:n}),{dispatch(e){let{type:t,detail:i}=e;r[t]&&null==u.mediaErrorCode?c(r[t](a,d,e)):"mediaelementchangerequest"===t?p({media:i}):"fullscreenelementchangerequest"===t?p({fullscreenElement:i}):"documentelementchangerequest"===t?p({documentElement:i}):"optionschangerequest"===t&&(Object.entries(null!=i?i:{}).forEach(([e,t])=>{d.options[e]=t}),h())},getState:()=>u,subscribe:e=>(p({},l.length+1),l.push(e),e(u),()=>{let t=l.indexOf(e);t>=0&&(p({},l.length-1),l.splice(t,1))})}})({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(tD),defaultDuration:this.hasAttribute(tP)?+this.getAttribute(tP):void 0,defaultStreamType:null!=(e=this.getAttribute(tO))?e:void 0,liveEdgeOffset:this.hasAttribute(tK)?+this.getAttribute(tK):void 0,seekToLiveOffset:this.hasAttribute(tX)?+this.getAttribute(tX):this.hasAttribute(tK)?+this.getAttribute(tK):void 0,noAutoSeekToLive:this.hasAttribute(tj),noVolumePref:this.hasAttribute(tZ),noMutedPref:this.hasAttribute(tz),noSubtitlesLangPref:this.hasAttribute(tQ)}})},uE=new WeakMap,uy=new WeakSet,u_=function(e){var t;let{metaKey:i,altKey:a,ctrlKey:r,key:n,shiftKey:s}=e,o=s&&("/"===n||"?"===n);if(o&&(null==(t=tI(this,uh))?void 0:t.open)||i||a||r||!o&&!tM.includes(n))return void this.removeEventListener("keyup",tI(this,uE));let l=e.target,d=l instanceof HTMLElement&&("media-volume-range"===l.tagName.toLowerCase()||"media-time-range"===l.tagName.toLowerCase());![" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(n)||tI(this,ud).contains(ez(n))||d||e.preventDefault(),this.addEventListener("keyup",tI(this,uE),{once:!0})},uk=new WeakSet,uT=function(){tI(this,uh)&&(tI(this,uh).hotkeys=tI(this,ud).value||void 0,(this.noHotkeys||tI(this,ud).contains("noshift+/"))&&(tI(this,uh).open=!1))},uw=new WeakSet,uA=function(){tI(this,uh)||(tL(this,uh,Y.createElement("media-keyboard-shortcuts-dialog")),tx(this,uk,uT).call(this),this.appendChild(tI(this,uh))),tI(this,uh).open=!0};let t0=Object.values(h),t1=Object.values(u),t2=e=>{var t,i,a,r;let{observedAttributes:n}=e.constructor;!n&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(G.customElements.upgrade(e),{observedAttributes:n}=e.constructor);let s=null==(r=null==(a=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,d.MEDIA_CHROME_ATTRIBUTES))?void 0:a.split)?void 0:r.call(a,/\s+/);return Array.isArray(n||s)?(n||s).filter(e=>t0.includes(e)):[]},t3=e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&G.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof G.customElements.get(e.nodeName.toLowerCase()))&&G.customElements.upgrade(e),t1.some(t=>t in e)||!!t2(e).length},t4=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},t5={[h.MEDIA_SUBTITLES_LIST]:e8,[h.MEDIA_SUBTITLES_SHOWING]:e8,[h.MEDIA_SEEKABLE]:t4,[h.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(t4).join(" "),[h.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[h.MEDIA_RENDITION_LIST]:function(e){return null==e?void 0:e.map(T).join(" ")},[h.MEDIA_AUDIO_TRACK_LIST]:function(e){return null==e?void 0:e.map(A).join(" ")}},t9=async(e,t,i)=>{var a,r;if(e.isConnected||await R(0),"boolean"==typeof i||null==i)return ev(e,t,i);if("number"==typeof i)return em(e,t,i);if("string"==typeof i)return eg(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let n=null!=(r=null==(a=t5[t])?void 0:a.call(t5,i))?r:i;return e.setAttribute(t,n)},t8=(e,t)=>{var i;if(null==(i=e.closest)?void 0:i.call(e,'*[slot="media"]'))return;let a=(e,t)=>{var i,a;t3(e)&&t(e);let{children:r=[]}=null!=e?e:{};[...r,...null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[]].forEach(e=>t8(e,t))},r=null==e?void 0:e.nodeName.toLowerCase();r.includes("-")&&!t3(e)?G.customElements.whenDefined(r).then(()=>{a(e,t)}):a(e,t)},t6=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=t2(e),r=t.toLowerCase();a.includes(r)&&t9(e,r,i)})},t7=(e,t,i)=>{t8(e,t);let a=e=>{var i;t(null!=(i=null==e?void 0:e.composedPath()[0])?i:e.target)},r=e=>{var t;i(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)};e.addEventListener(l.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(l.UNREGISTER_MEDIA_STATE_RECEIVER,r);let n=[],s=e=>{let a=e.target;"media"!==a.name&&(n.forEach(e=>t8(e,i)),(n=[...a.assignedElements({flatten:!0})]).forEach(e=>t8(e,t)))};e.addEventListener("slotchange",s);let o=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:a=[],removedNodes:r=[],type:n,target:s,attributeName:o}=e;"childList"===n?(Array.prototype.forEach.call(a,e=>t8(e,t)),Array.prototype.forEach.call(r,e=>t8(e,i))):"attributes"===n&&o===d.MEDIA_CHROME_ATTRIBUTES&&(t3(s)?t(s):i(s))})});return o.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{t8(e,i),e.removeEventListener("slotchange",s),o.disconnect(),e.removeEventListener(l.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(l.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};G.customElements.get("media-controller")||G.customElements.define("media-controller",tJ);let ie="placement",it="bounds";class ii extends G.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!ed(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let t=this.placement;if("left"===t||"right"===t)return void this.style.removeProperty("--media-tooltip-offset-x");let i=getComputedStyle(this),a=null!=(e=es(this,"#"+this.bounds))?e:et(this);if(!a)return;let{x:r,width:n}=a.getBoundingClientRect(),{x:s,width:o}=this.getBoundingClientRect(),l=i.getPropertyValue("--media-tooltip-offset-x"),d=l?parseFloat(l.replace("px","")):0,u=i.getPropertyValue("--media-tooltip-container-margin"),c=u?parseFloat(u.replace("px","")):0,h=s-r+d-c,m=s+o-(r+n)+d+c;h<0?this.style.setProperty("--media-tooltip-offset-x",`${h}px`):m>0?this.style.setProperty("--media-tooltip-offset-x",`${m}px`):this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ee(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[ie,it]}get placement(){return eb(this,ie)}set placement(e){eg(this,ie,e)}get bounds(){return eb(this,it)}set bounds(e){eg(this,it,e)}}ii.shadowRootOptions={mode:"open"},ii.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `},G.customElements.get("media-tooltip")||G.customElements.define("media-tooltip",ii);var ia=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ir=(e,t,i)=>(ia(e,t,"read from private field"),i?i.call(e):t.get(e)),is=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},io=(e,t,i,a)=>(ia(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),il=(e,t,i)=>(ia(e,t,"access private method"),i);let id="tooltipplacement",iu="disabled",ic="notooltip";class ih extends G.HTMLElement{constructor(){if(super(),is(this,uI),is(this,uD),is(this,uC,void 0),this.preventClick=!1,this.tooltipEl=null,is(this,uS,e=>{this.preventClick||this.handleClick(e),setTimeout(ir(this,uL),0)}),is(this,uL,()=>{var e,t;null==(t=null==(e=this.tooltipEl)?void 0:e.updateXOffset)||t.call(e)}),is(this,ux,e=>{let{key:t}=e;this.keysUsed.includes(t)?this.preventClick||this.handleClick(e):this.removeEventListener("keyup",ir(this,ux))}),is(this,uM,e=>{let{metaKey:t,altKey:i,key:a}=e;t||i||!this.keysUsed.includes(a)?this.removeEventListener("keyup",ir(this,ux)):this.addEventListener("keyup",ir(this,ux),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ee(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",id,d.MEDIA_CONTROLLER,h.MEDIA_LANG]}enable(){this.addEventListener("click",ir(this,uS)),this.addEventListener("keydown",ir(this,uM)),this.tabIndex=0}disable(){this.removeEventListener("click",ir(this,uS)),this.removeEventListener("keydown",ir(this,uM)),this.removeEventListener("keyup",ir(this,ux)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===d.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=ir(this,uC))?void 0:a.unassociateElement)||r.call(a,this),io(this,uC,null)),i&&this.isConnected&&(io(this,uC,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=ir(this,uC))?void 0:s.associateElement)||o.call(s,this))):"disabled"===e&&i!==t?null==i?this.enable():this.disable():e===id&&this.tooltipEl&&i!==t?this.tooltipEl.placement=i:e===h.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),il(this,uI,uR).call(this)&&ir(this,uL).call(this)}connectedCallback(){var e,t,i;let{style:a}=eu(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let r=this.getAttribute(d.MEDIA_CONTROLLER);r&&(io(this,uC,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=ir(this,uC))?void 0:t.associateElement)||i.call(t,this)),G.customElements.whenDefined("media-tooltip").then(()=>il(this,uD,uO).call(this))}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=ir(this,uC))?void 0:e.unassociateElement)||t.call(e,this),io(this,uC,null),this.removeEventListener("mouseenter",ir(this,uL)),this.removeEventListener("focus",ir(this,uL)),this.removeEventListener("click",ir(this,uS))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return eb(this,id)}set tooltipPlacement(e){eg(this,id,e)}get mediaController(){return eb(this,d.MEDIA_CONTROLLER)}set mediaController(e){eg(this,d.MEDIA_CONTROLLER,e)}get disabled(){return ep(this,iu)}set disabled(e){ev(this,iu,e)}get noTooltip(){return ep(this,ic)}set noTooltip(e){ev(this,ic,e)}handleClick(e){}}uC=new WeakMap,uS=new WeakMap,uI=new WeakSet,uR=function(){try{return this.matches(":hover, :focus-visible")}catch{return this.matches(":hover, :focus")}},uL=new WeakMap,ux=new WeakMap,uM=new WeakMap,uD=new WeakSet,uO=function(){this.addEventListener("mouseenter",ir(this,uL)),this.addEventListener("focus",ir(this,uL)),this.addEventListener("click",ir(this,uS));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},ih.shadowRootOptions={mode:"open"},ih.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      slot[name="icon"] {
        display: inline-flex;
        align-items: center;
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${ii.shadowRootOptions.mode}">
          ${ii.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `},ih.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},ih.getTooltipContentHTML=function(){return""},G.customElements.get("media-chrome-button")||G.customElements.define("media-chrome-button",ih);let im=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,ip=e=>{let t=e.mediaIsAirplaying?O("stop airplay"):O("start airplay");e.setAttribute("aria-label",t)};class iv extends ih{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_IS_AIRPLAYING,h.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),ip(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_IS_AIRPLAYING&&ip(this)}get mediaIsAirplaying(){return ep(this,h.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){ev(this,h.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return eb(this,h.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){eg(this,h.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new G.CustomEvent(l.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}iv.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${h.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${h.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${h.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${h.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${im}</slot>
      <slot name="exit">${im}</slot>
    </slot>
  `},iv.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${O("start airplay")}</slot>
    <slot name="tooltip-exit">${O("stop airplay")}</slot>
  `},G.customElements.get("media-airplay-button")||G.customElements.define("media-airplay-button",iv);let ib=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,ig=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,iE=e=>{e.setAttribute("aria-checked",tt(e).toString())};class iy extends ih{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_SUBTITLES_LIST,h.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",O("closed captions")),iE(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_SUBTITLES_SHOWING&&iE(this)}get mediaSubtitlesList(){return i_(this,h.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){ik(this,h.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return i_(this,h.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){ik(this,h.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new G.CustomEvent(l.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}iy.getSlotTemplateHTML=function(e){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${ib}</slot>
      <slot name="off">${ig}</slot>
    </slot>
  `},iy.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enable">${O("Enable captions")}</slot>
    <slot name="tooltip-disable">${O("Disable captions")}</slot>
  `};let i_=(e,t)=>{let i=e.getAttribute(t);return i?e4(i):[]},ik=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=e8(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};G.customElements.get("media-captions-button")||G.customElements.define("media-captions-button",iy);let iT=e=>{let t=e.mediaIsCasting?O("stop casting"):O("start casting");e.setAttribute("aria-label",t)};class iw extends ih{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_IS_CASTING,h.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),iT(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_IS_CASTING&&iT(this)}get mediaIsCasting(){return ep(this,h.MEDIA_IS_CASTING)}set mediaIsCasting(e){ev(this,h.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return eb(this,h.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){eg(this,h.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?l.MEDIA_EXIT_CAST_REQUEST:l.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new G.CustomEvent(e,{composed:!0,bubbles:!0}))}}iw.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${h.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${h.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${h.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${h.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
    </slot>
  `},iw.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${O("Start casting")}</slot>
    <slot name="tooltip-exit">${O("Stop casting")}</slot>
  `},G.customElements.get("media-cast-button")||G.customElements.define("media-cast-button",iw);var iA=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iC=(e,t,i)=>(iA(e,t,"read from private field"),i?i.call(e):t.get(e)),iS=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},iI=(e,t,i,a)=>(iA(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),iR=(e,t,i)=>(iA(e,t,"access private method"),i);class iL extends G.HTMLElement{constructor(){if(super(),iS(this,uF),iS(this,uj),iS(this,uY),iS(this,uQ),iS(this,uX),iS(this,u0),iS(this,u2),iS(this,u4),iS(this,uP,void 0),iS(this,uN,void 0),iS(this,uU,void 0),iS(this,uH,void 0),iS(this,uW,{}),iS(this,uB,[]),iS(this,u$,()=>{if(this.range.matches(":focus-visible")){let{style:e}=eu(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),iS(this,uq,()=>{let{style:e}=eu(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),iS(this,uV,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ee(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.container=this.shadowRoot.querySelector("#container"),iI(this,uU,this.shadowRoot.querySelector("#startpoint")),iI(this,uH,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",d.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===d.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=iC(this,uP))?void 0:a.unassociateElement)||r.call(a,this),iI(this,uP,null)),i&&this.isConnected&&(iI(this,uP,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=iC(this,uP))?void 0:s.associateElement)||o.call(s,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?(this.range.removeAttribute(e),iR(this,uj,uG).call(this)):(this.range.setAttribute(e,i),iR(this,uY,uz).call(this)))}connectedCallback(){var e,t,i;let{style:a}=eu(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),iC(this,uW).pointer=eu(this.shadowRoot,"#pointer"),iC(this,uW).progress=eu(this.shadowRoot,"#progress"),iC(this,uW).thumb=eu(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),iC(this,uW).activeSegment=eu(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let r=this.getAttribute(d.MEDIA_CONTROLLER);r&&(iI(this,uP,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=iC(this,uP))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",iC(this,u$)),this.shadowRoot.addEventListener("focusout",iC(this,uq)),iR(this,uj,uG).call(this),X(this.container,iC(this,uV))}disconnectedCallback(){var e,t;iR(this,uY,uz).call(this),null==(t=null==(e=iC(this,uP))?void 0:e.unassociateElement)||t.call(e,this),iI(this,uP,null),this.shadowRoot.removeEventListener("focusin",iC(this,u$)),this.shadowRoot.removeEventListener("focusout",iC(this,uq)),J(this.container,iC(this,uV))}updatePointerBar(e){var t;null==(t=iC(this,uW).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let i=100*this.range.valueAsNumber;null==(e=iC(this,uW).progress)||e.style.setProperty("width",`${i}%`),null==(t=iC(this,uW).thumb)||t.style.setProperty("left",`${i}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;let i=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];iI(this,uB,[...i]);let a=i.pop();for(let[e,r]of i.entries()){let[n,s]=[0===e,e===i.length-1],o=n?"calc(var(--segments-gap) / -1)":`${100*r}%`,l=s?a:i[e+1],d=`calc(${(l-r)*100}%${n||s?"":" - var(--segments-gap)"})`,u=Y.createElementNS("http://www.w3.org/2000/svg","rect"),c=ec(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);c.style.setProperty("x",o),c.style.setProperty("width",d),t.append(u)}}getPointerRatio(e){var t,i,a,r;let n,s,o;return t=e.clientX,i=e.clientY,a=iC(this,uU).getBoundingClientRect(),n=(r=iC(this,uH).getBoundingClientRect()).x-a.x,0==(o=n*n+(s=r.y-a.y)*s)?0:Math.max(0,Math.min(1,((t-a.x)*n+(i-a.y)*s)/o))}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":iR(this,u4,u5).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":iR(this,uX,uJ).call(this,e);break;case"pointerdown":iR(this,uQ,uZ).call(this,e);break;case"pointerup":iR(this,u0,u1).call(this);break;case"pointerleave":iR(this,u2,u3).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}uP=new WeakMap,uN=new WeakMap,uU=new WeakMap,uH=new WeakMap,uW=new WeakMap,uB=new WeakMap,u$=new WeakMap,uq=new WeakMap,uV=new WeakMap,uF=new WeakSet,uK=function(e){let t=iC(this,uW).activeSegment;if(!t)return;let i=this.getPointerRatio(e),a=iC(this,uB).findIndex((e,t,a)=>{let r=a[t+1];return null!=r&&i>=e&&i<=r}),r=`#segments-clipping rect:nth-child(${a+1})`;t.selectorText==r&&t.style.transform||(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},uj=new WeakSet,uG=function(){!this.hasAttribute("disabled")&&this.isConnected&&(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},uY=new WeakSet,uz=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),this.removeEventListener("pointerleave",this),null==(e=G.window)||e.removeEventListener("pointerup",this),null==(t=G.window)||t.removeEventListener("pointermove",this)},uQ=new WeakSet,uZ=function(e){var t;iI(this,uN,e.composedPath().includes(this.range)),null==(t=G.window)||t.addEventListener("pointerup",this,{once:!0})},uX=new WeakSet,uJ=function(e){var t;"mouse"!==e.pointerType&&iR(this,uQ,uZ).call(this,e),this.addEventListener("pointerleave",this,{once:!0}),null==(t=G.window)||t.addEventListener("pointermove",this)},u0=new WeakSet,u1=function(){var e;null==(e=G.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},u2=new WeakSet,u3=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=G.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=iC(this,uW).activeSegment)||t.style.removeProperty("transform")},u4=new WeakSet,u5=function(e){("pen"!==e.pointerType||0!==e.buttons)&&(this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),iR(this,uF,uK).call(this,e),this.dragging&&("mouse"!==e.pointerType||!iC(this,uN))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))},iL.shadowRootOptions={mode:"open"},iL.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, 0);
        height: var(--media-time-range-hover-height, max(100% , 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, 0);
          height: var(--media-time-range-hover-height, max(100%, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }

      /* Visible label for accessibility - positioned off-screen but technically visible (Firefox requires visible labels) */
      #range-label {
        position: absolute;
        left: -10000px;
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        pointer-events: none;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments" aria-hidden="true"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
        <input id="range" type="range" min="0" max="1" step="any" value="0">
        <label for="range" id="range-label"></label>

      ${this.getContainerTemplateHTML(e)}
    </div>
    <div id="rightgap"></div>
  `},iL.getContainerTemplateHTML=function(e){return""},G.customElements.get("media-chrome-range")||G.customElements.define("media-chrome-range",iL);var ix=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iM=(e,t,i)=>(ix(e,t,"read from private field"),i?i.call(e):t.get(e)),iD=(e,t,i,a)=>(ix(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class iO extends G.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,u9,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ee(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[d.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===d.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=iM(this,u9))?void 0:a.unassociateElement)||r.call(a,this),iD(this,u9,null)),i&&this.isConnected&&(iD(this,u9,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=iM(this,u9))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(d.MEDIA_CONTROLLER);a&&(iD(this,u9,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=iM(this,u9))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=iM(this,u9))?void 0:e.unassociateElement)||t.call(e,this),iD(this,u9,null)}}u9=new WeakMap,iO.shadowRootOptions={mode:"open"},iO.getTemplateHTML=function(e){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `},G.customElements.get("media-control-bar")||G.customElements.define("media-control-bar",iO);var iP=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iN=(e,t,i)=>(iP(e,t,"read from private field"),i?i.call(e):t.get(e)),iU=(e,t,i,a)=>(iP(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class iH extends G.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,u8,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ee(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[d.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===d.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=iN(this,u8))?void 0:a.unassociateElement)||r.call(a,this),iU(this,u8,null)),i&&this.isConnected&&(iU(this,u8,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=iN(this,u8))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let{style:a}=eu(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(d.MEDIA_CONTROLLER);r&&(iU(this,u8,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=iN(this,u8))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=iN(this,u8))?void 0:e.unassociateElement)||t.call(e,this),iU(this,u8,null)}}u8=new WeakMap,iH.shadowRootOptions={mode:"open"},iH.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}
  `},iH.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},G.customElements.get("media-text-display")||G.customElements.define("media-text-display",iH);var iW=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iB=(e,t,i)=>(iW(e,t,"read from private field"),i?i.call(e):t.get(e));class i$ extends iH{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,u6,void 0),((e,t,i,a)=>(iW(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,u6,this.shadowRoot.querySelector("slot")),iB(this,u6).textContent=H(null!=(e=this.mediaDuration)?e:0)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===h.MEDIA_DURATION&&(iB(this,u6).textContent=H(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return eh(this,h.MEDIA_DURATION)}set mediaDuration(e){em(this,h.MEDIA_DURATION,e)}}u6=new WeakMap,i$.getSlotTemplateHTML=function(e,t){return`
    <slot>${H(t.mediaDuration)}</slot>
  `},G.customElements.get("media-duration-display")||G.customElements.define("media-duration-display",i$);let iq={2:O("Network Error"),3:O("Decode Error"),4:O("Source Not Supported"),5:O("Encryption Error")},iV={2:O("A network error caused the media download to fail."),3:O("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:O("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:O("The media is encrypted and there are no keys to decrypt it.")},iF=e=>{var t,i;return 1===e.code?null:{title:null!=(t=iq[e.code])?t:`Error ${e.code}`,message:null!=(i=iV[e.code])?i:e.message}};var iK=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};function ij(e){var t;let{title:i,message:a}=null!=(t=iF(e))?t:{},r=x(e.code),n="";return i&&(n+=`<slot name="error-${r}-title"><h3>${x(i)}</h3></slot>`),a&&(n+=`<slot name="error-${r}-message"><p>${x(a)}</p></slot>`),n}let iG=[h.MEDIA_ERROR_CODE,h.MEDIA_ERROR_MESSAGE];class iY extends eF{constructor(){super(...arguments),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,u7,null)}static get observedAttributes(){return[...super.observedAttributes,...iG]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),!iG.includes(e))return;let r=null!=(a=this.mediaError)?a:{code:this.mediaErrorCode,message:this.mediaErrorMessage};if(this.open=r.code&&null!==iF(r),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(r),!this.hasAttribute("aria-label"))){let{title:e}=iF(r);e&&this.setAttribute("aria-label",e)}}get mediaError(){var e,t;return iK(this,e=u7,"read from private field"),t?t.call(this):e.get(this)}set mediaError(e){var t,i;iK(this,t=u7,"write to private field"),i?i.call(this,e):t.set(this,e)}get mediaErrorCode(){return eh(this,"mediaerrorcode")}set mediaErrorCode(e){em(this,"mediaerrorcode",e)}get mediaErrorMessage(){return eb(this,"mediaerrormessage")}set mediaErrorMessage(e){eg(this,"mediaerrormessage",e)}}u7=new WeakMap,iY.getSlotTemplateHTML=function(e){let t=+e.mediaerrorcode;return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${t}" id="content">
      ${ij({code:t,message:e.mediaerrormessage})}
    </slot>
  `},iY.formatErrorMessage=ij,G.customElements.get("media-error-dialog")||G.customElements.define("media-error-dialog",iY);var iz=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};let iQ=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,iZ=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,iX=e=>{let t=e.mediaIsFullscreen?O("exit fullscreen mode"):O("enter fullscreen mode");e.setAttribute("aria-label",t)};class iJ extends ih{constructor(){super(...arguments),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,ce,null)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_IS_FULLSCREEN,h.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),iX(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_IS_FULLSCREEN&&iX(this)}get mediaFullscreenUnavailable(){return eb(this,h.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){eg(this,h.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return ep(this,h.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){ev(this,h.MEDIA_IS_FULLSCREEN,e)}handleClick(e){var t,i,a,r;iz(this,t=ce,"write to private field"),i?i.call(this,e):t.set(this,e);let n=(iz(this,a=ce,"read from private field"),(r?r.call(this):a.get(this))instanceof PointerEvent),s=this.mediaIsFullscreen?new G.CustomEvent(l.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new G.CustomEvent(l.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:n});this.dispatchEvent(s)}}ce=new WeakMap,iJ.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${h.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${h.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${h.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${h.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${iQ}</slot>
      <slot name="exit">${iZ}</slot>
    </slot>
  `},iJ.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${O("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${O("Exit fullscreen mode")}</slot>
  `},G.customElements.get("media-fullscreen-button")||G.customElements.define("media-fullscreen-button",iJ);let{MEDIA_TIME_IS_LIVE:i0,MEDIA_PAUSED:i1}=h,{MEDIA_SEEK_TO_LIVE_REQUEST:i2,MEDIA_PLAY_REQUEST:i3}=l,i4=e=>{var t;let i=e.mediaPaused||!e.mediaTimeIsLive,a=i?O("seek to live"):O("playing live");e.setAttribute("aria-label",a);let r=null==(t=e.shadowRoot)?void 0:t.querySelector('slot[name="text"]');r&&(r.textContent=O("live")),i?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class i5 extends ih{static get observedAttributes(){return[...super.observedAttributes,i0,i1]}connectedCallback(){super.connectedCallback(),i4(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),i4(this)}get mediaPaused(){return ep(this,h.MEDIA_PAUSED)}set mediaPaused(e){ev(this,h.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return ep(this,h.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){ev(this,h.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new G.CustomEvent(i2,{composed:!0,bubbles:!0})),this.hasAttribute(i1)&&this.dispatchEvent(new G.CustomEvent(i3,{composed:!0,bubbles:!0})))}}i5.getSlotTemplateHTML=function(e){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${i0}]:not([${i1}])) slot[name=indicator] > *,
      :host([${i0}]:not([${i1}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${i0}]:not([${i1}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator"><svg viewBox="0 0 6 12" aria-hidden="true"><circle cx="3" cy="6" r="2"></circle></svg></slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${O("live")}</slot>
  `},G.customElements.get("media-live-button")||G.customElements.define("media-live-button",i5);var i9=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},i8=(e,t,i)=>(i9(e,t,"read from private field"),i?i.call(e):t.get(e)),i6=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},i7=(e,t,i,a)=>(i9(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let ae="loadingdelay",at="noautohide",ai=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;class aa extends G.HTMLElement{constructor(){if(super(),i6(this,ct,void 0),i6(this,ci,500),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ee(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[d.MEDIA_CONTROLLER,h.MEDIA_PAUSED,h.MEDIA_LOADING,ae]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===ae&&t!==i?this.loadingDelay=Number(i):e===d.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=i8(this,ct))?void 0:a.unassociateElement)||r.call(a,this),i7(this,ct,null)),i&&this.isConnected&&(i7(this,ct,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=i8(this,ct))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(d.MEDIA_CONTROLLER);a&&(i7(this,ct,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=i8(this,ct))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=i8(this,ct))?void 0:e.unassociateElement)||t.call(e,this),i7(this,ct,null)}get loadingDelay(){return i8(this,ci)}set loadingDelay(e){i7(this,ci,e);let{style:t}=eu(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return ep(this,h.MEDIA_PAUSED)}set mediaPaused(e){ev(this,h.MEDIA_PAUSED,e)}get mediaLoading(){return ep(this,h.MEDIA_LOADING)}set mediaLoading(e){ev(this,h.MEDIA_LOADING,e)}get mediaController(){return eb(this,d.MEDIA_CONTROLLER)}set mediaController(e){eg(this,d.MEDIA_CONTROLLER,e)}get noAutohide(){return ep(this,at)}set noAutohide(e){ev(this,at,e)}}ct=new WeakMap,ci=new WeakMap,aa.shadowRootOptions={mode:"open"},aa.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${h.MEDIA_LOADING}]:not([${h.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${h.MEDIA_LOADING}]:not([${h.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${h.MEDIA_LOADING}]:not([${h.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${ai}</slot>
    <div id="status" role="status" aria-live="polite">${O("media loading")}</div>
  `},G.customElements.get("media-loading-indicator")||G.customElements.define("media-loading-indicator",aa);let ar=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,an=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,as=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,ao=e=>{let t="off"===e.mediaVolumeLevel?O("unmute"):O("mute");e.setAttribute("aria-label",t)};class al extends ih{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),ao(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_VOLUME_LEVEL&&ao(this)}get mediaVolumeLevel(){return eb(this,h.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){eg(this,h.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?l.MEDIA_UNMUTE_REQUEST:l.MEDIA_MUTE_REQUEST;this.dispatchEvent(new G.CustomEvent(e,{composed:!0,bubbles:!0}))}}al.getSlotTemplateHTML=function(e){return`
    <style>
      :host(:not([${h.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${h.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${h.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${h.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${h.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${h.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${h.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${ar}</slot>
      <slot name="low">${an}</slot>
      <slot name="medium">${an}</slot>
      <slot name="high">${as}</slot>
    </slot>
  `},al.getTooltipContentHTML=function(){return`
    <slot name="tooltip-mute">${O("Mute")}</slot>
    <slot name="tooltip-unmute">${O("Unmute")}</slot>
  `},G.customElements.get("media-mute-button")||G.customElements.define("media-mute-button",al);let ad=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,au=e=>{let t=e.mediaIsPip?O("exit picture in picture mode"):O("enter picture in picture mode");e.setAttribute("aria-label",t)};class ac extends ih{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_IS_PIP,h.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),au(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_IS_PIP&&au(this)}get mediaPipUnavailable(){return eb(this,h.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){eg(this,h.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return ep(this,h.MEDIA_IS_PIP)}set mediaIsPip(e){ev(this,h.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?l.MEDIA_EXIT_PIP_REQUEST:l.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new G.CustomEvent(e,{composed:!0,bubbles:!0}))}}ac.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${h.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${h.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${h.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${h.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${ad}</slot>
      <slot name="exit">${ad}</slot>
    </slot>
  `},ac.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${O("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${O("Exit picture in picture mode")}</slot>
  `},G.customElements.get("media-pip-button")||G.customElements.define("media-pip-button",ac);var ah=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)};let am="rates",ap=[1,1.2,1.5,1.7,2];function av(e){return Math.round(100*e)/100}class ab extends ih{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,ca,new e2(this,am,{defaultValue:ap})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${av(null!=(e=this.mediaPlaybackRate)?e:1)}x`}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PLAYBACK_RATE,am]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===am&&(ah(this,ca).value=i),e===h.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=av(Number.isNaN(e)?1:e);this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",O("Playback rate {playbackRate}",{playbackRate:t}))}}get rates(){return ah(this,ca)}set rates(e){e?Array.isArray(e)?ah(this,ca).value=e.join(" "):"string"==typeof e&&(ah(this,ca).value=e):ah(this,ca).value=""}get mediaPlaybackRate(){return eh(this,h.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){em(this,h.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(ah(this,ca).values(),e=>+e).sort((e,t)=>e-t),a=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:1,r=new G.CustomEvent(l.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}}ca=new WeakMap,ab.getSlotTemplateHTML=function(e){let t=e.mediaplaybackrate?av(+e.mediaplaybackrate):1;return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${t}x</slot>
  `},ab.getTooltipContentHTML=function(){return O("Playback rate")},G.customElements.get("media-playback-rate-button")||G.customElements.define("media-playback-rate-button",ab);let ag=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,af=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,aE=e=>{let t=e.mediaPaused?O("play"):O("pause");e.setAttribute("aria-label",t)};class ay extends ih{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PAUSED,h.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),aE(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===h.MEDIA_PAUSED||e===h.MEDIA_LANG)&&aE(this)}get mediaPaused(){return ep(this,h.MEDIA_PAUSED)}set mediaPaused(e){ev(this,h.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?l.MEDIA_PLAY_REQUEST:l.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new G.CustomEvent(e,{composed:!0,bubbles:!0}))}}ay.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${h.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${h.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${h.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${h.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${ag}</slot>
      <slot name="pause">${af}</slot>
    </slot>
  `},ay.getTooltipContentHTML=function(){return`
    <slot name="tooltip-play">${O("Play")}</slot>
    <slot name="tooltip-pause">${O("Pause")}</slot>
  `},G.customElements.get("media-play-button")||G.customElements.define("media-play-button",ay);let a_="placeholdersrc";class ak extends G.HTMLElement{static get observedAttributes(){return[a_,"src"]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ee(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){if("src"===e&&(null==i?this.image.removeAttribute("src"):this.image.setAttribute("src",i)),e===a_)if(null==i)this.image.style.removeProperty("background-image");else{var a;a=this.image,a.style["background-image"]=`url('${i}')`}}get placeholderSrc(){return eb(this,a_)}set placeholderSrc(e){eg(this,"src",e)}get src(){return eb(this,"src")}set src(e){eg(this,"src",e)}}ak.shadowRootOptions={mode:"open"},ak.getTemplateHTML=function(e){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `},G.customElements.get("media-poster-image")||G.customElements.define("media-poster-image",ak);var aT=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};class aw extends iH{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,cr,void 0),((e,t,i,a)=>(aT(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,cr,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PREVIEW_CHAPTER,h.MEDIA_LANG]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),(e===h.MEDIA_PREVIEW_CHAPTER||e===h.MEDIA_LANG)&&i!==t&&null!=i){var a,r;if((aT(this,a=cr,"read from private field"),r?r.call(this):a.get(this)).textContent=i,""!==i){let e=O("chapter: {chapterName}",{chapterName:i});this.setAttribute("aria-valuetext",e)}else this.removeAttribute("aria-valuetext")}}get mediaPreviewChapter(){return eb(this,h.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){eg(this,h.MEDIA_PREVIEW_CHAPTER,e)}}cr=new WeakMap,G.customElements.get("media-preview-chapter-display")||G.customElements.define("media-preview-chapter-display",aw);var aA=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aC=(e,t,i)=>(aA(e,t,"read from private field"),i?i.call(e):t.get(e)),aS=(e,t,i,a)=>(aA(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class aI extends G.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,cn,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ee(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[d.MEDIA_CONTROLLER,h.MEDIA_PREVIEW_IMAGE,h.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let a=this.getAttribute(d.MEDIA_CONTROLLER);a&&(aS(this,cn,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=aC(this,cn))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=aC(this,cn))?void 0:e.unassociateElement)||t.call(e,this),aS(this,cn,null)}attributeChangedCallback(e,t,i){var a,r,n,s,o;[h.MEDIA_PREVIEW_IMAGE,h.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===d.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=aC(this,cn))?void 0:a.unassociateElement)||r.call(a,this),aS(this,cn,null)),i&&this.isConnected&&(aS(this,cn,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=aC(this,cn))?void 0:s.associateElement)||o.call(s,this)))}get mediaPreviewImage(){return eb(this,h.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){eg(this,h.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(h.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){e?this.setAttribute(h.MEDIA_PREVIEW_COORDS,e.join(" ")):this.removeAttribute(h.MEDIA_PREVIEW_COORDS)}update(){let e,t,i=this.mediaPreviewCoords,a=this.mediaPreviewImage;if(!(i&&a))return;let[r,n,s,o]=i,l=a.split("#")[0],d=getComputedStyle(this),{maxWidth:u,maxHeight:c,minWidth:h,minHeight:m}=d;if("fill"===(d.getPropertyValue("--media-preview-thumbnail-object-fit").trim()||"contain")){let i=parseInt(u)/s,a=parseInt(c)/o,r=parseInt(h)/s,n=parseInt(m)/o;e=i<1?i:Math.max(i,r),t=a<1?a:Math.max(a,n)}else{let i=Math.min(parseInt(u)/s,parseInt(c)/o),a=Math.max(parseInt(h)/s,parseInt(m)/o),r=i<1?i:a>1?a:1;e=r,t=r}let{style:p}=eu(this.shadowRoot,":host"),b=eu(this.shadowRoot,"img").style,g=this.shadowRoot.querySelector("img"),f=1>Math.min(e,t)?"min":"max";p.setProperty(`${f}-width`,"initial","important"),p.setProperty(`${f}-height`,"initial","important"),p.width=`${s*e}px`,p.height=`${o*t}px`;let E=()=>{b.width=`${this.imgWidth*e}px`,b.height=`${this.imgHeight*t}px`,b.display="block"};g.src!==l&&(g.onload=()=>{this.imgWidth=g.naturalWidth,this.imgHeight=g.naturalHeight,E(),g.onload=null},g.src=l,E()),E(),b.transform=`translate(-${r*e}px, -${n*t}px)`}}cn=new WeakMap,aI.shadowRootOptions={mode:"open"},aI.getTemplateHTML=function(e){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `},G.customElements.get("media-preview-thumbnail")||G.customElements.define("media-preview-thumbnail",aI);var aR=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aL=(e,t,i)=>(aR(e,t,"read from private field"),i?i.call(e):t.get(e));class ax extends iH{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,cs,void 0),((e,t,i,a)=>(aR(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,cs,this.shadowRoot.querySelector("slot")),aL(this,cs).textContent=H(0)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_PREVIEW_TIME&&null!=i&&(aL(this,cs).textContent=H(parseFloat(i)))}get mediaPreviewTime(){return eh(this,h.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){em(this,h.MEDIA_PREVIEW_TIME,e)}}cs=new WeakMap,G.customElements.get("media-preview-time-display")||G.customElements.define("media-preview-time-display",ax);let aM="seekoffset";class aD extends ih{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_CURRENT_TIME,aM]}connectedCallback(){super.connectedCallback(),this.seekOffset=eh(this,aM,30)}attributeChangedCallback(e,t,i){var a;super.attributeChangedCallback(e,t,i),a=this.seekOffset,this.setAttribute("aria-label",O("seek back {seekOffset} seconds",{seekOffset:a})),e===aM&&(this.seekOffset=eh(this,aM,30))}get seekOffset(){return eh(this,aM,30)}set seekOffset(e){em(this,aM,e),this.setAttribute("aria-label",O("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),ea(er(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return eh(this,h.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){em(this,h.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new G.CustomEvent(l.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}aD.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${i}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`}</slot>
  `},aD.getTooltipContentHTML=function(){return O("Seek backward")},G.customElements.get("media-seek-backward-button")||G.customElements.define("media-seek-backward-button",aD);let aO="seekoffset";class aP extends ih{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_CURRENT_TIME,aO]}connectedCallback(){super.connectedCallback(),this.seekOffset=eh(this,aO,30)}attributeChangedCallback(e,t,i){var a;super.attributeChangedCallback(e,t,i),a=this.seekOffset,this.setAttribute("aria-label",O("seek forward {seekOffset} seconds",{seekOffset:a})),e===aO&&(this.seekOffset=eh(this,aO,30))}get seekOffset(){return eh(this,aO,30)}set seekOffset(e){em(this,aO,e),this.setAttribute("aria-label",O("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),ea(er(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return eh(this,h.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){em(this,h.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new G.CustomEvent(l.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}aP.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${i}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`}</slot>
  `},aP.getTooltipContentHTML=function(){return O("Seek forward")},G.customElements.get("media-seek-forward-button")||G.customElements.define("media-seek-forward-button",aP);var aN=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aU=(e,t,i)=>(aN(e,t,"read from private field"),i?i.call(e):t.get(e)),aH=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aW=(e,t,i,a)=>(aN(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),aB=(e,t,i)=>(aN(e,t,"access private method"),i);let a$={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},aq=[...Object.values(a$),h.MEDIA_CURRENT_TIME,h.MEDIA_DURATION,h.MEDIA_SEEKABLE],aV=["Enter"," "],aF="&nbsp;/&nbsp;",aK=(e,{timesSep:t=aF}={})=>{var i,a;let r=null!=(i=e.mediaCurrentTime)?i:0,[,n]=null!=(a=e.mediaSeekable)?a:[],s=0;Number.isFinite(e.mediaDuration)?s=e.mediaDuration:Number.isFinite(n)&&(s=n);let o=e.remaining?H(0-(s-r)):H(r);return e.showDuration?`${o}${t}${H(s)}`:o};class aj extends iH{constructor(){super(),aH(this,cu),aH(this,ch),aH(this,cp),aH(this,cb),aH(this,co,void 0),aH(this,cl,null),aH(this,cd,e=>{let{metaKey:t,altKey:i,key:a}=e;t||i||!aV.includes(a)?this.removeEventListener("keyup",aU(this,cl)):this.addEventListener("keyup",aU(this,cl))}),aW(this,co,this.shadowRoot.querySelector("slot")),aU(this,co).innerHTML=`${aK(this)}`}static get observedAttributes(){return[...super.observedAttributes,...aq,"disabled"]}connectedCallback(){let{style:e}=eu(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.setAttribute("aria-label",O("playback time")),aB(this,cp,cv).call(this),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),aB(this,ch,cm).call(this),super.disconnectedCallback()}attributeChangedCallback(e,t,i){this.setAttribute("aria-label",O("playback time")),aq.includes(e)?this.update():"disabled"===e&&i!==t?null==i?aB(this,cp,cv).call(this):aB(this,cb,cg).call(this):e===a$.NO_TOGGLE&&i!==t&&(this.noToggle?aB(this,cb,cg).call(this):aB(this,cp,cv).call(this)),super.attributeChangedCallback(e,t,i)}enable(){this.noToggle||(this.tabIndex=0)}disable(){this.tabIndex=-1}get remaining(){return ep(this,a$.REMAINING)}set remaining(e){ev(this,a$.REMAINING,e)}get showDuration(){return ep(this,a$.SHOW_DURATION)}set showDuration(e){ev(this,a$.SHOW_DURATION,e)}get noToggle(){return ep(this,a$.NO_TOGGLE)}set noToggle(e){ev(this,a$.NO_TOGGLE,e)}get mediaDuration(){return eh(this,h.MEDIA_DURATION)}set mediaDuration(e){em(this,h.MEDIA_DURATION,e)}get mediaCurrentTime(){return eh(this,h.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){em(this,h.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(h.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(h.MEDIA_SEEKABLE):this.setAttribute(h.MEDIA_SEEKABLE,e.join(":"))}update(){let e=aK(this);(e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),null==i||null===r)return e.setAttribute("aria-description",O("video not loaded, unknown time."));let n=e.remaining?U(0-(r-i)):U(i);if(!e.showDuration)return e.setAttribute("aria-description",n);let s=O("{currentTime} of {totalTime}",{currentTime:n,totalTime:U(r)});e.setAttribute("aria-description",s)})(this),e!==aU(this,co).innerHTML&&(aU(this,co).innerHTML=e)}}co=new WeakMap,cl=new WeakMap,cd=new WeakMap,cu=new WeakSet,cc=function(){aU(this,cl)||(aW(this,cl,e=>{let{key:t}=e;aV.includes(t)?this.toggleTimeDisplay():this.removeEventListener("keyup",aU(this,cl))}),this.addEventListener("keydown",aU(this,cd)),this.addEventListener("click",this.toggleTimeDisplay))},ch=new WeakSet,cm=function(){aU(this,cl)&&(this.removeEventListener("keyup",aU(this,cl)),this.removeEventListener("keydown",aU(this,cd)),this.removeEventListener("click",this.toggleTimeDisplay),aW(this,cl,null))},cp=new WeakSet,cv=function(){this.noToggle||this.hasAttribute("disabled")||(this.setAttribute("role","button"),this.enable(),aB(this,cu,cc).call(this))},cb=new WeakSet,cg=function(){this.removeAttribute("role"),this.disable(),aB(this,ch,cm).call(this)},aj.getSlotTemplateHTML=function(e,t){return`
    <slot>${aK(t)}</slot>
  `},G.customElements.get("media-time-display")||G.customElements.define("media-time-display",aj);var aG=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aY=(e,t,i)=>(aG(e,t,"read from private field"),i?i.call(e):t.get(e)),az=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aQ=(e,t,i,a)=>(aG(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class aZ{constructor(e,t,i){az(this,cf,void 0),az(this,cE,void 0),az(this,cy,void 0),az(this,c_,void 0),az(this,ck,void 0),az(this,cT,void 0),az(this,cw,void 0),az(this,cA,void 0),az(this,cC,0),az(this,cS,(e=performance.now())=>{aQ(this,cC,requestAnimationFrame(aY(this,cS))),aQ(this,c_,performance.now()-aY(this,cy));let t=1e3/this.fps;if(aY(this,c_)>t){let i,a,r,n;aQ(this,cy,e-aY(this,c_)%t);let s=1e3/((e-aY(this,cE))/++(i=this,a=ck,{set _(value){aQ(i,a,value,r)},get _(){return aY(i,a,n)}})._),o=(e-aY(this,cT))/1e3/this.duration,l=aY(this,cw)+o*this.playbackRate;l-aY(this,cf).valueAsNumber>0?aQ(this,cA,this.playbackRate/this.duration/s):(aQ(this,cA,.995*aY(this,cA)),l=aY(this,cf).valueAsNumber+aY(this,cA)),this.callback(l)}}),aQ(this,cf,e),this.callback=t,this.fps=i}start(){0===aY(this,cC)&&(aQ(this,cy,performance.now()),aQ(this,cE,aY(this,cy)),aQ(this,ck,0),aY(this,cS).call(this))}stop(){0!==aY(this,cC)&&(cancelAnimationFrame(aY(this,cC)),aQ(this,cC,0))}update({start:e,duration:t,playbackRate:i}){let a=e-aY(this,cf).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.5/t||r>=.5)&&this.callback(e),aQ(this,cw,e),aQ(this,cT,performance.now()),this.duration=t,this.playbackRate=i}}cf=new WeakMap,cE=new WeakMap,cy=new WeakMap,c_=new WeakMap,ck=new WeakMap,cT=new WeakMap,cw=new WeakMap,cA=new WeakMap,cC=new WeakMap,cS=new WeakMap;var aX=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aJ=(e,t,i)=>(aX(e,t,"read from private field"),i?i.call(e):t.get(e)),a0=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},a1=(e,t,i,a)=>(aX(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),a2=(e,t,i)=>(aX(e,t,"access private method"),i);let a3=(e,t=e.mediaCurrentTime)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:Math.max(0,Math.min((t-i)/(a-i),1))},a4=(e,t=e.range.valueAsNumber)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};class a5 extends iL{constructor(){super(),a0(this,cW),a0(this,cq),a0(this,cF),a0(this,cj),a0(this,cY),a0(this,cQ),a0(this,cX),a0(this,cI,null),a0(this,cR,void 0),a0(this,cL,void 0),a0(this,cx,void 0),a0(this,cM,void 0),a0(this,cD,void 0),a0(this,cO,void 0),a0(this,cP,void 0),a0(this,cN,void 0),a0(this,cU,void 0),a0(this,cH,()=>{a2(this,cW,cB).call(this)?aJ(this,cR).start():aJ(this,cR).stop()}),a0(this,c$,e=>{!this.dragging&&(S(e)&&(this.range.valueAsNumber=e),aJ(this,cU)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),a1(this,cL,this.shadowRoot.querySelectorAll('[part~="box"]')),a1(this,cM,this.shadowRoot.querySelector('[part~="preview-box"]')),a1(this,cD,this.shadowRoot.querySelector('[part~="current-box"]'));const e=getComputedStyle(this);a1(this,cO,parseInt(e.getPropertyValue("--media-box-padding-left"))),a1(this,cP,parseInt(e.getPropertyValue("--media-box-padding-right"))),a1(this,cR,new aZ(this.range,aJ(this,c$),60))}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PAUSED,h.MEDIA_DURATION,h.MEDIA_SEEKABLE,h.MEDIA_CURRENT_TIME,h.MEDIA_PREVIEW_IMAGE,h.MEDIA_PREVIEW_TIME,h.MEDIA_PREVIEW_CHAPTER,h.MEDIA_BUFFERED,h.MEDIA_PLAYBACK_RATE,h.MEDIA_LOADING,h.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",O("seek")),aJ(this,cH).call(this),a1(this,cI,this.getRootNode()),null==(e=aJ(this,cI))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),aJ(this,cR).stop(),null==(e=aJ(this,cI))||e.removeEventListener("transitionstart",this),a1(this,cI,null)}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),t!=i){if(e===h.MEDIA_CURRENT_TIME||e===h.MEDIA_PAUSED||e===h.MEDIA_ENDED||e===h.MEDIA_LOADING||e===h.MEDIA_DURATION||e===h.MEDIA_SEEKABLE){let e,t,i,a;aJ(this,cR).update({start:a3(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),aJ(this,cH).call(this),e=this.range,t=U(+a4(this)),i=U(+this.mediaSeekableEnd),a=t&&i?O("{currentTime} of {totalTime}",{currentTime:t,totalTime:i}):O("video not loaded, unknown time."),e.setAttribute("aria-valuetext",a)}else e===h.MEDIA_BUFFERED&&this.updateBufferedBar();(e===h.MEDIA_DURATION||e===h.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=aJ(this,cN),this.updateBar())}}get mediaChaptersCues(){return aJ(this,cN)}set mediaChaptersCues(e){var t;a1(this,cN,e),this.updateSegments(null==(t=aJ(this,cN))?void 0:t.map(e=>({start:a3(this,e.startTime),end:a3(this,e.endTime)})))}get mediaPaused(){return ep(this,h.MEDIA_PAUSED)}set mediaPaused(e){ev(this,h.MEDIA_PAUSED,e)}get mediaLoading(){return ep(this,h.MEDIA_LOADING)}set mediaLoading(e){ev(this,h.MEDIA_LOADING,e)}get mediaDuration(){return eh(this,h.MEDIA_DURATION)}set mediaDuration(e){em(this,h.MEDIA_DURATION,e)}get mediaCurrentTime(){return eh(this,h.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){em(this,h.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return eh(this,h.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){em(this,h.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(h.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e)return void this.removeAttribute(h.MEDIA_BUFFERED);let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(h.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(h.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(h.MEDIA_SEEKABLE):this.setAttribute(h.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return eb(this,h.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){eg(this,h.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return eh(this,h.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){em(this,h.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return ep(this,h.MEDIA_ENDED)}set mediaEnded(e){ev(this,h.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t,i=this.mediaBuffered;if(!i.length)return;if(this.mediaEnded)t=1;else{let a=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=null!=(e=i.find(([e,t])=>e<=a&&a<=t))?e:[];t=a3(this,r)}let{style:a}=eu(this.shadowRoot,"#buffered");a.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=eu(this.shadowRoot,"#current-rail"),t=eu(this.shadowRoot,'[part~="current-box"]'),i=a2(this,cq,cV).call(this,aJ(this,cD)),a=a2(this,cF,cK).call(this,i,this.range.valueAsNumber),r=a2(this,cj,cG).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${r}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":a2(this,cX,cJ).call(this);break;case"pointermove":a2(this,cY,cz).call(this,e);break;case"pointerup":aJ(this,cU)&&a1(this,cU,!1);break;case"pointerdown":a1(this,cU,!0);break;case"pointerleave":a2(this,cQ,cZ).call(this,null);break;case"transitionstart":en(e.target,this)&&setTimeout(()=>aJ(this,cH).call(this),0)}}}cI=new WeakMap,cR=new WeakMap,cL=new WeakMap,cx=new WeakMap,cM=new WeakMap,cD=new WeakMap,cO=new WeakMap,cP=new WeakMap,cN=new WeakMap,cU=new WeakMap,cH=new WeakMap,cW=new WeakSet,cB=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&ed(this)},c$=new WeakMap,cq=new WeakSet,cV=function(e){var t;let i=(null!=(t=this.getAttribute("bounds")?es(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),r=e.offsetWidth,n=-(a.left-i.left-r/2),s=i.right-a.left-r/2;return{box:{width:r,min:n,max:s},bounds:i,range:a}},cF=new WeakSet,cK=function(e,t){let i=`${100*t}%`,{width:a,min:r,max:n}=e.box;if(!a)return i;if(!Number.isNaN(r)){let e=`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`;i=`max(${e}, ${i})`}if(!Number.isNaN(n)){let e=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${e})`}return i},cj=new WeakSet,cG=function(e,t){let{width:i,min:a,max:r}=e.box,n=t*e.range.width;if(n<a+aJ(this,cO)){let t=e.range.left-e.bounds.left-aJ(this,cO);return`${n-i/2+t}px`}if(n>r-aJ(this,cP)){let t=e.bounds.right-e.range.right-aJ(this,cP);return`${n+i/2-t-e.range.width}px`}return 0},cY=new WeakSet,cz=function(e){let t=[...aJ(this,cL)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this)))return void a2(this,cQ,cZ).call(this,null);let i=this.mediaSeekableEnd;if(!i)return;let a=eu(this.shadowRoot,"#preview-rail"),r=eu(this.shadowRoot,'[part~="preview-box"]'),n=a2(this,cq,cV).call(this,aJ(this,cM)),s=(e.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));let o=a2(this,cF,cK).call(this,n,s),l=a2(this,cj,cG).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`),1>Math.abs(Math.round(aJ(this,cx))-Math.round(s*i))&&s>.01&&s<.99||(a1(this,cx,s*i),a2(this,cQ,cZ).call(this,aJ(this,cx)))},cQ=new WeakSet,cZ=function(e){this.dispatchEvent(new G.CustomEvent(l.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},cX=new WeakSet,cJ=function(){aJ(this,cR).stop();let e=a4(this);this.dispatchEvent(new G.CustomEvent(l.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},a5.shadowRootOptions={mode:"open"},a5.getContainerTemplateHTML=function(e){return`
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${h.MEDIA_PREVIEW_IMAGE}], [${h.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${h.MEDIA_PREVIEW_IMAGE}], [${h.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${h.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${h.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${h.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${h.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${h.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${h.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${h.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${h.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${h.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${h.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${h.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${h.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${aI.shadowRootOptions.mode}">
            ${aI.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `},G.customElements.get("media-time-range")||G.customElements.define("media-time-range",a5);var a9=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)};class a8 extends iL{constructor(){super(...arguments),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,c0,()=>{let e=this.range.value,t=new G.CustomEvent(l.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_VOLUME,h.MEDIA_MUTED,h.MEDIA_VOLUME_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",O("volume")),this.range.addEventListener("input",a9(this,c0))}disconnectedCallback(){this.range.removeEventListener("input",a9(this,c0)),super.disconnectedCallback()}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===h.MEDIA_VOLUME||e===h.MEDIA_MUTED){let e;this.range.valueAsNumber=this.mediaMuted?0:this.mediaVolume,this.range.setAttribute("aria-valuetext",(e=this.range.valueAsNumber,`${Math.round(100*e)}%`)),this.updateBar()}}get mediaVolume(){return eh(this,h.MEDIA_VOLUME,1)}set mediaVolume(e){em(this,h.MEDIA_VOLUME,e)}get mediaMuted(){return ep(this,h.MEDIA_MUTED)}set mediaMuted(e){ev(this,h.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return eb(this,h.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){eg(this,h.MEDIA_VOLUME_UNAVAILABLE,e)}}c0=new WeakMap,G.customElements.get("media-volume-range")||G.customElements.define("media-volume-range",a8);class a6 extends ih{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_LOOP]}connectedCallback(){var e;super.connectedCallback(),this.setAttribute("role","switch"),this.container=(null==(e=this.shadowRoot)?void 0:e.querySelector("#icon"))||null,this.container&&(this.container.textContent=O("Loop"))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_LOOP&&this.container&&this.setAttribute("aria-checked",this.mediaLoop?"true":"false")}get mediaLoop(){return ep(this,h.MEDIA_LOOP)}set mediaLoop(e){ev(this,h.MEDIA_LOOP,e)}handleClick(){let e=!this.mediaLoop,t=new G.CustomEvent(l.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}a6.getSlotTemplateHTML=function(e){return`
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${h.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `},a6.getTooltipContentHTML=function(){return O("Loop")},G.customElements.get("media-loop-button")||G.customElements.define("media-loop-button",a6);var a7=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},re=(e,t,i)=>(a7(e,t,"read from private field"),i?i.call(e):t.get(e)),rt=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ri=(e,t,i,a)=>(a7(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let ra={processCallback(e,t,i){if(i){for(let[e,a]of t)if(e in i){let t=i[e];"boolean"==typeof t&&a instanceof rc&&"boolean"==typeof a.element[a.attributeName]?a.booleanValue=t:"function"==typeof t&&a instanceof rc?a.element[a.attributeName]=t:a.value=t}}}};class rr extends G.DocumentFragment{constructor(e,t,i=ra){var a;super(),rt(this,c1,void 0),rt(this,c2,void 0),this.append(e.content.cloneNode(!0)),ri(this,c1,rn(this)),ri(this,c2,i),null==(a=i.createCallback)||a.call(i,this,re(this,c1),t),i.processCallback(this,re(this,c1),t)}update(e){re(this,c2).processCallback(this,re(this,c1),e)}}c1=new WeakMap,c2=new WeakMap;let rn=(e,t=[])=>{let i,a;for(let r of e.attributes||[])if(r.value.includes("{{")){let n=new ru;for([i,a]of ro(r.value))if(i){let i=new rc(e,r.name,r.namespaceURI);n.append(i),t.push([a,i])}else n.append(a);r.value=n.toString()}for(let r of e.childNodes)if(1!==r.nodeType||r instanceof HTMLTemplateElement){let n=r.data;if(1===r.nodeType||n.includes("{{")){let s=[];if(n)for([i,a]of ro(n))if(i){let i=new rh(e);s.push(i),t.push([a,i])}else s.push(new Text(a));else if(r instanceof HTMLTemplateElement){let i=new rm(e,r);s.push(i),t.push([i.expression,i])}r.replaceWith(...s.flatMap(e=>e.replacementNodes||[e]))}}else rn(r,t);return t},rs={},ro=e=>{let t="",i=0,a=rs[e],r=0,n;if(a)return a;for(a=[];n=e[r];r++)"{"===n&&"{"===e[r+1]&&"\\"!==e[r-1]&&e[r+2]&&1==++i?(t&&a.push([0,t]),t="",r++):"}"!==n||"}"!==e[r+1]||"\\"===e[r-1]||--i?t+=n||"":(a.push([1,t.trim()]),t="",r++);return t&&a.push([0,(i>0?"{{":"")+t]),rs[e]=a};class rl{get value(){return""}set value(e){}toString(){return this.value}}let rd=new WeakMap;class ru{constructor(){rt(this,c3,[])}[Symbol.iterator](){return re(this,c3).values()}get length(){return re(this,c3).length}item(e){return re(this,c3)[e]}append(...e){for(let t of e)t instanceof rc&&rd.set(t,this),re(this,c3).push(t)}toString(){return re(this,c3).join("")}}c3=new WeakMap;class rc extends rl{constructor(e,t,i){super(),rt(this,c6),rt(this,c4,""),rt(this,c5,void 0),rt(this,c9,void 0),rt(this,c8,void 0),ri(this,c5,e),ri(this,c9,t),ri(this,c8,i)}get attributeName(){return re(this,c9)}get attributeNamespace(){return re(this,c8)}get element(){return re(this,c5)}get value(){return re(this,c4)}set value(e){re(this,c4)!==e&&(ri(this,c4,e),re(this,c6,c7)&&1!==re(this,c6,c7).length?re(this,c5).setAttributeNS(re(this,c8),re(this,c9),re(this,c6,c7).toString()):null==e?re(this,c5).removeAttributeNS(re(this,c8),re(this,c9)):re(this,c5).setAttributeNS(re(this,c8),re(this,c9),e))}get booleanValue(){return re(this,c5).hasAttributeNS(re(this,c8),re(this,c9))}set booleanValue(e){if(re(this,c6,c7)&&1!==re(this,c6,c7).length)throw new DOMException("Value is not fully templatized");this.value=e?"":null}}c4=new WeakMap,c5=new WeakMap,c9=new WeakMap,c8=new WeakMap,c6=new WeakSet,c7=function(){return rd.get(this)};class rh extends rl{constructor(e,t){super(),rt(this,he,void 0),rt(this,ht,void 0),ri(this,he,e),ri(this,ht,t?[...t]:[new Text])}get replacementNodes(){return re(this,ht)}get parentNode(){return re(this,he)}get nextSibling(){return re(this,ht)[re(this,ht).length-1].nextSibling}get previousSibling(){return re(this,ht)[0].previousSibling}get value(){return re(this,ht).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(e=>null==e?[new Text]:e.forEach?[...e]:11===e.nodeType?[...e.childNodes]:e.nodeType?[e]:[new Text(e)]);t.length||t.push(new Text),ri(this,ht,function(e,t,i,a=null){let r=0,n,s,o,l=i.length,d=t.length;for(;r<l&&r<d&&t[r]==i[r];)r++;for(;r<l&&r<d&&i[l-1]==t[d-1];)a=i[--d,--l];if(r==d)for(;r<l;)e.insertBefore(i[r++],a);if(r==l)for(;r<d;)e.removeChild(t[r++]);else{for(n=t[r];r<l;)o=i[r++],s=n?n.nextSibling:a,n==o?n=s:r<l&&i[r]==s?(e.replaceChild(o,n),n=s):e.insertBefore(o,n);for(;n!=a;)s=n.nextSibling,e.removeChild(n),n=s}return i}(re(this,ht)[0].parentNode,re(this,ht),t,this.nextSibling))}}he=new WeakMap,ht=new WeakMap;class rm extends rh{constructor(e,t){const i=t.getAttribute("directive")||t.getAttribute("type");let a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),this.expression=a,this.template=t,this.directive=i}}let rp={string:e=>String(e)};class rv{constructor(e){this.template=e,this.state=void 0}}let rb=new WeakMap,rg=new WeakMap,rf={partial:(e,t)=>{t[e.expression]=new rv(e.template)},if:(e,t)=>{var i;if(rk(e.expression,t))if(rb.get(e)!==e.template){rb.set(e,e.template);let i=new rr(e.template,t,ry);e.replace(i),rg.set(e,i)}else null==(i=rg.get(e))||i.update(t);else e.replace(""),rb.delete(e),rg.delete(e)}},rE=Object.keys(rf),ry={processCallback(e,t,i){var a,r;if(i)for(let[e,n]of t){if(n instanceof rm){if(!n.directive){let e=rE.find(e=>n.template.hasAttribute(e));e&&(n.directive=e,n.expression=n.template.getAttribute(e))}null==(a=rf[n.directive])||a.call(rf,n,i);continue}let t=rk(e,i);if(t instanceof rv){rb.get(n)!==t.template?(rb.set(n,t.template),n.value=t=new rr(t.template,t.state,ry),rg.set(n,t)):null==(r=rg.get(n))||r.update(t.state);continue}t?(n instanceof rc&&n.attributeName.startsWith("aria-")&&(t=String(t)),n instanceof rc?"boolean"==typeof t?n.booleanValue=t:"function"==typeof t?n.element[n.attributeName]=t:n.value=t:(n.value=t,rb.delete(n),rg.delete(n))):n instanceof rc?n.value=void 0:(n.value=void 0,rb.delete(n),rg.delete(n))}}},r_={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>null!=e?e:t,"|":(e,t)=>{var i;return null==(i=rp[t])?void 0:i.call(rp,e)}};function rk(e,t={}){var i,a,r,n,s,o,l;let d=(function(e,t){let i,a,r,n=[];for(;e;){for(let n in r=null,i=e.length,t)(a=t[n].exec(e))&&a.index<i&&(r={token:a[0],type:n,matches:a.slice(1)},i=a.index);i&&n.push({token:e.substr(0,i),type:void 0}),r&&n.push(r),e=e.substr(i+(r?r.token.length:0))}return n})(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>"ws"!==e);if(0===d.length||d.some(({type:e})=>!e))return rT(e);if((null==(i=d[0])?void 0:i.token)===">"){let i=t[null==(a=d[1])?void 0:a.token];if(!i)return rT(e);let o={...t};i.state=o;let l=d.slice(2);for(let e=0;e<l.length;e+=3){let i=null==(r=l[e])?void 0:r.token,a=null==(n=l[e+1])?void 0:n.token,d=null==(s=l[e+2])?void 0:s.token;i&&"="===a&&(o[i]=rA(d,t))}return i}if(1===d.length)return rw(d[0])?rA(d[0].token,t):rT(e);if(2===d.length){let i=r_[null==(o=d[0])?void 0:o.token];return i&&rw(d[1])?i(rA(d[1].token,t)):rT(e)}if(3===d.length){let i=null==(l=d[1])?void 0:l.token,a=r_[i];if(!a||!rw(d[0])||!rw(d[2]))return rT(e);let r=rA(d[0].token,t);return a(r,"|"===i?d[2].token:rA(d[2].token,t))}}function rT(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function rw({type:e}){return["number","boolean","string","param"].includes(e)}function rA(e,t){let i=e[0],a=e.slice(-1);return"true"===e||"false"===e?"true"===e:i===a&&["'",'"'].includes(i)?e.slice(1,-1):I(e)?parseFloat(e):t[e]}var rC=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rS=(e,t,i)=>(rC(e,t,"read from private field"),i?i.call(e):t.get(e)),rI=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rR=(e,t,i,a)=>(rC(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rL=(e,t,i)=>(rC(e,t,"access private method"),i);let rx={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},rM=Y.createElement("template");rM.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class rD extends G.HTMLElement{constructor(){super(),rI(this,hs),rI(this,hl),rI(this,hi,void 0),rI(this,ha,void 0),rI(this,hr,void 0),rI(this,hn,void 0),rI(this,hu,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer()),rR(this,hn,new MutationObserver(e=>{var t;(!this.mediaController||(null==(t=this.mediaController)?void 0:t.breakpointsComputed))&&e.some(e=>{let t=e.target;return t===this||"media-controller"===t.localName&&!!(rx[e.attributeName]||e.attributeName.startsWith("breakpoint"))})&&this.render()})),rR(this,hu,this.render.bind(this)),rL(this,hs,ho).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return null!=(e=rS(this,hi))?e:this.constructor.template}set template(e){null===e?this.removeAttribute("template"):"string"==typeof e?this.setAttribute("template",e):e instanceof HTMLTemplateElement&&(rR(this,hi,e),rR(this,hr,null),this.createRenderer())}get props(){var e,t,i;let a=[...Array.from(null!=(t=null==(e=this.mediaController)?void 0:e.attributes)?t:[]).filter(({name:e})=>rx[e]||e.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(let e of a){let t=null!=(i=rx[e.name])?i:e.name.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()),{value:a}=e;null!=a?(I(a)&&(a=parseFloat(a)),r[t]=""===a||a):r[t]=!1}return r}attributeChangedCallback(e,t,i){"template"===e&&t!=i&&rL(this,hl,hd).call(this)}connectedCallback(){this.addEventListener(m.BREAKPOINTS_COMPUTED,rS(this,hu)),rS(this,hn).observe(this,{attributes:!0}),rS(this,hn).observe(this.renderRoot,{attributes:!0,subtree:!0}),rL(this,hl,hd).call(this)}disconnectedCallback(){this.removeEventListener(m.BREAKPOINTS_COMPUTED,rS(this,hu)),rS(this,hn).disconnect()}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==rS(this,ha)&&(rR(this,ha,this.template),this.renderer=new rr(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(rM.content.cloneNode(!0),this.renderer))}render(){var e;null==(e=this.renderer)||e.update(this.props)}}async function rO(e){let t=await fetch(e);if(200!==t.status)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}function rP(e){return e.split("-")[0]}hi=new WeakMap,ha=new WeakMap,hr=new WeakMap,hn=new WeakMap,hs=new WeakSet,ho=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},hl=new WeakSet,hd=function(){var e;let t=this.getAttribute("template");if(!t||t===rS(this,hr))return;let i=this.getRootNode(),a=null==(e=null==i?void 0:i.getElementById)?void 0:e.call(i,t);if(a){rR(this,hr,t),rR(this,hi,a),this.createRenderer();return}(function(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;let t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch(e){return!1}return!0})(t)&&(rR(this,hr,t),rO(t).then(e=>{let t=Y.createElement("template");t.innerHTML=e,rR(this,hi,t),this.createRenderer()}).catch(console.error))},hu=new WeakMap,rD.observedAttributes=["template"],rD.processor=ry,G.customElements.get("media-theme")||G.customElements.define("media-theme",rD);class rN extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),this.action=e,this.relatedTarget=t}}class rU extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),this.newState=e,this.oldState=t}}var rH=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rW=(e,t,i)=>(rH(e,t,"read from private field"),i?i.call(e):t.get(e)),rB=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},r$=(e,t,i,a)=>(rH(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rq=(e,t,i)=>(rH(e,t,"access private method"),i);function rV({type:e,text:t,value:i,checked:a}){let r=Y.createElement("media-chrome-menu-item");r.type=null!=e?e:"",r.part.add("menu-item"),e&&r.part.add(e),r.value=i,r.checked=a;let n=Y.createElement("span");return n.textContent=t,r.append(n),r}function rF(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i.cloneNode(!0);let a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}let rK="style",rj="hidden",rG="disabled";class rY extends G.HTMLElement{constructor(){if(super(),rB(this,hE),rB(this,h_),rB(this,hw),rB(this,hC),rB(this,hI),rB(this,hL),rB(this,hM),rB(this,hO),rB(this,hH),rB(this,hB),rB(this,hq),rB(this,hF),rB(this,hj),rB(this,hY),rB(this,hQ),rB(this,hX),rB(this,h0),rB(this,h2),rB(this,h4),rB(this,h9),rB(this,hc,null),rB(this,hh,null),rB(this,hm,null),rB(this,hp,new Set),rB(this,hv,void 0),rB(this,hb,!1),rB(this,hg,null),rB(this,hf,null),rB(this,hT,()=>{let e=rW(this,hp),t=new Set(this.items);for(let i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(let i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));r$(this,hp,t)}),rB(this,hN,()=>{rq(this,hH,hW).call(this),rq(this,hB,h$).call(this,!1)}),rB(this,hU,()=>{rq(this,hH,hW).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ee(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),r$(this,hv,new MutationObserver(rW(this,hT)))}static get observedAttributes(){return[rG,rj,rK,"anchor",d.MEDIA_CONTROLLER]}static formatMenuItemText(e,t){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":rq(this,hE,hy).call(this,e);break;case"invoke":rq(this,hC,hS).call(this,e);break;case"click":rq(this,hq,hV).call(this,e);break;case"toggle":rq(this,hj,hG).call(this,e);break;case"focusout":rq(this,hQ,hZ).call(this,e);break;case"keydown":rq(this,hX,hJ).call(this,e)}}connectedCallback(){var e,t;rW(this,hv).observe(this.defaultSlot,{childList:!0}),r$(this,hg,ec(this.shadowRoot,":host")),rq(this,hw,hA).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),r$(this,hc,ei(this)),null==(t=null==(e=rW(this,hc))?void 0:e.associateElement)||t.call(e,this),this.hidden||rq(this,hM,hD).call(this),rq(this,h_,hk).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){var e,t;rW(this,hv).disconnect(),rq(this,hO,hP).call(this),this.disable(),null==(t=null==(e=rW(this,hc))?void 0:e.unassociateElement)||t.call(e,this),r$(this,hc,null),r$(this,hh,null),r$(this,hm,null),this.shadowRoot.removeEventListener("slotchange",this)}attributeChangedCallback(e,t,i){var a,r,n,s;e===rj&&i!==t?(rW(this,hb)||r$(this,hb,!0),this.hidden?rq(this,hL,hx).call(this):rq(this,hI,hR).call(this),this.dispatchEvent(new rU({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===d.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=rW(this,hc))?void 0:a.unassociateElement)||r.call(a,this),r$(this,hc,null)),i&&this.isConnected&&(r$(this,hc,ei(this)),null==(s=null==(n=rW(this,hc))?void 0:n.associateElement)||s.call(n,this))):e===rG&&i!==t?null==i?this.enable():this.disable():e===rK&&i!==t&&rq(this,hw,hA).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?null==(e=el(this))?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(rz)}get radioGroupItems(){return this.items.filter(e=>"menuitemradio"===e.role)}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return null!=(t=null==(e=this.checkedItems[0])?void 0:e.value)?t:""}set value(e){let t=this.items.find(t=>t.value===e);t&&rq(this,h9,h8).call(this,t)}focus(){if(r$(this,hh,eo()),this.items.length){rq(this,h4,h5).call(this,this.items[0]),this.items[0].focus();return}let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}handleSelect(e){var t;let i=rq(this,h0,h1).call(this,e);i&&(rq(this,h9,h8).call(this,i,"checkbox"===i.type),rW(this,hm)&&!this.hidden&&(null==(t=rW(this,hh))||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;let{key:a}=e,r=this.items,n=null!=(i=null!=(t=rq(this,h0,h1).call(this,e))?t:rq(this,h2,h3).call(this))?i:r[0],s=Math.max(0,r.indexOf(n));"ArrowDown"===a?s++:"ArrowUp"===a?s--:"Home"===e.key?s=0:"End"===e.key&&(s=r.length-1),s<0&&(s=r.length-1),s>r.length-1&&(s=0),rq(this,h4,h5).call(this,r[s]),r[s].focus()}}function rz(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==e?void 0:e.role)}function rQ(e){var t;return null!=(t=e.getAttribute("bounds")?es(e,`#${e.getAttribute("bounds")}`):et(e)||e.parentElement)?t:e}hc=new WeakMap,hh=new WeakMap,hm=new WeakMap,hp=new WeakMap,hv=new WeakMap,hb=new WeakMap,hg=new WeakMap,hf=new WeakMap,hE=new WeakSet,hy=function(e){let t=e.target;for(let e of t.assignedNodes({flatten:!0}))3===e.nodeType&&""===e.textContent.trim()&&e.remove();["header","title"].includes(t.name)&&rq(this,h_,hk).call(this),t.name||rW(this,hT).call(this)},h_=new WeakSet,hk=function(){let e=this.shadowRoot.querySelector('slot[name="header"]');e.hidden=0===this.shadowRoot.querySelector('slot[name="title"]').assignedNodes().length&&0===e.assignedNodes().length},hT=new WeakMap,hw=new WeakSet,hA=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=null==(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:e.trim();t.setAttribute("media","row"===i?"":"width:0")},hC=new WeakSet,hS=function(e){r$(this,hm,e.relatedTarget),en(this,e.relatedTarget)||(this.hidden=!this.hidden)},hI=new WeakSet,hR=function(){var e;null==(e=rW(this,hm))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),rq(this,hM,hD).call(this)},hL=new WeakSet,hx=function(){var e;null==(e=rW(this,hm))||e.setAttribute("aria-expanded","false"),rq(this,hO,hP).call(this)},hM=new WeakSet,hD=function(){rq(this,hO,hP).call(this),r$(this,hf,rQ(this)),X(rW(this,hf),rW(this,hN)),X(this,rW(this,hU))},hO=new WeakSet,hP=function(){rW(this,hf)&&(J(rW(this,hf),rW(this,hN)),r$(this,hf,null)),J(this,rW(this,hU))},hN=new WeakMap,hU=new WeakMap,hH=new WeakSet,hW=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:t,y:i}=function({anchor:e,floating:t,placement:i}){let{x:a,y:r}=function({anchor:e,floating:t},i){let a,r="x"==(["top","bottom"].includes(rP(i))?"y":"x")?"y":"x",n="y"===r?"height":"width",s=rP(i),o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,d=e[n]/2-t[n]/2;switch(s){case"top":a={x:o,y:e.y-t.height};break;case"bottom":a={x:o,y:e.y+e.height};break;case"right":a={x:e.x+e.width,y:l};break;case"left":a={x:e.x-t.width,y:l};break;default:a={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":a[r]-=d;break;case"end":a[r]+=d}return a}(function({anchor:e,floating:t}){var i,a,r;let n,s;return{anchor:(i=e,a=t.offsetParent,n=i.getBoundingClientRect(),s=null!=(r=null==a?void 0:a.getBoundingClientRect())?r:{x:0,y:0},{x:n.x-s.x,y:n.y-s.y,width:n.width,height:n.height}),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}({anchor:e,floating:t}),i);return{x:a,y:r}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=e||(e=this.offsetWidth);let a=rQ(this).getBoundingClientRect(),r=a.width-t-e,n=a.height-i-this.offsetHeight,{style:s}=rW(this,hg);s.setProperty("position","absolute"),s.setProperty("right",`${Math.max(0,r)}px`),s.setProperty("--_menu-bottom",`${n}px`);let o=getComputedStyle(this),l=s.getPropertyValue("--_menu-bottom")===o.bottom?n:parseFloat(o.bottom),d=a.height-l-parseFloat(o.marginBottom);this.style.setProperty("--_menu-max-height",`${d}px`)},hB=new WeakSet,h$=function(e){let t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=null==t?void 0:t.querySelector('[role="menu"]'),{style:a}=rW(this,hg);if(e||a.setProperty("--media-menu-transition-in","none"),i){let e=i.offsetHeight,a=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${a}px`),this.style.setProperty("min-height",`${e}px`),rq(this,hH,hW).call(this,a)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),rq(this,hH,hW).call(this);a.removeProperty("--media-menu-transition-in")},hq=new WeakSet,hV=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(rW(this,hF,hK))){null==(t=rW(this,hh))||t.focus(),this.hidden=!0;return}let i=rq(this,h0,h1).call(this,e);!i||i.hasAttribute("disabled")||(rq(this,h4,h5).call(this,i),this.handleSelect(e))},hF=new WeakSet,hK=function(){var e;return null==(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:e.find(e=>e.matches('button[part~="back"]'))},hj=new WeakSet,hG=function(e){if(e.target===this)return;rq(this,hY,hz).call(this);let t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let i of t)i.invokeTargetElement!=e.target&&("open"!=e.newState||"true"!=i.getAttribute("aria-expanded")||i.invokeTargetElement.hidden||i.invokeTargetElement.dispatchEvent(new rN({relatedTarget:i})));for(let e of t)e.setAttribute("aria-expanded",`${!e.submenuElement.hidden}`);rq(this,hB,h$).call(this,!0)},hY=new WeakSet,hz=function(){let e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)},hQ=new WeakSet,hZ=function(e){var t;en(this,e.relatedTarget)||(rW(this,hb)&&(null==(t=rW(this,hh))||t.focus()),rW(this,hm)&&rW(this,hm)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))},hX=new WeakSet,hJ=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;if(!o&&!l&&!d&&this.keysUsed.includes(s))if(e.preventDefault(),e.stopPropagation(),"Tab"===s){if(rW(this,hb)){this.hidden=!0;return}e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()}else"Escape"===s?(null==(n=rW(this,hh))||n.focus(),rW(this,hb)&&(this.hidden=!0)):"Enter"===s||" "===s?this.handleSelect(e):this.handleMove(e)},h0=new WeakSet,h1=function(e){return e.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))},h2=new WeakSet,h3=function(){return this.items.find(e=>0===e.tabIndex)},h4=new WeakSet,h5=function(e){for(let t of this.items)t.tabIndex=t===e?0:-1},h9=new WeakSet,h8=function(e,t){let i=[...this.checkedItems];"radio"===e.type&&this.radioGroupItems.forEach(e=>e.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},rY.shadowRootOptions={mode:"open"},rY.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `},G.customElements.get("media-chrome-menu")||G.customElements.define("media-chrome-menu",rY);var rZ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rX=(e,t,i)=>(rZ(e,t,"read from private field"),i?i.call(e):t.get(e)),rJ=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},r0=(e,t,i,a)=>(rZ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),r1=(e,t,i)=>(rZ(e,t,"access private method"),i);let r2="type",r3="value",r4="checked",r5="disabled";class r9 extends G.HTMLElement{constructor(){if(super(),rJ(this,me),rJ(this,mi),rJ(this,mr),rJ(this,md),rJ(this,h6,!1),rJ(this,h7,void 0),rJ(this,ms,()=>{var e,t;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let i=this.shadowRoot.querySelector('slot[name="description"]'),a=null==(e=this.submenuElement.checkedItems)?void 0:e[0],r=null!=(t=null==a?void 0:a.dataset.description)?t:null==a?void 0:a.text,n=Y.createElement("span");n.textContent=null!=r?r:"",i.replaceChildren(n)}),rJ(this,mo,e=>{let{key:t}=e;this.keysUsed.includes(t)?this.handleClick(e):this.removeEventListener("keyup",rX(this,mo))}),rJ(this,ml,e=>{let{metaKey:t,altKey:i,key:a}=e;t||i||!this.keysUsed.includes(a)?this.removeEventListener("keyup",rX(this,mo)):this.addEventListener("keyup",rX(this,mo),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ee(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[r2,r5,r4,r3]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),r8(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":r1(this,me,mt).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":rX(this,ml).call(this,e);break;case"keyup":rX(this,mo).call(this,e)}}attributeChangedCallback(e,t,i){e===r4&&r8(this)&&!rX(this,h6)?this.setAttribute("aria-checked",null!=i?"true":"false"):e===r2&&i!==t?this.role="menuitem"+i:e===r5&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){this.hasAttribute(r5)||this.enable(),this.role="menuitem"+this.type,r0(this,h7,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.items)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),r1(this,md,mu).call(this),this.submenuElement&&r1(this,mi,ma).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){this.disable(),r1(this,md,mu).call(this),r0(this,h7,null),this.shadowRoot.removeEventListener("slotchange",this)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=el(this))?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return null!=(e=this.getAttribute(r2))?e:""}set type(e){this.setAttribute(r2,`${e}`)}get value(){var e;return null!=(e=this.getAttribute(r3))?e:this.text}set value(e){this.setAttribute(r3,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get checked(){if(r8(this))return"true"===this.getAttribute("aria-checked")}set checked(e){r8(this)&&(r0(this,h6,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){!r8(this)&&this.invokeTargetElement&&en(this,e.target)&&this.invokeTargetElement.dispatchEvent(new rN({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function r8(e){return"radio"===e.type||"checkbox"===e.type}h6=new WeakMap,h7=new WeakMap,me=new WeakSet,mt=function(e){let t=e.target;if(!(null==t?void 0:t.name))for(let e of t.assignedNodes({flatten:!0}))e instanceof Text&&""===e.textContent.trim()&&e.remove();"submenu"===t.name&&(this.submenuElement?r1(this,mi,ma).call(this):r1(this,mr,mn).call(this))},mi=new WeakSet,ma=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",rX(this,ms)),this.submenuElement.addEventListener("addmenuitem",rX(this,ms)),this.submenuElement.addEventListener("removemenuitem",rX(this,ms)),rX(this,ms).call(this)},mr=new WeakSet,mn=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",rX(this,ms)),this.submenuElement.removeEventListener("addmenuitem",rX(this,ms)),this.submenuElement.removeEventListener("removemenuitem",rX(this,ms)),rX(this,ms).call(this)},ms=new WeakMap,mo=new WeakMap,ml=new WeakMap,md=new WeakSet,mu=function(){var e;let t=null==(e=rX(this,h7))?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-checked")).pop();for(let e of(i||(i=t[0]),t))e.setAttribute("aria-checked","false");null==i||i.setAttribute("aria-checked","true")},r9.shadowRootOptions={mode:"open"},r9.getTemplateHTML=function(e){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(e)}
    </slot>
    <slot name="submenu"></slot>
  `},r9.getSuffixSlotInnerHTML=function(e){return""},G.customElements.get("media-chrome-menu-item")||G.customElements.define("media-chrome-menu-item",r9);class r6 extends rY{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:et(this).querySelector("media-settings-menu-button")}}r6.getTemplateHTML=function(e){return`
    ${rY.getTemplateHTML(e)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `},G.customElements.get("media-settings-menu")||G.customElements.define("media-settings-menu",r6);class r7 extends r9{}r7.shadowRootOptions={mode:"open"},r7.getTemplateHTML=function(e){return`
    ${r9.getTemplateHTML.call(this,e)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `},r7.getSuffixSlotInnerHTML=function(e){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `},G.customElements.get("media-settings-menu-item")||G.customElements.define("media-settings-menu-item",r7);class ne extends ih{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=el(this))?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;null==(e=this.invokeTargetElement)||e.dispatchEvent(new rN({relatedTarget:this}))}}G.customElements.get("media-chrome-menu-button")||G.customElements.define("media-chrome-menu-button",ne);class nt extends ne{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",O("settings"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:et(this).querySelector("media-settings-menu")}}nt.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `},nt.getTooltipContentHTML=function(){return O("Settings")},G.customElements.get("media-settings-menu-button")||G.customElements.define("media-settings-menu-button",nt);var ni=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},na=(e,t,i)=>(ni(e,t,"read from private field"),i?i.call(e):t.get(e)),nr=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nn=(e,t,i,a)=>(ni(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ns=(e,t,i)=>(ni(e,t,"access private method"),i);class no extends rY{constructor(){super(...arguments),nr(this,mm),nr(this,mv),nr(this,mc,[]),nr(this,mh,void 0)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_AUDIO_TRACK_LIST,h.MEDIA_AUDIO_TRACK_ENABLED,h.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===h.MEDIA_AUDIO_TRACK_ENABLED&&t!==i)this.value=i;else if(e===h.MEDIA_AUDIO_TRACK_LIST&&t!==i){var a;nn(this,mc,null==(a=null!=i?i:"")?void 0:a.split(/\s+/).map(C)),ns(this,mm,mp).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ns(this,mv,mb))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ns(this,mv,mb))}get anchorElement(){var e;return"auto"!==this.anchor?super.anchorElement:null==(e=et(this))?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return na(this,mc)}set mediaAudioTrackList(e){nn(this,mc,e),ns(this,mm,mp).call(this)}get mediaAudioTrackEnabled(){var e;return null!=(e=eb(this,h.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){eg(this,h.MEDIA_AUDIO_TRACK_ENABLED,e)}}mc=new WeakMap,mh=new WeakMap,mm=new WeakSet,mp=function(){if(na(this,mh)===JSON.stringify(this.mediaAudioTrackList))return;nn(this,mh,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList;for(let t of(this.defaultSlot.textContent="",e.sort((e,t)=>e.id.localeCompare(t.id,void 0,{numeric:!0})),e)){let e=rV({type:"radio",text:this.formatMenuItemText(t.label?t.label:t.language?t.language:t.kind?t.kind:O("Audio"),t),value:`${t.id}`,checked:t.enabled});e.prepend(rF(this,"checked-indicator")),this.defaultSlot.append(e)}},mv=new WeakSet,mb=function(){if(null==this.value)return;let e=new G.CustomEvent(l.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},G.customElements.get("media-audio-track-menu")||G.customElements.define("media-audio-track-menu",no);let nl=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,nd=e=>{let t=O("Audio");e.setAttribute("aria-label",t)};class nu extends ne{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_AUDIO_TRACK_ENABLED,h.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),nd(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_LANG&&nd(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=et(this))?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return null!=(e=eb(this,h.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){eg(this,h.MEDIA_AUDIO_TRACK_ENABLED,e)}}nu.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${nl}</slot>
  `},nu.getTooltipContentHTML=function(){return O("Audio")},G.customElements.get("media-audio-track-menu-button")||G.customElements.define("media-audio-track-menu-button",nu);var nc=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nh=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nm=(e,t,i)=>(nc(e,t,"access private method"),i);let np=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;class nv extends rY{constructor(){super(...arguments),nh(this,mf),nh(this,my),nh(this,mg,void 0)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_SUBTITLES_LIST,h.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_SUBTITLES_LIST&&t!==i?nm(this,mf,mE).call(this):e===h.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i||"",nm(this,mf,mE).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",nm(this,my,m_))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",nm(this,my,m_))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:et(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return nb(this,h.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){ng(this,h.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return nb(this,h.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){ng(this,h.MEDIA_SUBTITLES_SHOWING,e)}}mg=new WeakMap,mf=new WeakSet,mE=function(){var e,t,i,a,r,n;let s=(nc(this,t=mg,"read from private field"),(i?i.call(this):t.get(this))!==JSON.stringify(this.mediaSubtitlesList)),o=this.value!==this.getAttribute(h.MEDIA_SUBTITLES_SHOWING);if(!s&&!o)return;a=mg,r=JSON.stringify(this.mediaSubtitlesList),nc(this,a,"write to private field"),n?n.call(this,r):a.set(this,r),this.defaultSlot.textContent="";let l=!this.value,d=rV({type:"radio",text:this.formatMenuItemText(O("Off")),value:"off",checked:l});for(let t of(d.prepend(rF(this,"checked-indicator")),this.defaultSlot.append(d),this.mediaSubtitlesList)){let i=rV({type:"radio",text:this.formatMenuItemText(t.label?t.label:t.language?t.language:O("Captions"),t),value:e9(t),checked:this.value==e9(t)});i.prepend(rF(this,"checked-indicator")),"captions"===(null!=(e=t.kind)?e:"subs")&&i.append(rF(this,"captions-indicator")),this.defaultSlot.append(i)}},my=new WeakSet,m_=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(h.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new G.CustomEvent(l.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new G.CustomEvent(l.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},nv.getTemplateHTML=function(e){return`
    ${rY.getTemplateHTML(e)}
    <slot name="captions-indicator" hidden>${np}</slot>
  `};let nb=(e,t)=>{let i=e.getAttribute(t);return i?e4(i):[]},ng=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=e8(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};G.customElements.get("media-captions-menu")||G.customElements.define("media-captions-menu",nv);let nf=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,nE=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,ny=e=>{e.setAttribute("data-captions-enabled",tt(e).toString())},n_=e=>{e.setAttribute("aria-label",O("closed captions"))};class nk extends ne{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_SUBTITLES_LIST,h.MEDIA_SUBTITLES_SHOWING,h.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),n_(this),ny(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_SUBTITLES_SHOWING?ny(this):e===h.MEDIA_LANG&&n_(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=et(this))?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return nT(this,h.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){nw(this,h.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return nT(this,h.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){nw(this,h.MEDIA_SUBTITLES_SHOWING,e)}}nk.getSlotTemplateHTML=function(){return`
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${nf}</slot>
      <slot name="off">${nE}</slot>
    </slot>
  `},nk.getTooltipContentHTML=function(){return O("Captions")};let nT=(e,t)=>{let i=e.getAttribute(t);return i?e4(i):[]},nw=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=e8(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};G.customElements.get("media-captions-menu-button")||G.customElements.define("media-captions-menu-button",nk);var nA=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nC=(e,t,i)=>(nA(e,t,"read from private field"),i?i.call(e):t.get(e)),nS=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nI=(e,t,i)=>(nA(e,t,"access private method"),i);let nR="rates";class nL extends rY{constructor(){super(),nS(this,mT),nS(this,mA),nS(this,mk,new e2(this,nR,{defaultValue:ap})),nI(this,mT,mw).call(this)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PLAYBACK_RATE,nR]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_PLAYBACK_RATE&&t!=i?(this.value=i,nI(this,mT,mw).call(this)):e===nR&&t!=i&&(nC(this,mk).value=i,nI(this,mT,mw).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",nI(this,mA,mC))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",nI(this,mA,mC))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:et(this).querySelector("media-playback-rate-menu-button")}get rates(){return nC(this,mk)}set rates(e){e?Array.isArray(e)?nC(this,mk).value=e.join(" "):"string"==typeof e&&(nC(this,mk).value=e):nC(this,mk).value="",nI(this,mT,mw).call(this)}get mediaPlaybackRate(){return eh(this,h.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){em(this,h.MEDIA_PLAYBACK_RATE,e)}}mk=new WeakMap,mT=new WeakSet,mw=function(){this.defaultSlot.textContent="";let e=av(this.mediaPlaybackRate),t=new Set(Array.from(nC(this,mk)).map(e=>av(Number(e))));for(let i of(e>0&&!t.has(e)&&t.add(e),Array.from(t).sort((e,t)=>e-t))){let t=rV({type:"radio",text:this.formatMenuItemText(`${i}x`,i),value:i.toString(),checked:e===i});t.prepend(rF(this,"checked-indicator")),this.defaultSlot.append(t)}},mA=new WeakSet,mC=function(){if(!this.value)return;let e=new G.CustomEvent(l.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},G.customElements.get("media-playback-rate-menu")||G.customElements.define("media-playback-rate-menu",nL);class nx extends ne{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${av(null!=(e=this.mediaPlaybackRate)?e:1)}x`}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===h.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=av(Number.isNaN(e)?1:e);this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",O("Playback rate {playbackRate}",{playbackRate:t}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:et(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return eh(this,h.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){em(this,h.MEDIA_PLAYBACK_RATE,e)}}nx.getSlotTemplateHTML=function(e){let t=e.mediaplaybackrate?av(+e.mediaplaybackrate):1;return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }

      :host([aria-expanded="true"]) slot {
        display: block;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${t}x</slot>
  `},nx.getTooltipContentHTML=function(){return O("Playback rate")},G.customElements.get("media-playback-rate-menu-button")||G.customElements.define("media-playback-rate-menu-button",nx);var nM=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nD=(e,t,i)=>(nM(e,t,"read from private field"),i?i.call(e):t.get(e)),nO=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nP=(e,t,i,a)=>(nM(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),nN=(e,t,i)=>(nM(e,t,"access private method"),i);class nU extends rY{constructor(){super(...arguments),nO(this,mR),nO(this,mx),nO(this,mS,[]),nO(this,mI,{})}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_RENDITION_LIST,h.MEDIA_RENDITION_SELECTED,h.MEDIA_RENDITION_UNAVAILABLE,h.MEDIA_HEIGHT,h.MEDIA_WIDTH]}static formatMenuItemText(e,t){return super.formatMenuItemText(e,t)}static formatRendition(e,{showBitrate:t=!1}={}){let i=`${Math.min(e.width,e.height)}p`;if(t&&e.bitrate){let t=e.bitrate/1e6,a=`${t.toFixed(+(t<1))} Mbps`;return`${i} (${a})`}return this.formatMenuItemText(i,e)}static compareRendition(e,t){var i,a;return t.height===e.height?(null!=(i=t.bitrate)?i:0)-(null!=(a=e.bitrate)?a:0):t.height-e.height}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),t!==i)switch(e){case h.MEDIA_RENDITION_SELECTED:this.value=null!=i?i:"auto",nN(this,mR,mL).call(this);break;case h.MEDIA_RENDITION_LIST:nP(this,mS,null==i?void 0:i.split(/\s+/).map(w)),nN(this,mR,mL).call(this);break;case h.MEDIA_HEIGHT:case h.MEDIA_WIDTH:nN(this,mR,mL).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",nN(this,mx,mM))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",nN(this,mx,mM))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:et(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return nD(this,mS)}set mediaRenditionList(e){nP(this,mS,e),nN(this,mR,mL).call(this)}get mediaRenditionSelected(){return eb(this,h.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){eg(this,h.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return eh(this,h.MEDIA_HEIGHT)}set mediaHeight(e){em(this,h.MEDIA_HEIGHT,e)}get mediaWidth(){return eh(this,h.MEDIA_WIDTH)}set mediaWidth(e){em(this,h.MEDIA_WIDTH,e)}compareRendition(e,t){return this.constructor.compareRendition(e,t)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}formatRendition(e,t){return this.constructor.formatRendition(e,t)}showRenditionBitrate(e){return this.mediaRenditionList.some(t=>t!==e&&t.height===e.height&&t.bitrate!==e.bitrate)}}mS=new WeakMap,mI=new WeakMap,mR=new WeakSet,mL=function(){let e,t=!this.mediaRenditionSelected;if(nD(this,mI).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&nD(this,mI).mediaHeight===this.mediaHeight&&nD(this,mI).mediaWidth===this.mediaWidth&&nD(this,mI).isAuto===t)return;nD(this,mI).mediaRenditionList=JSON.stringify(this.mediaRenditionList),nD(this,mI).mediaHeight=this.mediaHeight,nD(this,mI).mediaWidth=this.mediaWidth,nD(this,mI).isAuto=t;let i=this.mediaRenditionList.sort(this.compareRendition.bind(this)),a=i.find(e=>e.id===this.mediaRenditionSelected);for(let e of i)e.selected=e===a;for(let e of(this.defaultSlot.textContent="",i)){let i=rV({type:"radio",text:this.formatRendition(e,{showBitrate:this.showRenditionBitrate(e)}),value:`${e.id}`,checked:e.selected&&!t});i.prepend(rF(this,"checked-indicator")),this.defaultSlot.append(i)}let r=a&&this.showRenditionBitrate(a);t&&(a?e=this.formatMenuItemText(`${O("Auto")} \u2022 ${this.formatRendition(a,{showBitrate:r})}`,a):this.mediaHeight>0&&this.mediaWidth>0&&(e=this.formatMenuItemText(`${O("Auto")} (${Math.min(this.mediaWidth,this.mediaHeight)}p)`))),e||(e=this.formatMenuItemText(O("Auto")));let n=rV({type:"radio",text:e,value:"auto",checked:t});n.dataset.description=e,n.prepend(rF(this,"checked-indicator")),this.defaultSlot.append(n)},mx=new WeakSet,mM=function(){if(null==this.value)return;let e=new G.CustomEvent(l.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},G.customElements.get("media-rendition-menu")||G.customElements.define("media-rendition-menu",nU);let nH=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;class nW extends ne{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_RENDITION_SELECTED,h.MEDIA_RENDITION_UNAVAILABLE,h.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",O("quality"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:et(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return eb(this,h.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){eg(this,h.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return eh(this,h.MEDIA_HEIGHT)}set mediaHeight(e){em(this,h.MEDIA_HEIGHT,e)}}nW.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${nH}</slot>
  `},nW.getTooltipContentHTML=function(){return O("Quality")},G.customElements.get("media-rendition-menu-button")||G.customElements.define("media-rendition-menu-button",nW);var nB=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},n$=(e,t,i)=>(nB(e,t,"read from private field"),i?i.call(e):t.get(e)),nq=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nV=(e,t,i,a)=>(nB(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),nF=(e,t,i)=>(nB(e,t,"access private method"),i);class nK extends rY{constructor(){super(),nq(this,mO),nq(this,mN),nq(this,mH),nq(this,mB),nq(this,mV),nq(this,mD,!1),nq(this,mq,e=>{let t=e.target,i=(null==t?void 0:t.nodeName)==="VIDEO",a=nF(this,mB,m$).call(this,t);(i||a)&&(n$(this,mD)?nF(this,mN,mU).call(this):nF(this,mV,mF).call(this,e))}),nq(this,mK,e=>{let t=e.target,i=this.contains(t),a=2===e.button,r=(null==t?void 0:t.nodeName)==="VIDEO",n=nF(this,mB,m$).call(this,t);i||a&&(r||n)||nF(this,mN,mU).call(this)}),nq(this,mj,e=>{"Escape"===e.key&&nF(this,mN,mU).call(this)}),nq(this,mG,e=>{var t,i;let a=e.target;if(null==(t=a.matches)?void 0:t.call(a,'button[invoke="copy"]')){let e=null==(i=a.closest("media-context-menu-item"))?void 0:i.querySelector('input[slot="copy"]');e&&navigator.clipboard.writeText(e.value)}nF(this,mN,mU).call(this)}),this.setAttribute("noautohide",""),nF(this,mO,mP).call(this)}connectedCallback(){super.connectedCallback(),et(this).addEventListener("contextmenu",n$(this,mq)),this.addEventListener("click",n$(this,mG))}disconnectedCallback(){super.disconnectedCallback(),et(this).removeEventListener("contextmenu",n$(this,mq)),this.removeEventListener("click",n$(this,mG)),document.removeEventListener("mousedown",n$(this,mK)),document.removeEventListener("keydown",n$(this,mj))}}mD=new WeakMap,mO=new WeakSet,mP=function(){this.hidden=!n$(this,mD)},mN=new WeakSet,mU=function(){nV(this,mD,!1),nF(this,mO,mP).call(this)},mH=new WeakSet,mW=function(){document.querySelectorAll("media-context-menu").forEach(e=>{e!==this&&nF(e,mN,mU).call(e)})},mB=new WeakSet,m$=function(e){return!!e&&(!!e.hasAttribute("slot")&&"media"===e.getAttribute("slot")||!!(e.nodeName.includes("-")&&e.tagName.includes("-"))&&(e.hasAttribute("src")||e.hasAttribute("poster")||e.hasAttribute("preload")||e.hasAttribute("playsinline")))},mq=new WeakMap,mV=new WeakSet,mF=function(e){e.preventDefault(),nF(this,mH,mW).call(this),nV(this,mD,!0),this.style.position="fixed",this.style.left=`${e.clientX}px`,this.style.top=`${e.clientY}px`,nF(this,mO,mP).call(this),document.addEventListener("mousedown",n$(this,mK),{once:!0}),document.addEventListener("keydown",n$(this,mj),{once:!0})},mK=new WeakMap,mj=new WeakMap,mG=new WeakMap,nK.getTemplateHTML=function(e){return`
      ${rY.getTemplateHTML(e)}
      <style>
        :host {
          --_menu-bg: rgb(20 20 30 / .8);
          background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
          min-width: var(--media-settings-menu-min-width, 170px);
          border-radius: 2px;
          overflow: hidden;
        }
      </style>
    `},G.customElements.get("media-context-menu")||G.customElements.define("media-context-menu",nK);class nj extends r9{}nj.shadowRootOptions={mode:"open"},nj.getTemplateHTML=function(e){return`
    ${r9.getTemplateHTML.call(this,e)}
    <style>
        ::slotted(*) {
            color: var(--media-text-color, white);
            text-decoration: none;
            border: none;
            background: none;
            cursor: pointer;
            padding: 0;
            min-height: var(--media-control-height, 24px);
        }
    </style>
  `},G.customElements.get("media-context-menu-item")||G.customElements.define("media-context-menu-item",nj);let nG=G.document?.createElement?.("template");nG&&(nG.innerHTML=String.raw`
    <!-- Sutro -->
    <style>
      :host {
        --_primary-color: var(--media-primary-color, #fff);
        --_secondary-color: var(--media-secondary-color, transparent);
        --_accent-color: var(--media-accent-color, #fff);
      }

      media-controller {
        --base: 18px;

        font-size: calc(0.75 * var(--base));
        font-family: Roboto, Arial, sans-serif;
        --media-font-family: Roboto, helvetica neue, segoe ui, arial, sans-serif;
        -webkit-font-smoothing: antialiased;

        --media-primary-color: #fff;
        --media-secondary-color: transparent;
        --media-menu-background: rgba(28, 28, 28, 0.6);
        --media-text-color: var(--_primary-color);
        --media-control-hover-background: var(--media-secondary-color);

        --media-range-track-height: calc(0.125 * var(--base));
        --media-range-thumb-height: var(--base);
        --media-range-thumb-width: var(--base);
        --media-range-thumb-border-radius: var(--base);

        --media-control-height: calc(2 * var(--base));
      }

      media-controller[breakpointmd] {
        --base: 20px;
      }

      /* The biggest size controller is tied to going fullscreen
          instead of a player width. */
      media-controller[mediaisfullscreen] {
        --base: 24px;
      }

      .media-button {
        --media-control-hover-background: var(--_secondary-color);
        --media-tooltip-background: rgb(28 28 28 / .24);
        --media-text-content-height: 1.2;
        --media-tooltip-padding: .7em 1em;
        --media-tooltip-distance: 8px;
        --media-tooltip-container-margin: 18px;
        position: relative;
        padding: 0;
        opacity: 0.9;
        transition: opacity 0.1s cubic-bezier(0.4, 0, 1, 1);
      }

      .media-button svg {
        fill: none;
        stroke: var(--_primary-color);
        stroke-width: 1;
        stroke-linecap: 'round';
        stroke-linejoin: 'round';
      }

      svg .svg-shadow {
        stroke: #000;
        stroke-opacity: 0.15;
        stroke-width: 2px;
        fill: none;
      }
    </style>

    <media-controller
      breakpoints="md:480"
      defaultsubtitles="{{defaultsubtitles}}"
      defaultduration="{{defaultduration}}"
      gesturesdisabled="{{disabled}}"
      hotkeys="{{hotkeys}}"
      nohotkeys="{{nohotkeys}}"
      defaultstreamtype="on-demand"
    >
      <slot name="media" slot="media"></slot>
      <slot name="poster" slot="poster"></slot>
      <slot name="centered-chrome" slot="centered-chrome"></slot>
      <media-error-dialog slot="dialog"></media-error-dialog>

      <!-- Controls Gradient -->
      <style>
        .media-gradient-bottom {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: calc(8 * var(--base));
          pointer-events: none;
        }

        .media-gradient-bottom::before {
          content: '';
          --gradient-steps: hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%,
            hsl(0 0% 0% / 0.104) 22.5%, hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%,
            hsl(0 0% 0% / 0.45) 47.1%, hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%,
            hsl(0 0% 0% / 0.825) 71%, hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%,
            hsl(0 0% 0%) 100%;

          position: absolute;
          inset: 0;
          opacity: 0.7;
          background: linear-gradient(to bottom, var(--gradient-steps));
        }
      </style>
      <div class="media-gradient-bottom"></div>

      <!-- Settings Menu -->
      <style>
        media-settings-menu {
          --media-menu-icon-height: 20px;
          --media-menu-item-icon-height: 20px;
          --media-settings-menu-min-width: calc(10 * var(--base));
          --media-menu-transform-in: translateY(0) scale(1);
          --media-menu-transform-out: translateY(20px) rotate(3deg) scale(1);
          padding-block: calc(0.15 * var(--base));
          margin-right: 10px;
          margin-bottom: 17px;
          border-radius: 8px;
          z-index: 2;
          user-select: none;
        }

        media-settings-menu-item,
        [role='menu']::part(menu-item) {
          --media-icon-color: var(--_primary-color);
          margin-inline: calc(0.45 * var(--base));
          height: calc(1.6 * var(--base));
          font-size: calc(0.7 * var(--base));
          font-weight: 400;
          padding: 0;
          padding-left: calc(0.4 * var(--base));
          padding-right: calc(0.1 * var(--base));
          border-radius: 6px;
          text-shadow: none;
        }

        [slot='submenu']::part(back button) {
          font-size: calc(0.7 * var(--base));
        }

        media-settings-menu-item:hover {
          --media-icon-color: #000;
          color: #000;
          background-color: #fff;
        }

        media-settings-menu-item:hover [slot='submenu']::part(menu-item),
        [slot='submenu']::part(back indicator) {
          --media-icon-color: var(--_primary-color);
        }

        media-settings-menu-item:hover [slot='submenu']::part(menu-item):hover {
          --media-icon-color: #000;
          color: #000;
          background-color: #fff;
        }

        media-settings-menu-item[submenusize='0'] {
          display: none;
        }

        /* Also hide if only 'Auto' is added. */
        .quality-settings[submenusize='1'] {
          display: none;
        }
      </style>
      <media-settings-menu hidden anchor="auto">
        <media-settings-menu-item>
          Playback Speed
          <media-playback-rate-menu slot="submenu" hidden>
            <div slot="title">Playback Speed</div>
          </media-playback-rate-menu>
        </media-settings-menu-item>
        <media-settings-menu-item class="quality-settings">
          Quality
          <media-rendition-menu slot="submenu" hidden>
            <div slot="title">Quality</div>
          </media-rendition-menu>
        </media-settings-menu-item>
        <media-settings-menu-item>
          Subtitles/CC
          <media-captions-menu slot="submenu" hidden>
            <div slot="title">Subtitles/CC</div>
          </media-captions-menu>
        </media-settings-menu-item>
      </media-settings-menu>

      <!-- Control Bar -->
      <style>
        media-control-bar {
          position: absolute;
          height: calc(2 * var(--base));
          line-height: calc(2 * var(--base));
          bottom: var(--base);
          left: var(--base);
          right: var(--base);
        }
      </style>
      <media-control-bar>
        <!-- Play/Pause -->
        <style>
          @keyframes bounce-scale-play {
            0% {
              transform: scale(0.75, 0.75);
            }
            50% {
              transform: scale(115%, 115%);
            }
            100% {
              transform: scale(1, 1);
            }
          }

          .media-button {
            border-radius: 25%;
            backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(0);
            -webkit-backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(0);
            transition: backdrop-filter 0.3s, -webkit-backdrop-filter 0.3s, box-shadow 0.3s;
          }

          .media-button:hover {
            /* background-color: rgba(0, 0, 0, 0.05); */
            box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 5px;
            /* hue-rotate(120deg) */
            backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(1);
            -webkit-backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(1);
            transition: backdrop-filter 0.3s, -webkit-backdrop-filter 0.3s;
          }

          media-play-button #icon-play {
            opacity: 0;
            transform-box: view-box;
            transform-origin: center center;
            transform: scale(0.5, 0.5);
            transition: all 0.5s;
          }

          media-play-button[mediapaused] #icon-play {
            opacity: 1;
            transform: scale(1, 1);
            animation: 0.35s bounce-scale-play ease-in-out;
          }

          @keyframes bounce-pause-left {
            0% {
              font-size: 10px;
            }
            50% {
              font-size: 3px;
            }
            100% {
              font-size: 4px;
            }
          }

          @keyframes bounce-pause-right {
            0% {
              font-size: 10px;
              transform: translateX(-8px);
            }
            50% {
              font-size: 3px;
              transform: translateX(1px);
            }
            100% {
              font-size: 4px;
              transform: translateX(0);
            }
          }

          media-play-button #pause-left,
          media-play-button #pause-right {
            /* Using font-size to animate height because using scale was resulting in unexpected positioning */
            font-size: 4px;
            opacity: 1;
            transform: translateX(0);
            transform-box: view-box;
          }

          media-play-button:not([mediapaused]) #pause-left {
            animation: 0.3s bounce-pause-left ease-out;
          }

          media-play-button:not([mediapaused]) #pause-right {
            animation: 0.3s bounce-pause-right ease-out;
          }

          media-play-button[mediapaused] #pause-left,
          media-play-button[mediapaused] #pause-right {
            opacity: 0;
            font-size: 10px;
          }

          media-play-button[mediapaused] #pause-right {
            transform-origin: right center;
            transform: translateX(-8px);
          }
        </style>
        <media-play-button mediapaused class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <!-- <use class="svg-shadow" xlink:href="#icon-play"></use> -->
            <g>
              <path
                id="icon-play"
                d="M20.7131 14.6976C21.7208 15.2735 21.7208 16.7265 20.7131 17.3024L12.7442 21.856C11.7442 22.4274 10.5 21.7054 10.5 20.5536L10.5 11.4464C10.5 10.2946 11.7442 9.57257 12.7442 10.144L20.7131 14.6976Z"
              />
            </g>
            <!-- <use class="svg-shadow" xlink:href="#icon-pause"></use> -->
            <g id="icon-pause">
              <rect id="pause-left" x="10.5" width="1em" y="10.5" height="11" rx="0.5" />
              <rect id="pause-right" x="17.5" width="1em" y="10.5" height="11" rx="0.5" />
            </g>
          </svg>
        </media-play-button>

        <!-- Volume/Mute -->
        <style>
          media-mute-button {
            position: relative;
          }

          media-mute-button .muted-path {
            transition: clip-path 0.2s ease-out;
          }

          media-mute-button #muted-path-2 {
            transition-delay: 0.2s;
          }

          media-mute-button .muted-path {
            clip-path: inset(0);
          }

          media-mute-button:not([mediavolumelevel='off']) #muted-path-1 {
            clip-path: inset(0 0 100% 0);
          }

          media-mute-button:not([mediavolumelevel='off']) #muted-path-2 {
            clip-path: inset(0 0 100% 0);
          }

          media-mute-button .muted-path {
            opacity: 0;
          }

          media-mute-button[mediavolumelevel='off'] .muted-path {
            opacity: 1;
          }

          media-mute-button .vol-path {
            opacity: 1;
            transition: opacity 0.4s;
          }

          media-mute-button[mediavolumelevel='off'] .vol-path {
            opacity: 0;
          }

          media-mute-button[mediavolumelevel='low'] #vol-high-path,
          media-mute-button[mediavolumelevel='medium'] #vol-high-path {
            opacity: 0;
          }

          media-volume-range {
            --media-range-track-background: rgba(255, 255, 255, 0.2);
            --media-range-thumb-opacity: 0;
          }

          @keyframes volume-in {
            0% {
              visibility: hidden;
              opacity: 0;
              transform: translateY(50%) rotate(1deg);
            }
            50% {
              visibility: visible;
              opacity: 1;
              transform: rotate(-2deg);
            }
            100% {
              visibility: visible;
              opacity: 1;
              transform: translateY(0) rotate(0deg);
            }
          }

          @keyframes volume-out {
            0% {
              visibility: visible;
              opacity: 1;
              transform: translateY(0) rotate(0deg);
            }
            50% {
              opacity: 1;
              transform: rotate(0deg);
            }
            100% {
              visibility: hidden;
              opacity: 0;
              transform: translateY(50%) rotate(1deg);
            }
          }

          .media-volume-range-wrapper {
            opacity: 0;
            visibility: hidden;

            position: absolute;
            top: -100%;
            left: calc(2 * var(--base));

            width: calc(10 * var(--base));
            height: calc(2.5 * var(--base));
            transform-origin: center left;
          }

          media-volume-range {
            /*
              Hide range and animation until mediavolume attribute is set.
              'visibility' didn't work, hovering over media-volume-range-wrapper
              caused it to show. Should require mute-button:hover.
            */
            opacity: 0;
            transition: opacity 0s 1s;

            width: calc(10 * var(--base));
            height: var(--base);
            padding: 0;
            border-radius: calc(0.25 * var(--base));
            overflow: hidden;
            background: rgba(0, 0, 0, 0.2);

            --media-range-bar-color: var(--media-accent-color);

            --media-range-padding-left: 0;
            --media-range-padding-right: 0;

            --media-range-track-width: calc(10 * var(--base));
            --media-range-track-height: var(--base);
            --media-range-track-border-radius: calc(0.25 * var(--base));
            --media-range-track-backdrop-filter: blur(10px) brightness(80%);

            /* This makes zero volume still show some of the bar.
               I can't make the bar have curved corners otherwise though. */
            --media-range-thumb-width: var(--base);
            --media-range-thumb-border-radius: calc(0.25 * var(--base));

            /* The Sutro design has a gradient like this, but not sure I like it */
            /* --media-range-thumb-box-shadow: 10px 0px 20px rgba(255, 255, 255, 0.5); */
          }

          media-volume-range[mediavolume] {
            opacity: 1;
          }

          [keyboardcontrol] media-volume-range:focus {
            /* TODO: This appears to be creating a think outline */
            outline: 1px solid rgba(27, 127, 204, 0.9);
          }

          media-mute-button:hover + .media-volume-range-wrapper,
          media-mute-button:focus + .media-volume-range-wrapper,
          media-mute-button:focus-within + .media-volume-range-wrapper,
          .media-volume-range-wrapper:hover,
          .media-volume-range-wrapper:focus,
          .media-volume-range-wrapper:focus-within {
            animation: 0.3s volume-in forwards ease-out;
          }

          .media-volume-range-wrapper:not(:hover, :focus-within) {
            animation: 0.3s volume-out ease-out;
          }

          /* When keyboard navigating the volume range and wrapper need to always be visible
            otherwise focus state can't land on it. This is ok when keyboard navigating because
            the hovering issues aren't a concern, unless you happen to be keyboard AND mouse navigating.
          */
          [keyboardcontrol] .media-volume-range-wrapper,
          [keyboardcontrol] .media-volume-range-wrapper:focus-within,
          [keyboardcontrol] .media-volume-range-wrapper:focus-within media-volume-range {
            visibility: visible;
          }
        </style>
        <media-mute-button class="media-button" notooltip>
          <use class="svg-shadow" xlink:href="#vol-paths"></use>
          <svg slot="icon" viewBox="0 0 32 32">
            <g id="vol-paths">
              <path
                id="speaker-path"
                d="M16.5 20.486v-8.972c0-1.537-2.037-2.08-2.802-.745l-1.026 1.79a2.5 2.5 0 0 1-.8.85l-1.194.78A1.5 1.5 0 0 0 10 15.446v1.11c0 .506.255.978.678 1.255l1.194.782a2.5 2.5 0 0 1 .8.849l1.026 1.79c.765 1.334 2.802.792 2.802-.745Z"
              />
              <path
                id="vol-low-path"
                class="vol-path"
                d="M18.5 18C19.6046 18 20.5 17.1046 20.5 16C20.5 14.8954 19.6046 14 18.5 14"
              />
              <path
                id="vol-high-path"
                class="vol-path"
                d="M18 21C20.7614 21 23 18.7614 23 16C23 13.2386 20.7614 11 18 11"
              />
              <path id="muted-path-1" class="muted-path" d="M23 18L19 14" />
              <path id="muted-path-2" class="muted-path" d="M23 14L19 18" />
            </g>
          </svg>
        </media-mute-button>
        <div class="media-volume-range-wrapper">
          <media-volume-range></media-volume-range>
        </div>

        <!-- Time Display -->
        <style>
          media-time-display {
            position: relative;
            padding: calc(0.5 * var(--base));
            font-size: calc(0.7 * var(--base));
            border-radius: calc(0.5 * var(--base));
          }

          media-controller[breakpointmd] media-time-display:not([showduration]) {
            display: none;
          }

          media-controller:not([breakpointmd]) media-time-display[showduration] {
            display: none;
          }
        </style>
        <media-time-display></media-time-display>
        <media-time-display showduration></media-time-display>

        <!-- Time Range / Progress Bar -->
        <style>
          media-time-range {
            height: calc(2 * var(--base));
            border-radius: calc(0.25 * var(--base));

            --media-range-track-backdrop-filter: invert(10%) blur(5px) brightness(110%);
            --media-range-track-background: rgba(255, 255, 255, 0.2);
            --media-range-track-pointer-background: rgba(255, 255, 255, 0.5);
            --media-range-track-border-radius: calc(0.25 * var(--base));

            --media-time-range-buffered-color: rgba(255, 255, 255, 0.4);
            --media-range-bar-color: var(--media-accent-color);

            --media-range-thumb-background: var(--media-accent-color);
            --media-range-thumb-transition: opacity 0.1s linear;
            --media-range-thumb-opacity: 0;

            --media-preview-thumbnail-border: calc(0.125 * var(--base)) solid #fff;
            --media-preview-thumbnail-border-radius: calc(0.5 * var(--base));
            --media-preview-thumbnail-min-width: calc(8 * var(--base));
            --media-preview-thumbnail-max-width: calc(10 * var(--base));
            --media-preview-thumbnail-min-height: calc(5 * var(--base));
            --media-preview-thumbnail-max-height: calc(7 * var(--base));
            --media-preview-box-margin: 0 0 -10px;
          }
          media-time-range:hover {
            --media-range-thumb-opacity: 1;
            --media-range-track-height: calc(0.25 * var(--base));
          }

          media-preview-thumbnail {
            margin-bottom: 5px;
          }

          media-preview-chapter-display {
            font-size: calc(0.6 * var(--base));
            padding-block: 0;
          }

          media-preview-time-display {
            font-size: calc(0.65 * var(--base));
            padding-top: 0;
          }
        </style>
        <media-time-range>
          <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
          <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
          <media-preview-time-display slot="preview"></media-preview-time-display>
        </media-time-range>

        <!-- Subtitles/CC Button -->
        <style>
          media-captions-button {
            position: relative;
          }

          media-controller:not([breakpointmd]) media-captions-button {
            display: none;
          }

          media-captions-button svg :is(path, rect) {
            stroke: none;
            fill: var(--_primary-color);
          }

          /* Disble the captions button when no subtitles are available */
          media-captions-button:not([mediasubtitleslist]) svg {
            opacity: 0.3;
          }

          media-captions-button #cc-underline {
            opacity: 1;
          }

          media-captions-button[mediasubtitleslist][aria-checked='true'] #cc-underline {
            opacity: 1;
          }

          media-captions-button #cc-underline {
            transition: clip-path 0.15s ease-out;
          }

          media-captions-button #cc-underline {
            clip-path: inset(0 100% 0 0);
          }

          media-captions-button[aria-checked='true'] #cc-underline {
            clip-path: inset(0 0 0 0);
          }
        </style>
        <media-captions-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#cc-icon"></use>
            <g id="cc-icon">
              <path
                class="cc-c"
                d="M15.6634 14.3574H14.5636C14.4985 14.0523 14.3847 13.7842 14.2221 13.5532C14.0624 13.3222 13.8673 13.1283 13.6367 12.9715C13.409 12.8118 13.1562 12.692 12.8783 12.6122C12.6004 12.5323 12.3107 12.4924 12.0091 12.4924C11.4592 12.4924 10.961 12.6264 10.5146 12.8945C10.0711 13.1625 9.71776 13.5575 9.45463 14.0794C9.19445 14.6012 9.06436 15.2414 9.06436 16C9.06436 16.7586 9.19445 17.3988 9.45463 17.9206C9.71776 18.4425 10.0711 18.8375 10.5146 19.1055C10.961 19.3736 11.4592 19.5076 12.0091 19.5076C12.3107 19.5076 12.6004 19.4677 12.8783 19.3878C13.1562 19.308 13.409 19.1896 13.6367 19.0328C13.8673 18.8731 14.0624 18.6778 14.2221 18.4468C14.3847 18.2129 14.4985 17.9449 14.5636 17.6426H15.6634C15.5806 18.0903 15.4298 18.491 15.2111 18.8446C14.9923 19.1982 14.7203 19.499 14.3951 19.7471C14.0698 19.9924 13.7047 20.1792 13.2996 20.3075C12.8976 20.4358 12.4674 20.5 12.0091 20.5C11.2345 20.5 10.5456 20.3175 9.94246 19.9525C9.33932 19.5875 8.8648 19.0684 8.51888 18.3954C8.17296 17.7224 8 16.924 8 16C8 15.076 8.17296 14.2776 8.51888 13.6046C8.8648 12.9316 9.33932 12.4125 9.94246 12.0475C10.5456 11.6825 11.2345 11.5 12.0091 11.5C12.4674 11.5 12.8976 11.5642 13.2996 11.6925C13.7047 11.8208 14.0698 12.009 14.3951 12.2571C14.7203 12.5024 14.9923 12.8018 15.2111 13.1554C15.4298 13.5062 15.5806 13.9068 15.6634 14.3574Z"
              />
              <path
                class="cc-c"
                d="M24 14.3574H22.9002C22.8351 14.0523 22.7213 13.7842 22.5587 13.5532C22.399 13.3222 22.2039 13.1283 21.9733 12.9715C21.7456 12.8118 21.4928 12.692 21.2149 12.6122C20.937 12.5323 20.6473 12.4924 20.3457 12.4924C19.7958 12.4924 19.2976 12.6264 18.8511 12.8945C18.4077 13.1625 18.0543 13.5575 17.7912 14.0794C17.531 14.6012 17.4009 15.2414 17.4009 16C17.4009 16.7586 17.531 17.3988 17.7912 17.9206C18.0543 18.4425 18.4077 18.8375 18.8511 19.1055C19.2976 19.3736 19.7958 19.5076 20.3457 19.5076C20.6473 19.5076 20.937 19.4677 21.2149 19.3878C21.4928 19.308 21.7456 19.1896 21.9733 19.0328C22.2039 18.8731 22.399 18.6778 22.5587 18.4468C22.7213 18.2129 22.8351 17.9449 22.9002 17.6426H24C23.9172 18.0903 23.7664 18.491 23.5476 18.8446C23.3289 19.1982 23.0569 19.499 22.7316 19.7471C22.4064 19.9924 22.0413 20.1792 21.6362 20.3075C21.2341 20.4358 20.804 20.5 20.3457 20.5C19.5711 20.5 18.8822 20.3175 18.279 19.9525C17.6759 19.5875 17.2014 19.0684 16.8555 18.3954C16.5095 17.7224 16.3366 16.924 16.3366 16C16.3366 15.076 16.5095 14.2776 16.8555 13.6046C17.2014 12.9316 17.6759 12.4125 18.279 12.0475C18.8822 11.6825 19.5711 11.5 20.3457 11.5C20.804 11.5 21.2341 11.5642 21.6362 11.6925C22.0413 11.8208 22.4064 12.009 22.7316 12.2571C23.0569 12.5024 23.3289 12.8018 23.5476 13.1554C23.7664 13.5062 23.9172 13.9068 24 14.3574Z"
              />
              <rect id="cc-underline" x="8" y="23" width="16" height="1" rx="0.5" />
            </g>
          </svg>
        </media-captions-button>

        <!-- Settings Menu Button -->
        <style>
          media-settings-menu-button svg {
            transition: transform 0.1s cubic-bezier(0.4, 0, 1, 1);
            transform: rotateZ(0deg);
          }
          media-settings-menu-button[aria-expanded='true'] svg {
            transform: rotateZ(30deg);
          }
        </style>
        <media-settings-menu-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#settings-icon"></use>
            <g id="settings-icon">
              <path
                d="M16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18Z"
              />
              <path
                d="M21.0176 13.0362L20.9715 12.9531C20.8445 12.7239 20.7797 12.4629 20.784 12.1982L20.8049 10.8997C20.8092 10.6343 20.675 10.3874 20.4545 10.2549L18.5385 9.10362C18.3186 8.97143 18.0472 8.9738 17.8293 9.10981L16.7658 9.77382C16.5485 9.90953 16.2999 9.98121 16.0465 9.98121H15.9543C15.7004 9.98121 15.4513 9.90922 15.2336 9.77295L14.1652 9.10413C13.9467 8.96728 13.674 8.96518 13.4535 9.09864L11.5436 10.2545C11.3242 10.3873 11.1908 10.6336 11.1951 10.8981L11.216 12.1982C11.2203 12.4629 11.1555 12.7239 11.0285 12.9531L10.9831 13.0351C10.856 13.2645 10.6715 13.4535 10.4493 13.5819L9.36075 14.2109C9.13763 14.3398 8.99942 14.5851 9 14.8511L9.00501 17.152C9.00559 17.4163 9.1432 17.6597 9.36476 17.7883L10.4481 18.4167C10.671 18.546 10.8559 18.7364 10.9826 18.9673L11.0313 19.0559C11.1565 19.284 11.2203 19.5431 11.2161 19.8059L11.1951 21.1003C11.1908 21.3657 11.325 21.6126 11.5456 21.7452L13.4615 22.8964C13.6814 23.0286 13.9528 23.0262 14.1707 22.8902L15.2342 22.2262C15.4515 22.0905 15.7001 22.0188 15.9535 22.0188H16.0457C16.2996 22.0188 16.5487 22.0908 16.7664 22.227L17.8348 22.8959C18.0534 23.0327 18.326 23.0348 18.5465 22.9014L20.4564 21.7455C20.6758 21.6127 20.8092 21.3664 20.8049 21.1019L20.784 19.8018C20.7797 19.5371 20.8445 19.2761 20.9715 19.0469L21.0169 18.9649C21.144 18.7355 21.3285 18.5465 21.5507 18.4181L22.6393 17.7891C22.8624 17.6602 23.0006 17.4149 23 17.1489L22.995 14.848C22.9944 14.5837 22.8568 14.3403 22.6352 14.2117L21.5493 13.5818C21.328 13.4534 21.1442 13.2649 21.0176 13.0362Z"
              />
            </g>
          </svg>
        </media-settings-menu-button>

        <!-- PIP/Mini Player Button -->
        <style>
          media-controller:not([breakpointmd]) media-pip-button {
            display: none;
          }
        </style>
        <media-pip-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#pip-icon"></use>
            <g id="pip-icon">
              <path
                d="M12 22H9.77778C9.34822 22 9 21.6162 9 21.1429V10.8571C9 10.3838 9.34822 10 9.77778 10L22.2222 10C22.6518 10 23 10.3838 23 10.8571V12.5714"
              />
              <path
                d="M15 21.5714V16.4286C15 16.1919 15.199 16 15.4444 16H22.5556C22.801 16 23 16.1919 23 16.4286V17V21.5714C23 21.8081 22.801 22 22.5556 22H20.3333H17.6667H15.4444C15.199 22 15 21.8081 15 21.5714Z"
              />
            </g>
          </svg>
        </media-pip-button>

        <!-- Airplay Button -->
        <media-airplay-button class="media-button">
          <svg viewBox="0 0 32 32" aria-hidden="true" slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.5 20h1.722c.43 0 .778-.32.778-.714v-8.572c0-.394-.348-.714-.778-.714H9.778c-.43 0-.778.32-.778.714v1.429"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.5 20H9.778c-.43 0-.778-.32-.778-.714v-8.572c0-.394.348-.714.778-.714h12.444c.43 0 .778.32.778.714v1.429"/>
            <path stroke-linejoin="round" d="m16 19 3.464 3.75h-6.928L16 19Z"/>
          </svg>
        </media-airplay-button>

        <!-- Cast Button -->
        <media-cast-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#cast-icon"></use>
            <g id="cast-icon">
              <path
                d="M18.5 21.833h4.167c.46 0 .833-.373.833-.833V11a.833.833 0 0 0-.833-.833H9.333A.833.833 0 0 0 8.5 11v1.111m0 8.056c.92 0 1.667.746 1.667 1.666M8.5 17.667a4.167 4.167 0 0 1 4.167 4.166"
              />
              <path d="M8.5 15.167a6.667 6.667 0 0 1 6.667 6.666" />
            </g>
          </svg>
        </media-cast-button>

        <!-- Fullscreen Button -->
        <style>
          /* Having trouble getting @property to work in the shadow dom
             to clean this up. Like https://codepen.io/luwes/pen/oNRyZyx */

          media-fullscreen-button .fs-arrow {
            translate: 0% 0%;
          }
          media-fullscreen-button:hover .fs-arrow {
            animation: 0.35s up-left-bounce cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          media-fullscreen-button:hover #fs-enter-top,
          media-fullscreen-button:hover #fs-exit-bottom {
            animation-name: up-right-bounce;
          }

          media-fullscreen-button:hover #fs-enter-bottom,
          media-fullscreen-button:hover #fs-exit-top {
            animation-name: down-left-bounce;
          }

          @keyframes up-left-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: -4% -4%;
            }
          }
          @keyframes up-right-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: 4% -4%;
            }
          }
          @keyframes down-left-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: -4% 4%;
            }
          }
          @keyframes down-right-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: 4% 4%;
            }
          }
        </style>
        <media-fullscreen-button class="media-button">
          <svg slot="enter" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#fs-enter-paths"></use>
            <g id="fs-enter-paths">
              <g id="fs-enter-top" class="fs-arrow">
                <path d="M18 10H22V14" />
                <path d="M22 10L18 14" />
              </g>
              <g id="fs-enter-bottom" class="fs-arrow">
                <path d="M14 22L10 22V18" />
                <path d="M10 22L14 18" />
              </g>
            </g>
          </svg>
          <svg slot="exit" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#fs-exit-paths"></use>
            <g id="fs-exit-paths">
              <g id="fs-exit-top" class="fs-arrow">
                <path d="M22 14H18V10" />
                <path d="M22 10L18 14" />
              </g>
              <g id="fs-exit-bottom" class="fs-arrow">
                <path d="M10 18L14 18V22" />
                <path d="M14 18L10 22" />
              </g>
            </g>
          </svg>
        </media-fullscreen-button>
      </media-control-bar>
    </media-controller>

  `);class nY extends rD{static template=nG}G.customElements&&!G.customElements.get("media-theme-sutro")&&G.customElements.define("media-theme-sutro",nY);var nz=i(12115),nQ=Object.create,nZ=Object.defineProperty,nX=Object.getOwnPropertyDescriptor,nJ=Object.getOwnPropertyNames,n0=Object.getPrototypeOf,n1=Object.prototype.hasOwnProperty,n2=function(e,t){return function(){return e&&(t=e(e=0)),t}},n3=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}};function n4(e,t){return null!=t&&"u">typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):n4(e,t)}var n5=n2(function(){n5()});function n9(e){return e&&"u">typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}var n8=n2(function(){}),n6=n3(function(e,t){var i=Array.prototype.slice;t.exports=function(e,t){for(("length"in e)||(e=[e]),e=i.call(e);e.length;){var a=e.shift(),r=t(a);if(r)return r;a.childNodes&&a.childNodes.length&&(e=i.call(a.childNodes).concat(e))}}}),n7=n3(function(e,t){function i(e,t){if(!n4(this,i))return new i(e,t);this.data=e,this.nodeValue=e,this.length=e.length,this.ownerDocument=t||null}n5(),t.exports=i,i.prototype.nodeType=8,i.prototype.nodeName="#comment",i.prototype.toString=function(){return"[object Comment]"}}),se=n3(function(e,t){function i(e,t){if(!n4(this,i))return new i(e);this.data=e||"",this.length=this.data.length,this.ownerDocument=t||null}n5(),t.exports=i,i.prototype.type="DOMTextNode",i.prototype.nodeType=3,i.prototype.nodeName="#text",i.prototype.toString=function(){return this.data},i.prototype.replaceData=function(e,t,i){var a=this.data,r=a.substring(0,e),n=a.substring(e+t,a.length);this.data=r+i+n,this.length=this.data.length}}),st=n3(function(e,t){t.exports=function(e){var t=this,i=e.type;e.target||(e.target=t),t.listeners||(t.listeners={});var a=t.listeners[i];if(a)return a.forEach(function(i){e.currentTarget=t,"function"==typeof i?i(e):i.handleEvent(e)});t.parentNode&&t.parentNode.dispatchEvent(e)}}),si=n3(function(e,t){t.exports=function(e,t){this.listeners||(this.listeners={}),this.listeners[e]||(this.listeners[e]=[]),-1===this.listeners[e].indexOf(t)&&this.listeners[e].push(t)}}),sa=n3(function(e,t){t.exports=function(e,t){if(this.listeners&&this.listeners[e]){var i=this.listeners[e],a=i.indexOf(t);-1!==a&&i.splice(a,1)}}}),sr=n3(function(e,t){n8(),t.exports=function e(t){switch(t.nodeType){case 3:return r(t.data);case 8:return"\x3c!--"+t.data+"--\x3e";default:var n,s,o;return s=[],o=(n=t).tagName,"http://www.w3.org/1999/xhtml"===n.namespaceURI&&(o=o.toLowerCase()),s.push("<"+o+function(e){var t=[];for(var i in e)(function(e,t){var i=n9(e[t]);return"style"===t&&Object.keys(e.style).length>0||e.hasOwnProperty(t)&&("string"===i||"boolean"===i||"number"===i)&&"nodeName"!==t&&"className"!==t&&"tagName"!==t&&"textContent"!==t&&"innerText"!==t&&"namespaceURI"!==t&&"innerHTML"!==t})(e,i)&&t.push({name:i,value:e[i]});for(var r in e._attributes)for(var n in e._attributes[r]){var s=e._attributes[r][n],o=(s.prefix?s.prefix+":":"")+n;t.push({name:o,value:s.value})}return e.className&&t.push({name:"class",value:e.className}),t.length?a(t):""}(n)+function(e){var t=e.dataset,i=[];for(var r in t)i.push({name:"data-"+r,value:t[r]});return i.length?a(i):""}(n)),i.indexOf(o)>-1?s.push(" />"):(s.push(">"),n.childNodes.length?s.push.apply(s,n.childNodes.map(e)):n.textContent||n.innerText?s.push(r(n.textContent||n.innerText)):n.innerHTML&&s.push(n.innerHTML),s.push("</"+o+">")),s.join("")}};var i=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function a(e){var t=[];return e.forEach(function(e){var i=e.name,a=e.value;"style"===i&&(a=function(e){if("string"==typeof e)return e;var t="";return Object.keys(e).forEach(function(i){var a=e[i];i=i.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}),t+=i+":"+a+";"}),t}(a)),t.push(i+'="'+r(a).replace(/"/g,"&quot;")+'"')}),t.length?" "+t.join(" "):""}function r(e){var t="";return"string"==typeof e?t=e:e&&(t=e.toString()),t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}}),sn=n3(function(e,t){n5();var i=n6(),a=st(),r=si(),n=sa(),s=sr(),o="http://www.w3.org/1999/xhtml";function l(e,t,i){if(!n4(this,l))return new l(e);var a=void 0===i?o:i||null;this.tagName=a===o?String(e).toUpperCase():e,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=t||null,this.namespaceURI=a,this._attributes={},"INPUT"===this.tagName&&(this.type="text")}t.exports=l,l.prototype.type="DOMElement",l.prototype.nodeType=1,l.prototype.appendChild=function(e){return e.parentNode&&e.parentNode.removeChild(e),this.childNodes.push(e),e.parentNode=this,e},l.prototype.replaceChild=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=this.childNodes.indexOf(t);return t.parentNode=null,this.childNodes[i]=e,e.parentNode=this,t},l.prototype.removeChild=function(e){var t=this.childNodes.indexOf(e);return this.childNodes.splice(t,1),e.parentNode=null,e},l.prototype.insertBefore=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=null==t?-1:this.childNodes.indexOf(t);return i>-1?this.childNodes.splice(i,0,e):this.childNodes.push(e),e.parentNode=this,e},l.prototype.setAttributeNS=function(e,t,i){var a=null,r=t,n=t.indexOf(":");(n>-1&&(a=t.substr(0,n),r=t.substr(n+1)),"INPUT"===this.tagName&&"type"===t)?this.type=i:(this._attributes[e]||(this._attributes[e]={}))[r]={value:i,prefix:a}},l.prototype.getAttributeNS=function(e,t){var i=this._attributes[e],a=i&&i[t]&&i[t].value;return"INPUT"===this.tagName&&"type"===t?this.type:"string"!=typeof a?null:a},l.prototype.removeAttributeNS=function(e,t){var i=this._attributes[e];i&&delete i[t]},l.prototype.hasAttributeNS=function(e,t){var i=this._attributes[e];return!!i&&t in i},l.prototype.setAttribute=function(e,t){return this.setAttributeNS(null,e,t)},l.prototype.getAttribute=function(e){return this.getAttributeNS(null,e)},l.prototype.removeAttribute=function(e){return this.removeAttributeNS(null,e)},l.prototype.hasAttribute=function(e){return this.hasAttributeNS(null,e)},l.prototype.removeEventListener=n,l.prototype.addEventListener=r,l.prototype.dispatchEvent=a,l.prototype.focus=function(){},l.prototype.toString=function(){return s(this)},l.prototype.getElementsByClassName=function(e){var t=e.split(" "),a=[];return i(this,function(e){if(1===e.nodeType){var i=(e.className||"").split(" ");t.every(function(e){return -1!==i.indexOf(e)})&&a.push(e)}}),a},l.prototype.getElementsByTagName=function(e){e=e.toLowerCase();var t=[];return i(this.childNodes,function(i){1===i.nodeType&&("*"===e||i.tagName.toLowerCase()===e)&&t.push(i)}),t},l.prototype.contains=function(e){return i(this,function(t){return e===t})||!1}}),ss=n3(function(e,t){n5();var i=sn();function a(e){if(!n4(this,a))return new a;this.childNodes=[],this.parentNode=null,this.ownerDocument=e||null}t.exports=a,a.prototype.type="DocumentFragment",a.prototype.nodeType=11,a.prototype.nodeName="#document-fragment",a.prototype.appendChild=i.prototype.appendChild,a.prototype.replaceChild=i.prototype.replaceChild,a.prototype.removeChild=i.prototype.removeChild,a.prototype.toString=function(){return this.childNodes.map(function(e){return String(e)}).join("")}}),so=n3(function(e,t){function i(e){}t.exports=i,i.prototype.initEvent=function(e,t,i){this.type=e,this.bubbles=t,this.cancelable=i},i.prototype.preventDefault=function(){}}),sl=n3(function(e,t){n5();var i=n6(),a=n7(),r=se(),n=sn(),s=ss(),o=so(),l=st(),d=si(),u=sa();function c(){if(!n4(this,c))return new c;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}t.exports=c;var h=c.prototype;h.createTextNode=function(e){return new r(e,this)},h.createElementNS=function(e,t){return new n(t,this,null===e?null:String(e))},h.createElement=function(e){return new n(e,this)},h.createDocumentFragment=function(){return new s(this)},h.createEvent=function(e){return new o(e)},h.createComment=function(e){return new a(e,this)},h.getElementById=function(e){return e=String(e),i(this.childNodes,function(t){if(String(t.id)===e)return t})||null},h.getElementsByClassName=n.prototype.getElementsByClassName,h.getElementsByTagName=n.prototype.getElementsByTagName,h.contains=n.prototype.contains,h.removeEventListener=u,h.addEventListener=d,h.dispatchEvent=l}),sd=n3(function(e,t){t.exports=new(sl())}),su=n3(function(e,t){var i,a="u">typeof global?global:"u">typeof window?window:{},r=sd();"u">typeof document?i=document:(i=a["__GLOBAL_DOCUMENT_CACHE@4"])||(i=a["__GLOBAL_DOCUMENT_CACHE@4"]=r),t.exports=i});function sc(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function sh(e,t){if(e){if("string"==typeof e)return sc(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return sc(e,t)}}function sm(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,r,n=[],s=!0,o=!1;try{for(i=i.call(e);!(s=(a=i.next()).done)&&(n.push(a.value),!(t&&n.length===t));s=!0);}catch(e){o=!0,r=e}finally{try{s||null==i.return||i.return()}finally{if(o)throw r}}return n}}(e,t)||sh(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var sp="u">typeof globalThis?globalThis:"u">typeof window?window:"u">typeof self?self:{},sv=function(){var e=sp.performance,t=e&&e.timing,i=t&&t.navigationStart;return Math.round("number"==typeof i&&"function"==typeof e.now?i+e.now():Date.now())},sb=function(){if("function"==typeof(null==(e=sp.crypto)?void 0:e.getRandomValues)){i=new Uint8Array(32),sp.crypto.getRandomValues(i);for(var e,t,i,a=0;a<32;a++)i[a]=i[a]%16}else{i=[];for(var r=0;r<32;r++)i[r]=16*Math.random()|0}var n=0;t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t="x"===e?i[n]:3&i[n]|8;return n++,t.toString(16)});var s=sv(),o=null==s?void 0:s.toString(16).substring(3);return o?t.substring(0,28)+o:t},sg=function(){return("000000"+(0x81bf1000*Math.random()|0).toString(36)).slice(-6)},sf=function(e){var t;if(e&&void 0!==e.nodeName)return e.muxId||(e.muxId=sg()),e.muxId;try{t=document.querySelector(e)}catch(e){}return t&&!t.muxId&&(t.muxId=e),(null==t?void 0:t.muxId)||e},sE=function(e){e&&void 0!==e.nodeName?e=sf(t=e):t=document.querySelector(e);var t,i=t&&t.nodeName?t.nodeName.toLowerCase():"";return[t,e,i]};function sy(e){return function(e){if(Array.isArray(e))return sc(e)}(e)||function(e){if("u">typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||sh(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s_=function(e){var t,i,a,r,n,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,o=e?[console,e]:[console],l=(t=console.trace).bind.apply(t,sy(o)),d=(i=console.info).bind.apply(i,sy(o)),u=(a=console.debug).bind.apply(a,sy(o)),c=(r=console.warn).bind.apply(r,sy(o)),h=(n=console.error).bind.apply(n,sy(o)),m=s;return{trace:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>0))return l.apply(void 0,sy(t))},debug:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>1))return u.apply(void 0,sy(t))},info:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>2))return d.apply(void 0,sy(t))},warn:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>3))return c.apply(void 0,sy(t))},error:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>4))return h.apply(void 0,sy(t))},get level(){return m},set level(v){v!==this.level&&(m=null!=v?v:s)}}}("[mux]");function sk(){return"1"===(sp.doNotTrack||sp.navigator&&sp.navigator.doNotTrack)}function sT(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function sw(e,t){if(!n4(e,t))throw TypeError("Cannot call a class as a function")}function sA(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function sC(e,t,i){return t&&sA(e.prototype,t),i&&sA(e,i),e}function sS(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function sI(e){return(sI=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function sR(e,t,i){return(sR="u">typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var a=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=sI(e)););return e}(e,t);if(a){var r=Object.getOwnPropertyDescriptor(a,t);return r.get?r.get.call(i||e):r.value}})(e,t,i||e)}function sL(e,t){return(sL=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function sx(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&sL(e,t)}function sM(e){var t=function(){if("u"<typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var i,a=sI(e);return i=t?Reflect.construct(a,arguments,sI(this).constructor):a.apply(this,arguments),i&&("object"===n9(i)||"function"==typeof i)?i:sT(this)}}n5(),n8();var sD=function(e){return sO(e)[0]},sO=function(e){if("string"!=typeof e||""===e)return["localhost"];var t,i=(e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)||[])[4];return i&&(t=(i.match(/[^\.]+\.[^\.]+$/)||[])[0]),[i,t]},sP=function(){var e=sp.performance;return void 0!==(e&&e.timing)},sN=function(){var e=sp.performance,t=e&&e.timing;return t&&t.domContentLoadedEventEnd},sU=function(){var e=sp.performance,t=e&&e.timing;return t&&t.navigationStart};function sH(e,t,i){i=void 0===i?1:i,e[t]=e[t]||0,e[t]+=i}function sW(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),a.forEach(function(t){sS(e,t,i[t])})}return e}function sB(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t.push.apply(t,i)}return t})(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}),e}var s$=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],sq=["x-cdn","content-type"].concat(s$);function sV(e){var t={};return(e=e||"").trim().split(/[\r\n]+/).forEach(function(e){if(e){var i=e.split(": "),a=i.shift();a&&(sq.indexOf(a.toLowerCase())>=0||0===a.toLowerCase().indexOf("x-litix-"))&&(t[a]=i.join(": "))}}),t}function sF(e){if(e){var t=s$.find(function(t){return void 0!==e[t]});return t?e[t]:void 0}}var sK=function(e){var t={};for(var i in e){var a=e[i];-1!==a["DATA-ID"].search("io.litix.data.")&&(t[a["DATA-ID"].replace("io.litix.data.","")]=a.VALUE)}return t},sj=["addtrack","removetrack","change"],sG=function(e,t){try{if(e&&t in e){var i,a=e[t];if(a&&"object"==typeof a&&"length"in a&&"number"==typeof a.length&&(i=a)&&"object"==typeof i&&"addEventListener"in i&&"function"==typeof i.addEventListener&&"removeEventListener"in i&&"function"==typeof i.removeEventListener)return a}}catch(e){s_.warn("Unable to access `"+t+"` on the media element.",e)}},sY=function(e,t,i){if(!(e.readyState<1))return Array.prototype.find.call(t,i)||null},sz=function(e,t,i,a){var r=sG(e,t);if(r){var n,s=function(){try{var s=sY(e,r,i);void 0!==s&&s!==n&&(n=s,a(n))}catch(e){s_.warn("Exception while checking `"+t+"` for changes.",e)}},o=function(){try{e.removeEventListener("loadedmetadata",s),e.removeEventListener("emptied",s),sj.forEach(function(e){return r.removeEventListener(e,s)})}catch(e){s_.warn("Unable to stop monitoring `"+t+"`.",e)}};try{sj.forEach(function(e){return r.addEventListener(e,s)}),e.addEventListener("loadedmetadata",s),e.addEventListener("emptied",s)}catch(e){s_.warn("Unable to monitor `"+t+"`.",e),o();return}return{refresh:s,destroy:o}}},sQ=function(e){switch(e){case 1:return"mono";case 2:return"stereo";case 6:return"5.1";case 8:return"7.1"}return String(e)},sZ=function(e){if(!e)return{player_audio_track_enabled:!1};var t,i,a={player_audio_track_enabled:!0};return e.label&&(a.player_audio_track_name=e.label),e.language&&(a.player_audio_track_language=e.language),null!=(t=e.configuration)&&t.codec&&(a.player_audio_track_codec=e.configuration.codec),null!=(i=e.configuration)&&i.numberOfChannels&&(a.player_audio_track_channels=sQ(e.configuration.numberOfChannels)),a},sX=function(e){return e.enabled},sJ=function(e){var t=sG(e,"audioTracks");if(t){var i=sY(e,t,sX);return void 0===i?void 0:sZ(i)}if("mozHasAudio"in e&&"boolean"==typeof e.mozHasAudio)return{player_audio_track_enabled:e.mozHasAudio}},s0=function(e){var t=e.mediaElement,i=e.onChange;return sz(t,"audioTracks",sX,function(e){return i(sZ(e))})},s1=function(e){switch(e){case"captions":return"cc";case"subtitles":case"forced":return"subtitles"}},s2=function(e){return"showing"===e.mode&&void 0!==s1(e.kind)},s3=function(e,t){if(Array.prototype.some.call(t.querySelectorAll("track"),function(t){return t.track===e}))return"webvtt"},s4=function(e,t){if(!e)return{player_text_track_enabled:!1};var i={player_text_track_enabled:!0},a=s1(e.kind);a&&(i.player_text_track_type=a);var r=s3(e,t);return r&&(i.player_text_track_format=r),e.label&&(i.player_text_track_name=e.label),e.language&&(i.player_text_track_language=e.language),i},s5=function(e){var t=sG(e,"textTracks");if(t){var i=sY(e,t,s2);if(void 0!==i)return s4(i,e)}},s9=function(e){var t=e.mediaElement,i=e.onChange;return sz(t,"textTracks",s2,function(e){return i(s4(e,t))})},s8=function(e,t){var i=Object.keys(e),a=Object.keys(t);return i.length===a.length&&i.every(function(i){return Object.prototype.hasOwnProperty.call(t,i)&&e[i]===t[i]})},s6=function(e){if(e){if((e=String(e)).endsWith("/JOC"))return"atmos";var t=parseInt(e,10);return String(t)===e?sQ(t):e}},s7=function(e){if(e.length)return e[0].player_audio_track_enabled?e.reduce(function(e,t){return sW({},t,e)}):{player_audio_track_enabled:!1}},oe=function(e){var t,i={player_audio_track_enabled:!0};e.name&&(i.player_audio_track_name=e.name),e.lang&&(i.player_audio_track_language=e.lang),e.audioCodec&&(i.player_audio_track_codec=e.audioCodec);var a=e.channels||(null==(t=e.attrs)?void 0:t.CHANNELS),r=a&&s6(a);return r&&(i.player_audio_track_channels=r),i},ot=["mp4a","ac-3","ec-3","ac-4","opus","flac","alac"],oi=function(e){var t,i,a={player_audio_track_enabled:!0};if(e.codec){var r="audio"===e.id?e.codec:e.codec.split(",").map(function(e){return e.trim()}).find(function(e){return -1!==ot.indexOf(e.slice(0,4).toLowerCase())});r&&(a.player_audio_track_codec=r)}return null!=(i=e.metadata)&&i.channelCount&&(a.player_audio_track_channels=sQ(null==(t=e.metadata)?void 0:t.channelCount)),a},oa=function(e){var t=e.find(function(e){return e.audio});if(t)return t.audio;var i=e.find(function(e){return e.audiovideo});return null==i?void 0:i.audiovideo},or=function(e,t){var i=!1,a=!0,r=!1,n=void 0;try{for(var s,o=["player_audio_track_name","player_audio_track_language"][Symbol.iterator]();!(a=(s=o.next()).done);a=!0){var l=s.value,d=e[l],u=t[l];if(d&&u){if(d!==u)return!1;i=!0}}}catch(e){r=!0,n=e}finally{try{a||null==o.return||o.return()}finally{if(r)throw n}}return i},on=function(){function e(t){var i=t.hls,a=t.Hls,r=t.onAudioTrackChange,n=this;sw(this,e),sS(this,"hls",void 0),sS(this,"audioSwitchIsPlayheadBased",!1),sS(this,"listeners",[]),sS(this,"onAudioTrackChange",void 0),sS(this,"previousEvent",void 0),sS(this,"transition",void 0),this.onAudioTrackChange=r;var s=sm(String(null==a?void 0:a.version).split("."),2),o=s[0],l=s[1];if("1"!==o)return void s_.warn("Unsupported hls.js version "+(null==a?void 0:a.version)+" for audiotrackchange detection. Audio track changes are only reported from the media element.");var d=parseInt(l);isFinite(d)&&d>=7&&(this.audioSwitchIsPlayheadBased=!0);var u,c=a.Events||{},h=(sS(u={},c.LEVEL_SWITCHING,this.onLevelSwitching),sS(u,c.LEVEL_SWITCHED,this.onLevelSwitched),sS(u,c.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching),sS(u,c.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched),sS(u,c.BUFFER_CODECS,this.onBufferCodecs),sS(u,c.MANIFEST_LOADING,this.onManifestLoading),sS(u,c.MEDIA_ATTACHED,this.onMediaAttached),sS(u,c.MEDIA_DETACHING,this.onMediaDetaching),sS(u,c.ERROR,this.onError),u);this.hls=i,this.addMediaElementMonitorOverride(),Object.keys(h).forEach(function(e){var t=h[e],a=function(e,i){try{t.call(n,e,i)}catch(t){s_.warn("Exception in hls.js "+e+" handler for audiotrackchange.",t)}};n.listeners.push([e,a]),i.on(e,a)})}return sC(e,[{key:"addMediaElementMonitorOverride",value:function(){var e,t,i=this;null!=(t=this.hls)&&null!=(e=t.media)&&e.mux&&(this.hls.media.mux.audioTrackChangeHandler=function(e){return i.onMediaElementMonitorEvent(e)})}},{key:"removeMediaElementMonitorOverride",value:function(){var e,t,i;null==(i=this.hls)||null==(t=i.media)||null==(e=t.mux)||delete e.audioTrackChangeHandler}},{key:"destroy",value:function(){var e=this.hls;e&&(this.removeMediaElementMonitorOverride(),this.hls=void 0,this.transition=void 0,this.listeners.forEach(function(t){var i=sm(t,2),a=i[0],r=i[1];return e.off(a,r)}),this.listeners=[])}},{key:"onMediaElementMonitorEvent",value:function(e){this.transition&&(this.transition.mediaElementMonitorEvent=e)}},{key:"onManifestLoading",value:function(){this.transition=void 0}},{key:"onMediaAttached",value:function(){this.addMediaElementMonitorOverride()}},{key:"onMediaDetaching",value:function(){this.removeMediaElementMonitorOverride(),this.transition=void 0,this.previousEvent=void 0}},{key:"onError",value:function(e,t){null!=t&&t.fatal&&(this.transition=void 0)}},{key:"onLevelSwitching",value:function(e,t){this.transition=this.transition||{},this.transition.levelSwitching=sW({},t),this.transition.levelSwitched&&(this.transition.levelSwitched=void 0,this.transition.bufferCodecs=void 0)}},{key:"onLevelSwitched",value:function(e,t){this.transition&&(this.transition.levelSwitched=sW({},t),this.checkTransitionFinished())}},{key:"onBufferCodecs",value:function(e,t){this.transition&&(this.transition.bufferCodecs=this.transition.bufferCodecs||[],this.transition.bufferCodecs.push(sW({},t)))}},{key:"onAudioTrackSwitching",value:function(e,t){this.transition=this.transition||{},this.transition.audioTrackSwitching=sW({},t);var i,a,r,n="number"==typeof(null==t?void 0:t.id)?t.id:null==(i=this.hls)?void 0:i.audioTrack;this.transition.audioTrackObj=null==(r=this.hls)||null==(a=r.audioTracks)?void 0:a[n],this.transition.audioTrackSwitched&&(this.transition.audioTrackSwitched=void 0,this.transition.bufferCodecs=void 0)}},{key:"onAudioTrackSwitched",value:function(e,t){this.transition&&(this.transition.audioTrackSwitched=sW({},t),this.checkTransitionFinished())}},{key:"checkTransitionFinished",value:function(){var e,t,i,a=this.transition;if(a&&!(a.audioTrackSwitching&&!a.audioTrackSwitched)&&!(a.levelSwitching&&!a.levelSwitched)){this.transition=void 0;var r=a.audioTrackObj||(null==(t=this.hls)||null==(e=t.audioTracks)?void 0:e[this.hls.audioTrack]),n=(null==(i=a.bufferCodecs)?void 0:i.length)&&oa(a.bufferCodecs);if(!(r&&!a.audioTrackSwitched&&!n&&!a.mediaElementMonitorEvent)){var s=[],o=r&&oe(r);o&&s.push(o),n&&s.push(oi(n));var l=a.mediaElementMonitorEvent;if(!l){var d,u=null==(d=this.hls)?void 0:d.media;u&&(this.audioSwitchIsPlayheadBased||a.levelSwitched)&&(l=sJ(u))}l&&(!o||or(l,o))&&s.push(l);var c=s7(s);if(c){var h=this.previousEvent;h&&!a.audioTrackSwitched&&s8(h,c)||(this.previousEvent=c,this.onAudioTrackChange(sW({},c)))}}}}}]),e}(),os=["public.accessibility.transcribes-spoken-dialog","public.accessibility.describes-music-and-sound"],oo=function(e){if(e){var t=e.split(",").map(function(e){return e.trim()});if(os.every(function(e){return -1!==t.indexOf(e)}))return"cc"}return"subtitles"},ol=function(e){if(e)return"wvtt"===e?"webvtt":0===e.indexOf("stpp")?"ttml":e},od=function(e){var t,i={player_text_track_enabled:!0},a=oo(e.characteristics||(null==(t=e.attrs)?void 0:t.CHARACTERISTICS));a&&(i.player_text_track_type=a);var r=ol(e.textCodec);return r&&(i.player_text_track_format=r),e.name&&(i.player_text_track_name=e.name),e.lang&&(i.player_text_track_language=e.lang),i},ou=function(){function e(t){var i=t.hls,a=t.Hls,r=t.onTextTrackChange,n=this;if(sw(this,e),sS(this,"hls",void 0),sS(this,"listeners",[]),sS(this,"onTextTrackChange",void 0),sS(this,"levelSwitched",!1),sS(this,"previousEvent",void 0),this.onTextTrackChange=r,"1"!==sm(String(null==a?void 0:a.version).split("."),1)[0])return void s_.warn("Unsupported hls.js version "+(null==a?void 0:a.version)+" for texttrackchange detection. Text track changes are only reported from the media element.");var s=a.Events||{},o=[[s.LEVEL_SWITCHED,this.onLevelSwitched],[s.SUBTITLE_TRACKS_UPDATED,this.refresh],[s.SUBTITLE_TRACKS_CLEARED,this.refresh],[s.SUBTITLE_TRACK_SWITCH,this.refresh],[s.MEDIA_ATTACHED,this.onMediaAttached],[s.MEDIA_DETACHING,this.onMediaDetaching]];this.hls=i,this.addMediaElementMonitorOverride(),o.forEach(function(e){var t=sm(e,2),a=t[0],r=t[1];if(a){var s=function(e){try{r.call(n)}catch(t){s_.warn("Exception in hls.js "+e+" handler for texttrackchange.",t)}};n.listeners.push([a,s]),i.on(a,s)}}),this.refresh()}return sC(e,[{key:"addMediaElementMonitorOverride",value:function(){var e,t,i=this;null!=(t=this.hls)&&null!=(e=t.media)&&e.mux&&(this.hls.media.mux.textTrackChangeHandler=function(e){return i.onMediaElementMonitorEvent(e)})}},{key:"removeMediaElementMonitorOverride",value:function(){var e,t,i;null==(i=this.hls)||null==(t=i.media)||null==(e=t.mux)||delete e.textTrackChangeHandler}},{key:"destroy",value:function(){var e=this.hls;e&&(this.removeMediaElementMonitorOverride(),this.hls=void 0,this.listeners.forEach(function(t){var i=sm(t,2),a=i[0],r=i[1];return e.off(a,r)}),this.listeners=[])}},{key:"getSelectedSubtitleTrack",value:function(){var e,t=this.hls;if(!(!t||"number"!=typeof t.subtitleTrack||t.subtitleTrack<0))return null==(e=t.subtitleTracks)?void 0:e[t.subtitleTrack]}},{key:"onMediaElementMonitorEvent",value:function(e){try{if(this.getSelectedSubtitleTrack())return;this.emit(e)}catch(e){s_.warn("Exception handling a media element text track change for hls.js.",e)}}},{key:"onLevelSwitched",value:function(){this.levelSwitched=!0,this.refresh()}},{key:"onMediaAttached",value:function(){this.addMediaElementMonitorOverride(),this.getSelectedSubtitleTrack()&&this.refresh()}},{key:"onMediaDetaching",value:function(){this.removeMediaElementMonitorOverride(),this.previousEvent=void 0}},{key:"isLevelSwitched",value:function(){var e,t=null==(e=this.hls)?void 0:e.currentLevel;return this.levelSwitched||"number"==typeof t&&t>=0}},{key:"refresh",value:function(){try{var e=this.hls;if(!e||!this.isLevelSwitched())return;var t=this.getSelectedSubtitleTrack();if(t)return void this.emit(od(t));var i=e.media&&s5(e.media);i&&this.emit(i)}catch(e){s_.warn("Exception while refreshing the hls.js text track state.",e)}}},{key:"emit",value:function(e){this.previousEvent&&s8(this.previousEvent,e)||(this.previousEvent=e,this.onTextTrackChange(sW({},e)))}}]),e}(),oc=function(e){if(!e)return{};var t=sU(),i=e.loading,a=i?i.start:e.trequest,r=i?i.first:e.tfirst,n=i?i.end:e.tload;return{bytesLoaded:e.total,requestStart:Math.round(t+a),responseStart:Math.round(t+r),responseEnd:Math.round(t+n)}},oh=function(e){if(!(!e||"function"!=typeof e.getAllResponseHeaders))return sV(e.getAllResponseHeaders())},om=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=arguments.length>4?arguments[4]:void 0,r=e.log,n=e.utils.secondsToMs,s=function(e){var t,i=parseInt(a.version);return 1===i&&null!==e.programDateTime&&(t=e.programDateTime),0===i&&null!==e.pdt&&(t=e.pdt),t};if(!sP())return void r.warn("performance timing not supported. Not tracking HLS.js.");var o=function(i,a){return e.emit(t,i,a)},l=function(e,t){var i=t.levels,a=t.audioTracks,r=t.url,n=t.stats,s=t.networkDetails,l=t.sessionData,d={},u={};i.forEach(function(e,t){d[t]={width:e.width,height:e.height,bitrate:e.bitrate,attrs:e.attrs}}),a.forEach(function(e,t){u[t]={name:e.name,language:e.lang,bitrate:e.bitrate}});var c=oc(n),h=c.bytesLoaded,m=c.requestStart,p=c.responseStart,b=c.responseEnd;o("requestcompleted",sB(sW({},sK(l)),{request_event_type:e,request_bytes_loaded:h,request_start:m,request_response_start:p,request_response_end:b,request_type:"manifest",request_hostname:sD(r),request_response_headers:oh(s),request_rendition_lists:{media:d,audio:u,video:{}}}))};i.on(a.Events.MANIFEST_LOADED,l);var d=function(e,t){var i=t.details,a=t.level,r=t.networkDetails,l=oc(t.stats),d=l.bytesLoaded,u=l.requestStart,c=l.responseStart,h=l.responseEnd,m=i.fragments[i.fragments.length-1],p=s(m)+n(m.duration);o("requestcompleted",{request_event_type:e,request_bytes_loaded:d,request_start:u,request_response_start:c,request_response_end:h,request_current_level:a,request_type:"manifest",request_hostname:sD(i.url),request_response_headers:oh(r),video_holdback:i.holdBack&&n(i.holdBack),video_part_holdback:i.partHoldBack&&n(i.partHoldBack),video_part_target_duration:i.partTarget&&n(i.partTarget),video_target_duration:i.targetduration&&n(i.targetduration),video_source_is_live:i.live,player_manifest_newest_program_time:isNaN(p)?void 0:p})};i.on(a.Events.LEVEL_LOADED,d);var u=function(e,t){var i=t.details,a=t.networkDetails,r=oc(t.stats);o("requestcompleted",{request_event_type:e,request_bytes_loaded:r.bytesLoaded,request_start:r.requestStart,request_response_start:r.responseStart,request_response_end:r.responseEnd,request_type:"manifest",request_hostname:sD(i.url),request_response_headers:oh(a)})};i.on(a.Events.AUDIO_TRACK_LOADED,u);var c=function(e,t){var a=t.stats,r=t.networkDetails,n=t.frag,s=oc(a=a||n.stats),l=s.bytesLoaded,d=s.requestStart,u=s.responseStart,c=s.responseEnd,h=r?oh(r):void 0,m={request_event_type:e,request_bytes_loaded:l,request_start:d,request_response_start:u,request_response_end:c,request_hostname:r?sD(r.responseURL):void 0,request_id:h?sF(h):void 0,request_response_headers:h,request_media_duration:n.duration,request_url:null==r?void 0:r.responseURL};"main"===n.type?(m.request_type="media",m.request_current_level=n.level,m.request_video_width=(i.levels[n.level]||{}).width,m.request_video_height=(i.levels[n.level]||{}).height,m.request_labeled_bitrate=(i.levels[n.level]||{}).bitrate):m.request_type=n.type,o("requestcompleted",m)};i.on(a.Events.FRAG_LOADED,c);var h=function(e,t){var i=t.frag,a=i.start;o("fragmentchange",{currentFragmentPDT:s(i),currentFragmentStart:n(a)})};i.on(a.Events.FRAG_CHANGED,h);var m=function(e,t){var i,r=t.type,n=t.details,s=t.response,l=t.fatal,d=t.frag,u=t.networkDetails,c=(null==d?void 0:d.url)||t.url||"",h=u?oh(u):void 0;(n===a.ErrorDetails.MANIFEST_LOAD_ERROR||n===a.ErrorDetails.MANIFEST_LOAD_TIMEOUT||n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT||n===a.ErrorDetails.LEVEL_LOAD_ERROR||n===a.ErrorDetails.LEVEL_LOAD_TIMEOUT||n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT)&&o("requestfailed",{request_error:n,request_url:c,request_hostname:sD(c),request_id:h?sF(h):void 0,request_type:n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:null==s?void 0:s.code,request_error_text:null==s?void 0:s.text}),l&&o("error",{player_error_code:r,player_error_message:n,player_error_context:"".concat(c?"url: ".concat(c,"\n"):"")+"".concat(s&&(s.code||s.text)?"response: ".concat(s.code,", ").concat(s.text,"\n"):"")+"".concat(t.reason?"failure reason: ".concat(t.reason,"\n"):"")+"".concat(t.level?"level: ".concat(t.level,"\n"):"")+"".concat(t.parent?"parent stream controller: ".concat(t.parent,"\n"):"")+"".concat(t.buffer?"buffer length: ".concat(t.buffer,"\n"):"")+"".concat(t.error?"error: ".concat(t.error,"\n"):"")+"".concat(t.event?"event: ".concat(t.event,"\n"):"")+"".concat(t.err?"error message: ".concat(null==(i=t.err)?void 0:i.message,"\n"):"")})};i.on(a.Events.ERROR,m);var p=function(e,t){var i=t.frag,a=i&&i._url||"";o("requestcanceled",{request_event_type:e,request_url:a,request_type:"media",request_hostname:sD(a)})};i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p);var b=function(e,t){var a=t.level,n=i.levels[a];if(n&&n.attrs&&n.attrs.BANDWIDTH){var s,l=n.attrs.BANDWIDTH,d=parseFloat(n.attrs["FRAME-RATE"]);isNaN(d)||(s=d),l?o("renditionchange",{video_source_fps:s,video_source_bitrate:l,video_source_width:n.width,video_source_height:n.height,video_source_rendition_name:n.name,video_source_codec:null==n?void 0:n.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};i.on(a.Events.LEVEL_SWITCHED,b);var g=new on({hls:i,Hls:a,onAudioTrackChange:function(e){o("audiotrackchange",e)}}),f=new ou({hls:i,Hls:a,onTextTrackChange:function(e){o("texttrackchange",e)}});i._stopMuxMonitor=function(){i.off(a.Events.MANIFEST_LOADED,l),i.off(a.Events.LEVEL_LOADED,d),i.off(a.Events.AUDIO_TRACK_LOADED,u),i.off(a.Events.FRAG_LOADED,c),i.off(a.Events.FRAG_CHANGED,h),i.off(a.Events.ERROR,m),i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p),i.off(a.Events.LEVEL_SWITCHED,b),i.off(a.Events.DESTROYING,i._stopMuxMonitor),g.destroy(),f.destroy(),delete i._stopMuxMonitor},i.on(a.Events.DESTROYING,i._stopMuxMonitor)},op=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},ov=function(e,t){if(!e||!e.requestEndDate)return{};var i,a=sD(e.url),r=e.url,n=e.bytesLoaded,s=new Date(e.requestStartDate).getTime(),o=new Date(e.firstByteDate).getTime(),l=new Date(e.requestEndDate).getTime(),d=isNaN(e.duration)?0:e.duration,u="function"==typeof t.getMetricsFor?t.getMetricsFor(e.mediaType).HttpList:t.getDashMetrics().getHttpRequests(e.mediaType);u.length>0&&(i=sV(u[u.length-1]._responseHeaders||""));var c=i?sF(i):void 0;return{requestStart:s,requestResponseStart:o,requestResponseEnd:l,requestBytesLoaded:n,requestResponseHeaders:i,requestMediaDuration:d,requestHostname:a,requestUrl:r,requestId:c}},ob=function(e,t){if("function"==typeof t.getCurrentRepresentationForType){var i=t.getCurrentRepresentationForType(e);return i?{currentLevel:i.absoluteIndex,renditionWidth:i.width||null,renditionHeight:i.height||null,renditionBitrate:i.bandwidth}:{}}var a=t.getQualityFor(e),r=t.getCurrentTrackFor(e).bitrateList;return r?{currentLevel:a,renditionWidth:r[a].width||null,renditionHeight:r[a].height||null,renditionBitrate:r[a].bandwidth}:{}},og=function(e){var t;return null==(t=e.match(/.*codecs\*?="(.*)"/))?void 0:t[1]},of=function(e){try{var t,i;return null==(i=e.getVersion)||null==(t=i.call(e))?void 0:t.split(".").map(function(e){return parseInt(e)})[0]}catch(e){return!1}},oE=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=e.log;if(!i||!i.on)return void a.warn("Invalid dash.js player reference. Monitoring blocked.");var r=of(i),n=function(i,a){return e.emit(t,i,a)},s=function(e){var t=e.type,i=(e.data||{}).url;n("requestcompleted",{request_event_type:t,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:sD(i),request_url:i})};i.on("manifestLoaded",s);var o={},l=function(e){if("function"!=typeof e.getRequests)return null;var t=e.getRequests({state:"executed"});return 0===t.length?null:t[t.length-1]},d=function(e){var t=e.type,a=e.chunk,r=e.request,s=(a||{}).mediaInfo||{},l=s.type,d=s.bitrateList,u={};(d=d||[]).forEach(function(e,t){u[t]={},u[t].width=e.width,u[t].height=e.height,u[t].bitrate=e.bandwidth,u[t].attrs={}}),"video"===l?o.video=u:"audio"===l?o.audio=u:o.media=u;var c=ov(r,i),h=c.requestStart,m=c.requestResponseStart,p=c.requestResponseEnd,b=c.requestResponseHeaders,g=c.requestMediaDuration,f=c.requestHostname,E=c.requestUrl;n("requestcompleted",{request_event_type:t,request_start:h,request_response_start:m,request_response_end:p,request_bytes_loaded:-1,request_type:l+"_init",request_response_headers:b,request_hostname:f,request_id:c.requestId,request_url:E,request_media_duration:g,request_rendition_lists:o})};r>=4?i.on("initFragmentLoaded",d):i.on("initFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;d({type:t,request:l(i),chunk:a})});var u=function(e){var t=e.type,a=e.chunk,r=e.request,s=a||{},o=s.mediaInfo,l=s.start,d=(o||{}).type,u=ov(r,i),c=u.requestStart,h=u.requestResponseStart,m=u.requestResponseEnd,p=u.requestBytesLoaded,b=u.requestResponseHeaders,g=u.requestMediaDuration,f=u.requestHostname,E=u.requestUrl,y=u.requestId,_=ob(d,i),k=_.currentLevel,T=_.renditionWidth,w=_.renditionHeight;n("requestcompleted",{request_event_type:t,request_start:c,request_response_start:h,request_response_end:m,request_bytes_loaded:p,request_type:d,request_response_headers:b,request_hostname:f,request_id:y,request_url:E,request_media_start_time:l,request_media_duration:g,request_current_level:k,request_labeled_bitrate:_.renditionBitrate,request_video_width:T,request_video_height:w})};r>=4?i.on("mediaFragmentLoaded",u):i.on("mediaFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;u({type:t,request:l(i),chunk:a})});var c={video:void 0,audio:void 0,totalBitrate:void 0},h=function(){if(c.video&&"number"==typeof c.video.bitrate){if(!(c.video.width&&c.video.height))return void a.warn("have bitrate info for video but missing width/height");var e=c.video.bitrate;if(c.audio&&"number"==typeof c.audio.bitrate&&(e+=c.audio.bitrate),e!==c.totalBitrate)return c.totalBitrate=e,{video_source_bitrate:e,video_source_height:c.video.height,video_source_width:c.video.width,video_source_codec:og(c.video.codec)}}},m=function(e,t,r){var s=e.mediaType;if("audio"===s||"video"===s){if("function"==typeof i.getRepresentationsByType)if(e.newRepresentation)o={bitrate:e.newRepresentation.bandwidth,width:e.newRepresentation.width,height:e.newRepresentation.height,qualityIndex:e.newRepresentation.absoluteIndex};else{var o,l=i.getRepresentationsByType(s);if(l&&"number"==typeof e.newQuality){var d=l.find(function(t){return t.absoluteIndex===e.newQuality||t.index===e.newQuality});d&&(o={bitrate:d.bandwidth,width:d.width,height:d.height,qualityIndex:e.newQuality})}}else{if("number"!=typeof e.newQuality)return void a.warn("missing evt.newQuality in qualityChangeRendered event",e);o=i.getBitrateInfoListFor(s).find(function(t){return t.qualityIndex===e.newQuality})}if(!(o&&"number"==typeof o.bitrate))return void a.warn("missing bitrate info for ".concat(s));c[s]=sB(sW({},o),{codec:i.getCurrentTrackFor(s).codec});var u=h();u&&n("renditionchange",u)}};i.on("qualityChangeRendered",m);var p=function(e){var t=e.request,i=e.mediaType;n("requestcanceled",{request_event_type:(t=t||{}).type+"_"+t.action,request_url:t.url,request_type:i,request_hostname:sD(t.url)})};i.on("fragmentLoadingAbandoned",p);var b=function(e){var t,i,a=e.error,r=(null==a||null==(t=a.data)?void 0:t.request)||{},s=(null==a||null==(i=a.data)?void 0:i.response)||{};(null==a?void 0:a.code)===27&&n("requestfailed",{request_error:r.type+"_"+r.action,request_url:r.url,request_hostname:sD(r.url),request_type:r.mediaType,request_error_code:s.status,request_error_text:s.statusText});var o="".concat(null!=r&&r.url?"url: ".concat(r.url,"\n"):"")+"".concat(null!=s&&s.status||null!=s&&s.statusText?"response: ".concat(null==s?void 0:s.status,", ").concat(null==s?void 0:s.statusText,"\n"):"");n("error",{player_error_code:null==a?void 0:a.code,player_error_message:null==a?void 0:a.message,player_error_context:o})};i.on("error",b),i._stopMuxMonitor=function(){i.off("manifestLoaded",s),i.off("initFragmentLoaded",d),i.off("mediaFragmentLoaded",u),i.off("qualityChangeRendered",m),i.off("error",b),i.off("fragmentLoadingAbandoned",p),delete i._stopMuxMonitor}},oy=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},o_=0,ok=function(){function e(){sw(this,e),sS(this,"_listeners",void 0)}return sC(e,[{key:"on",value:function(e,t,i){return t._eventEmitterGuid=t._eventEmitterGuid||++o_,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],i&&(t=t.bind(i)),this._listeners[e].push(t),t}},{key:"off",value:function(e,t){var i=this._listeners&&this._listeners[e];i&&i.forEach(function(e,a){e._eventEmitterGuid===t._eventEmitterGuid&&i.splice(a,1)})}},{key:"one",value:function(e,t,i){var a=this;t._eventEmitterGuid=t._eventEmitterGuid||++o_;var r=function(){a.off(e,r),t.apply(i||this,arguments)};r._eventEmitterGuid=t._eventEmitterGuid,this.on(e,r)}},{key:"emit",value:function(e,t){var i=this;if(this._listeners){t=t||{};var a=this._listeners["before"+e]||[],r=this._listeners["before*"]||[],n=this._listeners[e]||[],s=this._listeners["after"+e]||[],o=function(t,a){(t=t.slice()).forEach(function(t){t.call(i,{type:e},a)})};o(a,t),o(r,t),o(n,t),o(s,t)}}}]),e}(),oT=function(){function e(t){var i=this;sw(this,e),sS(this,"_playbackHeartbeatInterval",void 0),sS(this,"_playheadShouldBeProgressing",void 0),sS(this,"pm",void 0),this.pm=t,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,t.on("playing",function(){i._playheadShouldBeProgressing=!0}),t.on("play",this._startPlaybackHeartbeatInterval.bind(this)),t.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),t.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),t.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("seeked",function(){t.data.player_is_paused?i._stopPlaybackHeartbeatInterval():i._startPlaybackHeartbeatInterval()}),t.on("timeupdate",function(){null!==i._playbackHeartbeatInterval&&t.emit("playbackheartbeat")}),t.on("devicesleep",function(e,a){null!==i._playbackHeartbeatInterval&&(sp.clearInterval(i._playbackHeartbeatInterval),t.emit("playbackheartbeatend",{viewer_time:a.viewer_time}),i._playbackHeartbeatInterval=null)})}return sC(e,[{key:"_startPlaybackHeartbeatInterval",value:function(){var e=this;null===this._playbackHeartbeatInterval&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=sp.setInterval(function(){e.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,null!==this._playbackHeartbeatInterval&&(sp.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),e}(),ow=function e(t){var i=this;sw(this,e),sS(this,"viewErrored",void 0),t.on("viewinit",function(){i.viewErrored=!1}),t.on("error",function(e,a){try{var r=t.errorTranslator({player_error_code:a.player_error_code,player_error_message:a.player_error_message,player_error_context:a.player_error_context,player_error_severity:a.player_error_severity,player_error_business_exception:a.player_error_business_exception});r&&(t.data.player_error_code=r.player_error_code||a.player_error_code,t.data.player_error_message=r.player_error_message||a.player_error_message,t.data.player_error_context=r.player_error_context||a.player_error_context,t.data.player_error_severity=r.player_error_severity||a.player_error_severity,t.data.player_error_business_exception=r.player_error_business_exception||a.player_error_business_exception,i.viewErrored=!0)}catch(e){t.mux.log.warn("Exception in error translator callback.",e),i.viewErrored=!0}}),t.on("aftererror",function(){var e,i,a,r,n;null==(e=t.data)||delete e.player_error_code,null==(i=t.data)||delete i.player_error_message,null==(a=t.data)||delete a.player_error_context,null==(r=t.data)||delete r.player_error_severity,null==(n=t.data)||delete n.player_error_business_exception})},oA=function(){function e(t){sw(this,e),sS(this,"_watchTimeTrackerLastCheckedTime",void 0),sS(this,"pm",void 0),this.pm=t,this._watchTimeTrackerLastCheckedTime=null,t.on("playbackheartbeat",this._updateWatchTime.bind(this)),t.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return sC(e,[{key:"_updateWatchTime",value:function(e,t){var i=t.viewer_time;null===this._watchTimeTrackerLastCheckedTime&&(this._watchTimeTrackerLastCheckedTime=i),sH(this.pm.data,"view_watch_time",i-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=i}},{key:"_clearWatchTimeState",value:function(e,t){this._updateWatchTime(e,t),this._watchTimeTrackerLastCheckedTime=null}}]),e}(),oC=function(){function e(t){var i=this;sw(this,e),sS(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),sS(this,"_lastTime",void 0),sS(this,"_isAdPlaying",void 0),sS(this,"_callbackUpdatePlaybackTime",void 0),sS(this,"pm",void 0),this.pm=t,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=sv(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null,t.on("viewinit",function(){i.pm.data.view_playing_time_ms_cumulative=0});var a=this._startPlaybackTimeTracking.bind(this);t.on("playing",a),t.on("adplaying",a);var r=function(){i.pm.data.player_is_paused||a()};t.on("seeked",r),t.on("rebufferend",r);var n=this._stopPlaybackTimeTracking.bind(this);t.on("playbackheartbeatend",n),t.on("seeking",n),t.on("rebufferstart",n),t.on("adplaying",function(){i._isAdPlaying=!0}),t.on("adended",function(){i._isAdPlaying=!1}),t.on("adpause",function(){i._isAdPlaying=!1}),t.on("adbreakstart",function(){i._isAdPlaying=!1}),t.on("adbreakend",function(){i._isAdPlaying=!1}),t.on("adplay",function(){i._isAdPlaying=!1}),t.on("viewinit",function(){i._playbackTimeTrackerLastPlayheadPosition=-1,i._lastTime=sv(),i._isAdPlaying=!1,i._callbackUpdatePlaybackTime=null})}return sC(e,[{key:"_startPlaybackTimeTracking",value:function(){null===this._callbackUpdatePlaybackTime&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this._lastTime=sv(),this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var e=this.pm.data.player_playhead_time||0,t=sv(),i=t-this._lastTime,a=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition?a=e-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(a=i),a>0&&a<=1e3&&sH(this.pm.data,"view_content_playback_time",a),null!==this._callbackUpdatePlaybackTime&&i>0&&i<=1e3&&(this._isAdPlaying&&sH(this.pm.data,"ad_playing_time_ms_cumulative",i),sH(this.pm.data,"view_playing_time_ms_cumulative",i)),this._playbackTimeTrackerLastPlayheadPosition=e,this._lastTime=t}}]),e}(),oS=function(){function e(t){sw(this,e),sS(this,"pm",void 0),this.pm=t;var i=this._updatePlayheadTime.bind(this);t.on("playbackheartbeat",i),t.on("playbackheartbeatend",i),t.on("timeupdate",i),t.on("destroy",function(){t.off("timeupdate",i)})}return sC(e,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=void 0===this.pm.data.view_max_playhead_position?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(e,t){var i=this,a=function(){i.pm.currentFragmentPDT&&i.pm.currentFragmentStart&&(i.pm.data.player_program_time=i.pm.currentFragmentPDT+i.pm.data.player_playhead_time-i.pm.currentFragmentStart)};if(t&&t.player_playhead_time)this.pm.data.player_playhead_time=t.player_playhead_time,a(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var r=this.pm.getPlayheadTime();void 0!==r&&(this.pm.data.player_playhead_time=r,a(),this._updateMaxPlayheadPosition())}}}]),e}(),oI=function e(t){if(sw(this,e),!t.disableRebufferTracking){var i,a=function(e,t){r(t),i=void 0},r=function(e){if(i){var a=e.viewer_time-i;sH(t.data,"view_rebuffer_duration",a),i=e.viewer_time,t.data.view_rebuffer_duration>3e5&&(t.emit("viewend"),t.send("viewend"),t.mux.log.warn("Ending view after rebuffering for longer than ".concat(3e5,"ms, future events will be ignored unless a programchange or videochange occurs.")))}t.data.view_watch_time>=0&&t.data.view_rebuffer_count>0&&(t.data.view_rebuffer_frequency=t.data.view_rebuffer_count/t.data.view_watch_time,t.data.view_rebuffer_percentage=t.data.view_rebuffer_duration/t.data.view_watch_time)};t.on("playbackheartbeat",function(e,t){return r(t)}),t.on("rebufferstart",function(e,r){i||(sH(t.data,"view_rebuffer_count",1),i=r.viewer_time,t.one("rebufferend",a))}),t.on("viewinit",function(){i=void 0,t.off("rebufferend",a)})}},oR=function(){function e(t){var i=this;sw(this,e),sS(this,"_lastCheckedTime",void 0),sS(this,"_lastPlayheadTime",void 0),sS(this,"_lastPlayheadTimeUpdatedTime",void 0),sS(this,"_rebuffering",void 0),sS(this,"pm",void 0),this.pm=t,t.disableRebufferTracking||t.disablePlayheadRebufferTracking||(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,t.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),t.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),t.on("seeking",function(){i._cleanupRebufferTracker(null,{viewer_time:sv()})}))}return sC(e,[{key:"_checkIfRebuffering",value:function(e,t){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing)return void this._cleanupRebufferTracker(e,t);if(null===this._lastCheckedTime)return void this._prepareRebufferTrackerState(t.viewer_time);if(this._lastPlayheadTime!==this.pm.data.player_playhead_time)return void this._cleanupRebufferTracker(e,t,!0);var i=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.sustainedRebufferThreshold&&i>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=t.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e}},{key:"_cleanupRebufferTracker",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:t.viewer_time});else{if(null===this._lastCheckedTime)return;var a=this.pm.data.player_playhead_time-this._lastPlayheadTime,r=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.minimumRebufferDuration&&a>0&&r-a>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+r-a}))}i?this._prepareRebufferTrackerState(t.viewer_time):this._clearRebufferTrackerState()}}]),e}(),oL=function(){function e(t){var i=this;sw(this,e),sS(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){var e=t.data,a=e.view_id;if(!e.view_program_changed){var r=function(e,r){var n=r.viewer_time;"playing"===e.type&&void 0===t.data.view_time_to_first_frame?i.calculateTimeToFirstFrame(n||sv(),a):"adplaying"===e.type&&(void 0===t.data.view_time_to_first_frame||i._inPrerollPosition())&&i.calculateTimeToFirstFrame(n||sv(),a)};t.one("playing",r),t.one("adplaying",r),t.one("viewend",function(){t.off("playing",r),t.off("adplaying",r)})}})}return sC(e,[{key:"_inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(e,t){t===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:e}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.pm.pageLoadInitTime&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.pm.pageLoadInitTime))}}]),e}(),ox=function e(t){var i=this;sw(this,e),sS(this,"_lastPlayerHeight",void 0),sS(this,"_lastPlayerWidth",void 0),sS(this,"_lastPlayheadPosition",void 0),sS(this,"_lastSourceHeight",void 0),sS(this,"_lastSourceWidth",void 0),t.on("viewinit",function(){i._lastPlayheadPosition=-1}),["pause","rebufferstart","seeking","error","adbreakstart","hb","renditionchange","orientationchange","viewend","playbackmodechange"].forEach(function(e){t.on(e,function(){if(i._lastPlayheadPosition>=0&&t.data.player_playhead_time>=0&&i._lastPlayerWidth>=0&&i._lastSourceWidth>0&&i._lastPlayerHeight>=0&&i._lastSourceHeight>0){var e=t.data.player_playhead_time-i._lastPlayheadPosition;if(e<0){i._lastPlayheadPosition=-1;return}var a=Math.min(i._lastPlayerWidth/i._lastSourceWidth,i._lastPlayerHeight/i._lastSourceHeight),r=Math.max(0,a-1),n=Math.max(0,1-a);t.data.view_max_upscale_percentage=Math.max(t.data.view_max_upscale_percentage||0,r),t.data.view_max_downscale_percentage=Math.max(t.data.view_max_downscale_percentage||0,n),sH(t.data,"view_total_content_playback_time",e),sH(t.data,"view_total_upscaling",r*e),sH(t.data,"view_total_downscaling",n*e)}i._lastPlayheadPosition=-1})}),["playing","hb","renditionchange","orientationchange","playbackmodechange"].forEach(function(e){t.on(e,function(){i._lastPlayheadPosition=t.data.player_playhead_time,i._lastPlayerWidth=t.data.player_width,i._lastPlayerHeight=t.data.player_height,i._lastSourceWidth=t.data.video_source_width,i._lastSourceHeight=t.data.video_source_height})})},oM=function e(t){var i=this;sw(this,e),sS(this,"isSeeking",void 0),this.isSeeking=!1;var a=-1,r=function(){var e=sv(),r=(t.data.viewer_time||e)-(a||e);sH(t.data,"view_seek_duration",r),t.data.view_max_seek_time=Math.max(t.data.view_max_seek_time||0,r),i.isSeeking=!1,a=-1};t.on("seeking",function(e,n){if(Object.assign(t.data,n),i.isSeeking&&n.viewer_time-a<=2e3){a=n.viewer_time;return}i.isSeeking&&r(),i.isSeeking=!0,a=n.viewer_time,sH(t.data,"view_seek_count",1),t.send("seeking")}),t.on("seeked",function(){r()}),t.on("viewend",function(){i.isSeeking&&(r(),t.send("seeked")),i.isSeeking=!1,a=-1})},oD=function(e,t){e.push(t),e.sort(function(e,t){return e.viewer_time-t.viewer_time})},oO=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],oP=function(){function e(t){var i=this;sw(this,e),sS(this,"_adHasPlayed",void 0),sS(this,"_adRequests",void 0),sS(this,"_adResponses",void 0),sS(this,"_currentAdRequestNumber",void 0),sS(this,"_currentAdResponseNumber",void 0),sS(this,"_prerollPlayTime",void 0),sS(this,"_wouldBeNewAdPlay",void 0),sS(this,"isAdBreak",void 0),sS(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){i.isAdBreak=!1,i._currentAdRequestNumber=0,i._currentAdResponseNumber=0,i._adRequests=[],i._adResponses=[],i._adHasPlayed=!1,i._wouldBeNewAdPlay=!0,i._prerollPlayTime=void 0}),oO.forEach(function(e){return t.on(e,i._updateAdData.bind(i))});var a=function(){i.isAdBreak=!1};t.on("adbreakstart",function(){i.isAdBreak=!0}),t.on("play",a),t.on("playing",a),t.on("viewend",a),t.on("adrequest",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdRequestNumber++},a),oD(i._adRequests,a),sH(t.data,"view_ad_request_count"),i.inPrerollPosition()&&(t.data.view_preroll_requested=!0,i._adHasPlayed||sH(t.data,"view_preroll_request_count"))}),t.on("adresponse",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdResponseNumber++},a),oD(i._adResponses,a);var r=i.findAdRequest(a.ad_request_id);r&&sH(t.data,"view_ad_request_time",Math.max(0,a.viewer_time-r.viewer_time))}),t.on("adplay",function(e,a){i._adHasPlayed=!0,i._wouldBeNewAdPlay&&(i._wouldBeNewAdPlay=!1,sH(t.data,"view_ad_played_count")),i.inPrerollPosition()&&!t.data.view_preroll_played&&(t.data.view_preroll_played=!0,i._adRequests.length>0&&(t.data.view_preroll_request_time=Math.max(0,a.viewer_time-i._adRequests[0].viewer_time)),t.data.view_start&&(t.data.view_startup_preroll_request_time=Math.max(0,a.viewer_time-t.data.view_start)),i._prerollPlayTime=a.viewer_time)}),t.on("adplaying",function(e,a){i.inPrerollPosition()&&void 0===t.data.view_preroll_load_time&&void 0!==i._prerollPlayTime&&(t.data.view_preroll_load_time=a.viewer_time-i._prerollPlayTime,t.data.view_startup_preroll_load_time=a.viewer_time-i._prerollPlayTime)}),t.on("adclicked",function(e,a){i._wouldBeNewAdPlay||sH(t.data,"view_ad_clicked_count")}),t.on("adskipped",function(e,a){i._wouldBeNewAdPlay||sH(t.data,"view_ad_skipped_count")}),t.on("adended",function(){i._wouldBeNewAdPlay=!0}),t.on("aderror",function(){i._wouldBeNewAdPlay=!0})}return sC(e,[{key:"inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(e){for(var t=0;t<this._adRequests.length;t++)if(this._adRequests[t].ad_request_id===e)return this._adRequests[t]}},{key:"_updateAdData",value:function(e,t){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&t.ad_tag_url){var i=sm(sO(t.ad_tag_url),2),a=i[0],r=i[1];this.pm.data.view_preroll_ad_tag_domain=r,this.pm.data.view_preroll_ad_tag_hostname=a}if(!this.pm.data.view_preroll_ad_asset_hostname&&t.ad_asset_url){var n=sm(sO(t.ad_asset_url),2),s=n[0],o=n[1];this.pm.data.view_preroll_ad_asset_domain=o,this.pm.data.view_preroll_ad_asset_hostname=s}this.pm.data.ad_type="preroll"}this.pm.data.ad_asset_url=null==t?void 0:t.ad_asset_url,this.pm.data.ad_tag_url=null==t?void 0:t.ad_tag_url,this.pm.data.ad_creative_id=null==t?void 0:t.ad_creative_id,this.pm.data.ad_id=null==t?void 0:t.ad_id,this.pm.data.ad_universal_id=null==t?void 0:t.ad_universal_id,null!=t&&t.ad_type&&(this.pm.data.ad_type=null==t?void 0:t.ad_type)}}]),e}(),oN=function e(t){var i=this;sw(this,e),sS(this,"lastWallClockTime",void 0);var a=function(){i.lastWallClockTime=sv(),t.on("before*",r)},r=function(e){var a=sv(),r=i.lastWallClockTime;i.lastWallClockTime=a,a-r>3e4&&(t.emit("devicesleep",{viewer_time:r}),Object.assign(t.data,{viewer_time:r}),t.send("devicesleep"),t.emit("devicewake",{viewer_time:a}),Object.assign(t.data,{viewer_time:a}),t.send("devicewake"))};t.one("playbackheartbeat",a),t.on("playbackheartbeatend",function(){t.off("before*",r),t.one("playbackheartbeat",a)})},oU=(dA=function(){for(var e=0,t={};e<arguments.length;e++){var i=arguments[e];for(var a in i)t[a]=i[a]}return t},function e(t){function i(e,a,r){var n;if("u">typeof document){if(arguments.length>1){if("number"==typeof(r=dA({path:"/"},i.defaults,r)).expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*r.expires),r.expires=s}try{n=JSON.stringify(a),/^[\{\[]/.test(n)&&(a=n)}catch(e){}return a=t.write?t.write(a,e):encodeURIComponent(String(a)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape),document.cookie=e+"="+a+(r.expires?"; expires="+r.expires.toUTCString():"")+(r.path?"; path="+r.path:"")+(r.domain?"; domain="+r.domain:"")+(r.secure?"; secure":"")}e||(n={});for(var o=document.cookie?document.cookie.split("; "):[],l=/(%[0-9A-Z]{2})+/g,d=0;d<o.length;d++){var u=o[d].split("="),c=u.slice(1).join("=");'"'===c.charAt(0)&&(c=c.slice(1,-1));try{var h=u[0].replace(l,decodeURIComponent);if(c=t.read?t.read(c,h):t(c,h)||c.replace(l,decodeURIComponent),this.json)try{c=JSON.parse(c)}catch(e){}if(e===h){n=c;break}e||(n[h]=c)}catch(e){}}return n}}return i.set=i,i.get=function(e){return i.call(i,e)},i.getJSON=function(){return i.apply({json:!0},[].slice.call(arguments))},i.defaults={},i.remove=function(e,t){i(e,"",dA(t,{expires:-1}))},i.withConverter=e,i}(function(){})),oH="muxData",oW=function(){var e;try{e=(oU.get(oH)||"").split("&").reduce(function(e,t){var i=sm(t.split("="),2),a=i[0],r=i[1],n=+r;return e[a]=r&&n==r?n:r,e},{})}catch(t){e={}}return e},oB=function(e){try{oU.set(oH,Object.entries(e).map(function(e){var t=sm(e,2),i=t[0],a=t[1];return"".concat(i,"=").concat(a)}).join("&"),{expires:365})}catch(e){}},o$=function(){var e=oW();return e.mux_viewer_id=e.mux_viewer_id||sb(),e.msn=e.msn||Math.random(),oB(e),{mux_viewer_id:e.mux_viewer_id,mux_sample_number:e.msn}},oq=function(){var e=oW(),t=sv();return e.session_start&&(e.sst=e.session_start,delete e.session_start),e.session_id&&(e.sid=e.session_id,delete e.session_id),e.session_expires&&(e.sex=e.session_expires,delete e.session_expires),(!e.sex||e.sex<t)&&(e.sid=sb(),e.sst=t),e.sex=t+15e5,oB(e),{session_id:e.sid,session_start:e.sst,session_expires:e.sex}},oV=oK({a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"}),oF=oK({ad:"ad",af:"affiliate",ag:"aggregate",ap:"api",al:"application",ao:"audio",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",bn:"brand",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ci:"client",cj:"channels",ck:"clicked",cl:"canceled",cm:"cmcd",cn:"config",co:"count",ce:"counter",cp:"complete",cq:"creator",cr:"creative",cs:"captions",ct:"content",cu:"current",cv:"cumulative",cx:"connection",cz:"context",da:"data",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",dy:"dynamic",eb:"enabled",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",lw:"low",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mp:"mode",ms:"ms",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",or:"origin",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pp:"pip",pr:"preload",ps:"position",pt:"part",pv:"previous",py:"property",px:"pop",pz:"plan",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rg:"range",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sh:"shift",si:"sid",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",ss:"status",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tr:"track",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"});function oK(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[e[i]]=i);return t}function oj(e){var t={},i={};return Object.keys(e).forEach(function(a){var r=!1;if(e.hasOwnProperty(a)&&void 0!==e[a]){var n=a.split("_"),s=n[0],o=oV[s];o||(s_.info("Data key word `"+n[0]+"` not expected in "+a),o=s+"_"),n.splice(1).forEach(function(e){"url"===e&&(r=!0),oF[e]?o+=oF[e]:Number.isInteger(Number(e))?o+=e:(s_.info("Data key word `"+e+"` not expected in "+a),o+="_"+e+"_")}),r?i[o]=e[a]:t[o]=e[a]}}),Object.assign(t,i)}var oG=(dS=null!=(dC=su())?nQ(n0(dC)):{},function(e,t,i){if(t&&"object"==typeof t||"function"==typeof t)for(var a,r=nJ(t),n=0,s=r.length;n<s;n++)a=r[n],n1.call(e,a)||void 0===a||nZ(e,a,{get:(function(e){return t[e]}).bind(null,a),enumerable:!(i=nX(t,a))||i.enumerable});return e}(dC&&dC.__esModule?dS:nZ(dS,"default",{value:dC,enumerable:!0}),dC)),oY="u">typeof document?document:oG.default,oz={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},oQ=["hb","requestcompleted","requestfailed","requestcanceled"],oZ=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._beaconUrl=e||"https://img.litix.io",this._eventQueue=[],this._postInFlight=!1,this._resendAfterPost=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},oz,t)};oZ.prototype.queueEvent=function(e,t){var i=Object.assign({},t);return(this._eventQueue.length<=this._options.maxQueueLength||"eventrateexceeded"===e)&&(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength)},oZ.prototype.flushEvents=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&1===this._eventQueue.length?this._eventQueue.pop():(this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending())},oZ.prototype.destroy=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.destroyed=!0,e?this._clearBeaconQueue():this.flushEvents(),sp.clearTimeout(this._sendTimeout)},oZ.prototype._clearBeaconQueue=function(){var e=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,t=this._eventQueue.slice(e);e>0&&Object.assign(t[t.length-1],oj({mux_view_message:"event queue truncated"}));var i=this._createPayload(t);oJ(this._beaconUrl,i,!0,function(){})},oZ.prototype._sendBeaconQueue=function(){var e=this;if(this._postInFlight){this._resendAfterPost=!0;return}var t=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var i=this._createPayload(t),a=sv();oJ(this._beaconUrl,i,!1,function(i,r){r?(e._eventQueue=t.concat(e._eventQueue),e._failureCount+=1,s_.info("Error sending beacon: "+r)):e._failureCount=0,e._roundTripTime=sv()-a,e._postInFlight=!1,e._resendAfterPost&&(e._resendAfterPost=!1,e._eventQueue.length>0&&e._sendBeaconQueue())})},oZ.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var e=Math.pow(2,this._failureCount-1);return(1+(e*=Math.random()))*this._options.baseTimeBetweenBeacons},oZ.prototype._startBeaconSending=function(){var e=this;sp.clearTimeout(this._sendTimeout),this.destroyed||(this._sendTimeout=sp.setTimeout(function(){e._eventQueue.length&&e._sendBeaconQueue(),e._startBeaconSending()},this._getNextBeaconTime()))},oZ.prototype._createPayload=function(e){var t=this,i={transmission_timestamp:Math.round(sv())};this._roundTripTime&&(i.rtt_ms=Math.round(this._roundTripTime));var a,r,n,s=function(){n=(a=JSON.stringify({metadata:i,events:r||e})).length/1024},o=function(){return n<=t._options.maxPayloadKBSize};return s(),o()||(s_.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=e.filter(function(e){return -1===oQ.indexOf(e.e)}),s()),o()||(s_.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(e){for(var t in e){var i=e[t];"string"==typeof i&&i.length>51200&&(e[t]=i.substring(0,51200))}}),s()),a};var oX="function"==typeof oY.exitPictureInPicture?function(e){return e.length<=57344}:function(e){return!1},oJ=function(e,t,i,a){if(i&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(e,t))return void a();if(sp.fetch)return void sp.fetch(e,{method:"POST",body:t,headers:{"Content-Type":"text/plain"},keepalive:oX(t)}).then(function(e){return a(null,e.ok?null:"Error")}).catch(function(e){return a(null,e)});if(sp.XMLHttpRequest){var r=new sp.XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState)return a(null,200!==r.status?"error":void 0)},r.open("POST",e),r.setRequestHeader("Content-Type","text/plain"),r.send(t);return}a()},o0=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception","view_playing_time_ms_cumulative","ad_playing_time_ms_cumulative"],o1=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],o2=["ad_id","ad_creative_id","ad_universal_id"],o3=["viewstart","error","ended","viewend"],o4=function(){function e(t,i){var a,r,n,s,o,l,d,u,c,h,m,p,b,g,f,E,y,_,k,T=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};sw(this,e),sS(this,"mux",void 0),sS(this,"envKey",void 0),sS(this,"options",void 0),sS(this,"eventQueue",void 0),sS(this,"sampleRate",void 0),sS(this,"disableCookies",void 0),sS(this,"respectDoNotTrack",void 0),sS(this,"previousBeaconData",void 0),sS(this,"lastEventTime",void 0),sS(this,"rateLimited",void 0),sS(this,"pageLevelData",void 0),sS(this,"viewerData",void 0),this.mux=t,this.envKey=i,this.options=T,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new oZ((a=this.envKey,n=(r=this.options).beaconCollectionDomain,s=r.beaconDomain,n?(/localhost(?::\d+)?$/.test(n)?"http://":"https://")+n:(a=a||"inferred").match(/^[a-z0-9]+$/)?"https://"+a+"."+(s||"litix.io"):"https://img.litix.io/a.gif")),this.sampleRate=null!=(y=this.options.sampleRate)?y:1,this.disableCookies=null!=(_=this.options.disableCookies)&&_,this.respectDoNotTrack=null!=(k=this.options.respectDoNotTrack)&&k,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:null==(o=this.options.platform)?void 0:o.name,viewer_application_version:null==(l=this.options.platform)?void 0:l.version,viewer_application_engine:null==(d=this.options.platform)?void 0:d.layout,viewer_device_name:null==(u=this.options.platform)?void 0:u.product,viewer_device_category:"",viewer_device_manufacturer:null==(c=this.options.platform)?void 0:c.manufacturer,viewer_os_family:null==(m=this.options.platform)||null==(h=m.os)?void 0:h.family,viewer_os_architecture:null==(b=this.options.platform)||null==(p=b.os)?void 0:p.architecture,viewer_os_version:null==(f=this.options.platform)||null==(g=f.os)?void 0:g.version,page_url:null==sp||null==(E=sp.location)?void 0:E.href},this.viewerData=this.disableCookies?{}:o$()}return sC(e,[{key:"send",value:function(e,t){if(!(!e||!(null!=t&&t.view_id))){if(this.respectDoNotTrack&&sk())return s_.info("Not sending `"+e+"` because Do Not Track is enabled");if(!t||"object"!=typeof t)return s_.error("A data object was expected in send() but was not provided");var i=this.disableCookies?{}:oq(),a=sB(sW({},this.pageLevelData,t,i,this.viewerData),{event:e,env_key:this.envKey});a.user_id&&(a.viewer_user_id=a.user_id,delete a.user_id);var r,n=(null!=(r=a.mux_sample_number)?r:0)>=this.sampleRate,s=oj(this._deduplicateBeaconData(e,a));if(this.lastEventTime=this.mux.utils.now(),n)return s_.info("Not sending event due to sample rate restriction",e,a,s);if(this.envKey||s_.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",e,a,s),!this.rateLimited)if(s_.info("Sending event",e,a,s),this.rateLimited=!this.eventQueue.queueEvent(e,s),this.mux.WINDOW_UNLOADING&&"viewend"===e)this.eventQueue.destroy(!0);else{if(this.mux.WINDOW_HIDDEN&&"hb"===e)this.eventQueue.flushEvents(!0);else if(o3.indexOf(e)>=0){if("error"===e&&"warning"===t.player_error_severity)return;this.eventQueue.flushEvents()}if(this.rateLimited)return a.event="eventrateexceeded",s=oj(a),this.eventQueue.queueEvent(a.event,s),s_.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(e,t){var i=this,a={},r=t.view_id;if("-1"===r||"viewstart"===e||"viewend"===e||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=6e5)a=sW({},t),r&&(this.previousBeaconData=a),r&&"viewend"===e&&(this.previousBeaconData=null);else{var n=0===e.indexOf("request");Object.entries(t).forEach(function(t){var r=sm(t,2),s=r[0],o=r[1];i.previousBeaconData&&(o!==i.previousBeaconData[s]||o0.indexOf(s)>-1||i.objectHasChanged(n,s,o,i.previousBeaconData[s])||i.eventRequiresKey(e,s))&&(a[s]=o,i.previousBeaconData[s]=o)})}return a}},{key:"objectHasChanged",value:function(e,t,i,a){return!!e&&0===t.indexOf("request_")&&("request_response_headers"===t||"object"!=typeof i||"object"!=typeof a||Object.keys(i||{}).length!==Object.keys(a||{}).length)}},{key:"eventRequiresKey",value:function(e,t){switch(e){case"audiotrackchange":if(t.startsWith("player_audio_track_"))return!0;break;case"playbackmodechange":if(t.startsWith("player_playback_mode"))return!0;break;case"renditionchange":if(t.startsWith("video_source_"))return!0;break;case"texttrackchange":if(t.startsWith("player_text_track_"))return!0}return!!(o2.includes(t)&&o1.includes(e))}}]),e}(),o5=function e(t){sw(this,e);var i=0,a=0,r=0,n=0,s=0,o=0,l=0;t.on("requestcompleted",function(e,o){var l,d,u=o.request_start,c=o.request_response_start,h=o.request_response_end,m=o.request_bytes_loaded;if(n++,c?(l=c-(null!=u?u:0),d=(null!=h?h:0)-c):d=(null!=h?h:0)-(null!=u?u:0),d>0&&m&&m>0){var p=m/d*8e3;s++,a+=m,r+=d,t.data.view_min_request_throughput=Math.min(t.data.view_min_request_throughput||1/0,p),t.data.view_average_request_throughput=a/r*8e3,t.data.view_request_count=n,l>0&&(i+=l,t.data.view_max_request_latency=Math.max(t.data.view_max_request_latency||0,l),t.data.view_average_request_latency=i/s)}}),t.on("requestfailed",function(e,i){n++,o++,t.data.view_request_count=n,t.data.view_request_failed_count=o}),t.on("requestcanceled",function(e,i){n++,l++,t.data.view_request_count=n,t.data.view_request_canceled_count=l})},o9=function e(t){var i=this;sw(this,e),sS(this,"_lastEventTime",void 0),t.on("before*",function(e,a){var r=a.viewer_time,n=sv(),s=i._lastEventTime;if(i._lastEventTime=n,s&&n-s>36e5){var o=Object.keys(t.data).reduce(function(e,i){return 0===i.indexOf("video_")?Object.assign(e,sS({},i,t.data[i])):e},{});t.mux.log.info("Received event after at least an hour inactivity, creating a new view");var l=t.playbackHeartbeat._playheadShouldBeProgressing;t._resetView(Object.assign({viewer_time:r},o)),t.playbackHeartbeat._playheadShouldBeProgressing=l,t.playbackHeartbeat._playheadShouldBeProgressing&&"play"!==e.type&&"adbreakstart"!==e.type&&(t.emit("play",{viewer_time:r}),"playing"!==e.type&&t.emit("playing",{viewer_time:r}))}})};function o8(e,t){return(null==e?void 0:e.toLowerCase())===(null==t?void 0:t.toLowerCase())}var o6=function e(t){sw(this,e);var i=function(e){var i,a,r,o=null!=(i=e)&&i.request_type&&("media"===i.request_type||"video"===i.request_type)&&null!=(a=i.request_response_headers)&&a["x-cdn"]?i.request_response_headers["x-cdn"]:null!=i&&i.video_cdn?i.video_cdn:null,l=null!=(r=e)&&r.request_start?r.request_start:null!=r&&r.viewer_time?r.viewer_time:Date.now();null!=o&&!o8(o,n)&&s<=l&&(n=o,s=l,t.emit("cdnchange",{video_cdn:o}))},a=null,r=null,n=null,s=0;t.on("viewinit",function(){a=null,r=null,n=null,s=0}),t.on("beforecdnchange",function(e,t){var i=null==t?void 0:t.video_cdn;i&&(void 0===t.video_previous_cdn||null===t.video_previous_cdn)&&(o8(i,r)?t.video_previous_cdn=null!=a?a:void 0:(t.video_previous_cdn=null!=r?r:void 0,a=r,r=i))}),t.on("requestcompleted",function(e,t){i(t)})},o7=function(e){try{return JSON.parse(e),!0}catch(e){return!1}},le=function e(t){var i=this;sw(this,e),sS(this,"_emittingAutomaticEvent",!1),sS(this,"_hasInitialized",!1),sS(this,"_currentMode","standard"),t.on("viewstart",function(){i._hasInitialized||(i._hasInitialized=!0,i._currentMode=t.data.player_playback_mode||"standard",i._emittingAutomaticEvent=!0,t.emit("playbackmodechange",{player_playback_mode:i._currentMode,player_playback_mode_data:"{}"}),i._emittingAutomaticEvent=!1)}),t.on("viewend",function(){i._hasInitialized=!1}),t.on("playbackmodechange",function(e,a){i._emittingAutomaticEvent||(a.player_playback_mode_data?o7(a.player_playback_mode_data)||(t.mux.log.warn("Invalid JSON string for player_playback_mode_data"),a.player_playback_mode_data="{}"):a.player_playback_mode_data="{}",t.data.player_playback_mode_data=a.player_playback_mode_data,t.data.player_playback_mode=a.player_playback_mode,i._currentMode=a.player_playback_mode)})},lt=function(){function e(t){sw(this,e),sS(this,"pm",void 0),sS(this,"_currentRangeStart",void 0),sS(this,"_lastPlayheadTime",void 0),this.pm=t,this._currentRangeStart=null,this._lastPlayheadTime=null,t.on("playbackheartbeat",this._updatePlaybackRange.bind(this)),t.on("playbackheartbeatend",this._endPlaybackRange.bind(this))}return sC(e,[{key:"_updateLastRangeEnd",value:function(){var e=this.pm.data.video_playback_ranges;if(e&&e.length>0){var t=this.pm.data.player_playhead_time||0;e[e.length-1][1]=t}}},{key:"_updatePlaybackRange",value:function(){var e,t=this.pm.data.player_playhead_time||0;if(!(!this.pm.disableAdPlaybackRangeFiltering&&null!=(e=this.pm.adTracker)&&e.isAdBreak&&null!==this._lastPlayheadTime&&t<this._lastPlayheadTime)){if(null!==this._lastPlayheadTime&&null!==this._currentRangeStart&&Math.abs(t-this._lastPlayheadTime)>1e3){var i=this.pm.data.video_playback_ranges;i&&i.length>0&&(i[i.length-1][1]=this._lastPlayheadTime),this._currentRangeStart=null}if(null===this._currentRangeStart){var a=this.pm.data.video_playback_ranges||[];a.length>0&&a[a.length-1][1]===t?this._currentRangeStart=a[a.length-1][0]:(this._currentRangeStart=t,a.push([t,t])),this.pm.data.video_playback_ranges=a}else this._updateLastRangeEnd();this._lastPlayheadTime=t}}},{key:"_endPlaybackRange",value:function(){null!==this._currentRangeStart&&(this._updateLastRangeEnd(),this._currentRangeStart=null,this._lastPlayheadTime=null)}}]),e}();n8();var li=function e(t,i,a){var r=this;sw(this,e),sS(this,"_lastPayload",null),sS(this,"_seenThisView",!1),sS(this,"_emittingAutomaticEvent",!1);var n=function(e){var t={};return Object.keys(e).forEach(function(i){i.startsWith(a)&&(t[i]=e[i])}),t},s=function(){Object.keys(t.data).forEach(function(e){e.startsWith(a)&&delete t.data[e]})};t.on("viewinit",function(){r._seenThisView=!1,s()}),t.on("viewstart",function(){r._lastPayload&&!r._seenThisView&&(r._emittingAutomaticEvent=!0,t.emit(i,sW({},r._lastPayload)),r._emittingAutomaticEvent=!1)});var o=a+"enabled";t.on("before"+i,function(e,l){var d=l[o];if("boolean"!=typeof d){var u=Object.keys(l).some(function(e){return e!==o&&e.startsWith(a)&&void 0!==l[e]});l[o]=u,t.mux.log.warn("Expected a boolean for ".concat(o," on ").concat(i,", got ").concat(void 0===d?"undefined":n9(d)," ")+"(".concat(String(d),"); inferred as ").concat(u," from the payload."))}r._emittingAutomaticEvent||(r._seenThisView=!0,r._lastPayload=n(l)),s()})},la=function(e){sx(i,e);var t=sM(i);function i(e){return sw(this,i),t.call(this,e,"texttrackchange","player_text_track_")}return i}(li),lr=function(e){sx(i,e);var t=sM(i);function i(e){return sw(this,i),t.call(this,e,"audiotrackchange","player_audio_track_")}return i}(li),ln=Object.freeze({CELLULAR:"cellular",WIFI:"wifi",WIRED:"wired",OTHER:"other",NO_CONNECTION:"no_connection",UNKNOWN:"unknown"}),ls=function(e){if(!e)return ln.UNKNOWN;switch(e){case"cellular":case"wimax":return ln.CELLULAR;case"wifi":return ln.WIFI;case"ethernet":return ln.WIRED;case"none":return ln.NO_CONNECTION;case"bluetooth":case"other":default:return ln.OTHER;case"unknown":return ln.UNKNOWN}},lo=function(){function e(t){var i=this;sw(this,e),sS(this,"pm",void 0),sS(this,"lastType",void 0),sS(this,"lastLowDataMode",void 0),this.pm=t,this.pm.one("viewinit",function(){var t,a=i.emit.bind(i);a(),sp.addEventListener("online",a),sp.addEventListener("offline",a),null==(t=e.connection)||t.addEventListener("change",a),i.pm.on("destroy",function(){var t;null==(t=e.connection)||t.removeEventListener("change",a),sp.removeEventListener("online",a),sp.removeEventListener("offline",a)})})}return sC(e,[{key:"type",get:function(){var t,i;return(null==(t=sp.navigator)?void 0:t.onLine)===!1?ln.NO_CONNECTION:null!=(i=e.connection)&&i.type?ls(e.connection.type):ln.UNKNOWN}},{key:"lowDataMode",get:function(){var t;return null==(t=e.connection)?void 0:t.saveData}},{key:"emit",value:function(){var e=this.type,t=this.lowDataMode;e===this.lastType&&t===this.lastLowDataMode||(this.lastType=e,this.lastLowDataMode=t,this.pm.emit("networkchange",sW({viewer_connection_type:e},void 0!==t&&{viewer_connection_low_data_mode:t})))}}],[{key:"connection",get:function(){var e;return"object"==typeof(e=sp.navigator)&&"connection"in e&&"object"==typeof e.connection?sp.navigator.connection:null}}]),e}(),ll=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange","networkchange","cdnchange","playbackmodechange","texttrackchange","audiotrackchange"],ld=new Set(["requestcompleted","requestfailed","requestcanceled"]),lu=function(e){sx(i,e);var t=sM(i);function i(e,a,r){sw(this,i),sS(sT(n=t.call(this)),"pageLoadEndTime",void 0),sS(sT(n),"pageLoadInitTime",void 0),sS(sT(n),"_destroyed",void 0),sS(sT(n),"_heartBeatTimeout",void 0),sS(sT(n),"adTracker",void 0),sS(sT(n),"dashjs",void 0),sS(sT(n),"data",void 0),sS(sT(n),"disablePlayheadRebufferTracking",void 0),sS(sT(n),"disableRebufferTracking",void 0),sS(sT(n),"disableAdPlaybackRangeFiltering",void 0),sS(sT(n),"errorTracker",void 0),sS(sT(n),"errorTranslator",void 0),sS(sT(n),"emitTranslator",void 0),sS(sT(n),"getAdData",void 0),sS(sT(n),"getPlayheadTime",void 0),sS(sT(n),"getStateData",void 0),sS(sT(n),"stateDataTranslator",void 0),sS(sT(n),"hlsjs",void 0),sS(sT(n),"id",void 0),sS(sT(n),"longResumeTracker",void 0),sS(sT(n),"minimumRebufferDuration",void 0),sS(sT(n),"mux",void 0),sS(sT(n),"playbackEventDispatcher",void 0),sS(sT(n),"playbackHeartbeat",void 0),sS(sT(n),"playbackHeartbeatTime",void 0),sS(sT(n),"playheadTime",void 0),sS(sT(n),"seekingTracker",void 0),sS(sT(n),"sustainedRebufferThreshold",void 0),sS(sT(n),"watchTimeTracker",void 0),sS(sT(n),"currentFragmentPDT",void 0),sS(sT(n),"currentFragmentStart",void 0),n.pageLoadInitTime=sU(),n.pageLoadEndTime=sN(),n.mux=e,n.id=a,null!=r&&r.beaconDomain&&n.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),(r=Object.assign({debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,disableAdPlaybackRangeFiltering:!1,errorTranslator:function(e){return e},emitTranslator:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return t},stateDataTranslator:function(e){return e}},r)).data=r.data||{},r.data.property_key&&(r.data.env_key=r.data.property_key,delete r.data.property_key),s_.level=r.debug?1:3,n.getPlayheadTime=r.getPlayheadTime,n.getStateData=r.getStateData||function(){return{}},n.getAdData=r.getAdData||function(){},n.minimumRebufferDuration=r.minimumRebufferDuration,n.sustainedRebufferThreshold=r.sustainedRebufferThreshold,n.playbackHeartbeatTime=r.playbackHeartbeatTime,n.disableRebufferTracking=r.disableRebufferTracking,n.disableRebufferTracking&&n.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),n.disablePlayheadRebufferTracking=r.disablePlayheadRebufferTracking,n.disableAdPlaybackRangeFiltering=r.disableAdPlaybackRangeFiltering,n.errorTranslator=r.errorTranslator,n.emitTranslator=r.emitTranslator,n.stateDataTranslator=r.stateDataTranslator,n.playbackEventDispatcher=new o4(e,r.data.env_key,r),n.data={player_instance_id:sb(),mux_sample_rate:r.sampleRate,beacon_domain:r.beaconCollectionDomain||r.beaconDomain},n.data.view_sequence_number=1,n.data.player_sequence_number=1;var n,s=(function(){void 0===this.data.view_start&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"),this.emit("renditionchange"))}).bind(sT(n));if(n.on("viewinit",function(e,t){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,t),this._initializeViewData(),this.one("play",s),this.one("adbreakstart",s)}),n.on("videochange",function(e,t){this._resetView(t)}),n.on("programchange",function(e,t){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(t,{view_program_changed:!0})),s(),this.emit("play"),this.emit("playing")}),n.on("fragmentchange",function(e,t){this.currentFragmentPDT=t.currentFragmentPDT,this.currentFragmentStart=t.currentFragmentStart}),n.on("destroy",n.destroy),"u">typeof window&&"function"==typeof window.addEventListener&&"function"==typeof window.removeEventListener){var o=function(){var e=void 0!==n.data.view_start;n.mux.WINDOW_HIDDEN="hidden"===document.visibilityState,e&&n.mux.WINDOW_HIDDEN&&(n.data.player_is_paused||n.emit("hb"))};window.addEventListener("visibilitychange",o,!1);var l=function(e){e.persisted||n.destroy()};window.addEventListener("pagehide",l,!1),n.on("destroy",function(){window.removeEventListener("visibilitychange",o),window.removeEventListener("pagehide",l)})}return n.on("playerready",function(e,t){Object.assign(this.data,t)}),ll.forEach(function(e){n.on(e,function(t,i){0!==e.indexOf("ad")&&this._updateStateData(),Object.assign(this.data,i),this._sanitizeData()}),n.on("after"+e,function(){("error"!==e||this.errorTracker.viewErrored)&&this.send(e)})}),n.on("viewend",function(e,t){Object.assign(n.data,t)}),n.one("playerready",function(e){var t=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=t-this.data.player_init_time),this.pageLoadInitTime=this.data.page_load_init_time||this.pageLoadInitTime,this.pageLoadEndTime=this.data.page_load_end_time||this.pageLoadEndTime,!this.mux.PLAYER_TRACKED&&this.pageLoadInitTime&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.pageLoadEndTime)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.pageLoadEndTime||1/0)-this.pageLoadInitTime)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time}),n.longResumeTracker=new o9(sT(n)),n.errorTracker=new ow(sT(n)),new oN(sT(n)),n.seekingTracker=new oM(sT(n)),n.playheadTime=new oS(sT(n)),n.playbackHeartbeat=new oT(sT(n)),new ox(sT(n)),n.watchTimeTracker=new oA(sT(n)),new oC(sT(n)),new lt(sT(n)),n.adTracker=new oP(sT(n)),new oR(sT(n)),new oI(sT(n)),new oL(sT(n)),new o5(sT(n)),new o6(sT(n)),new le(sT(n)),new la(sT(n)),new lr(sT(n)),new lo(sT(n)),r.hlsjs&&n.addHLSJS(r),r.dashjs&&n.addDashJS(r),n.emit("viewinit",r.data),n}return sC(i,[{key:"emit",value:function(e,t){var a,r=Object.assign({viewer_time:this.mux.utils.now()},t),n=[e,r];if(this.emitTranslator)try{n=this.emitTranslator(e,r)}catch(e){this.mux.log.warn("Exception in emit translator callback.",e)}null!=n&&n.length&&(a=sR(sI(i.prototype),"emit",this)).call.apply(a,[this].concat(sy(n)))}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,void 0!==this.data.view_start&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(e){if(this.data.view_id){var t=Object.assign({},this.data);if(void 0===t.video_source_is_live&&(t.player_source_duration===1/0||t.video_source_duration===1/0?t.video_source_is_live=!0:(t.player_source_duration>0||t.video_source_duration>0)&&(t.video_source_is_live=!1)),t.video_source_is_live||["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"].forEach(function(e){t[e]=void 0}),t.video_source_url=t.video_source_url||t.player_source_url,t.video_source_url){var i=sm(sO(t.video_source_url),2),a=i[0];t.video_source_domain=i[1],t.video_source_hostname=a}delete t.ad_request_id,t.video_playback_ranges&&(t.video_playback_range=JSON.stringify(t.video_playback_ranges.filter(function(e){return e[0]!==e[1]}).map(function(e){return"".concat(e[0],":").concat(e[1])})),delete t.video_playback_ranges),this.playbackEventDispatcher.send(e,t),this.data.view_sequence_number++,this.data.player_sequence_number++,ld.has(e)||this._restartHeartBeat(),"viewend"===e&&delete this.data.view_id}}},{key:"_resetView",value:function(e){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",e)}},{key:"_updateStateData",value:function(){var e,t=this.getStateData();if("function"==typeof this.stateDataTranslator)try{t=this.stateDataTranslator(t)}catch(e){this.mux.log.warn("Exception in stateDataTranslator translator callback.",e)}null!=(e=this.data)&&e.video_cdn&&null!=t&&t.video_cdn&&(t.video_cdn,t=function(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}(t,["video_cdn"])),Object.assign(this.data,t),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var e=this;["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate","player_audio_track_bitrate"].forEach(function(t){var i=parseInt(e.data[t],10);e.data[t]=isNaN(i)?void 0:i}),["player_source_url","video_source_url"].forEach(function(t){if(e.data[t]){var i=e.data[t].toLowerCase();(0===i.indexOf("data:")||0===i.indexOf("blob:"))&&(e.data[t]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("video_")&&delete e.data[t]})}},{key:"_resetViewData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("view_")&&delete e.data[t]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var e=this,t=this.data.view_id=sb(),i=function(){t===e.data.view_id&&sH(e.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",i):i()}},{key:"_restartHeartBeat",value:function(){var e=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){e.data.player_is_paused||e.emit("hb")},1e4)}},{key:"addHLSJS",value:function(e){e.hlsjs?this.hlsjs?this.mux.log.warn("An instance of HLS.js is already being monitored for this player."):(this.hlsjs=e.hlsjs,om(this.mux,this.id,e.hlsjs,{},e.Hls||window.Hls)):this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.")}},{key:"removeHLSJS",value:function(){this.hlsjs&&(op(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(e){e.dashjs?this.dashjs?this.mux.log.warn("An instance of Dash.js is already being monitored for this player."):(this.dashjs=e.dashjs,oE(this.mux,this.id,e.dashjs)):this.mux.log.warn("You must pass a valid dashjs instance in order to track it.")}},{key:"removeDashJS",value:function(){this.dashjs&&(oy(this.dashjs),this.dashjs=void 0)}}]),i}(ok);function lc(){return oY&&!!(oY.fullscreenElement||oY.webkitFullscreenElement||oY.mozFullScreenElement||oY.msFullscreenElement)}var lh=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],lm={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"};sp&&sp.WeakMap&&(mY=new WeakMap);var lp=function(e){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(e),this.manifest};lp.prototype.process=function(e){var t;for(this.buffer+=e,t=this.buffer.indexOf("\n");t>-1;t=this.buffer.indexOf("\n"))this.processLine(this.buffer.substring(0,t)),this.buffer=this.buffer.substring(t+1)},lp.prototype.processLine=function(e){var t=e.indexOf(":"),i=l_(e,t),a=i[0],r=2===i.length?lg(i[1]):void 0;if("#"!==a[0])this.currentUri.uri=a,this.manifest.segments.push(this.currentUri),!this.manifest.targetDuration||"duration"in this.currentUri||(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(a){case"#EXT-X-TARGETDURATION":if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break;case"#EXT-X-PART-INF":lv(this.manifest,i),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break;case"#EXT-X-SERVER-CONTROL":lv(this.manifest,i),this.setHoldBack();break;case"#EXTINF":0===r?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break;case"#EXT-X-PROGRAM-DATE-TIME":var n=new Date(r);this.manifest.dateTimeString||(this.manifest.dateTimeString=r,this.manifest.dateTimeObject=n),this.currentUri.dateTimeString=r,this.currentUri.dateTimeObject=n;break;case"#EXT-X-VERSION":lv(this.manifest,i);break;case"#EXT-X-SESSION-DATA":var s=sK(lk(i[1]));Object.assign(this.manifest.sessionData,s)}},lp.prototype.setHoldBack=function(){var e=this.manifest,t=e.serverControl,i=e.targetDuration,a=e.partTargetDuration;if(t){var r="holdBack",n="partHoldBack",s=i&&3*i,o=a&&2*a;i&&!t.hasOwnProperty(r)&&(t[r]=s),s&&t[r]<s&&(t[r]=s),a&&!t.hasOwnProperty(n)&&(t[n]=3*a),a&&t[n]<o&&(t[n]=o)}};var lv=function(e,t){var i,a=lb(t[0].replace("#EXT-X-",""));ly(t[1])?(i={},i=Object.assign(lE(t[1]),i)):i=lg(t[1]),e[a]=i},lb=function(e){return e.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})},lg=function(e){if("yes"===e.toLowerCase()||"no"===e.toLowerCase())return"yes"===e.toLowerCase();var t=-1!==e.indexOf(":")?e:parseFloat(e);return isNaN(t)?e:t},lf=function(e){var t={},i=e.split("=");return i.length>1&&(t[lb(i[0])]=lg(i[1])),t},lE=function(e){for(var t=e.split(","),i={},a=0;t.length>a;a++)i=Object.assign(lf(t[a]),i);return i},ly=function(e){return e.indexOf("=")>-1},l_=function(e,t){return -1===t?[e]:[e.substring(0,t),e.substring(t+1)]},lk=function(e){var t={};if(e){var i=e.search(",");return[e.slice(0,i),e.slice(i+1)].forEach(function(e,i){for(var a=e.replace(/['"]+/g,"").split("="),r=0;r<a.length;r++)"DATA-ID"===a[r]&&(t["DATA-ID"]=a[1-r]),"VALUE"===a[r]&&(t.VALUE=a[1-r])}),{data:t}}},lT={safeCall:function(e,t,i,a){var r=a;if(e&&"function"==typeof e[t])try{r=e[t].apply(e,i)}catch(e){s_.info("safeCall error",e)}return r},safeIncrement:sH,getComputedStyle:function(e,t){var i;return e&&t&&sp&&"function"==typeof sp.getComputedStyle?(mY&&mY.has(e)&&(i=mY.get(e)),i||(i=sp.getComputedStyle(e,null),mY&&mY.set(e,i)),i.getPropertyValue(t)):""},secondsToMs:function(e){return Math.floor(1e3*e)},assign:Object.assign,headersStringToObject:sV,cdnHeadersToRequestId:sF,extractHostnameAndDomain:sO,extractHostname:sD,manifestParser:lp,generateShortID:sg,generateUUID:sb,now:sv,findMediaElement:sE},lw={},lA=function(e){var t=arguments;"string"==typeof e?lA.hasOwnProperty(e)?sp.setTimeout(function(){t=Array.prototype.splice.call(t,1),lA[e].apply(null,t)},0):s_.warn("`"+e+"` is an unknown task"):"function"==typeof e?sp.setTimeout(function(){e(lA)},0):s_.warn("`"+e+"` is invalid.")},lC={loaded:sv(),NAME:"mux-embed",VERSION:"5.19.0",API_VERSION:"2.1",PLAYER_TRACKED:!1,monitor:function(e,t){return function(e,t,i){var a=sm(sE(t),3),r=a[0],n=a[1],s=a[2],o=e.log,l=e.utils.getComputedStyle,d=e.utils.secondsToMs;if(!r)return o.error("No element was found with the `"+n+"` query selector.");if("video"!==s&&"audio"!==s)return o.error("The element of `"+n+"` was not a media element.");r.mux&&(r.mux.destroy(),delete r.mux,o.warn("Already monitoring this video element, replacing existing event listeners")),(i=Object.assign({automaticErrorTracking:!0},i,{getPlayheadTime:function(){return d(r.currentTime)},getStateData:function(){var e,t,i=(null==(e=this.getPlayheadTime)?void 0:e.call(this))||d(r.currentTime),a=this.hlsjs&&this.hlsjs.url,n=this.dashjs&&"function"==typeof this.dashjs.getSource&&this.dashjs.getSource(),s={player_is_paused:r.paused,player_width:parseInt(l(r,"width")),player_height:parseInt(l(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:lc(),video_poster_url:r.poster,video_source_url:a||n||r.currentSrc,video_source_duration:d(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:null==r||null==(t=r.getVideoPlaybackQuality)?void 0:t.call(r).droppedVideoFrames};if(r.getStartDate&&i>0){var o=r.getStartDate();if(o&&"function"==typeof o.getTime&&o.getTime()){var u=o.getTime();s.player_program_time=u+i,r.seekable.length>0&&(s.player_live_edge_program_time=u+r.seekable.end(r.seekable.length-1))}}return s}})).data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:e.VERSION},i.data),r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(t,i){e.emit(n,t,i)},r.mux.updateData=function(e){r.mux.emit("hb",e)};var u,c,h=function(){u&&(u.destroy(),u=void 0),c&&(c.destroy(),c=void 0)},m=function(){h(),null==(u=s0({mediaElement:r,onChange:function(t){var i;null!=(i=r.mux)&&i.audioTrackChangeHandler?r.mux.audioTrackChangeHandler(t):e.emit(n,"audiotrackchange",t)}}))||u.refresh(),null==(c=s9({mediaElement:r,onChange:function(t){var i;null!=(i=r.mux)&&i.textTrackChangeHandler?r.mux.textTrackChangeHandler(t):e.emit(n,"texttrackchange",t)}}))||c.refresh()},p=function(){o.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){h(),Object.keys(r.mux.listeners).forEach(function(e){r.removeEventListener(e,r.mux.listeners[e],!1)}),delete r.mux.listeners,r.mux.fullscreenChangeListener&&(document.removeEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1),delete r.mux.fullscreenChangeListener),r.mux.destroy=p,r.mux.swapElement=p,r.mux.emit=p,r.mux.addHLSJS=p,r.mux.addDashJS=p,r.mux.removeHLSJS=p,r.mux.removeDashJS=p,r.mux.updateData=p,r.mux.setEmitTranslator=p,r.mux.setStateDataTranslator=p,r.mux.setGetPlayheadTime=p,r.mux.deleted=!0,e.emit(n,"destroy")},r.mux.swapElement=function(t){var i=sm(sE(t),3),a=i[0],n=i[1],s=i[2];return a?"video"!==s&&"audio"!==s?e.log.error("The element of `"+n+"` was not a media element."):void(a.muxId=r.muxId,delete r.muxId,a.mux=a.mux||{},a.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(a.mux.listeners).forEach(function(e){r.removeEventListener(e,a.mux.listeners[e],!1),a.addEventListener(e,a.mux.listeners[e],!1)}),a.mux.fullscreenChangeListener=r.mux.fullscreenChangeListener,delete r.mux.fullscreenChangeListener,a.mux.swapElement=r.mux.swapElement,a.mux.destroy=r.mux.destroy,delete r.mux,r=a,m()):e.log.error("No element was found with the `"+n+"` query selector.")},r.mux.addHLSJS=function(t){e.addHLSJS(n,t)},r.mux.addDashJS=function(t){e.addDashJS(n,t)},r.mux.removeHLSJS=function(){e.removeHLSJS(n)},r.mux.removeDashJS=function(){e.removeDashJS(n)},r.mux.setEmitTranslator=function(t){e.setEmitTranslator(n,t)},r.mux.setStateDataTranslator=function(t){e.setStateDataTranslator(n,t)},r.mux.setGetPlayheadTime=function(t){t||(t=i.getPlayheadTime),e.setGetPlayheadTime(n,t)},e.init(n,i),e.emit(n,"playerready"),m(),r.paused||(e.emit(n,"play"),r.readyState>2&&e.emit(n,"playing")),r.mux.listeners={},lh.forEach(function(t){("error"!==t||i.automaticErrorTracking)&&(r.mux.listeners[t]=function(){var i={};if("error"===t){if(!r.error||1===r.error.code)return;i.player_error_code=r.error.code,i.player_error_message=lm[r.error.code]||r.error.message}e.emit(n,t,i)},r.addEventListener(t,r.mux.listeners[t],!1))}),r.mux.listeners.enterpictureinpicture=function(){e.emit(n,"playbackmodechange",{player_playback_mode:"pip",player_playback_mode_data:"{}"})},r.mux.listeners.leavepictureinpicture=function(){var t=lc()?"fullscreen":"standard";e.emit(n,"playbackmodechange",{player_playback_mode:t,player_playback_mode_data:"{}"})},r.addEventListener("enterpictureinpicture",r.mux.listeners.enterpictureinpicture,!1),r.addEventListener("leavepictureinpicture",r.mux.listeners.leavepictureinpicture,!1),r.mux.fullscreenChangeListener=function(){var t=lc(),i=document.fullscreenElement;if(t&&(i===r||null!=i&&i.contains(r)))e.emit(n,"playbackmodechange",{player_playback_mode:"fullscreen",player_playback_mode_data:"{}"});else if(!t){var a=document.pictureInPictureElement===r;e.emit(n,"playbackmodechange",{player_playback_mode:a?"pip":"standard",player_playback_mode_data:"{}"})}},document.addEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1)}(lA,e,t)},destroyMonitor:function(e){var t=sm(sE(e),1)[0];t&&t.mux&&"function"==typeof t.mux.destroy?t.mux.destroy():s_.error("A video element monitor for `"+e+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(e,t){var i=sf(e);lw[i]?lw[i].addHLSJS(t):s_.error("A monitor for `"+i+"` has not been initialized.")},addDashJS:function(e,t){var i=sf(e);lw[i]?lw[i].addDashJS(t):s_.error("A monitor for `"+i+"` has not been initialized.")},removeHLSJS:function(e){var t=sf(e);lw[t]?lw[t].removeHLSJS():s_.error("A monitor for `"+t+"` has not been initialized.")},removeDashJS:function(e){var t=sf(e);lw[t]?lw[t].removeDashJS():s_.error("A monitor for `"+t+"` has not been initialized.")},init:function(e,t){sk()&&t&&t.respectDoNotTrack&&s_.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var i=sf(e);lw[i]=new lu(lA,i,t)},emit:function(e,t,i){var a=sf(e);lw[a]?(lw[a].emit(t,i),"destroy"===t&&delete lw[a]):s_.error("A monitor for `"+a+"` has not been initialized.")},updateData:function(e,t){var i=sf(e);lw[i]?lw[i].emit("hb",t):s_.error("A monitor for `"+i+"` has not been initialized.")},setEmitTranslator:function(e,t){var i=sf(e);lw[i]?lw[i].emitTranslator=t:s_.error("A monitor for `"+i+"` has not been initialized.")},setStateDataTranslator:function(e,t){var i=sf(e);lw[i]?lw[i].stateDataTranslator=t:s_.error("A monitor for `"+i+"` has not been initialized.")},setGetPlayheadTime:function(e,t){var i=sf(e);lw[i]?lw[i].getPlayheadTime=t:s_.error("A monitor for `"+i+"` has not been initialized.")},checkDoNotTrack:sk,log:s_,utils:lT,events:{PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",PLAYBACK_MODE_CHANGE:"playbackmodechange",TEXT_TRACK_CHANGE:"texttrackchange",AUDIO_TRACK_CHANGE:"audiotrackchange",NETWORK_CHANGE:"networkchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled",HEARTBEAT:"hb",DESTROY:"destroy"},WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(lA,lC),void 0!==sp&&"function"==typeof sp.addEventListener&&sp.addEventListener("pagehide",function(e){e.persisted||(lA.WINDOW_UNLOADING=!0)},!1);var lS=i(38309),lI=lS.Ay,lR="video",lL=e=>e===lR?"playback":e,lx=class e extends Error{constructor(t,i=e.MEDIA_ERR_CUSTOM,a,r){var n;super(t),this.name="MediaError",this.code=i,this.context=r,this.fatal=null!=a?a:i>=e.MEDIA_ERR_NETWORK&&i<=e.MEDIA_ERR_ENCRYPTED,this.message||(this.message=null!=(n=e.defaultMessages[this.code])?n:"")}};lx.MEDIA_ERR_ABORTED=1,lx.MEDIA_ERR_NETWORK=2,lx.MEDIA_ERR_DECODE=3,lx.MEDIA_ERR_SRC_NOT_SUPPORTED=4,lx.MEDIA_ERR_ENCRYPTED=5,lx.MEDIA_ERR_CUSTOM=100,lx.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var lM=(e,t)=>null!=t&&e in t,lD={ANY:"any",MUTED:"muted"},lO="on-demand",lP="live",lN="unknown",lU="native",lH={HEADER:"header",QUERY:"query",NONE:"none"},lW=Object.values(lH),lB={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},l$={HLS:lB.M3U8};Object.keys(l$),[...Object.values(lB)];var lq={code:"en"},lV=(e,t,i,a,r=e)=>{r.addEventListener(t,i,a),e.addEventListener("teardown",()=>{r.removeEventListener(t,i)},{once:!0})},lF=e=>{let t=e.indexOf("?");return t<0?[e]:[e.slice(0,t),e.slice(t)]},lK=e=>{let{type:t}=e;if(t){let e=t.toUpperCase();return lM(e,l$)?l$[e]:t}return lY(e)},lj=e=>"VOD"===e?lO:lP,lG=e=>"EVENT"===e?1/0:"VOD"===e?NaN:0,lY=e=>{let{src:t}=e;if(!t)return"";let i="";try{i=lQ(t).pathname}catch{console.error("Invalid url when trying to infer mime type",t)}let a=i.lastIndexOf(".");if(a<0)return lX(e)?lB.M3U8:"";let r=i.slice(a+1).toUpperCase();return lM(r,lB)?lB[r]:""},lz=e=>{try{return new URL(e),!1}catch{return!0}},lQ=(e,t)=>{var i;if(!lz(e))return new URL(e);let a=null==(i=null==window?void 0:window.location)?void 0:i.href,r=null!=t?t:a;return t&&lz(t.toString())&&(r=new URL(t,a)),new URL(e,r)},lZ="mux.com",lX=({src:e,customDomain:t=lZ})=>{let i;try{i=new URL(`${e}`)}catch{return!1}let a="https:"===i.protocol,r=i.hostname===`stream.${t}`.toLowerCase(),n=i.pathname.split("/"),s=2===n.length,o=!(null!=n&&n[1].includes("."));return a&&r&&s&&o},lJ=e=>{let t=(null!=e?e:"").split(".")[1];if(t)try{let e=t.replace(/-/g,"+").replace(/_/g,"/"),i=decodeURIComponent(atob(e).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(i)}catch{return}};function l0(e,t=!0){var i;return new l1(t&&null!=(i=null==lq?void 0:lq[e])?i:e,t?lq.code:"en")}var l1=class{constructor(e,t=(e=>null!=(e=lq)?e:"en")()){this.message=e,this.locale=t}format(e){return this.message.replace(/\{(\w+)\}/g,(t,i)=>{var a;return null!=(a=e[i])?a:""})}toString(){return this.message}},l2=Object.values(lD),l3=e=>"boolean"==typeof e||"string"==typeof e&&l2.includes(e),l4=(e,t)=>{if(!t)return;let i=e.muted,a=()=>e.muted=i;switch(t){case lD.ANY:e.play().catch(()=>{e.muted=!0,e.play().catch(a)});break;case lD.MUTED:e.muted=!0,e.play().catch(a);break;default:e.play().catch(()=>{})}},l5=e=>e.split("-")[0],l9=({language:e})=>"string"==typeof e?e.toLowerCase():void 0,l8=Number.MAX_SAFE_INTEGER,l6=e=>"time"in e?e.time:e.startTime;function l7(e,t,i,a,r,n){let s=document.createElement("track");return s.kind=t,s.label=i,a&&(s.srclang=a),r&&(s.id=r),n&&(s.default=!0),s.track.mode=["subtitles","captions"].includes(t)?"disabled":"hidden",s.setAttribute("data-removeondestroy",""),e.append(s),s.track}function de(e,t,i){var a;return null==(a=Array.from(e.querySelectorAll("track")).find(e=>e.track.label===t&&e.track.kind===i))?void 0:a.track}var dt=new WeakMap;async function di(e,t,i){let a=de(e,t,i);if(a){let e=dt.get(a);return e&&await e,a}let r=l7(e,i,t);r.mode="hidden";let n=new Promise(e=>setTimeout(e,0));return dt.set(r,n),await n,dt.delete(r),r}async function da(e,t,i,a){let r=await di(e,i,a);return dr(e,r,t,a),r}function dr(e,t,i,a){"hidden"!==t.mode&&(t.mode="hidden"),[...i].sort((e,t)=>l6(t)-l6(e)).forEach(i=>{var r,n;let s=i.value,o=l6(i);if("endTime"in i&&null!=i.endTime&&Number.isFinite(i.endTime))null==t||t.addCue(new VTTCue(o,i.endTime,"chapters"===a?s:JSON.stringify(null!=s?s:null)));else{let i=Array.prototype.findIndex.call(null==t?void 0:t.cues,e=>e.startTime>=o),l=null==(r=null==t?void 0:t.cues)?void 0:r[i],d=l?l.startTime:Number.isFinite(e.duration)&&e.duration>0?e.duration:l8,u=null==(n=null==t?void 0:t.cues)?void 0:n[i-1];u&&(u.endTime=o),null==t||t.addCue(new VTTCue(o,d,"chapters"===a?s:JSON.stringify(null!=s?s:null)))}}),e.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}var dn="cuepoints",ds=Object.freeze({label:dn});async function dl(e,t,i=ds){return da(e,t,i.label,"metadata")}var dd=e=>({time:e.startTime,value:JSON.parse(e.text)});function du(e,t={label:dn}){var i,a;let r=de(e,t.label,"metadata");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return dd(r.activeCues[0]);let{currentTime:n}=e;return dd(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function dc(e,t=ds){return new Promise(i=>{lV(e,"loadstart",async()=>{let a=await dl(e,[],t);lV(e,"cuechange",()=>{let t=du(e);if(t){let i=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var dh="chapters",dm=Object.freeze({label:dh}),dp=(e,t)=>{let{duration:i}=t,a=Number.isFinite(i)&&i>0?Math.min(e.endTime,i):e.endTime>=l8?1/0:e.endTime;return{startTime:e.startTime,endTime:a,value:e.text}},dv=new WeakSet;function db(e){var t;Array.from(null!=(t=e.cues)?t:[]).filter(e=>dv.has(e)).forEach(t=>e.removeCue(t))}async function dg(e,t,i=dm){let a=await di(e,i.label,"chapters");return t.length&&db(a),dr(e,a,t,"chapters"),a}async function df(e,t,i,a=dm){var r,n;let s=await di(e,a.label,"chapters");return null!=i&&i.aborted||Array.from(null!=(r=s.cues)?r:[]).some(e=>!dv.has(e))||(db(s),dr(e,s,t,"chapters"),Array.from(null!=(n=s.cues)?n:[]).forEach(e=>dv.add(e))),s}function dE(e,t={label:dh}){var i,a;let r=de(e,t.label,"chapters");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return dp(r.activeCues[0],e);let{currentTime:n}=e;return dp(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0],e)}async function dy(e,t=dm){return new Promise(i=>{lV(e,"loadstart",async()=>{let a=await dg(e,[],t);lV(e,"cuechange",()=>{let t=dE(e);if(t){let i=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var d_=(e,t,i,a,r=!1,n=!(e=>null==(e=globalThis.navigator)?void 0:e.onLine)())=>{var s,o,l;let d,u;if(n){let i=l0("Your device appears to be offline",r),a=lx.MEDIA_ERR_NETWORK,n=new lx(i,a,!1,void 0);return n.errorCategory=t,n.muxCode=2000002,n.data=e,n}let c="status"in e?e.status:e.code,h=Date.now(),m=lx.MEDIA_ERR_NETWORK;if(200===c)return;let p=lL(t),b=(d=lL(t),u=`${d}Token`,null!=(o=i.tokens)&&o[d]?null==(l=i.tokens)?void 0:l[d]:lM(u,i)?i[u]:void 0),g=t===lR?"v":"drm"===t?"d":void 0,[f]=lF(null!=(s=i.playbackId)?s:"");if(!c||!f)return;let E=lJ(b);if(b&&!E){let i=new lx(l0("The {tokenNamePrefix}-token provided is invalid or malformed.",r).format({tokenNamePrefix:p}),m,!0,l0("Compact JWT string: {token}",r).format({token:b}));return i.errorCategory=t,i.muxCode=2412202,i.data=e,i}if(c>=500){let e=new lx("",m,null==a||a);return e.errorCategory=t,e.muxCode=2e6,e}if(403===c)if(E){if((({exp:e},t=Date.now())=>!e||1e3*e<t)(E,h)){let i={timeStyle:"medium",dateStyle:"medium"},a=l0("The video’s secured {tokenNamePrefix}-token has expired.",r).format({tokenNamePrefix:p}),n=new Intl.DateTimeFormat("en",i).format(h),s=new lx(a,m,!0,E.exp?l0("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat("en",i).format(1e3*E.exp),currentDate:n}):l0("The {tokenNamePrefix}-token has no exp value. Current time: {currentDate}.",r).format({tokenNamePrefix:p,currentDate:n}));return s.errorCategory=t,s.muxCode=2403210,s.data=e,s}if((({sub:e},t)=>e!==t)(E,f)){let i=new lx(l0("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",r).format({tokenNamePrefix:p}),m,!0,l0("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",r).format({tokenNamePrefix:p,playbackId:f,tokenPlaybackId:E.sub}));return i.errorCategory=t,i.muxCode=2403232,i.data=e,i}if((({aud:e},t)=>!e)(E,0)){let i=new lx(l0("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:p}),m,!0,l0("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",r).format({tokenNamePrefix:p,expectedAud:g}));return i.errorCategory=t,i.muxCode=2403221,i.data=e,i}if((({aud:e},t)=>e!==t)(E,g)){let i=new lx(l0("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:p}),m,!0,l0("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",r).format({tokenNamePrefix:p,expectedAud:g,aud:E.aud}));return i.errorCategory=t,i.muxCode=2403222,i.data=e,i}}else{let i=new lx(l0("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",r).format({tokenNamePrefix:p,category:t}),m,null==a||a,l0("Specified playback ID: {playbackId}",r).format({playbackId:f}));return i.errorCategory=t,i.muxCode=2403201,i.data=e,i}if(412===c){let n=new lx(l0("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),m,null==a||a,l0("Specified playback ID: {playbackId}",r).format({playbackId:f}));return n.errorCategory=t,n.muxCode=2412e3,n.streamType=i.streamType===lP?"live":i.streamType===lO?"on-demand":"unknown",n.data=e,n}if(404===c){let i=new lx(l0("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),m,null==a||a,l0("Specified playback ID: {playbackId}",r).format({playbackId:f}));return i.errorCategory=t,i.muxCode=2404e3,i.data=e,i}if(400===c){let i=new lx(l0("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),m,null==a||a,l0("Specified playback ID: {playbackId}",r).format({playbackId:f}));return i.errorCategory=t,i.muxCode=24e5,i.data=e,i}let y=new lx("",m,null==a||a);return y.errorCategory=t,y.muxCode=2e6,y.data=e,y},dk=lI.DefaultConfig.capLevelController;dk||console.error("MinCapLevelController - hls.js DefaultConfig.capLevelController is unavailable");var dT={"720p":921600,"1080p":2073600,"1440p":4194304,"2160p":8294400},dw=class e extends dk{constructor(e){super(e)}static setMaxAutoResolution(t,i){i?e.maxAutoResolution.set(t,i):e.maxAutoResolution.delete(t)}getMaxAutoResolution(){var t;let i=this.hls;return null!=(t=e.maxAutoResolution.get(i))?t:void 0}get levels(){var e;return null!=(e=this.hls.levels)?e:[]}getValidLevels(e){return this.levels.filter((t,i)=>this.isLevelAllowed(t)&&i<=e)}getMaxLevelCapped(e){let t=this.getValidLevels(e),i=this.getMaxAutoResolution();if(!i)return super.getMaxLevel(e);let a=dT[i.toLowerCase().trim()];if(!a)return super.getMaxLevel(e);let r=t.filter(e=>e.width*e.height<=a),n=r.findIndex(e=>e.width*e.height===a);if(-1!==n){let e=r[n];return t.findIndex(t=>t===e)}if(0===r.length)return 0;let s=r[r.length-1];return t.findIndex(e=>e===s)}getMaxLevel(t){if(void 0!==this.getMaxAutoResolution())return this.getMaxLevelCapped(t);let i=super.getMaxLevel(t),a=this.getValidLevels(t);if(!a[i])return i;let r=Math.min(a[i].width,a[i].height),n=e.minMaxResolution;return r>=n?i:dk.getMaxLevelByMediaSize(a,16/9*n,n)}};dw.minMaxResolution=720,dw.maxAutoResolution=new WeakMap;var dA,dC,dS,dI,dR,dL,dx,dM,dD,dO,dP,dN,dU,dH,dW,dB,d$,dq,dV,dF,dK,dj,dG,dY,dz,dQ,dZ,dX,dJ,d0,d1,d2,d3,d4,d5,d9,d8,d6,d7,ue,ut,ui,ua,ur,un,us,uo,ul,ud,uu,uc,uh,um,up,uv,ub,ug,uf,uE,uy,u_,uk,uT,uw,uA,uC,uS,uI,uR,uL,ux,uM,uD,uO,uP,uN,uU,uH,uW,uB,u$,uq,uV,uF,uK,uj,uG,uY,uz,uQ,uZ,uX,uJ,u0,u1,u2,u3,u4,u5,u9,u8,u6,u7,ce,ct,ci,ca,cr,cn,cs,co,cl,cd,cu,cc,ch,cm,cp,cv,cb,cg,cf,cE,cy,c_,ck,cT,cw,cA,cC,cS,cI,cR,cL,cx,cM,cD,cO,cP,cN,cU,cH,cW,cB,c$,cq,cV,cF,cK,cj,cG,cY,cz,cQ,cZ,cX,cJ,c0,c1,c2,c3,c4,c5,c9,c8,c6,c7,he,ht,hi,ha,hr,hn,hs,ho,hl,hd,hu,hc,hh,hm,hp,hv,hb,hg,hf,hE,hy,h_,hk,hT,hw,hA,hC,hS,hI,hR,hL,hx,hM,hD,hO,hP,hN,hU,hH,hW,hB,h$,hq,hV,hF,hK,hj,hG,hY,hz,hQ,hZ,hX,hJ,h0,h1,h2,h3,h4,h5,h9,h8,h6,h7,me,mt,mi,ma,mr,mn,ms,mo,ml,md,mu,mc,mh,mm,mp,mv,mb,mg,mf,mE,my,m_,mk,mT,mw,mA,mC,mS,mI,mR,mL,mx,mM,mD,mO,mP,mN,mU,mH,mW,mB,m$,mq,mV,mF,mK,mj,mG,mY,mz,mQ,mZ,mX,mJ,m0,m1=e=>new TextDecoder("utf-16le").decode(e).replace("skd://","").slice(1),m2="fairplay",m3=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g,m4=async(e,t,i)=>{if(t===lB.MP4)return{streamType:lO,targetLiveWindow:NaN,liveEdgeStartOffset:void 0,sessionData:void 0,playlistUrl:void 0};if(t===lB.M3U8){let t=await fetch(e,{signal:i});if(!t.ok)return Promise.reject(t);let a=await t.text(),r=t.url||e,n=await ((e,t,i)=>{let a,r=e.split(`
`).find((e,t,i)=>t>0&&i[t-1].startsWith("#EXT-X-STREAM-INF"));if(!r)return Promise.reject(Error("No media playlist URL found in multivariant playlist"));if(lz(r)&&!t)return Promise.reject(Error("masterPlaylistUrl is required to resolve relative media playlist URL"));try{a=lQ(r,t)}catch(e){return Promise.reject(e)}return fetch(a,{signal:i}).then(e=>200!==e.status?Promise.reject(e):e.text())})(a,r,i);return{...(e=>{let t=e.split(`
`).filter(e=>e.startsWith("#EXT-X-SESSION-DATA"));if(!t.length)return{};let i={};for(let e of t){let t=Object.fromEntries([...e.matchAll(m3)].map(([,e,t])=>[e,t])),a=t["DATA-ID"];a&&(i[a]={...t})}return{sessionData:i}})(a),...(e=>{var t,i,a;let r=e.split(`
`),n=null==(i=(null!=(t=r.find(e=>e.startsWith("#EXT-X-PLAYLIST-TYPE")))?t:"").split(":")[1])?void 0:i.trim(),s=lj(n),o=lG(n),l;if(s===lP){let e=r.find(e=>e.startsWith("#EXT-X-PART-INF"));if(e)l=2*e.split(":")[1].split("=")[1];else{let e=r.find(e=>e.startsWith("#EXT-X-TARGETDURATION")),t=null==(a=null==e?void 0:e.split(":"))?void 0:a[1];l=(null!=t?t:6)*3}}return{streamType:s,targetLiveWindow:o,liveEdgeStartOffset:l}})(n),playlistUrl:r}}return console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0,playlistUrl:void 0}},m5=async(e,t,i=lK({src:e}),a=m8(t))=>{var r,n,s;let{streamType:o,targetLiveWindow:l,liveEdgeStartOffset:d,sessionData:u,playlistUrl:c}=await m4(e,i,a);if(a.aborted)return;let h=m9(null==u?void 0:u["com.apple.hls.chapters"],null!=c?c:e);h&&pt(h,t,a),(null!=(r=pn.get(t))?r:{}).liveEdgeStartOffset=d,(null!=(n=pn.get(t))?n:{}).targetLiveWindow=l,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(s=pn.get(t))?s:{}).streamType=o,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},m9=(e,t)=>{var i;let a=(null==e?void 0:e.URI)||(null!=(i=null==e?void 0:e.VALUE)&&i.toLocaleLowerCase().startsWith("http")?e.VALUE:void 0);if(a)try{return lQ(a,t).toString()}catch{return}},m8=e=>{let t=new AbortController;return e.addEventListener("teardown",()=>t.abort(),{once:!0}),t.signal},m6=async(e,t)=>{try{let i=await fetch(e,{signal:t});if(!i.ok)throw Error(`Failed to fetch ${e}: ${i.status} ${i.statusText}`);let a=await i.json();return t.aborted?void 0:a}catch(e){t.aborted||console.error(e);return}},m7=(e,t)=>{var i,a;if(!Array.isArray(null==(i=null==e?void 0:e[0])?void 0:i.metadata))return;let r={};for(let t of e[0].metadata)null!=t&&t.key&&null!=t&&t.value&&(r[t.key]=t.value);(null!=(a=pn.get(t))?a:{}).metadata=r;let n=new CustomEvent("muxmetadata");t.dispatchEvent(n)},pe=async(e,t,i=m8(t))=>{let a=await m6(e,i);void 0!==a&&m7(a,t)},pt=async(e,t,i=m8(t))=>{var a,r,n;let s,o=await m6(e,i);void 0!==o&&(m7(o,t),await df(t,function(e,t=[]){return Array.isArray(e)?e.filter(e=>"number"==typeof(null==e?void 0:e["start-time"])).map((e,i,a)=>{var r;let n=e["start-time"],s=null==(r=a[i+1])?void 0:r["start-time"],o="number"==typeof e.duration?n+e.duration:"number"==typeof s?s:void 0;return{startTime:n,...null!=o?{endTime:o}:{},value:function(e,t){var i;let a=(Array.isArray(e)?e:[]).filter(e=>"string"==typeof(null==e?void 0:e.title)&&""!==e.title);if(!a.length)return"";for(let e of t){let t=function(e,t){var i,a;let r=t.toLowerCase(),n=l5(r);return null!=(a=null!=(i=e.find(e=>l9(e)===r))?i:e.find(e=>l9(e)===n))?a:e.find(e=>{let t=l9(e);return void 0!==t&&l5(t)===n})}(a,e);if(t)return t.title}return(null!=(i=a.find(e=>"und"===l9(e)))?i:a[0]).title}(e.titles,t)}}).filter(e=>""!==e.value):[]}(o,(s=null!=(n=null==(a=globalThis.navigator)?void 0:a.languages)?n:[null==(r=globalThis.navigator)?void 0:r.language],[(e=>{let t=e;for(;t;){if(t.hasAttribute("lang"))return t.getAttribute("lang")||void 0;let e=t.getRootNode();t=e instanceof ShadowRoot?e.host:void 0}})(t),...s].filter(e=>!!e))),i))},pi=null!=(mQ=null==(mz=null==globalThis?void 0:globalThis.navigator)?void 0:mz.userAgent)?mQ:"",pa=null!=(mJ=null==(mX=null==(mZ=null==globalThis?void 0:globalThis.navigator)?void 0:mZ.userAgentData)?void 0:mX.platform)?mJ:"",pr=pi.toLowerCase().includes("android")||["x11","android"].some(e=>pa.toLowerCase().includes(e)),pn=new WeakMap,ps="mux.com",po=null==(m0=lI.isSupported)?void 0:m0.call(lI),pl=()=>{if("u">typeof window)return lA.utils.now()},pd=lA.utils.generateUUID,pu=({playbackId:e,customDomain:t=ps,maxResolution:i,minResolution:a,renditionOrder:r,programStartTime:n,programEndTime:s,assetStartTime:o,assetEndTime:l,playbackToken:d,tokens:{playback:u=d}={},extraSourceParams:c={}}={})=>{if(!e)return;let[h,m=""]=lF(e),p=new URL(`https://stream.${t}/${h}.m3u8${m}`);return u||p.searchParams.has("token")?(p.searchParams.forEach((e,t)=>{"token"!=t&&p.searchParams.delete(t)}),u&&p.searchParams.set("token",u)):(i&&p.searchParams.set("max_resolution",i),a&&(p.searchParams.set("min_resolution",a),i&&+i.slice(0,-1)<+a.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",a,"maxResolution",i)),r&&p.searchParams.set("rendition_order",r),n&&p.searchParams.set("program_start_time",`${n}`),s&&p.searchParams.set("program_end_time",`${s}`),o&&p.searchParams.set("asset_start_time",`${o}`),l&&p.searchParams.set("asset_end_time",`${l}`),Object.entries(c).forEach(([e,t])=>{null!=t&&p.searchParams.set(e,t)})),p.toString()},pc=e=>{if(!e)return;let[t]=e.split("?");return t||void 0},ph=e=>{if(!e||!e.startsWith("https://stream."))return;let[t]=new URL(e).pathname.slice(1).split(/\.m3u8|\//);return t||void 0},pm=e=>{var t;return null==(t=pn.get(e))?void 0:t.error},pp=e=>{var t,i;return null!=(i=null==(t=pn.get(e))?void 0:t.streamType)?i:lN},pv=e=>{var t,i;return null!=(i=null==(t=pn.get(e))?void 0:t.seekable)?i:e.seekable},pb=.034,pg=(e,t,i=pb)=>e>t||((e,t,i=pb)=>Math.abs(e-t)<=i)(e,t,i),pf=(e,t)=>{var i,a,r;if(!t||!e.buffered.length)return;if(e.readyState>2)return!1;let n=t.currentLevel>=0?null==(a=null==(i=t.levels)?void 0:i[t.currentLevel])?void 0:a.details:null==(r=t.levels.find(e=>!!e.details))?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(null!=s&&s.length))return;if(e.currentTime<e.duration-(n.targetduration+.5))return!1;let o=s[s.length-1];if(e.currentTime<=o.start)return!1;let l=o.start+o.duration/2,d=e.buffered.start(e.buffered.length-1),u=e.buffered.end(e.buffered.length-1);return l>d&&l<u},pE=(e,t)=>e.ended||e.loop?e.ended:!!(t&&pf(e,t))||((e,t=pb)=>e.paused&&pg(e.currentTime,e.duration,t))(e),py=(e,t,i)=>{var a,r,n;pk(t,i,e);let{metadata:s={}}=e,{view_session_id:o=pd()}=s,l=null!=(a=null==e?void 0:e.metadata)&&a.video_id?e.metadata.video_id:px(e)&&null!=(n=null!=(r=pc(e.playbackId))?r:ph(e.src))?n:e.src;s.view_session_id=o,s.video_id=l,e.metadata=s,e.drmTypeCb=e=>{var i;null==(i=t.mux)||i.emit("hb",{view_drm_type:e})},e.fallbackToWebkitFairplay=async()=>{var i;let a=!t.paused,r=t.currentTime;e.useWebkitFairplay=!0;let n=e.muxDataKeepSession;e.muxDataKeepSession=!0;let s=null==(i=pn.get(t))?void 0:i.coreReference;py(e,t,s),e.muxDataKeepSession=n,e.useWebkitFairplay=!1,a&&await t.play().then(()=>{t.currentTime=r}).catch(()=>{}),t.currentTime=r},pn.set(t,{retryCount:0});let d=pw(e,t),u=(({preload:e,src:t},i,a)=>{let r=e=>{null!=e&&["","none","metadata","auto"].includes(e)?i.setAttribute("preload",e):i.removeAttribute("preload")};if(!a)return r(e),r;let n=!1,s=!1,o=a.config.maxBufferLength,l=a.config.maxBufferSize,d=e=>{r(e);let t=null!=e?e:i.preload;s||"none"===t||("metadata"===t?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=o,a.config.maxBufferSize=l),u())},u=()=>{!n&&t&&(n=!0,a.loadSource(t))};return lV(i,"play",()=>{s=!0,a.config.maxBufferLength=o,a.config.maxBufferSize=l,u()},{once:!0}),d(e),d})(e,t,d);null!=e&&e.muxDataKeepSession&&null!=t&&t.mux&&!t.mux.deleted?d&&t.mux.addHLSJS({hlsjs:d,Hls:d?lI:void 0}):pD(e,t,d),pO(e,t,d),dc(t),dy(t);let c=((e,t,i)=>{let{autoplay:a}=e,r=!1,n=!1,s=l3(a)?a:!!a,o=()=>{r||lV(t,"playing",()=>{r=!0},{once:!0})};if(o(),lV(t,"loadstart",()=>{r=!1,o(),l4(t,s)},{once:!0}),lV(t,"loadstart",()=>{i||(n=e.streamType&&e.streamType!==lN?e.streamType===lP:!Number.isFinite(t.duration)),l4(t,s)},{once:!0}),i&&i.once(lI.Events.LEVEL_LOADED,(t,i)=>{var a;n=e.streamType&&e.streamType!==lN?e.streamType===lP:null!=(a=i.details.live)&&a}),!s){let a=()=>{!n||Number.isFinite(e.startTime)||(null!=i&&i.liveSyncPosition?t.currentTime=i.liveSyncPosition:Number.isFinite(t.seekable.end(0))&&(t.currentTime=t.seekable.end(0)))};i&&lV(t,"play",()=>{"metadata"===t.preload?i.once(lI.Events.LEVEL_UPDATED,a):a()},{once:!0})}return e=>{r||l4(t,s=l3(e)?e:!!e)}})(e,t,d);((e,t,i)=>{let{minPreloadSegments:a}=e;if(null==a||a<=0||!i)return;let r=0,n=!1,s=t.playbackRate||1,o=()=>{0!==t.playbackRate&&(s=t.playbackRate,t.playbackRate=0)};t.playbackRate=0,lV(t,"ratechange",o);let l=(e,{frag:i})=>{n||"main"!==i.type||++r>=a&&(n=!0,t.removeEventListener("ratechange",o),t.playbackRate=s)};i.on(lI.Events.FRAG_BUFFERED,l),t.addEventListener("teardown",()=>{n||(n=!0,i.off(lI.Events.FRAG_BUFFERED,l),t.playbackRate=s)},{once:!0})})(e,t,d),((e,t,i)=>{let{initialEstimateSegments:a}=e;if(null==a||a<=0||!i)return;let r=0;i.on(lI.Events.FRAG_BUFFERED,(e,{frag:t})=>{"main"===t.type&&++r<a&&i.abrController.resetEstimator(i.config.abrEwmaDefaultEstimate)})})(e,0,d);let h={engine:d,setAutoplay:c,setPreload:u},m=pn.get(t);return m&&(m.coreReference=h),h},p_=new WeakMap,pk=(e,t,i)=>{let a=null==t?void 0:t.engine;null!=e&&e.mux&&!e.mux.deleted&&(null!=i&&i.muxDataKeepSession?a&&e.mux.removeHLSJS():(e.mux.destroy(),delete e.mux)),a&&(a.detachMedia(),a.destroy()),e&&(e.hasAttribute("src")&&(e.removeAttribute("src"),e.load()),e.removeEventListener("error",pN),e.removeEventListener("error",pH),e.removeEventListener("durationchange",pP),pn.delete(e),e.dispatchEvent(new Event("teardown")))};function pT(e,t){var i;let a=lK(e);if(a!==lB.M3U8)return!0;let r=!a||null==(i=t.canPlayType(a))||i,{preferPlayback:n}=e,s=po&&("mse"===n||pr||!(/^((?!chrome|android).)*safari/i.test(pi)&&t.canPlayType("application/vnd.apple.mpegurl")));return r&&(n===lU||!s)}var pw=(e,t)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:o={},maxAutoResolution:l,initialBandwidthEstimateKbps:d}=e,u=lK(e)===lB.M3U8,c=pT(e,t);if(u&&!c&&po){let u={backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelOnFPSDrop:!0,...null!=d?{abrEwmaDefaultEstimate:1e3*d}:{}},c=pA(a),h=pC(e),m=[lH.QUERY,lH.HEADER].includes(s)?{useHeaders:s===lH.HEADER,sessionId:null==n?void 0:n.view_session_id,contentId:null==n?void 0:n.video_id}:void 0,p=pM(e,o),b=new lI({debug:i,startPosition:r,cmcd:m,xhrSetup:(e,t)=>{var i,a;if(s&&s!==lH.QUERY)return;let r=lQ(t);if(!r.searchParams.has("CMCD"))return;let n=(null!=(a=null==(i=r.searchParams.get("CMCD"))?void 0:i.split(","))?a:[]).filter(e=>e.startsWith("sid")||e.startsWith("cid")).join(",");r.searchParams.set("CMCD",n),e.open("GET",r)},...u,...p,...c,...h,...o});return p.capLevelController===dw&&void 0!==l&&dw.setMaxAutoResolution(b,l),b.on(lI.Events.MANIFEST_LOADED,async function(e,i){var a;let r=m9(null==(a=i.sessionData)?void 0:a["com.apple.hls.chapters"],i.url);r&&pt(r,t)}),b}},pA=e=>e===lP?{backBufferLength:8}:{},pC=e=>{let{tokens:{drm:t}={},playbackId:i,drmTypeCb:a}=e,r=pc(i);return t&&r?{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:pR(e,"fairplay"),serverCertificateUrl:pL(e,"fairplay")},"com.widevine.alpha":{licenseUrl:pR(e,"widevine")},"com.microsoft.playready":{licenseUrl:pR(e,"playready")}},requestMediaKeySystemAccessFunc:(e,t)=>("com.widevine.alpha"===e&&(t=[...t.map(e=>{var t;let i=null==(t=e.videoCapabilities)?void 0:t.map(e=>({...e,robustness:"HW_SECURE_ALL"}));return{...e,videoCapabilities:i}}),...t]),navigator.requestMediaKeySystemAccess(e,t).then(t=>{let i=e.includes("fps")?m2:e.includes("playready")?"playready":e.includes("widevine")?"widevine":void 0;return null==a||a(i),t}))}:{}},pS=async e=>{let t=await fetch(e);return 200!==t.status?Promise.reject(t):await t.arrayBuffer()},pI=async(e,t)=>{let i=await fetch(t,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:e});return 200!==i.status?Promise.reject(i):new Uint8Array(await i.arrayBuffer())},pR=({playbackId:e,tokens:{drm:t}={},customDomain:i=ps},a)=>{let r=pc(e);return`https://license.${i.toLocaleLowerCase().endsWith(ps)?i:ps}/license/${a}/${r}?token=${t}`},pL=({playbackId:e,tokens:{drm:t}={},customDomain:i=ps},a)=>{let r=pc(e);return`https://license.${i.toLocaleLowerCase().endsWith(ps)?i:ps}/appcert/${a}/${r}?token=${t}`},px=({playbackId:e,src:t,customDomain:i})=>{if(e)return!0;if("string"!=typeof t)return!1;let a=new URL(t,null==window?void 0:window.location.href).hostname.toLocaleLowerCase();return a.includes(ps)||!!i&&a.includes(i.toLocaleLowerCase())},pM=(e,t)=>{let i={};return i.capLevelToPlayerSize=e.capRenditionToPlayerSize,null==i.capLevelToPlayerSize?(i.capLevelController=dw,i.capLevelToPlayerSize=!0):i.capLevelController=lS.Rx,i},pD=(e,t,i)=>{var a;let{envKey:r,disableTracking:n,muxDataSDK:s=lA,muxDataSDKOptions:o={}}=e,l=px(e),d=pn.get(t);if(d&&(d.muxDataDisableCookies=!!e.disableCookies),!n&&(r||l)){let{playerInitTime:n,playerSoftwareName:l,playerSoftwareVersion:d,beaconCollectionDomain:u,debug:c,disableCookies:h}=e,m={...e.metadata,video_title:(null==(a=null==e?void 0:e.metadata)?void 0:a.video_title)||void 0};s.monitor(t,{debug:c,beaconCollectionDomain:u,hlsjs:i,Hls:i?lI:void 0,automaticErrorTracking:!1,errorTranslator:t=>"string"!=typeof t.player_error_code&&("function"==typeof e.errorTranslator?e.errorTranslator(t):t),disableCookies:h,...o,data:{...r?{env_key:r}:{},player_software_name:l,player_software:l,player_software_version:d,player_init_time:n,...m}})}},pO=(e,t,i)=>{var a,r,n;let s=pT(e,t),{src:o,customDomain:l=ps}=e,d=()=>{t.ended||e.disablePseudoEnded||!pE(t,i)||(pf(t,i)?t.currentTime=t.buffered.end(t.buffered.length-1):t.dispatchEvent(new Event("ended")))},u,c,h=()=>{let e=pv(t),i,a;e.length>0&&(i=e.start(0),a=e.end(0)),(c!==a||u!==i)&&t.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),u=i,c=a};if(lV(t,"durationchange",h),t&&s){let i=lK(e);if("string"==typeof o){if(o.endsWith(".mp4")&&o.includes(l)){let e=ph(o);pe(new URL(`https://stream.${l}/${e}/metadata.json`).toString(),t)}let n=async()=>{let a=m8(t);return m5(o,t,i,a).then(()=>{a.aborted||(()=>{if(pp(t)!==lP||Number.isFinite(t.duration))return;let e=setInterval(h,1e3);t.addEventListener("teardown",()=>{clearInterval(e)},{once:!0}),lV(t,"durationchange",()=>{Number.isFinite(t.duration)&&clearInterval(e)})})()}).catch(i=>{if(i instanceof Response){let a=d_(i,lR,e);if(a)return void pU(t,a)}})};if("none"===t.preload){let e=()=>{n(),t.removeEventListener("loadedmetadata",i)},i=()=>{n(),t.removeEventListener("play",e)};lV(t,"play",e,{once:!0}),lV(t,"loadedmetadata",i,{once:!0})}else n();null!=(a=e.tokens)&&a.drm?((e,t)=>{let i={mediaEl:t,getAppCertificate:()=>pS(pL(e,"fairplay")).catch(t=>{if(t instanceof Response){let i=d_(t,"drm",e);return console.error("mediaError",null==i?void 0:i.message,null==i?void 0:i.context),i?Promise.reject(i):Promise.reject(Error("Unexpected error in app cert request"))}return Promise.reject(t)}),getLicenseKey:t=>pI(t,pR(e,"fairplay")).catch(t=>{if(t instanceof Response){let i=d_(t,"drm",e);return console.error("mediaError",null==i?void 0:i.message,null==i?void 0:i.context),i?Promise.reject(i):Promise.reject(Error("Unexpected error in license key request"))}return Promise.reject(t)}),saveAndDispatchError:pU,drmTypeCb:()=>{var t;null==(t=e.drmTypeCb)||t.call(e,m2)}};if(e.useWebkitFairplay)(({mediaEl:e,getAppCertificate:t,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r})=>{if(!window.WebKitMediaKeys||!("onwebkitneedkey"in e)){console.error("No WebKitMediaKeys. FairPlay may not be supported");let t=new lx(l0("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),lx.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory="drm",t.muxCode=5000005,a(e,t),()=>{}}let n=t(),s=null,o=t=>{(async()=>{try{var i,r;let a,s,o,u,c,h,m,p;e.webkitKeys||l();let b=await n;if(null===t.initData||null==b)return;let g=(i=t.initData,r=b,a=function(e){let t=new ArrayBuffer(2*e.length),i=new DataView(t);for(let t=0;t<e.length;t++)i.setUint16(2*t,e.charCodeAt(t),!0);return t}(m1(i)),s=new Uint8Array(i),o=new Uint8Array(a),u=new Uint8Array(r),c=new Uint8Array(s.byteLength+4+u.byteLength+4+o.byteLength),h=0,m=e=>{c.set(e,h),h+=e.byteLength},p=e=>{let t=new DataView(c.buffer),i=e.byteLength;t.setUint32(h,i,!0),h+=4,m(e)},m(s),p(o),p(u),c);d(g)}catch(t){console.error("Could not start encrypted playback due to exception",t),a(e,t)}})()},l=()=>{try{let t=new WebKitMediaKeys("com.apple.fps.1_0");e.webkitSetMediaKeys(t),r()}catch{let e=new lx("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.",lx.MEDIA_ERR_ENCRYPTED,!0);throw e.errorCategory="drm",e.muxCode=5000001,e}},d=t=>{let r=e.webkitKeys.createSession("application/vnd.apple.mpegurl",t),n=async t=>{try{let e=t.message,a=await i(e);r.update(a)}catch(t){console.error("Error on FairPlay session message",t),a(e,t)}},o=t=>{let i=t.target.error;if(!i)return;console.error(`Internal Webkit Key Session Error - sysCode: ${i.systemCode} code: ${i.code}`);let r=new lx(l0("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser."),lx.MEDIA_ERR_ENCRYPTED,!0);r.errorCategory="drm",r.muxCode=5000005,a(e,r)},l=()=>{r.removeEventListener("webkitkeymessage",n),r.removeEventListener("webkitkeyerror",o),e.removeEventListener("teardown",l),"webkitCurrentPlaybackTargetIsWireless"in e&&e.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",l),s=null;try{r.close()}catch{}};"webkitCurrentPlaybackTargetIsWireless"in e&&e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",l,{once:!0}),r.addEventListener("webkitkeymessage",n),r.addEventListener("webkitkeyerror",o),e.addEventListener("teardown",l),s=l},u=()=>{e.removeEventListener("webkitneedkey",o),e.removeEventListener("teardown",u),null==s||s();try{e.webkitSetMediaKeys(null)}catch{}};return e.addEventListener("webkitneedkey",o),e.addEventListener("teardown",u,{once:!0})})(i);else{let t=(({mediaEl:e,getAppCertificate:t,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r,fallbackToWebkitFairplay:n})=>{let s=null,o=async t=>{try{let i=t.initDataType;if("skd"!==i)return void console.error(`Received unexpected initialization data type "${i}"`);e.mediaKeys||await l(i);let a=t.initData;if(null==a)return void console.error(`Could not start encrypted playback due to missing initData in ${t.type} event`);await d(i,a)}catch(t){a(e,t);return}},l=async i=>{let n=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[i],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(e=>(r(),e)).catch(()=>{let t=new lx(l0("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),lx.MEDIA_ERR_ENCRYPTED,!0);t.errorCategory="drm",t.muxCode=5000001,a(e,t)});if(!n)return;let s=await n.createMediaKeys();try{let e=await t();await s.setServerCertificate(e).catch(()=>{let e=l0("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),t=new lx(e,lx.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory="drm",t.muxCode=5000004,Promise.reject(t)})}catch(t){a(e,t);return}await e.setMediaKeys(s)},d=async(t,r)=>{let o=e.mediaKeys.createSession(),l=async t=>{let r=t.message,n=await i(r);try{await o.update(n)}catch{let t=new lx(l0("Failed to update DRM license. This may be an issue with the player or your protected content."),lx.MEDIA_ERR_ENCRYPTED,!0);t.errorCategory="drm",t.muxCode=5000003,a(e,t)}},d=()=>{o.keyStatuses.forEach(t=>{let i;"internal-error"===t?((i=new lx(l0("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser."),lx.MEDIA_ERR_ENCRYPTED,!0)).errorCategory="drm",i.muxCode=5000005):("output-restricted"===t||"output-downscaled"===t)&&((i=new lx(l0("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),lx.MEDIA_ERR_ENCRYPTED,!1)).errorCategory="drm",i.muxCode=5000006),i&&a(e,i)})};o.addEventListener("keystatuseschange",d),o.addEventListener("message",l);let u=async()=>{o.removeEventListener("keystatuseschange",d),o.removeEventListener("message",l),"webkitCurrentPlaybackTargetIsWireless"in e&&e.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",u),e.removeEventListener("teardown",u),await o.close().catch(e=>{console.warn("There was an error when closing EME session",e)}),s=null};"webkitCurrentPlaybackTargetIsWireless"in e&&e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",u,{once:!0}),e.addEventListener("teardown",u,{once:!0}),s=u,await o.generateRequest(t,r).catch(async t=>{if("NotSupportedError"===t.name&&"webkitCurrentPlaybackTargetIsWireless"in e&&e.webkitCurrentPlaybackTargetIsWireless)console.warn("Failed to generate a DRM license request. Attempting to fallback to Webkit DRM"),null==n||n();else{let e=new lx(l0("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),lx.MEDIA_ERR_ENCRYPTED,!0);return e.errorCategory="drm",e.muxCode=5000002,console.error("Failed to generate license request",t),Promise.reject(e)}})},u=async()=>{e.removeEventListener("encrypted",o),e.removeEventListener("teardown",u),s&&await s(),await e.setMediaKeys(null).catch(()=>{})};return e.addEventListener("encrypted",o),e.addEventListener("teardown",u,{once:!0}),u})({fallbackToWebkitFairplay:async()=>{var i;await t(),null==(i=e.fallbackToWebkitFairplay)||i.call(e)},...i})}})(e,t):lV(t,"encrypted",()=>{let e=new lx(l0("Attempting to play DRM-protected content without providing a DRM token."),lx.MEDIA_ERR_ENCRYPTED,!0);e.errorCategory="drm",e.muxCode=5000002,pU(t,e)},{once:!0}),t.setAttribute("src",o),e.startTime&&((null!=(r=pn.get(t))?r:{}).startTime=e.startTime,t.addEventListener("durationchange",pP,{once:!0}))}else t.removeAttribute("src");t.addEventListener("error",pN),t.addEventListener("error",pH),t.addEventListener("emptied",()=>{t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})},{once:!0}),lV(t,"pause",d),lV(t,"seeked",d),lV(t,"play",()=>{t.ended||pg(t.currentTime,t.duration)&&(t.currentTime=t.seekable.length?t.seekable.start(0):0)})}else if(i&&o){let a,r;i.once(lI.Events.LEVEL_LOADED,(e,a)=>{((e,t,i)=>{var a,r,n,s,o,l,d,u,c;let h,m,p,b,g,{streamType:f,targetLiveWindow:E,liveEdgeStartOffset:y,lowLatency:_}=(m=lj(h=e.type),p=lG(h),g=!!(null!=(c=e.partList)&&c.length),m===lP&&(b=g?2*e.partTarget:3*e.targetduration),{streamType:m,targetLiveWindow:p,liveEdgeStartOffset:b,lowLatency:g});if(f===lP){_?(i.config.backBufferLength=null!=(a=i.userConfig.backBufferLength)?a:4,i.config.maxFragLookUpTolerance=null!=(r=i.userConfig.maxFragLookUpTolerance)?r:.001,i.config.abrBandWidthUpFactor=null!=(n=i.userConfig.abrBandWidthUpFactor)?n:i.config.abrBandWidthFactor):i.config.backBufferLength=null!=(s=i.userConfig.backBufferLength)?s:8;let e=Object.freeze({get length(){return t.seekable.length},start:e=>t.seekable.start(e),end(e){var a;return e>this.length||e<0||Number.isFinite(t.duration)?t.seekable.end(e):null!=(a=i.liveSyncPosition)?a:t.seekable.end(e)}});(null!=(o=pn.get(t))?o:{}).seekable=e}(null!=(l=pn.get(t))?l:{}).liveEdgeStartOffset=y,(null!=(d=pn.get(t))?d:{}).targetLiveWindow=E,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(u=pn.get(t))?u:{}).streamType=f,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))})(a.details,t,i),h(),pp(t)!==lP||Number.isFinite(t.duration)||(i.on(lI.Events.LEVEL_UPDATED,h),lV(t,"durationchange",()=>{Number.isFinite(t.duration)&&i.off(lI.Events.LEVELS_UPDATED,h)}))});let s=null!=(n=e.maxReconnectRetries)?n:0,l=s>0?(({hls:e,mediaEl:t,src:i,muxMediaState:a,saveAndDispatchError:r,maxRetries:n})=>{var s;let o,l=0,d=!1,u=!1,c=!1,h=()=>{null!=o&&(clearTimeout(o),o=void 0)},m=e=>(null==e?void 0:e.muxCode)===2000003,p=()=>{!c&&i?e.loadSource(i):e.startLoad(t.currentTime)},b=()=>{let e=a.get(t);!(null!=e&&e.networkError)||u||!t.paused&&t.readyState<HTMLMediaElement.HAVE_FUTURE_DATA&&((()=>{let e=a.get(t);if(m(null==e?void 0:e.error))return;let i=new lx(l0("Attempting to reconnect..."),lx.MEDIA_ERR_NETWORK,!1);i.errorCategory=lR,i.muxCode=2000003,e&&(e.error=i),t.dispatchEvent(new CustomEvent("error",{detail:i}))})(),(()=>{if(null==o&&!d){if(l>=n){let e;return d=!1,u=!0,h(),(e=new lx(l0("Network error, try reloading."),lx.MEDIA_ERR_NETWORK,!0)).errorCategory=lR,e.reload=!0,r(t,e)}d=!0,o=setTimeout(()=>{o=void 0,l+=1,p()},Math.min(1e3*2**l,3e4))}})())},g=()=>{let e=a.get(t);null!=e&&e.networkError&&(l=0,u=!1,h(),d=!0,p())};return null==(s=globalThis.addEventListener)||s.call(globalThis,"online",g),e.on(lI.Events.FRAG_BUFFERED,()=>{let e=a.get(t);e&&(e.networkError||m(e.error))&&(e.networkError=!1,d=!1,l=0,u=!1,h(),e.error&&(e.error=null,t.dispatchEvent(new Event("emptied"))))}),lV(t,"playing",()=>{let e=a.get(t);null!=e&&e.networkError&&(d=!1,l=0,u=!1,h(),e.error&&(e.error=null))}),lV(t,"waiting",b),t.addEventListener("teardown",()=>{var e;null==(e=globalThis.removeEventListener)||e.call(globalThis,"online",g),h()},{once:!0}),{handleHlsError:(e,i)=>{var r,n;let s;if(e.type!==lI.ErrorTypes.NETWORK_ERROR)return!1;let o=null!=(n=null==(r=e.response)?void 0:r.code)?n:0;return(2000002===i.muxCode||0===o||o>=500)&&!!e.fatal&&((s=a.get(t))&&(s.networkError=!0),d=!1,b(),!0)},onManifestLoaded:()=>{c=!0,d=!1,h()}}})({hls:i,mediaEl:t,src:o,muxMediaState:pn,saveAndDispatchError:pU,maxRetries:s}):void 0;i.on(lI.Events.ERROR,(a,r)=>{var n,s;let o=pW(r,e);if(2412e3===o.muxCode){let e=null!=(n=pn.get(t))?n:{},a=null!=(s=e.retryCount)?s:0;if(a<6){let n=0===a?5e3:6e4,s=new lx(`Retrying in ${n/1e3} seconds...`,o.code,o.fatal);Object.assign(s,o),pU(t,s);let l=setTimeout(()=>{e.retryCount=a+1,"manifestLoadError"===r.details&&r.url&&i.loadSource(r.url)},n);t.addEventListener("teardown",()=>clearTimeout(l),{once:!0});return}{e.retryCount=0;let i=new lx("Network error, try reloading.",o.code,o.fatal);Object.assign(i,o),i.reload=!0,pU(t,i);return}}null!=l&&l.handleHlsError(r,o)||pU(t,o)}),i.on(lI.Events.MANIFEST_LOADED,()=>{null==l||l.onManifestLoaded();let e=pn.get(t);null!=e&&e.networkError||e&&e.error&&(e.error=null,e.retryCount=0,t.dispatchEvent(new Event("emptied")),t.dispatchEvent(new Event("loadstart")))}),t.addEventListener("error",pH),lV(t,"waiting",d),function(e,t){var i;if(!("videoTracks"in e))return;let a=new WeakMap;t.on(lI.Events.MANIFEST_PARSED,function(t,i){o();let r=e.addVideoTrack("main");for(let[e,t]of(r.selected=!0,i.levels.entries())){let i=r.addRendition(t.url[0],t.width,t.height,t.videoCodec,t.bitrate);a.set(t,`${e}`),i.id=`${e}`}}),t.on(lI.Events.AUDIO_TRACKS_UPDATED,function(t,i){for(let t of(s(),i.audioTracks)){let i=t.default?"main":"alternative",a=e.addAudioTrack(i,t.name,t.lang);a.id=`${t.id}`,t.default&&(a.enabled=!0)}});let r=()=>{var i;let a=+(null==(i=[...e.audioTracks].find(e=>e.enabled))?void 0:i.id),r=t.audioTracks.map(e=>e.id);a!=t.audioTrack&&r.includes(a)&&(t.audioTrack=a)};e.audioTracks.addEventListener("change",r),t.on(lI.Events.LEVELS_UPDATED,function(t,i){var r;let n=e.videoTracks[null!=(r=e.videoTracks.selectedIndex)?r:0];if(!n)return;let s=i.levels.map(e=>a.get(e));for(let t of e.videoRenditions)t.id&&!s.includes(t.id)&&n.removeRendition(t)});let n=e=>{let i=e.target.selectedIndex;i!=t.nextLevel&&(t.nextLevel=i)};null==(i=e.videoRenditions)||i.addEventListener("change",n);let s=()=>{for(let t of e.audioTracks)e.removeAudioTrack(t)},o=()=>{(()=>{for(let t of e.videoTracks)e.removeVideoTrack(t)})(),s()};t.once(lI.Events.DESTROYING,()=>{var t,i;o(),null==(t=e.audioTracks)||t.removeEventListener("change",r),null==(i=e.videoRenditions)||i.removeEventListener("change",n)})}(e,i),i.on(lI.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(e,{tracks:a})=>{a.forEach(e=>{var a,r;let n=null!=(a=e.subtitleTrack)?a:e.closedCaptions,s=i.subtitleTracks.findIndex(({lang:t,name:i,type:a})=>t==(null==n?void 0:n.lang)&&i===e.label&&a.toLowerCase()===e.kind),o=(null!=(r=e._id)?r:e.default)?"default":`${e.kind}${s}`;l7(t,e.kind,e.label,null==n?void 0:n.lang,o,e.default)})}),a=()=>{if(!i.subtitleTracks.length)return;let e=Array.from(t.textTracks).find(e=>e.id&&"showing"===e.mode&&["subtitles","captions"].includes(e.kind));if(!e)return;let a=i.subtitleTracks[i.subtitleTrack],r=a?a.default?"default":`${i.subtitleTracks[i.subtitleTrack].type.toLowerCase()}${i.subtitleTrack}`:void 0;if(i.subtitleTrack<0||(null==e?void 0:e.id)!==r){let t=i.subtitleTracks.findIndex(({lang:t,name:i,type:a,default:r})=>"default"===e.id&&r||t==e.language&&i===e.label&&a.toLowerCase()===e.kind);i.subtitleTrack=t}(null==e?void 0:e.id)===r&&e.cues&&Array.from(e.cues).forEach(t=>{e.addCue(t)})},t.textTracks.addEventListener("change",a),i.on(lI.Events.CUES_PARSED,(e,{track:i,cues:a})=>{let r=t.textTracks.getTrackById(i);if(!r)return;let n="disabled"===r.mode;n&&(r.mode="hidden"),a.forEach(e=>{var t;null!=(t=r.cues)&&t.getCueById(e.id)||r.addCue(e)}),n&&(r.mode="disabled")}),i.once(lI.Events.DESTROYING,()=>{t.textTracks.removeEventListener("change",a),t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})}),r=()=>{Array.from(t.textTracks).forEach(e=>{var i;if(!["subtitles","caption"].includes(e.kind)&&("thumbnails"===e.label||"chapters"===e.kind)){if(!(null!=(i=e.cues)&&i.length)){let i="track";e.kind&&(i+=`[kind="${e.kind}"]`),e.label&&(i+=`[label="${e.label}"]`);let a=t.querySelector(i),r=null==a?void 0:a.getAttribute("src");a&&r&&(a.removeAttribute("src"),setTimeout(()=>{a.setAttribute("src",r)},0))}"hidden"!==e.mode&&(e.mode="hidden")}})},i.once(lI.Events.MANIFEST_LOADED,r),i.once(lI.Events.MEDIA_ATTACHED,r),i.attachMedia(t)}else console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function pP(e){var t;let i=e.target,a=null==(t=pn.get(i))?void 0:t.startTime;if(a&&function(e,t,i){t&&i>t&&(i=t);for(let t=0;t<e.length;t++)if(e.start(t)<=i&&e.end(t)>=i)return!0;return!1}(i.seekable,i.duration,a)){let e="auto"===i.preload;e&&(i.preload="none"),i.currentTime=a,e&&(i.preload="auto")}}async function pN(e){if(!e.isTrusted)return;e.stopImmediatePropagation();let t=e.target;if(!(null!=t&&t.error))return;let{message:i,code:a}=t.error,r=new lx(i,a);if(t.src&&a===lx.MEDIA_ERR_SRC_NOT_SUPPORTED&&t.readyState===HTMLMediaElement.HAVE_NOTHING)return void setTimeout(()=>{var e;let i=null!=(e=pm(t))?e:t.error;(null==i?void 0:i.code)===lx.MEDIA_ERR_SRC_NOT_SUPPORTED&&pU(t,r)},500);if(t.src&&(a!==lx.MEDIA_ERR_DECODE||void 0!==a))try{let{status:e}=await fetch(t.src);r.data={response:{code:e}}}catch{}pU(t,r)}function pU(e,t){var i;t.fatal&&((null!=(i=pn.get(e))?i:{}).error=t,e.dispatchEvent(new CustomEvent("error",{detail:t})))}function pH(e){var t,i;if(!(e instanceof CustomEvent)||!(e.detail instanceof lx))return;let a=e.target,r=e.detail;r&&r.fatal&&((null!=(t=pn.get(a))?t:{}).error=r,null==(i=a.mux)||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var pW=(e,t)=>{var i,a,r;e.fatal?console.error("getErrorFromHlsErrorData()",e):t.debug&&console.warn("getErrorFromHlsErrorData() (non-fatal)",e);let n={[lI.ErrorTypes.NETWORK_ERROR]:lx.MEDIA_ERR_NETWORK,[lI.ErrorTypes.MEDIA_ERROR]:lx.MEDIA_ERR_DECODE,[lI.ErrorTypes.KEY_SYSTEM_ERROR]:lx.MEDIA_ERR_ENCRYPTED},s,o=[lI.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,lI.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(e.details)?lx.MEDIA_ERR_NETWORK:n[e.type];if(o===lx.MEDIA_ERR_NETWORK&&e.response){let r=null!=(i=e.type===lI.ErrorTypes.KEY_SYSTEM_ERROR?"drm":e.type===lI.ErrorTypes.NETWORK_ERROR?lR:void 0)?i:lR;s=null!=(a=d_(e.response,r,t,e.fatal))?a:new lx("",o,e.fatal)}else o===lx.MEDIA_ERR_ENCRYPTED?e.details===lI.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE?((s=new lx(l0("Attempting to play DRM-protected content without providing a DRM token."),lx.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000002):e.details===lI.ErrorDetails.KEY_SYSTEM_NO_ACCESS?((s=new lx(l0("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),lx.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000001):e.details===lI.ErrorDetails.KEY_SYSTEM_NO_SESSION?((s=new lx(l0("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),lx.MEDIA_ERR_ENCRYPTED,!0)).errorCategory="drm",s.muxCode=5000002):e.details===lI.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED?((s=new lx(l0("Failed to update DRM license. This may be an issue with the player or your protected content."),lx.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000003):e.details===lI.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED?((s=new lx(l0("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),lx.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000004):e.details===lI.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR?((s=new lx(l0("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser."),lx.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000005):e.details===lI.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED?((s=new lx(l0("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),lx.MEDIA_ERR_ENCRYPTED,!1)).errorCategory="drm",s.muxCode=5000006):((s=new lx(e.error.message,lx.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5e6):s=new lx("",o,e.fatal);return s.context||(s.context=`${e.url?`url: ${e.url}
`:""}${e.response&&(e.response.code||e.response.text)?`response: ${e.response.code}, ${e.response.text}
`:""}${e.reason?`failure reason: ${e.reason}
`:""}${e.level?`level: ${e.level}
`:""}${e.parent?`parent stream controller: ${e.parent}
`:""}${e.buffer?`buffer length: ${e.buffer}
`:""}${e.error?`error: ${e.error}
`:""}${e.event?`event: ${e.event}
`:""}${e.err?`error message: ${null==(r=e.err)?void 0:r.message}
`:""}`),s.data=e,s};let pB=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","waitingforkey","resize","enterpictureinpicture","leavepictureinpicture","webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"],p$=["autopictureinpicture","disablepictureinpicture","disableremoteplayback","autoplay","controls","controlslist","crossorigin","loop","muted","playsinline","poster","preload","src"];function pq(e){return`
    <style>
      :host {
        display: inline-flex;
        line-height: 0;
        flex-direction: column;
        justify-content: end;
      }

      audio {
        width: 100%;
      }
    </style>
    <slot name="media">
      <audio${pK(e)}></audio>
    </slot>
    <slot></slot>
  `}function pV(e){return`
    <style>
      :host {
        display: inline-block;
        line-height: 0;
      }

      video {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, 50% 50%);
      }

      video::-webkit-media-text-track-container {
        transform: var(--media-webkit-text-track-transform);
        transition: var(--media-webkit-text-track-transition);
      }
    </style>
    <slot name="media">
      <video${pK(e)}></video>
    </slot>
    <slot></slot>
  `}function pF(e,{tag:t,is:i}){let a=globalThis.document?.createElement?.(t,{is:i}),r=a?function(e){let t=[];for(let i=Object.getPrototypeOf(e);i&&i!==HTMLElement.prototype;i=Object.getPrototypeOf(i)){let e=Object.getOwnPropertyNames(i);t.push(...e)}return t}(a):[];return class n extends e{static getTemplateHTML=t.endsWith("audio")?pq:pV;static shadowRootOptions={mode:"open"};static Events=pB;static #e=!1;static get observedAttributes(){return n.#t(),[...a?.constructor?.observedAttributes??[],...p$]}static #t(){if(this.#e)return;this.#e=!0;let e=new Set(this.observedAttributes);for(let t of(e.delete("muted"),r))if(!(t in this.prototype))if("function"==typeof a[t])this.prototype[t]=function(...e){return this.#i(),(()=>{if(this.call)return this.call(t,...e);let i=this.nativeEl?.[t];return i?.apply(this.nativeEl,e)})()};else{let i={get(){this.#i();let i=t.toLowerCase();if(e.has(i)){let e=this.getAttribute(i);return null!==e&&(""===e||e)}return this.get?.(t)??this.nativeEl?.[t]}};t!==t.toUpperCase()&&(i.set=function(i){this.#i();let a=t.toLowerCase();e.has(a)?!0===i||!1===i||null==i?this.toggleAttribute(a,!!i):this.setAttribute(a,i):this.set?this.set(t,i):this.nativeEl&&(this.nativeEl[t]=i)}),Object.defineProperty(this.prototype,t,i)}}#a=!1;#r=null;#n=new Map;#s;#o;get;set;call;get nativeEl(){return this.#i(),this.#r??this.querySelector(":scope > [slot=media]")??this.querySelector(t)??this.shadowRoot?.querySelector(t)??null}set nativeEl(e){this.#r=e}get defaultMuted(){return this.hasAttribute("muted")}set defaultMuted(e){this.toggleAttribute("muted",e)}get src(){return this.getAttribute("src")}set src(e){this.setAttribute("src",`${e}`)}get preload(){return this.getAttribute("preload")??this.nativeEl?.preload}set preload(e){this.setAttribute("preload",`${e}`)}#i(){this.#a||(this.#a=!0,this.init())}init(){if(!this.shadowRoot){this.attachShadow({mode:"open"});let e=function(e){let t={};for(let i of e)t[i.name]=i.value;return t}(this.attributes);i&&(e.is=i),t&&(e.part=t),this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}for(let e of(this.nativeEl.muted=this.hasAttribute("muted"),r))this.#l(e);this.#d()}#d(){for(let e of(this.#s=new MutationObserver(this.#u.bind(this)),this.#o=()=>this.#c(),this.shadowRoot?.addEventListener("slotchange",this.#o),this.#c(),this.constructor.Events))this.shadowRoot?.addEventListener(e,this,!0)}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{detail:e.detail}))}#c(){let e=new Map(this.#n),t=this.shadowRoot?.querySelector("slot:not([name])");(t?.assignedElements({flatten:!0}).filter(e=>["track","source"].includes(e.localName))).forEach(t=>{e.delete(t);let i=this.#n.get(t);i||(i=t.cloneNode(),this.#n.set(t,i),this.#s?.observe(t,{attributes:!0})),this.nativeEl?.append(i),this.#h(i)}),e.forEach((e,t)=>{e.remove(),this.#n.delete(t)})}#u(e){for(let t of e)if("attributes"===t.type){let{target:e,attributeName:i}=t,a=this.#n.get(e);a&&i&&(a.setAttribute(i,e.getAttribute(i)??""),this.#h(a))}}#h(e){e&&"track"===e.localName&&e.default&&("chapters"===e.kind||"metadata"===e.kind)&&"disabled"===e.track.mode&&(e.track.mode="hidden")}#l(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}attributeChangedCallback(e,t,i){this.#i(),this.#m(e,t,i)}#m(e,t,i){["id","class"].includes(e)||!n.observedAttributes.includes(e)&&this.constructor.observedAttributes.includes(e)||(null===i?this.nativeEl?.removeAttribute(e):this.nativeEl?.getAttribute(e)!==i&&this.nativeEl?.setAttribute(e,i))}connectedCallback(){this.#i(),this.#o||this.#d()}disconnectedCallback(){for(let e of(this.#s?.disconnect(),this.#s=void 0,this.#o&&(this.shadowRoot?.removeEventListener("slotchange",this.#o),this.#o=void 0),this.constructor.Events))this.shadowRoot?.removeEventListener(e,this,!0);this.#n.forEach(e=>e.remove()),this.#n.clear(),this.#r=null}}}function pK(e){let t="";for(let i in e){if(!p$.includes(i))continue;let a=e[i];""===a?t+=` ${pj(i)}`:t+=` ${pj(i)}="${pj(`${a}`)}"`}return t}function pj(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/`/g,"&#x60;")}let pG=pF(globalThis.HTMLElement??class{},{tag:"video"});pF(globalThis.HTMLElement??class{},{tag:"audio"});var pY,pz,pQ,pZ,pX,pJ,p0,p1,p2,p3,p4,p5,p9,p8,p6=e=>{throw TypeError(e)},p7=(e,t,i)=>t.has(e)||p6("Cannot "+i),ve=(e,t,i)=>(p7(e,t,"read from private field"),i?i.call(e):t.get(e)),vt=(e,t,i)=>t.has(e)?p6("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),vi=(e,t,i,a)=>(p7(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),va=(e,t,i)=>(p7(e,t,"access private method"),i),vr=(()=>{try{return"0.31.6"}catch{}return"UNKNOWN"})(),vn=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,vs={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended",MAX_RECONNECT_RETRIES:"max-reconnect-retries",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",MAX_AUTO_RESOLUTION:"max-auto-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo",CAP_RENDITION_TO_PLAYER_SIZE:"cap-rendition-to-player-size",INITIAL_BANDWIDTH_ESTIMATE_KBPS:"initial-bandwidth-estimate-kbps",INITIAL_ESTIMATE_SEGMENTS:"initial-estimate-segments",MIN_PRELOAD_SEGMENTS:"min-preload-segments"},vo=Object.values(vs),vl="mux-video",vd=class extends pG{constructor(){super(),vt(this,p4),vt(this,pY),vt(this,pz),vt(this,pQ,{}),vt(this,pZ,{}),vt(this,pX),vt(this,pJ),vt(this,p0),vt(this,p1),vt(this,p2,""),vt(this,p3,e=>{var t,i,a;let r=(i=this.nativeEl,null==(a=pn.get(i))?void 0:a.metadata),n=null!=(t=this.metadata)?t:{};this.metadata={...r,...n},(null==r?void 0:r["com.mux.video.branding"])==="mux-free-plan"&&(vi(this,p2,"default"),this.updateLogo())}),vt(this,p9),vi(this,pz,pl())}static get NAME(){return vl}static get VERSION(){return vr}static get observedAttributes(){var e;return[...vo,...null!=(e=pG.observedAttributes)?e:[]]}static getLogoHTML(e){return e&&"false"!==e?"default"===e?vn:`<img part="logo" src="${e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}" />`:""}static getTemplateHTML(e={}){var t;return`
      ${pG.getTemplateHTML(e)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML(null!=(t=e[vs.LOGO])?t:"")}
      </slot>
    `}get preferCmcd(){var e;return null!=(e=this.getAttribute(vs.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?lW.includes(e)?this.setAttribute(vs.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${lW.join()}`):this.removeAttribute(vs.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(vs.PLAYER_INIT_TIME)?+this.getAttribute(vs.PLAYER_INIT_TIME):ve(this,pz)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(vs.PLAYER_INIT_TIME):this.setAttribute(vs.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=ve(this,p0))?e:vl}set playerSoftwareName(e){vi(this,p0,e)}get playerSoftwareVersion(){var e;return null!=(e=ve(this,pJ))?e:vr}set playerSoftwareVersion(e){vi(this,pJ,e)}get _hls(){var e;return null==(e=ve(this,p4,p5))?void 0:e.engine}get mux(){var e;return null==(e=this.nativeEl)?void 0:e.mux}get error(){var e;return null!=(e=pm(this.nativeEl))?e:null}get errorTranslator(){return ve(this,p1)}set errorTranslator(e){vi(this,p1,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(null==e?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return null!=(e=this.getAttribute(vs.TYPE))?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(vs.TYPE,e):this.removeAttribute(vs.TYPE))}get preload(){let e=this.getAttribute("preload");return""===e?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return null!=this.getAttribute(vs.DEBUG)}set debug(e){e!==this.debug&&(e?this.setAttribute(vs.DEBUG,""):this.removeAttribute(vs.DEBUG))}get disableTracking(){return this.hasAttribute(vs.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(vs.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(vs.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(vs.DISABLE_COOKIES,""):this.removeAttribute(vs.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(vs.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(e){e!==this.disablePseudoEnded&&(e?this.setAttribute(vs.DISABLE_PSEUDO_ENDED,""):this.removeAttribute(vs.DISABLE_PSEUDO_ENDED))}get maxReconnectRetries(){let e=this.getAttribute(vs.MAX_RECONNECT_RETRIES);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set maxReconnectRetries(e){e!==this.maxReconnectRetries&&(null==e?this.removeAttribute(vs.MAX_RECONNECT_RETRIES):this.setAttribute(vs.MAX_RECONNECT_RETRIES,`${e}`))}get startTime(){let e=this.getAttribute(vs.START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set startTime(e){e!==this.startTime&&(null==e?this.removeAttribute(vs.START_TIME):this.setAttribute(vs.START_TIME,`${e}`))}get initialBandwidthEstimateKbps(){let e=this.getAttribute(vs.INITIAL_BANDWIDTH_ESTIMATE_KBPS);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set initialBandwidthEstimateKbps(e){e!==this.initialBandwidthEstimateKbps&&(null==e?this.removeAttribute(vs.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(vs.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${e}`))}get initialEstimateSegments(){let e=this.getAttribute(vs.INITIAL_ESTIMATE_SEGMENTS);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set initialEstimateSegments(e){e!==this.initialEstimateSegments&&(null==e?this.removeAttribute(vs.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(vs.INITIAL_ESTIMATE_SEGMENTS,`${e}`))}get minPreloadSegments(){let e=this.getAttribute(vs.MIN_PRELOAD_SEGMENTS);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set minPreloadSegments(e){e!==this.minPreloadSegments&&(null==e?this.removeAttribute(vs.MIN_PRELOAD_SEGMENTS):this.setAttribute(vs.MIN_PRELOAD_SEGMENTS,`${e}`))}get playbackId(){var e;return this.hasAttribute(vs.PLAYBACK_ID)?this.getAttribute(vs.PLAYBACK_ID):null!=(e=ph(this.src))?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(vs.PLAYBACK_ID,e):this.removeAttribute(vs.PLAYBACK_ID))}get maxResolution(){var e;return null!=(e=this.getAttribute(vs.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(vs.MAX_RESOLUTION,e):this.removeAttribute(vs.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(vs.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(vs.MIN_RESOLUTION,e):this.removeAttribute(vs.MIN_RESOLUTION))}get maxAutoResolution(){var e;return null!=(e=this.getAttribute(vs.MAX_AUTO_RESOLUTION))?e:void 0}set maxAutoResolution(e){null==e?this.removeAttribute(vs.MAX_AUTO_RESOLUTION):this.setAttribute(vs.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return null!=(e=this.getAttribute(vs.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(vs.RENDITION_ORDER,e):this.removeAttribute(vs.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(vs.PROGRAM_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programStartTime(e){null==e?this.removeAttribute(vs.PROGRAM_START_TIME):this.setAttribute(vs.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(vs.PROGRAM_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programEndTime(e){null==e?this.removeAttribute(vs.PROGRAM_END_TIME):this.setAttribute(vs.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(vs.ASSET_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetStartTime(e){null==e?this.removeAttribute(vs.ASSET_START_TIME):this.setAttribute(vs.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(vs.ASSET_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetEndTime(e){null==e?this.removeAttribute(vs.ASSET_END_TIME):this.setAttribute(vs.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return null!=(e=this.getAttribute(vs.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(vs.CUSTOM_DOMAIN,e):this.removeAttribute(vs.CUSTOM_DOMAIN))}get capRenditionToPlayerSize(){var e;return(null==(e=this._hlsConfig)?void 0:e.capLevelToPlayerSize)!=null?this._hlsConfig.capLevelToPlayerSize:ve(this,p9)}set capRenditionToPlayerSize(e){vi(this,p9,e)}get drmToken(){var e;return null!=(e=this.getAttribute(vs.DRM_TOKEN))?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(vs.DRM_TOKEN,e):this.removeAttribute(vs.DRM_TOKEN))}get playbackToken(){var e,t,i,a;if(this.hasAttribute(vs.PLAYBACK_TOKEN))return null!=(e=this.getAttribute(vs.PLAYBACK_TOKEN))?e:void 0;if(this.hasAttribute(vs.PLAYBACK_ID)){let[,e]=lF(null!=(t=this.playbackId)?t:"");return null!=(i=new URLSearchParams(e).get("token"))?i:void 0}if(this.src)return null!=(a=new URLSearchParams(this.src).get("token"))?a:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(vs.PLAYBACK_TOKEN,e):this.removeAttribute(vs.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(vs.PLAYBACK_TOKEN),t=this.getAttribute(vs.DRM_TOKEN);return{...ve(this,pZ),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{}}}set tokens(e){vi(this,pZ,null!=e?e:{})}get ended(){return pE(this.nativeEl,this._hls)}get envKey(){var e;return null!=(e=this.getAttribute(vs.ENV_KEY))?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(vs.ENV_KEY,e):this.removeAttribute(vs.ENV_KEY))}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(vs.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(vs.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(vs.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return null!=(e=this.getAttribute(vs.STREAM_TYPE))?e:pp(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(vs.STREAM_TYPE,e):this.removeAttribute(vs.STREAM_TYPE))}get targetLiveWindow(){var e,t,i;return this.hasAttribute(vs.TARGET_LIVE_WINDOW)?+this.getAttribute(vs.TARGET_LIVE_WINDOW):(e=this.nativeEl,null!=(i=null==(t=pn.get(e))?void 0:t.targetLiveWindow)?i:NaN)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(vs.TARGET_LIVE_WINDOW):this.setAttribute(vs.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,t;if(this.hasAttribute(vs.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:i}=this,a=null!=(e=this.nativeEl.seekable.end(0))?e:0;return Math.max(null!=(t=this.nativeEl.seekable.start(0))?t:0,a-i)}return(e=>{var t;let i=null==(t=pn.get(e))?void 0:t.liveEdgeStartOffset;if("number"!=typeof i)return NaN;let a=pv(e);return a.length?a.end(a.length-1)-i:NaN})(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(vs.LIVE_EDGE_OFFSET))return+this.getAttribute(vs.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(null==e?this.removeAttribute(vs.LIVE_EDGE_OFFSET):this.setAttribute(vs.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return pv(this.nativeEl)}async addCuePoints(e){return this.nativeEl.currentSrc||console.warn("addCuePoints() was called before the media element has loaded. Wait for the loadstart event before calling addCuePoints()."),dl(this.nativeEl,e)}get activeCuePoint(){return du(this.nativeEl)}get cuePoints(){return function(e,t={label:dn}){let i=de(e,t.label,"metadata");return null!=i&&i.cues?Array.from(i.cues,e=>dd(e)):[]}(this.nativeEl)}async addChapters(e){return this.nativeEl.currentSrc||console.warn("addChapters() was called before the media element has loaded. Wait for the loadstart event before calling addChapters()."),dg(this.nativeEl,e)}get activeChapter(){return dE(this.nativeEl)}get chapters(){return function(e,t={label:dh}){var i;let a=de(e,t.label,"chapters");return null!=(i=null==a?void 0:a.cues)&&i.length?Array.from(a.cues,t=>dp(t,e)):[]}(this.nativeEl)}getStartDate(){return function(e,t){if(t){let i=t.playingDate;if(null!=i)return new Date(i.getTime()-1e3*e.currentTime)}return"function"==typeof e.getStartDate?e.getStartDate():new Date(NaN)}(this.nativeEl,this._hls)}get currentPdt(){var e,t;return e=this.nativeEl,(t=this._hls)&&t.playingDate?t.playingDate:new Date("function"==typeof e.getStartDate?e.getStartDate().getTime()+1e3*e.currentTime:NaN)}get preferPlayback(){let e=this.getAttribute(vs.PREFER_PLAYBACK);if("mse"===e||e===lU)return e}set preferPlayback(e){e!==this.preferPlayback&&("mse"===e||e===lU?this.setAttribute(vs.PREFER_PLAYBACK,e):this.removeAttribute(vs.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![vs.METADATA_URL].includes(e)).reduce((e,t)=>{let i=this.getAttribute(t);return null!=i&&(e[t.replace(/^metadata-/,"").replace(/-/g,"_")]=i),e},{}),...ve(this,pQ)}}set metadata(e){vi(this,pQ,null!=e?e:{}),this.mux&&this.mux.emit("hb",ve(this,pQ))}get _hlsConfig(){return ve(this,pX)}set _hlsConfig(e){vi(this,pX,e)}get logo(){var e;return null!=(e=this.getAttribute(vs.LOGO))?e:ve(this,p2)}set logo(e){e?this.setAttribute(vs.LOGO,e):this.removeAttribute(vs.LOGO)}load(){py(this,this.nativeEl,ve(this,p4,p5))}unload(){pk(this.nativeEl,ve(this,p4,p5),this)}attributeChangedCallback(e,t,i){var a,r;switch(pG.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,t,i),e){case vs.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=null!=i?i:void 0;break;case vs.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=null!=i?i:void 0;break;case"src":{let e=!!t,a=!!i;!e&&a?va(this,p4,p8).call(this):e&&!a?this.unload():e&&a&&(this.unload(),va(this,p4,p8).call(this));break}case"autoplay":if(i===t)break;null==(a=ve(this,p4,p5))||a.setAutoplay(this.autoplay);break;case"preload":if(i===t)break;null==(r=ve(this,p4,p5))||r.setPreload(i);break;case vs.PLAYBACK_ID:case vs.CUSTOM_DOMAIN:case vs.MAX_RESOLUTION:case vs.MIN_RESOLUTION:case vs.RENDITION_ORDER:case vs.PROGRAM_START_TIME:case vs.PROGRAM_END_TIME:case vs.ASSET_START_TIME:case vs.ASSET_END_TIME:case vs.PLAYBACK_TOKEN:this.hasAttribute(vs.PLAYBACK_ID)&&(this.src=pu(this));break;case vs.DEBUG:{let e=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=e);break}case vs.METADATA_URL:i&&fetch(i).then(e=>e.json()).then(e=>this.metadata=e).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${i}!`));break;case vs.STREAM_TYPE:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case vs.TARGET_LIVE_WINDOW:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case vs.LOGO:(null==i||i!==t)&&this.updateLogo();break;case vs.DISABLE_TRACKING:if(null==i||i!==t){let e=this.currentTime,t=this.paused;this.unload(),va(this,p4,p8).call(this).then(()=>{this.currentTime=e,t||this.play()})}break;case vs.DISABLE_COOKIES:(null==i||i!==t)&&((e,t,i)=>{if(!t)return;let a=!!e.disableCookies,r=pn.get(t);!r||r.muxDataDisableCookies===a||(t&&(t.mux&&(t.mux.deleted||t.mux.destroy(),delete t.mux),p_.has(t)||p_.set(t,Promise.resolve().then(()=>{var a,r;p_.delete(t);let n=pn.get(t);n&&(!t.mux||t.mux.deleted)&&pD(e,t,null==(r=null!=(a=n.coreReference)?a:i)?void 0:r.engine)}))),a&&Promise.resolve().then(()=>{let t,i;e.disableCookies&&(t=new Date(0).toUTCString(),i=new Set(["muxData"]),document.cookie.split(";").forEach(e=>{let t=e.split("=")[0].trim();t.startsWith("muxData")&&i.add(t)}),i.forEach(e=>{document.cookie=`${e}=;expires=${t};path=/`}))}))})(this,this.nativeEl,ve(this,p4,p5));break;case vs.CAP_RENDITION_TO_PLAYER_SIZE:(null==i||i!==t)&&(this.capRenditionToPlayerSize=null!=i||void 0)}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector('slot[name="logo"]');e&&(e.innerHTML=this.constructor.getLogoHTML(ve(this,p2)||this.logo))}connectedCallback(){var e,t;null==(e=super.connectedCallback)||e.call(this),null==(t=this.nativeEl)||t.addEventListener("muxmetadata",ve(this,p3)),this.nativeEl&&this.src&&!ve(this,p4,p5)&&va(this,p4,p8).call(this)}disconnectedCallback(){var e,t;null==(e=this.nativeEl)||e.removeEventListener("muxmetadata",ve(this,p3)),this.unload(),null==(t=super.disconnectedCallback)||t.call(this)}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};pY=new WeakMap,pz=new WeakMap,pQ=new WeakMap,pZ=new WeakMap,pX=new WeakMap,pJ=new WeakMap,p0=new WeakMap,p1=new WeakMap,p2=new WeakMap,p3=new WeakMap,p4=new WeakSet,p5=function(){var e,t;return e=this.nativeEl,null==(t=pn.get(e))?void 0:t.coreReference},p9=new WeakMap,p8=async function(){ve(this,pY)||(await vi(this,pY,Promise.resolve()),vi(this,pY,null),this.load())};let vu=new WeakMap;class vc extends Error{}class vh extends Error{}let vm=["application/x-mpegURL","application/vnd.apple.mpegurl","audio/mpegurl"];function vp(){return globalThis.cast?.framework?.CastContext.getInstance()}function vv(){return vp()?.getCurrentSession()}function vb(){return vv()?.getSessionObj().media[0]}function vg(e){return vp().setOptions({...vf(),...e})}function vf(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}function vE(e){if(!e)return;let t=e.match(/\.([a-zA-Z0-9]+)(?:\?.*)?$/);return t?t[1]:null}function vy(e){let t=e.split("\n").find(e=>!e.trim().startsWith("#")&&""!==e.trim());return t?.trim()}async function v_(e){if(!e)return!1;if(/\.m3u8?(\?.*)?$/i.test(e))return!0;if(e.startsWith("blob:"))return!1;try{let t=(await fetch(e,{method:"HEAD"})).headers.get("Content-Type");return vm.some(e=>t===e)}catch(e){return console.error("Error while trying to get the Content-Type of the manifest",e),!1}}async function vk(e){if(!e||e.startsWith("blob:"))return{videoFormat:void 0,audioFormat:void 0};try{let t=await (await fetch(e)).text(),i=t,a=function(e){let t=e.split("\n"),i=[];for(let e=0;e<t.length;e++)if(t[e].trim().startsWith("#EXT-X-STREAM-INF")){let a=t[e+1]?t[e+1].trim():"";a&&!a.startsWith("#")&&i.push(a)}return i}(t);if(a.length>0){let t=new URL(a[0],e).toString();i=await (await fetch(t)).text()}let r=vy(i),n=vE(r),s=function(e){for(let t of e.split("\n")){let e=t.trim();if(e.startsWith("#EXT-X-MEDIA")&&/TYPE=AUDIO/i.test(e)){let t=e.match(/URI="([^"]+)"/i);if(t)return t[1]}}}(t),o=n;if(s)try{let t=new URL(s,e).toString(),i=await (await fetch(t)).text(),a=vy(i);o=vE(a)??n}catch(e){console.error("Error while trying to parse the audio rendition playlist",e)}return{videoFormat:n,audioFormat:o}}catch(e){return console.error("Error while trying to parse the manifest playlist",e),{videoFormat:void 0,audioFormat:void 0}}}let vT=new(globalThis.WeakRef?class extends Set{add(e){super.add(new WeakRef(e))}forEach(e){super.forEach(t=>{let i=t.deref();i&&e(i)})}}:Set),vw=new WeakSet;v2=()=>{globalThis.chrome?.cast?.isAvailable?n||(n=cast.framework,vp().addEventListener(n.CastContextEventType.CAST_STATE_CHANGED,e=>{vT.forEach(t=>vu.get(t).onCastStateChanged?.(e))}),vp().addEventListener(n.CastContextEventType.SESSION_STATE_CHANGED,e=>{vT.forEach(t=>vu.get(t).onSessionStateChanged?.(e))}),vT.forEach(e=>vu.get(e).init?.())):console.debug("chrome.cast.isAvailable",globalThis.chrome?.cast?.isAvailable)},globalThis.chrome?.cast?.isAvailable?globalThis.cast?.framework?v2():customElements.whenDefined("google-cast-button").then(v2):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(v2)};let vA=0;class vC extends EventTarget{#p;#a;#v;#b;#g="disconnected";#f=!1;#E=new Set;#y=new WeakMap;#_=()=>this.#k();constructor(e){super(),this.#p=e,vT.add(this),vu.set(this,{init:()=>this.#i(),onCastStateChanged:()=>this.#T(),onSessionStateChanged:()=>this.#w(),getCastPlayer:()=>this.#A}),this.#i()}destroy(){this.#p?.textTracks?.removeEventListener("change",this.#_),this.#b&&this.#v?.controller&&Object.entries(this.#b).forEach(([e,t])=>{this.#v.controller.removeEventListener(e,t)}),this.#p&&vw.delete(this.#p),this.#a=!1}get #A(){if(vw.has(this.#p))return this.#v}get state(){return this.#g}async watchAvailability(e){if(this.#p.disableRemotePlayback)throw new vc("disableRemotePlayback attribute is present.");return this.#y.set(e,++vA),this.#E.add(e),queueMicrotask(()=>e(this.#C())),vA}async cancelWatchAvailability(e){if(this.#p.disableRemotePlayback)throw new vc("disableRemotePlayback attribute is present.");e?this.#E.delete(e):this.#E.clear()}async prompt(){if(this.#p.disableRemotePlayback)throw new vc("disableRemotePlayback attribute is present.");if(!globalThis.chrome?.cast?.isAvailable)throw new vh("The RemotePlayback API is disabled on this platform.");let e=vw.has(this.#p);vw.add(this.#p),vg(this.#p.castOptions),Object.entries(this.#b).forEach(([e,t])=>{this.#v.controller.addEventListener(e,t)});try{await vp().requestSession()}catch(t){if(e||vw.delete(this.#p),"cancel"===t)return;throw Error(t)}vu.get(this.#p)?.loadOnPrompt?.()}#S(){vw.has(this.#p)&&(Object.entries(this.#b).forEach(([e,t])=>{this.#v.controller.removeEventListener(e,t)}),vw.delete(this.#p),this.#p.muted=this.#v.isMuted,this.#p.currentTime=this.#v.savedPlayerState.currentTime,!1===this.#v.savedPlayerState.isPaused&&this.#p.play())}#C(){let e=vp()?.getCastState();return e&&"NO_DEVICES_AVAILABLE"!==e}#T(){let e=vp().getCastState();if(vw.has(this.#p)&&"CONNECTING"===e&&(this.#g="connecting",this.dispatchEvent(new Event("connecting"))),!this.#f&&e?.includes("CONNECT"))for(let e of(this.#f=!0,this.#E))e(!0);else if(this.#f&&(!e||"NO_DEVICES_AVAILABLE"===e))for(let e of(this.#f=!1,this.#E))e(!1)}async #w(){let{SESSION_RESUMED:e}=n.SessionState;if(vp().getSessionState()===e&&this.#p.castSrc===vb()?.media.contentId){vw.add(this.#p),Object.entries(this.#b).forEach(([e,t])=>{this.#v.controller.addEventListener(e,t)});try{var t;await (t=new chrome.cast.media.GetStatusRequest,new Promise((e,i)=>{vb().getStatus(t,e,i)}))}catch(e){console.error(e)}this.#b[n.RemotePlayerEventType.IS_PAUSED_CHANGED](),this.#b[n.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}}#i(){n&&!this.#a&&(this.#a=!0,vg(this.#p.castOptions),this.#p.textTracks.addEventListener("change",this.#_),this.#T(),this.#v=new n.RemotePlayer,new n.RemotePlayerController(this.#v),this.#b={[n.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:e})=>{!0===e?(this.#g="connected",this.dispatchEvent(new Event("connect"))):(this.#S(),this.#g="disconnected",this.dispatchEvent(new Event("disconnect")))},[n.RemotePlayerEventType.DURATION_CHANGED]:()=>{this.#p.dispatchEvent(new Event("durationchange"))},[n.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{this.#p.dispatchEvent(new Event("volumechange"))},[n.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{this.#p.dispatchEvent(new Event("volumechange"))},[n.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{this.#A?.isMediaLoaded&&this.#p.dispatchEvent(new Event("timeupdate"))},[n.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{this.#p.dispatchEvent(new Event("resize"))},[n.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{this.#p.dispatchEvent(new Event(this.paused?"pause":"play"))},[n.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{this.#A?.playerState!==chrome.cast.media.PlayerState.PAUSED&&this.#p.dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[this.#A?.playerState]))},[n.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{this.#A?.isMediaLoaded&&(await Promise.resolve(),this.#I())}})}#I(){this.#k()}async #k(){let e;if(!this.#A)return;let t=(this.#v.mediaInfo?.tracks??[]).filter(({type:e})=>e===chrome.cast.media.TrackType.TEXT),i=[...this.#p.textTracks].filter(({kind:e})=>"subtitles"===e||"captions"===e),a=t.map(({language:e,name:t,trackId:a})=>{let{mode:r}=i.find(i=>i.language===e&&i.label===t)??{};return!!r&&{mode:r,trackId:a}}).filter(Boolean),r=a.filter(({mode:e})=>"showing"!==e).map(({trackId:e})=>e),n=a.find(({mode:e})=>"showing"===e),s=vv()?.getSessionObj().media[0]?.activeTrackIds??[],o=s;if(s.length&&(o=o.filter(e=>!r.includes(e))),n?.trackId&&(o=[...o,n.trackId]),e=o=[...new Set(o)],!(s.length===e.length&&s.every(t=>e.includes(t))))try{let e=new chrome.cast.media.EditTracksInfoRequest(o);await new Promise((t,i)=>{vb().editTracksInfo(e,t,i)})}catch(e){console.error(e)}}}let vS=e=>class extends e{static observedAttributes=[...e.observedAttributes??[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"];#R={paused:!1};#L=vf();#x;#M;get remote(){if(this.#M)return this.#M;if(globalThis.chrome){if(!this.isConnected)return;return this.disableRemotePlayback||function(){let e="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if(globalThis.chrome?.cast||document.querySelector(`script[src="${e}"]`))return;let t=document.createElement("script");t.src=e,document.head.append(t)}(),vu.set(this,{loadOnPrompt:()=>this.#D()}),this.#M=new vC(this)}return super.remote}get #A(){return vu.get(this.#M)?.getCastPlayer?.()}disconnectedCallback(){this.#M?.destroy(),this.#M=null,vu.delete(this),super.disconnectedCallback?.()}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"cast-receiver"===e&&i){this.#L.receiverApplicationId=i;return}if(this.#A)switch(e){case"cast-stream-type":case"cast-src":this.load()}}async #D(){this.#R.paused=super.paused,super.pause(),this.muted=super.muted;try{await this.load()}catch(e){console.error(e)}}async load(){if(!this.#A)return super.load();let e=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);e.customData=this.castCustomData;let t=[...this.querySelectorAll("track")].filter(({kind:e,src:t})=>t&&("subtitles"===e||"captions"===e)),i=[],a=0;if(t.length&&(e.tracks=t.map(e=>{let t=++a;0===i.length&&"showing"===e.track.mode&&i.push(t);let r=new chrome.cast.media.Track(t,chrome.cast.media.TrackType.TEXT);return r.trackContentId=e.src,r.trackContentType="text/vtt",r.subtype="captions"===e.kind?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,r.name=e.label,r.language=e.srclang,r})),"live"===this.castStreamType?e.streamType=chrome.cast.media.StreamType.LIVE:e.streamType=chrome.cast.media.StreamType.BUFFERED,e.metadata=new chrome.cast.media.GenericMediaMetadata,e.metadata.title=this.title,e.metadata.images=[{url:this.poster}],await v_(this.castSrc)){e.contentType||(e.contentType="application/x-mpegURL");let{videoFormat:t,audioFormat:i}=await vk(this.castSrc);t?.includes("m4s")||t?.includes("mp4")||t?.includes("m4a")?(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.FMP4,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.FMP4):i?.includes("aac")?(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.AAC,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.MPEG2_TS):(t?.includes("ts")||i?.includes("ts"))&&(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.TS,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.MPEG2_TS)}let r=new chrome.cast.media.LoadRequest(e);r.currentTime=super.currentTime??0,r.autoplay=!this.#R.paused,r.activeTrackIds=i,await vv()?.loadMedia(r),this.dispatchEvent(new Event("volumechange"))}play(){if(this.#A){this.#A.isPaused&&this.#A.controller?.playOrPause();return}return super.play()}pause(){if(this.#A){this.#A.isPaused||this.#A.controller?.playOrPause();return}super.pause()}get castOptions(){return this.#L}get castReceiver(){return this.getAttribute("cast-receiver")??void 0}set castReceiver(e){this.castReceiver!=e&&this.setAttribute("cast-receiver",`${e}`)}get castSrc(){let e=this.currentSrc,t=e?.startsWith("blob:")?void 0:e;return this.getAttribute("cast-src")??this.querySelector("source")?.src??t??this.getAttribute("src")??void 0}set castSrc(e){this.castSrc!=e&&this.setAttribute("cast-src",`${e}`)}get castContentType(){return this.getAttribute("cast-content-type")??void 0}set castContentType(e){this.setAttribute("cast-content-type",`${e}`)}get castStreamType(){return this.getAttribute("cast-stream-type")??this.streamType??void 0}set castStreamType(e){this.setAttribute("cast-stream-type",`${e}`)}get castCustomData(){return this.#x}set castCustomData(e){let t=typeof e;["object","undefined"].includes(t)?this.#x=e:console.error(`castCustomData must be nullish or an object but value was of type ${t}`)}get readyState(){if(this.#A)switch(this.#A.playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return this.#A?this.#A.isPaused:super.paused}get muted(){return this.#A?this.#A?.isMuted:super.muted}set muted(e){if(this.#A){(e&&!this.#A.isMuted||!e&&this.#A.isMuted)&&this.#A.controller?.muteOrUnmute();return}super.muted=e}get volume(){return this.#A?this.#A?.volumeLevel??1:super.volume}set volume(e){if(this.#A){this.#A.volumeLevel=+e,this.#A.controller?.setVolumeLevel();return}super.volume=e}get duration(){return this.#A&&this.#A?.isMediaLoaded?this.#A?.duration??NaN:super.duration}get currentTime(){return this.#A&&this.#A?.isMediaLoaded?this.#A?.currentTime??0:super.currentTime}set currentTime(e){if(this.#A){this.#A.currentTime=e,this.#A.controller?.seek();return}super.currentTime=e}};class vI extends Event{track;constructor(e,t){super(e),this.track=t.track}}let vR=new WeakMap;function vL(e){var t,i;let a;return vR.get(e)??(t=e,i={},(a=vR.get(t))||vR.set(t,a={}),Object.assign(a,i))}function vx(e,t){let i=e.videoTracks;vL(t).media=new WeakRef(e),vL(t).renditionSet||(vL(t).renditionSet=new Set);let a=vL(i).trackSet;a.add(t);let r=a.size-1;r in vD.prototype||Object.defineProperty(vD.prototype,r,{get(){return[...vL(this).trackSet][r]}}),queueMicrotask(()=>{i.dispatchEvent(new vI("addtrack",{track:t}))})}function vM(e){let t=vL(e).media?.deref()?.videoTracks;t&&(vL(t).trackSet.delete(e),queueMicrotask(()=>{t.dispatchEvent(new vI("removetrack",{track:e}))}))}class vD extends EventTarget{#O;#P;#N;constructor(){super(),vL(this).trackSet=new Set}get #U(){return vL(this).trackSet}[Symbol.iterator](){return this.#U.values()}get length(){return this.#U.size}getTrackById(e){return[...this.#U].find(t=>t.id===e)??null}get selectedIndex(){return[...this.#U].findIndex(e=>e.selected)}get onaddtrack(){return this.#O}set onaddtrack(e){this.#O&&(this.removeEventListener("addtrack",this.#O),this.#O=void 0),"function"==typeof e&&(this.#O=e,this.addEventListener("addtrack",e))}get onremovetrack(){return this.#P}set onremovetrack(e){this.#P&&(this.removeEventListener("removetrack",this.#P),this.#P=void 0),"function"==typeof e&&(this.#P=e,this.addEventListener("removetrack",e))}get onchange(){return this.#N}set onchange(e){this.#N&&(this.removeEventListener("change",this.#N),this.#N=void 0),"function"==typeof e&&(this.#N=e,this.addEventListener("change",e))}}class vO extends Event{rendition;constructor(e,t){super(e),this.rendition=t.rendition}}function vP(e){let t=vL(e).media?.deref();return t?[...t.videoTracks].filter(e=>e.selected).flatMap(e=>[...vL(e).renditionSet]):[]}class vN extends EventTarget{#H;#W;#N;[Symbol.iterator](){return vP(this).values()}get length(){return vP(this).length}getRenditionById(e){return vP(this).find(t=>`${t.id}`==`${e}`)??null}get selectedIndex(){return vP(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of vP(this).entries())i.selected=t===e}get onaddrendition(){return this.#H}set onaddrendition(e){this.#H&&(this.removeEventListener("addrendition",this.#H),this.#H=void 0),"function"==typeof e&&(this.#H=e,this.addEventListener("addrendition",e))}get onremoverendition(){return this.#W}set onremoverendition(e){this.#W&&(this.removeEventListener("removerendition",this.#W),this.#W=void 0),"function"==typeof e&&(this.#W=e,this.addEventListener("removerendition",e))}get onchange(){return this.#N}set onchange(e){this.#N&&(this.removeEventListener("change",this.#N),this.#N=void 0),"function"==typeof e&&(this.#N=e,this.addEventListener("change",e))}}class vU{src;id;width;height;bitrate;frameRate;codec;#B=!1;get selected(){return this.#B}set selected(e){if(this.#B!==e){var t;let i;this.#B=e,t=this,(i=vL(t).media?.deref()?.videoRenditions)&&!vL(i).changeRequested&&(vL(i).changeRequested=!0,queueMicrotask(()=>{delete vL(i).changeRequested,vL(t).track.selected&&i.dispatchEvent(new Event("change"))}))}}}class vH{id;kind;label="";language="";sourceBuffer;#B=!1;addRendition(e,t,i,a,r,n){var s;let o,l,d,u=new vU;return u.src=e,u.width=t,u.height=i,u.frameRate=n,u.bitrate=r,u.codec=a,s=this,o=vL(s).media?.deref()?.videoRenditions,vL(u).media=vL(s).media,vL(u).track=s,(l=vL(s).renditionSet).add(u),(d=l.size-1)in vN.prototype||Object.defineProperty(vN.prototype,d,{get(){return vP(this)[d]}}),queueMicrotask(()=>{o&&s.selected&&o.dispatchEvent(new vO("addrendition",{rendition:u}))}),u}removeRendition(e){let t,i;t=vL(e).media?.deref()?.videoRenditions,i=vL(e).track,vL(i).renditionSet.delete(e),queueMicrotask(()=>{let i=vL(e).track;t&&i.selected&&t.dispatchEvent(new vO("removerendition",{rendition:e}))})}get selected(){return this.#B}set selected(e){this.#B===e||(this.#B=e,!0===e&&function(e){let t=vL(e).media?.deref()?.videoTracks??[],i=!1;for(let a of t)a!==e&&(a.selected=!1,i=!0);if(i){if(vL(t).changeRequested)return;vL(t).changeRequested=!0,queueMicrotask(()=>{delete vL(t).changeRequested,t.dispatchEvent(new Event("change"))})}}(this))}}function vW(e){let t=vL(e).media?.deref();return t?[...t.audioTracks].filter(e=>e.enabled).flatMap(e=>[...vL(e).renditionSet]):[]}class vB extends EventTarget{#H;#W;#N;[Symbol.iterator](){return vW(this).values()}get length(){return vW(this).length}getRenditionById(e){return vW(this).find(t=>`${t.id}`==`${e}`)??null}get selectedIndex(){return vW(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of vW(this).entries())i.selected=t===e}get onaddrendition(){return this.#H}set onaddrendition(e){this.#H&&(this.removeEventListener("addrendition",this.#H),this.#H=void 0),"function"==typeof e&&(this.#H=e,this.addEventListener("addrendition",e))}get onremoverendition(){return this.#W}set onremoverendition(e){this.#W&&(this.removeEventListener("removerendition",this.#W),this.#W=void 0),"function"==typeof e&&(this.#W=e,this.addEventListener("removerendition",e))}get onchange(){return this.#N}set onchange(e){this.#N&&(this.removeEventListener("change",this.#N),this.#N=void 0),"function"==typeof e&&(this.#N=e,this.addEventListener("change",e))}}class v${src;id;bitrate;codec;#B=!1;get selected(){return this.#B}set selected(e){if(this.#B!==e){var t;let i;this.#B=e,t=this,(i=vL(t).media?.deref()?.audioRenditions)&&!vL(i).changeRequested&&(vL(i).changeRequested=!0,queueMicrotask(()=>{delete vL(i).changeRequested,vL(t).track.enabled&&i.dispatchEvent(new Event("change"))}))}}}function vq(e,t){let i=e.audioTracks;vL(t).media=new WeakRef(e),vL(t).renditionSet||(vL(t).renditionSet=new Set);let a=vL(i).trackSet;a.add(t);let r=a.size-1;r in vF.prototype||Object.defineProperty(vF.prototype,r,{get(){return[...vL(this).trackSet][r]}}),queueMicrotask(()=>{i.dispatchEvent(new vI("addtrack",{track:t}))})}function vV(e){let t=vL(e).media?.deref()?.audioTracks;t&&(vL(t).trackSet.delete(e),queueMicrotask(()=>{t.dispatchEvent(new vI("removetrack",{track:e}))}))}class vF extends EventTarget{#O;#P;#N;constructor(){super(),vL(this).trackSet=new Set}get #U(){return vL(this).trackSet}[Symbol.iterator](){return this.#U.values()}get length(){return this.#U.size}getTrackById(e){return[...this.#U].find(t=>t.id===e)??null}get onaddtrack(){return this.#O}set onaddtrack(e){this.#O&&(this.removeEventListener("addtrack",this.#O),this.#O=void 0),"function"==typeof e&&(this.#O=e,this.addEventListener("addtrack",e))}get onremovetrack(){return this.#P}set onremovetrack(e){this.#P&&(this.removeEventListener("removetrack",this.#P),this.#P=void 0),"function"==typeof e&&(this.#P=e,this.addEventListener("removetrack",e))}get onchange(){return this.#N}set onchange(e){this.#N&&(this.removeEventListener("change",this.#N),this.#N=void 0),"function"==typeof e&&(this.#N=e,this.addEventListener("change",e))}}class vK{id;kind;label="";language="";sourceBuffer;#$=!1;addRendition(e,t,i){var a;let r,n,s,o=new v$;return o.src=e,o.codec=t,o.bitrate=i,a=this,r=vL(a).media?.deref()?.audioRenditions,vL(o).media=vL(a).media,vL(o).track=a,(n=vL(a).renditionSet).add(o),(s=n.size-1)in vB.prototype||Object.defineProperty(vB.prototype,s,{get(){return vW(this)[s]}}),queueMicrotask(()=>{r&&a.enabled&&r.dispatchEvent(new vO("addrendition",{rendition:o}))}),o}removeRendition(e){let t,i;t=vL(e).media?.deref()?.audioRenditions,i=vL(e).track,vL(i).renditionSet.delete(e),queueMicrotask(()=>{let i=vL(e).track;t&&i.enabled&&t.dispatchEvent(new vO("removerendition",{rendition:e}))})}get enabled(){return this.#$}set enabled(e){if(this.#$!==e){let t;this.#$=e,(t=vL(this).media?.deref()?.audioTracks)&&!vL(t).changeRequested&&(vL(t).changeRequested=!0,queueMicrotask(()=>{delete vL(t).changeRequested,t.dispatchEvent(new Event("change"))}))}}}let vj=vz(globalThis.HTMLMediaElement,"video"),vG=vz(globalThis.HTMLMediaElement,"audio");function vY(e){if(!e?.prototype)return e;let t=vz(e,"video");(!t||`${t}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"videoTracks",{get(){var e=this;let t=vL(e).videoTracks;if(!t&&(t=new vD,vL(e).videoTracks=t,vj)){let i=vj.call(e.nativeEl??e);for(let t of i)vx(e,t);i.addEventListener("change",()=>{t.dispatchEvent(new Event("change"))}),i.addEventListener("addtrack",a=>{if([...t].some(e=>e instanceof vH)){for(let e of i)vM(e);return}vx(e,a.track)}),i.addEventListener("removetrack",e=>{vM(e.track)})}return t}});let i=vz(e,"audio");(!i||`${i}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"audioTracks",{get(){var e=this;let t=vL(e).audioTracks;if(!t&&(t=new vF,vL(e).audioTracks=t,vG)){let i=vG.call(e.nativeEl??e);for(let t of i)vq(e,t);i.addEventListener("change",()=>{t.dispatchEvent(new Event("change"))}),i.addEventListener("addtrack",a=>{if([...t].some(e=>e instanceof vK)){for(let e of i)vV(e);return}vq(e,a.track)}),i.addEventListener("removetrack",e=>{vV(e.track)})}return t}}),"addVideoTrack"in e.prototype||(e.prototype.addVideoTrack=function(e,t="",i=""){let a=new vH;return a.kind=e,a.label=t,a.language=i,vx(this,a),a}),"removeVideoTrack"in e.prototype||(e.prototype.removeVideoTrack=vM),"addAudioTrack"in e.prototype||(e.prototype.addAudioTrack=function(e,t="",i=""){let a=new vK;return a.kind=e,a.label=t,a.language=i,vq(this,a),a}),"removeAudioTrack"in e.prototype||(e.prototype.removeAudioTrack=vV),"videoRenditions"in e.prototype||Object.defineProperty(e.prototype,"videoRenditions",{get(){return a(this)}});let a=e=>{let t=vL(e).videoRenditions;return t||(vL(t=new vN).media=new WeakRef(e),vL(e).videoRenditions=t),t};"audioRenditions"in e.prototype||Object.defineProperty(e.prototype,"audioRenditions",{get(){return r(this)}});let r=e=>{let t=vL(e).audioRenditions;return t||(vL(t=new vB).media=new WeakRef(e),vL(e).audioRenditions=t),t};return e}function vz(e,t){if(e?.prototype)return Object.getOwnPropertyDescriptor(e.prototype,`${t}Tracks`)?.get}var vQ=e=>{throw TypeError(e)},vZ=(e,t,i)=>t.has(e)||vQ("Cannot "+i),vX=(e,t,i)=>(vZ(e,t,"read from private field"),i?i.call(e):t.get(e)),vJ=(e,t,i)=>t.has(e)?vQ("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),v0=(e,t,i,a)=>(vZ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),v1=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("u"<typeof DocumentFragment){class e extends v1{}globalThis.DocumentFragment=e}var v2,v3,v4=class extends v1{},v5=class{constructor(e,t={}){vJ(this,v3),v0(this,v3,null==t?void 0:t.detail)}get detail(){return vX(this,v3)}initCustomEvent(){}};v3=new WeakMap;var v9={document:{createElement:function(e,t){return new v4}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(v4)},CustomEvent:v5,EventTarget:v1,HTMLElement:v4,HTMLVideoElement:class extends v1{}},v8="u"<typeof window||void 0===globalThis.customElements,v6=v8?v9:globalThis;v8&&v9.document;var v7,be=class extends vS(vY(vd)){constructor(){super(...arguments),vJ(this,v7)}get autoplay(){let e=this.getAttribute("autoplay");return null!==e&&(""===e||e)}set autoplay(e){e!==this.autoplay&&(e?this.setAttribute("autoplay","string"==typeof e?e:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var e;return null!=(e=vX(this,v7))?e:this.muxCastCustomData}set castCustomData(e){v0(this,v7,e)}};v7=new WeakMap,v6.customElements.get("mux-video")||(v6.customElements.define("mux-video",be),v6.MuxVideoElement=be);var bt=e=>{throw TypeError(e)},bi=(e,t,i)=>t.has(e)||bt("Cannot "+i),ba=(e,t,i)=>(bi(e,t,"read from private field"),i?i.call(e):t.get(e)),br=(e,t,i)=>t.has(e)?bt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),bn=(e,t,i,a)=>(bi(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),bs=(e,t,i)=>(bi(e,t,"access private method"),i),bo=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("u"<typeof DocumentFragment){class e extends bo{}globalThis.DocumentFragment=e}var bl,bd=class extends bo{},bu=class{constructor(e,t={}){br(this,bl),bn(this,bl,null==t?void 0:t.detail)}get detail(){return ba(this,bl)}initCustomEvent(){}};bl=new WeakMap;var bc={document:{createElement:function(e,t){return new bd}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(bd)},CustomEvent:bu,EventTarget:bo,HTMLElement:bd,HTMLVideoElement:class extends bo{}},bh="u"<typeof window||void 0===globalThis.customElements,bm=bh?bc:globalThis,bp=bh?bc.document:globalThis.document;function bv(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function bb(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function bg(e){return e.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase())}function bf(e){if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}function bE(e){let t=(function(e){let t={};for(let i in e)null!=e[i]&&(t[i]=e[i]);return new URLSearchParams(t)})(e).toString();return t?"?"+t:""}var by,b_,bk,bT=(e,t)=>!!e&&!!t&&(!!e.contains(t)||bT(e,t.getRootNode().host)),bw="mux.com",bA=(()=>{try{return"3.14.1"}catch{}return"UNKNOWN"})(),bC=e=>{if(e){if([lP,lO].includes(e))return e;if(null!=e&&e.includes("live"))return lP}},bS={crossorigin:"crossOrigin",playsinline:"playsInline"},bI=class{constructor(e,t){br(this,by),br(this,b_),br(this,bk,[]),bn(this,by,e),bn(this,b_,t)}[Symbol.iterator](){return ba(this,bk).values()}get length(){return ba(this,bk).length}get value(){var e;return null!=(e=ba(this,bk).join(" "))?e:""}set value(e){var t;e!==this.value&&(bn(this,bk,[]),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return ba(this,bk)[e]}values(){return ba(this,bk).values()}keys(){return ba(this,bk).keys()}forEach(e){ba(this,bk).forEach(e)}add(...e){var t,i;e.forEach(e=>{this.contains(e)||ba(this,bk).push(e)}),(""!==this.value||null!=(t=ba(this,by))&&t.hasAttribute(`${ba(this,b_)}`))&&null!=(i=ba(this,by))&&i.setAttribute(`${ba(this,b_)}`,`${this.value}`)}remove(...e){var t;e.forEach(e=>{ba(this,bk).splice(ba(this,bk).indexOf(e),1)}),null==(t=ba(this,by))||t.setAttribute(`${ba(this,b_)}`,`${this.value}`)}contains(e){return ba(this,bk).includes(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){this.remove(e),this.add(t)}};by=new WeakMap,b_=new WeakMap,bk=new WeakMap;var bR=`[mux-player ${bA}]`;function bL(...e){console.warn(bR,...e)}function bx(...e){console.error(bR,...e)}function bM(e){var t;let i=null!=(t=e.message)?t:"";e.context&&(i+=` ${e.context}`),e.file&&(i+=` ${l0("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),bL(i)}var bD={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},bO={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},bP=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),bN=[...Object.values(bD).filter(e=>bD.PLAYSINLINE!==e),...Object.values(bO)];function bU(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var bH=class extends bm.HTMLElement{static get observedAttributes(){return bN}constructor(){super()}attributeChangedCallback(e,t,i){var a,r;switch(e){case bO.MUTED:this.media&&(this.media.muted=null!=i,this.media.defaultMuted=null!=i);return;case bO.VOLUME:{let e=null!=(a=bf(i))?a:1;this.media&&(this.media.volume=e);return}case bO.PLAYBACKRATE:{let e=null!=(r=bf(i))?r:1;this.media&&(this.media.playbackRate=e,this.media.defaultPlaybackRate=e);return}}}play(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.play())?t:Promise.reject()}pause(){var e;null==(e=this.media)||e.pause()}load(){var e;null==(e=this.media)||e.load()}get media(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,t;return null==(t=null==(e=this.media)?void 0:e.paused)||t}get duration(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.duration)?t:NaN}get ended(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.ended)&&t}get buffered(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.buffered)?t:bP}get seekable(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.seekable)?t:bP}get readyState(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.readyState)?t:0}get videoWidth(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoWidth)?t:0}get videoHeight(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoHeight)?t:0}get currentSrc(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentSrc)?t:""}get currentTime(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentTime)?t:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.volume)?t:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.playbackRate)?t:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return null!=(e=bf(this.getAttribute(bO.PLAYBACKRATE)))?e:1}set defaultPlaybackRate(e){null!=e?this.setAttribute(bO.PLAYBACKRATE,`${e}`):this.removeAttribute(bO.PLAYBACKRATE)}get crossOrigin(){return bU(this,bD.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(bD.CROSSORIGIN,`${e}`)}get autoplay(){return null!=bU(this,bD.AUTOPLAY)}set autoplay(e){e?this.setAttribute(bD.AUTOPLAY,"string"==typeof e?e:""):this.removeAttribute(bD.AUTOPLAY)}get loop(){return null!=bU(this,bD.LOOP)}set loop(e){e?this.setAttribute(bD.LOOP,""):this.removeAttribute(bD.LOOP)}get muted(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.muted)&&t}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return null!=bU(this,bD.MUTED)}set defaultMuted(e){e?this.setAttribute(bD.MUTED,""):this.removeAttribute(bD.MUTED)}get playsInline(){return null!=bU(this,bD.PLAYSINLINE)}set playsInline(e){bx("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(bD.PRELOAD,e):this.removeAttribute(bD.PRELOAD)}},bW=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,bB=new WeakMap,b$=class e{constructor(e,t){this.element=e,this.type=t,this.element.addEventListener(this.type,this);let i=bB.get(this.element);i&&i.set(this.type,this)}set(e){if("function"==typeof e)this.handleEvent=e.bind(this.element);else if("object"==typeof e&&"function"==typeof e.handleEvent)this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let e=bB.get(this.element);e&&e.delete(this.type)}}static for(t){bB.has(t.element)||bB.set(t.element,new Map);let i=t.attributeName.slice(2),a=bB.get(t.element);return a&&a.has(i)?a.get(i):new e(t.element,i)}},bq=new Map,bV=new WeakMap,bF=new WeakMap,bK=class{constructor(e,t,i){this.strings=e,this.values=t,this.processor=i,this.stringsKey=this.strings.join("\x01")}get template(){if(bq.has(this.stringsKey))return bq.get(this.stringsKey);{let e=bp.createElement("template"),t=this.strings.length-1;return e.innerHTML=this.strings.reduce((e,i,a)=>e+i+(a<t?`{{ ${a} }}`:""),""),bq.set(this.stringsKey,e),e}}renderInto(e){var t;let i=this.template;if(bV.get(e)!==i){bV.set(e,i);let t=new rr(i,this.values,this.processor);bF.set(e,t),e instanceof rh?e.replace(...t.children):e.appendChild(t);return}let a=bF.get(e);null==(t=null==a?void 0:a.update)||t.call(a,this.values)}},bj={processCallback(e,t,i){var a;if(i)for(let[e,r]of t)e in i&&function(e,t){(function(e,t){if(e instanceof rc&&t instanceof Element){let i=e.element;return i[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),i[e.attributeName]=t),!0}return!1})(e,t)||function(e,t){if("boolean"==typeof t&&e instanceof rc){let i=e.attributeNamespace;return t!==e.element.hasAttributeNS(i,e.attributeName)&&(e.booleanValue=t),!0}return!1}(e,t)||e instanceof rc&&e.attributeName.startsWith("on")&&(b$.for(e).set(t),e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),1)||!1===t&&e instanceof rh&&(e.replace(""),1)||t instanceof bK&&e instanceof rh&&(t.renderInto(e),1)||t instanceof DocumentFragment&&e instanceof rh&&(t.childNodes.length&&e.replace(...t.childNodes),1)||function(e,t){if(e instanceof rc){let i=e.attributeNamespace,a=e.element.getAttributeNS(i,e.attributeName);return String(t)!==a&&(e.value=String(t))}e.value=String(t)}(e,t)}(r,null!=(a=i[e])?a:"")}};function bG(e,...t){return new bK(e,t,bj)}var bY=Object.values({TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",THUMB:"thumb",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",MENU_ITEM:"menu-item",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"}).join(", "),bz=e=>e.charAt(0).toUpperCase()+e.slice(1),bQ=(e,t)=>{let i=(e=>{if(e.muxCode){if(2403210===e.muxCode)return"403-expired-token.md";if(2412202===e.muxCode)return"403-malformatted-token.md";if([2403222,2403221].includes(e.muxCode))return"403-incorrect-aud-value.md";if(2403232===e.muxCode)return"403-playback-id-mismatch.md";if(2403201===e.muxCode)return"missing-signed-tokens.md";if(2404e3===e.muxCode)return"404-not-found.md";if(2412e3===e.muxCode)return"412-not-playable.md"}if(e.code){if(e.code===lx.MEDIA_ERR_NETWORK)return"";if(e.code===lx.MEDIA_ERR_DECODE)return"media-decode-error.md";if(e.code===lx.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""})(e);return{message:e.message,context:e.context,file:i}},bZ=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before,
    :host([videotitle]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}" exportparts="thumb">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <media-error-dialog slot="dialog" noautohide></media-error-dialog>
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,bX=bp.createElement("template");"innerHTML"in bX&&(bX.innerHTML=bZ);var bJ,b0,b1=class extends rD{};b1.template=null==(b0=null==(bJ=bX.content)?void 0:bJ.children)?void 0:b0[0],bm.customElements.get("media-theme-gerwig")||bm.customElements.define("media-theme-gerwig",b1);var b2={SRC:"src",POSTER:"poster"},b3={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",FULLSCREEN_ELEMENT:"fullscreen-element",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",NO_MUTED_PREF:"no-muted-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended"},b4=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","nomutedpref","proudlydisplaymuxbadge"],b5=iY.formatErrorMessage;function b9(e){let t=e.videoTitle?{video_title:e.videoTitle}:{};return e.getAttributeNames().filter(e=>e.startsWith("metadata-")).reduce((t,i)=>{let a=e.getAttribute(i);return null!==a&&(t[i.replace(/^metadata-/,"").replace(/-/g,"_")]=a),t},t)}iY.formatErrorMessage=e=>{var t,i,a;if(e instanceof lx){let r=((e,t=!1)=>({title:((e,t=!1)=>{var i,a;if(e.muxCode){let r=bz(null!=(i=e.errorCategory)?i:"video"),n=lL(null!=(a=e.errorCategory)?a:lR);if(2000002===e.muxCode)return l0("Your device appears to be offline",t);if(2000003===e.muxCode)return l0("Reconnecting...",t);if(2403210===e.muxCode)return l0("{category} URL has expired",t).format({category:r});if([2403232,2403222,2403221,2412202].includes(e.muxCode))return l0("{category} URL is formatted incorrectly",t).format({category:r});if(2403201===e.muxCode)return l0("Invalid {categoryName} URL",t).format({categoryName:n});if(2404e3===e.muxCode)return l0("{category} does not exist",t).format({category:r});if(2412e3===e.muxCode){let i="live"===e.streamType?"Live stream":"Video";return l0("{mediaType} is not currently available",t).format({mediaType:i})}}if(e.code){if(e.code===lx.MEDIA_ERR_NETWORK)return l0("Network Error",t);if(e.code===lx.MEDIA_ERR_DECODE)return l0("Media Error",t);if(e.code===lx.MEDIA_ERR_SRC_NOT_SUPPORTED)return l0("Source Not Supported",t)}return l0("Error",t)})(e,t).toString(),message:((e,t=!1)=>{var i,a;if(e.reload)return"";if(e.muxCode){let r=bz(null!=(i=e.errorCategory)?i:"video"),n=lL(null!=(a=e.errorCategory)?a:lR);return 2000002===e.muxCode?l0("Check your internet connection and try reloading this video.",t):2000003===e.muxCode?l0("Your connection was interrupted. Attempting to resume playback...",t):2403210===e.muxCode?l0("The video’s secured {tokenNamePrefix}-token has expired.",t).format({tokenNamePrefix:n}):2403232===e.muxCode?l0("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",t).format({tokenNamePrefix:n}):2412202===e.muxCode?l0("{category} URL is formatted incorrectly",t).format({category:r}):[2403222,2403221].includes(e.muxCode)?l0("The {tokenNamePrefix}-token is formatted with incorrect information.",t).format({tokenNamePrefix:n}):[2403201,24e5].includes(e.muxCode)?l0("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",t).format({tokenNamePrefix:n}):2404e3===e.muxCode?"":e.message}return e.code&&(e.code===lx.MEDIA_ERR_NETWORK||e.code===lx.MEDIA_ERR_DECODE||e.code===lx.MEDIA_ERR_SRC_NOT_SUPPORTED),e.message})(e,t).toString(),reload:!!e.reload}))(e,!1);return null!=r&&r.reload?`
      ${null!=r&&r.title?`<h3>${bv(r.title)}</h3>`:""}
      <p>Try again later or <a href="#" data-mux-reload style="color: #4a90e2;">click here to retry</a></p>
    `:`
      ${null!=r&&r.title?`<h3>${bv(r.title)}</h3>`:""}
      ${null!=r&&r.message||null!=r&&r.linkUrl?`<p>
        ${bv(null!=(t=null==r?void 0:r.message)?t:"")}
        ${null!=r&&r.linkUrl?`<a
              href="${bv(r.linkUrl)}"
              target="_blank"
              rel="external noopener"
              aria-label="${bv(null!=(i=r.linkText)?i:"")} ${l0("(opens in a new window)")}"
              >${bv(null!=(a=r.linkText)?a:r.linkUrl)}</a
            >`:""}
      </p>`:""}
    `}return b5(e)};var b8,b6,b7,ge,gt,gi,ga,gr,gn,gs,go,gl,gd,gu,gc,gh,gm,gp,gv,gb,gg,gf,gE,gy,g_=Object.values(vs),gk=Object.values(b2),gT=Object.values(b3),gw="mux-player",gA={isDialogOpen:!1},gC={redundant_streams:!0},gS=class extends bH{constructor(){super(),br(this,gh),br(this,b8),br(this,b6,!1),br(this,b7,{}),br(this,ge,!0),br(this,gt,new bI(this,"hotkeys")),br(this,gi),br(this,ga,()=>bs(this,gh,gb).call(this)),br(this,gr,()=>bs(this,gh,gb).call(this)),br(this,gn,()=>bs(this,gh,gb).call(this)),br(this,gs,e=>{e.composedPath().find(e=>{var t;return null==(t=null==e?void 0:e.hasAttribute)?void 0:t.call(e,"data-mux-reload")})&&(e.preventDefault(),window.location.reload())}),br(this,go,e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&bs(this,gh,gv).call(this,{isDialogOpen:!1})}),br(this,gl,e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&(bT(this,bp.activeElement)||e.preventDefault())}),br(this,gd),br(this,gu,{...gA}),br(this,gc,e=>{var t;let i=null==(t=this.media)?void 0:t.error;if(!(i instanceof lx)){let{message:e,code:t}=null!=i?i:{};i=new lx(e,t)}if(!(null!=i&&i.fatal)){bL(i),i.data&&bL(`${i.name} data:`,i.data);return}let a=bQ(i,!1);a.message&&bM(a),bx(i),i.data&&bx(`${i.name} data:`,i.data),bs(this,gh,gv).call(this,{isDialogOpen:!0})}),bn(this,b8,pl()),this.attachShadow({mode:"open"}),bs(this,gh,gp).call(this),this.isConnected&&bs(this,gh,gm).call(this)}static get NAME(){return gw}static get VERSION(){return bA}static get observedAttributes(){var e;return[...null!=(e=bH.observedAttributes)?e:[],...gk,...g_,...gT]}setAttribute(e,t){super.setAttribute(e,t),e.startsWith("metadata-")&&this.media&&(this.media.metadata=b9(this))}removeAttribute(e){super.removeAttribute(e),e.startsWith("metadata-")&&this.media&&(this.media.metadata=b9(this))}get mediaTheme(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("media-theme")}get mediaController(){var e,t;return null==(t=null==(e=this.mediaTheme)?void 0:e.shadowRoot)?void 0:t.querySelector("media-controller")}connectedCallback(){bs(this,gh,gm).call(this);let e=this.media;e&&(e.metadata=b9(this))}disconnectedCallback(){var e,t,i,a,r,n,s,o,l,d;null==(e=ba(this,gi))||e.disconnect(),null==(t=this.media)||t.removeEventListener("streamtypechange",ba(this,ga)),null==(i=this.media)||i.removeEventListener("loadstart",ba(this,gr)),this.removeEventListener("error",ba(this,gc)),this.removeEventListener("click",ba(this,gs)),null==(a=this.mediaTheme)||a.removeEventListener("close",ba(this,go)),null==(r=this.mediaTheme)||r.removeEventListener("focusin",ba(this,gl)),this.media&&(this.media.errorTranslator=void 0),null==(s=null==(n=this.media)?void 0:n.textTracks)||s.removeEventListener("addtrack",ba(this,gn)),null==(l=null==(o=this.media)?void 0:o.textTracks)||l.removeEventListener("removetrack",ba(this,gn)),null==(d=ba(this,gd))||d.call(this),bn(this,gd,void 0),bn(this,b6,!1)}attributeChangedCallback(e,t,i){var a;switch(bs(this,gh,gm).call(this),super.attributeChangedCallback(e,t,i),e){case b3.HOTKEYS:ba(this,gt).value=i;break;case b3.THUMBNAIL_TIME:null!=i&&this.tokens.thumbnail&&bL(l0("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break;case b3.THUMBNAIL_TOKEN:if(i){let e=lJ(i);if(e){let{aud:t}=e;"t"!==t&&bL(l0("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:"t",tokenNamePrefix:"thumbnail"}))}}break;case b3.STORYBOARD_TOKEN:if(i){let e=lJ(i);if(e){let{aud:t}=e;"s"!==t&&bL(l0("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:"s",tokenNamePrefix:"storyboard"}))}}break;case b3.DRM_TOKEN:if(i){let e=lJ(i);if(e){let{aud:t}=e;"d"!==t&&bL(l0("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:"d",tokenNamePrefix:"drm"}))}}break;case vs.PLAYBACK_ID:null!=i&&i.includes("?token")&&bx(l0("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break;case vs.STREAM_TYPE:i&&![lP,lO,lN].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?1/0:0:bM({file:"invalid-stream-type.md",message:l0("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):i===lP?null==this.getAttribute(b3.TARGET_LIVE_WINDOW)&&(this.targetLiveWindow=0):this.targetLiveWindow=NaN;break;case b3.FULLSCREEN_ELEMENT:if(null!=i||i!==t){let e=bp.getElementById(i),t=null==e?void 0:e.querySelector("mux-player");this.mediaController&&e&&t&&(this.mediaController.fullscreenElement=e)}break;case vs.CAP_RENDITION_TO_PLAYER_SIZE:(null==i||i!==t)&&(this.capRenditionToPlayerSize=null!=i||void 0);break;case vs.MAX_RECONNECT_RETRIES:(null==i||i!==t)&&(this.maxReconnectRetries=Number(i))}[vs.PLAYBACK_ID,b2.SRC,b3.PLAYBACK_TOKEN].includes(e)&&t!==i&&bn(this,gu,{...ba(this,gu),...gA}),bs(this,gh,gb).call(this,{[null!=(a=bS[e])?a:bg(e)]:i})}async requestFullscreen(e){var t;if(!(!this.mediaController||this.mediaController.hasAttribute(h.MEDIA_IS_FULLSCREEN)))return null==(t=this.mediaController)||t.dispatchEvent(new bm.CustomEvent(l.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var i;null==(i=this.mediaController)||i.addEventListener(m.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}async exitFullscreen(){var e;if(!(!this.mediaController||!this.mediaController.hasAttribute(h.MEDIA_IS_FULLSCREEN)))return null==(e=this.mediaController)||e.dispatchEvent(new bm.CustomEvent(l.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var i;null==(i=this.mediaController)||i.addEventListener(m.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}get preferCmcd(){var e;return null!=(e=this.getAttribute(vs.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?lW.includes(e)?this.setAttribute(vs.PREFER_CMCD,e):bL(`Invalid value for preferCmcd. Must be one of ${lW.join()}`):this.removeAttribute(vs.PREFER_CMCD))}get hasPlayed(){var e,t;return null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(h.MEDIA_HAS_PLAYED))&&t}get inLiveWindow(){var e;return null==(e=this.mediaController)?void 0:e.hasAttribute(h.MEDIA_TIME_IS_LIVE)}get _hls(){var e;return null==(e=this.media)?void 0:e._hls}get mux(){var e;return null==(e=this.media)?void 0:e.mux}get theme(){var e;return null!=(e=this.getAttribute(b3.THEME))?e:"gerwig"}set theme(e){this.setAttribute(b3.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let i of e.getAttributeNames()){if(b4.includes(i))continue;let a=e.getAttribute(i);t[bg(i)]=""===a||a}return t}set themeProps(e){var t,i;bs(this,gh,gm).call(this);let a={...this.themeProps,...e};for(let r in a){if(b4.includes(r))continue;let a=null==e?void 0:e[r];"boolean"==typeof a||null==a?null==(t=this.mediaTheme)||t.toggleAttribute(bb(r),!!a):null==(i=this.mediaTheme)||i.setAttribute(bb(r),a)}}get playbackId(){var e;return null!=(e=this.getAttribute(vs.PLAYBACK_ID))?e:void 0}set playbackId(e){e?this.setAttribute(vs.PLAYBACK_ID,e):this.removeAttribute(vs.PLAYBACK_ID)}get src(){var e,t;return this.playbackId?null!=(e=gI(this,b2.SRC))?e:void 0:null!=(t=this.getAttribute(b2.SRC))?t:void 0}set src(e){e?this.setAttribute(b2.SRC,e):this.removeAttribute(b2.SRC)}get poster(){var e;let t=this.getAttribute(b2.POSTER);if(null!=t)return t;let{tokens:i}=this;return i.playback&&!i.thumbnail?void bL("Missing expected thumbnail token. No poster image will be shown"):this.playbackId&&!this.audio?((e,{token:t,customDomain:i=bw,thumbnailTime:a,programTime:r}={})=>{var n;let s=null==t?a:void 0,{aud:o}=null!=(n=lJ(t))?n:{};if(!(t&&"t"!==o))return`https://image.${i}/${e}/thumbnail.webp${bE({token:t,time:s,program_time:r})}`})(this.playbackId,{customDomain:this.customDomain,thumbnailTime:null!=(e=this.thumbnailTime)?e:this.startTime,programTime:this.programStartTime,token:i.thumbnail}):void 0}set poster(e){e||""===e?this.setAttribute(b2.POSTER,e):this.removeAttribute(b2.POSTER)}get storyboardSrc(){var e;return null!=(e=this.getAttribute(b3.STORYBOARD_SRC))?e:void 0}set storyboardSrc(e){e?this.setAttribute(b3.STORYBOARD_SRC,e):this.removeAttribute(b3.STORYBOARD_SRC)}get storyboard(){let{tokens:e}=this;return this.storyboardSrc&&!e.storyboard?this.storyboardSrc:this.audio||!this.playbackId||!this.streamType||[lP,lN].includes(this.streamType)||e.playback&&!e.storyboard?void 0:((e,{token:t,customDomain:i=bw,programStartTime:a,programEndTime:r}={})=>{var n;let{aud:s}=null!=(n=lJ(t))?n:{};if(!(t&&"s"!==s))return`https://image.${i}/${e}/storyboard.vtt${bE({token:t,format:"webp",program_start_time:a,program_end_time:r})}`})(this.playbackId,{customDomain:this.customDomain,token:e.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(b3.AUDIO)}set audio(e){e?this.setAttribute(b3.AUDIO,""):this.removeAttribute(b3.AUDIO)}get hotkeys(){return ba(this,gt)}get nohotkeys(){return this.hasAttribute(b3.NOHOTKEYS)}set nohotkeys(e){e?this.setAttribute(b3.NOHOTKEYS,""):this.removeAttribute(b3.NOHOTKEYS)}get thumbnailTime(){return bf(this.getAttribute(b3.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(b3.THUMBNAIL_TIME,`${e}`)}get videoTitle(){var e,t;return null!=(t=null!=(e=this.getAttribute(b3.VIDEO_TITLE))?e:this.getAttribute(b3.TITLE))?t:""}set videoTitle(e){e!==this.videoTitle&&(e?this.setAttribute(b3.VIDEO_TITLE,e):this.removeAttribute(b3.VIDEO_TITLE))}get placeholder(){var e;return null!=(e=gI(this,b3.PLACEHOLDER))?e:""}set placeholder(e){this.setAttribute(b3.PLACEHOLDER,`${e}`)}get primaryColor(){var e,t;let i=this.getAttribute(b3.PRIMARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=bm.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_primary-color"))?void 0:t.trim()))return i}set primaryColor(e){this.setAttribute(b3.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,t;let i=this.getAttribute(b3.SECONDARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=bm.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_secondary-color"))?void 0:t.trim()))return i}set secondaryColor(e){this.setAttribute(b3.SECONDARY_COLOR,`${e}`)}get accentColor(){var e,t;let i=this.getAttribute(b3.ACCENT_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=bm.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_accent-color"))?void 0:t.trim()))return i}set accentColor(e){this.setAttribute(b3.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(b3.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(b3.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(b3.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(b3.PLAYBACK_RATES))return this.getAttribute(b3.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){e?this.setAttribute(b3.PLAYBACK_RATES,e.join(" ")):this.removeAttribute(b3.PLAYBACK_RATES)}get forwardSeekOffset(){var e;return null!=(e=bf(this.getAttribute(b3.FORWARD_SEEK_OFFSET)))?e:10}set forwardSeekOffset(e){this.setAttribute(b3.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return null!=(e=bf(this.getAttribute(b3.BACKWARD_SEEK_OFFSET)))?e:10}set backwardSeekOffset(e){this.setAttribute(b3.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(b3.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(b3.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(b3.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return bf(this.getAttribute(b3.DEFAULT_DURATION))}set defaultDuration(e){null==e?this.removeAttribute(b3.DEFAULT_DURATION):this.setAttribute(b3.DEFAULT_DURATION,`${e}`)}get playerInitTime(){return this.hasAttribute(vs.PLAYER_INIT_TIME)?bf(this.getAttribute(vs.PLAYER_INIT_TIME)):ba(this,b8)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(vs.PLAYER_INIT_TIME):this.setAttribute(vs.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=this.getAttribute(vs.PLAYER_SOFTWARE_NAME))?e:gw}get playerSoftwareVersion(){var e;return null!=(e=this.getAttribute(vs.PLAYER_SOFTWARE_VERSION))?e:bA}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(vs.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(vs.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(vs.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return null!=(e=this.getAttribute(vs.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(vs.MAX_RESOLUTION,e):this.removeAttribute(vs.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(vs.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(vs.MIN_RESOLUTION,e):this.removeAttribute(vs.MIN_RESOLUTION))}get maxAutoResolution(){var e;return null!=(e=this.getAttribute(vs.MAX_AUTO_RESOLUTION))?e:void 0}set maxAutoResolution(e){null==e?this.removeAttribute(vs.MAX_AUTO_RESOLUTION):this.setAttribute(vs.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return null!=(e=this.getAttribute(vs.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(vs.RENDITION_ORDER,e):this.removeAttribute(vs.RENDITION_ORDER))}get programStartTime(){return bf(this.getAttribute(vs.PROGRAM_START_TIME))}set programStartTime(e){null==e?this.removeAttribute(vs.PROGRAM_START_TIME):this.setAttribute(vs.PROGRAM_START_TIME,`${e}`)}get programEndTime(){return bf(this.getAttribute(vs.PROGRAM_END_TIME))}set programEndTime(e){null==e?this.removeAttribute(vs.PROGRAM_END_TIME):this.setAttribute(vs.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){return bf(this.getAttribute(vs.ASSET_START_TIME))}set assetStartTime(e){null==e?this.removeAttribute(vs.ASSET_START_TIME):this.setAttribute(vs.ASSET_START_TIME,`${e}`)}get assetEndTime(){return bf(this.getAttribute(vs.ASSET_END_TIME))}set assetEndTime(e){null==e?this.removeAttribute(vs.ASSET_END_TIME):this.setAttribute(vs.ASSET_END_TIME,`${e}`)}get extraSourceParams(){return this.hasAttribute(b3.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(b3.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[t,i])=>(e[t]=i,e),{}):gC}set extraSourceParams(e){null==e?this.removeAttribute(b3.EXTRA_SOURCE_PARAMS):this.setAttribute(b3.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){var e;return null!=(e=this.getAttribute(vs.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(vs.CUSTOM_DOMAIN,e):this.removeAttribute(vs.CUSTOM_DOMAIN))}get envKey(){var e;return null!=(e=gI(this,vs.ENV_KEY))?e:void 0}set envKey(e){this.setAttribute(vs.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(b3.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(b3.NO_VOLUME_PREF,""):this.removeAttribute(b3.NO_VOLUME_PREF)}get noMutedPref(){return this.hasAttribute(b3.NO_MUTED_PREF)}set noMutedPref(e){e?this.setAttribute(b3.NO_MUTED_PREF,""):this.removeAttribute(b3.NO_MUTED_PREF)}get debug(){return null!=gI(this,vs.DEBUG)}set debug(e){e?this.setAttribute(vs.DEBUG,""):this.removeAttribute(vs.DEBUG)}get disableTracking(){return null!=gI(this,vs.DISABLE_TRACKING)}set disableTracking(e){this.toggleAttribute(vs.DISABLE_TRACKING,!!e)}get disableCookies(){return null!=gI(this,vs.DISABLE_COOKIES)}set disableCookies(e){e?this.setAttribute(vs.DISABLE_COOKIES,""):this.removeAttribute(vs.DISABLE_COOKIES)}get streamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(vs.STREAM_TYPE))?t:null==(e=this.media)?void 0:e.streamType)?i:lN}set streamType(e){this.setAttribute(vs.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(b3.DEFAULT_STREAM_TYPE))?t:null==(e=this.mediaController)?void 0:e.getAttribute(b3.DEFAULT_STREAM_TYPE))?i:lO}set defaultStreamType(e){e?this.setAttribute(b3.DEFAULT_STREAM_TYPE,e):this.removeAttribute(b3.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,t;return this.hasAttribute(b3.TARGET_LIVE_WINDOW)?+this.getAttribute(b3.TARGET_LIVE_WINDOW):null!=(t=null==(e=this.media)?void 0:e.targetLiveWindow)?t:NaN}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(null==e?this.removeAttribute(b3.TARGET_LIVE_WINDOW):this.setAttribute(b3.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return null==(e=this.media)?void 0:e.liveEdgeStart}get startTime(){return bf(gI(this,vs.START_TIME))}set startTime(e){this.setAttribute(vs.START_TIME,`${e}`)}get initialBandwidthEstimateKbps(){return bf(gI(this,vs.INITIAL_BANDWIDTH_ESTIMATE_KBPS))}set initialBandwidthEstimateKbps(e){null==e?this.removeAttribute(vs.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(vs.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${e}`)}get initialEstimateSegments(){return bf(gI(this,vs.INITIAL_ESTIMATE_SEGMENTS))}set initialEstimateSegments(e){null==e?this.removeAttribute(vs.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(vs.INITIAL_ESTIMATE_SEGMENTS,`${e}`)}get minPreloadSegments(){return bf(gI(this,vs.MIN_PRELOAD_SEGMENTS))}set minPreloadSegments(e){null==e?this.removeAttribute(vs.MIN_PRELOAD_SEGMENTS):this.setAttribute(vs.MIN_PRELOAD_SEGMENTS,`${e}`)}get preferPlayback(){let e=this.getAttribute(vs.PREFER_PLAYBACK);if("mse"===e||e===lU)return e}set preferPlayback(e){e!==this.preferPlayback&&("mse"===e||e===lU?this.setAttribute(vs.PREFER_PLAYBACK,e):this.removeAttribute(vs.PREFER_PLAYBACK))}get metadata(){var e;return null==(e=this.media)?void 0:e.metadata}set metadata(e){(bs(this,gh,gm).call(this),this.media)?this.media.metadata={...b9(this),...e}:bx("underlying media element missing when trying to set metadata. metadata will not be set.")}get _hlsConfig(){var e;return null==(e=this.media)?void 0:e._hlsConfig}set _hlsConfig(e){(bs(this,gh,gm).call(this),this.media)?this.media._hlsConfig=e:bx("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.")}async addCuePoints(e){var t;return(bs(this,gh,gm).call(this),this.media)?null==(t=this.media)?void 0:t.addCuePoints(e):void bx("underlying media element missing when trying to addCuePoints. cuePoints will not be added.")}get activeCuePoint(){var e;return null==(e=this.media)?void 0:e.activeCuePoint}get cuePoints(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.cuePoints)?t:[]}addChapters(e){var t;return(bs(this,gh,gm).call(this),this.media)?null==(t=this.media)?void 0:t.addChapters(e):void bx("underlying media element missing when trying to addChapters. chapters will not be added.")}get activeChapter(){var e;return null==(e=this.media)?void 0:e.activeChapter}get chapters(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.chapters)?t:[]}getStartDate(){var e;return null==(e=this.media)?void 0:e.getStartDate()}get currentPdt(){var e;return null==(e=this.media)?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(b3.PLAYBACK_TOKEN),t=this.getAttribute(b3.DRM_TOKEN),i=this.getAttribute(b3.THUMBNAIL_TOKEN),a=this.getAttribute(b3.STORYBOARD_TOKEN);return{...ba(this,b7),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{},...null!=i?{thumbnail:i}:{},...null!=a?{storyboard:a}:{}}}set tokens(e){bn(this,b7,null!=e?e:{})}get playbackToken(){var e;return null!=(e=this.getAttribute(b3.PLAYBACK_TOKEN))?e:void 0}set playbackToken(e){this.setAttribute(b3.PLAYBACK_TOKEN,`${e}`)}get drmToken(){var e;return null!=(e=this.getAttribute(b3.DRM_TOKEN))?e:void 0}set drmToken(e){this.setAttribute(b3.DRM_TOKEN,`${e}`)}get thumbnailToken(){var e;return null!=(e=this.getAttribute(b3.THUMBNAIL_TOKEN))?e:void 0}set thumbnailToken(e){this.setAttribute(b3.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return null!=(e=this.getAttribute(b3.STORYBOARD_TOKEN))?e:void 0}set storyboardToken(e){this.setAttribute(b3.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,i,a){var r;let n=null==(r=this.media)?void 0:r.nativeEl;if(n)return l7(n,e,t,i,a)}removeTextTrack(e){var t;let i=null==(t=this.media)?void 0:t.nativeEl;if(i){let t;return void(null==(t=Array.prototype.find.call(i.querySelectorAll("track"),t=>t.track===e))||t.remove())}}get textTracks(){var e;return null==(e=this.media)?void 0:e.textTracks}get castReceiver(){var e;return null!=(e=this.getAttribute(b3.CAST_RECEIVER))?e:void 0}set castReceiver(e){e!==this.castReceiver&&(e?this.setAttribute(b3.CAST_RECEIVER,e):this.removeAttribute(b3.CAST_RECEIVER))}get castCustomData(){var e;return null==(e=this.media)?void 0:e.castCustomData}set castCustomData(e){this.media?this.media.castCustomData=e:bx("underlying media element missing when trying to set castCustomData. castCustomData will not be set.")}get noTooltips(){return this.hasAttribute(b3.NO_TOOLTIPS)}set noTooltips(e){e?this.setAttribute(b3.NO_TOOLTIPS,""):this.removeAttribute(b3.NO_TOOLTIPS)}get proudlyDisplayMuxBadge(){return this.hasAttribute(b3.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(e){e?this.setAttribute(b3.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(b3.PROUDLY_DISPLAY_MUX_BADGE)}get capRenditionToPlayerSize(){var e;return null==(e=this.media)?void 0:e.capRenditionToPlayerSize}set capRenditionToPlayerSize(e){this.media?this.media.capRenditionToPlayerSize=e:bx("underlying media element missing when trying to set capRenditionToPlayerSize")}get maxReconnectRetries(){var e;return null==(e=this.media)?void 0:e.maxReconnectRetries}set maxReconnectRetries(e){this.media?this.media.maxReconnectRetries=e:bx("underlying media element missing when trying to set maxReconnectRetries")}};function gI(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}b8=new WeakMap,b6=new WeakMap,b7=new WeakMap,ge=new WeakMap,gt=new WeakMap,gi=new WeakMap,ga=new WeakMap,gr=new WeakMap,gn=new WeakMap,gs=new WeakMap,go=new WeakMap,gl=new WeakMap,gd=new WeakMap,gu=new WeakMap,gc=new WeakMap,gh=new WeakSet,gm=function(){var e,t,i,a;if(!ba(this,b6)){bn(this,b6,!0),bs(this,gh,gb).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof bm.HTMLElement))throw""}catch{bx("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{bx("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof tJ))throw""}catch{bx("<media-controller> failed to upgrade!")}bs(this,gh,gg).call(this),bs(this,gh,gf).call(this),bs(this,gh,gE).call(this),bn(this,ge,null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(eD))||t),bs(this,gh,gy).call(this),null==(i=this.media)||i.addEventListener("streamtypechange",ba(this,ga)),null==(a=this.media)||a.addEventListener("loadstart",ba(this,gr)),this.media&&(this.media.metadata=b9(this))}},gp=function(){var e,t;try{null==(e=null==window?void 0:window.CSS)||e.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),null==(t=null==window?void 0:window.CSS)||t.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},gv=function(e){Object.assign(ba(this,gu),e),bs(this,gh,gb).call(this)},gb=function(e={}){var t,i,a,r,n,s,o,l,d,u,c,h,m,p,b,g,f,E,y,_,k,T,w,A,C,S,I,R,L,x,M,D,O,P,N,U,H,W,B,$,q,V,F,K,j,G,Y,z,Q,Z,X;let J,ee,et,ei;t={...ba(this,gu),...e},J={src:!this.playbackId&&this.src,playbackId:this.playbackId,hasSrc:!!this.playbackId||!!this.src||!!this.currentSrc,poster:this.poster,storyboard:(null==(i=this.media)?void 0:i.currentSrc)&&this.storyboard,storyboardSrc:this.getAttribute(b3.STORYBOARD_SRC),fullscreenElement:this.getAttribute(b3.FULLSCREEN_ELEMENT),placeholder:this.getAttribute("placeholder"),themeTemplate:function(e){var t,i;let a=e.theme;if(a){let r=null==(i=null==(t=e.getRootNode())?void 0:t.getElementById)?void 0:i.call(t,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=bm.customElements.get(a);if(null!=n&&n.template)return n.template}}(this),thumbnailTime:!this.tokens.thumbnail&&this.thumbnailTime,autoplay:this.autoplay,crossOrigin:this.crossOrigin,loop:this.loop,noHotKeys:this.hasAttribute(b3.NOHOTKEYS),hotKeys:this.getAttribute(b3.HOTKEYS),muted:this.muted,paused:this.paused,preload:this.preload,envKey:this.envKey,preferCmcd:this.preferCmcd,debug:this.debug,disableTracking:this.disableTracking,disableCookies:this.disableCookies,tokens:this.tokens,beaconCollectionDomain:this.beaconCollectionDomain,maxResolution:this.maxResolution,minResolution:this.minResolution,maxAutoResolution:this.maxAutoResolution,programStartTime:this.programStartTime,programEndTime:this.programEndTime,assetStartTime:this.assetStartTime,assetEndTime:this.assetEndTime,renditionOrder:this.renditionOrder,metadata:this.metadata,playerInitTime:this.playerInitTime,playerSoftwareName:this.playerSoftwareName,playerSoftwareVersion:this.playerSoftwareVersion,startTime:this.startTime,initialBandwidthEstimateKbps:this.initialBandwidthEstimateKbps,initialEstimateSegments:this.initialEstimateSegments,minPreloadSegments:this.minPreloadSegments,preferPlayback:this.preferPlayback,audio:this.audio,defaultStreamType:this.defaultStreamType,targetLiveWindow:this.getAttribute(vs.TARGET_LIVE_WINDOW),streamType:bC(this.getAttribute(vs.STREAM_TYPE)),primaryColor:this.getAttribute(b3.PRIMARY_COLOR),secondaryColor:this.getAttribute(b3.SECONDARY_COLOR),accentColor:this.getAttribute(b3.ACCENT_COLOR),forwardSeekOffset:this.forwardSeekOffset,backwardSeekOffset:this.backwardSeekOffset,defaultHiddenCaptions:this.defaultHiddenCaptions,defaultDuration:this.defaultDuration,defaultShowRemainingTime:this.defaultShowRemainingTime,hideDuration:(ee=null==(n=this.mediaController)?void 0:n.querySelector("media-time-display"))&&"none"===getComputedStyle(ee).getPropertyValue("--media-duration-display-display").trim(),playbackRates:this.getAttribute(b3.PLAYBACK_RATES),customDomain:null!=(a=this.getAttribute(vs.CUSTOM_DOMAIN))?a:void 0,title:this.getAttribute(b3.TITLE),videoTitle:null!=(r=this.getAttribute(b3.VIDEO_TITLE))?r:this.getAttribute(b3.TITLE),novolumepref:this.hasAttribute(b3.NO_VOLUME_PREF),nomutedpref:this.hasAttribute(b3.NO_MUTED_PREF),proudlyDisplayMuxBadge:this.hasAttribute(b3.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:this.castReceiver,disablePseudoEnded:this.hasAttribute(b3.DISABLE_PSEUDO_ENDED),maxReconnectRetries:this.maxReconnectRetries,capRenditionToPlayerSize:this.capRenditionToPlayerSize,...t,extraSourceParams:this.extraSourceParams},s=bG`
  <style>
    ${(e=>{let{tokens:t}=e;return t.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""})(J)}
    ${bW}
  </style>
  ${l=J,bG`
  <media-theme
    template="${l.themeTemplate||!1}"
    defaultstreamtype="${null!=(d=l.defaultStreamType)&&d}"
    hotkeys="${et=l.hotKeys?`${l.hotKeys}`:"","live"===bC(l.streamType)&&(et+=" noarrowleft noarrowright"),et||!1}"
    nohotkeys="${l.noHotKeys||!l.hasSrc||!1}"
    noautoseektolive="${!!(null!=(u=l.streamType)&&u.includes(lP))&&0!==l.targetLiveWindow}"
    novolumepref="${l.novolumepref||!1}"
    nomutedpref="${l.nomutedpref||!1}"
    disabled="${!l.hasSrc||l.isDialogOpen}"
    audio="${null!=(c=l.audio)&&c}"
    style="${null!=(X={"--media-primary-color":l.primaryColor,"--media-secondary-color":l.secondaryColor,"--media-accent-color":l.accentColor},ei="",Object.entries(X).forEach(([e,t])=>{null!=t&&(ei+=`${bb(e)}: ${t}; `)}),h=ei?ei.trim():void 0)&&h}"
    defaultsubtitles="${!l.defaultHiddenCaptions}"
    forwardseekoffset="${null!=(m=l.forwardSeekOffset)&&m}"
    backwardseekoffset="${null!=(p=l.backwardSeekOffset)&&p}"
    playbackrates="${null!=(b=l.playbackRates)&&b}"
    defaultshowremainingtime="${null!=(g=l.defaultShowRemainingTime)&&g}"
    defaultduration="${null!=(f=l.defaultDuration)&&f}"
    hideduration="${null!=(E=l.hideDuration)&&E}"
    title="${null!=(y=l.title)&&y}"
    videotitle="${null!=(_=l.videoTitle)&&_}"
    proudlydisplaymuxbadge="${null!=(k=l.proudlyDisplayMuxBadge)&&k}"
    exportparts="${bY}"
  >
    <mux-video
      slot="media"
      inert="${null!=(T=l.noHotKeys)&&T}"
      target-live-window="${null!=(w=l.targetLiveWindow)&&w}"
      stream-type="${null!=(A=bC(l.streamType))&&A}"
      crossorigin="${null!=(C=l.crossOrigin)?C:""}"
      playsinline
      autoplay="${null!=(S=l.autoplay)&&S}"
      muted="${null!=(I=l.muted)&&I}"
      loop="${null!=(R=l.loop)&&R}"
      preload="${null!=(L=l.preload)&&L}"
      debug="${null!=(x=l.debug)&&x}"
      prefer-cmcd="${null!=(M=l.preferCmcd)&&M}"
      disable-tracking="${null!=(D=l.disableTracking)&&D}"
      disable-cookies="${null!=(O=l.disableCookies)&&O}"
      prefer-playback="${null!=(P=l.preferPlayback)&&P}"
      start-time="${null!=l.startTime&&l.startTime}"
      initial-bandwidth-estimate-kbps="${null!=l.initialBandwidthEstimateKbps&&l.initialBandwidthEstimateKbps}"
      initial-estimate-segments="${null!=l.initialEstimateSegments&&l.initialEstimateSegments}"
      min-preload-segments="${null!=l.minPreloadSegments&&l.minPreloadSegments}"
      beacon-collection-domain="${null!=(N=l.beaconCollectionDomain)&&N}"
      player-init-time="${null!=(U=l.playerInitTime)&&U}"
      player-software-name="${null!=(H=l.playerSoftwareName)&&H}"
      player-software-version="${null!=(W=l.playerSoftwareVersion)&&W}"
      env-key="${null!=(B=l.envKey)&&B}"
      custom-domain="${null!=($=l.customDomain)&&$}"
      src="${l.src?l.src:!!l.playbackId&&pu(l)}"
      cast-src="${l.src?l.src:!!l.playbackId&&pu(l)}"
      cast-receiver="${null!=(q=l.castReceiver)&&q}"
      drm-token="${null!=(F=null==(V=l.tokens)?void 0:V.drm)&&F}"
      playback-token="${null!=(j=null==(K=l.tokens)?void 0:K.playback)&&j}"
      exportparts="video"
      disable-pseudo-ended="${null!=(G=l.disablePseudoEnded)&&G}"
      max-reconnect-retries="${null!=(Y=l.maxReconnectRetries)&&Y}"
      max-auto-resolution="${null!=(z=l.maxAutoResolution)&&z}"
      cap-rendition-to-player-size="${null!=(Q=l.capRenditionToPlayerSize)&&Q}"
    >
      ${l.storyboard?bG`<track label="thumbnails" default kind="metadata" src="${l.storyboard}" />`:bG``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${!!l.poster&&l.poster}"
        placeholdersrc="${null!=(Z=l.placeholder)&&Z}"
      ></media-poster-image>
    </slot>
  </media-theme>
`}
`,o=this.shadowRoot,s.renderInto(o)},gg=function(){let e=e=>{var t,i;if(!(null!=e&&e.startsWith("theme-")))return;let a=e.replace(/^theme-/,"");if(b4.includes(a))return;let r=this.getAttribute(e);null!=r?null==(t=this.mediaTheme)||t.setAttribute(a,r):null==(i=this.mediaTheme)||i.removeAttribute(a)};bn(this,gi,new MutationObserver(t=>{for(let{attributeName:i}of t)e(i)})),ba(this,gi).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},gf=function(){var e,t;this.addEventListener("error",ba(this,gc)),this.addEventListener("click",ba(this,gs)),null==(e=this.mediaTheme)||e.addEventListener("close",ba(this,go)),null==(t=this.mediaTheme)||t.addEventListener("focusin",ba(this,gl)),this.media&&(this.media.errorTranslator=(e={})=>{var t,i,a;if(!((null==(t=this.media)?void 0:t.error)instanceof lx))return e;let r=bQ(null==(i=this.media)?void 0:i.error,!1);return{player_error_code:null==(a=this.media)?void 0:a.error.code,player_error_message:r.message?String(r.message):e.player_error_message,player_error_context:r.context?String(r.context):e.player_error_context}})},gE=function(){var e,t,i,a;null==(t=null==(e=this.media)?void 0:e.textTracks)||t.addEventListener("addtrack",ba(this,gn)),null==(a=null==(i=this.media)?void 0:i.textTracks)||a.addEventListener("removetrack",ba(this,gn))},gy=function(){var e,t;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===lP&&!this.secondaryColor&&this.offsetWidth>=800,n=(e,t,i=!1)=>{r()||Array.from(e&&e.activeCues||[]).forEach(e=>{if(!(!e.snapToLines||e.line<-5||e.line>=0&&e.line<10))if(!t||this.paused){let t=e.text.split(`
`).length,r=-3;this.streamType===lP&&(r=-2);let n=r-t;if(e.line===n&&!i)return;a.has(e)||a.set(e,e.line),e.line=n}else setTimeout(()=>{e.line=a.get(e)||"auto"},500)})},s=()=>{var e,t;n(i,null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(eD))&&t)},o=()=>{var e,t;let a=Array.from((null==(t=null==(e=this.mediaController)?void 0:e.media)?void 0:t.textTracks)||[]).filter(e=>["subtitles","captions"].includes(e.kind)&&"showing"===e.mode)[0];a!==i&&(null==i||i.removeEventListener("cuechange",s)),null==(i=a)||i.addEventListener("cuechange",s),n(i,ba(this,ge))};o(),null==(e=this.textTracks)||e.addEventListener("change",o),null==(t=this.textTracks)||t.addEventListener("addtrack",o);let l=()=>{var e,t;let a=null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(eD))||t;ba(this,ge)!==a&&(bn(this,ge,a),n(i,ba(this,ge)))};this.addEventListener("userinactivechange",l),bn(this,gd,()=>{var e,t;null==i||i.removeEventListener("cuechange",s),null==(e=this.textTracks)||e.removeEventListener("change",o),null==(t=this.textTracks)||t.removeEventListener("addtrack",o),this.removeEventListener("userinactivechange",l)})};var gR=e=>{throw TypeError(e)},gL=(e,t,i)=>t.has(e)||gR("Cannot "+i),gx=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("u"<typeof DocumentFragment){class e extends gx{}globalThis.DocumentFragment=e}var gM,gD=class extends gx{},gO=class{constructor(e,t={}){((e,t,i)=>t.has(e)?gR("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i))(this,gM),((e,t,i,a)=>(gL(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,gM,null==t?void 0:t.detail)}get detail(){let e,t;return gL(this,e=gM,"read from private field"),t?t.call(this):e.get(this)}initCustomEvent(){}};gM=new WeakMap;var gP={document:{createElement:function(e,t){return new gD}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(gD)},CustomEvent:gO,EventTarget:gx,HTMLElement:gD,HTMLVideoElement:class extends gx{}},gN="u"<typeof window||void 0===globalThis.customElements,gU=gN?gP:globalThis;gN&&gP.document,gU.customElements.get("mux-player")||(gU.customElements.define("mux-player",gS),gU.MuxPlayerElement=gS);var gH=parseInt(nz.version)>=19,gW={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"};function gB(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}var g$=Object.prototype.hasOwnProperty,gq=(e,t,i)=>!((e,t)=>{if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(Array.isArray(e))return!!Array.isArray(t)&&e.length===t.length&&e.some((e,i)=>t[i]===e);let i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(let a=0;a<i.length;a++)if(!g$.call(t,i[a])||!Object.is(e[i[a]],t[i[a]]))return!1;return!0})(t,e[i]),gV=(e,t,i)=>{e[i]=t},gF=(e,t,i,a=gV,r=gq)=>(0,nz.useEffect)(()=>{let n=null==i?void 0:i.current;n&&r(n,t,e)&&a(n,t,e)},[null==i?void 0:i.current,t]),gK=(()=>{try{return"3.14.1"}catch{}return"UNKNOWN"})(),gj=(e,t,i)=>(0,nz.useEffect)(()=>{let a=null==t?void 0:t.current;if(a&&i)return a.addEventListener(e,i),()=>{a.removeEventListener(e,i)}},[null==t?void 0:t.current,i,e]),gG=nz.forwardRef(({children:e,...t},i)=>nz.createElement("mux-player",{suppressHydrationWarning:!0,...((e={})=>{let{ref:t,...i}=e;return Object.entries(i).reduce((e,[t,i])=>{let a=((e,t)=>{if(!(!gH&&"boolean"==typeof t&&!t)){let i,a;if(i=e,null!=(a=gW)&&i in a)return gW[e];if(void 0!==t)return/[A-Z]/.test(e)?e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`):e}})(t,i);if(!a)return e;let r=gH||"boolean"!=typeof i?i:"";return e[a]=r,e},{})})(t),ref:i},e)),gY=nz.forwardRef((e,t)=>{var i;let a=(0,nz.useRef)(null),r=function(...e){return nz.useCallback(function(...e){return t=>{let i=!1,a=e.map(e=>{let a=gB(e,t);return i||"function"!=typeof a||(i=!0),a});if(i)return()=>{for(let t=0;t<a.length;t++){let i=a[t];"function"==typeof i?i():gB(e[t],null)}}}}(...e),e)}(a,t),[n]=((e,t)=>{var i;let{onAbort:a,onCanPlay:r,onCanPlayThrough:n,onEmptied:s,onLoadStart:o,onLoadedData:l,onLoadedMetadata:d,onProgress:u,onDurationChange:c,onVolumeChange:h,onRateChange:m,onResize:p,onWaiting:b,onPlay:g,onPlaying:f,onTimeUpdate:E,onPause:y,onSeeking:_,onSeeked:k,onStalled:T,onSuspend:w,onEnded:A,onError:C,onCuePointChange:S,onChapterChange:I,metadata:R,tokens:L,paused:x,playbackId:M,playbackRates:D,currentTime:O,themeProps:P,extraSourceParams:N,castCustomData:U,_hlsConfig:H,...W}=t;return gF("tokens",L,e),gF("playbackId",M,e),gF("playbackRates",D,e),gF("metadata",R,e),gF("disableCookies",null!=(i=t.disableCookies)&&i,e),gF("extraSourceParams",N,e),gF("_hlsConfig",H,e),gF("themeProps",P,e),gF("castCustomData",U,e),gF("paused",x,e,(e,t)=>{null!=t&&(t?e.pause():e.play())},(e,t,i)=>(!e.hasAttribute("autoplay")||!!e.hasPlayed)&&gq(e,t,i)),gF("currentTime",O,e,(e,t)=>{null!=t&&(e.currentTime=t)}),gj("abort",e,a),gj("canplay",e,r),gj("canplaythrough",e,n),gj("emptied",e,s),gj("loadstart",e,o),gj("loadeddata",e,l),gj("loadedmetadata",e,d),gj("progress",e,u),gj("durationchange",e,c),gj("volumechange",e,h),gj("ratechange",e,m),gj("resize",e,p),gj("waiting",e,b),gj("play",e,g),gj("playing",e,f),gj("timeupdate",e,E),gj("pause",e,y),gj("seeking",e,_),gj("seeked",e,k),gj("stalled",e,T),gj("suspend",e,w),gj("ended",e,A),gj("error",e,C),gj("cuepointchange",e,S),gj("chapterchange",e,I),[W]})(a,e),[s]=(0,nz.useState)(null!=(i=e.playerInitTime)?i:pl());return nz.createElement(gG,{ref:r,defaultHiddenCaptions:e.defaultHiddenCaptions,playerSoftwareName:"mux-player-react",playerSoftwareVersion:gK,playerInitTime:s,...n})});function gz(e){let t,i=(0,s.c)(5),{customDomain:a,playbackId:r,tokens:n}=e,l;return i[0]===Symbol.for("react.memo_cache_sentinel")?(l={position:"absolute",inset:0},i[0]=l):l=i[0],i[1]!==a||i[2]!==r||i[3]!==n?(t=(0,o.jsx)(gY,{customDomain:a,theme:"sutro",playbackId:r,tokens:n,autoPlay:!1,loop:!1,style:l}),i[1]=a,i[2]=r,i[3]=n,i[4]=t):t=i[4],t}}}]);