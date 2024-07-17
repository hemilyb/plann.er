import { CalendarRange, Info, Plus } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guests";
import { Activities } from "./activities";
import { DateHeader } from "./date-header";
import { Button } from "../../components/button";

export function TripDetailsPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("activities");

  function openCreateModal() {
    setIsCreateModalOpen(true);
  }

  function closeCreateModal() {
    setIsCreateModalOpen(false);
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <DateHeader />
      <main className="flex gap-16 px-4">
        <div
          className={`flex-1 space-y-6 ${
            activeTab !== "activities" && "hidden md:block"
          }`}
        >
          <div className="flex items-center justify-between">
            <h2 className="sm:text-3xl text-2xl font-semibold">Atividades</h2>
            <Button
              variant="primary"
              onClick={openCreateModal}
            >
              <Plus className="size-5" />
            Nova atividade
            </Button>
          </div>

          <Activities />
        </div>

        <div
          className={`w-80 space-y-6 ${
            activeTab !== "details" && "hidden md:block"
          }`}
        >
          <ImportantLinks />

          <div className="w-full h-px bg-zinc-800" />

          <Guests />
        </div>
      </main>

      {isCreateModalOpen && (
        <CreateActivityModal closeCreateModal={closeCreateModal} />
      )}
      
      <div className="bottom-1 w-[350px] border border-zinc-800 rounded-lg bg-zinc-900 md:hidden flex justify-around p-4">
        <Button
          variant={`${
            activeTab === "activities"
              ? "primary"
              : "secondary"
          }`}
          onClick={() => setActiveTab("activities")}
        >
          <CalendarRange className="size-5"/>
          Atividades
        </Button>
        <Button
          variant={`${
            activeTab === "details" ? "primary" : "secondary"
          }`}
          onClick={() => setActiveTab("details")}
        >
          <Info className="size-5"/>
          Detalhes
        </Button>
      </div>
    </div>
  );
}
