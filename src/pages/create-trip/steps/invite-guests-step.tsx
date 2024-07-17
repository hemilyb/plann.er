import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../components/button";

interface InviteGuestsStepProps {
  openGuestsModal: () => void;
  emailsToInvite: string[];
  openConfirmTripModal: () => void;
}

export function InviteGuestsStep({
  openGuestsModal,
  emailsToInvite,
  openConfirmTripModal,
}: InviteGuestsStepProps) {
  return (
    <div className="sm:h-16 bg-zinc-600 px-4 rounded-xl sm:flex items-center shadow-shape gap-3 space-y-4 sm:space-y-0 p-4">
      <button
        type="button"
        className="flex items-center gap-2 flex-1"
        onClick={openGuestsModal}
      >
        <UserRoundPlus className="size-5 text-zinc-400" />

        {emailsToInvite.length > 0 ? (
          <span className="text-lg text-zinc-100 flex-1 text-left">
            {emailsToInvite.length} pessoa(s) convidada(s)
          </span>
        ) : (
          <span className="text-lg text-zinc-400 flex-1 text-left">
            Quem estará na viagem?
          </span>
        )}
      </button>

      <div className="sm:w-px sm:h-6 sm:bg-zinc-800" />

      <Button onClick={openConfirmTripModal} variant="primary">
        Confirmar viagem
        <ArrowRight className="size-5" />
      </Button>
    </div>
  );
}
