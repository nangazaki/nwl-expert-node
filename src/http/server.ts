import fastify from "fastify";
import { createPoll } from "./routes/create-poll";

const app = fastify();

app.register(createPoll);

app.listen({ port: 3000 }).then(() => console.log("HTTP server running"));
