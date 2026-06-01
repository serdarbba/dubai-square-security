# BBA × Aerosmart — Kapsam ve Sorumluluk Belgesi
## Dubai Square Güvenlik Projesi

**Proje:** Dubai Square, EMAAR Properties, Dubai Creek Harbour, Dubai, BAE  
**Hazırlayan:** BBA Teknoloji  
**Tarih:** Mayıs 2026  
**Versiyon:** 1.0

---

## Özet

Bu belge, Dubai Square Güvenlik Projesi kapsamında BBA Teknoloji ile Aerosmart arasındaki iş bölümünü tanımlar. EMAAR, tek muhatap olarak Aerosmart'ı görür. BBA'nın tüm yazılım çıktıları Aerosmart üzerinden teslim edilir.

---

## 1. BBA'nın Teslim Edeceği Yazılım Ürünü

**Ürün Adı:** BBA Security Intelligence Platform  
**Teslim Formatı:** Kurulu, yapılandırılmış, test edilmiş, canlıya alınmış yazılım sistemi  
**Çalışma Ortamı:** On-premise, Windows Server, Aerosmart'ın tedarik ettiği sunucu donanımı üzerinde  
**Lisans:** Projeye özel, süresiz lisans — yıllık lisans ücreti yok

---

## 2. BBA Yazılım Modülleri — Ne Teslim Ediyoruz

### Modül 1 — Video Yönetim Sistemi (VMS)
BBA'nın yazılımı, Aerosmart'ın tedarik ettiği tüm kameraları yönetir.

**BBA'nın yaptığı:**
- Tüm RTSP/ONVIF kamera akışlarını tek platformda toplar
- Çoklu kamera grid görüntüleme (4 / 9 / 16 / 32 / 64 ekran)
- PTZ kontrol — yazılım ve joystick üzerinden
- Sürekli + alarm tetiklemeli kayıt yönetimi
- Zaman çizelgesi bazlı playback ve araştırma
- Alarm anında otomatik kamera odaklama
- H.264 / H.265, GPU hızlandırmalı decode
- 31 gün minimum kayıt (SIRA zorunluluğu) yönetimi
- Video duvarı (LED wall) kontrolü — kritik kameralar sabit, standart akışlar rotasyon

**Aerosmart'tan ihtiyacımız:**
- Kameraların montajı ve IP yapılandırması
- Her kameranın RTSP stream adresi ve erişim bilgileri
- NVR / depolama donanımı (RAID 5/6)

---

### Modül 2 — AI Analitik Motoru
EMAAR'ın şartnamesindeki tüm video analitik gereksinimleri bu modül tarafından karşılanır.

**BBA'nın yaptığı:**
| Analitik | Açıklama |
|----------|----------|
| Yüz Tanıma | Kara liste eşleştirme, gerçek zamanlı alarm, güven skoru |
| Kalabalık Analizi | Yoğunluk haritası, yığılma alarmı, akış analizi |
| Anomali Tespiti | Koşma, düşme, bırakılan eşya, yasak bölge girişi, loitering |
| Araç Analitikleri | Hız ihlali, yanlış yön, uzun park, araç sınıflandırma |
| Erken Duman | CCTV kameradan görsel duman tespiti — geleneksel sensörlerden önce |
| Araç Sayımı | Giriş/çıkış, bekleme süresi (dwell time), araç tipi |
| Sahte Alarm Filtresi | ML tabanlı alarm kalite skoru — operatör yorgunluğunu azaltır |

**AI Altyapısı:** NVIDIA DeepStream / Intel OpenVINO — GPU sunucu, SCR makine odasına yerleştirilir.

**Aerosmart'tan ihtiyacımız:**
- AI kamerası gereken noktalarda NVIDIA Jetson veya GPU destekli kamera akışı
- AI sunucu için SCR'da rack alanı ve güç

---

### Modül 3 — ANPR (Plaka Tanıma) Entegrasyonu

**BBA'nın yaptığı:**
- Latince + Arapça karakter tanıma motoru
- Kara liste / beyaz liste / VIP liste yönetimi
- Araç hareket geçmişi ve rota analizi
- ANPR eşleşmesinde otomatik bariyer açma komutu
- SCR'a anlık kara liste uyarısı
- Her plaka okumada kayıt: tarih/saat, plaka, kamera ID, araç görseli, sürücü görseli

**Aerosmart'tan ihtiyacımız:**
- Tüm giriş/çıkış noktalarına ANPR kamera montajı
- Her ANPR kamerasının SDK / API erişim bilgileri
- Bariyer kontrol ara yüzü (Wiegand / OSDP / relay)

---

### Modül 4 — Erişim Kontrol Entegrasyonu (ACS)

