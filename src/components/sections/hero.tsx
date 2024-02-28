import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import Image1 from "~/assets/sliders-hero/image1.jpg?jsx";
import Image2 from "~/assets/sliders-hero/image2.avif?jsx";
import Image3 from "~/assets/sliders-hero/image3.png?jsx";

export const Hero = component$(() => {
  const maxSliders = 300;
  const currentSlider = useSignal<number>(0);

  const handleClick = $((newValue?: number) => {
    const carousel = document.getElementById("carousel")!;
    if (newValue !== undefined) {
      currentSlider.value = newValue;
      carousel.style.transform = `translateX(-${currentSlider.value}%)`;
      return;
    }
    if (currentSlider.value < maxSliders) currentSlider.value += 100;
    if (currentSlider.value === maxSliders) currentSlider.value = 0;
    carousel.style.transform = `translateX(-${currentSlider.value}%)`;
  });
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ cleanup }) => {
    const interval = setInterval(() => {
      handleClick();
    }, 4000);
    cleanup(() => clearInterval(interval));
  });

  return (
    <section
      id="hero"
      class="hero section-data relative flex min-h-screen flex-col items-center"
    >
      <article>
        <div class="absolute left-0 top-0 flex h-screen w-full overflow-hidden brightness-50">
          <div id="carousel" class={`flex transition-all duration-700`}>
            <Image3 class={["aspect-video w-full min-w-full object-cover"]} />
            <Image1 class={["aspect-video w-full min-w-full object-cover"]} />
            <Image2 class={["aspect-video w-full min-w-full object-cover"]} />
          </div>
        </div>
      </article>
      <div class="absolute bottom-8 z-10 flex items-center justify-center gap-4">
        <div
          onClick$={() => handleClick(0)}
          class={[
            "h-3 w-3 rounded-full",
            {
              "bg-primary-color": currentSlider.value === 0,
              "bg-white": currentSlider.value !== 0,
            },
          ]}
        ></div>
        <div
          onClick$={() => handleClick(100)}
          class={[
            "h-3 w-3 rounded-full",
            {
              "bg-primary-color": currentSlider.value === 100,
              "bg-white": currentSlider.value !== 100,
            },
          ]}
        ></div>
        <div
          onClick$={() => handleClick(200)}
          class={[
            "h-3 w-3 rounded-full",
            {
              "bg-primary-color": currentSlider.value === 200,
              "bg-white": currentSlider.value !== 200,
            },
          ]}
        ></div>
      </div>
      <article class="absolute bottom-28 flex gap-2">
        <Link href="#" class="social-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M16.5 7.5l0 .01" />
          </svg>
        </Link>
        <Link href="#" class="social-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-linkedin"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
            <path d="M8 11l0 5" />
            <path d="M8 8l0 .01" />
            <path d="M12 16l0 -5" />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
          </svg>
        </Link>
        <Link href="#" class="social-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-youtube"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
            <path d="M10 9l5 3l-5 3z" />
          </svg>
        </Link>
        <Link href="#" class="social-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="black"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
          </svg>
        </Link>
      </article>
    </section>
  );
});
