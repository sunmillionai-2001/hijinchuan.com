(() => {
  const data = window.JINCHUAN_CONTENT || {};
  const make = (tag, className, value) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (value !== undefined) node.textContent = value;
    return node;
  };
  const safeURL = value => {
    try {
      const url = new URL(value);
      return ['https:', 'mailto:'].includes(url.protocol) ? url.href : null;
    } catch { return null; }
  };
  const mount = (selector, renderer, items, limit) => {
    const target = document.querySelector(selector);
    if (!target || !Array.isArray(items)) return;
    target.replaceChildren(...items.slice(0, limit || items.length).map(renderer));
  };
  const product = (item, index) => {
    const card = make('article', 'service-card');
    card.id = item.id;
    const top = make('div', 'card-top');
    const icon = make('span', 'product-icon', item.symbol || '↗');
    icon.setAttribute('aria-hidden', 'true');
    top.append(icon, make('span', 'service-status', item.status));
    card.append(top, make('span', 'service-kicker', item.kicker), make('h3', '', item.title));
    card.append(make('p', 'service-description', item.description));
    const tags = make('ul', 'deliverables');
    (item.tags || []).forEach(tag => tags.append(make('li', '', tag)));
    card.append(tags);
    if (item.audience) card.append(make('p', 'service-audience', '适合：' + item.audience));
    const url = safeURL(item.url);
    if (url) {
      const action = make('a', 'button');
      action.href = url;
      action.target = '_blank';
      action.rel = 'noopener noreferrer';
      action.setAttribute('aria-label', item.cta + '：' + item.title + '（新窗口）');
      action.append(make('span', '', item.cta), make('span', 'arrow', '↗'));
      const actionWrap = make('div', 'service-action');
      actionWrap.append(action);
      card.append(actionWrap);
    }
    if (item.note) card.append(make('p', 'service-note', item.note));
    return card;
  };
  const noteLink = (item, index) => {
    const row = make('a', 'thought-row');
    row.href = 'notes.html#' + item.id;
    row.append(make('span', 'thought-number', String(index + 1).padStart(2, '0')));
    const body = make('span', 'thought-body');
    body.append(make('span', 'thought-category', item.category), make('strong', '', item.title), make('span', 'thought-summary', item.summary));
    row.append(body, make('span', 'thought-arrow', '↗'));
    return row;
  };
  const noteDetail = (item, index) => {
    const details = make('details', 'note');
    details.id = item.id;
    const summary = make('summary');
    const number = make('span', 'number ' + (index === 1 ? 'pink' : index === 2 ? 'blue' : ''), String(index + 1).padStart(2, '0'));
    const lead = make('span', 'note-text');
    lead.append(make('small', '', item.category), make('strong', '', item.title), make('span', '', item.summary));
    const expand = make('span', 'expand', '↗');
    expand.setAttribute('aria-hidden', 'true');
    summary.append(number, lead, expand);
    const article = make('div', 'article');
    (item.paragraphs || []).forEach((paragraph, i) => {
      article.append(make('p', '', paragraph));
      if (i === 0 && item.steps) {
        const list = make('ol');
        item.steps.forEach(([heading, copy]) => {
          const li = make('li');
          li.append(make('b', '', heading), document.createTextNode(copy));
          list.append(li);
        });
        article.append(list);
      }
      if (i === 0 && item.quote) article.append(make('blockquote', '', item.quote));
    });
    details.append(summary, article);
    return details;
  };
  const update = item => {
    const row = make('li', 'update-row');
    const time = make('time', '', item.date.replaceAll('-', '.'));
    time.dateTime = item.date;
    const body = make('div');
    body.append(make('p', '', item.text), make('small', '', (item.tags || []).join(' · ')));
    row.append(time, body);
    return row;
  };
  const social = item => {
    const url = safeURL(item.url);
    if (!url) return null;
    const link = make('a', 'social-card');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', '访问' + item.label + '（新窗口）');
    const icon = make('span', 'social-icon social-' + item.platform, item.platform === 'github' ? 'GH' : '@');
    icon.setAttribute('aria-hidden', 'true');
    const detail = make('span', 'social-text');
    detail.append(make('strong', '', item.label), make('span', 'social-detail', item.value || '访问主页'));
    link.append(icon, detail, make('span', 'social-arrow', '↗'));
    return link;
  };
  mount('#service-list', product, data.products);
  mount('#product-list', product, data.products);
  mount('#thought-list', noteLink, data.notes, 3);
  mount('#note-list', noteDetail, data.notes);
  // 首页和完整页使用同一份动态，按日期倒序；首页由 CSS 限高并在内部滚动。
  const updates = Array.isArray(data.updates)
    ? [...data.updates].sort((a, b) => String(b.date).localeCompare(String(a.date)))
    : [];
  mount('#updates-home', update, updates);
  mount('#updates-all', update, updates);
  const socialItems = (data.socialLinks || []).map(social).filter(Boolean);
  for (const selector of ['#contact-content', '#connect-list']) {
    const target = document.querySelector(selector);
    if (target && socialItems.length) {
      const grid = make('div', 'social-grid');
      socialItems.forEach(item => grid.append(item.cloneNode(true)));
      target.replaceChildren(grid);
    }
  }
  const selected = document.getElementById(location.hash.slice(1));
  if (selected?.matches('details.note')) selected.open = true;
})();
