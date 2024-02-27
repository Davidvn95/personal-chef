import { Slot, component$ } from "@builder.io/qwik";
import { RaitingStars } from "../ui/raiting-stars";

interface Props {
  title: string;
  nameChef: string;
  raiting: number;
}

export const FoodCard = component$(({ title, nameChef, raiting }: Props) => {
  return (
    <>
      <div class="group relative overflow-hidden text-white">
        <Slot name="food-image" />
        <div class="invisible absolute bottom-0 left-0 right-0 top-0 flex aspect-square flex-col items-center justify-center gap-2 bg-black bg-opacity-70 backdrop-blur-[2px] group-hover:visible md:gap-16">
          <div class="flex flex-col justify-center gap-1 md:gap-4">
            <p class="text-center text-base font-bold md:text-3xl">{title}</p>
            <div class="flex items-center gap-4 text-sm md:text-xl ">
              <Slot name="chef-image" />
              <p>{nameChef}</p>
            </div>
          </div>

          <RaitingStars raiting={raiting} />
        </div>
      </div>
    </>
  );
});
