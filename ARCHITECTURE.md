# BBA Security Intelligence Platform — Sistem Mimarisi

## Genel Bakış

BBA Security Intelligence Platform, büyük ölçekli yapılar için geliştirilmiş,
AI destekli, Windows tabanlı, on-premise çalışan merkezi güvenlik yönetim sistemidir.
Tüm güvenlik alt sistemlerini tek bir zeki platform altında birleştirir.

---

## Katmanlı Mimari

```
┌──────────────────────────────────────────────────────────────────┐
│                    PRESENTATION LAYER                            │
│         Windows Desktop Application (WPF / .NET 8)              │
│   ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│   │  Canlı   │ │  Olay    │ │  Harita  │ │ Raporlar │          │
│   │  İzleme  │ │ Yönetimi │ │ & Plan   │ │  & BI    │          │
│   └──────────┘ └──────────┘ └──────────┘ └──────────┘          │
└──────────────────────────────────────────────────────────────────┘
                              │
┌──────────────────────────────────────────────────────────────────┐
│                    APPLICATION LAYER                             │
│                        PSIM Core Engine                          │
│   ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│   │  Alarm   │ │ Prosedür │ │  Görev   │ │  Audit   │          │
│   │ Korelasyon│ │ Rehberi  │ │  Atama   │ │   Log    │          │
│   └──────────┘ └──────────┘ └──────────┘ └──────────┘          │
└──────────────────────────────────────────────────────────────────┘
                              │
┌──────────────────────────────────────────────────────────────────┐
│                      AI / ANALYTICS LAYER                        │
│   ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│   │   Yüz    │ │ Kalabalık│ │ Anomali  │ │  Araç    │          │
│   │ Tanıma   │ │ Analizi  │ │ Tespiti  │ │ Analitik │          │
│   └──────────┘ └──────────┘ └──────────┘ └──────────┘          │
│   ┌──────────┐ ┌──────────┐                                     │
│   │  Duman   │ │  Sahte   │                                     │
│   │ Tespiti  │ │  Alarm   │                                     │
│   │          │ │ Filtresi │                                     │
│   └──────────┘ └──────────┘                                     │
└──────────────────────────────────────────────────────────────────┘
                              │
┌──────────────────────────────────────────────────────────────────┐
│                    INTEGRATION LAYER                             │
│   ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│   │  Video   │ │   ANPR   │ │   ACS    │ │  Drone   │          │
│   │ Adapter  │ │ Adapter  │ │ Adapter  │ │ Adapter  │          │
│   └──────────┘ └──────────┘ └──────────┘ └──────────┘          │
│   ┌──────────┐ ┌──────────┐ ┌──────────┐                       │
│   │Interkom  │ │   BMS    │ │  Alarm   │                       │
│   │ Adapter  │ │ Adapter  │ │ Adapter  │                       │
│   └──────────┘ └──────────┘ └──────────┘                       │
└──────────────────────────────────────────────────────────────────┘
                              │
┌──────────────────────────────────────────────────────────────────┐
│                       DATA LAYER                                 │
│   ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│   │  Video   │ │  Events  │ │  Config  │ │Analytics │          │
│   │ Storage  │ │   DB     │ │   DB     │ │   DB     │          │
│   │ (RAID)   │ │(Postgres)│ │ (SQLite) │ │ (TimeSeries)│       │
│   └──────────┘ └──────────┘ └──────────┘ └──────────┘          │
└──────────────────────────────────────────────────────────────────┘
                              │
┌──────────────────────────────────────────────────────────────────┐
│                    PHYSICAL / HARDWARE LAYER                     │
│        (Aerosmart tarafından tedarik ve kurulum)                 │
│                                                                  │
│  [CCTV] [ANPR] [ACS] [HVM] [İnterkom] [Tarayıcı] [Drone]       │
└──────────────────────────────────────────────────────────────────┘
```

---

## Modül Detayları

### M1 — Video Yönetim Modülü
- RTSP/ONVIF üzerinden kamera stream yönetimi
- Çoklu kamera grid görüntüleme (4/9/16/32 ekran)
- PTZ kontrol — joystick ve yazılım tabanlı
- Kayıt yönetimi — sürekli + alarm tetiklemeli
- Playback — zaman çizelgesi bazlı
- Alarm anında otomatik kamera odaklama
- H.264 / H.265 destekli, GPU hızlandırmalı decode

### M2 — AI Analitik Modülü
- **Yüz Tanıma:** Kara liste eşleştirme, gerçek zamanlı alert
- **Kalabalık Analizi:** Yoğunluk haritası, yığılma alarmı
- **Anomali Tespiti:** Koşma, düşme, bırakılan eşya, izinsiz bölge girişi
- **Araç Analitikleri:** Hız ihlali, yanlış yön, uzun park
- **Erken Duman:** CCTV üzerinden görsel duman tespiti
- **Sahte Alarm Filtresi:** ML tabanlı alarm kalitesi skoru
- Altyapı: NVIDIA DeepStream / OpenVINO üzeri özel modeller

