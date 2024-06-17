import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Lorem from "~/components/lorem/lorem";

export default component$(() => {
  return (
    <div class="flex h-full items-center">
      <div class="prose lg:prose-xl">
        <h1 class="text-center">About Us</h1>
          <Lorem />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "About Us",
  meta: [
    {
      name: "description",
      content: "Learn more about our team and mission.",
    },
  ],
};