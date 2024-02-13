import fastify from "fastify";
import cookie from "@fastify/cookie";
import { getPoll } from "./routes/get-poll";
import { createPoll } from "./routes/create-poll";
import { voteOnPoll } from "./routes/vote-on-poll";

const app = fastify();

app.register(cookie, {
  secret: "poll-app-secret",
  hook: "onRequest",
});

app.register(createPoll);
app.register(getPoll);
app.register(voteOnPoll);

app.listen({ port: 3000 }).then(() => console.log("HTTP server running"));
