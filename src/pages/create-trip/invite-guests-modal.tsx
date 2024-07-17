import { AtSign, Plus, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";
import { Modal } from "../../components/modal";

interface InviteGuestsModalProps {
  closeGuestsModal: () => void;
  emailsToInvite: string[];
  setEmailsToInvite: (emailsToInvite: string[]) => void;
}

export function InviteGuestsModal({
  closeGuestsModal,
  emailsToInvite,
  setEmailsToInvite,
}: InviteGuestsModalProps) {
  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();

    if (!email) {
      return;
    }

    if (emailsToInvite.includes(email)) {
      return;
    }

    setEmailsToInvite([...emailsToInvite, email]);

    event.currentTarget.reset();
  }

  function removeEmailFromInvites(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(
      (email) => email !== emailToRemove
    );

    setEmailsToInvite(newEmailList);
  }

  return (
    <Modal
      title="Selecionar convidados"
      paragraph=" Os convidados irão receber e-mails para confirmar a participação na viagem."
      onClose={closeGuestsModal}
    >
      <div className="flex flex-wrap gap-2">
        {emailsToInvite.map((email) => {
          return (
            <div
              key={email}
              className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
            >
              <span className="text-zinc-300">{email}</span>
              <button type="button">
                <X
                  onClick={() => removeEmailFromInvites(email)}
                  className="size-4 text-zinc-400"
                />
              </button>
            </div>
          );
        })}
      </div>

      <div className="w-full h-px bg-zinc-800" />

      <form
        onSubmit={addNewEmailToInvite}
        className="p-2.5 space-y-4 sm:space-y-0 sm:bg-zinc-950 sm:border border-zinc-800 rounded-lg sm:flex"
      >
        <div className="sm:px-2 flex items-center gap-2 flex-1 bg-zinc-950 border border-zinc-800 rounded-lg p-3.5 sm:border-none sm:p-0">
          <AtSign className="text-zinc-400 size-4 sm:size-5" />
          <input
            type="email"
            name="email"
            placeholder="Digite o e-mail do convidado"
            className="bg-transparent sm:text-lg placeholder-zinc-400 outline-none flex-1"
          />
        </div>

        <Button type="submit" variant="primary">
          Convidar
          <Plus className="size-5" />
        </Button>
      </form>
    </Modal>
  );
}
