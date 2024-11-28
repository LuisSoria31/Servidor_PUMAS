import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { test } from "./backend/controllers/jugadores.controller.js";

dotenv.config()
mongoose.connect(process.env.url)
.then(()=>{
    console.log("Funciona la Base de Datos")
})
.catch((error)=>{
    console.log("No funciona, ya valio", error)
})

const app=express();
app.use(cors());
app.listen(4000, ()=>{
    console.log("Si se escucha")
})
test()