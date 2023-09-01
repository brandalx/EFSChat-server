import express from "express";
import http from "http";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import { Socket } from "socket.io";
import { createSocket } from "./src/sockets/appSocket.js";
import { routesInit } from "./src/routes/configRouters.js";
const app = express();
app.use(cors());
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, "public")));
routesInit(app);
const server = http.createServer(app);
server.listen(3001, () => {
  console.log("SERVER RUNNING");
});
