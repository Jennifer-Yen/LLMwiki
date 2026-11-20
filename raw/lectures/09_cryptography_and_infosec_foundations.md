# 課程講義 09：資訊安全範疇與現代密碼學基礎

- **授課主講**：國立成功大學 莊允心 助理教授 (Dr. Yun-Hsin Chuang, NCKU)
- **原始授課主題**：資訊安全範疇 (Scope of Information Security)、密碼學困難問題 (Hard Problems)、進階密碼機制、隱私保護與後量子密碼 (PQC)
- **歸檔時間**：2026-11-20
- **講義章節大綱**：
  1. 資訊安全與網路安全核心概念 (CIA Triad, Authenticity, Accountability, Non-repudiation, Reliability) (Slide 3-6)
  2. 資安分類與防禦體系 (Categories of InfoSec) (Slide 8-9)
  3. 身分鑑別與金鑰協議 (Authentication & Key Agreement - AKA / AKE, DH, Roaming Service) (Slide 10-14)
  4. 密碼學數學困難問題假設 (Hard Problems: Hash, DL/CDH/DDH, ECDL/ECCDH/ECDDH, Bilinear Pairing BDH/DBDH) (Slide 15-24)
  5. 密碼系統分類與攻擊模式 (Cryptanalysis vs. Brute-Force, COA/KPA/CPA/CCA, One-Time Pad) (Slide 26-29)
  6. 對稱式 vs. 非對稱式密碼學與公鑰管理 (Symmetric vs. Asymmetric, Encryption vs. Signature, CAs, IBE, Bitcoin/Blockchain Proof-of-Work) (Slide 30-39)
  7. 新興進階加密機制 (Attribute-Based Encryption ABE, Identity-Based Encryption IBE, Homomorphic Encryption HE, Equality Test) (Slide 40-44)
  8. 隱私保護技術 (Privacy Protection: k-Anonymity, Differential Privacy, Federated Learning, Data Poisoning) (Slide 45-49)
  9. 量子計算威脅、後量子密碼學 (PQC) 與量子金鑰分發 (QKD BB84) (Slide 47-49)

---

## 1. 資訊安全概念與核心要素 (Slide 3-6)

### 1.1 CIA 三要素 (Main Components of Information Security)
- **機密性 (Confidentiality)**：To prevent sensitive information from unauthorized access attempts（防止未經授權之存取嘗試）。
- **完整性 (Integrity)**：To maintain the consistency, accuracy and trustworthiness of data（維持資料之一致性、正確性與可信賴度）。
- **可用性 (Availability)**：To keep information consistently and readily accessible for authorized parties（使獲授權主體能持續且即時存取所需資訊）。

### 1.2 網路安全與延伸安全屬性 (Concept of Cybersecurity)
- **網路安全定義**：保護在電腦、數位設備、網路設備與傳輸線路（含網際網路）等聯網系統中所儲存、傳輸與處理之資訊。
- **延伸關鍵屬性**：
  - **Authenticity (真實性/身分認證)**：確保通訊實體身分之真實無偽。
  - **Accountability (責任追溯性)**：確保主體之行為可明確追溯至其個人。
  - **Nonrepudiation (不可否認性)**：防止行為人否認其所為之發送或接收行為。
  - **Reliability (可靠性)**：確保系統行為符合預期且持續穩定運作。
- **網路安全防護標的**：保護網路及其服務免遭未授權變更 (Modification)、破壞 (Destruction) 或揭露 (Disclosure)。

---

## 2. 資訊安全技術範疇與架構分類 (Slide 8-9)
涵蓋現代資訊安全的多維度保護光譜：
- **資料/訊息機密性 (Data/Message Confidentiality)**：對稱式/非對稱式加密、屬性型加密 (ABE)、身分型加密 (IBE)、同態加密 (HE)。
- **資料/訊息完整性 (Data/Message Integrity)**：數位簽章 (Signature)、密碼學雜湊 (Hash)。
- **系統與網路安全 (System & Network Security)**：入侵偵測系統 (IDS)、入侵防禦系統 (IPS)。
- **身分驗證與金鑰管理 (Authentication & Key Agreement)**：AKA / AKE、遠端身分驗證。
- **隱私保護 (Privacy Protection)**：$k$-匿名化 ($k$-Anonymity)、差分隱私 (Differential Privacy)。
- **安全分析與機器學習 (Data Analysis & ML Security)**：聯邦學習 (Federated Learning)、等值測試 (Equality Test)、防範資料投毒 (Data Poisoning)。
- **整體資安治理 (Information Security Governance)**。

