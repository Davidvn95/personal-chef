import { component$, useSignal } from "@builder.io/qwik";

import { SliderRestaurant } from "../ui/slider-restaurant";
import { ModalRestaurant } from "../ui/modal-restaurant";

export const Restaurants = component$(() => {
  const areAll = useSignal(false);
  return (
    <section
      id="restaurants"
      class="section-data restaurant relative flex min-h-fit flex-col items-center gap-9 py-5"
    >
      <h2 class="text-2xl font-bold">Restaurantes</h2>
      <SliderRestaurant />
      <button class="btn btn-primary" onClick$={() => (areAll.value = true)}>
        Ver todos
      </button>
      {areAll.value && <ModalRestaurant areAll={areAll} />}
    </section>
  );
});
