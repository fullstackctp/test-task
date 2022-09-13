import { useState, createContext } from "react";
export const StyleContxt = createContext();
export const StyleProvider = (props) => {
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [button, setButton] = useState("");
  const [input, setInput] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  return (
    <StyleContxt.Provider
      value={{
        input,
        setInput,
        button,
        setButton,
        title,
        setTitle,
        paragraph,
        setParagraph,
        position,
        setPosition,
      }}
    >
      {props.children}
    </StyleContxt.Provider>
  );
};
