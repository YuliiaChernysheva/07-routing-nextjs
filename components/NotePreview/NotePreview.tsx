"use client";

import Modal from "@/components/Modal/Modal";

import css from "./PostPreview.module.css";
// import { useEffect } from "react";
import { useParams } from "next/navigation";
import { fetchNoteById } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import Router from "next/router";

export default function PostPreviewClient() {
  const { noteId } = useParams<{ noteId: string }>();

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
    Router.back();
  };

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
      <div className={css.post}>
        <div className={css.wrapper}>
          <div className={css.header}>
            <h2>Post title</h2>
          </div>

          <p className={css.content}>Post body</p>
        </div>
        <p className={css.user}>User name</p>
      </div>
    </Modal>
  );
}
