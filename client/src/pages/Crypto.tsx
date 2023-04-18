import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useGlobalContext } from "../context";
import { useParams } from "react-router-dom";

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

const Crypto = () => {
  const { id } = useParams();

  const [crypto, setCrypto] = useState<cryptoType>();

  const { cryptos }: any = useGlobalContext();
  useEffect(() => {
    setCrypto(cryptos.find((crypto) => crypto.id === id));
  }, []);
  console.log(crypto);

  return (
    <div>
      <Navbar />
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
                {crypto?.price_change_percentage_24h}%
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
                {crypto?.price_change_24h}
              </span>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Comparación 24hs (USD)</span>
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
                {crypto?.ath_change_percentage}%
              </span>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Comparación anual</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="ml-[50%]">
          <button
            type="button"
            className="inline-block my-[10%] rounded bg-green-500 w-full px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
          >
            Comprar
          </button>
          <button
            type="button"
            className="inline-block rounded my-[10%] bg-red-500 w-full px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]"
          >
            Vender
          </button>
        </div>
        <div className="min-w-32 bg-white min-h-48 p-3 mb-4 w-full font-medium">
          <div className="w-32 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center shadow-lg ">
            <div className="block rounded-t overflow-hidden  text-center ">
              <div className="bg-blue-500 text-white text-sm py-1">
                Dinero disponible
              </div>
              <div className="pt-1 border-l border-r border-white bg-white">
                <span className="text-5xl font-bold leading-tight">17</span>
              </div>
              <div className="border-l border-r border-b rounded-b-lg text-center border-white bg-white -pt-2 -mb-1">
                <span className="text-sm">Sunday</span>
              </div>
              <div className="pb-2 border-l border-r border-b rounded-b-lg text-center border-white bg-white">
                <span className="text-xs leading-normal">
                  8:00 am to 5:00 pm
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crypto;
