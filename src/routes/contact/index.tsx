import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Contact Us</h1>
      <div>Feel free to reach out to us at contact@ourcompany.com.</div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Contact Us",
  meta: [
    {
      name: "description",
      content: "Get in touch with us.",
    },
  ],
};
