import "dotenv/config";
import express from "express";
import { router } from './routers';
import db from "./config/mongo";
import cors from "cors";


const PORT = process.env.PORT || 3001
const app = express();
app.use(cors());
app.use(express.json())
app.use(router);
db().then(() => console.log('conección exitosa'));
app.listen(PORT, () => console.log(`listo en ele puerto ${PORT}`));



