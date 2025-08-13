// import { getCategories } from "@/lib/api";
// import Link from "next/link";

// const Sidebar = async () => {
//   const categories = await getCategories();
//   return (
//     <div>
//       <h2>Categories</h2>
//       <hr />
//       <ul style={{ fontSize: "10px" }}>
//         <Link href={`/notes/filter/all`}>All</Link>
//         {categories.map((cat) => (
//           <li key={cat.id}>
//             <Link href={`/notes/filter/${cat.id}`}>{cat.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

import Link from "next/link";
import { getCategories } from "@/lib/api";
import css from "./SidebarNotes.module.css";

const NotesSidebar = async () => {
  const categories = await getCategories();

  return (
    <ul className={css.menuList}>
      <li className={css.menuItem}>
        <Link href={`/notes/filter/All`} className={css.menuLink}>
          All notes
        </Link>
      </li>
      {categories.map((category) => (
        <li key={category.id} className={css.menuItem}>
          <Link
            href={`/notes/filter/${category.name}`}
            className={css.menuLink}
          >
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NotesSidebar;
