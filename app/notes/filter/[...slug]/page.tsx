import { getNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

type Props = {
  params: { slug: string[] };
};

export default async function NotesByFilter({ params }: Props) {
  const { slug } = params;
  const categoryId: string = slug[0];

  const data = await getNotes({
    search: "",
    page: 1,
    ...(categoryId && categoryId !== "All" && { categoryId }),
  });

  return <NotesClient initialData={data} categoryId={categoryId} />;
}
