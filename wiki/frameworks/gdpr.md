---
title: 歐盟通用資料保護規則 (General Data Protection Regulation, GDPR)
category: framework
related_domains: [CISSP Domain 1, CISSP Domain 2, ISO 27701]
primary_security_goal: Privacy, Accountability & Transparency
last_updated: 2026-11-20
---

# 歐盟通用資料保護規則 (GDPR)

## 1. 核心概念與立法背景
- **法規代號**：Regulation (EU) 2016/679。
- **生效與執行**：2016 年 5 月公布生效，經 2 年緩衝宣導期，於 **2018 年 5 月 25 日** 正式強制執行，取代 1995 年的《個人資料保護指令》(Directive 95/46/EC)。
- **核心宗旨**：保障歐盟境內自然人之基本權利與自由，特別是其個人資料保護權；並促進歐盟境內個人資料之自由流通。

## 2. 域外管轄效力 (Extraterritorial Jurisdiction, Art. 3)
GDPR 不以企業設立地點為限，具備強大的長臂管轄：
1. **機構標準 (Art. 3(1))**：控管者或處理者於歐盟境內設有機構，其業務活動涉及個資處理者（不論處理行為是否發生在歐盟境內）。
2. **目標市場標準 (Targeting Criterion, Art. 3(2))**：機構未在歐盟設點，但處理歐盟境內當事人個資，且活動屬於：
   - 向歐盟境內當事人提供商品或服務（無論是否收費，如台灣電商向歐盟出貨、旅館接待歐盟旅客）。
   - 對歐盟境內當事人在歐盟境內之行為進行常態性監控（如網站 Cookie 追蹤、線上行為定向廣告）。

## 3. GDPR 核心原則 (Principles Relating to Processing, Art. 5)
1. **合法、公平與透明 (Lawfulness, Fairness and Transparency)**
2. **目的限制 (Purpose Limitation)**
3. **資料最小化 (Data Minimisation)**
4. **正確性 (Accuracy)**
5. **儲存限制 (Storage Limitation)**
6. **完整性與機密性 (Integrity and Confidentiality)**
7. **當責性 (Accountability)**：控管者必須能舉證證明其遵循上述原則。

## 4. 當事人進階權利 (Data Subject Rights, Ch. 3)
除傳統的查詢、閱覽、更正、刪除外，GDPR 創設了多項現代數位隱私權利：
- **被遺忘權 / 刪除權 (Right to Erasure / to be Forgotten, Art. 17)**：在特定條件下（如目的達成、撤回同意、違法處理），當事人有權要求徹底刪除資料。
- **資料可攜權 (Right to Data Portability, Art. 20)**：有權以結構化、通用且機器可讀之格式取得個資，並將其傳轉至另一控管者。
- **反對自動化決策與剖析權 (Right to object to Automated Decision-Making & Profiling, Art. 22)**：當事人有權不受完全依賴自動化處理（含 Profiling）且產生法律效果或重大影響之決定拘束，企業必須具備**人為介入機制 (Human Intervention)**。

## 5. 控制措施、事故通報與合規要求
- **資料保護設計與預設 (Data Protection by Design and by Default, Art. 25)**。
- **假名化與加密 (Pseudonymisation & Encryption, Art. 32)**：明文列為技術安全措施。
- **★ 72 小時資料外洩通報 (Data Breach Notification, Art. 33, 34)**：
  - 控管者應於知悉個人資料外洩事故後 **72 小時內** 通報主管監督機構 (DPA)。
  - 若外洩可能對個人權利自由造成高風險時，應無不當延遲通知當事人。
- **資料保護官 (Data Protection Officer, DPO, Art. 37)**：公務機關、核心業務涉及大規模系統性監控、或大規模處理特種個資之企業，**強制必須設立 DPO**。
- **跨境傳輸機制 (Ch. 5)**：原則禁止、例外允許（需有適足性認定 Adequacy Decision、標準契約條款 SCC、或拘束性企業規則 BCR）。

## 6. 巨額罰鍰機制 (Administrative Fines, Art. 83)
GDPR 行政罰鍰採兩級制，取其高者：
- **較輕級別（違反應對與技術規範）**：最高 **1,000 萬歐元** 或全球年度營業額 **2%**。
- **重大違規（違反核心原則、當事人權利、跨境傳輸）**：最高 **2,000 萬歐元** 或全球年度營業額 **4%**。

## 7. 出處依據與關聯鏈結
- 原始出處：`[Lecture_PDA_GDPR, Slide 6-11]`
- 橫向評比：[[wiki/syntheses/tw_pdpa_vs_gdpr|我國個資法 vs. GDPR 深度對比矩陣]]
- 關聯頁面：[[wiki/frameworks/taiwan_pdpa|我國個人資料保護法]]
- 證照考點：[[wiki/cert_prep/cissp_domain_1_legal_regulations|CISSP Domain 1 法律與合規]]
