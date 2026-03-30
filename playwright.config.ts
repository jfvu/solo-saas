import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright E2E 测试配置
 * 文档: https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["html", { open: "never" }], ["list"]],

  use: {
    baseURL: process.env.NEXT_PUBLIC_APP_URL ?? "http://127.0.0.1:3011",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },

  projects: [
    // 认证状态准备（供其他测试复用登录态）
    { name: "setup", testMatch: /.*\.setup\.ts/ },

    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        storageState: "e2e/.auth/user.json",
      },
      dependencies: ["setup"],
    },
    {
      name: "Mobile Chrome",
      use: {
        ...devices["Pixel 7"],
        storageState: "e2e/.auth/user.json",
      },
      dependencies: ["setup"],
    },
  ],

  // 本地开发时自动启动 Next.js dev server
  webServer: {
    command: "npm run dev -- --port 3011 --hostname 127.0.0.1",
    url: "http://127.0.0.1:3011",
    reuseExistingServer: false,
    timeout: 120 * 1000,
  },
});
