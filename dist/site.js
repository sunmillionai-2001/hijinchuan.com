(() => {
  const content = window.JINCHUAN_CONTENT || {};
  const create = (tag, className, text) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text) el.textContent = text;
    return el;
  };
  const safeURL = value => {
    if (!value) return null;
    try {
      const url = new URL(value);
      return ['https:', 'mailto:', 'tel:'].includes(url.protocol) ? url.href : null;
    } catch { return null; }
  };
  const services = Array.isArray(content.services) ? content.services : [];
  const contacts = Array.isArray(content.contacts) ? content.contacts : [];
  const serviceList = document.querySelector('#service-list');
  if (services.length) {
    serviceList.replaceChildren();
    services.forEach((service, index) => {
      const card = create('article', 'service-card');
      const top = create('div', 'card-top');
      top.append(create('span', 'product-icon', index === 0 ? 'MCP' : '↻'));
      top.firstChild.setAttribute('aria-hidden', 'true');
      if (service.status) top.append(create('span', 'service-status', service.status));
      card.append(top);
      card.append(create('span', 'service-kicker', index === 0 ? 'DISCOVER / 找工具' : 'STAY UPDATED / 看动态'));
      card.append(create('h3', '', service.title));
      if (service.description) card.append(create('p', 'service-description', service.description));
      if (Array.isArray(service.deliverables) && service.deliverables.length) {
        const list = create('ul', 'deliverables');
        service.deliverables.forEach(item => list.append(create('li', '', item)));
        card.append(list);
      }
      if (service.audience) card.append(create('p', 'service-audience', '适合：' + service.audience));
      const action = create('div', 'service-action');
      if (service.price) action.append(create('strong', 'service-price', service.price));
      const url = safeURL(service.url);
      const link = create('a', 'button');
      link.append(create('span', '', url ? service.cta || '了解详情' : '咨询这项服务'));
      const arrow = create('span', 'arrow', '↗');
      arrow.setAttribute('aria-hidden', 'true');
      link.append(arrow);
      link.href = url || '#contact';
      action.append(link);
      card.append(action);
      if (service.note) card.append(create('p', 'service-note', service.note));
      serviceList.append(card);
    });
  }
  if (contacts.length) {
    const contactPanel = document.querySelector('#contact-content');
    contactPanel.replaceChildren();
    const grid = create('div', 'social-grid');
    const status = create('p', 'copy-status');
    status.setAttribute('role', 'status');
    const marks = { github: 'GH', x: 'X', wechat: '微', telegram: 'TG', instagram: 'IG' };
    contacts.forEach(contact => {
      const url = safeURL(contact.url);
      const canCopy = !url && Boolean(contact.value);
      const block = create(url ? 'a' : canCopy ? 'button' : 'div', 'social-card' + (!url && !canCopy ? ' is-pending' : ''));
      const icon = create('span', 'social-icon social-' + (contact.platform || 'other'), marks[contact.platform] || '@');
      icon.setAttribute('aria-hidden', 'true');
      const text = create('span', 'social-text');
      text.append(create('strong', '', contact.label));
      text.append(create('span', 'social-detail', contact.value || (url ? '访问主页' : '待添加')));
      block.append(icon, text);
      if (url) {
        block.href = url;
        block.target = '_blank';
        block.rel = 'noopener noreferrer';
        block.setAttribute('aria-label', '访问' + contact.label + '（新窗口）');
        const arrow = create('span', 'social-arrow', '↗');
        arrow.setAttribute('aria-hidden', 'true');
        block.append(arrow);
      } else if (canCopy) {
        block.type = 'button';
        block.setAttribute('aria-label', '复制' + contact.label + '：' + contact.value);
        block.append(create('span', 'social-arrow', '复制'));
        block.addEventListener('click', async () => {
          try { await navigator.clipboard.writeText(contact.value); status.textContent = contact.label + '已复制'; }
          catch { status.textContent = '暂时无法自动复制，请手动复制：' + contact.value; }
        });
      }
      grid.append(block);
    });
    contactPanel.append(grid, status);
  }
})();
