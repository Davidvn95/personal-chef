import { component$ } from "@builder.io/qwik";
import Rest1 from "~/assets/restaurants/Restaurant-1.png?jsx";
import Rest2 from "~/assets/restaurants/restaurant-2.png?jsx";
import Rest3 from "~/assets/restaurants/restaurant-3.webp?jsx";
import Rest4 from "~/assets/restaurants/restaurant-4.jpg?jsx";
import Rest5 from "~/assets/restaurants/restaurant-5.png?jsx";
import { RestaurantCard } from "../shareds/restaurant-card";

export const SliderRestaurant = component$(() => {
  return (
    <article class="relative grid w-full place-items-center overflow-hidden hover:[animation-play-state:pause]">
      <div class="flex w-max animate-slide gap-4">
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

        {/*? Duplicado para la slider */}
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
      </div>
    </article>
  );
});
