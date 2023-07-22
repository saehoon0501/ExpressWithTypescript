import { NextFunction, Request, Response } from "express";
import { get, controller, bodyValidator, post } from "./decorators";

@controller("/auth")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    res.send(`
        <div>
          <form method="POST">
              <div>
                  <label>Email</label>
                  <input name="email"/>
              </div>
              <div>        
                  <label>Password</label>
                  <input name="password" type="password" />
              </div>        
              <button>Submit</button>
          </form>
          </div>
          `);
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email === "hi@hi.com" && password === "password") {
      req.session = { loggedIn: true };
      res.redirect("/");
    } else {
      res.send("Invalid");
    }
  }

  @get("/logout")
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect("/");
  }
}
