import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Navbar = component$(() => {
  return (
    <div class="flex gap-4 w-full justify-center p-4">
    <Link href="/" >
        Home
    </Link>
    <Link href="/stats">
        Stats
    </Link>
    </div>
  );
});
