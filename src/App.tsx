import Header from "./components/Header";
import Assignments from "./components/Assignments";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState<string>("");
  // Callback function to update inputText state
  const handleInputChange = (text: string) => {
    setInputText(text);
  };

  return (
    <>
      <Header onClick={handleInputChange} />
      <Assignments inputText={inputText} />
    </>
  );
}

export default App;
