import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import {useState}  from "react";

interface AssignmentProps {
  inputText: string;
}

const Assignment: React.FC<AssignmentProps> = ({ inputText }) => {
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer}>
        <div />
      </button>

      <p>{ inputText }</p>

      <button className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}

export default Assignment;

// function ListGroup(props: Props) {
//   const items: string[] = ["hey", "cool"];
//   const [selectedIndex, setSelectedIndex] = useState(-1);
//   const handleClick = (index: number) => setSelectedIndex(index);
//   const getSelectedIndex = (i: number) =>
//     selectedIndex === i ? "list-group-item active" : "list-group-item";
//   return (
//     <>
//       <h1>List</h1>
//       {items.length === 0 ? <p>No items</p> : null}
//       <ul className="list-group">
//         {items.map((item, i) => (
//           <li
//             onClick={() => handleClick(i)}
//             className={getSelectedIndex(i)}
//             key={item}
//           >
//             {item}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }