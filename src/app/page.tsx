"use client";

import { useActionState, useEffect } from "react";
import { signUp } from "@/actions/signUp";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { simulateBotSubmission } from "@/lib/simulateBotSubmission";

export default function SignUp() {
  const [{ data }, handleSubmit, isLoading] = useActionState(signUp, {});

  useEffect(() => {
    if (!data) {
      return;
    }

    window.alert(`Sign up completed. Welcome, ${data.firstName}.`);
  }, [data]);

  return (
    <form action={handleSubmit} id={"sign-up-form"}>
      <Input name={"firstName"} label={"First name"} isRequired={true} />
      <Input name={"lastName"} label={"First name"} isRequired={true} />
      <Input name={"email"} label={"Email"} />
      <Input name={"phoneNumber"} type={"tel"} label={"Phone number"} />
      <Button type="submit" isLoading={isLoading}>
        Sign up
      </Button>
    </form>
  );
}

if (process.env.NODE_ENV === "development") {
  Object.assign(window, { simulateBotSubmission });
}
