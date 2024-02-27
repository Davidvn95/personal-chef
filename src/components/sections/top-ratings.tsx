import { component$ } from "@builder.io/qwik";
import Food1 from "~/assets/foods/food-1.webp?jsx";
import Food2 from "~/assets/foods/food-2.png?jsx";
import Food3 from "~/assets/foods/food-3.png?jsx";
import Chef1 from "~/assets/chefs/chef-1.png?jsx";
import Chef2 from "~/assets/chefs/chef-2.png?jsx";
import Chef3 from "~/assets/chefs/chef-3.png?jsx";
import { FoodCard } from "../shareds/food-card";
import { ChefCard } from "../shareds/chef-card";

export const TopRatings = component$(() => {
  return (
    <section class="section-data gap-10 py-5">
      <article class="flex">
        <FoodCard nameChef="alguien" title="comida rica" raiting={4}>
          <Food1
            class="aspect-[7/6] w-[478px] object-cover"
            q:slot="food-image"
          />
          <Chef1 q:slot="chef-image" class="chef-image-miniature" />
        </FoodCard>

        <FoodCard nameChef="alguien" title="comida rica" raiting={4}>
          <Food2
            class="aspect-[7/6] w-[478px] object-cover"
            q:slot="food-image"
          />
          <Chef2 q:slot="chef-image" class="chef-image-miniature" />
        </FoodCard>

        <FoodCard nameChef="alguien" title="comida rica" raiting={4}>
          <Food3
            class="aspect-[7/6] w-[478px] object-cover"
            q:slot="food-image"
          />
          <Chef3 q:slot="chef-image" class="chef-image-miniature" />
        </FoodCard>
      </article>
      <article class="flex flex-col items-center gap-5">
        <h2 class="text-2xl font-bold">Top 3 Chefs estelares</h2>
        <div class="flex items-center justify-center gap-11">
          <ChefCard position={2}>
            <Chef1 class="aspect-[9/13] w-[288px] object-cover" />
          </ChefCard>
          <ChefCard position={1}>
            <Chef3 class="aspect-[9/13] w-[288px] object-cover" />
          </ChefCard>
          <ChefCard position={3}>
            <Chef2 class="aspect-[9/13] w-[288px] object-cover" />
          </ChefCard>
        </div>
      </article>
    </section>
  );
});
