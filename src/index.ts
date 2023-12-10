import http from "http";
import express from "express";
import { PORT } from "./shared/core/config";
import connectToDatabase from "./shared/core/database";

const startServer = () => {
  const app = express();
  const httpServer: http.Server = http.createServer(app);
  httpServer.listen(PORT, async () => {
    await connectToDatabase();
    console.log(`[Server]: is running on ${PORT}`);
  });
};

void (() => {
  startServer();
})();
