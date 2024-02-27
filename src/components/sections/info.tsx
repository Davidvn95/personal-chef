import { component$ } from "@builder.io/qwik";
import ImgDibujosChef from "~/assets/dibujos-chef.svg?jsx";
import Chef1 from "~/assets/chefs/chef-1.png?jsx";
import Chef2 from "~/assets/chefs/chef-2.png?jsx";
import Chef3 from "~/assets/chefs/chef-3.png?jsx";
import Chef4 from "~/assets/chefs/chef-4.jpg?jsx";
import Chef5 from "~/assets/chefs/chef-5.jpg?jsx";
import Chef6 from "~/assets/chefs/chef-6.jpg?jsx";
import Chef7 from "~/assets/chefs/chef-7.jpg?jsx";
import { ChefCard } from "../shareds/chef-card";

export const Info = component$(() => {
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
        <div class="flex max-w-[600px] snap-x snap-mandatory gap-10 overflow-x-scroll scroll-auto px-4">
          <ChefCard nameChef="David">
            <Chef1 class="chef-image" />
          </ChefCard>
          <ChefCard nameChef="David">
            <Chef2 class="chef-image" />
          </ChefCard>
          <ChefCard nameChef="David">
            <Chef3 class="chef-image" />
          </ChefCard>
          <ChefCard nameChef="David">
            <Chef4 class="chef-image" />
          </ChefCard>
          <ChefCard nameChef="David">
            <Chef5 class="chef-image" />
          </ChefCard>
          <ChefCard nameChef="David">
            <Chef6 class="chef-image" />
          </ChefCard>
          <ChefCard nameChef="David">
            <Chef7 class="chef-image" />
          </ChefCard>
        </div>
        <button class="btn btn-primary">Ver todos</button>
      </article>
    </section>
  );
});
