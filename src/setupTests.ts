import "@testing-library/jest-dom";
import { server } from "./test/server/test-server";
import "./config";

const originalWarn = console.error.bind(console.error);

jest.mock("./config", () => ({
  API_BASE_URL: "http://localhost:4000",
  ENVIRONMENT: "test",
  isTest: () => true,
}));

beforeAll(() => {
  server.listen();

  //supress unwanted img warnings because svg string on test env
  console.error = (msg) => {
    if (!msg.toString().includes("Invalid value for prop `src` on <img> tag"))
      return false;
    originalWarn(msg);
  };
  console.error = (msg) => false;
});
afterEach(() => {
  server.resetHandlers();
});
beforeEach(() => {});
afterAll(() => server.close());
