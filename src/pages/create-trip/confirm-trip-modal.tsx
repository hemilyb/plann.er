import { User } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";
import { Modal } from "../../components/modal";

interface ConfirmTripModal {
  closeConfirmTripModal: () => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
  setOwnerName: (ownerName: string) => void;
  setOwnerEmail: (ownerEmail: string) => void;
}

export function ConfirmTripModal({
  closeConfirmTripModal,
  createTrip,
  setOwnerEmail,
  setOwnerName,
}: ConfirmTripModal) {
  return (
    <Modal
      title="Confirmar criação de viagem"
      paragraph="Para concluir a criação da viagem, preencha seus dados abaixo:"
      onClose={closeConfirmTripModal}
    >
      <form onSubmit={createTrip} className="space-y-3">
        <div className="py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          <User className="text-zinc-400 size-5" />
          <input
            type="text"
            name="name"
            placeholder="Seu nome completo"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            onChange={(event) => setOwnerName(event.target.value)}
          />
        </div>

        <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          <User className="text-zinc-400 size-5" />
          <input
            type="text"
            name="email"
            placeholder="Seu email pessoal"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            onChange={(event) => setOwnerEmail(event.target.value)}
          />
        </div>
        <Button type="submit" variant="primary" size="full">
          Confirmar criação da viagem
        </Button>
      </form>
    </Modal>
  );
}
