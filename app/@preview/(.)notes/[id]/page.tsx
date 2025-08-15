// import {
//   QueryClient,
//   dehydrate,
//   HydrationBoundary,
// } from "@tanstack/react-query";
// import { fetchNoteById } from "@/lib/api";
// import NotePreview from "../../default";

// type Props = {
//   params: Promise<{ id: string }>;
// };

// export default async function NoteDetailsModal({ params }: Props) {
//   const { id } = await params;
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery({
//     queryKey: ["note", id],
//     queryFn: () => fetchNoteById(id),
//   });

//   return (
//     <HydrationBoundary state={dehydrate(queryClient)}>
//       <NotePreview />
//     </HydrationBoundary>
//   );
// }

import NotePreview from "./NotePreview";

export default function NoteDetailsModal() {
  return <NotePreview />;
}