**BBA'nın yaptığı:**
- Tüm kapı/okuyucu durumlarını gerçek zamanlı izleme
- Alarm üretimi: yetkisiz erişim, kara liste kartı, zorla açma, kapı açık kalma, baskı altında, tahribat
- Alarm anında en yakın kameraya otomatik geçiş
- Rol bazlı erişim yönetimi (RBAC) — kişi grupları, zaman kuralları, bölge kısıtlamaları
- Anti-passback mantığı
- Yangın entegrasyonu: yangın sinyalinde ilgili katlarda tüm kapılar otomatik açılır
- Vardiya bazlı erişim kuralları
- Event alanı ACS: program bazlı açma/kapama, QR/NFC yönetimi
- Yüz/biyometrik doğrulama (kritik odalarda)
- Mobil uygulama: süpervizöre anlık alarm bildirimi + kamera görüntüsü
- ID/kart yönetimi: kart basımı, fotoğraf, son kullanma tarihi
- Fiziksel anahtar yönetimi entegrasyonu

**Aerosmart'tan ihtiyacımız:**
- ACS panelleri, kart okuyucular, biyometrik cihazlar
- Wiegand / OSDP kablo altyapısı
- ACS panel SDK / API / ODBC bağlantısı
- Her kapı/okuyucunun adres ve plan bilgisi

---

### Modül 5 — Drone Entegrasyonu

**BBA'nın yaptığı:**
- Aerosmart drone sisteminden canlı video + telemetri alımı
- Platform içinde canlı drone görüntüsü — sabit kameralarla aynı arayüzde
- Site haritasında drone pozisyonu gerçek zamanlı takip
- Alarm → drone yönlendirme otomasyonu (belirlenen alarmda waypoint görev gönderme)
- Uçuş geçmişi, kayıt arşivi, olaya bağlı görüntü araması

**Aerosmart'tan ihtiyacımız:**
- Drone donanımı, dock istasyonu, uçuş sistemi
- SDK / API: video stream URL + telemetri feed
- Uçuş izin protokolü ve Dubai havacılık uyum belgesi

---

### Modül 6 — PSIM Core (Merkezi Güvenlik Yönetimi)

**BBA'nın yaptığı:**
- Tüm kaynaklardan (CCTV, ACS, ANPR, İnterkom, BMS, Drone) alarm korelasyonu
- Olay önceliklendirme motoru — risk skorlaması
- Operatör prosedür rehberi: her alarm tipi için adım adım yönlendirme
- Personel görev atama ve takibi
- Eskalasyon kuralları: cevaplanmayan alarm → süpervizör → kriz yöneticisi
- Tam audit trail — silinemez, değiştirilemez kayıt
- Merkezi alarm yığını: tüm alt sistem alarmları tek ekranda
- Kriz modu görünümü: Acil Komutanı için sadeleştirilmiş kritik ekran
- Site geneli acil kilitleme: tek operatör eylemiyle tüm bariyerler kapanır

---

### Modül 7 — Harita ve Kat Planı Modülü

