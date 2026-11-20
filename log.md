# Wiki 維護與作業日誌 (Operation Log)

本文件採用 **Append-Only（只增不減）** 模式，記錄每一次 Ingest、Query 新發現回填與 Lint 巡檢操作。

---

## [2026-11-20] Initialize | 專案初始化與知識庫骨架建立
- **操作類型**：Bootstrap & Schema Setup
- **主要動作**：
  - 依據 Andrej Karpathy LLM Wiki 模式建立三層架構 (`raw/` -> `wiki/` -> `AGENTS.md`)。
  - 確立知識庫目標：聚焦「資訊安全管理」之學術研究（論文、理論模型）與專業證照考取（CISSP, CISM, ISO 27001 LA）。
  - 建立知識總目錄 `index.md`，規劃基礎理論模型、標準框架、CISSP 8 Domains 與論文綜述專案。
  - 完成 `AGENTS.md` 規範與工作 SOP 定義。
- **維護者**：AI Agent (InfoSec Knowledge Architect)

## [2026-11-20] Update | 擴充 Ingest 來源支援機制
- **操作類型**：Schema Refinement
- **更新項目**：
  - 更新 `AGENTS.md`：明確規範「URL 論文下載」與「對話框直傳 PDF」的歸檔流程。
  - 確立流程：收到 URL 或直接上傳檔案時，先歸檔進 `raw/papers/`，確保 Raw Immutable 溯源性後再啟動編譯。

## [2026-11-20] Milestone | 8 大運作維度全面固化與架構定案
- **操作類型**：Architecture & Policy Finalization
- **確認規範 (8 Pillars)**：
  1. **讀者定位**：自用雙重身分（研究生 + 證照考生），精準條列、高密度考點。
  2. **頁面類型**：`concepts`, `models`, `frameworks`, `cert_prep`, `papers`, `syntheses` 6 大類。
  3. **語言規範**：繁體中文主體，專有名詞嚴格保留英文對照。
  4. **引用粒度**：中度精準，細化至章節、頁碼、投影片編號與控制項代碼。
  5. **衝突處理**：並存對比 + 演進標記，禁止擅自覆蓋。
  6. **吸收模式**：單篇深度提煉為主，整批資料夾骨架建置為輔。
  7. **下游產出**：支援證照衝刺包、文獻回顧初稿、簡報大綱三類合成。
  8. **巡檢機制**：五維度 Lint 檢查（斷鏈、孤島、考點覆蓋、出處溯源、未決衝突）。
- **影響檔案**：`AGENTS.md`、`index.md`、新增 `wiki/syntheses/` 目錄。
- **維護者**：AI Agent (InfoSec Knowledge Architect)

## [2026-11-20] Ingest | 批次吸收資安法律、個資保護、刑法與智財權四大模組
- **操作類型**：Batch Ingest & Synthesis
- **輸入來源**：
  - `raw/lectures/01_personal_data_protection_and_gdpr.md` (成大莊允心博士講義)
  - `raw/lectures/02_taiwan_personal_data_protection_act_statute.md` (個人資料保護法法條與手寫重點)
  - `raw/lectures/03_criminal_code_and_trade_secrets.md` (成大莊允心博士刑法與營業秘密講義)
  - `raw/lectures/04_intellectual_property_rights.md` (成大莊允心博士智慧財產權講義)
- **變更頁面**：
  - 新增：
    - `wiki/frameworks/taiwan_pdpa.md` (台灣個人資料保護法體系與損賠上限)
    - `wiki/frameworks/gdpr.md` (歐盟 GDPR 域外管轄、DPO 與 72 小時通報)
    - `wiki/frameworks/taiwan_cybercrime_law.md` (刑法電腦犯罪專章第 358~362 條、告訴乃論辨析)
    - `wiki/frameworks/trade_secret_act.md` (營業秘密法三大法定要件、合理保密措施要求與刑責)
    - `wiki/syntheses/tw_pdpa_vs_gdpr.md` (個資法 vs GDPR 深度對比矩陣)
    - `wiki/syntheses/ipr_trade_secret_vs_patent.md` (智財權三大支柱評比、著作權三大授權模式、ISP 安全港)
    - `wiki/cert_prep/cissp_domain_1_legal_regulations.md` (CISSP Domain 1 法律、合規與智財高頻考點手冊)
  - 更新：
    - `index.md` (知識總目錄鏈結與 Raw 庫存更新)
- **摘要重點**：
  - 完整提煉台灣個資法（第 3 條權利限制禁止、特種個資 6 類、損賠每人最高 2 萬總額 2 億上限）與 GDPR 對比（72hr通報、被遺忘權、資料可攜權、4% 營業額巨額罰鍰）。
  - 提煉刑法電腦犯罪專章（入侵 358、刪改 359、干擾 360 條告訴乃論 6 個月時效；公務機關加重 1/2；第 220 條電磁紀錄以文書論）。
  - 提煉營業秘密三要件（秘密性、經濟價值、合理保密措施）與專利對比矩陣，以及著作權專屬/獨家/普通授權實務辨析。


