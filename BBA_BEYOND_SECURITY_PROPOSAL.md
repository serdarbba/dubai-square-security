# BBA Digital Operations Platform
## Dubai Square — Akıllı AVM Teknoloji Teklifi

---

**Hazırlayan:** BBA Teknoloji  
**Sunan:** Aerosmart (Dubai)  
**Alıcı:** EMAAR Properties / Dubai Square Proje Yönetimi  
**Proje:** Dubai Square, Dubai Creek Harbour, BAE  
**Tarih:** Mayıs 2026  
**Belge No:** BBA-DSQ-DOP-001  
**Sınıflandırma:** Gizli — Yalnızca EMAAR / Aerosmart İç Kullanımı

---

## Yönetici Özeti

EMAAR Properties ve Dubai Holding, Dubai Square'i dünyanın en gelişmiş alışveriş deneyimi olarak konumlandırmaktadır. Mohamed Alabbar başta olmak üzere EMAAR yönetimi, projeye ilişkin kamuoyuyla paylaştığı vizyonda yapay zeka destekli navigasyon, perakende tahminsel analitiği, akıllı otopark, EV entegrasyonu ve ziyaretçiye özel dijital deneyimler gibi iddialı teknoloji taahhütlerinde bulunmuştur.

BBA Teknoloji, Dubai Square için halihazırda kapsamlı bir güvenlik platformu teklifi sunmuş durumdadır. Bu belge, söz konusu taahhütlerin güvenlik kapsamı dışında kalan bölümlerini ele almakta ve BBA'nın bu alanlarda da tam çözüm sağlayabileceğini ortaya koymaktadır.

**Sunulan Ürünler:**
1. Dubai Square Visitor App — Ziyaretçi navigasyon ve deneyim uygulaması
2. Retail Intelligence Platform — Perakende analitik ve tahmin platformu
3. Smart Mobility Platform — Akıllı otopark ve EV yönetimi
4. Dubai Square Digital Twin — Operasyonel dijital ikiz

Bu dört ürün, BBA'nın güvenlik platformuyla aynı veri altyapısını paylaşır; dolayısıyla başka hiçbir tedarikçinin sağlayamayacağı entegrasyon derinliğini ve maliyet avantajını sunar.

---

## 1. Fırsat: EMAAR'ın Teknoloji Taahhütleri

EMAAR ve Dubai Holding'in resmi basın açıklamalarında Dubai Square için aşağıdaki teknolojiler kamuoyuna taahhüt edilmiştir:

| # | EMAAR'ın Kamuoyu Taahhüdü | Kaynak |
|---|--------------------------|--------|
| 1 | AI destekli ziyaretçi navigasyonu — 2,6 milyon m²'de kaybolmama | EMAAR / Dubai Holding basın açıklaması |
| 2 | Özel mobil uygulama — hızlı ödeme, barkod tarama, click-and-collect | EMAAR / Dubai Holding basın açıklaması |
| 3 | Perakende tahminsel analitik — doğru stok, doğru zamanlama | Mohamed Alabbar açıklaması |
| 4 | Akıllı otopark çözümleri — doluluk takibi, yönlendirme | EMAAR / Dubai Holding basın açıklaması |
| 5 | EV altyapısı — iç koridorlarda araç dolaşımı, şarj yönetimi | Çeşitli EMAAR açıklamaları |
| 6 | RFID teknolojisi — perakende operasyon entegrasyonu | EMAAR / Dubai Holding basın açıklaması |
| 7 | Omnichannel perakende deneyimi — çevrimiçi ve mağaza içi entegrasyon | EMAAR açıklaması |
| 8 | "Akıllı iç şehir" konsepti — operasyonel yönetim | EMAAR açıklaması |

Bu taahhütlerin tamamı BBA'nın mevcut güvenlik teklifinin **dışındadır.** Bu belge, söz konusu boşlukları kapatmaktadır.

---

## 2. BBA'nın Rekabet Avantajı

### Neden Başka Bir Tedarikçi Değil, BBA?

