import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Navbar = component$(() => {
  return (
    <div class="fixed top-0 z-10 flex w-full justify-between bg-secondary px-4 py-6">
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
  );
});