---

## 3. 身分鑑別與金鑰協議 (Authentication & Key Agreement, AKA/AKE) (Slide 10-14)
- **單純金鑰交換的問題**：若僅進行 Diffie-Hellman Key Exchange，易遭受中間人攻擊 (Man-in-the-Middle, MitM)。
- **單純身分鑑別的問題**：僅確認身分，後續通訊缺乏動態會話金鑰 (Session Key) 保護。
- **AKA / AKE 之必要性**：結合身分鑑別與金鑰協議，在確認雙方合法身分之同時安全協商出一次性會話金鑰。包含三方註冊中心 (Registration Center / Trusted Party)、漫遊服務架構 (Global Mobility Network, GLOMONET: Home Agent vs. Foreign Server)。

---

## 4. 密碼學底層數學困難問題 (Hard Problems) (Slide 15-24)

現代密碼學機制的安全性建構於特定數學難題之計算不可行性 (Computational Infeasibility)：

### 4.1 密碼學雜湊函數三大特性假設 (Hash Function Assumptions) (Slide 16)
設單向抗碰撞雜湊函數 $h: A \rightarrow B$，須滿足三條件：
1. **抗原像性 (Preimage Resistance / One-Way Property)**：給定任何 $b \in B$，在計算上極難找到 $a \in A$ 使得 $h(a) = b$。
2. **抗次原像性 (Second Preimage Resistance / Weak Collision Resistance)**：給定 $a \in A$，在計算上極難找到 $c \in A$ 且 $a \ne c$ 使得 $h(a) = h(c)$。
3. **抗碰撞性 (Collision Resistance / Strong Collision Resistance)**：在計算上極難找到任一對不相同的 $a, c \in A$ ($a \ne c$) 使得 $h(a) = h(c)$。

### 4.2 離散對數與 Diffie-Hellman 困難問題 (Slide 18)
令 $G$ 為乘法循環群，階數為大質數 $q$，$g$ 為 $G$ 之生成元 (Generator)：
1. **離散對數問題 (Discrete Logarithm, DL Problem)**：給定 $g^a \bmod q$，求 $a$。
2. **計算型 Diffie-Hellman 問題 (Computational Diffie-Hellman, CDH)**：給定 $g^a \bmod q$ 與 $g^b \bmod q$（$a, b \in \mathbb{Z}_q^*$ 未知），求 $g^{ab} \bmod q$。
3. **判定型 Diffie-Hellman 問題 (Decisional Diffie-Hellman, DDH)**：給定 $g^a, g^b, g^c \bmod q$，判斷 $g^c \stackrel{?}{=} g^{ab} \bmod q$。

### 4.3 橢圓曲線密碼難題 (Elliptic Curve Hard Problems) (Slide 20-21)
令 $E$ 為定義在有限體 $\mathbb{F}_q$ 上之橢圓曲線，$P$ 為加法循環群 $G_1$ 之生成元：
1. **橢圓曲線離散對數問題 (ECDL Problem)**：給定點 $Q = dP \in G_1$，求整數 $d$。
2. **橢圓曲線計算型 Diffie-Hellman 問題 (ECCDH Problem)**：給定 $P, aP, bP \in G_1$（隨機 $a, b \in \mathbb{Z}_q^*$），求 $abP \in G_1$。
3. **橢圓曲線判定型 Diffie-Hellman 問題 (ECDDH Problem)**：給定 $P, aP, bP, cP \in G_1$，判斷 $cP \stackrel{?}{=} abP$。

