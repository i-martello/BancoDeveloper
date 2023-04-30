import { Schema, model } from "mongoose";

const buySchema = new Schema(
  {
    user: { type: String, required: true },
    nombre: { type: String, required: true },
    saldo: { type: Number, required: true },
    precio: { type: Number, required: true },
    simbolo: { type: String, required: true },
    img: { type: String, required: true },
  },
  { timestamps: true }
);

export default model("cuenta", buySchema);
