import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>About Us</h1>
      <div>
        We are a team of dedicated professionals committed to providing
        excellent service.
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "About Us",
  meta: [
    {
      name: "description",
      content: "Learn more about us.",
    },
  ],
};
