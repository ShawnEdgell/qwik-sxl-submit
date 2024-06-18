import { component$ } from "@builder.io/qwik";
import {
  useAuthSignin,
  useAuthSession,
  useAuthSignout,
} from "~/routes/plugin@auth";
import { Button } from "../ui/button/button";

export const Login = component$(() => {
  const signIn = useAuthSignin();
  const session = useAuthSession();
  const signOut = useAuthSignout();

  return (
    <div class="login-component">
      <div>
        <span>{session.value?.user?.email}</span>
      </div>
      <div class="flex flex-col items-center">
        {session.value?.user === undefined && (
          <Button
            look="secondary"
            class="text-accent"
            onClick$={() =>
              signIn.submit({
                providerId: "github",
                options: {
                  callbackUrl: "https://qwik-sxl-submit.vercel.app/",
                },
              })
            }
          >
            Sign In
          </Button>
        )}
        {session.value?.user !== undefined && (
          <Button
            look="secondary"
            class="mt-2 text-accent"
            onClick$={() => signOut.submit({ callbackUrl: "/" })}
          >
            Sign Out
          </Button>
        )}
      </div>
    </div>
  );
});
