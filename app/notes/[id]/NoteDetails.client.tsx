"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import css from "./NoteDetails.module.css";
// import { useState } from "react";
import { useParams } from "next/navigation";

const NoteDetailsClient = () => {
  const { id } = useParams<{ id: string }>();
  // const router = useRouter();

  // const parsedId = Number(id);

  const {
    data: note,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  // const handleClickBack = () => {
  //   router.back();
  // };

  // const [isEdit, setIsEdit] = useState(false);

  // const handleEdit = () => {
  //   setIsEdit(true);
  // };

  if (isLoading) {
    return <p>Loading, please wait...</p>;
  }

  if (isError || !note) {
    return <p>Something went wrong.</p>;
  }

  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note?.title}</h2>
        </div>
        <p className={css.content}>{note?.content}</p>
        <p className={css.date}>{note?.createdAt}</p>
      </div>
    </div>
  );
};

export default NoteDetailsClient;
