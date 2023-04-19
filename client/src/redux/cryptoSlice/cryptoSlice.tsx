import { createSlice } from "@reduxjs/toolkit";

interface state {
  nombre: string;
  saldo: number;
}

interface cryptosType {
  usd: number;
  cryptos: state[];
}

const initialState = {
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
      console.log(numCantidad);
      console.log(nameCrypto);
      const cryptoIndex = state.cryptos.findIndex((crypto) => crypto.nombre === nameCrypto);
      if(cryptoIndex === -1){
        state.usd -= numCantidad;
        state.cryptos.push({
          nombre: nameCrypto,
          saldo: numCantidad / precioCrypto,
        });
        
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
