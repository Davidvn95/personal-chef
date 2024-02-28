import { component$, useSignal } from "@builder.io/qwik";
import ImgDibujosChef from "~/assets/dibujos-chef.svg?jsx";
import { SliderChef } from "../ui/slider-chef";
import { ModalChefs } from "../ui/modal-chefs";

export const Info = component$(() => {
  const areAll = useSignal(false);
  return (
    <section id="info" class="section-data gap-10 py-10">
      <article class="flex w-full flex-col gap-3 md:flex-row">
        <div class="flex w-full flex-col items-center justify-center gap-4 bg-secundary-color p-10 md:w-2/3">
          <div class="flex gap-3">
            <button class="btn btn-primary">Chef</button>
            <button class="btn btn-primary">Usuario</button>
          </div>
          <p class="text-balance text-center text-xl text-white">
            Registrate y forma parte de la revolución de la industria culinaria
          </p>
        </div>

        <div class="flex w-full justify-center bg-secundary-color p-8">
          <ImgDibujosChef class="aspect-video w-full" />
        </div>
      </article>

      <article class="flex flex-col items-center justify-center gap-5">
        <h2 class="text-2xl font-bold">Chefs</h2>
        <SliderChef />
        <button class="btn btn-primary" onClick$={() => (areAll.value = true)}>
          Ver todos
        </button>
      </article>
      {areAll.value && <ModalChefs areAll={areAll} />}
    </section>
  );
});
