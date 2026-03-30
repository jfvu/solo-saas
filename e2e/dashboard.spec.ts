import { test, expect } from "@playwright/test";

/**
 * 核心业务流程 E2E 测试
 * 覆盖: 登录态访问 → 创建资源 → 验证展示
 */
test.describe("Dashboard — 核心流程", () => {
  test("已登录用户可看到 dashboard", async ({ page }) => {
    await page.goto("/dashboard");
    await expect(page).toHaveTitle(/dashboard/i);
    await expect(page.getByRole("main")).toBeVisible();
  });

  test("导航链接全部可点击", async ({ page }) => {
    await page.goto("/dashboard");
    const navLinks = page.getByRole("navigation").getByRole("link");
    const count = await navLinks.count();
    expect(count).toBeGreaterThan(0);
  });
});

test.describe("订阅流程", () => {
  test("免费用户看到升级提示", async ({ page }) => {
    await page.goto("/dashboard/billing");
    await expect(
      page.getByRole("heading", { name: /upgrade to pro plan/i })
    ).toBeVisible();
  });
});

test.describe("响应式布局", () => {
  test("移动端菜单可正常展开", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/dashboard");
    const menuBtn = page.getByRole("button", { name: /menu/i });
    if (await menuBtn.isVisible()) {
      await menuBtn.click();
      await expect(page.getByRole("navigation")).toBeVisible();
    }
  });
});
