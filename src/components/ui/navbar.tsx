import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Navbar = component$(() => {
  return (
    <header class="fixed z-20 flex w-full items-center justify-between bg-black bg-opacity-20 px-7 py-3 backdrop-blur">
      <nav class="flex items-center justify-center gap-5 text-sm">
        <Link href="#">Home</Link>
        <Link href="#">Chef</Link>
        <Link href="#">Restaurantes</Link>
        <Link href="#" class="flex">
          Busqueda
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-chevron-down"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 9l6 6l6 -6" />
          </svg>
        </Link>
      </nav>
      <h1 class="text-2xl font-bold">Logo</h1>
      <article class="flex items-center justify-center gap-7">
        <Link href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-search"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
        </Link>
        <Link href="#" class="btn btn-primary text-sm">
          Iniciar Sesión
        </Link>
        <Link href="#" class="btn btn-primary text-sm">
          Crear Cuenta
        </Link>
      </article>
    </header>
  );
});
