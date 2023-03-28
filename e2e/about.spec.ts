import { test, expect } from "@playwright/test";

let urlHome = "http://localhost:3000";
let urlAbout = "http://localhost:3000/about";

test.beforeAll(async () => {
  console.log("Before tests");
});

test.afterAll(async () => {
  console.log("After tests");
});

test.describe("Main area", () => {
  test("Header Tag", async ({ page }) => {
    await page.goto(urlAbout);

    await expect(page.locator("h1")).toContainText(`About Us`);
  });

  test("Back Button", async ({ page }) => {
    await page.goto(urlAbout);

    await expect(page.locator("button")).toBeEnabled();
  });

  //   test("More About Us Button", async ({ page }) => {
  //     await page.goto(urlHome);

  //     await page.getByRole("button", { name: "More About Us" }).click();
  //   });

  //   test("Contact Us Button", async ({ page }) => {
  //     await page.goto(urlHome);

  //     await page.getByRole("button", { name: "Contact Us" }).click();
  //   });

  test("Checking to see if one h1 is in the main area", async ({ page }) => {
    await page.goto(urlAbout);
    await expect(page.locator("h1")).toHaveCount(1);
  });
  test("Checking to see if two h2s are in the main area", async ({ page }) => {
    await page.goto(urlAbout);
    await expect(page.locator("h2")).toHaveCount(2);
  });
});
