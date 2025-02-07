import { Hono } from "hono";

const app = new Hono();

async function authMiddleware(c: any, next: any) {
  if (c.req.header("Authorization")) {
    const initTime = new Date();
    await next();
    // we only need to await it if we we want to perform some logic after it
    const totalTime = (new Date().getTime() - initTime.getTime()) / 1000;
    console.log(`took ${totalTime} seconds`);
  } else {
    return c.text("you don't have access");
  }
}

// app.use(authMiddleware);

app.post("/", authMiddleware, async (c) => {
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));
  return c.text("Hello Hono!");
});

export default app;
