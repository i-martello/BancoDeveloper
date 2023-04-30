import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useGlobalContext } from "../context";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { buyCrypto } from "../redux/cryptoSlice/cryptoSlice";
import { sellCrypto } from "../redux/cryptoSlice/cryptoSlice";
import { RiAlertLine } from "react-icons/ri";

interface cryptoType {
  id: string;
  current_price: number;
  image: string;
  name: string;
  symbol: string;
  price_change_percentage_24h: number;
  price_change_24h: number;
  ath_change_percentage: number;
}

interface cuentaType {
  cryptoStore: {
    usd: number;
  };
}

const Crypto = () => {
  const { id } = useParams();
  const cuenta = useSelector((state: cuentaType) => state?.cryptoStore);
  console.log(cuenta);

  const dispatch = useDispatch();

  const [cantidadCompra, setCantidadCompra] = useState("");
  const [cantidadVenta, setCantidadVenta] = useState("");
  const [nombreCrypto, setNombreCrypto] = useState("");

  const [crypto, setCrypto] = useState<cryptoType>();

  const { cryptos, user }: any = useGlobalContext();
  const crypto_percentage  = crypto?.ath_change_percentage.toFixed(2);
  const precioCrypto24hs = crypto?.price_change_percentage_24h.toFixed(2);
  let crypto_precio24hs: any = crypto?.price_change_24h.toFixed(3);
  if(crypto?.current_price! < 1){
    crypto_precio24hs = crypto?.price_change_24h.toFixed(6);
  };

  useEffect(() => {
    setNombreCrypto(id!);
    setCrypto(cryptos.find((crypto: any) => crypto.id === id));
  }, []);

  const changeCantidad = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "comprar") {
      setCantidadCompra(e.target.value);
    } else {
      setCantidadVenta(e.target.value);
    }
  };

  const buySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const precioCrypto = crypto?.current_price;
    const imgCrypto = crypto?.image;
    const symbolCrypto = crypto?.symbol;
    dispatch(buyCrypto({ precioCrypto, cantidadCompra, nombreCrypto, imgCrypto, symbolCrypto, user }));
  };

  const sellSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const precioCrypto = crypto?.current_price;
    dispatch(sellCrypto({ precioCrypto, nombreCrypto }));
  };


  return (
    <div>
      <Navbar />
      {cryptos[0] ? (
        <div>
          <div className="flex flex-col justify-center items-center bg-[#25282a] text-white h-[50vh] w-[65%] mt-[2%] ml-[25%] rounded-xl shadow-md p-6">
            <div className="font-semibold mb-1 text-lg">Hoy</div>
            <div className="font-semibold text-8xl tracking-tight">
              ${crypto?.current_price}
            </div>
            <div className="flex justify-center h-[10%]">
              <img className="mx-2" src={crypto?.image} alt="" />
              <div className="font-normal text-4xl">{crypto?.name}</div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[85%] ml-[15%] text-gray-800 p-10">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-full max-w-6xl">
              <div className="flex items-center p-4 bg-gray-200 rounded-2xl">
                <div
                  className={`flex flex-shrink-0 items-center justify-center ${
                    crypto?.price_change_percentage_24h! > 0
                      ? "bg-green-200"
                      : "bg-red-200"
                  } h-16 w-16 rounded`}
                >
                  {crypto?.price_change_percentage_24h! > 0 ? (
                    <svg
                      className="w-6 h-6 fill-current text-green-700"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 fill-current text-red-700"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <div className="flex-grow flex flex-col ml-4">
                  <span
                    className={`${
                      crypto?.price_change_percentage_24h! > 0
                        ? "text-green-500"
                        : "text-red-500"
                    } text-xl font-bold`}
                  >
                    {precioCrypto24hs}%
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Comparación 24hs</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center p-4 bg-gray-200 rounded-2xl">
                <div
                  className={`flex flex-shrink-0 items-center justify-center ${
                    crypto?.price_change_24h! > 0
                      ? "bg-green-200"
                      : "bg-red-200"
                  } h-16 w-16 rounded`}
                >
                  {crypto?.price_change_24h! > 0 ? (
                    <svg
                      className="w-6 h-6 fill-current text-green-700"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 fill-current text-red-700"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <div className="flex-grow flex flex-col ml-4">
                  <span
                    className={`${
                      crypto?.price_change_24h! > 0
                        ? "text-green-500"
                        : "text-red-500"
                    } text-xl font-bold`}
                  >
                    {crypto_precio24hs}
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">
                      Comparación 24hs (USD)
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center p-4 bg-gray-200 rounded-2xl">
                <div
                  className={`flex flex-shrink-0 items-center justify-center ${
                    crypto?.ath_change_percentage! > 0
                      ? "bg-green-200"
                      : "bg-red-200"
                  } h-16 w-16 rounded`}
                >
                  {crypto?.ath_change_percentage! > 0 ? (
                    <svg
                      className="w-6 h-6 fill-current text-green-700"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 fill-current text-red-700"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <div className="flex-grow flex flex-col ml-4">
                  <span
                    className={`${
                      crypto?.ath_change_percentage! > 0
                        ? "text-green-500"
                        : "text-red-500"
                    } text-xl font-bold`}
                  >
                    {crypto_percentage}%
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Comparación anual</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="ml-[42%] flex items-center">
              <div className="flex mx-20 flex-col items-center w-full">
                <div className="flex my-5">
                  <form onSubmit={buySubmit}>
                      <input
                        type="number"
                        name="comprar"
                        className="p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Ingrese"
                        required
                        onChange={changeCantidad}
                      />
                      <button
                        type="submit"
                        className="text-white absolute  bg-green-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Comprar
                      </button>
                  </form>
                </div>
                <div className="flex">
                  <form onSubmit={sellSubmit}>
                     
                      <button
                        type="submit"
                        className="text-white w-15  bg-red-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Vender
                      </button>
                  </form>
                </div>
              </div>
              <div className="flex min-w-32 bg-white p-5 mb-4 font-medium">
                <div className="  rounded-t  text-center shadow-lg ">
                  <div className=" rounded-t overflow-hidden  text-center ">
                    <div className="bg-blue-500 p-5 text-white text-sm py-1">
                      Dinero disponible
                    </div>
                    <div className="pt-1 border-l border-r border-white bg-white">
                      <span className="text-3xl font-bold leading-tight">
                        ${cuenta.usd}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" mt-[15%] p-10 ">
          <div className="ml-[50%] my-5 text-red-500 text-7xl">
          <RiAlertLine />
          </div>
          <h1 className="text-4xl text-black text-center">Ha excedido el limite de peticiones, vuelva a intentar en un minuto</h1>
        </div>
      )}
    </div>
  );
};

export default Crypto;
