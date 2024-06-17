import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { Navbar } from "~/components/ui/navbar/navbar";
import { Footer } from "~/components/ui/footer/footer";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <>
    <div class="flex flex-col min-h-screen">
      <Navbar />
      <main class="flex-grow flex w-full flex-col items-center justify-center py-12 px-6">
        <Slot />
      </main>
    
    </div>
      <Footer />
    </>
  );
});
