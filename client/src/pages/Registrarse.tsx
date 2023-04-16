import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FieldValues } from 'react-hook-form'
import axios from 'axios'

const Registrarse = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // useEffect(()=>{
  //   (async()=>{
  //     try {
  //       const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
  //       console.log(res);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // },[])

  const onSubmit = async (data: FieldValues) => {
    const { user, password } = data
    axios.post('http://localhost:3000/api/auth/register', {user, password})
  };

  return (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">iBank</h1>
          <p className="text-white mt-1">
            Una de los mejores proyectos de Ignacio Martello :)!
          </p>
          <a
            href="https://mi-portafolio-martello.vercel.app/"
            type="submit"
            className="block w-28 text-center bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
          >
            Sobre Mi
          </a>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form className="bg-white w-1/2" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-gray-800 font-bold text-2xl text-center mb-1">
            ¡Hola!
          </h1>
          <p className="text-sm font-normal text-gray-600 text-center mb-7">
            Crea tu cuenta
          </p>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="text"
              placeholder="Usuario"
              {...register("user", {
                required: true,
                minLength: 5,
                maxLength: 25,
              })}
            />
          </div>
          {errors.user?.type === "required" && (
            <p className="text-red-500">Este campo es obligatorio</p>
          )}
          {errors.user?.type === "minLength" && (
            <p className="text-red-500">
              El usuario debe tener entre 5 y 25 caracteres
            </p>
          )}
          {errors.user?.type === "maxLength" && (
            <p className="text-red-500">
              El usuario debe tener entre 5 y 25 caracteres
            </p>
          )}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="password"
              placeholder="Contraseña"
              {...register("password", {
                required: true,
                minLength: 5,
                maxLength: 40,
              })}
            />
          </div>
          {errors.password?.type === "required" && (
            <p className="text-red-500">Este campo es obligatorio</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              La contraseña debe tener entre 5 y 40 caracteres
            </p>
          )}
          {errors.password?.type === "maxLength" && (
            <p className="text-red-500">
              La contraseña debe tener entre 5 y 40 caracteres
            </p>
          )}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="password"
              placeholder="Confirmar Contraseña"
              {...register("confirmPassword", {
                required: true,
                validate: (value, formValues) => value === formValues.password,
              })}
            />
          </div>
          {errors.confirmPassword?.type === "validate" && (
            <p className="text-red-500">Las contraseñas no coinciden</p>
          )}
          <button
            type="submit"
            className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Crear Cuenta
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registrarse;