**Veri tekeli:** BBA'nın güvenlik platformu, Dubai Square genelinde 900'ü aşkın kamerayı gerçek zamanlı olarak analiz edecektir. Ziyaretçi navigasyonu, perakende analitiği ve mobilite yönetimi için gereken footfall, yoğunluk ve hareket verisi bu altyapıdan üretilmektedir. Başka bir yazılım tedarikçisi bu veriyi üretmek için yeni bir kamera altyapısı kurmak zorunda kalır.

**Tek entegrasyon noktası:** Güvenlik, ziyaretçi deneyimi, perakende analitiği ve mobilite — tümü BBA'nın ortak veri modeli üzerinde çalışır. EMAAR, tek API, tek veri sözleşmesi ve tek destek hattıyla tüm sistemi yönetir.

**Hazır altyapı:** Güvenlik platformunun teknik temeli (PostgreSQL + TimescaleDB + AI motoru + REST API katmanı) bu dört ürünün backend altyapısını zaten oluşturmaktadır. BBA sıfırdan başlamaz; mevcut yatırım üzerine inşa eder.

**Tek teslimat ortağı — Aerosmart:** EMAAR, tüm dijital operasyon teknolojisini tek muhataptan, Aerosmart aracılığıyla alır.

---

## 3. Ürün 1 — Dubai Square Visitor App

### Ürün Tanımı
2,6 milyon m²'lik Dubai Square'de ziyaretçinin kaybolmamasını, zamanını verimli kullanmasını ve kişiselleştirilmiş bir deneyim yaşamasını sağlayan yapay zeka destekli mobil uygulama.

### Temel Özellikler

**Akıllı Navigasyon**
- Gerçek zamanlı indoor harita: mağaza, restoran, tuvalet, çıkış, asansör, EV şarj noktası
- AI destekli en hızlı güzergah — kalabalık verisiyle sürekli güncellenen canlı kat planı
- Sesli yönlendirme (Arapça ve İngilizce)
- Kalabalık bölgelerden kaçınma önerisi — güvenlik platformunun yoğunluk verisinden beslenir

**Otopark Asistanı**
- Aracın park konumu — uygulama üzerinden anlık takip
- B1/B2 kat bazlı doluluk haritası ve boş alan gösterimi
- EV şarj noktası müsaitlik ve rezervasyon
- Çıkışta araç konumuna yönlendirme

**Kişiselleştirilmiş Deneyim**
- Ziyaret geçmişine göre mağaza ve restoran önerisi
- Ziyaret planı — hangi saatte nereye gidilmeli
- Etkinlik ve kampanya bildirimleri (konum bazlı)
- Click-and-collect sipariş takibi

### Teknik Altyapı

| Bileşen | Teknoloji |
|---------|-----------|
| Indoor konumlama | BLE Beacon + Wi-Fi triangulation |
| Harita motoru | Özel SVG renderer (BBA altyapısı) / Mapbox Indoor |
| Kalabalık verisi | BBA Güvenlik Platformu AI analitik çıktısı (anonimleştirilmiş) |
| Backend | .NET 8 REST API + PostgreSQL |
| Mobil | React Native — iOS ve Android |
| Bildirim | Firebase Cloud Messaging |

### EMAAR Taahhüdüyle Örtüşme
*"AI-assisted navigation"* · *"custom-designed mobile apps"* · *"click-and-collect services"*

---

## 4. Ürün 2 — Retail Intelligence Platform

### Ürün Tanımı
EMAAR'ın perakende yönetim ekibine ve kiracı mağazalara, ziyaretçi davranışından üretilen veriye dayalı tahminsel karar desteği sunan analitik platformu.

### Temel Özellikler

**EMAAR Yönetim Dashboard'u**
- AVM geneli günlük / haftalık / aylık footfall raporu
- Bölge ve zaman dilimine göre ziyaretçi yoğunluğu ısı haritası
- En yoğun ve en az ilgi gören lokasyonların analizi
- Büyük etkinliklerin ziyaretçi trafiğine etkisi (öncesi / sonrası karşılaştırma)
- Dwell time analizi — ziyaretçinin bölge bazında ortalama kalma süresi

**Kiracı Portal'ı (Tenant Dashboard)**
- Mağaza önünden geçen günlük ziyaretçi sayısı
- Mağazaya giriş oranı ve ziyaret süresi
- Komşu mağazaların trafik verileriyle karşılaştırma
- Haftalık trend raporu — PDF ve e-posta ile otomatik teslimat

