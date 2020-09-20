import {Application} from "https://deno.land/x/oak/mod.ts";
import {router} from "./routes/index.ts";
const env = Deno.env.toObject();
const PORT = env.PORT || 4000;
const HOST = env.HOST || 'localhost';
const app = new Application();

app.use(router.routes());

app.use(router.allowedMethods());

console.log(`Listening on host and port ${HOST}:${PORT}`);

await app.listen(`${HOST}:${PORT}`);
