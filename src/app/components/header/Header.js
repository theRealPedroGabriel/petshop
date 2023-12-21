import { useEffect, useState, useContext } from "react";
import "./header.css";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";

export default function Header() {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`${
        header ? " shadow-md " : "  shadow-none "
      }  w-full max-w-[1920px] mx-auto z-20   transition-all  duration-300 flex  justify-center fixed left-0 right-0 bg-verde`}
    >
      <nav class="  bg-verde pt-4 w-full px-64 ">
        <img src="logo.svg" class=" mr-3 h-1 w-10 " alt="Logo" />
        <div class="flex justify-between items-center   pb-4">
          <div className="">
            <a href="#" class="   ">
              <div class="flex items-center  text-xl font-semibold  dark:text-secundary">
                PetShop
              </div>
            </a>
          </div>
          <div className="relative w-full ml-28 mr-6 ">
            <input
              class="flex border-none hover:shadow-lg bg-body h-10 w-full px-4 pr-8 rounded-lg text-sm outline-none focus:outline-secundary placeholder-secundary "
              type="search"
              name="search"
              placeholder="Pesquisar"
            />
            <button
              type="submit"
              class="absolute right-0 top-1/2 -translate-y-1/2 p-3 hover:shadow-lg hover:bg-whitee rounded-lg"
            >
              <svg
                class="fill-secundary h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                styles="enable-background:new 0 0 56.966 56.966;"
                xmlSpace="preserve"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`${
            header ? " -translate-y-16  -z-20 absolute " : ""
          } flex  bg-verde  flex-wrap justify-between items-center mx-auto  duration-300`}
        >
          <div class="flex items-center  lg:order-2 ">
            <a
              href="#"
              class="focus:ring-4 ring-secundary hover:shadow-lg rounded-lg text-secundary hover:bg-whitee  font-medium  text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  "
            >
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                class=" w-6  fill-secundary"
              >
                <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
              </svg>
            </a>

            <a
              href="#"
              class="focus:ring-4 ring-secundary hover:shadow-lg rounded-lg text-secundary hover:bg-whitee  font-medium  text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </a>

            <a
              href="#"
              class="focus:ring-4 ring-secundary hover:shadow-lg rounded-lg text-secundary  hover:bg-whitee font-medium  text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  "
            >
              <div class="relative scale-75 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                  stroke="currentColor"
                  class="h-7 w-7 text-secundary "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                <span class="absolute -top-2 left-4 rounded-full bg-accent p-0.5 px-2 text-sm text-whitee">
                  4
                </span>
              </div>
            </a>

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              class=" inline-flex items-center  p-2 ml-1 text-sm text-secundary rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                class="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-6 lg:mt-0">
              <li className="dropdown cursor-pointer ">
                <a
                  href="#"
                  class="block py-2 px-3 text-secundary border-b  rounded-t-md hover:bg-whitee lg:border-0 hover:lg:border-b-4 transition duration-450"
                  aria-current="page"
                >
                  Cachorros
                  <div class="relative">
                    <ul class="dropdown-menu absolute w-80 bg-whitee mt-3 -ml-3 rounded-b-lg shadow-xl   hidden ">
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                          aria-current="page"
                        >
                          Raçâo
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Raçâo Seca
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Raçâo Ùmida
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Raçâo Prescrita
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Raçâo Natural
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Petiscos e Ossos
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Cuidado Oral
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Petiscos Naturais
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Bifinhos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Biscoitos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Bolos e Chocolates
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Bebidas e Molhos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Ossinhos
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Tapetes, Fraldas e Banheiros
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Tapetes Higiênicos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Fraldas
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Banheiros
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Cones
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Farmàcia
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antipulgas e Carrapatos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Demais Medicamentos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Anti-inflamatórios
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antibiòticos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Suplementos e Vitaminas
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Vermìfugos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Homeopàticos e Florais
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Oftalmológicos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Otológicos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Cuidado Oral
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Banho Terapêutico
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Roupas Cirùrgicas
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Colares Elizabetanos
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Brinquedos
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Bichinhos de Pelúcia
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Bolinhas
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Brinquedos em Nylon
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Brinquedos Educativos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Brinquedos de Corda
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Frisbees
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Mordedores
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Coleiras, Guias e Peitorais
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Coleiras
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Guias
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Peitorais
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Beleza e Limpeza
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-40 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antipulgas e Carrapatos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Demais Medicamentos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Anti-inflamatórios
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antibiòticos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Suplementos e Vitaminas
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Vermìfugos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Homeopàticos e Florais
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Oftalmológicos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Otológicos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Cuidado Oral
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Banho Terapêutico
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Roupas Cirùrgicas
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Colares Elizabetanos
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Camas e Corbertores
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antipulgas e Carrapatos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Demais Medicamentos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Anti-inflamatórios
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Casas e Tocas
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antipulgas e Carrapatos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Demais Medicamentos
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Acessórios de Alimentação
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antipulgas e Carrapatos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Demais Medicamentos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Anti-inflamatórios
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antibiòticos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Suplementos e Vitaminas
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Vermìfugos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Homeopàticos e Florais
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Acessórios de Transporte
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antipulgas e Carrapatos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Demais Medicamentos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Anti-inflamatórios
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antibiòticos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Suplementos e Vitaminas
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Vermìfugos
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Portões, Grades e Escadas
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antipulgas e Carrapatos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Demais Medicamentos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Anti-inflamatórios
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antibiòticos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Suplementos e Vitaminas
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Roupas
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antipulgas e Carrapatos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Demais Medicamentos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Anti-inflamatórios
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Adestramento e Comportamento
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-20 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antipulgas e Carrapatos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Demais Medicamentos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Anti-inflamatórios
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antibiòticos
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Raças
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class="rounded-b-lg text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Marcas
                        </a>
                      </li>
                    </ul>
                  </div>
                </a>
              </li>
              <li className="dropdown cursor-pointer ">
                <a
                  href="#"
                  class="block py-2 px-3 text-secundary border-b  rounded-t-md hover:bg-whitee lg:border-0 hover:lg:border-b-4 transition duration-450"
                >
                  Gatos
                  <div class="relative">
                    <ul class="dropdown-menu absolute w-80 bg-whitee mt-3 -ml-3 rounded-b-lg shadow-xl   hidden ">
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                          aria-current="page"
                        >
                          Raçâo
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Raçâo Seca
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Raçâo Ùmida
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Raçâo Prescrita
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Raçâo Natural
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Petiscos e Ossos
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Cuidado Oral
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Petiscos Naturais
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Bifinhos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Biscoitos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Bolos e Chocolates
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Bebidas e Molhos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Ossinhos
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Tapetes, Fraldas e Banheiros
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Tapetes Higiênicos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Fraldas
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Banheiros
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Cones
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Farmàcia
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antipulgas e Carrapatos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Demais Medicamentos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Anti-inflamatórios
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antibiòticos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Suplementos e Vitaminas
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Vermìfugos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Homeopàticos e Florais
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Oftalmológicos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Otológicos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Cuidado Oral
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Banho Terapêutico
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Roupas Cirùrgicas
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Colares Elizabetanos
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Brinquedos
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Bichinhos de Pelúcia
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Bolinhas
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Brinquedos em Nylon
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Brinquedos Educativos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Brinquedos de Corda
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Frisbees
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Mordedores
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Coleiras, Guias e Peitorais
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Coleiras
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Guias
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Peitorais
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Beleza e Limpeza
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-40 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antipulgas e Carrapatos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Demais Medicamentos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Anti-inflamatórios
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antibiòticos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Suplementos e Vitaminas
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Vermìfugos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Homeopàticos e Florais
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Oftalmológicos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Otológicos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Cuidado Oral
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Banho Terapêutico
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Roupas Cirùrgicas
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Colares Elizabetanos
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Camas e Corbertores
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antipulgas e Carrapatos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Demais Medicamentos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Anti-inflamatórios
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Casas e Tocas
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antipulgas e Carrapatos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Demais Medicamentos
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Acessórios de Alimentação
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antipulgas e Carrapatos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Demais Medicamentos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Anti-inflamatórios
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antibiòticos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Suplementos e Vitaminas
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Vermìfugos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Homeopàticos e Florais
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Acessórios de Transporte
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antipulgas e Carrapatos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Demais Medicamentos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Anti-inflamatórios
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antibiòticos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Suplementos e Vitaminas
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Vermìfugos
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Portões, Grades e Escadas
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antipulgas e Carrapatos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Demais Medicamentos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Anti-inflamatórios
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antibiòticos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Suplementos e Vitaminas
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Roupas
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antipulgas e Carrapatos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Demais Medicamentos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Anti-inflamatórios
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Adestramento e Comportamento
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-20 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antipulgas e Carrapatos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Demais Medicamentos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Anti-inflamatórios
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antibiòticos
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Raças
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class="rounded-b-lg text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Marcas
                        </a>
                      </li>
                    </ul>
                  </div>
                </a>
              </li>
              <li className="dropdown cursor-pointer ">
                <a
                  href="#"
                  class="block py-2 px-3 text-secundary border-b  rounded-t-md hover:bg-whitee lg:border-0 hover:lg:border-b-4 transition duration-450"
                >
                  Pássaros
                  <div class="relative">
                    <ul class="dropdown-menu absolute w-80 bg-whitee mt-3 -ml-3 rounded-b-lg shadow-xl   hidden ">
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                          aria-current="page"
                        >
                          Raçâo
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Raçâo Seca
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Raçâo Ùmida
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Raçâo Prescrita
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Raçâo Natural
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Petiscos e Ossos
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Cuidado Oral
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Petiscos Naturais
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Bifinhos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Biscoitos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Bolos e Chocolates
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Bebidas e Molhos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Ossinhos
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Tapetes, Fraldas e Banheiros
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Tapetes Higiênicos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Fraldas
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Banheiros
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Cones
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Farmàcia
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-36 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antipulgas e Carrapatos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Demais Medicamentos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Anti-inflamatórios
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antibiòticos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Suplementos e Vitaminas
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Vermìfugos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Homeopàticos e Florais
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Oftalmológicos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Otológicos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Cuidado Oral
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Banho Terapêutico
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Roupas Cirùrgicas
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Colares Elizabetanos
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Brinquedos
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Bichinhos de Pelúcia
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Bolinhas
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Brinquedos em Nylon
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Brinquedos Educativos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Brinquedos de Corda
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Frisbees
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Mordedores
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Coleiras, Guias e Peitorais
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Coleiras
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Guias
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Peitorais
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Beleza e Limpeza
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-40 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antipulgas e Carrapatos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Demais Medicamentos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Anti-inflamatórios
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antibiòticos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Suplementos e Vitaminas
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Vermìfugos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Homeopàticos e Florais
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Oftalmológicos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Otológicos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Cuidado Oral
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Banho Terapêutico
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Roupas Cirùrgicas
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Colares Elizabetanos
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Camas e Corbertores
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antipulgas e Carrapatos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Demais Medicamentos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Anti-inflamatórios
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Casas e Tocas
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antipulgas e Carrapatos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Demais Medicamentos
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </a>
              </li>
              <li className="dropdown cursor-pointer ">
                <a
                  href="#"
                  class="block py-2 px-3 text-secundary border-b  rounded-t-md hover:bg-whitee lg:border-0 hover:lg:border-b-4 transition duration-450"
                >
                  Peixes
                  <div class="relative">
                    <ul class="dropdown-menu absolute w-80 bg-whitee mt-3 -ml-3 rounded-b-lg shadow-xl   hidden ">
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                          aria-current="page"
                        >
                          Raçâo
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Raçâo Seca
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Raçâo Ùmida
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Raçâo Prescrita
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Raçâo Natural
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Petiscos e Ossos
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Cuidado Oral
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Petiscos Naturais
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Bifinhos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Biscoitos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Bolos e Chocolates
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Bebidas e Molhos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Ossinhos
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Tapetes, Fraldas e Banheiros
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Tapetes Higiênicos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Fraldas
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Banheiros
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Cones
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Farmàcia
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antipulgas e Carrapatos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Demais Medicamentos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Anti-inflamatórios
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antibiòticos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Suplementos e Vitaminas
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Vermìfugos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Homeopàticos e Florais
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Oftalmológicos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Otológicos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Cuidado Oral
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Banho Terapêutico
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Roupas Cirùrgicas
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Colares Elizabetanos
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Brinquedos
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Bichinhos de Pelúcia
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Bolinhas
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Brinquedos em Nylon
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Brinquedos Educativos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Brinquedos de Corda
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Frisbees
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Mordedores
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Coleiras, Guias e Peitorais
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Coleiras
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Guias
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Peitorais
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Beleza e Limpeza
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-40 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antipulgas e Carrapatos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Demais Medicamentos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Anti-inflamatórios
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antibiòticos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Suplementos e Vitaminas
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Vermìfugos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Homeopàticos e Florais
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Oftalmológicos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Otológicos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Cuidado Oral
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Banho Terapêutico
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Roupas Cirùrgicas
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Colares Elizabetanos
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Camas e Corbertores
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antipulgas e Carrapatos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Demais Medicamentos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Anti-inflamatórios
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Casas e Tocas
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antipulgas e Carrapatos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Demais Medicamentos
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </a>
              </li>
              <li className="dropdown cursor-pointer a">
                <a
                  href="#"
                  class="block py-2 px-3 text-secundary border-b  rounded-t-md hover:bg-whitee lg:border-0 hover:lg:border-b-4 transition duration-450"
                >
                  Outros Pets
                  <div class="relative">
                    <ul class="dropdown-menu absolute w-80 bg-whitee mt-3 -ml-3 rounded-b-lg shadow-xl   hidden ">
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                          aria-current="page"
                        >
                          Raçâo
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Raçâo Seca
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Raçâo Ùmida
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Raçâo Prescrita
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Raçâo Natural
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Petiscos e Ossos
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Cuidado Oral
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Petiscos Naturais
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Bifinhos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Biscoitos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Bolos e Chocolates
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Bebidas e Molhos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Ossinhos
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Tapetes, Fraldas e Banheiros
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Tapetes Higiênicos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Fraldas
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Banheiros
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Cones
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Farmàcia
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antipulgas e Carrapatos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Demais Medicamentos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Anti-inflamatórios
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antibiòticos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Suplementos e Vitaminas
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Vermìfugos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Homeopàticos e Florais
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Oftalmológicos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Otológicos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Cuidado Oral
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Banho Terapêutico
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Roupas Cirùrgicas
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Colares Elizabetanos
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Brinquedos
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Bichinhos de Pelúcia
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Bolinhas
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Brinquedos em Nylon
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Brinquedos Educativos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Brinquedos de Corda
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Frisbees
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Mordedores
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Coleiras, Guias e Peitorais
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Coleiras
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Guias
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Peitorais
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Beleza e Limpeza
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-40 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antipulgas e Carrapatos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Demais Medicamentos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Anti-inflamatórios
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antibiòticos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Suplementos e Vitaminas
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Vermìfugos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Homeopàticos e Florais
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Oftalmológicos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Otológicos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Cuidado Oral
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Banho Terapêutico
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Roupas Cirùrgicas
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Colares Elizabetanos
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Camas e Corbertores
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antipulgas e Carrapatos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Demais Medicamentos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Anti-inflamatórios
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li class="dropdown-trigger">
                        <a
                          class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                          href="#"
                        >
                          Casas e Tocas
                          <div class="relative">
                            <ul class="dropdown-trigger-menu absolute w-72 bg-whitee -mt-8 ml-72  rounded-b-lg shadow-xl hidden">
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Antipulgas e Carrapatos
                                </a>
                              </li>
                              <li class="">
                                <a
                                  class=" text-accent hover:bg-gray hover:text-accent-hover py-2 px-4 block whitespace-no-wrap duration-300"
                                  href="#"
                                >
                                  Demais Medicamentos
                                </a>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"></script>
    </header>
  );
}
