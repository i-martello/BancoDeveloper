import { Schema, model } from "mongoose";

const cryptosSchema = new Schema({
  nombre: { type: String, required: true },
  saldo: { type: Number, required: true },
  precio: { type: Number, required: true },
  simbolo: { type: String, required: true },
  img: { type: String, required: true },
})

const cuentaSchema = new Schema(
  {
    user: { type: String, required: true },
    usd: { type: Number, required: true},
    cryptos: [cryptosSchema]
  },
  { timestamps: true }
);

export default model("cuenta", cuentaSchema);
