import { type Component, component$, type JSXChildren } from "@builder.io/qwik";

interface Props {
  children: any | unknown;
}

export const SocialIcon = component$(({ children }: Props) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
});
