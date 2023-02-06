import * as dotenv from "dotenv";
dotenv.config();

import App from "./app";
import UserRoute from "./routes/user.route";
import GeneratedRoute from "./routes/generated.route";

const app = new App([new UserRoute(), new GeneratedRoute()]);

app.listen();
