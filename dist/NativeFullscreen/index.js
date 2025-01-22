import{intercept as d}from"@neptune";import{html as y}from"@neptune/voby";import{storage as s}from"@plugin";var c=t=>{s.settings??={};for(let e of Object.keys(t))s.settings[e]??=t[e];return s.settings};import{html as f}from"@neptune/voby";import{html as u}from"@neptune/voby";var a=({children:t,tooltip:e})=>u`
	<div style="margin-bottom: 15px;display: flex;justify-content: space-between;align-items: center;" title="${e}">${t}</div>
`;var r=({checked:t,onClick:e,title:o,tooltip:m})=>(t??=!1,f`
		<${a} tooltip=${m}>
			<label for="switch-${o}" style="font-size: 1.2em;margin-bottom: 5px;">${o}</label>
			<input id="switch-${o}" class="neptune-switch-checkbox" type="checkbox" checked=${t} />
			<span onClick=${e} class="neptune-switch" />
		<//>
	`);var i=c({useTidalFullscreen:!1,alwaysHideTopBar:!1}),g=()=>y`<div>
	<${r} checked=${i.useTidalFullscreen} onClick=${()=>i.useTidalFullscreen=!i.useTidalFullscreen} title="Always use Tidal Fullscreen mode" />
	<${r} checked=${i.alwaysHideTopBar} onClick=${()=>n(!(i.alwaysHideTopBar=!i.alwaysHideTopBar))} title="Always hide top bar" />
</div>`;var l,T=d("view/FULLSCREEN_ALLOWED",()=>l||i.useTidalFullscreen?l=void 0:!0),w=d("view/REQUEST_FULLSCREEN",()=>{l=!0}),n=t=>{let e=document.querySelector("div[class^='bar--']");e&&(e.style.display=t?"":"none")};i.alwaysHideTopBar&&n(!1);var p=t=>{if(t.key==="F11"){t.preventDefault();let e=document.querySelector("div[class^='mainContainer--'] > div[class^='containerRow--']"),o=document.querySelector("#wimp > div");document.fullscreenElement||o?.classList.contains("is-fullscreen")?(document.exitFullscreen(),o&&o.classList.remove("is-fullscreen"),i.alwaysHideTopBar||n(!0),e&&(e.style.maxHeight="")):i.useTidalFullscreen?o&&o.classList.add("is-fullscreen"):(document.documentElement.requestFullscreen(),n(!1),e&&(e.style.maxHeight="100%"))}};window.addEventListener("keydown",p);var W=()=>{T(),w(),window.removeEventListener("keydown",p)};export{g as Settings,W as onUnload,n as setTopBarVisibility};
