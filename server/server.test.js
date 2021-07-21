const app = require("./app");
const request = require("supertest");

describe("Check root path", () => {
  test("It should make a GET request and return a 200 status code", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});
