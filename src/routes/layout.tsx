import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { Navbar } from "~/components/ui/navbar/navbar";
import { Login } from "~/components/login/login";
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
      <div class="flex min-h-screen flex-col items-center">
        <Navbar />
        <div class="mt-4">
          <Login />
        </div>
        <main class="flex w-full flex-grow flex-col items-center justify-center px-6 py-12">
          <Slot />
        </main>
      </div>
      <Footer />
    </>
  );
});
