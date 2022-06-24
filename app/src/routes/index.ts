import express from "express";
import users from "./usersRoutes.js";
import tasks from "./tasksRoutes.js";
import { Express } from "express-serve-static-core";

const routes = (app: Express) => {
    app.route("/").get((req, res) => {
        res.status(200).send({name: "REST API - PB React"});
    });

    app.use(express.json(), users, tasks);
};

export default routes;