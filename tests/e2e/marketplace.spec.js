import { test, expect } from '@playwright/test';

test.describe('KURIO NFT Marketplace E2E Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('1. Deve carregar a página inicial e exibir os NFTs', async ({ page }) => {
    await expect(page.getByText('KURIO').first()).toBeVisible();
    await expect(page.getByText('Emerald Ape #042').first()).toBeVisible();
  });

  test('2. Deve adicionar NFT ao carrinho e calcular o total', async ({ page }) => {
    await page.locator('button:has-text("Comprar")').first().click();
    await expect(page.getByText('Carrinho').first()).toBeVisible();
    await expect(page.getByText('1.19 ETH').first()).toBeVisible();
  });

  test('3. Deve navegar entre as abas do perfil do colecionador', async ({ page }) => {
    // 1. Clica no botão de perfil na Navbar superior
    // Procura qualquer botão no topo com classe ou atributo de perfil, ou clica no ícone de perfil na Navbar
    const profileBtn = page.locator('header button, nav button').filter({ 
      has: page.locator('svg.lucide-user, svg.lucide-user-circle') 
    }).first();

    if (await profileBtn.isVisible()) {
      await profileBtn.click();
    } else {
      // Fallback: procura por texto "Perfil" ou clica no último botão da navegação
      await page.locator('button').filter({ hasText: /perfil/i }).first().click();
    }

    // 2. Aguarda a exibição da seção do perfil
    await expect(page.locator('main').getByText(/perfil/i).first()).toBeVisible();

    // 3. Clica na aba "Carteiras" dentro do menu lateral do perfil
    await page.locator('button').filter({ hasText: /^carteiras$/i }).first().click();
    await expect(page.getByText('Carteira principal').first()).toBeVisible();

    // 4. Clica na aba "Suporte" dentro do menu lateral do perfil
    await page.locator('button').filter({ hasText: /^suporte$/i }).first().click();
    await expect(page.getByText('Suporte ao Colecionador').first()).toBeVisible();
  });

  test('4. Deve realizar um fluxo completo de checkout até a confirmação', async ({ page }) => {
    await page.locator('button:has-text("Comprar")').first().click();
    
    const checkoutBtn = page.locator('button').filter({ hasText: /(Conectar e Finalizar|Finalizar|Confirmar)/i }).first();
    await checkoutBtn.click();
    
    await page.fill('input[placeholder="E-mail"]', 'samuel@teste.com');
    await page.click('button:has-text("Confirmar Compra")');

    await expect(page.getByText('Pedido Confirmado!')).toBeVisible();
  });

});
