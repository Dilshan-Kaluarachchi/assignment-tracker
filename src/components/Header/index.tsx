import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from "react";

interface HeaderProps {
  onClick: (text: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onClick }) => {
  const [inputText, setInputText] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);

  const handleInputChange = (event: any) => {
    const text = event.target.value;
    setInputText(text);
    // onClick(text); // Call the callback function
  };

  // Function to handle button click
  const handleAddItem = () => {
    const text = inputText;
    // setInputText(text);
    onClick(text); // Call the callback function
    // Add input text to the items list
    setItems([...items, inputText]);
    // Clear the input field
    setInputText("");
  };

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input
          placeholder="Add a new assignment"
          type="text"
          onChange={handleInputChange}
          value={inputText}
        />
        <button disabled={!inputText.trim()} onClick={handleAddItem}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
};

export default Header;
