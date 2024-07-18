import express from "express";
import appRoute from "./routes";
import env from "dotenv";
import bodyParser from "body-parser";

const app = express();
env.config();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(appRoute);

//Error Handler
app.use(
  (
    err: { status?: number; message?: string },
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (res.headersSent) {
      return next(err);
    }
    return res.status(err.status || 500).send({
      status_code: err.status || 400,
      status_message:
        err.message || "Something went wrong ,please try again later",
    });
  }
);

app.use((req, res, next) => {
  return res.status(404).send({
    status_code: 404,
    status_message: "API Not Found!",
  });
});

let server = app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

export default server;
