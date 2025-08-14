"use client";

import Link from "next/link";
import { useRef } from "react";
import css from "./TagsMenu.module.css";

const tags = ["All", "Work", "Personal", "Meeting", "Shopping", "Todo"];

const TagsMenu = () => {
  const menuRef = useRef<HTMLUListElement>(null);

  const handleLinkClick = () => {
    if (menuRef.current) {
      menuRef.current.style.display = "none";
    }
  };

  return (
    <div className={css.menuContainer}>
      <button className={css.menuButton}>Notes ▾</button>
      <ul ref={menuRef} className={css.menuList}>
        {tags.map((tag) => (
          <li key={tag} className={css.menuItem}>
            <Link
              href={`/notes/filter/${tag}`}
              className={css.menuLink}
              onClick={handleLinkClick}
            >
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TagsMenu;
