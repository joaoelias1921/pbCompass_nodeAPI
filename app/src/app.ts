import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "There was a problem connecting to the database!"));
db.once("open", () => {
    console.log("Database connection successful!");
});

const app = express();
app.use(express.json());
routes(app);

export default app;