## [2026-11-20] Ingest | 批次吸收資通安全管理法、責任等級分級、維護計畫與事件情資聯防
- **操作類型**：Batch Ingest & Cross-Domain Synthesis
- **輸入來源**：
  - `raw/lectures/05_cybersecurity_management_act_overview.md` (資通安全管理法及子法簡介，31 頁)
  - `raw/lectures/06_cybersecurity_responsibility_tiers.md` (資通安全責任等級分級及應辦事項說明，52 頁)
  - `raw/lectures/07_cybersecurity_maintenance_plan_and_risk.md` (資通安全維護計畫撰寫作業與風險評鑑，55 頁)
  - `raw/lectures/08_incident_reporting_and_threat_intel_sharing.md` (資通安全事件通報應變與情資分享實務，39 頁 + 24 頁)
- **變更頁面**：
  - 新增：
    - `wiki/frameworks/taiwan_cybersecurity_management_act.md` (資通安全管理法母法架構、CI 8大領域、規範對象先後順序、受託委外管理)
    - `wiki/frameworks/taiwan_cybersecurity_responsibility_tiers.md` (A~E 級判定準則、管理/技術/認知訓練 應辦事項全對照表、資通系統防護基準 7 構面 75 控制項)
    - `wiki/frameworks/cybersecurity_maintenance_plan_and_risk_assessment.md` (維護計畫 13 款法定內容、詳細風險評鑑 8 步驟、數學鑑價模型 Risk = Asset × Threat × Vulnerability、四大風險處置策略)
    - `wiki/concepts/incident_response_and_reporting.md` (資通安全事件通報及應變：1~4 級事件判定矩陣、時限 1hr / 36hr / 72hr / 1 個月、通報審核流程)
    - `wiki/concepts/threat_intelligence_sharing_and_tlp.md` (資安情資分享：N-ISAC、N-SOC、TLP 交通號誌協定 RED/AMBER/GREEN/WHITE、情資四大生命週期)
    - `wiki/syntheses/taiwan_cybersecurity_legal_matrix.md` (台灣資訊安全與數位法規治理體系總對照矩陣)
    - `wiki/cert_prep/cissp_governance_and_incident_mapping.md` (CISSP Domain 1 & 7: 資安治理、風險評鑑與事件應變考點對照手冊)
  - 更新：
    - `index.md` (全面更新知識網絡、新增 7 大核心頁面雙向鏈結與 Raw 庫存清單)
- **摘要重點**：
  - 確立資安法規範主體優先順序：公務機關 > 關鍵基礎設施 (CI) > 公營事業/財團法人；軍事及情報機關排除適用。
  - 提煉責任等級判定（Max-rule）：A 級（國防外交、全國性服務/個資、醫學中心）、B 級（區域服務/個資、區域醫院）、C 級（自建或委外系統）、D 級（PC 採購維護）、E 級（全代管）。
  - 提煉防護基準與應辦事項：A 級 4 人 4 照 4 職能、弱檢 2 次/年、滲測 1 次/年、ISMS 2 年內導入 3 年內驗證；高防護基準 75 項、中 57 項、普 31 項。
  - 提煉風險評鑑公式：資產價值 $\max(C,I,A)$，風險值 $\text{Asset} \times \text{Threat} \times \text{Vulnerability}$，可接受水準 $<15$。
  - 提煉事件通報黃金時效：知悉 **1 小時內** 通報；損害控制 **1、2 級 72 小時**，**3、4 級 36 小時**；**1 個月內** 提報改善報告。
  - 提煉情資分享體系與 TLP：N-ISAC、N-SOC、TLP RED（禁自動化）、AMBER（內部授權）、GREEN（會員共享）、WHITE（公開）。


## [2026-11-20] Ingest | 吸收成大莊允心博士《資訊安全範疇與現代密碼學基礎》講義
- **操作類型**：Single Ingest & High-Density Mathematical Compilation
- **輸入來源**：
  - `raw/lectures/09_cryptography_and_infosec_foundations.md` (成大莊允心博士講義，49 頁投影片)
