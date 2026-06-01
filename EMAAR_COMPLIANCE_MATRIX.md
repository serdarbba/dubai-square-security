# BBA Security Intelligence Platform
## Compliance Matrix — Dubai Square IFC Security Requirements

**Reference Document:** DCH-M-KTE-RPT-IFC-SEC-00001-01_SECURITY (IFC Stage)  
**Project:** Dubai Square, EMAAR Properties, Dubai Creek Harbour, UAE  
**Response by:** BBA Technology (Software & Integration) × Aerosmart (Hardware & Site)  
**Date:** May 2026  
**Version:** 1.0

---

## Legend

| Status | Meaning |
|--------|---------|
| ✅ BBA Platform | Fully addressed by BBA Security Intelligence Platform |
| 🔵 Aerosmart Hardware | Physical hardware supplied and installed by Aerosmart |
| ⚡ Joint | BBA software + Aerosmart hardware working together |
| 📋 Procedural | Operational/staffing — addressed in handover documentation |

---

## 1. STRA Design Objectives (§17.2.1.1)

| # | EMAAR Requirement | BBA Solution | Status |
|---|-------------------|--------------|--------|
| 1.1 | Deter potential threat actors before they act | AI-powered anomaly detection and loitering alerts. Real-time operator notifications before an incident escalates | ✅ BBA Platform |
| 1.2 | Detect threats before they can affect an asset | Video analytics covering facial recognition, crowd density, abandoned objects, perimeter breach — all generating real-time alerts | ✅ BBA Platform |
| 1.3 | Delay threat actors from accessing an asset | ACS integration: automatic lockdown protocols, controlled door sequencing, barrier override from SCR | ⚡ Joint |
| 1.4 | Provide coordinated Response capability | PSIM Core: operator procedure guides, team assignment, escalation rules, one-click multi-system response | ✅ BBA Platform |
| 1.5 | Enable rapid recovery from security incidents | Incident timeline reconstruction, evidence packaging, post-incident analysis tools, system health dashboard | ✅ BBA Platform |

---

## 2. Design Criteria — Technical (§17.2.2)

| # | EMAAR Requirement | BBA Solution | Status |
|---|-------------------|--------------|--------|
| 2.1 | Site-wide video surveillance — buildings, infrastructure, external areas | Unified VMS managing all RTSP/ONVIF camera streams across all floors and external zones | ✅ BBA Platform |
| 2.2 | ANPR system to log vehicles in and out — law requirement | ANPR module with Latin + Arabic character OCR, blacklist/whitelist/VIP management, full movement history | ✅ BBA Platform |
| 2.3 | Access control and intrusion detection for high-security areas | ACS integration module: Wiegand/OSDP protocol, real-time door status, unauthorized access alarms | ⚡ Joint |
| 2.4 | Intercom call points at selected access control locations | Intercom integration module: two-way audio/video from gate barriers and access points to SCR | ⚡ Joint |
| 2.5 | Integration of infrastructure and building systems for 24/7 monitoring | BMS integration: fire alarm, electrical mains failure, generator failure, mechanical failures, emergency lighting, lift failures — all displayed in unified platform | ✅ BBA Platform |
| 2.6 | Redundancy and back-up of critical infrastructure | Failover server architecture, RAID 5/6 storage, automatic synchronization — designed into platform core | ✅ BBA Platform |
| 2.7 | Layered smart technology for protection/detection | AI Analytics layer (DeepStream/OpenVINO) on top of VMS layer on top of integration layer — three independent detection mechanisms per zone | ✅ BBA Platform |

---

## 3. Design Criteria — Physical (§17.2.3)

