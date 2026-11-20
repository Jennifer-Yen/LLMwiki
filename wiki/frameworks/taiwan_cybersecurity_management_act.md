---
title: 台灣資通安全管理法 (Cyber Security Management Act)
category: framework
primary_security_goal: Governance & National Security (資安治理與國家安全)
related_domains: [CISSP Domain 1, ISO 27001:2022 A.5.1]
last_updated: 2026-11-20
---

# 台灣資通安全管理法 (Cyber Security Management Act)

## 1. 立法宗旨與法源背景
- **立法沿革**：立法院於民國 107 年（2018 年）5 月 11 日三讀通過，同年 6 月 6 日總統公布施行。
- **立法目的**：為加速建構國家資通安全環境，保障國家安全，維護社會公共利益，保護人民合法權益，特制定本法（第 1 條）。
- **主管機關**：數位發展部（資通安全署）（原為行政院資通安全處）。
- **關鍵排除範圍**：**軍事機關及情報機關不適用本法之規定**（第 3 條第 5 款但書）。

---

## 2. 規範對象與適用優先順序

### 2.1 規範主體分類
依本法第 3 條第 5、6 款，規範對象區分為兩大體系：
1. **公務機關**：指依法行使公權力之中央、地方機關（構）或公法人。
2. **特定非公務機關**：
   - **關鍵基礎設施提供者 (Critical Infrastructure Providers, CI)**
   - **公營事業**
   - **政府捐助之財團法人**

### 2.2 規範強度與適用優先順序 (Precedence Rules)
當實體兼具多重身分時，適用原則遵循「法規強度最高者優先」：
$$\text{公務機關} > \text{關鍵基礎設施提供者 (CI)} > \text{公營事業 / 財團法人}$$

- **案例 1**：兼具公務機關與 CI 者（如交通部民航局飛航服務總台）$\rightarrow$ **優先適用公務機關之規定**。
- **案例 2**：兼具公營事業/財團法人與 CI 者（如台灣電力公司、台灣中油）$\rightarrow$ **優先適用關鍵基礎設施提供者之規定**。

---

## 3. 八大關鍵基礎設施領域 (Critical Infrastructure, CI)
我國關鍵基礎設施劃分為八大核心領域，各領域由其**中央目的事業主管機關**監管：
1. **能源 (Energy)**：經濟部
2. **水資源 (Water)**：經濟部
3. **通訊傳播 (Communications)**：國家通訊傳播委員會 (NCC) / 數位發展部
4. **交通事業 (Transportation)**：交通部
5. **銀行與金融 (Banking & Finance)**：金融監督管理委員會 (FSC)
6. **緊急救援 / 衛生醫療 (Healthcare & Emergency)**：衛生福利部、內政部
7. **高科技園區 (High-tech Parks)**：國家科學及技術委員會 (國科會)
8. **政府機關 (Government)**：行政院及各級公務機關

---

## 4. 核心法律義務與管理機制
1. **資通安全維護計畫 (CSMP)**：各機關應符合其責任等級之要求，訂定、實施及提報資通安全維護計畫（第 10 條、第 16 條、第 17 條）。參閱 [[wiki/frameworks/cybersecurity_maintenance_plan_and_risk_assessment]]。
2. **資通安全長 (CISO) 設置**：公務機關應置資通安全長，由副首長或適當人員兼任，負責督導資安業務（第 11 條）；特定非公務機關設置資通安全管理代表。
3. **受託委外管理 (Supply Chain & Outsourcing)**：委託租賃、建置或維運資通系統時，應選任具備適當能力之受託者，並監督其資安維護情形；包含核心系統客製化開發者須檢附第三方檢測證明（第 12 條、施行細則第 4 條）。
4. **情資分享機制**：主管機關建置國家資安情資分享平台（N-ISAC、N-SOC），各機關應依法配合通報與分享（第 8 條）。參閱 [[wiki/concepts/threat_intelligence_sharing_and_tlp]]。
5. **事件通報及應變**：知悉資安事件發生時，必須於 **1 小時內** 向上通報，並於法定時限內完成應變與提出改善報告（第 14 條、第 18 條）。參閱 [[wiki/concepts/incident_response_and_reporting]]。

---

## 5. 證照高頻考點與易混淆陷阱 (Exam Focus)

- **考點 1：軍警情治的適用豁免**
  - 軍事機關及情報機關完全排除於《資通安全管理法》適用範圍外。
- **考點 2：CI 適用優於公營事業**
  - 台電、中油若發生事件，通報窗口與受管對象為 CI 領域中央目的事業主管機關，而非一般公營事業窗口。
- **考點 3：責任等級分級概念**
  - 機關不是一律做相同防禦，而是依「國家機密、CI、個資規模、共用系統」劃分為 A、B、C、D、E 五級。參閱 [[wiki/frameworks/taiwan_cybersecurity_responsibility_tiers]]。
- **考點 4：CISSP 治理框架對照**
  - 本法為典型的國家級法定合規體系，對應 CISSP Domain 1 之 **法令與監管要求 (Legal and Regulatory Issues)** 以及 **安全治理原則 (Security Governance Principles)**。

---

## 6. 出處依據與關聯鏈結
- **法規出處**：《中華民國資通安全管理法》總統華總一義字第 10700060011 號令；
- **講義依據**：[Lecture_05_Overview, Slide 3-7]、[Lecture_08_Incident, Slide 3-5]
- **關聯頁面**：
  - [[wiki/frameworks/taiwan_cybersecurity_responsibility_tiers]]
  - [[wiki/frameworks/cybersecurity_maintenance_plan_and_risk_assessment]]
  - [[wiki/concepts/incident_response_and_reporting]]
  - [[wiki/concepts/threat_intelligence_sharing_and_tlp]]
  - [[wiki/cert_prep/cissp_domain_1_legal_regulations]]
