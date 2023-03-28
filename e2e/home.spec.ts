import { test, expect } from "@playwright/test";

let urlHome = "http://localhost:3000";
let urlAbout = "http://localhost:3000/about";

test.beforeAll(async () => {
  console.log("Before tests");
});

test.afterAll(async () => {
  console.log("After tests");
});

test.describe("Header area", () => {
  test("The title tag", async ({ page }) => {
    await page.goto(urlHome);

    await expect(page).toHaveTitle("Dishcovery");
  });

  test("The link tag", async ({ page }) => {
    await page.goto(urlHome);

    const linkTag = page.locator('link[rel="icon"]');
    await expect(linkTag).toHaveAttribute("href", "/favicon.png");
  });
});

test.describe("Main area", () => {
  test("Header Tag", async ({ page }) => {
    await page.goto(urlHome);

    await expect(page.locator("h2")).toContainText(`Recipes to be `);
  });
  test("input class", async ({ page }) => {
    await page.goto(urlHome);

    await expect(page.locator("input")).toHaveId("search-field");
  });

  //   test("More About Us Button", async ({ page }) => {
  //     await page.goto(urlHome);

  //     await page.getByRole("button", { name: "More About Us" }).click();
  //   });

  //   test("Contact Us Button", async ({ page }) => {
  //     await page.goto(urlHome);

  //     await page.getByRole("button", { name: "Contact Us" }).click();
  //   });

  test("Checking to see if two brs are in the main area", async ({ page }) => {
    await page.goto(urlHome);
    await expect(page.locator("br")).toHaveCount(2);
  });
  test("Checking to see if one input is in the main area", async ({ page }) => {
    await page.goto(urlHome);
    await expect(page.locator("input")).toHaveCount(1);
  });
});
