process.env.NODE_ENV = "test";

const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const app = require("../index");

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterEach(async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("Auth API", () => {
  describe("POST /signup", () => {
    it("should register a new user", async () => {
      const res = await request(app).post("/signup").send({
        username: "testuser",
        email: "test@example.com",
        password: "password123",
        mobileNumber: "1234567890",
      });
      expect(res.statusCode).toEqual(201);
    });

    it("should not register a user with existing email", async () => {
      await request(app).post("/signup").send({
        username: "testuser",
        email: "test@example.com",
        password: "password123",
        mobileNumber: "1234567890",
      });
      const res = await request(app).post("/signup").send({
        username: "testuser2",
        email: "test@example.com",
        password: "password123456",
        mobileNumber: "0987654321",
      });
      expect(res.statusCode).toEqual(400);
    });
  });

  describe("POST /login", () => {
    it("should login an existing user", async () => {
      await request(app).post("/signup").send({
        username: "testuser",
        email: "test@example.com",
        password: "password123",
        mobileNumber: "1234567890",
      });
      const res = await request(app).post("/login").send({
        email: "test@example.com",
        password: "password123",
      });
      expect(res.statusCode).toEqual(201);
    });

    it("should not login with incorrect password", async () => {
      await request(app).post("/signup").send({
        username: "testuser",
        email: "test@example.com",
        password: "password123",
        mobileNumber: "1234567890",
      });
      const res = await request(app).post("/login").send({
        email: "test@example.com",
        password: "wrongpassword",
      });
      expect(res.statusCode).toEqual(400);
    });

    it("should not login non-existing user", async () => {
      const res = await request(app).post("/login").send({
        email: "nonexistent@example.com",
        password: "password123",
      });
      expect(res.statusCode).toEqual(400);
    });
  });
});