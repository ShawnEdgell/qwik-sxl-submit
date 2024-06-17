import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Navbar } from "~/components/ui/navbar/navbar";

export default component$(() => {
  return (
    <>
      <Navbar />
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