**BBA'nın yaptığı:**
- SVG/DXF tabanlı kat planı yönetimi (Aerosmart'tan DXF dosyaları alınır)
- Tüm cihazların harita üzerinde gerçek zamanlı durumu (kamera, kapı, okuyucu, bariyer, interkom)

- Alarm konumu — harita üzerinde pin
- Güvenlik personeli konum takibi
- Tahliye güzergahı görselleştirme

**Aerosmart'tan ihtiyacımız:**
- Proje DXF / AutoCAD kat planları (tüm kat ve bölgeler)
- Her cihazın kesin konum koordinatı

---

### Modül 8 — Ziyaretçi Yönetim Sistemi (Teslimat Personeli)

**BBA'nın yaptığı:**
- Web tabanlı ön kayıt portalı: sürücü, araç, zaman dilimi, teslimat rotası
- Zaman sınırlı QR kod üretimi
- ANPR eşleşmesi + QR doğrulama → otomatik bariyer açma
- BOH güzergahındaki ACS kapıları boyunca otomatik geçiş mantığı
- Çıkış ANPR doğrulama — oturum kapatma ve log
- Tüm teslimat hareketinin izlenebilir kaydı

---

### Modül 9 — İnterkom Entegrasyonu + Acil Çağrı Noktaları (ECP)

> IFC §17.12 — Emergency Call Points: tıbbi acil, saldırı, araç arızası, kaza senaryolarına özel alarm sınıflandırması ile SCR'a anlık bağlantı.


**BBA'nın yaptığı:**
- Tüm uzak istasyonların SCR ekranından tek noktadan yönetimi
- Cevaplanmayan çağrı → süpervizör escalasyonu
- Acil çağrı noktası alarmları PSIM'e öncelikli alarm olarak düşer
- Çağrı geldiğinde ilgili kamera otomatik görüntülenir

**Aerosmart'tan ihtiyacımız:**
- IP interkom donanımı (SIP protokolü tercihli)
- Asansör interkom entegrasyon API

---

### Modül 10 — TETRA / Güvenlik Personeli Telsiz Entegrasyonu
> IFC §17.27 — NEDAA (Dubai) yetkilendirmeli TETRA sistemi zorunluluğu

**BBA'nın yaptığı:**
- TETRA gateway entegrasyonu: telsiz çağrıları, alarmlar ve görev bildirimleri SCR operatör konsolundan yönetilebilir
- Alarm tetiklemesi → en yakın nöbet noktasına otomatik telsiz yayını
- Telsiz birimi durum takibi (aktif/bekleme/acil) kat planında gerçek zamanlı gösterim
- Acil durum yayını: tek operatör tuşuyla site geneli tüm telsiz cihazlarına anlık mesaj
- Telsiz çağrı geçmişi ve kayıt entegrasyonu (audit trail)

**Aerosmart'tan ihtiyacımız:**
- NEDAA lisanslı TETRA donanımı (el telsizleri, baz istasyonları)
- TETRA sistem API / gateway erişim bilgileri
- Dubai İdare Genelgesi No. 2 kapsamında NEDAA yetkilendirme belgesi

---

### Modül 11 — Endpoint Detection and Response (EDR)
> IFC §17.15 — Siber güvenlik çerçevesinin zorunlu bileşeni

**BBA'nın yaptığı:**
- Tüm BBA platform sunucularına ve operatör iş istasyonlarına EDR ajanı kurulumu
- Davranış tabanlı tehdit analizi: yanal hareket, ayrıcalık yükseltme, yetkisiz işlem tespiti
- Tehdit tespitinde otomatik endpoint izolasyonu + PSIM alarm üretimi
- 60 saniye içinde süpervizör eskalasyonu
- Tam forensic olay logu — silinemez kayıt
- Güvenlik ağının IT ağından fiziksel ayrımını koruyan politika katmanı

**Aerosmart'tan ihtiyacımız:**
- EDR ajan yazılımı için sunucularda yönetici erişimi
- Güvenlik ağı topoloji belgesi

---

### Modül 12 — Raporlama ve İş Zekası

**BBA'nın yaptığı:**
- Otomatik günlük / haftalık / aylık PDF raporlar (e-posta teslimatı dahil)
- Yönetici dashboard: olay oranı, müdahale süresi, sistem sağlığı, kamera uptime
- Ziyaretçi trafik analizi (footfall)
- Güvenlik olay istatistikleri ve tekrar eden konum analizi
- Sistem sağlık raporu: her cihaz için uptime ve arıza geçmişi
- Tahminsel risk skoru: geçmiş olay verisiyle bölge bazlı risk değerlendirmesi

---

## 3. BBA'nın YAPMAYACAĞI Şeyler

BBA aşağıdakileri tedarik etmez, kurmaz veya bakımını üstlenmez:

| Konu | Sorumlu |
|------|---------|
| CCTV kameralar (tüm tipler) | Aerosmart |
| NVR / depolama donanımı | Aerosmart |
| ANPR kameralar ve okuyucular | Aerosmart |
| ACS panelleri, kart okuyucular, biyometrik cihazlar | Aerosmart |
| HVM bariyerleri, bollards, road blockers | Aerosmart |
| İnterkom donanımı | Aerosmart |
| Drone donanımı ve uçuş altyapısı | Aerosmart |
| UPS ve güç altyapısı | Aerosmart |
| Güvenlik ağı aktif ekipmanları (switch, router) | Aerosmart |
| Güvenlik ağı pasif altyapı (kablo, fiber) | Aerosmart |
| SCR oda mobilyası ve donanımı | Aerosmart |
| LED video duvarı donanımı | Aerosmart |
| Fiziksel montaj ve kablo çekimi | Aerosmart |
| 7/24 saha teknik servisi | Aerosmart |
| SIRA lisans başvurusu ve onay süreci | Aerosmart |
| EMAAR ile sözleşme ve hukuki muhataplık | Aerosmart |

---

## 4. BBA'nın Aerosmart'a İhtiyaç Duyduğu Bilgiler

Yazılım geliştirme başlamadan önce aşağıdakilerin BBA'ya iletilmesi gerekir:

### Teknik Bilgiler
- [ ] Tüm kataların DXF / AutoCAD kat planları
- [ ] Seçilen kamera markaları ve modelleri (RTSP stream formatları)
- [ ] ACS panel markası ve modeli (API / ODBC bağlantı yöntemi)
- [ ] ANPR kamera markası ve SDK bilgisi
- [ ] Drone sistemi markası ve API erişim yöntemi
- [ ] İnterkom sistemi markası (SIP mi, özel SDK mi?)
- [ ] Her cihazın kesin konum koordinatları (kamera, kapı, okuyucu, bariyer)
- [ ] Sunucu donanımı teknik özellikleri (CPU, RAM, GPU, storage)
- [ ] Ağ topolojisi (IP aralıkları, VLAN yapısı)

### Operasyonel Bilgiler
- [ ] Operatör ve rol sayıları (kaç operator, kaç supervisor, kaç yönetici?)
- [ ] Çalışma vardiyaları ve erişim kuralları
- [ ] EMAAR'ın özel iş akışları (VIP erişim, özel protokoller)
- [ ] SIRA teknik şartname son versiyonu

---

## 5. Geliştirme Takvimi

| Faz | Kapsam | Süre | Başlangıç Koşulu |
|-----|--------|------|-----------------|
| Faz 1 — Core Platform | VMS, PSIM Core, veritabanı altyapısı, SCR arayüzü | 2-3 ay | Sunucu hazır, kat planları teslim edildi |
| Faz 2 — AI ve Entegrasyonlar | AI Analitik, ANPR, ACS, Drone entegrasyonu | 2-3 ay | Faz 1 tamamlandı, donanım API bilgileri alındı |
| Faz 3 — Operasyonel Özellikler | VMS, Harita, Raporlama, Ziyaretçi Yönetimi | 1-2 ay | Faz 2 tamamlandı |
| Faz 4 — Dubai Square Özelleştirme | SIRA uyumluluk testi, FAT, SAT, canlıya alma | 1-2 ay | Aerosmart saha kurulumu tamamlandı |
| **Toplam** | | **6-10 ay** | |

---

## 6. Teknik Mimari Özeti

```
┌─────────────────────────────────────────────────────┐
│              BBA Security Intelligence Platform      │
│                    (Yazılım Katmanı)                 │
├──────────┬──────────┬──────────┬──────────┬─────────┤
│   VMS    │    AI    │  ANPR    │   ACS    │  PSIM   │
│ Modülü   │ Analitik │ Modülü   │ Modülü   │  Core   │
├──────────┴──────────┴──────────┴──────────┴─────────┤
│              Entegrasyon Katmanı                     │
│   RTSP/ONVIF │ ODBC/API │ SDK │ SIP │ REST API      │
├──────────────────────────────────────────────────────┤
│              Donanım Katmanı (Aerosmart)              │
│  CCTV  │  ANPR  │  ACS  │  Drone  │  İnterkom │ HVM │
└──────────────────────────────────────────────────────┘
```

**Stack:**
- Presentation: WPF / .NET 8 (Windows Desktop)
- AI Runtime: NVIDIA DeepStream / Intel OpenVINO
- Video: FFmpeg + GPU hızlandırma
- Veritabanı: PostgreSQL + TimescaleDB
- Güvenlik: AES-128 minimum, TLS 1.3, RBAC

---

## 7. Neden BBA'nın Özel Geliştirdiği Platform

| Kriter | BBA Platform | Hazır Platform (Genetec / Milestone / Lenel) |
|--------|-------------|----------------------------------------------|
| Dubai Square özel iş akışları | Tam uyum | Sınırlı özelleştirme |
| Aerosmart drone entegrasyonu | Native | Yok / 3. parti ek maliyet |
| SIRA'ya özel kayıt ve audit | Yerleşik | Ek yapılandırma gerekir |
| Yeni özellik teslim süresi | 2-4 hafta | 6-12 ay (vendor roadmap) |
| Donanım bağımsızlığı | Tam (her marka) | Kısıtlı (marka bağımlı) |
| Yıllık lisans maliyeti | Yok | 50.000-200.000 USD/yıl |
| Sonraki projelerde kullanım | Doğrudan — sıfır ek maliyet | Her proje yeni lisans |
| Veri ve IP sahipliği | Müşteride | Vendor'da |

---

## 8. BBA'nın Referans Teknoloji Altyapısı

Bu platform sıfırdan yazılmıyor. BBA'nın mevcut ürün ve projelerinden gelen teknik birikim kullanılıyor:

| BBA Ürünü / Projesi | Platforma Katkısı |
|--------------------|--------------------|
| BBA AI Companion | AI inference motoru, model yönetimi |
| BBA Flight Hub | Drone video ve telemetri entegrasyonu |
| Aerosmart Vision | Kamera stream ve video analitik altyapısı |
| BBA Nexus | Çoklu sistem entegrasyon mimarisi |
| Körfez İzleme Projesi | Uzak site izleme ve alarm yönetimi |

---

*BBA Teknoloji — Gizli. Aerosmart iç kullanım için hazırlanmıştır.*
