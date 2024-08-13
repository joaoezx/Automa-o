import { test, expect } from "@playwright/test";

// Vai até a página
test("entrada", async ({ page }) => {
  await page.goto("https://www.mercadolivre.com.br");

  // localiza o link "Entre" na página e clica
  await page
    .locator(
      "a[href='https://www.mercadolivre.com/jms/mlb/lgz/login?platform_id=ML&go=https%3A%2F%2Fwww.mercadolivre.com.br%2F&loginType=explicit#nav-header'][data-link-id='login']"
    )
    .click();

  // Espera o espaço para colocar e-mail estar visível
  await expect(page.getByTestId("user_id")).toBeVisible();

  // Clica no espaço para e-mail
  await page.getByTestId("user_id").click();

  // Insere o e-mail
  await page.fill(
    'input[data-testid="user_id"]',
    "joao.a.freitas0405@gmail.com"
  );

  // Clica no botão "Continuar"
  await page.click("button#\\:Rajhh\\:");
});
