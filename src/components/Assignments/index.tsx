import Assignment from "../Assignment";
import Header from "../Header";
import styles from "./assignments.module.css";
import { useState } from "react";

interface AssignmentsProps {
  inputText: string;
}

const Assignments: React.FC<AssignmentsProps> = ({ inputText }) => {
  const [values, setValues] = useState<string[]>([]);

  // Function to update the array with the new value
  const addValueToArray = (value: string) => {
    setValues([...values, value]);
  };

  const items: string[] = ["hey", "cool"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const handleClick = (index: number) => setSelectedIndex(index);
  const getSelectedIndex = (i: number) =>
    selectedIndex === i ? "list-group-item active" : "list-group-item";

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>1</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>1 of 1</span>
        </div>
      </header>

      <div className={styles.list}>
        <ul className="list-group">
          {items.map((item, i) => (
            <li
              onClick={() => handleClick(i)}
              className={getSelectedIndex(i)}
              key={item}
            >
              <Assignment inputText={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Assignments;
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
