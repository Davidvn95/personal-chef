import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <section
      id="footer"
      class="section-data gap-4 bg-secundary-color px-5 py-8"
    >
      <div class="mt-6 flex w-5/6 items-start justify-around">
        <article class="grid w-[30%] place-items-start gap-4">
          <h2 class="text-2xl font-bold">About us</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            eius eum quos corporis optio. At optio alias tempora quibusdam qui,
            harum amet id voluptatum cupiditate quae molestiae facilis corporis
            dicta.
          </p>
        </article>
        <article class="flex h-max w-[30%] flex-col items-center justify-center gap-4">
          <h1 class="text-5xl font-bold">Logo</h1>
          <p>correo@mail.com</p>
        </article>
        <article class="grid w-[30%] place-items-end gap-4">
          <h2 class="text-2xl font-bold">Comunidad</h2>
          <a href="#">input</a>
          <a href="3">input</a>
        </article>
      </div>
      <article class="flex w-full items-end justify-center gap-4">
        <p>Chef 2024, All right reserved</p>
        <p class="text-xs">Policy privacy</p>
        <p class="text-xs">Security</p>
        <p class="text-xs">Terms of use</p>
      </article>
    </section>
  );
});
