import dotenv from "dotenv";
import koa from "koa";
import Router from "koa-router";
dotenv.config();

const env = {
  PORT: process.env.PORT,
};

const app = new koa();
const router = new Router();

router.get("/", async (ctx) => {
  ctx.body = "Hello World";
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(env.PORT, function () {
  console.log(`server is running oh yeah on port ${env.PORT}`);
});
