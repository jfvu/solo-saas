# shadcn/ui 快速使用指南

## 快速开始

### 安装 shadcn/ui

```bash
npx shadcn-ui@latest init
# 选择项目类型：Next.js (App Router)
# 继续默认选项
```

### 添加第一个组件

```bash
# 添加 Button 组件
npx shadcn-ui@latest add button

# 添加多个组件
npx shadcn-ui@latest add input dialog card
```

所有组件会被安装到 `src/components/ui/` 目录。

---

## 常用组件示例

### 1. Button（按钮）

```jsx
import { Button } from "@/components/ui/button"

export function MyComponent() {
  return (
    <div className="space-y-2">
      {/* 默认按钮 */}
      <Button>Click me</Button>
      
      {/* 变体 */}
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Delete</Button>
      
      {/* 大小 */}
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
      
      {/* 禁用状态 */}
      <Button disabled>Disabled</Button>
    </div>
  )
}
```

### 2. Input（文本输入）

```jsx
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function EmailForm() {
  const [email, setEmail] = useState("")
  
  return (
    <div>
      <Input 
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  )
}
```

### 3. Card（卡片）

```jsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function StatsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Revenue</CardTitle>
        <CardDescription>Last 30 days</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold">$1,234.56</p>
        <p className="text-sm text-muted-foreground">↑ 12% from last month</p>
      </CardContent>
    </Card>
  )
}
```

### 4. Dialog（模态框）

```jsx
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function DeleteDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end space-x-2">
          <DialogTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DialogTrigger>
          <Button variant="destructive">Delete</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
```

### 5. Tabs（标签页）

```jsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SettingsTabs() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
      </TabsList>
      
      <TabsContent value="account">
        {/* Account settings */}
      </TabsContent>
      
      <TabsContent value="billing">
        {/* Billing settings */}
      </TabsContent>
      
      <TabsContent value="security">
        {/* Security settings */}
      </TabsContent>
    </Tabs>
  )
}
```

### 6. Badge（徽章/标签）

```jsx
import { Badge } from "@/components/ui/badge"

export function SubscriptionStatus() {
  return (
    <div className="space-y-2">
      <Badge>Active</Badge>
      <Badge variant="outline">Pro Plan</Badge>
      <Badge variant="secondary">Soon™</Badge>
      <Badge variant="destructive">Expired</Badge>
    </div>
  )
}
```

### 7. Toast（提示）

```jsx
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"

export function ToastDemo() {
  const { toast } = useToast()
  
  return (
    <Button 
      onClick={() => {
        toast({
          title: "Success!",
          description: "Your changes have been saved.",
          variant: "default", // 或 "destructive"
        })
      }}
    >
      Show Toast
    </Button>
  )
}
```

---

## 编写自定义组件（最佳实践）

### 组织结构

```
src/components/
├── ui/                    # shadcn/ui 组件（自动生成）
│   ├── button.tsx
│   ├── card.tsx
│   └── ...
├── forms/                 # 表单组件
│   ├── LoginForm.tsx
│   └── ProfileForm.tsx
├── layouts/               # 布局组件
│   ├── Navbar.tsx
│   └── Sidebar.tsx
└── shared/                # 可复用组件
    ├── LoadingSpinner.tsx
    └── ErrorBoundary.tsx
```

### 例：创建表单组件

```jsx
// src/components/forms/LoginForm.tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"

export function LoginForm() {
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      // API 调用
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      })
      
      if (!res.ok) throw new Error("Login failed")
      
      toast({
        title: "Welcome back!",
        description: "Logged in successfully.",
      })
      
      // 重定向
      window.location.href = "/dashboard"
    } catch (error) {
      toast({
        title: "Login failed",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
```

---

## 样式自定义

### 方法 1：内联 className（推荐）

```jsx
import { Button } from "@/components/ui/button"

export function CustomButton() {
  return (
    <Button className="bg-purple-600 hover:bg-purple-700 text-white">
      Custom Color
    </Button>
  )
}
```

### 方法 2：修改 UI 组件源代码

编辑 `src/components/ui/button.tsx`，改变默认样式：

```tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        // 修改这里的颜色值
      },
    },
  }
)
```

### 方法 3：全局样式变量

在 `src/globals.css` 中修改：

```css
@layer base {
  :root {
    --primary: 59 130 246;      /* 改这个 RGB 值改变主色 */
    --primary-foreground: 255 255 255;
    --secondary: 100 116 139;
    --destructive: 239 68 68;
    /* ... 其他颜色 */
  }
}
```

---

## 暗黑模式支持

给任何组件添加暗黑模式支持：

```jsx
export function MyCard() {
  return (
    <div className="bg-white dark:bg-slate-950">
      <h2 className="text-black dark:text-white">Title</h2>
      <p className="text-gray-700 dark:text-gray-300">Content</p>
    </div>
  )
}
```

---

## 快速链接

- [shadcn/ui 官网](https://ui.shadcn.com/)
- [所有可用组件列表](https://ui.shadcn.com/docs/components/accordion)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [设计系统](./DESIGN_SYSTEM.md)
