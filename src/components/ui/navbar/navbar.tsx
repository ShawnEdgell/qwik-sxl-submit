import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Navbar = component$(() => {
  return (
    <div class="sticky top-0 flex w-full justify-center bg-secondary p-6">
      <div class="flex w-full max-w-3xl justify-between">
        <Link href="/" class="text-accent">
          <p class="text-lg font-bold text-accent">Navigation</p>
        </Link>
        <nav class="flex gap-6">
          <Link href="/" class="text-accent hover:underline">
            Home
          </Link>
          <Link href="/about" class="text-accent hover:underline">
            About
          </Link>
          <Link href="/contact" class="text-accent hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
});