- **變更頁面**：
  - 新增：
    - `wiki/concepts/cia_triad.md` (CIA 經典三要素、真實性 Authenticity、責任追溯 Accountability、不可否認性 Non-repudiation、可靠性 Reliability)
    - `wiki/models/cryptographic_hard_problems.md` (密碼學數學困難問題公理：雜湊三大特性 Preimage/Second Preimage/Collision、DL/CDH/DDH、橢圓曲線 ECDL/ECCDH/ECDDH、雙線性配對 BDH/DBDH)
    - `wiki/concepts/advanced_encryption_and_pqc.md` (前瞻加密技術：屬性型 ABE、身分型 IBE、同態加密 HE、等值測試；量子威脅 Shor/Grover、NIST PQC 5 大分支、量子金鑰分發 QKD BB84)
    - `wiki/concepts/privacy_enhancing_technologies.md` (隱私強化技術 PETs：$k$-匿名化、$l$-多樣性、$t$-貼近性；$\epsilon$-差分隱私 DP；聯邦學習 FL 與資料投毒防禦)
    - `wiki/syntheses/symmetric_vs_asymmetric_cryptography.md` (對稱式 vs 非對稱式密碼學橫向評比矩陣、加解密 vs 數位簽章鏡像對照、4 大密文攻擊階梯 COA/KPA/CPA/CCA)
    - `wiki/cert_prep/cissp_domain_3_cryptography.md` (CISSP Domain 3 密碼學考點手冊：演算法安全強度、金鑰管理 NIST SP 800-57、生日攻擊公式 $2^{n/2}$、抗量子升級策略)
  - 更新：
    - `index.md` (更新核心概念、數學模型、綜合評比與 CISSP Domain 3 鏈結)
- **摘要重點**：
  - 確立資訊安全延伸四大屬性與不可否認性之非對稱本質。
  - 形式化定義雜湊函數三特性、離散對數群難題、橢圓曲線難題與雙線性配對公理。
  - 深度剖析 Shor 演算法對 RSA/ECC 的毀滅性破解，以及 Grover 演算法對稱密鑰需加倍之考點（AES-256 具備 128-bit 抗量子安全性）。
  - 解析隱私強化技術 $k$-Anonymity 等價類公理與差分隱私 $\epsilon$-隱私預算。

## [2026-11-20] Query | 個人資料保護法初學者教學簡報
- **輸入來源**：`wiki/frameworks/taiwan_pdpa.md`、`wiki/frameworks/gdpr.md`、`wiki/syntheses/tw_pdpa_vs_gdpr.md`、`raw/lectures/01_personal_data_protection_and_gdpr.md`（Slides 3–16）、`raw/lectures/02_taiwan_personal_data_protection_act_statute.md`（依條文定位）。
- **變更頁面**：
  - 新增：`slides/pdpa/index.html`、`slides/pdpa/styles.css`、`slides/pdpa/slides.js`、`slides/pdpa/content.mjs`、`slides/pdpa/build.mjs`、`slides/pdpa/README.md`。
  - 更新：`index.md`，加入投影片入口。
- **摘要重點**：新建 24 頁臺灣繁體中文初學者簡報，以報名表、校園、社群與職場情境說明定義、合法依據、告知、當事人權利、安全及國際對照。問題標記為延伸教學情境，避免冒稱講師原題。提供逐頁來源、可展開解析、章節目錄、鍵盤翻頁及列印樣式。
- **版本處理**：保留原始素材；簡報標註 2023 年罰鍰修正、2025 年相關修法施行日期未定，以及 GDPR 通報的風險條件。查核日 2026-11-20。官方依據與連結見簡報 README。

## [2026-11-20] Query | Graph 教學投影片逐頁內容與互動腳本
- **輸入來源**：已確認的十個教學主題與製作流程；臺灣個資法、GDPR、對比矩陣與 CIA Wiki，以及 `raw/lectures/01_personal_data_protection_and_gdpr.md`、`raw/lectures/02_taiwan_personal_data_protection_act_statute.md`。
- **變更頁面**：
  - 新增：`slides/pdpa/teaching-plan.md`。
  - 更新：`index.md`，加入規劃入口及階段狀態。
- **摘要重點**：完成 22 個主線節點及 2 個延伸節點的逐頁內容提案，記錄教學目標、畫面文字、圖解、互動回饋、來源與 Graph 關係；明確定義節點回讀、返回原題、版本處理與驗收條件。
- **階段狀態**：大綱已確認，逐頁內容待使用者確認；本輪未改製 HTML、CSS、JavaScript，下一階段為三種代表頁原型。

## [2026-11-20] Publish | 建立 GitHub 私人儲存庫
- **輸入來源**：現有完整 LLMwiki 專案，依使用者指示上傳至 Jennifer-Yen。
- **變更頁面**：新增根目錄 `README.md`、`.gitignore`，初始化 Git，保留既有 Wiki、原始素材、資產、簡報與教學規劃。
- **目的地**：https://github.com/Jennifer-Yen/LLMwiki （私人儲存庫，預設分支 `main`）。
- **摘要重點**：建立遠端儲存庫並準備初始提交；憑證不寫入專案，後續以 Git 提交同步。
