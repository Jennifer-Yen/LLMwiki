---
title: CISSP Domain 3: 密碼學與安全架構工程高頻考點手冊 (Cryptography & Security Architecture)
category: cert_prep
related_domains: [CISSP Domain 3, CISM Domain 3]
primary_security_goal: Cryptographic Primitives & Security Architecture
last_updated: 2026-11-20
---

# CISSP Domain 3: 密碼學與安全架構工程考點手冊

本手冊彙整 CISSP CBK Domain 3 (Security Architecture and Engineering) 中佔分比重最高的**密碼學 (Cryptography)** 與前瞻抗量子架構考點，釐清演算法特性、金鑰管理、數位憑證與量子威脅防禦。

---

## 1. 核心密碼演算法與安全強度速查表

| 演算法分類 | 代表演算法 | 最小推薦金鑰長度 | 演算法特性與底層數學難題 | 應用場景 |
| :--- | :--- | :---: | :--- | :--- |
| **對稱區塊加密** | **AES** (Rijndael) | 128 / 256 bit | SPN 結構，128-bit 區塊大小，抗差分與線性密碼分析 | 靜置資料 (BitLocker)、TLS 傳輸、WPA3 |
| **對稱序列加密** | **ChaCha20** | 256 bit | ARX (Add-Rotate-Xor) 運算，無查表時間側錄弱點 | TLS 1.3、行動裝置與無硬體 AES 加速環境 |
| **公鑰加密/簽章** | **RSA** | $\ge 2048$ bit (建議 3072) | 大整數質因數分解難題 (IFP) | Web PKI 憑證、舊系統相容 |
| **橢圓曲線密碼** | **ECC** (ECDH, ECDSA) | $\ge 256$ bit | 橢圓曲線離散對數難題 (ECDL)；256-bit ECC 安全強度 $\approx$ 3072-bit RSA | 現代 TLS 1.3、Bitcoin (secp256k1)、SSH |
| **密碼學雜湊** | **SHA-256 / SHA-3** | 256 / 384 / 512 bit | Merkle-Damgård 結構 (SHA-2) / 海綿結構 Sponge (SHA-3)；抗原像、抗次原像、抗碰撞 | 數位簽章雜湊、區塊鏈 PoW、資料完整性 |
| **金鑰衍生函數** | **PBKDF2, Argon2, bcrypt** | - | 算力與記憶體硬度函數 (Memory-hard)，抗 GPU/ASIC 字典攻擊 | 使用者密碼儲存與金鑰延伸 |

---

## 2. 密碼破譯與攻擊模式高頻考點 (Cryptanalysis Exam Flashpoints)

```text
唯密文攻擊 (COA) ──> 已知明文攻擊 (KPA) ──> 選擇明文攻擊 (CPA) ──> 選擇密文攻擊 (CCA)
(攻擊者掌握資訊最少)                                                (攻擊者掌握資訊最多/最強)
```

1. **生日攻擊 (Birthday Attack)**：
   - 考點：利用機率論中的生日悖論破解**雜湊函數抗碰撞性 (Collision Resistance)**。
   - 數學考題：對 $n$-bit 雜湊函數，發動碰撞攻擊所需的雜湊次數約為 $2^{n/2}$（非 $2^n$！）。
2. **中間人攻擊 (Man-in-the-Middle, MitM)**：
   - 考點：Diffie-Hellman 協議本身缺乏身分驗證，容易被 MitM 劫持。防禦解方是導入 **公鑰憑證 (PKI X.509)** 或使用 **AKE (Authenticated Key Exchange)**。
3. **重送攻擊 (Replay Attack)**：
   - 考點：攔截合法傳輸的密文或驗證封包並重複發送。防禦解方為加入**一次性隨機數 (Nonce)** 或**時間戳記 (Timestamp)**。
4. **填充預言機攻擊 (Padding Oracle Attack)**：
   - 考點：針對 CBC 模式的選擇密文攻擊 (CCA)，利用伺服器解密後回傳的 Padding Error 資訊逐步推導出明文。防禦解方是採用 **AEAD 認證加密模式 (如 AES-GCM)**。

---

## 3. 金鑰管理生命週期 (Key Management Lifecycle - NIST SP 800-57)

密碼系統的真正脆弱點幾乎永遠不在數學演算法本身，而在**金鑰管理**：
1. **生成 (Generation)**：必須使用通過 FIPS 140-2/3 認證之真隨機數生成器 (TRNG) 或密碼學安全虛擬隨機數 (CSPRNG)。
2. **儲存 (Storage)**：主金鑰與私鑰必須儲存於**硬體安全模組 (HSM)** 或安全元件 (TPM) 中，禁止以明文存放硬碟或程式碼。
3. **分發 (Distribution)**：使用非對稱密碼協商（如 ECDH）或受保護的金鑰包裝演算法 (Key Wrapping, AES-KW)。
4. **銷毀 (Destruction)**：Zeroization（零化技術），以隨機字元多次覆寫或實體銷毀儲存晶片。
5. **金鑰託管 (Key Escrow) vs. 金鑰復原 (Key Recovery)**：由公正第三方保管私鑰分片（M of N 門檻機制），需法院搜索令方得解密。

---

## 4. 前瞻量子威脅與後量子密碼考點 (Quantum & PQC)

- **Shor's Algorithm (秀爾演算法)**：
  - 專門攻破：**質因數分解 (RSA)** 與 **離散對數 (DH, DSA, ECC)**。
  - 結論：所有傳統非對稱公鑰演算法在大型量子電腦面前**徹底失效**。
- **Grover's Algorithm (葛羅佛演算法)**：
  - 專門攻破：對稱密碼搜尋與未排序資料庫，提供**平方根加速 $\mathcal{O}(\sqrt{N})$**。
  - 結論：AES-128 強度降為 64-bit（不安全）；**AES-256 強度降為 128-bit（依然安全）**！因此對稱密碼不需要全面汰換，只需將金鑰長度加倍至 256 位元即可。
- **PQC 五大流派速記**：
  - 晶格 (Lattice) - NIST 主流（Kyber, Dilithium）
  - 編碼 (Code) - McEliece（公鑰大）
  - 同源 (Isogeny) - 速度慢
  - 多變量 (Multivariate) - 簽章短
  - 雜湊 (Hash) - SPHINCS+（理論最穩）
- **QKD BB84 協議**：利用單光子偏振與測不準原理進行物理防竊聽金鑰分發。

---

## 5. 出處依據與關聯鏈結
- **來源依據**：[Lecture_09_Crypto, Slide 3-49]
- **關聯頁面**：
  - [[wiki/concepts/cia_triad]]
  - [[wiki/models/cryptographic_hard_problems]]
  - [[wiki/concepts/advanced_encryption_and_pqc]]
  - [[wiki/concepts/privacy_enhancing_technologies]]
  - [[wiki/syntheses/symmetric_vs_asymmetric_cryptography]]
  - [[wiki/cert_prep/cissp_domain_1_legal_regulations]]
