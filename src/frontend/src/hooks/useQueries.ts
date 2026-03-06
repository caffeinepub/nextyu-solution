import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitContact() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      name,
      email,
      subject,
      message,
    }: {
      name: string;
      email: string;
      subject: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not available");
      await actor.submitContactForm(name, email, subject, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contactMessages"] });
    },
  });
}
