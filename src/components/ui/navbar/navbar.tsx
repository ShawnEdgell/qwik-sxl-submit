import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Navbar = component$(() => {
  return (
    <ul class="flex space-x-4">
      <li>
        <Link href="/" class="hover:underline">
          Home
        </Link>
      </li>
      <li>
        <Link href="/about" class="hover:underline">
          About
        </Link>
      </li>
      <li>
        <Link href="/contact" class="hover:underline">
          Contact
        </Link>
      </li>
    </ul>
  );
});
