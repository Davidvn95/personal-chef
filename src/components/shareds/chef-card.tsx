import { component$, Slot } from "@builder.io/qwik";

interface Props {
  nameChef?: string;
}

export const ChefCard = component$(({ nameChef }: Props) => {
  return (
    <div class="group relative flex min-w-fit max-w-fit flex-col items-center overflow-hidden rounded-md font-bold text-slate-400">
      {/* <svg
        class="absolute fill-primary-color"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 3c1.918 0 3.52 1.35 3.91 3.151a4 4 0 0 1 2.09 7.723l0 7.126h-12v-7.126a4 4 0 1 1 2.092 -7.723a4 4 0 0 1 3.908 -3.151z" />
        <path d="M6.161 17.009l11.839 -.009" />
      </svg> */}

      <Slot />
      {nameChef && (
        <span class="invisible absolute bottom-0 left-0 right-0 top-0 z-10 grid place-items-center bg-black bg-opacity-50 backdrop-blur-[2px] group-hover:visible">
          {nameChef}
        </span>
      )}
    </div>
  );
});
