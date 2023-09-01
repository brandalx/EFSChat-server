import express from "express";
import messageRoute from "../routes/message.js";
export const routesInit = (app) => {
  app.use("/message", messageRoute);

  // 404 route
  app.use((req, res) => {
    res.status(404).json({
      msg: "Error 404: The page you are looking for could not be found. Please check the URL and try again",
    });
  });
};
