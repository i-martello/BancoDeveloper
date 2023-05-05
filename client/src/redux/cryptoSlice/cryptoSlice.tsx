import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface state {
  nombre: string;
  saldo: number;
  img: string;
  simbolo: string;
  precio: number;
}

interface cryptosType {
  user: string;
  usd: number;
  cryptos: state;
}

const initialState = {
  user: "",
  usd: 1000,
  cryptos: { nombre: "", saldo: 0, img: "", simbolo: "", precio: 0 },
};

const cryptoSlice = createSlice({
  name: "cryptoStore",
  initialState,
  reducers: {
    buyCrypto: (state: cryptosType, action) => {
      const numCantidad = parseInt(action.payload.cantidadCompra);
      const nameCrypto = action.payload.nombreCrypto;
      const precioCrypto = action.payload.precioCrypto;
      const imgCrypto = action.payload.imgCrypto;
      const symbolCrypto = action.payload.symbolCrypto;
      const user = action.payload.user;

      state.usd -= numCantidad;
      const objectCrypto = {
        nombre: nameCrypto,
        saldo: numCantidad / precioCrypto,
        img: imgCrypto,
        simbolo: symbolCrypto,
        precio: precioCrypto,
      };
      console.log(user);
      state.cryptos = objectCrypto;
      state.user = user;

      (async () => {
        await axios.post("http://localhost:3000/api/market/buy", state);
      })();
    },
    sellCrypto: (state: cryptosType, action) => {
      const nameCrypto = action.payload.nombreCrypto;
      const precioCrypto = action.payload.precioCrypto;
    },
  },
});

export const { buyCrypto, sellCrypto } = cryptoSlice.actions;
export default cryptoSlice.reducer;
