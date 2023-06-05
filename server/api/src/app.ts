import dotenv from "dotenv";
import koa from "koa";
import Router from "koa-router";
dotenv.config();

const env = {
  PORT: process.env.PORT,
};

const app = new koa();
const router = new Router();

app.use(async (ctx, next) => {
  console.log("Url:", ctx.url);
  // passes request to the next middleware function
  await next();
});
app.use(router.routes()).use(router.allowedMethods());

router.get("/", async (ctx) => {
  ctx.body = "Helloooooo";
});

app.listen(env.PORT, function () {
  console.log(`server is running oh yeah on port ${env.PORT}`);
});
