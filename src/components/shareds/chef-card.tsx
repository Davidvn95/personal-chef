import { component$, Slot } from "@builder.io/qwik";
import IconChef from "~/assets/icons/icon-chef.svg?jsx";

interface Props {
  nameChef?: string;
  position?: number;
}

export const ChefCard = component$(({ nameChef, position }: Props) => {
  return (
    <div
      class={[
        "relative flex  max-w-fit flex-col items-center",
        { "mt-20": position, "min-w-fit": !position },
      ]}
    >
      {position && (
        <div class="absolute -top-20 z-10">
          <div class="relative grid place-items-center text-black">
            <IconChef
              class={[
                "aspect-square",
                {
                  "w-12 sm:w-16 md:w-[108px] ": position > 1,
                  "w-14 sm:w-20 md:w-[128px] ": position === 1,
                },
              ]}
            />
            <span
              class={[
                "absolute z-10 font-bold",
                {
                  "text-3xl md:text-6xl": position === 1,
                  "text-2xl md:text-[40px]": position > 1,
                },
              ]}
            >
              {position}
            </span>
          </div>
        </div>
      )}
      <div class="group relative flex max-w-fit flex-col items-center overflow-hidden rounded-md font-bold text-slate-400">
        <Slot />
        {nameChef && (
          <span class="invisible absolute bottom-0 left-0 right-0 top-0 z-10 grid place-items-center bg-black bg-opacity-50 backdrop-blur-[2px] group-hover:visible">
            {nameChef}
          </span>
        )}
      </div>
    </div>
  );
});
