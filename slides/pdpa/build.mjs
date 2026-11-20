import {writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {slides,sources} from './content.mjs';
const esc = s => String(s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const art=['01_bobo_strawberry_cloud.svg','02_chaochao_sunset_cloud.svg','03_caicai_aurora_cloud.svg','04_chacha_matcha_cloud.svg','05_mimi_tiny_cloud.svg'];
const rows=slides.map((s,i)=>`<section class="slide ${s.cover?'cover':''}" id="slide-${i+1}" aria-labelledby="title-${i+1}">
  <header><span class="eyebrow">${esc(s.section)}</span><span class="folio">${String(i+1).padStart(2,'0')} / ${slides.length}</span></header>
  <h${s.cover?'1':'2'} id="title-${i+1}" tabindex="-1">${esc(s.title)}</h${s.cover?'1':'2'}>
  ${s.subtitle?`<p class="subtitle">${esc(s.subtitle)}</p>`:''}
  <div class="lesson"><div class="main-copy"><h3>核心概念</h3><p class="concept">${esc(s.concept)}</p>
  ${s.table?`<table><thead><tr>${s.table[0].map(c=>`<th scope="col">${esc(c)}</th>`).join('')}</tr></thead><tbody>${s.table.slice(1).map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>`:''}
  <h3>重點整理</h3><ul>${s.points.map(p=>`<li>${esc(p)}</li>`).join('')}</ul></div>
  <aside class="takeaway"><img src="../../assets/marshmallow_clouds/${s.cover?'marshmallow_cloud_squad_banner.svg':art[Math.floor(i/5)%art.length]}" alt="${s.cover?'雲朵棉花糖小隊':'雲朵伴讀角色'}"><h3>這頁記住</h3><p>${esc(s.takeaway)}</p></aside></div>
  ${s.question?`<details class="discussion"><summary><span>延伸思考與解析</span>${esc(s.question)}</summary><p>${esc(s.answer)}</p></details>`:''}
  <footer><p class="citation">${esc(s.citation)}</p><nav aria-label="本頁相關知識連結">${s.refs.map(k=>`<a href="${esc(sources[k][1])}" target="_blank" rel="noopener">${esc(sources[k][0])} <span aria-hidden="true">↗</span></a>`).join('')}</nav></footer>
</section>`).join('\n');
const html=`<!doctype html>
<html lang="zh-Hant-TW"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="個人資料保護法初學者教學簡報，含生活案例、問題解析與 Wiki 知識連結。"><title>個人資料保護法入門 · LLM Wiki 教學簡報</title><link rel="stylesheet" href="styles.css"><script src="slides.js" defer></script></head>
<body><a class="skip" href="#deck">跳至投影片</a><div class="topline"><span>資訊安全管理 LLM Wiki</span><span>PDPA 基礎課程</span></div><progress id="progress" max="${slides.length}" value="1" aria-label="簡報進度"></progress>
<main id="deck" aria-label="個人資料保護法教學投影片">${rows}</main>
<div class="controls" role="navigation" aria-label="簡報控制"><div><button id="prev" type="button" aria-label="上一頁">← 上一頁</button><output id="counter" aria-live="polite">1 / ${slides.length}</output><button id="next" type="button" aria-label="下一頁">下一頁 →</button></div><span class="hint">← → 翻頁 · M 目錄 · F 全螢幕 · A 解析</span><div><button id="toc-open" type="button">目錄</button><button id="fullscreen" type="button">全螢幕</button><button id="print" type="button">列印／PDF</button></div></div>
<dialog id="toc" aria-labelledby="toc-title"><div class="dialog-head"><h2 id="toc-title">課程目錄</h2><button id="toc-close" type="button" aria-label="關閉目錄">關閉 ✕</button></div><p>點選主題前往，按 Esc 關閉</p><ol>${slides.map((s,i)=>`<li><a href="#slide-${i+1}">${esc(s.title)}</a></li>`).join('')}</ol></dialog>
<p id="status" class="sr-only" role="status"></p><noscript><p class="noscript">目前為完整閱讀模式；啟用 JavaScript 可逐頁播放。仍可使用瀏覽器列印全部內容。</p></noscript></body></html>`;
await writeFile(fileURLToPath(new URL('./index.html',import.meta.url)),html,'utf8');
console.log(`Built ${slides.length} slides.`);
