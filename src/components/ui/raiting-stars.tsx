import { component$ } from "@builder.io/qwik";

export const RaitingStars = component$(({ raiting }: { raiting: number }) => {
  const stars: number[] = [];
  const difference = 5 - raiting;
  for (let i = 1; i <= raiting; i++) {
    stars.push(1);
  }
  if (difference > 0) {
    for (let i = 1; i <= difference; i++) {
      stars.push(0);
    }
  }
  return (
    <div class="flex">
      {stars
        .filter((num) => num > 0)
        .map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 fill-primary-color text-primary-color md:w-6"
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
            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
          </svg>
        ))}
      {stars
        .filter((num) => num === 0)
        .map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 text-primary-color md:w-6"
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
            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
          </svg>
        ))}
    </div>
  );
});
