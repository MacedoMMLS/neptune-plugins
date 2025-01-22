import{actions as v,intercept as d,store as T}from"@neptune";import{storage as l}from"@plugin";var g=t=>{l.settings??={};for(let e of Object.keys(t))l.settings[e]??=t[e];return l.settings};import{html as f}from"@neptune/voby";import{html as y}from"@neptune/voby";var p=({children:t,tooltip:e})=>y`
	<div style="margin-bottom: 15px;display: flex;justify-content: space-between;align-items: center;" title="${e}">${t}</div>
`;var a=({text:t,onText:e,title:n,tooltip:i})=>f`
		<${p} tooltip=${i}>
			<label for="text-${n}" style="font-size: 1.2em;margin-right: 16px;">${n}</label>
			<input id="text-${n}" value=${t} onChange=${s=>e?.(s.target.value)} style="flex-grow: 1; background: var(--wave-color-solid-base-brighter);border-bottom: 1px solid var(--wave-color-opacity-contrast-fill-ultra-thin);border-right: 1px solid var(--wave-color-opacity-contrast-fill-ultra-thin); color: var(--wave-color-opacity-contrast-fill-t);" />
		<//>
	`;import{html as u}from"@neptune/voby";var o=g({changeBy:10,changeByShift:10}),x=()=>u`<${a}
		text=${o.changeBy}
		onText=${t=>{let e=parseInt(t);if(isNaN(e))return o.changeBy=10;o.changeBy=e}}
		title="Percent to change volume by"
	/>
	<${a}
		text=${o.changeByShift}
		onText=${t=>{let e=parseInt(t);if(isNaN(e))return o.changeByShift=10;o.changeByShift=e}}
		title="Percent to change volume by when shift is held"
	/>`;function m(t){if(!t.deltaY)return;let{playbackControls:e}=T.getState(),n=t.shiftKey?o.changeByShift:o.changeBy,i=t.deltaY>0?-n:n,c=e.volume+i,s=Math.min(100,Math.max(0,c));v.playbackControls.setVolume({volume:s})}var r=null;function h(){if(r)return;let t=document.querySelectorAll('div[class^="sliderContainer"]');t.length!==0&&(r=t[0],r.addEventListener("wheel",m))}var S=d("page/IS_DONE_LOADING",h);h();var W=()=>{S(),r?.removeEventListener("wheel",m)};export{x as Settings,W as onUnload};