**Tahminsel Analitik**
- Geçmiş veriye dayalı günlük / haftalık kalabalık tahmini
- Sezonsal talep öngörüsü — Ramazan, ulusal bayramlar, okul tatilleri
- Bölge bazlı stok talep tahmini — mağazalara erken uyarı
- Anonimleştirilmiş ziyaretçi davranış segmentleri

### Veri ve Gizlilik
Tüm analizler, güvenlik platformundan elde edilen **anonimleştirilmiş** footfall ve hareket verisine dayanır. Yüz tanıma veya kişisel kimlik verisi kullanılmaz. Sistemin tüm veri işleme süreçleri PDPA ve UAE veri koruma düzenlemelerine uygundur.

### Teknik Altyapı

| Bileşen | Teknoloji |
|---------|-----------|
| Veri kaynağı | BBA Güvenlik Platformu AI motoru çıktısı |
| Analitik işlem | TimescaleDB + Python veri pipeline |
| Tahmin modeli | Prophet / scikit-learn (zaman serisi) |
| Dashboard | React web uygulaması |
| Raporlama | Otomatik PDF — e-posta ile teslimat |

### EMAAR Taahhüdüyle Örtüşme
*"Predictive analytics that help retailers stock the right products"* · *"AI systems to analyse and predict the needs of retailers and visitors"*

---

## 5. Ürün 3 — Smart Mobility Platform

### Ürün Tanımı
Dubai Square'in en özgün özelliği olan araç içi dolaşım konseptini ve EV altyapısını yöneten, ziyaretçiye ve operasyon ekibine ayrı arayüzler sunan akıllı mobilite platformu.

### Temel Özellikler

**Ziyaretçi Otopark Yönetimi**
- Giriş öncesi gerçek zamanlı doluluk haritası — uygulama ve dijital tabela
- Bölge ve kat bazlı yer rezervasyonu
- Tahmini giriş bekleme süresi bildirimi
- Abonelik yönetimi — kiracı, çalışan, VIP katmanları

**EV Şarj Yönetimi**
- Şarj noktası müsaitlik takibi ve rezervasyon
- Uzaktan şarj başlatma ve durdurma
- Kalan şarj süresi ve doluluk bildirimi
- Otomatik fatura ve ödeme entegrasyonu
- Aşırı süre aşımında uyarı ve ücret mekanizması

**Operasyonel Araç Akış Yönetimi**
- İç yol ağı araç akış analizi — tıkanma noktası tespiti
- Alternatif güzergah yönlendirmesi — dijital tabela entegrasyonu
- Hız ihlali ve yanlış yön tespiti (BBA Güvenlik Platformu ile entegre)
- BOH teslimat araçları için özel güzergah ve zaman penceresi yönetimi

### Teknik Altyapı

| Bileşen | Teknoloji |
|---------|-----------|
| Araç tespiti | BBA ANPR motoru + araç sınıflandırma AI |
| Doluluk takibi | Sensör füzyonu + kamera sayımı |
| EV protokol | OCPP 2.0 (Open Charge Point Protocol) |
| Ziyaretçi arayüzü | Visitor App entegrasyonu + web portal |
| Operatör arayüzü | BBA Güvenlik Platformu SCR ekranı |

### EMAAR Taahhüdüyle Örtüşme
*"World's first drive-through mall"* · *"Smart parking solutions"* · *"EV facilities reflecting Dubai's sustainability goals"*

---

## 6. Ürün 4 — Dubai Square Digital Twin

### Ürün Tanımı
Dubai Square'in tüm fiziksel ve operasyonel sistemlerinin 3 boyutlu, gerçek zamanlı dijital modelini sunan operasyon yönetim platformu. Acil durum simülasyonundan perakende yerleşim optimizasyonuna kadar geniş bir kullanım alanı sağlar.

### Temel Özellikler

**Canlı Operasyonel Model**
- Tüm AVM'nin kat kat gezilebilinir 3D haritası
- Gerçek zamanlı veri katmanları:
  - Ziyaretçi yoğunluğu ve hareket akışları
  - Güvenlik sistemi durumu (BBA Güvenlik Platformu)
  - Teknik sistem sağlığı — HVAC, elektrik, asansörler
  - Otopark doluluk oranı
  - Açık / kapalı mağaza durumu

