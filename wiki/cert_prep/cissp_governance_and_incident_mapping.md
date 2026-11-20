---
title: CISSP 考點對照手冊：資安治理、風險評鑑與事件應變 (Governance, Risk & Incident Response)
category: cert_prep
related_domains: [CISSP Domain 1, CISSP Domain 7, CISM Domain 1, CISM Domain 4]
primary_security_goal: Governance, Risk Management & Incident Handling
last_updated: 2026-11-20
---

# CISSP 考點對照手冊：資安治理、風險評鑑與事件應變

本對照手冊將我國《資通安全管理法》、責任等級體系、風險評鑑準則與事件通報應變，深度對齊 CISSP CBK (Common Body of Knowledge) 與 CISM 證照架構，提煉高頻考點與陷阱解析。

---

## 1. 資安治理與組織責任 (Domain 1: Security Governance)

### 1.1 應盡關注 (Due Care) vs. 應盡調查 (Due Diligence)
這是 CISSP Domain 1 最常考的經典對比：
- **Due Care (應盡關注 / 善良管理人注意義務)**：
  - **核心**：做正確的事（Prudent Person Rule），實施合理的安全防護措施。
  - **範例**：機關依法建置防火牆、防毒軟體、落實密碼 90 天更換、實施資料加密。
- **Due Diligence (應盡調查 / 審查驗證義務)**：
  - **核心**：查證防護是否確實有效（Verification & Monitoring），在做決定前徹底調查。
  - **範例**：定期辦理滲透測試、弱點掃描、委外前評估廠商資安能力、每年辦理內部資安稽核。

### 1.2 高階管理層職責 (Roles & Responsibilities)
- **資安長 (CISO / CSO)**：策略規劃、資源分配、政策核定與分工協調。
- **資料擁有者 (Data Owner / Information Owner)**：
  - 對資料負最終責任，**決定資訊資產之分類等級 (Classification)**、授權存取清冊、決定備份與復原需求。
- **資料保管者 (Data Custodian / System Administrator)**：
  - 依照 Data Owner 之指示實作技術控制（備份、加密、存取控制、日誌留存）。

---

## 2. 風險管理計算模型與考點 (Domain 1: Risk Assessment)

### 2.1 定性評估 vs. 定量評估 (Qualitative vs. Quantitative)
- **定性評估 (Qualitative)**：使用經驗矩陣、情境描述（普/中/高、1~3 分制）。
- **定量評估 (Quantitative)**：以貨幣金額量化計算。
  - 資產價值 (AV, Asset Value)
  - 暴露係數 (EF, Exposure Factor, %)
  - 單一預期損失 (SLE, Single Loss Expectancy):
    $$\text{SLE} = \text{AV} \times \text{EF}$$
  - 年化發生率 (ARO, Annualized Rate of Occurrence)
  - 年化預期損失 (ALE, Annualized Loss Expectancy):
    $$\text{ALE} = \text{SLE} \times \text{ARO}$$

### 2.2 我國資安評鑑與 CISSP 映射公式
- **資產價值取大原則 (Max-rule)**：
  $$\text{Asset Value} = \max(\text{Confidentiality}, \text{Integrity}, \text{Availability})$$
- **多維風險值**：
  $$\text{Risk} = \text{Asset Value} \times \text{Threat Likelihood} \times \text{Vulnerability}$$
- **四種風險處理處置 (Risk Treatment)**：
  1. **Mitigation / Reduction (緩解/降低)**：加裝防護降低漏洞利用機率。
  2. **Acceptance / Retention (接受/保留)**：殘餘風險 (Residual Risk) 低於門檻（如風險值 $<15$），簽核承受。
  3. **Avoidance (規避/避免)**：關閉有風險的系統或放棄該業務。
  4. **Transference / Sharing (轉移/分擔)**：購買資安險或委由第三方 MSSP。

---

## 3. 資安事件管理生命週期 (Domain 7: Incident Response)

### 3.1 NIST SP 800-61 / ISO 27035 應變六階段
1. **Preparation (準備)**：訂定 CSMP 計畫、組建 CSIRT 團隊、實施通報演練。
2. **Detection & Analysis (偵測與分析)**：透過 SOC 告警、IDS/IPS、通報系統發現異狀並判定事件等級 (1~4 級)。
3. **Containment (遏止 / 損害控制)**：隔離受駭主機、防火牆阻斷 IP、防止災情橫向擴散。
4. **Eradication (根除)**：清除後門惡意程式、修補漏洞。
5. **Recovery (復原)**：自乾淨備份還原系統、驗證服務正常上線。
6. **Lessons Learned (事後檢討 / 改善報告)**：根因分析 (RCA)、更新防護基準、1 個月內完成報告結案。

### 3.2 關鍵時效考點速記 (Breach Notification Timelines)
- **我國資安法**：知悉後 **1 小時內通報**；1、2 級 **72 小時** 完成損害控制；3、4 級 **36 小時** 完成損害控制；**1 個月內** 提報調查改善報告。
- **歐盟 GDPR**：知悉個人資料外洩後 **72 小時內通報** 監管機構 (DPA)。

---

## 4. 威脅情資與聯防分享 (Domain 7: Threat Intelligence & CTI)

### 4.1 交通號誌協定 (TLP) 考點
- **RED (紅色)**：僅限當面或指定受限管道溝通，**嚴禁自動化系統分享**。
- **AMBER (黃色)**：組織內部 Need-to-know，不得發布至外部。
- **GREEN (綠色)**：社群同儕共享，不可公開於外部網站。
- **WHITE (白色)**：公開情資，無限制。

### 4.2 威脅指標對比：IoC vs. IoA
- **IoC (Indicators of Compromise，入侵指標)**：
  - 事後鑑識證據：檔案 MD5/SHA256、惡意 IP、釣魚網域、註冊表更動。
- **IoA (Indicators of Attack，攻擊指標)**：
  - 進行中之攻擊意圖與行為手法：PowerShell 記憶體載入、橫向提權行為 (Lateral Movement)、憑證傾印 (Credential Dumping)。

---

## 5. 出處依據與關聯鏈結
- **來源依據**：[Lecture_06_ResponsibilityTiers]、[Lecture_07_MaintenancePlan]、[Lecture_08_Incident_and_ThreatIntel]
- **關聯頁面**：
  - [[wiki/frameworks/taiwan_cybersecurity_management_act]]
  - [[wiki/frameworks/taiwan_cybersecurity_responsibility_tiers]]
  - [[wiki/frameworks/cybersecurity_maintenance_plan_and_risk_assessment]]
  - [[wiki/concepts/incident_response_and_reporting]]
  - [[wiki/concepts/threat_intelligence_sharing_and_tlp]]
  - [[wiki/syntheses/taiwan_cybersecurity_legal_matrix]]
