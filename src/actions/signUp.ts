"use server";

import { sleep } from "@/lib/sleep";

export async function signUp(
  previousState: SignUpState,
  formData: FormData,
): Promise<SignUpState> {
  console.log("Signing up in progress...");
  await sleep(1000);

  return {
    data: {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
    },
  };
}

type SignUpState = {
  error?: string;
  data?: User;
};

type User = {
  firstName: string;
  lastName: string;
};
