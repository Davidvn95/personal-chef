import {
  component$,
  $,
  useVisibleTask$,
  useStore,
  useOnWindow,
} from "@builder.io/qwik";
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
  const states = useStore({
    targetWidth: 0,
    carouselWidth: 0,
    translate: 0,
    gap: 32,
    max: 0,
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ track }) => {
    states.targetWidth = Number(
      document.querySelector(".chef-image")?.clientWidth,
    );
    states.carouselWidth = Number(
      document.querySelector("#carousel")?.clientWidth,
    );

    if (states.carouselWidth <= 767) states.max = 6;
    else states.max = 3;

    track(() => states.carouselWidth);
    if (states.carouselWidth <= 767) states.max = 6;
    else states.max = 3;

    if (states.translate > states.max) states.translate = states.max;
  });

  useOnWindow(
    "resize",
    $(() => {
      setTimeout(() => {
        states.targetWidth = Number(
          document.querySelector(".chef-image")?.clientWidth,
        );
        states.carouselWidth = Number(
          document.querySelector("#carousel")?.clientWidth,
        );
      }, 200);
    }),
  );

  const handleClick = $((value: number) => {
    if (states.translate + value > states.max) return;
    if (states.translate + value < 0) return;
    states.translate += value;
  });
  return (
    <>
      <article
        id="carousel-chef"
        class="relative flex aspect-[9/13] min-w-full max-w-[350px] items-center overflow-hidden px-2 sm:max-w-[450px] md:aspect-[16/6] md:max-w-[800px]"
      >
        <div
          style={{
            transform: `translateX(-${states.translate * (states.targetWidth + states.gap)}px)`,
          }}
          class="flex gap-8 px-4 transition-all duration-500 ease-in"
        >
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
        <div onClick$={() => handleClick(-1)}>
          <IconLeft class="absolute left-0 top-[50%] z-10 box-content cursor-pointer rounded-full p-2 hover:bg-secundary-color hover:bg-opacity-[.35]" />
        </div>
        <div onClick$={() => handleClick(1)}>
          <IconRight class="absolute right-0 top-[50%] z-10 box-content cursor-pointer rounded-full p-2 hover:bg-secundary-color hover:bg-opacity-[.35]" />
        </div>
      </article>
    </>
  );
});
