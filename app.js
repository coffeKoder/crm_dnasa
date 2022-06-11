import {Server} from "./src/server.js";
import dotenv from "dotenv";
dotenv.config();

const app = new Server();
app.main();