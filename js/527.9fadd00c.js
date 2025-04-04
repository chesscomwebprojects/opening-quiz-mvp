"use strict";(self["webpackChunkopening_quiz"]=self["webpackChunkopening_quiz"]||[]).push([[527],{3339:function(e,t,o){function n({from:e,to:t}){const o=(e.y-t.y)/(e.x-t.x),n=Number(o.toFixed(1));return n}o.d(t,{t:function(){return n}})},7247:function(e,t,o){function n(e){return{file:e.toLowerCase().charCodeAt(0)-96,rank:Number(e.charAt(1))}}o.d(t,{Z:function(){return n}})},4766:function(e,t,o){function n({from:e,slope:t,to:o}){switch(t){case 2:return e.x>o.x?180:0;case-2:return e.x>o.x?0:180;case.5:return e.x>o.x?90:270;case-.5:return e.x>o.x?90:270;default:return 0}}o.d(t,{$:function(){return n}})},5989:function(e,t,o){function n(e){return!e||!e.file||!e.rank||e.file>8||e.rank>8||e.file<1||e.rank<1?null:`${String.fromCharCode(96+e.file)}${e.rank.toString()}`}o.d(t,{H:function(){return n}})},1465:function(e,t,o){function n(e,t){return!!e&&(Object.entries(t).forEach((([t,o])=>{const n=`${t.charAt(0).toUpperCase()}${t.slice(1)}`;"undefined"===typeof o?delete e.dataset[`test${n}`]:e.dataset[`test${n}`]=o})),!0)}o.d(t,{P_:function(){return n},fd:function(){return r},mm:function(){return i}});var r=(e=>(e["Anchor"]="anchor",e["Animated"]="animated",e["Blinking"]="blinking",e["Color"]="color",e["Dragging"]="dragging",e["Editable"]="editable",e["Element"]="element",e["EnPassant"]="enPassant",e["File"]="file",e["Figurine"]="figurine",e["Flipped"]="flipped",e["IconTextValue"]="iconTextValue",e["Inside"]="inside",e["Interval"]="interval",e["LeadingFigurine"]="leadingFigurine",e["Opacity"]="opacity",e["Outside"]="outside",e["Position"]="position",e["Rank"]="rank",e["Selected"]="selected",e["ShortString"]="shortstring",e["Square"]="square",e["Star"]="star",e["TextColor"]="textColor",e["TextValue"]="textValue",e["Times"]="times",e["TrailingFigurine"]="trailingFigurine",e["Type"]="type",e["WholeMoveNumber"]="wholeMoveNumber",e["X"]="x",e["Y"]="y",e))(r||{}),i=(e=>(e["Arrow"]="arrow",e["BlinkingHighlight"]="blinking-highlight",e["Board"]="board",e["CommentLink"]="comment-link",e["Coordinates"]="coordinates",e["CustomItem"]="custom-item",e["Effect"]="effect",e["FadeInOverlay"]="fade-in-overlay",e["GameResult"]="game-result",e["HalfMove"]="half-move",e["Highlight"]="highlight",e["Hint"]="hint",e["HoverSquare"]="hover-square",e["Move"]="move",e["Piece"]="piece",e["PotentialCapture"]="capture-hint",e["PromotionCloseButton"]="promotion-close-button",e["PromotionPiece"]="promotion-piece",e["PromotionWindow"]="promotion-window",e["Square"]="square",e["SiblingBoard"]="sibling-board",e))(i||{})},2048:function(e,t,o){o.d(t,{A:function(){return r}});var n=o(7515);function r({from:e,to:t}){const o=(0,n.e)({from:e,to:t}),r={x:e.x,y:e.y+o},i={x:e.x-r.x,y:e.y-r.y},s={x:e.x-t.x,y:e.y-t.y},a=(i.x*s.x+i.y*s.y)/o**2,c=Math.max(-1,Math.min(1,a)),l=Math.acos(c),u=Math.floor(l*(180/Math.PI)*100)/100;return e.x<t.x?360-u:u}},3613:function(e,t,o){o.d(t,{j:function(){return r}});var n=o(2071);function r(e,t){return(e&&t[n.Z.Node.Marking.JCEColorsMap[e]])??e??t.default}},2924:function(e,t,o){function n({square:e,isFlipped:t,effectEl:o}){const n=r(e,t);n.top&&o.classList.add("tuck-top"),n.right&&o.classList.add("tuck-right")}function r(e,t){const o={top:t?"1":"8",right:t?"a":"h"};return{top:e.includes(o.top),right:e.includes(o.right)}}o.d(t,{T:function(){return r},k:function(){return n}})},3630:function(e,t,o){o.d(t,{o:function(){return i}});o(4114);var n=o(6886),r=o(43);function i(e){const t=[{animate:e.animate,from:(0,r.v)(e),to:e.from}];e.rookMove&&t.push({...e.rookMove,from:e.rookMove.to,to:e.rookMove.from});const o=e.captured&&e.capturedStr?{color:(0,n.T)(e.color),promoted:e.capturedPromotedPawn,square:e.EPCapturedSquare||e.to,type:e.capturedStr.toLowerCase()}:void 0;return{movedPieces:t,promotedSquare:e.promotion?e.from:void 0,restoredPiece:o}}},6527:function(e,t,o){o.r(t),o.d(t,{createRenderer:function(){return Oe}});var n=o(8760),r=o(9895);function i({board:e}){const{classList:t}=e.el;return{addAnalysisOverlay:o,removeAnalysisOverlay:n};function o(){t.add("analysis-overlay")}function n(){t.remove("analysis-overlay")}}var s=(e=>(e["Arrows"]="arrows",e["BlinkingHighlights"]="blinking-highlights",e["CaptureHints"]="capture-hints",e["Coordinates"]="coordinates",e["Effects"]="effects",e["FadeSetup"]="fade-setup",e["HoverSquare"]="hover-square",e["MoveHints"]="move-hints",e["Pieces"]="pieces",e["PromotionWindow"]="promotion-window",e["Squares"]="squares",e))(s||{}),a=o(7515),c=o(3339);const l={a1:{x:6.25,y:93.75},a2:{x:6.25,y:81.25},a3:{x:6.25,y:68.75},a4:{x:6.25,y:56.25},a5:{x:6.25,y:43.75},a6:{x:6.25,y:31.25},a7:{x:6.25,y:18.75},a8:{x:6.25,y:6.25},b1:{x:18.75,y:93.75},b2:{x:18.75,y:81.25},b3:{x:18.75,y:68.75},b4:{x:18.75,y:56.25},b5:{x:18.75,y:43.75},b6:{x:18.75,y:31.25},b7:{x:18.75,y:18.75},b8:{x:18.75,y:6.25},c1:{x:31.25,y:93.75},c2:{x:31.25,y:81.25},c3:{x:31.25,y:68.75},c4:{x:31.25,y:56.25},c5:{x:31.25,y:43.75},c6:{x:31.25,y:31.25},c7:{x:31.25,y:18.75},c8:{x:31.25,y:6.25},d1:{x:43.75,y:93.75},d2:{x:43.75,y:81.25},d3:{x:43.75,y:68.75},d4:{x:43.75,y:56.25},d5:{x:43.75,y:43.75},d6:{x:43.75,y:31.25},d7:{x:43.75,y:18.75},d8:{x:43.75,y:6.25},e1:{x:56.25,y:93.75},e2:{x:56.25,y:81.25},e3:{x:56.25,y:68.75},e4:{x:56.25,y:56.25},e5:{x:56.25,y:43.75},e6:{x:56.25,y:31.25},e7:{x:56.25,y:18.75},e8:{x:56.25,y:6.25},f1:{x:68.75,y:93.75},f2:{x:68.75,y:81.25},f3:{x:68.75,y:68.75},f4:{x:68.75,y:56.25},f5:{x:68.75,y:43.75},f6:{x:68.75,y:31.25},f7:{x:68.75,y:18.75},f8:{x:68.75,y:6.25},g1:{x:81.25,y:93.75},g2:{x:81.25,y:81.25},g3:{x:81.25,y:68.75},g4:{x:81.25,y:56.25},g5:{x:81.25,y:43.75},g6:{x:81.25,y:31.25},g7:{x:81.25,y:18.75},g8:{x:81.25,y:6.25},h1:{x:93.75,y:93.75},h2:{x:93.75,y:81.25},h3:{x:93.75,y:68.75},h4:{x:93.75,y:56.25},h5:{x:93.75,y:43.75},h6:{x:93.75,y:31.25},h7:{x:93.75,y:18.75},h8:{x:93.75,y:6.25}};var u=o(1602),d=o(2048);const f=u.ox.WIDTH/2,m=u.ox.HEAD_HEIGHT,p=u.ox.TAIL_PADDING,y=u.ox.HEAD_WIDTH/2;function g({from:e,to:t}){const o=(0,a.e)({from:e,to:t});return`\n    ${e.x-f} ${e.y+p},\n    ${e.x-f} ${e.y+o-m},\n    ${e.x-y} ${e.y+o-m},\n    ${e.x} ${e.y+o},\n    ${e.x+y} ${e.y+o-m},\n    ${e.x+f} ${e.y+o-m},\n    ${e.x+f} ${e.y+p}\n  `.trim()}function h({from:e,polygon:t,to:o}){const n=(0,d.A)({from:e,to:o});return t.setAttribute("transform",`rotate(${n} ${e.x} ${e.y})`),t.setAttribute("points",g({from:e,to:o})),t}const x=u.ox.WIDTH/2,v=u.ox.HEAD_HEIGHT,S=u.ox.TAIL_PADDING,b=u.ox.HEAD_WIDTH/2;function P({from:e}){return`\n    ${e.x-x} ${e.y+S},\n    ${e.x-x} ${e.y+25+x},\n    ${e.x+12.5-v} ${e.y+25+x},\n    ${e.x+12.5-v} ${e.y+25+b},\n    ${e.x+12.5} ${e.y+25},\n    ${e.x+12.5-v} ${e.y+25-b},\n    ${e.x+12.5-v} ${e.y+25-x},\n    ${e.x+x} ${e.y+25-x},\n    ${e.x+x} ${e.y+S}\n  `.trim()}var $=o(4766);function k({from:e,polygon:t,slope:o,to:n}){let r=`rotate(${(0,$.$)({from:e,slope:o,to:n})} ${e.x} ${e.y})`;return u.T6.includes(o)&&(r+=` scale(-1, 1) translate(-${2*e.x}, 0)`),t.setAttribute("transform",r),t.setAttribute("points",P({from:e})),t}var C=o(3613);function E(e,t){if(!e.key)return;const{color:o,from:n,opacity:r,to:i}=e.data,s=document.createElementNS("http://www.w3.org/2000/svg","polygon");s.setAttribute("id",`arrow-${n}${i}`),s.setAttribute("data-arrow",`${n}${i}`),s.setAttribute("class","arrow");const{arrowColors:d}=t.options;s.style.fill=(0,C.j)(o,d),r&&(s.style.opacity=String(r));const f=l[n],m=l[i];if(!f||!m)return;const p=(0,a.e)({from:f,to:m}),y=(0,c.t)({from:f,to:m});return u.Th.includes(y)&&p===u.BN?k({from:f,polygon:s,slope:y,to:m}):h({from:f,polygon:s,to:m})}function q({board:e}){const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("viewBox","0 0 100 100"),t.classList.add("arrows"),e.addToDom({el:t,type:s.Arrows});const o=new Map;return{addArrows:n,removeArrows:r};function n(e,n){e.forEach((e=>{const r=E(e,n);r&&(t.appendChild(r),o.set(e.key,r))}))}function r(e){e.forEach((e=>{const{key:n}=e,r=o.get(n);r&&(t.removeChild(r),o.delete(n))}))}}var w=o(5929),A=o(7249),H=o(496),B=o(7571),D=o(8873);const T=300,M=`transition: background-image ${T}ms linear;`;function L({boardStyles:e,options:t,pieceStyles:o}){return c(t),{destroy:n,getStyleEl:r,getPieceStyles:()=>o,updateStyles:c};function n(){const e=document.getElementById(i());e&&e.parentNode&&e.parentNode.removeChild(e)}function r(){return document.getElementById(i())}function i(){return t.useSharedStyleTag?"board-styles-shared":`board-styles-${t.id}`}function s(t,n=!1){const{boardStyle:r,id:i,pieceStyle:s}=t,{path:a,format:c,isPseudo3d:l}=o[s]??w.TK.neo,u=(0,H.U)(a,void 0,t),d=e[r]??w.Vq.green,f=l?"::after":"",m=n?w.Hk.reduce(((e,t)=>`${e}#board-${i} .piece.${t}, #board-${i} .promotion-piece.${t} {\n            background-image: url('${B.A[t]}');\n          }`),""):w.Hk.reduce(((e,t)=>`${e}#board-${i} .piece.${t}${f}, #board-${i} .promotion-piece.${t}${f} {\n            background-image: url('${u}/${t}.${c}');\n          }`),""),p=`\n      #board-${i}, .fade-in-overlay {\n        background-image: url('${(0,A.F)(d[2],void 0,t)}');\n      }\n      .coordinate-light {\n        fill: ${d[0]};\n      }\n      .coordinate-dark {\n        fill: ${d[1]};\n      }\n      .highlight {\n        background-color: ${d[4]};\n      }\n    `,y=`#board-${i}, #board-${i} .piece {\n      ${M}\n    }`;return p+m+y}function a(e,t=!1){const{id:o,themeAssets:n}=e;if(!n)return s(e,t);const r=n.config.perspective===D.b.Perspective.PSEUDO_3D?"::after":"",i=Object.keys(n.pieces.assets).reduce(((e,t)=>`${e}#board-${o} .piece.${t}${r}, #board-${o} .promotion-piece.${t}${r} {\n        background-image: url('${n.pieces.assets[t]}');\n      }`),""),a=`\n      #board-${o}, .fade-in-overlay {\n        background-image: url('${n.board.assets.background}');\n      }\n      .coordinate-light {\n        fill: ${n.board.config.lightSquareCoordinateHex};\n      }\n      .coordinate-dark {\n        fill: ${n.board.config.darkSquareCoordinateHex};\n      }\n      .highlight {\n        background-color: ${n.board.config.highlightSquareHex};\n      }\n    `,c=`#board-${o}, #board-${o} .piece {\n      ${M}\n    }`;return a+i+c}function c(e,t=!1){const o=i();let n=r();if(!n){n=document.createElement("style"),n.type="text/css",n.id=o;const e=document.head;e&&e.appendChild(n)}const s=a(e,t);n.innerHTML!==s&&(n.innerHTML=s,setTimeout((()=>{n&&(n.innerHTML=n.innerHTML.replace(M,""))}),T+50))}}var N=o(3609);function F(e,t=w.TK){const o=e.themeAssets?e.themeAssets.config.perspective===D.b.Perspective.PSEUDO_3D:t[e.pieceStyle].isPseudo3d;return Boolean(o)}function z({boardStyles:e,el:t,options:o,pieceStyles:r}){const i=L({boardStyles:e,options:o,pieceStyles:r});return{destroy:s,updateBoardImage:a,updatePieceBaseImage:c,togglePseudo3d:l,getPieceStyles:i.getPieceStyles};function s(){i.destroy()}function a(e){i.updateStyles((0,N.PM)(e.options))}function c(e,t=!1){l(e.options),i.updateStyles((0,N.PM)(e.options),t)}function l(e){const o=F(e,r);t.classList.toggle(n.vv.Pseudo3d,o)}}var I=o(6852),_=o(1465),W=o(1067);function O(e){if(!e)return!1;const t=["a","h","1","8"];let o=!1;return t.forEach((t=>{e.includes(t)&&(o=!0)})),o}var Z=o(2924);function j({el:e,options:t,testElement:o=_.mm.Board}){var r;const i={[s.Coordinates]:document.createComment("/Coordinates"),[s.Squares]:document.createComment("/Squares"),[s.BlinkingHighlights]:document.createComment("/Blinking Highlights"),[s.Effects]:document.createComment("/Effects"),[s.HoverSquare]:document.createComment("/Hover Square"),[s.Pieces]:document.createComment("/Pieces"),[s.MoveHints]:document.createComment("/MoveHints"),[s.CaptureHints]:document.createComment("/Capture Hints"),[s.Arrows]:document.createComment("/Arrows"),[s.PromotionWindow]:document.createComment("/Promotion Window"),[s.FadeSetup]:document.createComment("/Fade Setup")};Object.values(i).forEach((t=>e.appendChild(t)));let a=(0,W.H)();return null==(r=a.resolve)||r.call(a,!0),t.test&&(0,_.P_)(e,{[_.fd.Element]:o}),{addToDom:c,animationComplete:p,el:e,flipBoard:l,setBoardEnabled:f,isAnimating:m,isFlipped:y,placeholders:i,setAnimatingStatus:g,reset:u};function c({type:t,el:o,insertAfter:n=!1}){n?e.insertBefore(o,i[t].nextSibling):e.insertBefore(o,i[t])}function l(t,o){if(e.classList.toggle(n.vv.Flipped,t),null==o?void 0:o.options.allowMarkings){const e=o.api.markings.getAllWhere({types:[I.kx]});e.length>0&&d(e,o.renderer)}}function u(){e.innerHTML="",e.classList.remove(n.vv.Flipped)}function d(t,o){t.forEach((t=>{var n;const{data:{square:r},key:i}=t,s=null==(n=null==o?void 0:o.getEffectElements)?void 0:n.call(o).get(i);s&&(s.forEach((e=>{(e.classList.contains("tuck-right")||e.classList.contains("tuck-top"))&&(e.classList.remove("tuck-right"),e.classList.remove("tuck-top"))})),O(r)&&s.forEach((t=>{(0,Z.k)({square:r,isFlipped:e.classList.contains("flipped"),effectEl:t})})))}))}function f(){}function m(){return Boolean(e.dataset.testAnimating)}function p(e){return[n.aP.All,n.aP.Move].includes(e)?a.promise:Promise.resolve(!0)}function y(){return t.flipped}function g(t){var o;t?(e.dataset.testAnimating="true",a=(0,W.H)()):(delete e.dataset.testAnimating,null==(o=a.resolve)||o.call(a,!0))}}var V=o(7535);function R(e){const t=["8","7","6","5","4","3","2","1","a","b","c","d","e","f","g","h"];return e?[...t.slice(0,8).reverse(),...t.slice(-8).reverse()]:t}function G(e){return e===V.b.CoordinatesPositions.Outside?[{color:"grey",fontSize:3.1,x:2,y:3.5},{color:"grey",fontSize:3.1,x:2,y:16},{color:"grey",fontSize:3.1,x:2,y:28.5},{color:"grey",fontSize:3.1,x:2,y:41},{color:"grey",fontSize:3.1,x:2,y:53.5},{color:"grey",fontSize:3.1,x:2,y:66},{color:"grey",fontSize:3.1,x:2,y:78.5},{color:"grey",fontSize:3.1,x:2,y:91},{color:"grey",fontSize:3.1,x:10.35,y:99.25},{color:"grey",fontSize:3.1,x:22.85,y:99.25},{color:"grey",fontSize:3.1,x:35.35,y:99.25},{color:"grey",fontSize:3.1,x:47.85,y:99.25},{color:"grey",fontSize:3.1,x:60.35,y:99.25},{color:"grey",fontSize:3.1,x:72.85,y:99.25},{color:"grey",fontSize:3.1,x:85.35,y:99.25},{color:"grey",fontSize:3.1,x:97.85,y:99.25}]:[{color:"light",fontSize:2.8,x:.75,y:3.5},{color:"dark",fontSize:2.8,x:.75,y:15.75},{color:"light",fontSize:2.8,x:.75,y:28.25},{color:"dark",fontSize:2.8,x:.75,y:40.75},{color:"light",fontSize:2.8,x:.75,y:53.25},{color:"dark",fontSize:2.8,x:.75,y:65.75},{color:"light",fontSize:2.8,x:.75,y:78.25},{color:"dark",fontSize:2.8,x:.75,y:90.75},{color:"dark",fontSize:2.8,x:10,y:99},{color:"light",fontSize:2.8,x:22.5,y:99},{color:"dark",fontSize:2.8,x:35,y:99},{color:"light",fontSize:2.8,x:47.5,y:99},{color:"dark",fontSize:2.8,x:60,y:99},{color:"light",fontSize:2.8,x:72.5,y:99},{color:"dark",fontSize:2.8,x:85,y:99},{color:"light",fontSize:2.8,x:97.5,y:99}]}function U(e,t){const o=R(t),n=G(e);return n.map(((e,t)=>({...e,text:o[t]}))).map((e=>`<text \n          x="${e.x}" \n          y="${e.y}" \n          ${e.fontSize?`font-size="${e.fontSize}"`:""} \n          class="coordinate-${e.color}">${e.text}</text>`)).join("")}function X({board:e,options:t}){return{setCoordinates:n};function o(o,n){const r=Y(o,n,t);e.addToDom({el:r,type:s.Coordinates})}function n({flipped:e,position:t}){r(),t!==V.b.CoordinatesPositions.Off&&o(t,e)}function r(){const t=e.el.querySelector(".coordinates");t&&t.parentNode.removeChild(t)}}function Y(e,t,o,n){const r=document.createElementNS("http://www.w3.org/2000/svg","svg");return r.setAttribute("viewBox","0 0 100 100"),r.classList.add("coordinates"),e===V.b.CoordinatesPositions.Outside&&r.classList.add("outside"),o.test&&(0,_.P_)(r,{[_.fd.Element]:_.mm.Coordinates,[_.fd.Flipped]:t.toString(),[_.fd.Position]:e}),r.innerHTML="",n&&(r.innerHTML+=n),r.innerHTML+=U(e,t),r}function K({board:e}){let t;return{fadeSetup:i};function o(o){t=document.createElement("div"),t.classList.add("fade-in-overlay"),e.addToDom({el:t,type:s.FadeSetup}),t.addEventListener("animationend",n),o.test&&(0,_.P_)(t,{[_.fd.Element]:_.mm.FadeInOverlay})}function n(){t&&(t.style.animationDuration="",t.classList.remove("animate"))}function r(){t&&t.remove(),t=void 0}function i({options:e}){0!==e.fadeSetup?(t||o(e),t&&(t.style.animationDuration=e.fadeSetup/1e3+"s",t.classList.add("animate"))):t&&r()}}function J(e,t){return e.split(" ").filter((e=>!e.startsWith(t))).join(" ").trim()}var Q=o(7247);function ee({square:e,el:t}){const o=(0,Q.Z)(e);o&&(t.className=J(t.className,"square-"),t.classList.add(`square-${o.file}${o.rank}`),t.style.transform="")}function te({board:e,options:t}){const o=a();let n;return{hideHoverSquare:i,showHoverSquare:r};function r(e){n!==e&&(o.style.visibility="",t.test&&(0,_.P_)(o,{[_.fd.Element]:_.mm.HoverSquare}),ee({el:o,square:e}),n=e)}function i(){o&&(o.style.visibility="hidden",n=void 0)}function a(){const o=document.createElement("div"),n=document.createElementNS("http://www.w3.org/2000/svg","svg");return n.setAttribute("viewBox","0 0 100 100"),n.innerHTML='<rect x="0" y="0" width="100" height="100" stroke="rgba(255, 255, 255, 0.65)" stroke-width="10" fill="none"/>',o.append(n),o.classList.add("hover-square"),o.style.visibility="hidden",e.addToDom({el:o,type:s.HoverSquare}),t.test&&(0,_.P_)(o,{[_.fd.Element]:_.mm.HoverSquare}),o}}function oe({board:e}){const t={};return{addCaptureHints:n,addMoveHints:o,removeHints:r};function o(o){o.forEach((o=>{t[o]||(t[o]=i(o),e.addToDom({el:t[o],type:s.MoveHints}))}))}function n(o){o.forEach((o=>{t[o]&&a(o),t[o]=i(o,{isPotentialCapture:!0}),e.addToDom({el:t[o],type:s.CaptureHints}),t[o].style.borderWidth=.1*t[o].clientWidth+"px"}))}function r(e){e.forEach(a)}function i(e,t={}){const o=document.createElement("div");return(0,_.P_)(o,{[_.fd.Element]:t.isPotentialCapture?_.mm.PotentialCapture:_.mm.Hint}),o.classList.add(t.isPotentialCapture?"capture-hint":"hint"),ee({el:o,square:e}),o}function a(e){if(!t[e])return;const o=t[e].parentNode;o.removeChild(t[e]),delete t[e]}}var ne=o(2071),re=o(859);function ie(e,t){return{data:{color:t,interval:500,opacity:.5,square:e,times:3},key:e,type:re.R}}o(4114);var se=(e=>(e[e["Slide"]=0]="Slide",e[e["FadeOut"]=1]="FadeOut",e))(se||{}),ae=o(5437);function ce({animation:e,numSteps:t}){return Array(t).fill(void 0).map(((o,n,r)=>{let i;const s=(n+1)/t;let a=2.86-2.86*s;return a=a>1?1:a,n===r.length-1&&e.callback&&(i=e.callback),{callback:i,el:e.el,style:{opacity:a.toString()}}}))}function le(e,t){const o=(0,Q.Z)(e);return t?{file:9-o.file,rank:9-o.rank}:o}function ue(e,t){const o=le(e,t);return{x:100*o.file-100,y:100*(8-o.rank)}}function de({animation:e,isFlipped:t=!1,numSteps:o}){const{el:n,from:r,to:i}=e;if(!r||!i)return[];const s=ue(r,t),a=ue(i,t);if(!s||!a)return[];const c=(a.x-s.x)/o,l=(a.y-s.y)/o;return Array(o).fill(void 0).map(((e,t)=>{const r=t===o-1,i=r?a:{x:s.x+c*(t+1),y:s.y+l*(t+1)};return{el:n,style:{transform:r?"":`translate(${i.x}%, ${i.y}%)`,zIndex:r?"":"10"}}}))}const fe=16;function me(e){let t;const o=[],n={[se.FadeOut]:ce,[se.Slide]:de};return{add:r,flush:i,run:s};function r(e,t){const{animationType:r,flipped:i}=t,s=Math.max(Math.floor(pe(r)/fe),1),a=e.map((e=>n[e.type]({animation:e,isFlipped:i||!1,numSteps:s})));a.forEach((e=>{if(e.length>o.length){const t=Array(e.length-o.length).fill([]);o.unshift(...t)}e.forEach(((e,t,n)=>{const r=n.length-t;o[o.length-r]=[...o[o.length-r],e]}))}))}function i(){0!==o.length?(o.splice(0,o.length-1),s()):t=!0}function s(){t=o.length<2;const n=o.shift();n&&(e.isAnimating()||e.setAnimatingStatus(!0),n.forEach((e=>{Object.entries(e.style).forEach((([t,o])=>{e.el.style[t]=o})),e.callback&&e.callback()})),0===o.length&&e.setAnimatingStatus(!1),t||requestAnimationFrame((()=>{s()})))}}function pe(e){switch(e){case V.b.Animation.Types.Slow:return V.b.Animation.Speeds.Slow;case V.b.Animation.Types.Fast:return V.b.Animation.Speeds.Fast;case V.b.Animation.Types.None:return 0;default:return V.b.Animation.Speeds.Default}}var ye=o(3825);const ge="element-pool";function he({appendTo:e,elementType:t="div",insertBefore:o,startingCount:n=0}){if(!e&&!o)throw new ae.V({code:ye.t.BadData,message:'When creating an element pool, you must provide an element to "appendTo" or "insertBefore".'});const r=Array(n).fill(void 0).map(i).map(c);return{destroy:s,get:a,put:l};function i(){var n;const r=document.createElement(t);return r.className=ge,e?e.appendChild(r):null==(n=null==o?void 0:o.parentNode)||n.insertBefore(r,o),r}function s(){r.forEach((e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)})),r.length=0}function a(){const e=r.pop()||i();return u(e)}function c(e){for(const t in e.dataset)e.dataset[t]&&(e.dataset[t]="");return e.className=ge,e.style.cssText="",e}function l(e){return c(e),r.push(e),e}function u(e){return e.className="",e}}var xe=o(3496),ve=(e=>(e["Created"]="Created",e["DetailsSet"]="DetailsSet",e["DragEnded"]="DragEnd",e["DragStarted"]="DragStart",e["PieceShown"]="PieceShown",e["PieceHidden"]="PieceHidden",e["PositionSetBySquare"]="PositionSetBySquare",e))(ve||{});function Se({details:e,el:t,emitter:o,test:n}){let r;const i={...e};return t.classList.add("piece"),o.emit(ve.Created,{...i}),c(i.color,i.type),u(i.square),n&&(0,_.P_)(t,{[_.fd.Element]:_.mm.Piece}),{el:t,getDetails:a,setDetails:c,setDraggingState:l,setPositionByCoords:d,setPositionBySquare:u};function s(e,t){return`${(0,xe.e)(e)}${t}`}function a(){return e}function c(i,a){t.classList.remove(r),r=s(i,a),t.classList.add(r),e.type=a,e.color=i,o.emit(ve.DetailsSet,{...e,shortString:r}),n&&(0,_.P_)(t,{[_.fd.Type]:a,[_.fd.Color]:(0,xe.e)(i),[_.fd.ShortString]:i===ne.Z.ColorsAsNumbers.Black?a:a.toUpperCase()})}function l(r){if(r)return t.classList.add("dragging"),o.emit(ve.DragStarted,{...e}),void(n&&(0,_.P_)(t,{[_.fd.Dragging]:"true"}));n&&(0,_.P_)(t,{[_.fd.Dragging]:void 0}),t.classList.remove("dragging"),o.emit(ve.DragEnded,{...e})}function u(r,i){if(n){const e=(0,Q.Z)(r);if(!e)return;e&&!i&&(0,_.P_)(t,{[_.fd.File]:e.file.toString(),[_.fd.Rank]:e.rank.toString(),[_.fd.Square]:r})}ee({el:t,square:r}),o.emit(ve.PositionSetBySquare,{...e})}function d(e){e&&(t.style.transform=`translate(${e.x}%, ${e.y}%)`)}}var be=o(9466),Pe=o(43);function $e({board:e,emitter:t,options:o}){const n=he({insertBefore:e.placeholders.pieces,startingCount:32}),r=me(e);let i;const s=(0,be.N)();return{animations:r,create:a,destroy:c,get:l,getDraggingSquare:u,move:d,remove:f,setDraggingState:m,setPositionByCoords:p,setPositionBySquare:y,suspendOverSquare:g};function a(e){const r=Se({details:e,el:n.get(),emitter:t,test:o.test});return s.set(e.square,r),t.emit(ve.PieceShown,{...s.get(e.square)}),r}function c(){n.destroy()}function l(e,t=!0){if(!e)return s;if(!s.isDefined(e)&&t)throw new ae.V({code:ye.t.ElementNotFound,data:{square:e},message:"Piece does not exist."});return s.isDefined(e)?s.get(e):void 0}function u(){return i}function d(e,t){const o=Array.isArray(e)?e:[e],n=o.filter(Boolean).map((e=>(0,Pe.v)(e))),i=o.filter(Boolean).map((e=>l(e.from))),a=[];o.forEach(((e,t)=>{if(!e)throw new ae.V({code:ye.t.ElementNotFound,message:"Move object does not exist."});const o=(0,Pe.v)(e);o&&(i[t].setPositionBySquare(o),e.animate&&a.push({el:i[t].el,from:e.from,to:o,type:se.Slide}),s.set(o,i[t]),n.includes(e.from)||s.deleteItem(e.from),e.promotion&&s.get(o).setDetails(e.color,e.promotion))})),a.length&&r.add(a,t)}function f({animate:e,options:o,squares:a}){const c=[];a.forEach((o=>{if(!s.isDefined(o))return;const r=l(o).el;function i(){if(!r)throw new ae.V({code:ye.t.ElementNotFound,data:{square:o},message:"Piece does not exist. Cannot remove."});n.put(r),t.emit(ve.PieceHidden,o)}e?c.push({callback:i,el:l(o).el,type:se.FadeOut}):i(),s.deleteItem(o)})),c.length&&r.add(c,o),i&&!s.isDefined(i)&&(i=void 0)}function m(e,t){if(t&&e===i)return;const o=l(e);o.setDraggingState(t),i=t?e:void 0}function p(e,t){const o=l(e),n=u();n&&n!==e&&m(n,!1),o.setPositionByCoords(t)}function y(e,t){const o=l(e);t!==e&&(s.set(t,s.get(e)),s.deleteItem(e)),o.setPositionBySquare(t)}function g(e,t){const o=l(e);o.setPositionBySquare(t,!0)}}var ke=o(225),Ce=o(3630);function Ee({board:e,emitter:t,options:o}){const n=$e({board:e,emitter:t,options:o});return{destroy:n.destroy,dragPiece:r,dropPiece:i,illegalMove:s,loadPieces:c,makeMove:a,removePiece:l,undoMove:u};function r(e){e&&(e.toSquare?n.suspendOverSquare(e.square,e.toSquare):e.coords&&n.setPositionByCoords(e.square,e.coords),n.setDraggingState(e.square,!0))}function i(){const e=n.getDraggingSquare();e&&(n.setPositionBySquare(e,e),n.setDraggingState(e,!1))}function s(e,t){if(e){const{renderer:n}=t;null==n||n.blinkHighlights([ie(e,o.checkBlinkingSquareColor)],t)}}function a(e,t){if(n.animations.flush(),e.drop)return void n.create({color:e.color,square:(0,Pe.v)(e),type:e.piece});e.EPCapturedSquare?n.remove({animate:e.animate,options:t.options,squares:[e.EPCapturedSquare]}):n.get(e.to,!1)&&!(0,ke.p)(e)&&n.remove({animate:e.animate,options:t.options,squares:[e.to]});const o=[e,e.rookMove].filter(Boolean);n.move(o,t.options),n.animations.run()}function c(e,t){const o=e.pieces;n.animations.flush();const r=o.keys(),i=n.get().keys().filter((e=>!r.includes(e)));n.remove({options:t.options,squares:i}),o.keys().forEach((e=>{const t=o.get(e),r=n.get(e,!1);if(!r)return void n.create(t);const{type:i,color:s}=r.getDetails();i===t.type&&s===t.color||r.setDetails(t.color,t.type)})),n.animations.run()}function l(e,t){n.remove({options:t.options,squares:[e]})}function u(e,t){if(n.animations.flush(),e.drop)return void l(e.to,t);const{movedPieces:o,restoredPiece:r,promotedSquare:i}=(0,Ce.o)(e);if(n.move(o,t.options),r&&n.create(r),i){const e=n.get(i),{color:t}=e.getDetails();e.setDetails(t,ne.Z.Piece.Types.Pawn)}n.animations.run()}}var qe=o(6352),we=o(3135),Ae=o(813),He=o(3330);function Be({board:e,options:t}){let o,n;const r={b:void 0,n:void 0,q:void 0,r:void 0};return{closePromotionWindow:d,openPromotionWindow:u};function i(){o=document.createElement("div"),o.classList.add("promotion-window"),t.test&&(0,_.P_)(o,{[_.fd.Element]:_.mm.PromotionWindow}),e.addToDom({el:o,type:s.PromotionWindow})}function a(e){n=document.createElement("i"),n.className="close-button icon-font-chess x",t.test&&(0,_.P_)(n,{[_.fd.Element]:_.mm.PromotionCloseButton}),o.appendChild(n),n.addEventListener(we.WP,(t=>{t.stopPropagation(),e((0,Ae.e)(qe.i.BoardEvents.PromotionAreaClosePointerdown))}))}function c(e){Object.keys(r).forEach((n=>{const i=document.createElement("div");i.addEventListener(we.WP,(t=>{t.stopPropagation(),(0,He.v)(t)?e((0,Ae.e)(qe.i.UserEvents.PointerdownRight)):e((0,Ae.e)(qe.i.BoardEvents.PromotionPiecePointerdown,{piece:n}))})),i.classList.add("promotion-piece"),r[n]=i,t.test&&(0,_.P_)(r[n],{[_.fd.Element]:_.mm.PromotionPiece,[_.fd.Type]:n}),o.appendChild(i)}))}function l({flipped:e,promotionMove:t}){let o;o=e?t.color===ne.Z.ColorsAsNumbers.White?"bottom":"top":t.color===ne.Z.ColorsAsNumbers.White?"top":"bottom";const n=t.color,r=e?"hgfedcba":"abcdefgh",i=r.indexOf(t.to.slice(0,1))+1;return{color:n,file:i,position:o}}function u(e,s){const{options:{flipped:u},run:d}=s,{color:g,file:h,position:x}=l({flipped:u,promotionMove:e});o||i(),n||a(d),r.q||c(d),m(x),p(h),f(g),t.test&&(0,_.P_)(o,{[_.fd.Color]:(0,xe.e)(g),[_.fd.File]:h.toString(),[_.fd.Position]:x}),y()}function d(){if(!o)throw new ae.V({code:ye.t.ElementNotFound,message:"Promotion window does not exist."});o.style.display="none"}function f(e){Object.keys(r).forEach((o=>{r[o].className=`promotion-piece ${(0,xe.e)(e)}${o}`,t.test&&(0,_.P_)(r[o],{[_.fd.Color]:(0,xe.e)(e)})}))}function m(e){"top"===e?o.classList.add("top"):o.classList.remove("top")}function p(e){o.style.transform=`translateX(${100*(e-1)}%`}function y(){o.style.display=""}}function De({board:e,options:t}){const o=he({insertBefore:e.placeholders.squares,startingCount:3}),n=(0,be.N)(),r=t.test;return{addHighlights:i,blinkHighlights:c,removeHighlights:l};function i(e){e.forEach((e=>{const{square:t}=e.data;if(n.isDefined(t)||!e)return;const o=u(t,e);n.set(t,o)}))}function a({el:e,interval:t,opacity:o,times:n}){let r=0,i=!0;const s=setInterval((()=>{if(r+=1,r!==2*n)i?(e.style.opacity="0",i=!1):(e.style.opacity=o.toString(),i=!0);else if(clearInterval(s),e){const t=e.parentNode;t&&t.removeChild(e)}}),t/2)}function c(t){t.forEach((t=>{const{color:o,interval:n,opacity:i,square:c,times:l}=t.data,d=u(c,t);e.addToDom({el:d,type:s.BlinkingHighlights}),r&&(0,_.P_)(d,{[_.fd.Element]:_.mm.BlinkingHighlight,[_.fd.Square]:c,[_.fd.Color]:o,[_.fd.Interval]:n,[_.fd.Opacity]:i,[_.fd.Times]:l,[_.fd.Type]:_.fd.Blinking}),a({el:d,interval:n,opacity:i,times:l})}))}function l(e){e.forEach(d)}function u(e,t){const n=o.get();return(0,_.P_)(n,{[_.fd.Element]:_.mm.Highlight}),n.classList.add("highlight"),f(n,t),ee({el:n,square:e}),n}function d(e){const{square:t}=e.data;if(!n.isDefined(t))return;const r=n.get(t);o.put(r),n.deleteItem(t)}function f(e,t){if(!e)throw new ae.V({code:ye.t.ElementNotFound,data:{highlight:t},message:"Highlight does not exist."});const{data:{color:o,opacity:n}}=t,r=o||"",i=String(n);e.style.backgroundColor!==r&&(e.style.backgroundColor=r),e.style.opacity!==i&&(e.style.opacity=i)}}var Te=o(5989);function Me(e){let t=Math.max(e.x,-50);t=Math.min(t,750);let o=Math.max(e.y,-50);return o=Math.min(o,750),{x:t,y:o}}function Le(e,t){let o=Math.max(e,1);o=Math.min(o,8);let n=Math.max(t,1);return n=Math.min(n,8),(0,Te.H)({file:o,rank:n})}var Ne=o(1410);function Fe({el:e,event:t,flipped:o}){const n=e.getBoundingClientRect(),{x:r,y:i}=(0,Ne.u)(t),s=n.width/8,a={x:Math.round((r-n.left)%s),y:Math.round((i-n.top)%s)},c=Math.ceil((r-n.left)/s),l=Math.ceil((n.bottom-i)/s),u=o?9-c:c,d=o?9-l:l,f=(0,Te.H)({file:u,rank:d}),m={x:(r-n.left-s/2)/n.width*800,y:(i-n.top-s/2)/n.height*800},p=Me(m),y=Le(u,d);return{coords:m,coordsInsideBoard:p,coordsInsideSquare:a,square:f,squareInsideBoard:y}}function ze(e){return e===ne.Z.ColorsAsLetters.Black||e===ne.Z.ColorsAsWords.Black?ne.Z.ColorsAsNumbers.Black:ne.Z.ColorsAsNumbers.White}function Ie(e){const t={};return e.forEach((e=>{const o=e.className.split(" "),n=o.find((e=>e.startsWith("square-"))),r=o.find((e=>e.startsWith("w")||e.startsWith("b")));if(!n||!r)return;const[i,s]=r,a=parseInt(n[n.length-2],10),c=parseInt(n[n.length-1],10),l=(0,Te.H)({file:a,rank:c});l&&(t[l]={color:ze(i),type:s})})),t}var _e=o(5142);const{createEventEmitter:We}=_e.rG;function Oe({el:e,emitter:t=We(),options:o=(0,r.q)(),boardStyles:s=w.Vq,pieceStyles:a=w.TK,testElement:c}){const l=j({el:e,options:o,testElement:c}),u={board:l,el:e,emitter:t,options:o},d=z({...u,boardStyles:s,pieceStyles:a,options:(0,N.PM)(o)}),f=Ee(u);l.isFlipped()&&l.flipBoard(!0),d.togglePseudo3d(o);const m={...i(u),...q(u),...d,...X(u),...K(u),...te(u),...oe(u),...De(u),...Be(u),...f,animationComplete:l.animationComplete,areAssetsLoaded:()=>!0,createRenderer:Oe,destroy:p,...t,extendRenderer:y,flipBoard:l.flipBoard,setBoardEnabled:l.setBoardEnabled,getCoordsFromSquare:ue,getPieces:g,getPointerPosition:Fe,getRendererOptions:()=>({boardStyles:s,el:e,options:o,pieceStyles:a,emitter:t}),getBoardContainerAspectRatio:()=>1,isAnimating:l.isAnimating,name:n.A4.Types.Default,resize:h};return m;function p(){d.destroy(),f.destroy(),l.reset()}function y(e){Object.assign(m,e(u))}function g(){const t=Array.from(e.querySelectorAll(".piece"));return Ie(t)}function h(){}}},7515:function(e,t,o){function n({from:e,to:t}){return Math.sqrt((e.x-t.x)**2+(e.y-t.y)**2)}o.d(t,{e:function(){return n}})},3496:function(e,t,o){o.d(t,{e:function(){return r}});var n=o(2071);function r(e){return e===n.Z.ColorsAsNumbers.Black?n.Z.ColorsAsLetters.Black:n.Z.ColorsAsLetters.White}},1602:function(e,t,o){o.d(t,{BN:function(){return r},T6:function(){return i},Th:function(){return s},ox:function(){return n}});const n={HEAD_HEIGHT:4.5,HEAD_WIDTH:6.5,TAIL_PADDING:4.5,WIDTH:2.75},r=27.95084971874737,i=[.5,-2],s=[2,.5,-.5,-2]},1410:function(e,t,o){o.d(t,{u:function(){return c}});var n=o(3135);const r=-1,i=-1;let s=r,a=i;function c({clientX:e,clientY:t,pointer:o,type:c,touches:l}){const u=c===n.BB.Touchmove||c===n.BB.Touchstart;return u&&l.length>0&&(s=l[0].clientX,a=l[0].clientY),c===n.BB.Touchend?{x:s,y:a}:o?{x:o.x,y:o.y}:l&&l.length>0?{x:l[0].clientX,y:l[0].clientY}:{x:e??r,y:t??i}}},7249:function(e,t,o){o.d(t,{F:function(){return r}});var n=o(6278);function r(e,t=150,o){return`${(0,n.L)(o)}/boards/${e}/${t}.png`}}}]);
//# sourceMappingURL=527.9fadd00c.js.map