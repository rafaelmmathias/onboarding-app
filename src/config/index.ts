const API_BASE_URL = import.meta.env.VITE_API_ENDPOINT || "";

const { MODE: ENVIRONMENT } = import.meta.env;

const isProduction = () => ENVIRONMENT === "production";
const isDev = () => ENVIRONMENT === "development";
const isTest = () => ENVIRONMENT === "test";

export { API_BASE_URL, isProduction, isDev, isTest };
