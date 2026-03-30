# Solo SaaS 设计系统

## 设计原则

### 1. 极简主义
- 每个页面一个核心任务
- 删除非必要的 UI 元素
- 优先级清晰的信息结构

### 2. 一致性
- 统一的配色、字体、间距
- 可复用的组件库（shadcn/ui）
- 统一的交互模式

### 3. 可访问性
- WCAG 2.1 AA 标准
- 所有按钮可通过键盘操作
- 足够的色彩对比度

---

## 颜色系统

```
主色 (Primary):     #3b82f6  (蓝色)
成功色 (Success):   #10b981  (绿色)
警告色 (Warning):   #f59e0b  (橙色)
错误色 (Error):     #ef4444  (红色)
背景色 (BG):        #ffffff (亮色) / #0f172a (深色)
文本色 (Text):      #1f2937 (深灰) / #f3f4f6 (浅灰)
边框色 (Border):    #e5e7eb
```

## 排版系统

```
H1: font-size=32px, font-weight=700, line-height=1.2
H2: font-size=24px, font-weight=600, line-height=1.3
H3: font-size=20px, font-weight=600, line-height=1.4
Body: font-size=16px, font-weight=400, line-height=1.5
Small: font-size=14px, font-weight=400, line-height=1.5
```

Font Family: `system-ui, -apple-system, sans-serif` (原生系统字体)

## 间距系统

```
xs: 4px
sm: 8px
md: 16px
lg: 24px
xl: 32px
2xl: 48px
```

使用规则：
- 同级元素：md 间距
- 模块间距：lg~xl 间距
- 卡片内部：md 间距
- 列表项：md 垂直间距

## 组件库（shadcn/ui）

### 核心组件列表

| 组件 | 用途 | 示例 |
|---|---|---|
| Button | 所有操作按钮 | 登录、提交、删除 |
| Input | 文本输入 | 邮箱、密码、搜索 |
| Card | 内容卡片 | 统计卡、功能卡 |
| Dialog | 模态对话框 | 确认、表单 |
| Dropdown Menu | 更多操作 | 用户菜单、导出 |
| Toast | 消息提示 | 保存成功、错误 |
| Tabs | 多标签切换 | 仪表盘不同视图 |
| Badge | 状态标签 | 计划类型、订阅状态 |

### 安装组件

```bash
# 一键安装所有核心组件
npx shadcn-ui@latest add button input card dialog dropdown-menu toast tabs badge
```

## 响应式设计

```
Mobile:   < 640px  (sm)
Tablet:   640px - 1024px  (md)
Desktop:  > 1024px  (lg+)
```

使用 Tailwind 响应式前缀：
```jsx
<div className="text-sm md:text-base lg:text-lg">
  content
</div>
```

## 页面模板

### 认证页面
```
[Logo] 
[标题 + 描述]
[表单]
[底部链接]
```

### 仪表盘
```
[顶部导航]
[左侧菜单] [主内容区]
  统计卡片 (4列网格)
  详细表格 (可分页、可搜索)
  操作日志
```

### 设置页面
```
[标题]
[标签导航]
[表单 / 内容]
[保存按钮]
```

---

## 暗黑模式

使用 `next-themes` + Tailwind dark mode:

```jsx
// 自动检测系统偏好，用户可手动切换
<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  <App />
</ThemeProvider>
```

在组件中使用：
```jsx
<div className="bg-white dark:bg-slate-950 text-black dark:text-white">
  Content
</div>
```

---

## 动画与过渡

```css
/* 默认过渡 */
transition: all 200ms ease-in-out;

/* 进入动画（sidebar、modal） */
animation: slideIn 300ms ease-out;

/* 禁用动画用户偏好 */
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; }
}
```

---

## 可访问性清单

- [ ] 所有图片有 alt 文本
- [ ] 所有按钮有 aria-label
- [ ] 焦点管理（Tab 键可访问所有交互元素）
- [ ] 色彩对比度 ≥ 4.5:1（文本）
- [ ] 零依赖键盘导航
- [ ] 表单错误提示清晰

---

## 组件使用示例

### Button

```jsx
// 主按钮
<Button>登录</Button>

// 次级按钮
<Button variant="outline">取消</Button>

// 危险操作
<Button variant="destructive">删除账户</Button>

// 加载状态
<Button disabled>
  <Loader className="mr-2 h-4 w-4 animate-spin" />
  加载中...
</Button>
```

### Card

```jsx
<Card>
  <CardHeader>
    <CardTitle>月度收入</CardTitle>
    <CardDescription>过去 30 天</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="text-2xl font-bold">$1,234</div>
  </CardContent>
</Card>
```

### Dialog

```jsx
<Dialog open={isOpen} onOpenChange={setIsOpen}>
  <DialogTrigger asChild>
    <Button>删除</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>确认删除？</DialogTitle>
    </DialogHeader>
    <DialogFooter>
      <Button onClick={handleDelete} variant="destructive">删除</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

---

## 设计审查清单

每个新页面上线前，检查：

- [ ] 与设计规范一致（颜色、间距、字体）
- [ ] 响应式设计正常（手机、平板、桌面）
- [ ] 暗黑模式支持
- [ ] 无障碍访问检查（Tab、屏幕阅读器）
- [ ] 加载、错误、空状态 UI 完整
- [ ] 性能：LCP < 2.5s, CLS < 0.1
- [ ] 交互反馈（按钮 hover、focus、active 状态）

---

## 扩展资源

- 颜色生成工具：[Tailwind Colors](https://tailwindcolor.com/)
- Shadcn 文档：https://ui.shadcn.com/
- Tailwind 文档：https://tailwindcss.com/
- 无障碍标准：https://www.w3.org/WAI/WCAG21/quickref/