### 4.4 雙線性配對困難問題 (Bilinear Pairing) (Slide 23)
映射 $\hat{e}: G_1 \times G_1 \rightarrow G_2$ 滿足雙線性 (Bilinear: $\hat{e}(aQ, bR) = \hat{e}(Q, R)^{ab}$)、非退化性 (Non-degenerate: $\hat{e}(Q, R) \ne 1$) 及可計算性：
1. **雙線性 Diffie-Hellman 問題 (BDH)**：給定 $P, aP, bP, cP \in G_1$，求 $\hat{e}(P, P)^{abc} \in G_2$。
2. **判定型雙線性 Diffie-Hellman 問題 (DBDH)**：給定 $P, aP, bP, cP$ 及 $\hat{e}(P, P)^d$，判斷 $\hat{e}(P, P)^d \stackrel{?}{=} \hat{e}(P, P)^{abc}$。

---

## 5. 密碼分析與密文攻擊分類 (Slide 26-29)

### 5.1 密碼破譯 vs. 暴力破解
- **密碼分析 (Cryptanalysis)**：利用演算法內在數學結構弱點與明文統計特性進行破譯。
- **暴力破解 (Brute-Force Attack)**：嘗試所有可能的密鑰空間，平均需嘗試 $2^{k-1}$ 次。

### 5.2 密文攻擊類型階梯 (Types of Attacks on Ciphertext) (Slide 28)
1. **唯密文攻擊 (Ciphertext-Only Attack, COA)**：攻擊者僅掌握一段或多段截獲的密文。
2. **已知明文攻擊 (Known-Plaintext Attack, KPA)**：掌握部分明文及其對應密文。
3. **選擇明文攻擊 (Chosen-Plaintext Attack, CPA)**：攻擊者可自行選擇任意明文並取得其對應密文。
4. **選擇密文攻擊 (Chosen-Ciphertext Attack, CCA)**：攻擊者可自行挑選任意密文並取得解密後的明文（除目標密文本身外）。

### 5.3 一次性密碼本 (One-Time Pad, OTP) (Slide 29)
- **完美保密性 (Perfect Secrecy)**：香農 (Claude Shannon) 證明若金鑰完全隨機、與明文等長、且僅使用一次，則密文不洩漏任何明文資訊。
- **實務限制**：真隨機金鑰生成困難、金鑰長度等於訊息長度導致分發與儲存成本極高。

---

## 6. 對稱式 vs. 非對稱式密碼學與公鑰基礎架構 (Slide 30-39)

### 6.1 加解密 vs. 數位簽章對照 (Slide 33)
| 操作 | 加解密 (Encryption) | 數位簽章 (Digital Signature) |
| :--- | :--- | :--- |
| **核心目標** | 傳送機密訊息給接收者 (Confidentiality) | 簽署並確認身分與完整性 (Authenticity & Integrity) |
| **加密/簽署金鑰** | 用**接收者的 Public Key** 加密 | 用**簽署者的 Private Key** 簽章 |
| **解密/驗證金鑰** | 用**接收者的 Private Key** 解密 | 用**簽署者的 Public Key** 驗證 |
| **操作權限** | 任何人都可加密 | **只有簽署者能簽章** |
| **驗證/讀取權限** | **只有接收者能解密** | 任何人皆可驗證合法性 |
| **安全本質** | 非本人解不開訊息 | 非本人簽不出合法簽章 |
| **對稱式侷限** | 對稱式僅能加解密，**無法提供不可否認性之數位簽章** |

### 6.2 公鑰可信度確認機制 (Slide 34-35)
1. **面對面交換 (In Person)**
2. **憑證機構 (Certificate Authorities, CAs)**：公正第三方驗證身分並以數位憑證 (X.509) 綁定身分與 Public Key。
3. **身分型密碼 (Identity-Based)**：以使用者真實身分識別碼（如 Email）直接作為 Public Key。

### 6.3 比特幣與區塊鏈機制 (Slide 36-39)
- **帳戶與金鑰**：Address 即 Public Key（匿名）；印章即 Private Key。
- **交易驗證**：A 轉給 B 之交易由 A 以 Private Key 進行數位簽章。
- **工作量證明 (Proof of Work, PoW)**：礦工尋找特定隨機數 (Nonce)，使整個區塊的 Hash 值具有足夠前導零 (Difficulty)，利用 Hash 的單向與抗碰撞性達到防竄改 (Tamper-Resistance)。

