import express from "express";
import http from "http";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

import cors from "cors";
import { Server } from "socket.io";
const app = express();
app.use(cors());
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, "public")));
const server = http.createServer(app);
server.listen(3001, () => {
  console.log("SERVER RUNNING");
});
