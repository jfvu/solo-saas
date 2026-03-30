# Solo SaaS 产品路线图

## MVP 功能清单（第 1 阶段：必须有）

### 认证系统
- [x] 邮箱密码注册
- [x] 邮箱密码登录
- [x] Session 管理
- [ ] 邮箱验证
- [ ] 密码重置
- [ ] OAuth (GitHub, Google)

### 多租户基础设施
- [x] 用户账户
- [x] 组织（Organization）
- [x] 成员管理（Role-based: Owner, Admin, Member）
- [ ] 邀请成员链接
- [ ] 审计日志

### 仪表盘
- [x] 统计卡片（MRR, 用户数，流失率）
- [ ] 实时数据更新
- [ ] 导出功能（CSV）
- [ ] 自定义 Widget

### 计费系统
- [x] 计划页面 UI
- [ ] Stripe 集成
- [ ] 订阅管理（升级/降级/取消）
- [ ] 发票管理
- [ ] 使用量限制

### 用户设置
- [x] 个人资料编辑
- [x] 账户安全
- [ ] 双因素认证 (2FA)
- [ ] API Keys 生成
- [ ] Webhook 配置

---

## P1 功能（第 2-3 周：高优先级）

| 功能 | 时间 | 价值 | 状态 |
|---|---|---|---|
| 邮箱验证 + 重置密码 | 2h | 安全性 ⭐⭐⭐ | ⬜ |
| OAuth 集成 (GitHub) | 4h | 用户体验 ⭐⭐ | ⬜ |
| Stripe 订阅 | 6h | 营收 ⭐⭐⭐⭐⭐ | ⬜ |
| 成员邀请系统 | 4h | 协作 ⭐⭐⭐ | ⬜ |
| Email 通知 (Resend) | 3h | 用户粘性 ⭐⭐⭐ | ⬜ |
| API 文档 | 4h | 开发者体验 ⭐⭐ | ⬜ |

---

## P2 功能（第 4-5 周：中优先级）

| 功能 | 时间 | 备注 |
|---|---|---|
| 团队协作功能 | 6h | 评论、@提及、活动流 |
| 权限管理系统 | 4h | 细粒度权限控制 |
| 数据导出 (CSV, PDF) | 3h | 用户数据自主权 |
| 实时通知 (Socket.io) | 5h | 协作体验 |
| Webhook 系统 | 4h | 自动化集成 |
| 性能优化 | 3h | 缓存、字段剪裁 |

---

## P3 功能（后续迭代：低优先级）

- 高级分析仪表盘
- 工作流自动化
- AI 助手集成
- 移动应用
- 白标解决方案

---

## 技术债清单

| 项 | 优先级 | 估时 | 备注 |
|---|---|---|---|
| E2E 测试覆盖率→ 80% | P1 | 6h | 关键流程必测 |
| API 错误处理标准化 | P1 | 4h | 统一 error code |
| 数据库查询优化 | P1 | 5h | N+1 query 修复 |
| 类型安全 (TypeScript strict) | P2 | 3h | 增加代码可维护性 |
| Storybook 组件库 | P2 | 4h | 组件管理 |
| 性能监控 (Sentry) | P2 | 2h | 已配置，待完善 |
| 文档补完 | P3 | 4h | API、部署、架构 |

---

## 集成清单

### 必须
- [x] 数据库：Supabase (PostgreSQL)
- [x] 部署：Vercel (Next.js)
- [x] 配置管理：.env
- [x] CI/CD：GitHub Actions
- [ ] **Stripe** (订阅支付)
- [ ] **Resend** (邮件发送)

### 可选
- [ ] Sentry (错误监控/性能) — 已配，待激活
- [ ] PostHog (产品分析)
- [ ] Slack (通知集成)

---

## 技术栈最终核对

```
前端：
  ✅ Next.js 16 (App Router, React Server Components)
  ✅ TypeScript 5
  ✅ Tailwind CSS 4
  ✅ shadcn/ui (组件库)
  ✅ React Query (数据获取)
  ✅ Zod (表单验证)

后端：
  ✅ Next.js API Routes
  ✅ Prisma ORM
  ✅ Supabase PostgreSQL

认证：
  ⬜ NextAuth.js (配置基础，待完成)
  ⬜ JWT / Session

测试：
  ✅ Vitest (单元测试)
  ✅ Playwright (E2E 测试)

部署与监控：
  ✅ Vercel (前端部署)
  ✅ GitHub Actions (CI/CD)
  ⬜ Sentry (错误监控)
  ⬜ PostHog (产品分析)
```

---

## 发布检查清单

### 首次上线（v1.0）

- [ ] 所有 MVP 功能完成 + 测试
- [ ] 无安全漏洞（`npm audit`)
- [ ] 性能打分 ≥ 90 (Lighthouse)
- [ ] 集成最少 Stripe 基础支付
- [ ] 隐私政策 + 服务条款
- [ ] 监控告警已配置
- [ ] 备份策略已制定

### 正式运营
- [ ] 用户支持系统 (Intercom / Zendesk)
- [ ] 产品博客
- [ ] 用户文档 + FAQ
- [ ] 性能 SLA 制定

---

## 参考资源

- [Stripe 文档](https://stripe.com/docs/payments)
- [Resend 文档](https://resend.com/docs)
- [Supabase RLS](https://supabase.com/docs/guides/auth/row-level-security)
- [Next.js 最佳实践](https://nextjs.org/learn/foundations/how-nextjs-works)
