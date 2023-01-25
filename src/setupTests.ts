import "@testing-library/jest-dom";
import { server } from "./test/server/test-server";
import "./config";

jest.mock("./config", () => ({
  API_BASE_URL: "http://localhost:4000",
  ENVIRONMENT: "test",
  isTest: () => true,
}));

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
});
beforeEach(() => {});
afterAll(() => server.close());
