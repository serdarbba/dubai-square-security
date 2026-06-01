// ═══════════════════════════════════════════════════════════════
//  BBA Dubai Square — Guided Demo Tour Widget
//  Add <script src="/tour.js"></script> to each page.
//  Each page defines: window.TOUR_PAGE = { id, scenes[] }
//  State persists across page transitions via sessionStorage.
// ═══════════════════════════════════════════════════════════════

(function () {

// ── PAGE ORDER ────────────────────────────────────────────────
const PAGE_ORDER = ['twin', 'ops', 'access', 'graph', 'cards', 'demo'];
const PAGE_URLS  = {
  twin:   '/twin/',
  ops:    '/ops/',
  access: '/access/',
  graph:  '/graph/',
  cards:  '/cards/',
  demo:   '/demo/',
};

// ── LANGUAGE STATE ────────────────────────────────────────────
let _tourLang = localStorage.getItem('bba_lang') || 'en';

function _t(scene, key) {
  if (_tourLang === 'ar' && scene[key + '_ar']) return scene[key + '_ar'];
  return scene[key] || '';
}

window._tourSetLang = function(lang) {
  _tourLang = lang;
  localStorage.setItem('bba_lang', lang);
  document.querySelectorAll('.tw-lang').forEach(b => b.classList.remove('tw-lang-act'));
  const btn = document.getElementById('twLang_' + lang);
  if (btn) btn.classList.add('tw-lang-act');
  if (_state?.active) {
    const scenes = _getScenes();
    const s = scenes[_state.sceneIdx];
    if (s) _showCallout(s);
  }
  // Keep twin page i18n in sync (guard against mutual recursion)
  if (window.setLang && !window._langSyncing) {
    window._langSyncing = true;
    window.setLang(lang.toUpperCase());
    window._langSyncing = false;
  }
};

// ── CSS ───────────────────────────────────────────────────────
const CSS = `
#tourWidget{pointer-events:none;font-family:'JetBrains Mono',monospace}
#twStartBtn{pointer-events:auto;position:fixed;bottom:96px;right:28px;z-index:9500;
  padding:11px 22px;background:rgba(10,176,204,.12);border:1px solid rgba(10,176,204,.45);
  border-radius:3px;font-size:10px;color:#0ab0cc;letter-spacing:1.5px;cursor:pointer;transition:all .2s}
#twStartBtn:hover{background:rgba(10,176,204,.22);color:#fff;box-shadow:0 0 18px rgba(10,176,204,.2)}
#twBar{display:none;pointer-events:auto;position:fixed;bottom:0;left:0;right:0;z-index:9500;
  background:rgba(2,6,14,.97);border-top:1px solid rgba(10,176,204,.22);
  padding:0 24px;height:44px;align-items:center;justify-content:space-between}
#twBar.on{display:flex}
#twDots{display:flex;gap:5px;align-items:center}
.tw-dot{width:7px;height:7px;border-radius:50%;border:1px solid rgba(10,176,204,.3);
  background:transparent;transition:all .25s;cursor:pointer}
.tw-dot.done{background:rgba(10,176,204,.4);border-color:rgba(10,176,204,.6)}
.tw-dot.curr{background:#0ab0cc;border-color:#0ab0cc;box-shadow:0 0 6px rgba(10,176,204,.5)}
.tw-dot.other{border-color:rgba(10,176,204,.15)}
#twLbl{font-size:8.5px;color:rgba(100,160,190,.6);letter-spacing:1px;margin-left:12px}
#twNav{display:flex;gap:7px;align-items:center}
.tw-btn{pointer-events:auto;padding:4px 12px;border-radius:2px;border:1px solid rgba(255,255,255,.12);
  background:transparent;font-family:'JetBrains Mono',monospace;font-size:8.5px;
  color:rgba(150,185,200,.7);cursor:pointer;letter-spacing:.8px;transition:all .18s}
.tw-btn:hover{color:#fff;border-color:rgba(10,176,204,.4)}
.tw-btn.end{border-color:rgba(214,64,64,.25);color:rgba(214,64,64,.5)}
.tw-btn.end:hover{border-color:rgba(214,64,64,.55);color:#d64040}
.tw-lang{pointer-events:auto;padding:3px 9px;border-radius:2px;
  border:1px solid rgba(10,176,204,.18);background:transparent;
  font-family:'JetBrains Mono',monospace;font-size:8.5px;
  color:rgba(10,176,204,.45);cursor:pointer;letter-spacing:.5px;transition:all .18s}
.tw-lang:hover{color:#0ab0cc;border-color:rgba(10,176,204,.4)}
.tw-lang.tw-lang-act{color:#0ab0cc;border-color:rgba(10,176,204,.6);background:rgba(10,176,204,.1)}
#twCallout{
  display:none;position:fixed;bottom:58px;left:50%;transform:translateX(-50%);
  z-index:9490;width:max-content;max-width:min(720px,90vw);
  background:rgba(0,0,0,.82);
  border-top:3px solid #0ab0cc;
  border-left:none;border-right:none;border-bottom:none;
  border-radius:0;padding:14px 32px 16px;
  text-align:center;pointer-events:none;
  backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);
  box-shadow:0 -2px 32px rgba(10,176,204,.18),0 8px 40px rgba(0,0,0,.6);
  transition:opacity .3s}
#twCallout.show{display:block}
#twCallout.fade{opacity:0}
#twTag{
  display:inline-block;
  font-size:8px;letter-spacing:3px;color:#0ab0cc;
  background:rgba(10,176,204,.12);border:1px solid rgba(10,176,204,.35);
  padding:2px 10px;border-radius:2px;margin-bottom:9px;
  white-space:nowrap;
}
#twTitle{
  font-size:22px;font-weight:800;color:#ffffff;
  letter-spacing:.5px;margin-bottom:8px;line-height:1.15;
  text-shadow:0 2px 12px rgba(0,0,0,.8);
}
#twSub{
  font-size:11.5px;color:rgba(220,235,248,.88);
  letter-spacing:.3px;line-height:1.7;
  text-shadow:0 1px 6px rgba(0,0,0,.9);
}
#twSub[dir=rtl]{font-size:12.5px;letter-spacing:0;font-family:'Segoe UI',Tahoma,Geneva,sans-serif}
#twPageTag{display:none;position:fixed;top:50px;left:50%;transform:translateX(-50%);
  z-index:9500;padding:3px 14px;background:rgba(10,176,204,.09);
  border:1px solid rgba(10,176,204,.22);border-radius:2px;
  font-family:'JetBrains Mono',monospace;font-size:8px;color:#0ab0cc;letter-spacing:2px}
#twPageTag.show{display:block}
`;
const style = document.createElement('style');
style.textContent = CSS;
document.head.appendChild(style);

// ── HTML ──────────────────────────────────────────────────────
const wrap = document.createElement('div');
wrap.id = 'tourWidget';
wrap.innerHTML = `
<button id="twStartBtn" onclick="window._tourStart()">▶ START DEMO</button>
<div id="twPageTag">◈ DEMO MODE</div>
<div id="twBar">
  <div style="display:flex;align-items:center">
    <div id="twDots"></div>
    <div id="twLbl"></div>
  </div>
  <div id="twNav">
    <button class="tw-lang" id="twLang_en" onclick="window._tourSetLang('en')">EN</button>
    <button class="tw-lang" id="twLang_ar" onclick="window._tourSetLang('ar')">عربي</button>
    <button class="tw-btn" onclick="window._tourPrev()">← PREV</button>
    <button class="tw-btn" id="twAutoBtn" onclick="window._tourToggleAuto()">⏸ PAUSE</button>
    <button class="tw-btn" onclick="window._tourNext()">NEXT →</button>
    <button class="tw-btn end" onclick="window._tourEnd()">✕ END</button>
  </div>
</div>
<div id="twCallout">
  <div id="twTag"></div>
  <div id="twTitle"></div>
  <div id="twSub"></div>
</div>`;
document.body.appendChild(wrap);

// Highlight active language button on init
(function() {
  const btn = document.getElementById('twLang_' + _tourLang);
  if (btn) btn.classList.add('tw-lang-act');
})();

// ── DEFAULT PAGE SCENES ───────────────────────────────────────
function _defaultPageScene() {
  const titles = {
    ops: {
      tag:'OPS CENTER', title:'Operations Center',
      sub:'Real-time incident management\n24/7 security operations center',
      tag_ar:'مركز العمليات', title_ar:'مركز العمليات',
      sub_ar:'إدارة الحوادث في الوقت الفعلي\nمركز عمليات الأمن 24/7'
    },
    access: {
      tag:'ACCESS CONTROL', title:'Access Intelligence',
      sub:'2,400 access points · Complete log recording\nUnauthorized entry detected instantly',
      tag_ar:'التحكم في الوصول', title_ar:'ذكاء الوصول',
      sub_ar:'2,400 نقطة وصول · تسجيل سجل كامل\nكشف الدخول غير المصرح به فورياً'
    },
    graph: {
      tag:'ENTITY GRAPH', title:'Relationship Analysis',
      sub:'Person · Vehicle · Incident connection network\nAI-powered suspicious pattern detection',
      tag_ar:'رسم العلاقات', title_ar:'تحليل العلاقات',
      sub_ar:'شبكة ترابط الأشخاص · المركبات · الحوادث\nكشف الأنماط المشبوهة بالذكاء الاصطناعي'
    },
    cards: {
      tag:'CARD MANAGEMENT', title:'Card Management',
      sub:'VIP · Staff · Contractor · Visitor\nMulti-level authorization system',
      tag_ar:'إدارة البطاقات', title_ar:'إدارة البطاقات',
      sub_ar:'VIP · موظفون · مقاولون · زوار\nنظام تفويض متعدد المستويات'
    },
    demo: {
      tag:'AI OPERATOR', title:'Alya — AI Assistant',
      sub:'Facility control via natural language\n24/7 AI security assistant',
      tag_ar:'المشغّل الذكي', title_ar:'إلياء — المساعدة الذكية',
      sub_ar:'التحكم في المنشأة بالتخاطب الطبيعي\nمساعد الأمن الذكي 24/7'
    },
  };
  const pageId = _currentPageId();
  const t = titles[pageId] || {
    tag:'BBA PLATFORM', title:'Security Intelligence', sub:'Dubai Square · EMAAR',
    tag_ar:'منصة BBA', title_ar:'الذكاء الأمني', sub_ar:'دبي سكوير · إعمار'
  };
  return [{ tag:t.tag, title:t.title, sub:t.sub,
            tag_ar:t.tag_ar, title_ar:t.title_ar, sub_ar:t.sub_ar,
            duration:8000 }];
}

function _currentPageId() {
  const p = window.location.pathname;
  for (const id of PAGE_ORDER) { if (p.includes('/' + id + '/') || p.endsWith('/' + id)) return id; }
  return 'twin';
}

function _getScenes() {
  return (window.TOUR_PAGE && window.TOUR_PAGE.scenes) ? window.TOUR_PAGE.scenes : _defaultPageScene();
}

// ── STATE ─────────────────────────────────────────────────────
const SS_KEY = 'bba_tour';

function _saveState(obj) { try { sessionStorage.setItem(SS_KEY, JSON.stringify(obj)); } catch(e){} }
function _loadState()    { try { return JSON.parse(sessionStorage.getItem(SS_KEY)) || null; } catch(e){ return null; } }
function _clearState()   { try { sessionStorage.removeItem(SS_KEY); } catch(e){} }

let _state = null; // { active, pageIdx, sceneIdx, auto }
let _timer = null;

// ── START / END ───────────────────────────────────────────────
window._tourStart = function () {
  _state = { active:true, pageIdx: PAGE_ORDER.indexOf(_currentPageId()), sceneIdx:0, auto:true };
  _saveState(_state);
  _uiOn();
  _goScene(0);
};

window._tourEnd = function () {
  clearTimeout(_timer);
  _getScenes().forEach(s => { try { s.onExit && s.onExit(); } catch(e){} });
  _clearState();
  _state = null;
  _uiOff();
};

window._tourNext = function () {
  clearTimeout(_timer);
  _exitCurrentScene();
  const scenes = _getScenes();
  if (_state.sceneIdx < scenes.length - 1) {
    _state.sceneIdx++;
    _saveState(_state);
    _goScene(_state.sceneIdx);
  } else {
    _nextPage();
  }
};

window._tourPrev = function () {
  clearTimeout(_timer);
  _exitCurrentScene();
  if (_state.sceneIdx > 0) {
    _state.sceneIdx--;
    _saveState(_state);
    _goScene(_state.sceneIdx);
  } else if (_state.pageIdx > 0) {
    _state.pageIdx--;
    _state.sceneIdx = 0;
    _saveState(_state);
    window.location.href = PAGE_URLS[PAGE_ORDER[_state.pageIdx]];
  }
};

window._tourToggleAuto = function () {
  _state.auto = !_state.auto;
  _saveState(_state);
  const btn = document.getElementById('twAutoBtn');
  if (_state.auto) {
    btn.textContent = '⏸ PAUSE';
    _schedNext(_getScenes()[_state.sceneIdx]?.duration || 8000);
  } else {
    btn.textContent = '▶ AUTO';
    clearTimeout(_timer);
  }
};

// ── SCENE TRANSITIONS ─────────────────────────────────────────
function _exitCurrentScene() {
  const s = _getScenes()[_state?.sceneIdx];
  try { s && s.onExit && s.onExit(); } catch(e){}
}

function _goScene(idx) {
  if (!_state?.active) return;
  const scenes = _getScenes();
  const s = scenes[idx];
  if (!s) { _nextPage(); return; }

  _hideCallout(() => {
    if (s.cam && window._flyCamera) window._flyCamera(...s.cam.pos, ...s.cam.target);
    setTimeout(() => {
      try { s.onEnter && s.onEnter(); } catch(e){}
      _showCallout(s);
      _renderDots();
    }, s.cam ? 400 : 0);
    if (_state.auto) _schedNext(s.duration || 8000);
  });
}

function _nextPage() {
  clearTimeout(_timer);
  if (!_state) return;
  _state.pageIdx++;
  _state.sceneIdx = 0;
  if (_state.pageIdx >= PAGE_ORDER.length) {
    _tourEnd();
    return;
  }
  _saveState(_state);
  window.location.href = PAGE_URLS[PAGE_ORDER[_state.pageIdx]];
}

function _schedNext(ms) {
  clearTimeout(_timer);
  _timer = setTimeout(() => {
    if (!_state?.active) return;
    _exitCurrentScene();
    const scenes = _getScenes();
    if (_state.sceneIdx < scenes.length - 1) {
      _state.sceneIdx++;
      _saveState(_state);
      _goScene(_state.sceneIdx);
    } else {
      _nextPage();
    }
  }, ms);
}

// ── UI ────────────────────────────────────────────────────────
function _uiOn() {
  document.getElementById('twStartBtn').style.display = 'none';
  document.getElementById('twBar').classList.add('on');
  document.getElementById('twPageTag').classList.add('show');
}

function _uiOff() {
  document.getElementById('twStartBtn').style.display = '';
  document.getElementById('twBar').classList.remove('on');
  document.getElementById('twPageTag').classList.remove('show');
  _hideCallout();
}

function _showCallout(scene) {
  const tag   = _t(scene, 'tag');
  const title = _t(scene, 'title');
  const sub   = _t(scene, 'sub');
  const isAr  = _tourLang === 'ar';

  const el = document.getElementById('twCallout');
  document.getElementById('twTag').textContent = tag;
  document.getElementById('twTitle').textContent = title;
  document.getElementById('twTitle').setAttribute('dir', isAr ? 'rtl' : 'ltr');
  const subEl = document.getElementById('twSub');
  subEl.innerHTML = (sub||'').replace(/\n/g,'<br>');
  subEl.setAttribute('dir', isAr ? 'rtl' : 'ltr');
  el.classList.remove('fade');
  el.classList.add('show');
}

function _hideCallout(cb) {
  const el = document.getElementById('twCallout');
  if (!el.classList.contains('show')) { cb && cb(); return; }
  el.classList.add('fade');
  setTimeout(() => { el.classList.remove('show','fade'); cb && cb(); }, 360);
}

function _renderDots() {
  if (!_state) return;
  const scenes = _getScenes();
  const dotsEl = document.getElementById('twDots');
  dotsEl.innerHTML = '';
  PAGE_ORDER.forEach((pid, pi) => {
    const d = document.createElement('div');
    d.className = 'tw-dot' + (pi < _state.pageIdx ? ' done' : pi === _state.pageIdx ? ' curr' : ' other');
    d.title = pid;
    d.onclick = () => {
      clearTimeout(_timer);
      _exitCurrentScene();
      _state.pageIdx = pi; _state.sceneIdx = 0;
      _saveState(_state);
      if (pi === PAGE_ORDER.indexOf(_currentPageId())) { _goScene(0); }
      else { window.location.href = PAGE_URLS[PAGE_ORDER[pi]]; }
    };
    dotsEl.appendChild(d);
  });
  if (scenes.length > 1) {
    const sep = document.createElement('div');
    sep.style.cssText = 'width:1px;height:10px;background:rgba(10,176,204,.2);margin:0 4px';
    dotsEl.appendChild(sep);
    scenes.forEach((s, si) => {
      const d = document.createElement('div');
      d.className = 'tw-dot' + (si < _state.sceneIdx ? ' done' : si === _state.sceneIdx ? ' curr' : '');
      d.style.cssText = 'width:5px;height:5px';
      d.title = s.title;
      d.onclick = () => {
        clearTimeout(_timer);
        _exitCurrentScene();
        _state.sceneIdx = si; _saveState(_state); _goScene(si);
      };
      dotsEl.appendChild(d);
    });
  }
  const lbl = document.getElementById('twLbl');
  const pageId = PAGE_ORDER[_state.pageIdx] || '';
  lbl.textContent = `${pageId.toUpperCase()} · ${_state.sceneIdx+1}/${scenes.length}`;
}

// ── RESUME ON PAGE LOAD ───────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const saved = _loadState();
  if (saved && saved.active) {
    _state = saved;
    const expectedPage = PAGE_ORDER[_state.pageIdx];
    const currentPage  = _currentPageId();
    if (expectedPage !== currentPage) {
      _state.pageIdx = PAGE_ORDER.indexOf(currentPage);
      _state.sceneIdx = 0;
      _saveState(_state);
    }
    _uiOn();
    const tryStart = () => {
      const scenes = _getScenes();
      if (scenes.length) { _goScene(_state.sceneIdx); }
      else { setTimeout(tryStart, 200); }
    };
    setTimeout(tryStart, 600);
  }
});

// ── TWIN PAGE: camera fly helper ──────────────────────────────
window._flyCamera = function(tx, ty, tz, lx, ly, lz) {
  const cam = window.cam, ctrl = window.controls;
  if (!cam || !ctrl) return;
  const sp = cam.position.clone(), st = ctrl.target.clone();
  const dur = 1400, t0 = performance.now();
  function step(now) {
    const t = Math.min((now - t0) / dur, 1);
    const e = t < 0.5 ? 2*t*t : -1+(4-2*t)*t;
    cam.position.set(sp.x+(tx-sp.x)*e, sp.y+(ty-sp.y)*e, sp.z+(tz-sp.z)*e);
    ctrl.target.set(st.x+(lx-st.x)*e, st.y+(ly-st.y)*e, st.z+(lz-st.z)*e);
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
};

})();
