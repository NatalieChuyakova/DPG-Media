// @ts-check
import { test, expect } from '@playwright/test'
import { USER_EMAIL_ADDRESS, USER_PASSWORD } from './constants'

test.describe('Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://ad.nl')
    const cookieConsentPopup = await page.frameLocator('iframe[title="SP Consent Message"]')
    const cookieConsentAcceptButton = cookieConsentPopup.getByRole('button', { name: 'Akkoord' })
    await cookieConsentAcceptButton.click()
  })

  test('user is able to login into account', async ({ page }) => {
  // click login button
    const loginIntoAccountButton = await page.getByRole('link', { name: 'Inloggen' })
    await loginIntoAccountButton.click()

    // enter email address
    const emailAddressInput = await page.getByRole('textbox', { name: 'E-mailadres' })
    await emailAddressInput.click()
    await emailAddressInput.type(USER_EMAIL_ADDRESS)

    // press to the next page
    const continueButton = await page.getByRole('button', { name: 'Ga verder' })
    await continueButton.click()

    // enter password
    const passwordInput = await page.getByRole('textbox', { name: 'Wachtwoord' })
    await passwordInput.click()
    await passwordInput.type(USER_PASSWORD)

    // login into account
    const loginButton = await page.getByRole('button', { name: 'Log in' })
    await loginButton.click()

    // assert that user is being logged in
    const userMenu = await page.locator('.user__logged-in')
    await expect(userMenu).toBeVisible()
  })

  test('search for an article', async ({ page }) => {
    // click on a search bar
    const searchBar = await page.locator('.primary-nav__list-item--search')
    await searchBar.click()

    // enter a key word to search an article for
    const searchBarInput = page.getByRole('textbox', { name: 'Zoek op trefwoord, titel of auteur' })
    await searchBarInput.click()
    await searchBarInput.fill('sport')
    await searchBarInput.press('Enter')
    const resultsList = await page.locator('.results')
    await expect(resultsList).toBeVisible()
  })
})
