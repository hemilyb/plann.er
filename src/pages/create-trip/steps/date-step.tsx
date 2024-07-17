import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { HandleDatePicker } from "../../../components/handle-date-picker";

interface DateStepProps {
  isGuestsInputOpen: boolean;
  closeGuestsInput: () => void;
  openGuestsInput: () => void;
  setDestination: (destination: string) => void;
  setEventDate: (dates: DateRange | undefined) => void;
  eventDate: DateRange | undefined
}

export function DateStep({
  isGuestsInputOpen,
  closeGuestsInput,
  openGuestsInput,
  setDestination,
  setEventDate,
  eventDate
}: DateStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  function openDatePicker() {
    setIsDatePickerOpen(true);
  }

  function closeDatePicker() {
    setIsDatePickerOpen(false);
  }

  const displayedDate =
    eventDate && eventDate.from && eventDate.to
      ? format(eventDate.from, "d' de 'LLL")
          .concat(" até ")
          .concat(format(eventDate.to, "d' de 'LLL"))
      : //dia de início até data e mês final
        null;

  return (
    <div className="sm:h-16 bg-zinc-600 p-4 rounded-xl sm:flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 sm:flex-1 space-y-2 sm:space-y-0">
        <MapPin className="size-5 text-zinc-400" />
        <input
          type="text"
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          disabled={isGuestsInputOpen}
          onChange={(event) => setDestination(event.target.value)}
        />
      </div>

      <button
        onClick={openDatePicker}
        disabled={isGuestsInputOpen}
        className="flex items-center gap-2 text-left sm:w-60"
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className="text-lg text-zinc-400 sm:w-40 flex-1 mt-2 sm:mt-0">
          {displayedDate || "Quando?"}
        </span>
      </button>

      {isDatePickerOpen && (
        <HandleDatePicker
        onClose={closeDatePicker}
        eventDate={eventDate}
        setEventDate={setEventDate}
        />
      )}

      <div className="sm:w-px h-6 sm:bg-zinc-800" />

      {isGuestsInputOpen ? (
        <Button onClick={closeGuestsInput} variant="secondary">
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestsInput} variant="primary">
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  );
}