---

## 7. 新興進階加密機制 (Advanced Encryption) (Slide 40-44)
1. **屬性型加密 (Attribute-Based Encryption, ABE)**：
   - 密文或私鑰與使用者的「屬性集合（如職位、部門、安全許可）」關聯，僅當屬性滿足存取結構樹時方可解密（細粒度存取控制）。
2. **身分型加密 (Identity-Based Encryption, IBE)**：
   - 發送者利用金鑰生成中心 (KGC) 的公開參數與接收者的身分識別資訊（如 Email）直接計算出公鑰進行加密，免除傳統 PKI 憑證鏈之管理開銷。
3. **同態加密 (Homomorphic Encryption, HE)**：
   - 允許在**不解密的情況下直接對密文進行運算**，運算結果解密後等於直接對明文運算的結果：$\text{Dec}(\text{Enc}(m_1) \oplus \text{Enc}(m_2)) = m_1 + m_2$。支援隱私安全雲端計算。
4. **等值測試 (Equality Test)**：
   - 允許第三方在**不解開密文**的情況下，直接比對兩筆密文背後的明文是否相同。

---

## 8. 隱私保護技術 (Privacy Protection) (Slide 45-49)
1. **$k$-匿名化 ($k$-Anonymity)**：資料集中每一筆個資記錄之準識別符 (Quasi-identifiers)，在該發布資料集中至少與其他 $(k-1)$ 個人的記錄無法區分。
2. **差分隱私 (Differential Privacy, DP)**：在查詢結果中注入數學控制的隨機雜訊（如拉普拉斯雜訊），確保資料庫中是否存在特定個人的單一記錄，不會顯著影響統計查詢的輸出分佈。
3. **聯邦學習 (Federated Learning, FL)**：各端點在本地訓練機器學習模型，僅將模型權重參數（而非原始敏感資料）上傳聚合伺服器進行全局模型更新。
4. **資料投毒攻擊 (Data Poisoning)**：惡意攻擊者透過在訓練集中摻雜惡意構造之髒資料，藉以操控模型推論結果或植入隱蔽後門。

---

## 9. 量子計算威脅、後量子密碼學 (PQC) 與量子金鑰分發 (QKD) (Slide 47-49)

### 9.1 量子計算對現有密碼體系之衝擊
- **毀滅性衝擊 (Broken)**：利用秀爾演算法 (Shor's Algorithm)，大規模量子電腦可在多項式時間內解出質因數分解與離散對數問題，現有公鑰體系（RSA、DH、DSA、ECDH、ECDSA）將全數失效！
- **輕微衝擊 (Mildly Affected)**：葛羅佛演算法 (Grover's Algorithm) 對對稱密碼與雜湊函數提供平方根加速，對策為將金鑰長度加倍（如 AES-128 升級至 AES-256、SHA-256 升級至 SHA-512 即可維持安全強度）。

### 9.2 後量子密碼學五大演算法分支 (Post-Quantum Cryptography, PQC)
1. **晶格基礎密碼 (Lattice-based)**：主流核心（如 CRYSTALS-Kyber, CRYSTALS-Dilithium）。
2. **編碼基礎密碼 (Code-based)**：如 Classic McEliece。
3. **同源密碼 (Isogenies of elliptic curves)**：基於超奇異橢圓曲線同源。
4. **多變量密碼 (Multivariate)**：基於求解多變量非線性多項式方程組。
5. **雜湊基礎密碼 (Hash-based)**：基於 Merkle 雜湊樹（如 SPHINCS+），純依賴雜湊抗碰撞性。

### 9.3 量子金鑰分發 (Quantum Key Distribution, QKD)
- 以物理學原理（光子偏振態與海森堡測不準原理）保證傳輸安全，代表性協議為 **BB84 協議**；任何竊聽行為均會破壞量子態而立即被偵測。