| # | EMAAR Requirement | BBA Solution | Status |
|---|-------------------|--------------|--------|
| 3.1 | Segregation of spaces through CPTED principles | Security zoning logic implemented in platform: 8 zone types with distinct access rule sets | ✅ BBA Platform |
| 3.2 | Multiple dedicated security networks, system redundancy | Security network physically separate from IT network. Platform operates on dedicated security VLAN | ⚡ Joint |
| 3.3 | Dedicated security control room staffed 24/7 | SCR operator interface designed for multi-operator use: 6 workstations + supervisor console, video wall control | ✅ BBA Platform |
| 3.4 | Gatehouses at loading areas with access control and vehicle scanning | Gate workstation interface in platform: ANPR result display, barrier control, vehicle screening status | ⚡ Joint |
| 3.5 | Resilient MEP and Security infrastructure design | Platform monitors MEP alarm states via BMS integration. Failover alerts generated on any MEP failure | ⚡ Joint |

---

## 4. Code Compliance (§17.2.4)

| # | EMAAR Requirement | BBA Compliance |
|---|-------------------|----------------|
| 4.1 | SIRA Administrative Resolution No. 13 of 2025 | Platform designed to meet SIRA standards: 31-day minimum recording, PPM camera resolution requirements, ANPR as mandatory, audit trail integrity |
| 4.2 | BS EN 62676-1-2:2014 — Video surveillance performance requirements | Camera integration supports all performance parameters defined in this standard |
| 4.3 | BS EN 62676-4:2015 — Alarm systems, CCTV for security | Alarm integration and camera-to-alarm linkage fully compliant |
| 4.4 | BS 7958:2009 — CCTV Management and operation | VMS operation workflows aligned with BS 7958 code of practice |
| 4.5 | EN 60839-11-1:2013 — ACS System Certification | ACS integration module interfaces with certified third-party ACS panels |
| 4.6 | BS EN ISO 11064 series — Ergonomic design of control centres | SCR operator interface designed with ISO 11064 ergonomic principles: task-specific screen zones, colour coding, alert hierarchies |

---

## 5. Video Surveillance System (§17.10)

### 5.1 Core Functions

| # | EMAAR Requirement | BBA Solution | Status |
|---|-------------------|--------------|--------|
| 5.1.1 | Video Monitoring — number, direction, speed of movement across wide areas | Live grid view (4/9/16/32/64 cameras), PTZ joystick control, crowd density overlay, motion vectors | ✅ BBA Platform |
| 5.1.2 | Video Assessment — alarm-triggered camera switching and pre/post alarm recording | Automatic camera focus on alarm source, pre-alarm buffer (configurable), post-alarm extended recording | ✅ BBA Platform |
| 5.1.3 | Video Investigation — intelligent video search, synopsis capability, evidential export | Timeline-based playback, metadata search (time/zone/event type), AI-assisted person/vehicle search | ✅ BBA Platform |

### 5.2 Camera Technical Requirements

| # | EMAAR Requirement | BBA Solution | Status |
|---|-------------------|--------------|--------|
| 5.2.1 | Target Image Heights: Monitoring 5% (12.5 PPM), Detection 10% (30 PPM), Observation 25% (63.5 PPM), Recognition 50% (125 PPM), Identification 120% (300 PPM) | Camera placement planning tool within platform verifies PPM coverage per zone. Operator can validate TIH for any camera in real time | ✅ BBA Platform |
| 5.2.2 | Lux levels: Façade 5, Perimeter 20, Pedestrian Entrances 50, Emergency Exits 30, Walkways 30, Service/Loading 50, Parking Garage 60 | Platform stores lux zone parameters and flags cameras operating below threshold (via automatic brightness monitoring) | ✅ BBA Platform |
| 5.2.3 | Max light-to-dark ratio 6:1 within any video scene | WDR camera requirement enforced in hardware spec; platform flags non-WDR cameras in low-light zones | ⚡ Joint |
| 5.2.4 | Image sensor ½" or greater, WDR >150Db sensitivity | Hardware specification by Aerosmart; platform enforces minimum stream quality thresholds | ⚡ Joint |
| 5.2.5 | Video codec H.265, VBR, live 30 FPS, recorded 15 FPS, alarm 30 FPS | Platform enforces codec policy per camera: H.265 primary, H.264 fallback. Frame rate automatically increases on alarm trigger | ✅ BBA Platform |
| 5.2.6 | Third stream output for Smart City (1–30 FPS user-selected) | Configurable third stream output per camera group for Smart City / external feed | ✅ BBA Platform |

