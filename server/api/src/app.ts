import koa from "koa";
import Router from "koa-router";
import env from "./env";

const app = new koa();
const router = new Router();

app.use(async (ctx, next) => {
  console.log("Url:", ctx.url);
  await next();
});
app.use(router.routes()).use(router.allowedMethods());

router.get("/", async (ctx) => {
  ctx.body = "Helloooooo";
});

app.listen(env.PORT, function () {
  console.log(`server is running oh yeah on port ${env.PORT}`);
});
