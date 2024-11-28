import { ModeloJugadores } from "../models/jugadores.model.js";

ModeloJugadores.create({
    name:"El Chino",
    apepat: "Huerta",
    Numero: 10
})

export const test = ()=>{
    console.log("Funciona el Controlador")
}