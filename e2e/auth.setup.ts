import { test as setup, expect } from "@playwright/test";
import path from "path";

const authFile = path.join(__dirname, ".auth/user.json");

/**
 * 认证 Setup — 登录一次，保存 cookie/storage，供所有测试复用
 * 避免每个用例都重新登录，大幅提升 E2E 速度
 */
setup("authenticate", async ({ page }) => {
  await page.goto("/login");

  // 填写测试账号（在 .env.test 中配置 E2E_TEST_EMAIL / E2E_TEST_PASSWORD）
  await page
    .getByLabel(/email/i)
    .fill(process.env.E2E_TEST_EMAIL ?? "test@example.com");
  await page
    .getByLabel(/password/i)
    .fill(process.env.E2E_TEST_PASSWORD ?? "password123");
  await page.getByRole("button", { name: /sign in/i }).click();

  // 等待跳转到 dashboard 确认登录成功
  await page.waitForURL("**/dashboard");
  await expect(page.getByRole("main")).toBeVisible();

  // 保存认证状态供后续测试复用
  await page.context().storageState({ path: authFile });
});
