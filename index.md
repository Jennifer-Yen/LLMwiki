# 資訊安全管理 LLM Wiki - 知識總目錄 (Map of Content)

> **歡迎使用資訊安全管理知識庫**  
> 本知識庫遵循 Andrej Karpathy 的 LLM Wiki 方法構建，專為「學術研究」與「專業證照考取（CISSP, CISM, ISO 27001 等）」量身打造。  
> 運作規範與 SOP 請參閱 [AGENTS.md](file:///c:/Users/jenni/Desktop/11501_GAI/HW10/LLMwiki/AGENTS.md)。

---

## 1. 基礎理論與經典安全模型 (Security Foundations & Models)
- **核心概念 (Concepts)**
  - [[wiki/concepts/cia_triad|CIA 三要素與資訊安全核心屬性 (機密性、完整性、可用性、真實性、責任追溯、不可否認性)]]
  - [[wiki/concepts/advanced_encryption_and_pqc|進階密碼機制、量子計算威脅與後量子密碼學 (ABE, IBE, 同態加密, 等值測試, Shor/Grover, NIST PQC, QKD BB84)]]
  - [[wiki/concepts/privacy_enhancing_technologies|隱私強化技術與機器學習安全 (k-Anonymity, 差分隱私 DP, 聯邦學習 FL, 資料投毒防禦)]]
  - [[wiki/concepts/incident_response_and_reporting|資通安全事件通報與應變機制 (1~4級事件判定、1hr/36hr/72hr時限)]]
  - [[wiki/concepts/threat_intelligence_sharing_and_tlp|資通安全情資分享與交通號誌協定 (N-ISAC, N-SOC, TLP Red/Amber/Green/White)]]
  - [[wiki/concepts/defense_in_depth|縱深防禦 (Defense in Depth)]] *(待編譯)*
  - [[wiki/concepts/least_privilege|最小權限原則與職務區隔 (PoLP & SoD)]] *(待編譯)*
  - [[wiki/concepts/zero_trust|零信任架構原則 (Zero Trust Architecture)]] *(待編譯)*
- **經典狀態機與密碼學數學模型 (Models)**
  - [[wiki/models/cryptographic_hard_problems|密碼學數學困難問題公理 (離散對數 DL/CDH/DDH, 橢圓曲線 ECDL/ECCDH/ECDDH, 雙線性配對 BDH/DBDH, 雜湊三大特性)]]
  - [[wiki/models/bell_lapadula|Bell-LaPadula (BLP) 機密性模型]] *(待編譯)*
  - [[wiki/models/biba|Biba 完整性模型]] *(待編譯)*
  - [[wiki/models/clark_wilson|Clark-Wilson 商業完整性模型]] *(待編譯)*
  - [[wiki/models/brewer_nash|Brewer-Nash (中國牆) 利益衝突模型]] *(待編譯)*

---

## 2. 國際標準與法規體系 (Frameworks & Regulations)
- **資通安全管理專法與責任等級體系**
  - [[wiki/frameworks/taiwan_cybersecurity_management_act|中華民國資通安全管理法 (Cyber Security Management Act)]]
  - [[wiki/frameworks/taiwan_cybersecurity_responsibility_tiers|資通安全責任等級分級與應辦事項 (A~E 級判定、管理/技術/訓練矩陣、防護基準 7 構面 75 控制項)]]
  - [[wiki/frameworks/cybersecurity_maintenance_plan_and_risk_assessment|資通安全維護計畫與詳細風險評鑑指引 (13大法定項目、Asset×Threat×Vulnerability 計算模型)]]
- **個人資料與隱私保護法規**
  - [[wiki/frameworks/taiwan_pdpa|中華民國個人資料保護法 (Taiwan PDPA)]]
  - [[wiki/frameworks/gdpr|歐盟通用資料保護規則 (GDPR)]]
- **資安犯罪、智財與營業秘密專法**
  - [[wiki/frameworks/taiwan_cybercrime_law|中華民國刑法電腦犯罪專章與資安罪刑 (妨害電腦使用罪)]]
  - [[wiki/frameworks/trade_secret_act|中華民國營業秘密法 (Trade Secrets Act)]]
- **國際管理標準體系**
  - [[wiki/frameworks/iso_27001_2022|ISO/IEC 27001:2022 資訊安全管理系統 (ISMS)]] *(待編譯)*
  - [[wiki/frameworks/nist_csf_2_0|NIST 網路安全框架 (NIST CSF 2.0)]] *(待編譯)*
  - [[wiki/frameworks/cis_controls_v8|CIS Controls v8 關鍵安全控制措施]] *(待編譯)*

---

## 3. 橫向跨領域評比矩陣 (Syntheses & Comparisons)
- [[wiki/syntheses/symmetric_vs_asymmetric_cryptography|對稱式 vs. 非對稱式密碼學與密文攻擊綜合評比矩陣 (加解密 vs 簽章鏡像, 4大密文攻擊 COA/KPA/CPA/CCA, OTP 完美保密)]]
- [[wiki/syntheses/taiwan_cybersecurity_legal_matrix|台灣資訊安全與數位法規治理體系總對照矩陣 (個資法 vs 刑法 vs 營業秘密 vs 智財權 vs 資安法)]]
- [[wiki/syntheses/tw_pdpa_vs_gdpr|我國個資法 vs. 歐盟 GDPR 深度對比矩陣 (適用、權利、通報、罰則)]]
- [[wiki/syntheses/ipr_trade_secret_vs_patent|智慧財產權體系橫向評比矩陣 (營業秘密 vs 專利 vs 著作權 vs 授權模式)]]
- [[wiki/syntheses/access_control_models_comparison|經典存取控制模型橫向對比矩陣 (BLP vs Biba vs Clark-Wilson)]] *(待編譯)*

---

## 4. 專業證照考點對照 (Certification Prep)
- **CISSP / CISM 知識領域對照手冊**
  - [[wiki/cert_prep/cissp_domain_1_legal_regulations|CISSP Domain 1: 法律、法規、隱私與智慧財產權考點手冊]]
  - [[wiki/cert_prep/cissp_governance_and_incident_mapping|CISSP Domain 1 & 7: 資安治理、風險評鑑與事件應變考點對照手冊 (Due Care vs Due Diligence, 評鑑公式, RCA)]]
  - [[wiki/cert_prep/cissp_domain_3_cryptography|CISSP Domain 3: 密碼學與安全架構工程考點手冊 (演算法強度、金鑰管理 NIST 800-57, 量子威脅, 生日攻擊)]]
  - [[wiki/cert_prep/cissp_domain_2|Domain 2: 資產安全 (Asset Security)]] *(待編譯)*
  - [[wiki/cert_prep/cissp_domain_4|Domain 4: 通訊與網路安全 (Network Security)]] *(待編譯)*
  - [[wiki/cert_prep/cissp_domain_5|Domain 5: 身分與存取管理 (IAM)]] *(待編譯)*
  - [[wiki/cert_prep/cissp_domain_6|Domain 6: 安全評估與測試 (Assessment & Testing)]] *(待編譯)*
  - [[wiki/cert_prep/cissp_domain_8|Domain 8: 軟體開發安全 (Software Development)]] *(待編譯)*

---

## 5. 學術研究與論文精讀 (Academic Research & Papers)
- *(目前尚無論文資料，請將論文放入 `raw/papers/` 或提供 URL 後執行 `/ingest`)*

---

## 教學投影片 (Teaching Slides)

- [個人資料保護法入門教學簡報](slides/pdpa/index.html)：24 頁臺灣繁體中文 HTML 投影片，面向初學者，包含基本概念、生活情境、可展開解析、Wiki 與講義來源連結，以及法規版本差異。
- [簡報使用與維護說明](slides/pdpa/README.md)：離線開啟、鍵盤操作、列印與內容來源。
- [Graph 教學逐頁規劃](slides/pdpa/teaching-plan.md)：大綱已確認；逐頁內容與互動腳本待確認，確認後製作代表頁原型。

## 6. 原始資料庫存清單 (Raw Sources Inventory)
- **講義與投影片 (`raw/lectures/`)**
  - [01_personal_data_protection_and_gdpr.md](file:///c:/Users/jenni/Desktop/11501_GAI/HW10/LLMwiki/raw/lectures/01_personal_data_protection_and_gdpr.md)：成大莊允心博士《個人資料保護法與 GDPR》講義。
  - [02_taiwan_personal_data_protection_act_statute.md](file:///c:/Users/jenni/Desktop/11501_GAI/HW10/LLMwiki/raw/lectures/02_taiwan_personal_data_protection_act_statute.md)：全國法規資料庫《個人資料保護法》完整條文與手寫重點標註。
  - [03_criminal_code_and_trade_secrets.md](file:///c:/Users/jenni/Desktop/11501_GAI/HW10/LLMwiki/raw/lectures/03_criminal_code_and_trade_secrets.md)：成大莊允心博士《刑法與營業秘密法》講義。
  - [04_intellectual_property_rights.md](file:///c:/Users/jenni/Desktop/11501_GAI/HW10/LLMwiki/raw/lectures/04_intellectual_property_rights.md)：成大莊允心博士《智慧財產權與著作權法》講義。
  - [05_cybersecurity_management_act_overview.md](file:///c:/Users/jenni/Desktop/11501_GAI/HW10/LLMwiki/raw/lectures/05_cybersecurity_management_act_overview.md)：行政院資通安全處《資通安全管理法及子法簡介》講義。
  - [06_cybersecurity_responsibility_tiers.md](file:///c:/Users/jenni/Desktop/11501_GAI/HW10/LLMwiki/raw/lectures/06_cybersecurity_responsibility_tiers.md)：行政院資通安全處《資通安全責任等級分級及應辦事項說明》講義。
  - [07_cybersecurity_maintenance_plan_and_risk.md](file:///c:/Users/jenni/Desktop/11501_GAI/HW10/LLMwiki/raw/lectures/07_cybersecurity_maintenance_plan_and_risk.md)：行政院資通安全處《資通安全維護計畫撰寫作業》講義。
  - [08_incident_reporting_and_threat_intel_sharing.md](file:///c:/Users/jenni/Desktop/11501_GAI/HW10/LLMwiki/raw/lectures/08_incident_reporting_and_threat_intel_sharing.md)：行政院資通安全處《資通安全事件通報、應變與演練實務》及《資通安全情資分享實務》講義。
  - [09_cryptography_and_infosec_foundations.md](file:///c:/Users/jenni/Desktop/11501_GAI/HW10/LLMwiki/raw/lectures/09_cryptography_and_infosec_foundations.md)：成大莊允心博士《資訊安全範疇與現代密碼學基礎》講義。
- **個人/課堂筆記 (`raw/notes/`)**：無
- **學術文獻 (`raw/papers/`)**：無

---
*最後更新時間：2026-11-20 | 維護者：AI Agent (InfoSec Knowledge Architect)*
