const http = require("http");

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (url === "/cats" && method === "GET") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    return response.end(
      JSON.stringify({ message: "You called the cats route." })
    );
  }

  if (url === "/dogs" && method === "GET") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    return response.end(
      JSON.stringify({ message: "You called the dogs route." })
    );
  }

  if (url === "/" && method === "GET") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Hello World from the server!");
  }

  response.statusCode = 404;
  return response.end();
});

const port = 3000;

server.listen(port, "localhost", () => {
  console.log(`Server is running on port ${port}!`);
});
