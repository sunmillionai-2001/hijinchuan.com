// 内容统一在这里维护。只发布已经确认的产品、动态与公开联系方式。
window.JINCHUAN_CONTENT = {
  products: [
    {
      id: 'useful-mcp', title: '有用之集·MCP', symbol: 'MCP', kicker: 'DISCOVER / 找工具',
      description: '找到适合你的 MCP 工具。按用途和费用筛选，查看文档与接入信息。',
      audience: '个人开发者和使用者', tags: ['AI / MCP', '工具发现', '接入文档'],
      status: '已上线', url: 'https://mcpnook.vercel.app/', cta: '访问产品',
      note: '查看工具详情与原始链接，按实际需要选择。'
    },
    {
      id: 'codex-reset', title: 'Codex 重置', symbol: '↻', kicker: 'STAY UPDATED / 看动态',
      description: '关注 Codex 额度重置消息。集中看公告、查历史，让每一次公开重置有迹可循。',
      audience: '关注 Codex 额度重置的使用者', tags: ['AI / Codex', '重置动态', 'RSS 订阅'],
      status: '私密预览', url: 'https://resetping.sunmillionai.chatgpt.site', cta: '查看私密预览',
      note: '仅追踪公开消息；当前预览需站主账号访问。'
    }
  ],
  notes: [
    {
      id: 'start-small', category: '学习方法 / START HERE', title: '学 AI，从解决一个小问题开始',
      summary: '不急着收集工具，先完成一件具体的事。', tags: ['AI', '学习'],
      paragraphs: [
        '“学会 AI”很大，“把一段杂乱的笔记整理清楚”很小。给自己一个能完成的任务，学习才有落点。',
        '每次多解决一个小问题，就是实实在在的进步。'
      ],
      steps: [
        ['选一个真实问题。', '从重复、费时、结果容易检查的事情入手。'],
        ['说清楚你要什么。', '给出背景、材料、期望格式，以及一个好结果的例子。'],
        ['亲自检查结果。', '核对事实和来源，留下有效的方法，也记下失败的原因。']
      ]
    },
    {
      id: 'clear-requests', category: '提示词 / PROMPTING', title: '把需求说清楚，比“神奇提示词”更重要',
      summary: '背景、目标、限制、输出：一个简单的表达框架。', tags: ['AI', '方法'],
      paragraphs: [
        '把 AI 当作刚加入项目的搭档。你知道的背景，它未必知道。',
        '例如：“把下面这份学习笔记整理成明天能执行的 3 个步骤。每步不超过 20 分钟。只依据原文，不补充不存在的信息。”',
        '第一版不理想时，指出具体哪里不合适，再逐步调整。'
      ],
      quote: '我正在做什么？希望得到什么结果？有哪些限制？请用什么格式交付？'
    },
    {
      id: 'first-project', category: '动手实践 / BUILD SOMETHING', title: '给你的第一个 AI 小作品，定一个终点',
      summary: '先做一个能用的版本，再让它慢慢长大。', tags: ['实践', '产品'],
      paragraphs: [
        '一个小作品也值得认真完成。它可以是一页个人网站、一份读书卡片，或者一个解决日常问题的小工具。',
        '开始前写下一句话：“它帮助谁，完成什么？”然后只保留实现这句话所必需的功能。',
        '完成后亲自用一遍，把最困惑的地方改掉。能被实际使用，比堆满功能更有意义。'
      ]
    }
  ],
  updates: [
    {
      date: '2026-09-23',
      text: '正在重新整理这个个人网站，让产品、思考和近况都有一个长期可用的入口。',
      tags: ['个人网站']
    }
  ],
  socialLinks: [
    { platform: 'github', label: 'GitHub', value: 'sunmillionai-2001', url: 'https://github.com/sunmillionai-2001' }
    // 有真实账号后再添加 X、微信、Telegram、Instagram 等。
  ]
};
