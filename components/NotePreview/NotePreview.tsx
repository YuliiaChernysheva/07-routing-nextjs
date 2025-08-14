"use client";

import Modal from "@/components/Modal/Modal";
import css from "./PostPreview.module.css";
import { useParams, useRouter } from "next/navigation";
import { fetchNoteById } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export default function PostPreviewClient() {
  const { noteId } = useParams<{ noteId: string }>();
  const router = useRouter();

  const {
    data: note,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["note", noteId],
    queryFn: () => fetchNoteById(noteId),
    refetchOnMount: false,
  });

  const handleClickBack = () => {
    router.back();

    if (isLoading) {
      return <p>Loading, please wait...</p>;
    }

    if (isError || !note) {
      return <p>Something went wrong.</p>;
    }

    return (
      <Modal onClose={handleClickBack}>
        <button className={css.backBtn} onClick={handleClickBack}>
          ← Back
        </button>

        <div className={css.container}>
          <div className={css.item}>
            <div className={css.header}>
              <h2>{note.title}</h2>
              <span className={css.tag}>{note.tag}</span>
            </div>

            <p className={css.content}>{note.content}</p>

            <p className={css.date}>
              Created: {new Date(note.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </Modal>
    );
  };
}
