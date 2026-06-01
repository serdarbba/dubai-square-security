# Oturum Özeti — Dubai Square Güvenlik Projesi
**Tarih:** 2026-05-18

---

## 1. Doküman Ne?

`DCH-M-KTE-RPT-IFC-SEC-00001-01_SECURITY.pdf` — Dubai Square AVM'nin
IFC (Issued for Construction) aşaması güvenlik tasarım raporu.

- **Proje:** Dubai Square, EMAAR, Dubai Creek Harbour, BAE
- **Ölçek:** ~303.000 m² taban alanı — dünyanın en büyük 2. AVM'si
- **Kapsam:** CCTV, ANPR, ACS, HVM, Drone, PSIM, Güvenlik Ağı, SCR

---

## 2. İş Fırsatı

- IFC aşamasında = ihale çok yakın
- Güvenlik paketi toplam tahmini değer: **15-25 milyon dolar**
- EMAAR referansı → diğer EMAAR projeleri → BAE + bölge geneli zinciri
- Aynı platform onlarca AVM'ye tekrar satılabilir (tekrarlayan gelir modeli)

---

## 3. İş Modeli & Roller

### Aerosmart (Dubai — Partner Firma)
- SIRA lisansı — Dubai'de zorunlu, onsuz ihaleye girilemiyor
- EMAAR nezdinde resmi muhatap, sözleşme tarafı
- Tüm donanım tedariki ve saha kurulumu
- Drone donanımı ve operasyonu
- 7/24 saha bakım ve teknik servis

### BBA (Türkiye — Teknoloji Firması)
- Donanım üretimi veya tedariki YOK
- Yazılım geliştirme + sistem entegrasyonu
- Teknik tasarım ve proje mühendisliği
- **BBA Security Intelligence Platform** geliştirme

---

## 4. BBA Security Intelligence Platform

Palantir tarzı, AI destekli, Windows tabanlı, on-premise güvenlik yönetim platformu.

### Modüller
| Modül | İşlev |
|-------|-------|
| Video Yönetim | RTSP/ONVIF, çoklu kamera, PTZ, kayıt |
| AI Analitik | Yüz tanıma, kalabalık, anomali, duman, araç |
| ANPR Entegrasyon | Plaka okuma, kara liste, araç geçmişi |
| ACS Entegrasyon | Kapı yönetimi, kişi takibi, acil açma |
| Drone Entegrasyon | Aerosmart drone video+telemetri füzyonu |
| PSIM Core | Alarm korelasyonu, prosedür rehberi |
| Harita & Kat Planı | Gerçek zamanlı cihaz durumu |
| Raporlama & BI | Otomatik raporlar, yönetici dashboard |
| Olay Yönetimi | Delil yönetimi, SIRA uyumlu kayıt |

### Teknik Kararlar
- Windows Desktop (WPF / .NET 8 veya Electron — karar verilecek)
- On-premise — cloud değil, SIRA zaten on-premise istiyor
- AI altyapısı: NVIDIA DeepStream / OpenVINO üzeri özel modeller
- Veritabanı: PostgreSQL + TimescaleDB
- IT ağından fiziksel olarak ayrı güvenlik ağı

### Geliştirme Takvimi
- Faz 1 — Core Platform: 2-3 ay
- Faz 2 — AI + Entegrasyonlar: 2-3 ay
- Faz 3 — Operasyonel özellikler: 1-2 ay
- Faz 4 — Dubai Square özelleştirme: 1-2 ay
- **Toplam: 6-10 ay**

### Ekip
- 2 kişilik tam dedike ekip
- BBA geçmişi: drone yazılımı, BBA AI Companion, Flight Hub, Nexus,
  körfez izleme, Aerosmart Vision — teknik altyapı mevcut

---

## 5. SIRA Nedir?

Security Industry Regulatory Agency — Dubai'nin güvenlik sektörü düzenleyicisi.
- Her güvenlik sistemi kurucusuna lisans zorunluluğu
- Kamera kalitesi, kayıt süresi, ANPR gibi teknik standartları belirler
- Aerosmart bu lisansa sahip → sorun yok

---

## 6. Hazırlanan Dosyalar

```
/home/bba1/BBA-Aerosmart/dubai-square-security/
├── README.md              — Proje özeti
├── ARCHITECTURE.md        — Platform teknik mimarisi (detaylı)
├── PARTNERSHIP.md         — Aerosmart'a gönderilecek iş birliği belgesi
├── PRESENTATION.md        — Marp formatı slayt sunumu
└── dubai-square.code-workspace
```

### Sunumu PDF/HTML Yapmak
VS Code → Marp for VS Code extension kur →
PRESENTATION.md aç → Export Slide Deck

---

## 7. Sonraki Adımlar

- [ ] Aerosmart'a PARTNERSHIP.md belgesini ilet
- [ ] EMAAR ihale takvimini öğren
- [ ] Tam DSM (Design Specification Manual) şartnamesini talep et
- [ ] Platform geliştirme başlangıç kararı — UI framework seçimi
- [ ] BOQ (Bill of Quantities) hazırlığı