### 5.3 Video Recording (§17.10.9)

| # | EMAAR Requirement | BBA Solution | Status |
|---|-------------------|--------------|--------|
| 5.3.1 | 31-day minimum retention (SIRA requirement) | Platform enforces 31-day retention policy. Storage calculator built in. Alert generated when storage approaches threshold | ✅ BBA Platform |
| 5.3.2 | RAID 5/6 storage with failover | Storage architecture designed with RAID 5/6. Platform monitors RAID health and alerts on degradation | ⚡ Joint |
| 5.3.3 | Failover application servers with automatic synchronization | Hot-standby server architecture. Platform auto-switches on primary failure within 30 seconds | ✅ BBA Platform |

### 5.4 Evidence Handling (§17.10.6)

| # | EMAAR Requirement | BBA Solution | Status |
|---|-------------------|--------------|--------|
| 5.4.1 | Tagging of recorded video for evidential purposes | One-click evidence tagging from any playback view. Tag includes operator ID, timestamp, incident reference | ✅ BBA Platform |
| 5.4.2 | Digital watermarking and time stamping of evidential video | All exported clips carry embedded watermark and RFC 3161 compliant timestamp | ✅ BBA Platform |
| 5.4.3 | Secure export process requiring administrator privileges | Role-based export: evidence export requires minimum Supervisor role. All exports logged | ✅ BBA Platform |
| 5.4.4 | Digital export log — clear audit trail | Tamper-proof audit log: every export, view, and system change recorded with operator identity and timestamp | ✅ BBA Platform |

---

## 6. Video Analytics (§17.10.5.8)

| # | EMAAR Requirement | BBA AI Module | Deployment | Status |
|---|-------------------|---------------|------------|--------|
| 6.1 | Facial recognition | Real-time face detection and matching against watchlist. Alert with confidence score and nearest camera auto-switch | Entry/exit points, Welcome Hall, FOH exits | ✅ BBA Platform |
| 6.2 | Vehicle dwell time monitoring | Vehicle detected, entry time stamped, dwell time calculated. Alert on threshold exceed | All parking zones, loading bay | ✅ BBA Platform |
| 6.3 | Vehicle classification | Vehicle type classification (car/truck/bike/coach) from camera stream | Driveways, loading bay, car parks | ✅ BBA Platform |
| 6.4 | Early smoke detection | Visual smoke pattern detection from CCTV — triggers before traditional sensors | Rooftop, car park driveway, loading bay | ✅ BBA Platform |
| 6.5 | Over-speeding detection | Vehicle speed estimation from camera. Alert on threshold exceed | Car park driveways | ✅ BBA Platform |
| 6.6 | Wrong-way detection | Directional flow analysis. Alert on vehicle/pedestrian travelling against defined flow | Driveways, car park exits | ✅ BBA Platform |
| 6.7 | Crowd density / crowd gathering | Heatmap overlay, density threshold alerts, crowd flow analysis | External areas, Food Hall, atrium, event spaces | ✅ BBA Platform |
| 6.8 | Abandoned object detection | Object left unattended beyond configurable time threshold | All public areas | ✅ BBA Platform |
| 6.9 | Perimeter intrusion / restricted zone entry | Virtual fence tripwire and zone entry alerts | BOH boundaries, rooftop, secure areas | ✅ BBA Platform |
| 6.10 | Loitering detection | Person stationary beyond threshold in sensitive area | ATMs, loading areas, car park | ✅ BBA Platform |
| 6.11 | False alarm filter | ML-based alarm quality scoring. Reduces operator fatigue from nuisance alarms | All AI modules | ✅ BBA Platform |

**AI Infrastructure:** NVIDIA DeepStream / OpenVINO. Custom-trained models. GPU-accelerated inference server co-located with SCR equipment rack.

---

## 7. ANPR System (§17.10.8)

