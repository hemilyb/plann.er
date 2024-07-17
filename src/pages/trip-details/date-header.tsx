import { Calendar, MapPin } from "lucide-react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { format } from "date-fns";

interface Trip {
  id: string;
  destination: string;
  starts_at: string;
  ends_at: string;
  is_confirmed: boolean;
}

export function DateHeader() {
  const { tripId } = useParams();
  const [trip, setTrip] = useState<Trip | undefined>();

  useEffect(() => {
    api.get(`/trips/${tripId}`).then((response) => setTrip(response.data.trip));
  }, [tripId]);

  const displayedDate =
    trip?.starts_at && trip.ends_at
      ? format(trip.starts_at, "d' de 'LLL")
          .concat(" até ")
          .concat(format(trip.ends_at, "d' de 'LLL"))
      : null;

  return (
    <div className="sm:px-4 p-2 h-20 space-y-2 rounded-xl bg-zinc-900 shadow-shape sm:flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-zinc-100">{trip?.destination}</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size- text-zinc-400" />
          <span className="text-zinc-100">{displayedDate}</span>
        </div>
      </div>
    </div>
  );
}
