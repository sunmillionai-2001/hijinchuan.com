// 仅填写真实业务与公开联系方式；不填价格时不展示价格。
// 服务字段：id, title, audience, description, deliverables, price, url, cta, status。
// 联系字段：label, value, url。
window.JINCHUAN_CONTENT = {
  services: [
    {
      id: 'useful-mcp',
      title: '有用之集·MCP',
      audience: '个人开发者和使用者',
      description: '发现能帮你解决问题的 MCP。按需求查找工具，了解用途与接入信息，再选择适合自己的方案。',
      deliverables: ['浏览 MCP 工具与使用场景', '按关键词、分类和费用筛选', '查看详情、文档与原始链接'],
      url: 'https://mcpnook.vercel.app/',
      cta: '进入有用之集',
      status: 'MCP 工具目录'
    },
    {
      id: 'codex-reset',
      title: 'Codex 重置',
      audience: '关注 Codex 额度重置的使用者',
      description: '集中查看 Codex 公开额度重置消息，了解公告和历史记录，方便安排你的使用节奏。',
      deliverables: ['查看公开重置消息与来源', '回看历史重置记录', '通过 RSS 订阅更新'],
      url: 'https://resetping.sunmillionai.chatgpt.site',
      cta: '查看私密预览',
      status: '私密预览 · 仅站主可访问',
      note: '追踪公开的额外重置消息，不提供账号额度重置操作。'
    }
  ],
  contacts: []
};
