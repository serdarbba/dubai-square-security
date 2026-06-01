---
marp: true
theme: default
paginate: true
backgroundColor: #0a0f1e
color: #ffffff
style: |
  section {
    font-family: 'Segoe UI', sans-serif;
    padding: 40px 60px;
  }
  h1 {
    color: #00d4ff;
    font-size: 2.2em;
    border-bottom: 2px solid #00d4ff;
    padding-bottom: 10px;
  }
  h2 {
    color: #00d4ff;
    font-size: 1.6em;
  }
  h3 {
    color: #7ecfff;
    font-size: 1.2em;
  }
  strong {
    color: #00d4ff;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th {
    background: #00d4ff22;
    color: #00d4ff;
    padding: 8px 12px;
    border: 1px solid #00d4ff44;
  }
  td {
    padding: 8px 12px;
    border: 1px solid #ffffff22;
    font-size: 0.85em;
  }
  code {
    background: #ffffff11;
    color: #00d4ff;
    padding: 2px 6px;
    border-radius: 4px;
  }
  ul li {
    margin-bottom: 6px;
  }
  .highlight {
    background: #00d4ff22;
    border-left: 4px solid #00d4ff;
    padding: 12px 20px;
    border-radius: 4px;
  }
---

<!-- KAPAK -->

# BBA Security Intelligence Platform

### Dubai Square — Entegre Güvenlik Yönetim Sistemi

**BBA × Aerosmart**

---

## Dubai Square

> Dünyanın en büyük 2. AVM'si

- **Geliştirici:** EMAAR Properties
- **Konum:** Dubai Creek Harbour, BAE
- **Alan:** ~303.000 m² taban alanı
- **Aşama:** IFC — İnşaat için onaylı

---

## Proje Kapsamı

Şartname aşağıdaki sistemlerin tamamını kapsıyor:

| Sistem | Kapsam |
|--------|--------|
| Video Gözetim | Site geneli CCTV, AI analitik |
| ANPR | Tüm araç giriş/çıkışları |
| Erişim Kontrol | BOH, teknik odalar, asansörler |
| HVM | Araç engelleme bariyerleri |
| Drone Gözetim | Dış alan havadan izleme |
| PSIM / VMS | Merkezi yönetim yazılımı |
| Güvenlik Ağı | IT'den ayrı fiziksel altyapı |
| SCR | 7/24 güvenlik kontrol odası |

---

## İş Birliği Modeli

```
┌─────────────────────────────────────────┐
│              EMAAR / Dubai Square       │
└─────────────────────────────────────────┘
              │
┌─────────────────────────────────────────┐
│              AEROSMART (Dubai)          │
│  • SIRA Lisansı & Resmi Sözleşme       │
│  • Donanım Tedariki & Kurulum           │
│  • Drone Sistemi                        │
│  • 7/24 Saha Bakım                      │
└─────────────────────────────────────────┘
              │
┌─────────────────────────────────────────┐
│              BBA (Teknoloji)            │
│  • AI Destekli Platform Geliştirme     │
│  • Sistem Entegrasyonu                  │
│  • Teknik Tasarım & Mühendislik        │
└─────────────────────────────────────────┘
```

---

## BBA Security Intelligence Platform

> Tüm güvenlik alt sistemlerini birleştiren,  
> AI destekli, Windows tabanlı,  
> on-premise çalışan merkezi platform

---

## Platform Mimarisi

```
PRESENTATION    │  Windows Desktop Application
────────────────┼──────────────────────────────
APPLICATION     │  PSIM Core Engine
────────────────┼──────────────────────────────
AI ANALYTICS    │  Yüz Tanıma │ Anomali │ Araç
────────────────┼──────────────────────────────
INTEGRATION     │  Video │ ANPR │ ACS │ Drone
────────────────┼──────────────────────────────
DATA            │  Video Storage │ Events │ BI
────────────────┼──────────────────────────────
HARDWARE        │  Aerosmart Donanımı
```

---

## AI Analitik Yetenekleri

- **Yüz Tanıma** — kara liste eşleştirme, gerçek zamanlı alert
- **Kalabalık Analizi** — yoğunluk haritası, yığılma alarmı
- **Anomali Tespiti** — koşma, düşme, bırakılan eşya
- **Araç Analitikleri** — hız ihlali, yanlış yön, uzun park
- **Erken Duman** — CCTV üzerinden görsel tespit
- **Sahte Alarm Filtresi** — ML tabanlı alarm kalitesi skoru

---

## Drone Entegrasyonu

Platform, Aerosmart drone sistemiyle tam entegre çalışır:

- Canlı drone görüntüsü platform içinde
- Sabit kamera + drone füzyonu tek ekranda
- **Alarm → Drone otomasyonu**  
  _Şüpheli tespit edildi → drone otomatik yönleniyor_
- Uçuş geçmişi ve kayıt yönetimi

---

## Operatör Deneyimi

### Alarm geldiğinde sistem ne yapar?

1. İlgili kameralar otomatik ekrana geliyor
2. Şüphelinin son 60 saniyelik hareketi gösteriliyor
3. Ekrana prosedür adım adım yazıyor
4. En yakın güvenlik personeline görev atanıyor
5. Tüm süreç audit log'a işleniyor

**Operatör karar verir — sistem hazırlar**

---

## SIRA & IFC Uyumluluğu

| Gereksinim | IFC Madde | Karşılanma |
|------------|-----------|------------|
| 31 gün video saklama | §17.10.9 | Platform yönetir |
| Görüntü kalitesi standartları | §17.10.5 | Kamera seçim + PPM doğrulama |
| ANPR zorunluluğu | §17.10.8 | Tam entegrasyon |
| 7/24 izleme — **12+2 operatör** | §17.24 | SCR 14 kişilik yapıya göre tasarlandı |
| Delil zinciri | §17.10.6 | Dijital imza + zaman damgası |
| Audit log | §17.8.3 | Silinemeyen kayıt |
| TETRA telsiz entegrasyonu | §17.27 | NEDAA gateway bağlantısı |
| Endpoint Detection & Response | §17.15 | EDR modülü — tüm sunucularda |

---

## Platform Kapsamı — IFC Bölüm Bazlı

| IFC Bölüm | Kapsam |
|-----------|--------|
| §17.10 Video Gözetim | ✅ VMS — tüm RTSP/ONVIF akışları |
| §17.10.5 AI Analitik | ✅ 11 analitik — DeepStream/OpenVINO |
| §17.10.8 ANPR | ✅ Latince + Arapça, kara liste |
| §17.11 Erişim Kontrol | ✅ PSIM ile tam entegrasyon |
| §17.12 İnterkom + ECP | ✅ Acil çağrı noktaları dahil |
| §17.15 EDR | ✅ Siber güvenlik endpoint koruma |
| §17.16 Teslimat VMS | ✅ QR + ANPR otomasyonu |
| §17.17 Drone | ✅ Aerosmart entegrasyonu |
| §17.27 TETRA Telsiz | ✅ NEDAA entegrasyonu |

---

## Neden Hazır Yazılım Değil?

| | Genetec / Milestone | BBA Platform |
|--|--------------------|----|
| Özelleştirme | Sınırlı | Tam |
| Yeni özellik | Aylar | Haftalar |
| Donanım esnekliği | Sertifikalı liste | Her marka |
| Yıllık lisans | Yüksek | Yok |
| Veri sahipliği | Vendor'da | Müşteride |
| Dubai Square'e özel | Hayır | Evet |

---

## Ölçeklenebilirlik

Bu platform **bir kez geliştirilir, her projede kullanılır**

```
Dubai Square (2026)
      ↓
EMAAR diğer projeleri
      ↓
BAE geneli büyük AVM'ler
      ↓
KSA — Vision 2030 projeleri
      ↓
Bölge geneli
```

Her yeni proje aynı platform — **kurulum süresi kısalır, kar artar**

---

## Geliştirme Takvimi

| Faz | Süre | Çıktı |
|-----|------|-------|
| Core Platform + UI | 2-3 ay | Video yönetim, temel platform |
| AI + Entegrasyonlar | 2-3 ay | Analitik, ANPR, ACS, Drone |
| Operasyonel Özellikler | 1-2 ay | Olay yönetimi, raporlama |
| Dubai Square Özelleştirme | 1-2 ay | SIRA uyum, canlıya alma |

**Toplam: 6-10 ay**

---

## Özet

**BBA'nın Katkısı:**
- Dünyanın en büyük 2. AVM'si için tam kapsamlı AI güvenlik platformu
- SIRA uyumlu, on-premise, Windows tabanlı
- Drone dahil tüm sistemlerin tek entegrasyon noktası
- Sonraki tüm projeler için hazır, ölçeklenebilir altyapı

**Aerosmart'ın Katkısı:**
- SIRA lisansı ve yerel operasyon
- Tüm donanım tedariki ve kurulumu
- 7/24 saha desteği

**Müşteri tek paket görür.**

---

<!-- SON -->

# Teşekkürler

**BBA × Aerosmart**

_Dubai Square Güvenlik Projesi_