| # | EMAAR Requirement | BBA Solution | Status |
|---|-------------------|--------------|--------|
| 7.1 | ANPR at all entries and exits of drop-off driveways and parking | ANPR module integrated with all entry/exit cameras. Real-time plate reading | ⚡ Joint |
| 7.2 | Latin and Arabic character recognition | OCR engine supporting both character sets | ✅ BBA Platform |
| 7.3 | Cross-reference against blacklist/hotlist database | Real-time database lookup per plate read. Alert to SCR on match | ✅ BBA Platform |
| 7.4 | Capture: time/date, plate number, camera ID, still image of plate, still overview of vehicle and occupants | All fields captured and stored per ANPR event. Searchable by any field | ✅ BBA Platform |
| 7.5 | Hotlist match alert to security control room | Instant alert on blacklist match with plate image, camera location, operator guidance | ✅ BBA Platform |
| 7.6 | Whitelist management — authorized vehicles | VIP/whitelist management: add/remove/expire entries. Automatic barrier open on match | ✅ BBA Platform |
| 7.7 | Food delivery vehicle VMS integration — ANPR-based pre-registered entry | Visitor Management module: online pre-registration, time-bound QR + plate combo, automatic barrier release on verified match | ✅ BBA Platform |
| 7.8 | Metadata to main control room | All ANPR metadata streamed to SCR dashboard in real time | ✅ BBA Platform |

---

## 8. Access Control System Integration (§17.11)

| # | EMAAR Requirement | BBA Solution | Status |
|---|-------------------|--------------|--------|
| 8.1 | Generate alarms: unauthorized access, blacklisted cardholder, door forced open, door held >15s, duress, power failure, tamper | All alarm types integrated into PSIM alarm queue with priority scoring and operator guidance | ✅ BBA Platform |
| 8.2 | Auto image switching to nearest camera on ACS alarm | On any ACS event, nearest camera automatically displayed in SCR primary monitor | ✅ BBA Platform |
| 8.3 | ACS alarm location displayed on operator GUI | Floor plan view shows alarm pin at exact door/reader location | ✅ BBA Platform |
| 8.4 | RBAC — access permissions management | Role-based access: person groups, time-based rules, zone-based restrictions | ✅ BBA Platform |
| 8.5 | Physical key management system | Key cabinet integration interface. Key issue/return logged against operator identity | ✅ BBA Platform |
| 8.6 | Anti-passback | Anti-passback logic enforced at zone boundaries | ✅ BBA Platform |
| 8.7 | Stand-alone operation for 48 hours on comms failure | ACS panel stand-alone capability — BBA platform re-syncs all events on reconnection | ⚡ Joint |
| 8.8 | Fire alarm integration — automatic door release on fire | Fire alarm signal received → ACS controlled doors in egress path released automatically | ⚡ Joint |
| 8.9 | EN 60839-11-1:2013 system certification | ACS panels selected by Aerosmart to meet EN 60839 certification. BBA platform ODBC/API integration | ⚡ Joint |
| 8.10 | Support integration with VMS and PSIM at SCR | Native integration: ACS events appear in unified PSIM alarm stream | ✅ BBA Platform |
| 8.11 | Event space ACS — on/off scheduling, QR/NFC reader control | Event management module: schedule-based ACS activation, QR code generation and validation at escalator/lift readers | ✅ BBA Platform |
| 8.12 | Push alarms, images, transaction data to mobile devices | Mobile companion app: supervisor receives critical alerts with camera snapshot | ✅ BBA Platform |
| 8.13 | ID management system — integrated with ACS | Integrated ID/badge management: card issuance, photo capture, expiry management | ✅ BBA Platform |

---

## 9. PSIM and Security Management (§17.8.3)

