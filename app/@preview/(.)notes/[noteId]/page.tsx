import { fetchNoteById } from "@/lib/api";

type Props = {
  params: Promise<{ noteId: string }>;
};

const PreviewPage = async ({ params }: Props) => {
  const { noteId } = await params;
  const note = await fetchNoteById(noteId);
  return (
    <div>
      <hr />
      Note Preview
      <br />
      <h2>{note?.title}</h2>
      <p>{note?.content}</p>
    </div>
  );
};

export default PreviewPage;
