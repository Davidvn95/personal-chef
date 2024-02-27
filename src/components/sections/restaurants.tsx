import { component$ } from "@builder.io/qwik";
import Rest1 from "~/assets/restaurants/Restaurant-1.png?jsx";
import Rest2 from "~/assets/restaurants/restaurant-2.png?jsx";
import Rest3 from "~/assets/restaurants/restaurant-3.webp?jsx";
import Rest4 from "~/assets/restaurants/restaurant-4.jpg?jsx";
import Rest5 from "~/assets/restaurants/restaurant-5.png?jsx";
import { RestaurantCard } from "../shareds/restaurant-card";

export const Restaurants = component$(() => {
  return (
    <section class="section-data restaurant relative flex min-h-fit flex-col items-center gap-9 py-5">
      <h2 class="text-2xl font-bold">Restaurantes</h2>
      <div class="flex w-11/12 snap-x snap-mandatory gap-10 overflow-x-scroll scroll-auto">
        <RestaurantCard
          title="Restaurante"
          speciality="Pastas"
          location="location"
        >
          <Rest1 class="aspect-video w-[307px] shadow-lg" />
        </RestaurantCard>
        <RestaurantCard
          title="Restaurante"
          speciality="Pastas"
          location="location"
        >
          <Rest2 class="aspect-video w-[307px] shadow-lg" />
        </RestaurantCard>
        <RestaurantCard
          title="Restaurante"
          speciality="Pastas"
          location="location"
        >
          <Rest3 class="aspect-video w-[307px] shadow-lg" />
        </RestaurantCard>
        <RestaurantCard
          title="Restaurante"
          speciality="Pastas"
          location="location"
        >
          <Rest4 class="aspect-video w-[307px] shadow-lg" />
        </RestaurantCard>
        <RestaurantCard
          title="Restaurante"
          speciality="Pastas"
          location="location"
        >
          <Rest5 class="aspect-video w-[307px] shadow-lg" />
        </RestaurantCard>
      </div>
      <button class="btn btn-primary">Ver todos</button>
    </section>
  );
});
