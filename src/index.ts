import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import "./controllers/LoginController";
import "./controllers/RootController";
import { AppRouter } from "./AppRouter";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["Whatever"] }));
app.use(AppRouter.getInstance());

app.get("/", (req: Request, res: Response): void => {
  res.send(`
        <div>
            <h1>Hi there!</h1>
        </div>
    `);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
