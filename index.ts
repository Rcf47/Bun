import figlet from "figlet";

const server = Bun.serve({
  port: 3001,
  fetch(req) {
    const message = "Hello how  you "
    return new Response(message);
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);

