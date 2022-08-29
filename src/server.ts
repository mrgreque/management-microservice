import { app } from "./app";
import {config} from "dotenv";
import { startMongoClient } from './provider/client';

config();


app.listen(5555, async () => {
    await startMongoClient();
    console.log("Server is running!");
});