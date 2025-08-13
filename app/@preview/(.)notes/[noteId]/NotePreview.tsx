// "use client";

// import { useEffect, useState } from "react";
// import { useRouter, useParams } from "next/navigation";
// import Modal from "@/components/Modal/Modal";
// import { fetchNoteById } from "@/lib/api";
// import css from "./PostPreview.module.css";

// export default function NotePreviewClient() {
//   const router = useRouter();
//   const params = useParams();
//   const id = params?.id;

//   const [note, setNote] = useState<{
//     title: string;
//     content: string;
//     user: string;
//   } | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!id) return;
//     async function fetchNote() {
//       setLoading(true);
//       try {
//         const data = await fetchNoteById(id as string);
//         setNote(data);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchNote();
//   }, [id]);

//   const handleClose = () => {
//     router.back();
//   };

//   if (loading) return null;

//   return (
//     <Modal onClose={handleClose}>
//       <button className={css.backBtn} onClick={handleClose}>
//         ← Back
//       </button>
//       <div className={css.post}>
//         <div className={css.wrapper}>
//           <div className={css.header}>
//             <h2>{note?.title}</h2>
//           </div>
//           <p className={css.content}>{note?.content}</p>
//         </div>
//         <p className={css.user}>{note?.user}</p>
//       </div>
//     </Modal>
//   );
// }
