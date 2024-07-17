import { X } from "lucide-react";
import { DateRange, DayPicker } from "react-day-picker";

interface handleDatePickerProps {
  onClose: () => void;
  eventDate: DateRange | undefined;
  setEventDate: (dates: DateRange | undefined) => void;
}

export function HandleDatePicker({
  onClose,
  eventDate,
  setEventDate,
}: handleDatePickerProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Selecione a data</h2>
            <button>
              <X className="size-5 text-zinc-400" onClick={onClose} />
            </button>
          </div>
        </div>

        <DayPicker mode="range" selected={eventDate} onSelect={setEventDate} />
      </div>
    </div>
  );
}