| # | EMAAR Requirement | BBA Solution | Status |
|---|-------------------|--------------|--------|
| 9.1 | Software platform providing overall monitoring and control of all security systems and devices | BBA Security Intelligence Platform is the PSIM core — single pane of glass for VMS, ACS, ANPR, Intercom, BMS, Drone | ✅ BBA Platform |
| 9.2 | Operator awareness in control room at all times | Unified alarm queue, operator assignment, unacknowledged alarm escalation | ✅ BBA Platform |
| 9.3 | Alarm correlation from multiple sources | Multi-source correlation engine: CCTV + ACS + ANPR events correlated by time, location, and entity | ✅ BBA Platform |
| 9.4 | Step-by-step operator procedure guides | Procedure engine: each alarm type triggers configurable checklist displayed to operator | ✅ BBA Platform |
| 9.5 | Team/personnel assignment and task tracking | Operator tasking module: assign incidents to security personnel, track completion | ✅ BBA Platform |
| 9.6 | Escalation rules — unanswered alarms to senior staff | Configurable escalation timers: unacknowledged → supervisor → emergency | ✅ BBA Platform |
| 9.7 | Complete audit trail | All operator actions, system events, configuration changes logged to tamper-proof audit store | ✅ BBA Platform |
| 9.8 | Central alarm stack — all sub-system alarms monitored in single application | Unified alarm panel with source filtering, priority sorting, and batch acknowledgement | ✅ BBA Platform |
| 9.9 | Automatic camera switching on alarm | Alarm → nearest camera automatically displayed. Pre-alarm clip loaded | ✅ BBA Platform |
| 9.10 | GUI with interactive sensor icons — activate/deactivate controls, alarm events, device tags | Floor plan view: every camera, door, reader, barrier, intercom represented as interactive icon | ✅ BBA Platform |

---

## 10. Security Control Room (§17.6.1 / §17.8.2)

| # | EMAAR Requirement | BBA Solution | Status |
|---|-------------------|--------------|--------|
| 10.1 | 24/7 staffed SCR — **12 operators + 2 supervisors** (per IFC §17.24) | Platform supports unlimited concurrent workstations. Role-based UI: operator vs supervisor view. Workstation layout designed for 12-operator simultaneous operation | ✅ BBA Platform |
| 10.2 | LED video wall — curved, bezel-less, raked seating layout | Video wall controller integration: BBA platform drives video wall layout. Critical streams always on, standard feeds rotated at max 6 per minute (SIRA compliant) | ✅ BBA Platform |
| 10.3 | Console desk — CCTV, ACS, ANPR workstations | Unified platform: single application replaces separate CCTV/ACS/ANPR consoles | ✅ BBA Platform |
| 10.4 | Master intercom integrated into console | Intercom module integrated directly into SCR operator interface. All gate barrier intercoms accessible from one screen | ✅ BBA Platform |
| 10.5 | Manual push button for gate barriers and road blockers | Barrier override controls in platform. Hard-button fallback via control panels (Aerosmart hardware) | ⚡ Joint |
| 10.6 | Emergency/Crisis Command Room adjacent to SCR | Crisis mode view in platform: simplified high-priority display for Emergency Commander | ✅ BBA Platform |

---

## 10a. Endpoint Detection and Response — EDR (§17.15)

| # | EMAAR Requirement | BBA Solution | Status |
|---|-------------------|--------------|--------|
| 10a.1 | EDR framework across all endpoint devices connected to the security network | Platform includes EDR integration layer: continuous monitoring of all software endpoints (workstations, servers, integration nodes) with anomaly-based threat detection | ✅ BBA Platform |
| 10a.2 | Advanced threat detection and real-time monitoring | EDR agent deployed on all BBA platform servers and operator workstations. Behavioural analysis detects lateral movement, privilege escalation, and unauthorized process execution | ✅ BBA Platform |
| 10a.3 | Rapid incident response across all endpoint devices | On EDR alert: automatic isolation of compromised endpoint, operator notification via PSIM, full forensic event log captured. Escalation to security supervisor within 60 seconds | ✅ BBA Platform |

---

## 11. Drone Monitoring System (§17.17)

