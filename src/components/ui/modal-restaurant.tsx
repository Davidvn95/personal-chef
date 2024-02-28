import { type Signal, component$ } from "@builder.io/qwik";
import Rest1 from "~/assets/restaurants/Restaurant-1.png?jsx";
import Rest2 from "~/assets/restaurants/restaurant-2.png?jsx";
import Rest3 from "~/assets/restaurants/restaurant-3.webp?jsx";
import Rest4 from "~/assets/restaurants/restaurant-4.jpg?jsx";
import Rest5 from "~/assets/restaurants/restaurant-5.png?jsx";
import { RestaurantCard } from "../shareds/restaurant-card";

interface Props {
  areAll: Signal<boolean>;
}

export const ModalRestaurant = component$(({ areAll }: Props) => {
  return (
    <article class="w-80% fixed bottom-0 left-0 right-0 top-0 z-30 grid max-h-screen grid-cols-1 place-items-center gap-3 overflow-auto bg-black bg-opacity-95 py-5 md:grid-cols-3 md:py-10">
      <RestaurantCard
        title="Restaurante"
        speciality="Pastas"
        location="location"
      >
        <Rest1 class="aspect-video w-[307px] shadow-2xl" />
      </RestaurantCard>
      <RestaurantCard
        title="Restaurante"
        speciality="Pastas"
        location="location"
      >
        <Rest2 class="aspect-video w-[307px] shadow-2xl" />
      </RestaurantCard>
      <RestaurantCard
        title="Restaurante"
        speciality="Pastas"
        location="location"
      >
        <Rest3 class="aspect-video w-[307px] shadow-2xl" />
      </RestaurantCard>
      <RestaurantCard
        title="Restaurante"
        speciality="Pastas"
        location="location"
      >
        <Rest4 class="aspect-video w-[307px] shadow-2xl" />
      </RestaurantCard>
      <RestaurantCard
        title="Restaurante"
        speciality="Pastas"
        location="location"
      >
        <Rest5 class="aspect-video w-[307px] shadow-2xl" />
      </RestaurantCard>
      <button
        class="btn btn-primary fixed bottom-3"
        onClick$={() => (areAll.value = false)}
      >
        Volver
      </button>
    </article>
  );
});
