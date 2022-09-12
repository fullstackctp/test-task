import { useContext } from "react";
import ButtonComponent from "./tagComponents/Button";
import InputComponent from "./tagComponents/Input";
import ParagraphComponent from "./tagComponents/Paragraph";
import Paper from "@mui/material/Paper";
import { Input, TextareaAutosize } from "@mui/material";
import { StyleContxt } from "../Context/styleContext";
const SelectedComponent = ({ tagType, check }) => {
  const { setTitle, setParagraph, setInput, setButton, input } =
    useContext(StyleContxt);
  const handleInput = (e, tag) => {
    const id = tag.id;
    setInput(e.target.value);
    tagType.filter((tags) => tags.id === id).map((tag) => (tag.value = input));
  };
  return (
    <>
      {!check ? (
        <>
          {tagType?.map((tag) => (
            <>
              {tag.item.tag === "input" ? (
                <Paper style={{ padding: (15, 15) }}>
                  <Input
                    placeholder={"your input"}
                    onChange={(e) => {
                      handleInput(e, tag);
                    }}
                  />
                </Paper>
              ) : tag.item.tag === "p" ? (
                <>
                  <Input
                    placeholder="Paragraph title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <Paper>
                    <TextareaAutosize
                      style={{ width: 500, height: 100 }}
                      placeholder="Your paragraph"
                      onChange={(e) => setParagraph(e.target.value)}
                    />
                  </Paper>
                </>
              ) : (
                tag.item.tag === "button" && (
                  <Paper style={{ padding: (12, 12) }}>
                    <Input
                      placeholder="your button"
                      onChange={(e) => setButton(e.target.value)}
                    />
                  </Paper>
                )
              )}
            </>
          ))}
        </>
      ) : (
        <>
          {tagType.length > 0 &&
            tagType.map((tag) => (
              <>
                {tag.item.tag === "input" ? (
                  <InputComponent tag={tag} />
                ) : tag.item.tag === "p" ? (
                  <ParagraphComponent />
                ) : (
                  tag.item.tag === "button" && <ButtonComponent />
                )}
              </>
            ))}
        </>
      )}
    </>
  );
};
// const stylez = {
//   color: "#fff",
//   BackgroundColor: "#fff",
//   fontSize: "12",
// };
export default SelectedComponent;