| # | EMAAR Requirement | BBA Solution | Status |
|---|-------------------|--------------|--------|
| 11.1 | Drone monitoring system to complement fixed surveillance | Drone integration module: live video and telemetry from Aerosmart drone fleet displayed within platform | ⚡ Joint |
| 11.2 | Flexible, real-time aerial monitoring of external and strategic areas | Alarm-triggered drone dispatch: platform sends waypoint mission to drone on defined alarm events | ⚡ Joint |
| 11.3 | Fixed camera + drone feed fusion on single screen | Single-screen fusion view: floor/site map with drone position overlay, live drone feed alongside fixed cameras | ✅ BBA Platform |
| 11.4 | Flight history and recording management | Drone flight logs, video archive, and incident-linked footage stored and searchable in platform | ✅ BBA Platform |

---

## 12. Visitor Management System — Food Delivery (§17.16)

| # | EMAAR Requirement | BBA Solution | Status |
|---|-------------------|--------------|--------|
| 12.1 | Online pre-registration of delivery personnel and vehicles | Web portal (VMS module): driver registers delivery, vehicle plate, time window → time-bound QR code issued | ✅ BBA Platform |
| 12.2 | ANPR at Lane 1 automatically detects and opens barrier for pre-registered vehicles | ANPR match against VMS reservation → automatic barrier release signal | ✅ BBA Platform |
| 12.3 | Delivery bikes bypass scanning; subsequent gate barriers open automatically | Plate-based ACS logic: once ANPR authenticated at entry, subsequent ACS-controlled gates in designated route open automatically | ✅ BBA Platform |
| 12.4 | QR code for BOH corridor access | QR code generated at pre-registration. ACS door reader validates QR via platform | ✅ BBA Platform |
| 12.5 | ANPR-controlled final exit | Exit ANPR validates plate → barrier opens. Exit event logged. VMS session closed | ✅ BBA Platform |

---

## 13. Security Intercom (§17.12)

| # | EMAAR Requirement | BBA Solution | Status |
|---|-------------------|--------------|--------|
| 13.1 | Two-way audio/video communication from access points to SCR | Intercom integration module: all remote stations reachable from unified SCR interface | ⚡ Joint |
| 13.2 | IP-based, Full HD video, clear voice, vandal and weatherproof | IP intercom hardware specification by Aerosmart. Platform integration via SIP/SDK | ⚡ Joint |
| 13.3 | Emergency Call Points (ECP) in car parks — medical, assault, breakdown, accident | ECP events appear as priority alarms in PSIM. Nearest camera auto-switches. Operator connected within seconds | ⚡ Joint |
| 13.4 | Master station at SCR with cascade to secondary stations | Cascade logic configured in platform: unanswered call escalates to supervisor station | ✅ BBA Platform |

---

## 14. BMS Integration (§17.8.5)

| # | EMAAR Requirement | BBA Solution | Status |
|---|-------------------|--------------|--------|
| 14.1 | Fire Alarm System — integration to security for door release on fire | Fire alarm signal integration: automatic ACS door release on fire floor/zone | ⚡ Joint |
| 14.2 | BMS alarms monitored on security system: Fire Alarm, Electrical Mains Failure, Generator Failure, Mechanical Failures, Emergency Lighting, Lift Failures | All BMS alarm types mapped into PSIM alarm stream. Each has dedicated operator procedure guide | ✅ BBA Platform |
| 14.3 | Intercom integration with lift supplier system | Lift intercom integration via SIP. Platform manages call routing to SCR | ⚡ Joint |

---

## 14a. TETRA / Security Staff Communications (§17.27)

| # | EMAAR Requirement | BBA Solution | Status |
|---|-------------------|--------------|--------|
| 14a.1 | TETRA or equivalent critical communications system for security staff — NEDAA (Dubai) authorised | BBA platform integrates with TETRA gateway: radio calls, alerts, and dispatch messages visible and controllable from SCR operator console | ⚡ Joint |
| 14a.2 | Hand-held radio system with mobile back-up capability | TETRA hardware by Aerosmart (NEDAA-licensed). BBA platform provides dispatch automation: alarm event → auto broadcast to nearest patrol officer's device | ⚡ Joint |
| 14a.3 | Reliable wireless communications within all security team | Platform displays real-time radio unit status (active/idle/emergency) on floor plan. Officer location tracked via radio ping if TETRA system supports positioning | ✅ BBA Platform |
| 14a.4 | NEDAA TETRA authorisation per Government of Dubai Circular 2 | Aerosmart obtains NEDAA authorisation as licensed UAE security integrator. BBA platform TETRA integration module compliant with NEDAA API requirements | ⚡ Joint |

