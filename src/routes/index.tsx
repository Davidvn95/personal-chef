import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Navbar } from "~/components/ui/navbar";
import { Hero } from "~/components/sections/hero";
import { Info } from "~/components/sections/info";
import { TopRatings } from "~/components/sections/top-ratings";
import { Restaurants } from "~/components/sections/restaurants";

export default component$(() => {
  return (
    <>
      <Navbar />
      <Hero />
      <Info />
      <TopRatings />
      <Restaurants />
    </>
  );
});

export const head: DocumentHead = {
  title: "Personal Chef",
  meta: [
    {
      name: "description",
      content:
        "Aplicación para contratar un chef especializado según el evento que tenga planeado y el tema del mismo",
    },
  ],
};
