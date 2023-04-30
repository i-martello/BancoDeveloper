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
  cryptos: state[];
}

const initialState = {
  user: "",
  usd: 1000,
  cryptos: [],
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
      console.log(numCantidad);
      console.log(nameCrypto);
      const cryptoIndex = state.cryptos.findIndex((crypto) => crypto.nombre === nameCrypto);
      if(cryptoIndex === -1){
        state.usd -= numCantidad;
        const objectCrypto = {
          nombre: nameCrypto,
          saldo: numCantidad / precioCrypto,
          img: imgCrypto,
          simbolo: symbolCrypto,
          precio: precioCrypto
        }
        state.cryptos.push(objectCrypto);
        state.user = user
        (async()=>{
          await axios.post('http://localhost:3000/api/market/buy', state)
        })()        
      } else {
        state.usd -= numCantidad;
        state.cryptos[cryptoIndex].saldo += (numCantidad / precioCrypto)
      }
      
      console.log(state);
    },
    sellCrypto: (state: cryptosType, action) => {      
      const nameCrypto = action.payload.nombreCrypto;
      const precioCrypto = action.payload.precioCrypto;
      const cryptoIndex = state.cryptos.findIndex((crypto) => crypto.nombre === nameCrypto);
      if(cryptoIndex !== -1){        
      const newUsd = state.cryptos[cryptoIndex].saldo * precioCrypto       
      console.log(state.cryptos[cryptoIndex].saldo);
      
      state.usd += newUsd
      state.cryptos.splice(cryptoIndex, 1)
    }
    },
  },
});

export const { buyCrypto, sellCrypto } = cryptoSlice.actions;
export default cryptoSlice.reducer;
