// import { fetchNoteById } from "@/lib/api";
// import NotePreview from "../../default";
// import {
//   dehydrate,
//   HydrationBoundary,
//   QueryClient,
// } from "@tanstack/react-query";

// type Props = {
//   params: Promise<{ noteId: string }>;
// };

// const NoteDetailsModal = async ({ params }: Props) => {
//   const { noteId } = await params;
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery({
//     queryKey: ["note", noteId],
//     queryFn: () => fetchNoteById(noteId),
//   });

//   return (
//     <HydrationBoundary state={dehydrate(queryClient)}>
//       <NotePreview />
//     </HydrationBoundary>
//   );
// };

// export default NoteDetailsModal;

import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import NotePreview from "../../default";

type Props = {
  params: Promise<{ noteId: string }>;
};

export default async function NoteDetailsModal({ params }: Props) {
  const { noteId } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", noteId],
    queryFn: () => fetchNoteById(noteId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotePreview />
    </HydrationBoundary>
  );
}
