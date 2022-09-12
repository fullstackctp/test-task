import { useState, createContext } from "react";
export const StyleContxt = createContext();
export const StyleProvider = (props) => {
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [button, setButton] = useState("");
  const [input, setInput] = useState("");
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
      }}
    >
      {props.children}
    </StyleContxt.Provider>
  );
};
