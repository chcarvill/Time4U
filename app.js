const timers = {};

function fmt(s) {
  const m = Math.floor(s / 60), sec = s % 60;
  return m > 0 ? `${m}:${sec.toString().padStart(2, '0')}` : `${sec}s`;
}

function startTimer(id, secs) {
  const displayEl = document.getElementById('disp-' + id);
  const btn = document.getElementById('btn-' + id);
  if (timers[id]) {
    clearInterval(timers[id]);
    timers[id] = null;
    displayEl.textContent = '';
    btn.textContent = 'Start timer';
    btn.classList.remove('running');
    return;
  }
  let remaining = secs;
  displayEl.textContent = fmt(remaining);
  btn.textContent = 'Stop';
  btn.classList.add('running');
  timers[id] = setInterval(() => {
    remaining--;
    if (remaining <= 0) {
      clearInterval(timers[id]);
      timers[id] = null;
      displayEl.textContent = 'Done ✓';
      btn.textContent = 'Start timer';
      btn.classList.remove('running');
    } else {
      displayEl.textContent = fmt(remaining);
    }
  }, 1000);
}

function toggle(id) {
  const btn = document.querySelector(`[data-cat="${id}"]`);
  const panel = document.getElementById('panel-' + id);
  const isOpen = panel.classList.contains('open');
  document.querySelectorAll('.activities').forEach(p => p.classList.remove('open'));
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  if (!isOpen) {
    panel.classList.add('open');
    btn.classList.add('active');
  }
}

function buildUI(data) {
  const container = document.getElementById('categories');
  data.categories.forEach(cat => {
    const wrap = document.createElement('div');
    wrap.className = 'cat-wrap';
    wrap.innerHTML = `
      <button class="cat-btn" data-cat="${cat.id}" onclick="toggle('${cat.id}')">
        <div class="cat-icon" style="background:${cat.color};color:${cat.iconColor}">${cat.icon}</div>
        <div class="cat-text">
          <div class="cat-title">${cat.title}</div>
          <div class="cat-sub">${cat.sub}</div>
        </div>
        <span class="cat-arrow">›</span>
      </button>
      <div class="activities" id="panel-${cat.id}">
        <div class="activity-list">
          ${cat.activities.map((a, i) => {
            const tid = cat.id + '-' + i;
            return `<div class="activity">
              <div class="activity-name">${a.name}</div>
              <div class="activity-desc">${a.desc}</div>
              ${a.timer ? `<div class="timer-row">
                <button class="timer-btn" id="btn-${tid}" onclick="startTimer('${tid}', ${a.timer})">Start timer</button>
                <span class="timer-display" id="disp-${tid}"></span>
              </div>` : ''}
            </div>`;
          }).join('')}
        </div>
      </div>
    `;
    container.appendChild(wrap);
  });
}

fetch('data.json')
  .then(r => r.json())
  .then(data => buildUI(data))
  .catch(err => console.error('Could not load data.json:', err));
