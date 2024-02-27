import { Slot, component$ } from "@builder.io/qwik";

interface Props {
  title: string;
  speciality: string;
  location: string;
}

export const RestaurantCard = component$(
  ({ title, speciality, location }: Props) => {
    return (
      <div class="group relative min-w-fit max-w-fit overflow-hidden rounded-md">
        <Slot />
        <div class="invisible absolute bottom-0 left-0 right-0 top-0 grid place-content-center place-items-center gap-2 bg-black bg-opacity-60 backdrop-blur-sm group-hover:visible">
          <h3 class="text-xl font-bold">{title}</h3>
          <span class="font-bold text-white">{speciality}</span>
          <span class="text-xs">{location}</span>
        </div>
      </div>
    );
  },
);
