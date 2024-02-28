import { $, component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Navbar = component$(() => {
  const stateMenuOpen = useSignal(false);
  const handleClick = $(() => {
    stateMenuOpen.value = false;
  });
  return (
    <header class="fixed top-0 z-20 flex h-14 w-full max-w-screen-2xl items-center justify-between px-7 py-3 backdrop-blur-sm md:min-h-fit">
      <svg
        onClick$={() => (stateMenuOpen.value = !stateMenuOpen.value)}
        xmlns="http://www.w3.org/2000/svg"
        class="absolute right-4 top-4 z-30 h-10 w-10 cursor-pointer rounded-md bg-black md:hidden"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2px"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 6l16 0" />
        <path d="M4 12l16 0" />
        <path d="M4 18l16 0" />
      </svg>
      <h1 class="absolute left-4 top-4 z-30 text-3xl font-bold md:hidden">
        Logo
      </h1>
      <div
        class={[
          "fixed bottom-0 left-0 right-0 top-0 flex min-h-screen w-full flex-col-reverse justify-center gap-10 bg-secundary-color bg-opacity-95 transition-all ease-in md:relative md:min-h-fit md:flex-row md:justify-between md:bg-transparent",
          { "translate-x-full md:translate-x-0": !stateMenuOpen.value },
        ]}
      >
        <nav class="flex flex-col items-center justify-center gap-5 text-sm md:flex-row">
          <Link onClick$={() => handleClick()} href="#">
            Home
          </Link>
          <Link onClick$={() => handleClick()} href="#info">
            Chef
          </Link>
          <Link onClick$={() => handleClick()} href="#raiting">
            Restaurantes
          </Link>
          <Link onClick$={() => handleClick()} href="#restaurants" class="flex">
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
        <h1 class="hidden text-2xl font-bold md:flex">Logo</h1>
        <article class="-mt-36 flex flex-col items-center justify-center gap-7 md:-mt-0 md:flex-row">
          <Link href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class=""
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
          <Link
            onClick$={() => handleClick()}
            href="#"
            class="btn btn-primary text-sm"
          >
            Iniciar Sesión
          </Link>
          <Link
            onClick$={() => handleClick()}
            href="#"
            class="btn btn-primary text-sm"
          >
            Crear Cuenta
          </Link>
        </article>
      </div>
    </header>
  );
});