**Senaryo Simülasyonu**
- Büyük etkinlik planlaması — tahmini kalabalık ve trafik simülasyonu
- Tahliye senaryosu — en hızlı boşaltma güzergahı analizi
- Yeni mağaza veya etkinlik alanı yerleşimi — trafik etkisi simülasyonu
- Bakım planlaması — ziyaretçi etkisini minimize eden zamanlama önerisi

**Yönetim Raporlaması**
- Günlük AVM operasyon sağlık skoru
- Bölge bazlı enerji tüketim analizi
- Bakım önceliklendirme — kullanım yoğunluğuna göre

### Teknik Altyapı

| Bileşen | Teknoloji |
|---------|-----------|
| 3D model tabanı | BIM / IFC formatı import |
| Gerçek zamanlı veri | BBA Güvenlik Platformu API + BMS entegrasyonu |
| Görselleştirme | Three.js / Cesium.js — web tabanlı |
| Simülasyon | Agent-based model (özel geliştirme) |
| Kullanıcı arayüzü | Web dashboard — EMAAR operasyon ekibi |

### EMAAR Taahhüdüyle Örtüşme
*"Smart indoor city"* konsepti · Dubai Dijital İkiz Şehir Stratejisi 2026 ile örtüşme

---

## 7. Uygulama Takvimi

Tüm ürünler, BBA güvenlik platformunun geliştirme fazlarıyla paralel yürütülür.  
Ek donanım gerekmez — mevcut sunucu kapasitesinin genişletilmesi yeterlidir.

| Faz | Ürün | Süre | Başlangıç Koşulu |
|-----|------|------|-----------------|
| Paralel — Faz 2 | Retail Intelligence Platform | 2-3 ay | Güvenlik Faz 1 tamamlandı |
| Paralel — Faz 2 | Smart Mobility Platform | 3-4 ay | ANPR altyapısı canlıda |
| Paralel — Faz 3 | Visitor App | 3-4 ay | Güvenlik Faz 2 tamamlandı |
| Paralel — Faz 3 | Digital Twin | 4-5 ay | BIM dosyaları teslim edildi |

---

## 8. Altyapı Gereksinimleri

BBA'nın güvenlik teklifinde tanımlanan sunucu altyapısı bu ürünlerin tamamını da destekler.  
Aşağıdaki ek kapasite gereksinimi doğar:

| Kaynak | Güvenlik Teklifi | Bu Teklif Ek Gereksinim |
|--------|-----------------|------------------------|
| CPU | Mevcut GPU sunucusu | +2 uygulama sunucusu |
| Depolama | RAID 5/6 video depolama | +2 TB analitik veri deposu |
| Ağ | Güvenlik VLAN | Visitor App için ayrı SSID |
| BLE Beacon | — | Her 30m'de bir beacon (Visitor App için) |

---

## 9. Neden Şimdi

Dubai Square 2028-2029 açılışını hedeflemektedir. Yazılım geliştirme, donanım kurulumundan  
bağımsız olarak hemen başlayabilir. EMAAR'ın kamuoyuna verdiği teknoloji taahhütlerinin  
açılış günü hazır olması için **2026 yılı içinde proje kararının alınması** gerekmektedir.

BBA bu teklifle EMAAR'a şunu söylemektedir:

> Güvenliğini zaten biz yapıyoruz.  
> Akıllı AVM vizyonunun geri kalanını da biz tamamlarız.  
> Tek muhatap, tek platform, tek sorumluluk.

---

## 10. Sonraki Adımlar

| Adım | Sorumlu | Süre |
|------|---------|------|
| Teklifin EMAAR proje yönetimine sunulması | Aerosmart | Haziran 2026 |
| Teknik değerlendirme toplantısı | BBA + Aerosmart + EMAAR IT | Haziran 2026 |
| Pilot ürün seçimi ve kapsam netleştirme | EMAAR + BBA | Temmuz 2026 |
| Geliştirme sözleşmesi imzalanması | Aerosmart + EMAAR | Temmuz 2026 |

---

*BBA Teknoloji — Gizli*  
*Aerosmart kanalıyla EMAAR Properties / Dubai Square Proje Yönetimine sunulmak üzere hazırlanmıştır.*