---

## 15. Security Network (§17.8.4)

| # | EMAAR Requirement | BBA Solution | Status |
|---|-------------------|--------------|--------|
| 15.1 | Physically separate security network from IT | Platform operates exclusively on dedicated security network. No cross-network communication | ✅ BBA Platform |
| 15.2 | Active network: Core, Distribution, Access layers with redundancy | Network design provided by BBA as part of technical package. Aerosmart installs active equipment | ⚡ Joint |
| 15.3 | Passive network: fiber optic (multimode core/distribution, single-mode long runs) + CAT6A to devices | Passive network specification in BBA technical design. Aerosmart installs cabling | 🔵 Aerosmart |
| 15.4 | IDF room 3000×4000mm — 1 ICT rack + 1 Security rack + ACS panels | BBA defines rack equipment layout and cable management. Aerosmart installs physical infrastructure | ⚡ Joint |
| 15.5 | Cybersecurity: separate physical network, firewalls, no wireless on security network | Platform architecture enforces network isolation. No cloud dependency. All data on-premise | ✅ BBA Platform |
| 15.6 | AES 128-bit minimum encryption on all communications | All inter-module communication encrypted at minimum AES-128. User sessions TLS 1.3 | ✅ BBA Platform |

---

## 16. General / Environmental Requirements (§17.9)

| # | EMAAR Requirement | BBA Solution | Status |
|---|-------------------|--------------|--------|
| 16.1 | System operational 24h/day, 7 days/week, 365 days/year | Platform designed for continuous operation. Auto-restart on failure. Health monitoring with SMS/email alert | ✅ BBA Platform |
| 16.2 | Operating temperature -10°C to +55°C outdoor | Platform server hardware rated for controlled indoor environment (SCR). Outdoor hardware specification by Aerosmart | ⚡ Joint |
| 16.3 | IP66 minimum rating for external equipment | Hardware specification by Aerosmart. Platform integration independent of enclosure rating | 🔵 Aerosmart |
| 16.4 | UPS — 30 minutes standby, modular design, battery/power failure monitoring | UPS monitoring integrated into platform. Battery status, power failure, bypass state all displayed in SCR | ⚡ Joint |
| 16.5 | UPS alarms: Battery Low, Power Failure, Battery On Status, Maintenance Bypass, Fault | All UPS alarm states mapped into PSIM alarm stream | ✅ BBA Platform |
| 16.6 | Offline operation — system runs without internet | Fully on-premise architecture. No cloud dependency. System continues if WAN disconnected | ✅ BBA Platform |
| 16.7 | Aesthetic requirement — equipment visible in public areas approved by architect | Equipment enclosures specified by Aerosmart in coordination with architect. Platform software only in SCR | 🔵 Aerosmart |

---

## 17. Hostile Vehicle Mitigation (§17.14)

| # | EMAAR Requirement | BBA Solution | Status |
|---|-------------------|--------------|--------|
| 17.1 | SIRA-approved rated HVM — mall façade, Boulevard, Welcome Court | HVM hardware design and supply by Aerosmart | 🔵 Aerosmart |
| 17.2 | Gate barriers controlled via access control system and monitored by CCTV | All gate barrier states displayed on floor plan in platform. Barrier control from SCR operator interface | ✅ BBA Platform |
| 17.3 | Road blockers at loading bay entry with ANPR and scanning | Loading bay management: ANPR verification → scanning result → operator decision → road blocker release, all from single platform view | ⚡ Joint |
| 17.4 | Mall zone can be closed in emergency — all road entry/exit stopped | Emergency lockdown mode: single operator action closes all barriers and road blockers site-wide | ✅ BBA Platform |

