const app = require("./app");
const request = require("supertest");

describe("GET root path / ", () => {
  test("It should make a GET request and return a 200 status code", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /api ", () => {
  test("Make a GET request and return a 404 status code", async () => {
    const response = await request(app).get("/api");
    expect(response.statusCode).toBe(404);
  });
});

describe("GET /api/breeds/", () => {
  test("Make a GET request return a 200 status code and an array of dog breeds", async () => {
    const response = await request(app).get("/api/breeds/");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body.breeds)).toBeTruthy();
    expect(response.body.breeds[0]).toBe("affenpinscher");
  });
});

describe("GET /api/breeds/:id", () => {
  test("Make a GET request return a 200 and array of images of length 4", async () => {
    const response = await request(app).get("/api/breeds/whippet");
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /api/breeds/whippetabcd", () => {
  test("Make a GET request and return a 404 status code", async () => {
    const response = await request(app).get("/api/breeds/whippetabcd");
    expect(response.statusCode).toBe(404);
  });
});
