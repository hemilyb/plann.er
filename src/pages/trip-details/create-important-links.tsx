import { Link2, Tag } from "lucide-react";
import { Modal } from "../../components/modal";
import { Button } from "../../components/button";
import { FormEvent } from "react";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";

interface CreateImportantLinkProps {
  handleLinks: () => void;
}

export function CreateImportantLinks({
  handleLinks,
}: CreateImportantLinkProps) {

  const { tripId } = useParams();

  async function createLink(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const title = data.get('title')?.toString()
    const url = data.get('url')?.toString()

    await api.post(`/trips/${tripId}/links`, {
      title,
      url,
    });

    document.location.reload();
  }

  return (
    <Modal
      title="Cadastrar link"
      paragraph="Todos convidados podem visualizar os links."
      onClose={handleLinks}
    >
      <form onSubmit={createLink} className="space-y-3">
        <div className="py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          <Tag className="text-zinc-400 size-5" />
          <input
            type="text"
            name="title"
            placeholder="Título do link"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          />
        </div>

        <div className="h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          <Link2 className="text-zinc-400 size-5" />
          <input
            type="text"
            name="url"
            placeholder="insira a URL"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 [color-scheme:dark]"
          />
        </div>

        <Button variant="primary" size="full">
          Salvar link
        </Button>
      </form>
    </Modal>
  );
}