---

## 18. Redundancy and Failover (§17.20)

| # | EMAAR Requirement | BBA Solution | Status |
|---|-------------------|--------------|--------|
| 18.1 | Redundant Access Control and Video Surveillance systems | Hot-standby servers for both VMS and ACS integration. Automatic failover with event synchronization | ✅ BBA Platform |
| 18.2 | Failover storage at each recording location | Platform supports distributed recording: local NVR + central server. Loss of one does not lose recording | ✅ BBA Platform |

---

## 19. Reporting and Analytics (§17.8.3 / Platform Value-Add)

| # | Feature | BBA Solution | Status |
|---|---------|--------------|--------|
| 19.1 | Automated daily/weekly/monthly reports (PDF) | Report engine: scheduled generation and email delivery to defined recipients | ✅ BBA Platform |
| 19.2 | Executive dashboard — KPIs, trend graphs | Management dashboard: incident rates, response times, system health, camera uptime | ✅ BBA Platform |
| 19.3 | Visitor traffic analytics | Footfall counting and heatmap from CCTV analytics data | ✅ BBA Platform |
| 19.4 | Security incident statistics | Incident classification, resolution time, repeat location analysis | ✅ BBA Platform |
| 19.5 | System health report — device uptime, alarm statistics | Automated health report: every camera, door, reader, ANPR camera — uptime and fault history | ✅ BBA Platform |
| 19.6 | Predictive analytics — risk scoring | ML-based risk score per zone based on historical incident patterns | ✅ BBA Platform |

---

## Summary Coverage

| System | Total Requirements | BBA Platform | Joint (BBA+Aerosmart) | Aerosmart Hardware | Procedural |
|--------|--------------------|--------------|----------------------|-------------------|-----------|
| Video Surveillance (VMS) | 18 | 15 | 3 | — | — |
| Video Analytics (AI) | 11 | 11 | — | — | — |
| ANPR | 8 | 7 | 1 | — | — |
| Access Control Integration | 13 | 10 | 3 | — | — |
| PSIM / Security Management | 10 | 10 | — | — | — |
| Security Control Room (12+2 operators) | 6 | 5 | 1 | — | — |
| EDR — Endpoint Detection & Response | 3 | 3 | — | — | — |
| Drone Monitoring | 4 | 2 | 2 | — | — |
| Visitor Management (Food Delivery) | 5 | 5 | — | — | — |
| Intercom + Emergency Call Points | 4 | 2 | 2 | — | — |
| TETRA / Staff Communications | 4 | 1 | 3 | — | — |
| BMS Integration | 3 | 2 | 1 | — | — |
| Security Network | 6 | 3 | 2 | 1 | — |
| General / Environmental | 7 | 4 | 2 | 1 | — |
| HVM | 4 | 2 | 1 | 1 | — |
| Redundancy | 2 | 2 | — | — | — |
| **TOTAL** | **108** | **84 (78%)** | **21 (19%)** | **3 (3%)** | **—** |

**BBA Platform directly addresses 78% of all IFC requirements.**  
**Combined BBA + Aerosmart coverage: 100%.**

---

## Platform Technology Stack

| Layer | Technology |
|-------|-----------|
| Desktop UI | WPF / .NET 8 (Windows) |
| AI Inference | NVIDIA DeepStream / Intel OpenVINO |
| Video Decode | FFmpeg + GPU hardware acceleration |
| Primary Database | PostgreSQL |
| Time Series / Analytics | TimescaleDB |
| Video Storage | Local RAID + NVR integration |
| Inter-service Communication | gRPC (on-premise) |
| Reporting | FastReport / RDLC |
| Floor Plan Rendering | SVG-based custom renderer |
| Encryption | AES-128 minimum, TLS 1.3 |

---

*BBA Technology — Confidential. Prepared for Aerosmart / EMAAR review.*
