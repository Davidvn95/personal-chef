import { component$ } from "@builder.io/qwik";
import Chef1 from "~/assets/chefs/chef-1.png?jsx";
import Chef2 from "~/assets/chefs/chef-2.png?jsx";
import Chef3 from "~/assets/chefs/chef-3.png?jsx";
import Chef4 from "~/assets/chefs/chef-4.jpg?jsx";
import Chef5 from "~/assets/chefs/chef-5.jpg?jsx";
import Chef6 from "~/assets/chefs/chef-6.jpg?jsx";
import Chef7 from "~/assets/chefs/chef-7.jpg?jsx";
import IconLeft from "~/assets/icons/left-icon.svg?jsx";
import IconRight from "~/assets/icons/right-icon.svg?jsx";
import { ChefCard } from "../shareds/chef-card";

export const SliderChef = component$(() => {
  return (
    <>
      <article class="relative flex h-full w-full items-center overflow-hidden px-2">
        <div class="flex max-w-[600px] gap-10 px-4 transition-all duration-500  ease-in">
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
        <IconLeft class="absolute left-0 top-[50%]" />
        <IconRight class="absolute bottom-0 top-0" />
      </article>
    </>
  );
});
