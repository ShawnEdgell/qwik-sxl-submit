import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { HomeButton } from "~/components/buttons/HomeButton";

export default component$(() => {
  return (
    <div class="flex min-h-screen flex-col items-center justify-center ">
      <h1 class="mb-4 text-4xl font-bold">@stillmilky</h1>
      <p class="mb-6 text-center text-lg">Stats & Settings (Skater XL)</p>
      <div class="flex w-full max-w-md flex-col gap-3 px-4">
        <HomeButton />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Milky's Link Hub",
  meta: [
    {
      name: "description",
      content:
        "Connect with StillMilky, a skateboarding & gaming content creator. Find all social media links in one place.",
    },
    {
      name: "keywords",
      content:
        "Milky, skateboarding, Skater XL, Session, Skate, content creator, social media, linktree, stats, settings",
    },
    {
      name: "author",
      content: "Milky",
    },
  ],
};