### M3 — ANPR Modülü
- Plaka okuma — Roma + Arap karakter desteği
- Kara liste / beyaz liste / VIP liste yönetimi
- Araç hareket geçmişi ve rota analizi
- Yetkisiz araç alarmı
- EMAAR Visitor Management System entegrasyonu

### M4 — Erişim Kontrol Entegrasyon Modülü
- Wiegand / OSDP protokol desteği
- Kapı durum izleme — gerçek zamanlı
- Kişi hareket geçmişi
- Yetkisiz giriş alarmı
- Yangın alarmı entegrasyonu — acil toplu açma
- Anti-passback mantığı
- Vardiya bazlı erişim kuralları

### M5 — Drone Entegrasyon Modülü
- Aerosmart drone sisteminden video + telemetri alımı
- Platform içinde canlı drone görüntüsü
- Sabit kamera + drone füzyonu tek ekranda
- Alarm → drone yönlendirme otomasyonu
- Uçuş geçmişi ve kayıt yönetimi

### M6 — PSIM Core
- Çoklu kaynak alarm korelasyonu
- Olay önceliklendirme motoru
- Operatör prosedür rehberi — adım adım yönlendirme
- Ekip/personel atama ve görev takibi
- Eskalasyon kuralları — cevapsız alarm → üst kademe
- Tam audit trail

### M7 — Harita & Kat Planı Modülü
- SVG/DXF tabanlı kat planı yönetimi
- Tüm cihazların harita üzerinde gerçek zamanlı durumu
- Olay konumu — harita üzerinde pin
- Güvenlik personeli konum takibi
- Tahliye güzergahı görselleştirme

### M8 — Raporlama & BI Modülü
- Otomatik günlük/haftalık/aylık raporlar (PDF)
- Yönetici dashboard — KPI'lar, trend grafikleri
- Ziyaretçi trafik analizi
- Güvenlik olay istatistikleri
- Sistem sağlık raporu — cihaz uptime, alarm istatistikleri
- Tahminsel analitik — risk skorlaması

### M9 — Olay Yönetim Modülü
- Olay kaydı ve sınıflandırması
- Video klip otomatik etiketleme ve delil paketi
- SIRA uyumlu delil zinciri
- Olay zaman çizelgesi
- Post-incident analiz araçları

---

## Teknoloji Stack

| Katman | Teknoloji |
|--------|-----------|
| Desktop UI | WPF / .NET 8 veya Electron (karar verilecek) |
| AI Runtime | NVIDIA DeepStream / OpenVINO |
| Video Decode | FFmpeg + GPU hızlandırma |
| Ana Veritabanı | PostgreSQL |
| Zaman Serisi | TimescaleDB / InfluxDB |
| Video Depolama | Yerel RAID + NVR entegrasyon |
| Servisler Arası | gRPC / Named Pipes (on-premise) |
| Raporlama | FastReport / RDLC |
| Harita | SVG tabanlı özel renderer |

---

## Güvenlik & Uyumluluk

- Tüm iletişim AES-128 minimum şifreli
- Kullanıcı oturumları — rol bazlı erişim (RBAC)
- Audit log — silinemeyen, değiştirilemeyen kayıt
- SIRA şartname uyumluluğu — görüntü kalitesi, kayıt süresi, erişim
- Video delil export — dijital imza + zaman damgası
- Offline çalışma — internet bağlantısı kesilse sistem çalışmaya devam eder

---

## Ölçeklenebilirlik

Sistem tek AVM'den çok AVM yönetimine doğal olarak ölçeklenir:

```
Tek Site Modu
    → SCR'daki tek sunucuda çalışır

Çoklu Site Modu
    → Her AVM kendi sunucusunda
    → Merkezi yönetim konsolundan tüm siteler izlenir

Enterprise Modu
    → Bölgesel veri merkezleri
    → Tüm Aerosmart portföyü tek platformdan
```

---

## Geliştirme Fazları

### Faz 1 — Core Platform (2-3 ay)
- Video stream yönetimi
- Temel UI framework
- PSIM alarm motoru
- Veritabanı altyapısı

### Faz 2 — AI & Entegrasyonlar (2-3 ay)
- AI analitik modülleri
- ANPR entegrasyonu
- ACS entegrasyonu
- Drone entegrasyonu

### Faz 3 — Operasyonel Özellikler (1-2 ay)
- Olay yönetimi
- Harita modülü
- Raporlama & BI

### Faz 4 — Dubai Square Özelleştirme (1-2 ay)
- SIRA uyumluluk testleri
- EMAAR spesifik iş akışları
- Saha entegrasyon testleri
- Canlıya alma

**Toplam: 6-10 ay**
