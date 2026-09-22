// 仅填写真实业务与公开联系方式；不填价格时不展示价格。
// 服务字段：id, title, audience, description, deliverables, price, url, cta, status。
// 联系字段：platform, label, value, url。填写 url 后显示跳转入口；仅填写 value 时支持复制。
// 空值保留占位，可按同样格式继续添加其他平台。
window.JINCHUAN_CONTENT = {
  services: [
    {
      id: 'useful-mcp',
      title: '有用之集·MCP',
      audience: '个人开发者和使用者',
      description: '找到适合你的 MCP 工具。按用途和费用筛选，查看文档与接入信息。',
      deliverables: ['工具发现', '分类筛选', '接入文档'],
      url: 'https://mcpnook.vercel.app/',
      cta: '进入有用之集',
      status: '可直接访问',
      note: '查看工具详情与原始链接，按实际需要选择。'
    },
    {
      id: 'codex-reset',
      title: 'Codex 重置',
      audience: '关注 Codex 额度重置的使用者',
      description: '关注 Codex 额度重置消息。集中看公告、查历史，让每一次公开重置有迹可循。',
      deliverables: ['重置动态', '历史记录', 'RSS 订阅'],
      url: 'https://resetping.sunmillionai.chatgpt.site',
      cta: '查看私密预览',
      status: '私密预览 · 仅站主可访问',
      note: '仅追踪公开消息；当前预览需站主账号访问。'
    }
  ],
  contacts: [
    { platform: 'github', label: 'GitHub', value: '', url: '' },
    { platform: 'x', label: 'X', value: '', url: '' },
    { platform: 'wechat', label: '微信', value: '', url: '' },
    { platform: 'telegram', label: 'Telegram', value: '', url: '' },
    { platform: 'instagram', label: 'Instagram', value: '', url: '' }
  ]
};
