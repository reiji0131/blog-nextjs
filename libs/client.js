import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "blog-nextjs-reiji",
  apiKey: process.env.API_KEY,
});

