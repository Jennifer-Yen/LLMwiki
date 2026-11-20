# 個人資料保護法入門教學簡報

開啟 `index.html` 即可使用，無須安裝套件或連線至網路。官方來源連結需要網路。

- 對象：不熟悉個人資料保護法的初學者。
- 篇幅：24 頁，建議 30–40 分鐘，依討論時間調整。
- 操作：左右方向鍵、Page Up / Page Down、空白鍵翻頁；Home / End 跳至首末頁；M 開啟目錄；F 全螢幕；A 展開本頁解析。
- 問題解析：點選「延伸思考與解析」展開。列印時自動展開全部解析，取消列印後恢復。
- 列印：使用「列印／PDF」，選擇 A4 橫向、100% 縮放，關閉瀏覽器頁首頁尾。不同瀏覽器的字型與分頁可能略有差異。
- 無 JavaScript 時仍可閱讀完整 HTML 與列印。
- Wiki 與講義連結以新分頁開啟。瀏覽器可能直接顯示或下載 Markdown；可用文字編輯器或 Obsidian 閱讀。
- 複製簡報時，請保留相對位置的 `assets/`、`wiki/` 與 `raw/`。

## 維護

內容資料在 `content.mjs`，樣式在 `styles.css`，操作在 `slides.js`。修改內容後，於專案根目錄執行：

```powershell
node slides/pdpa/build.mjs
```

`index.html` 為已產生的完整教學頁面，使用者不需執行建置。

## 來源與版本

主要依據：

- `wiki/frameworks/taiwan_pdpa.md`
- `wiki/frameworks/gdpr.md`
- `wiki/syntheses/tw_pdpa_vs_gdpr.md`
- `raw/lectures/01_personal_data_protection_and_gdpr.md`，Slides 3–16。
- `raw/lectures/02_taiwan_personal_data_protection_act_statute.md`，按條文定位。

課堂紀錄沒有逐題收錄完整問題，簡報中的問題明確標為「延伸情境題」，不視為講師原題、法律諮詢意見或法院認定。引用中的 `Law_TW_PDPA` 對應上述第 02 份原始紀錄，`Lecture_PDA_GDPR` 對應第 01 份。

查核日期：2026-11-20。官方資料：

- [個資法條文與各條施行註記](https://law.pdpc.gov.tw/LawContent.aspx?id=FL010627)：2025-11-11 修正的相關條文標示施行日期未定。不得把公布修正直接視為已施行。
- [個資法官方條文整理](https://www.pdpc.gov.tw/News_Html/100/)：含 2023 年第 48 條安全維護違規罰鍰。講義的「行政罰最高 50 萬元」不宜作為現行概括結論。
- [歐盟官方義務說明](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/obligations_en)：第 33、34 條外洩通報的風險條件。
- [GDPR 法規原文](https://eur-lex.europa.eu/eli/reg/2016/679/oj)：第 3、17、20、22、33–34、37 條及第五章，供延伸查閱。

本次只在簡報中標記版本差異及必要的教學修正，保留原始講義與既有 Wiki 頁面。未以延伸情境的自行推論覆寫原始素材。
