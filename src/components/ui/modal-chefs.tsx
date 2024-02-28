import { type Signal, component$ } from "@builder.io/qwik";
import Chef1 from "~/assets/chefs/chef-1.png?jsx";
import Chef2 from "~/assets/chefs/chef-2.png?jsx";
import Chef3 from "~/assets/chefs/chef-3.png?jsx";
import Chef4 from "~/assets/chefs/chef-4.jpg?jsx";
import Chef5 from "~/assets/chefs/chef-5.jpg?jsx";
import Chef6 from "~/assets/chefs/chef-6.jpg?jsx";
import Chef7 from "~/assets/chefs/chef-7.jpg?jsx";
import { ChefCard } from "../shareds/chef-card";

interface Props {
  areAll: Signal<boolean>;
}

export const ModalChefs = component$(({ areAll }: Props) => {
  return (
    <article class="fixed bottom-0 left-0 right-0 top-0 z-30 grid max-h-screen place-items-center overflow-y-auto bg-secundary-color bg-opacity-95 p-2 py-4">
      <div class="grid grid-cols-2 place-items-center gap-7 sm:grid-cols-3 md:grid-cols-4">
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
      <button
        class="btn btn-primary fixed bottom-7"
        onClick$={() => (areAll.value = false)}
      >
        Volver
      </button>
    </article>
  );
});
