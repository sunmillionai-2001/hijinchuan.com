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
    contacts.forEach(contact => {
      const block = create('div', 'contact-item');
      block.append(create('span', 'tag', contact.label));
      if (contact.value) block.append(create('strong', 'contact-value', contact.value));
      const url = safeURL(contact.url);
      if (url) {
        const link = create('a', 'button', '前往联系 ↗');
        link.href = url;
        block.append(link);
      } else if (contact.value) {
        const button = create('button', 'button', '复制' + contact.label);
        button.type = 'button';
        const status = create('span', 'copy-status');
        status.setAttribute('role', 'status');
        button.addEventListener('click', async () => {
          try { await navigator.clipboard.writeText(contact.value); status.textContent = '已复制'; }
          catch { status.textContent = '请长按或选中上方内容复制'; }
        });
        block.append(button, status);
      }
      contactPanel.append(block);
    });
  }
})();
