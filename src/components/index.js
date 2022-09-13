import { useContext, useState } from "react";
import ButtonComponent from "./tagComponents/Button";
import InputComponent from "./tagComponents/Input";
import ParagraphComponent from "./tagComponents/Paragraph";
import Paper from "@mui/material/Paper";
import { Input, TextareaAutosize } from "@mui/material";
import { StyleContxt } from "../Context/styleContext";
import Draggable from "react-draggable";
const SelectedComponent = ({ tagType, check }) => {
  const {
    setTitle,
    setParagraph,
    setInput,
    setButton,
    input,
    position,
    setPosition,
  } = useContext(StyleContxt);
  const [tagId, setTagId] = useState("");
  const handleInput = (e, tag) => {
    // const id = tag.id;
    setTagId(tag.id);
    setInput(e.target.value);
    tagType
      .filter((tags) => tags.id === tagId)
      .map((tag) => (tag.value = input));
  };
  const eventHandler = (data) => {
    // console.log('Event Type', e.type);
    // setTagId(tag.id);
    // let posX = data?.lastX;
    // let posY = data?.lastY;
    setPosition({ x: data.x, y: data.y });
    console.log(data.x, data?.y);
    // setPosition({ x: 0, y: 0 })
  };
  return (
    <>
      {!check ? (
        <>
          {tagType?.map((tag) => (
            <>
              {tag.item.tag === "input" ? (
                <Draggable
                  defaultPosition={{ x: Number(tag?.x), y: Number(tag?.y) }}
                  // grid={[50,50]}
                  onMouseDown={eventHandler}
                  onStart={eventHandler}
                  onDrag={eventHandler}
                  onStop={eventHandler}
                >
                  <Paper
                    style={{ padding: (15, 15), width: 100, margin: (12, 12) }}
                  >
                    <Input
                      placeholder={tag.value === "" ? "your input" : tag.value}
                      onChange={(e) => {
                        handleInput(e, tag);
                      }}
                    />
                  </Paper>
                </Draggable>
              ) : tag.item.tag === "p" ? (
                <>
                  <Draggable
                    defaultPosition={{ x: Number(tag?.x), y: Number(tag?.y) }}
                    onMouseDown={eventHandler}
                    onStart={eventHandler}
                    onDrag={eventHandler}
                    onStop={eventHandler}
                  >
                    <Paper style={{ width: 600, margin: (12, 12) }}>
                      <TextareaAutosize
                        style={{ width: 500, height: 100 }}
                        placeholder={
                          tag.value === "" ? "your paragraph" : tag.value
                        }
                        onChange={(e) => handleInput(e, tag)}
                      />
                    </Paper>
                  </Draggable>
                </>
              ) : (
                tag.item.tag === "button" && (
                  <Draggable
                    defaultPosition={{ x: Number(tag?.x), y: Number(tag?.y) }}
                    onMouseDown={eventHandler}
                    onStart={eventHandler}
                    onDrag={eventHandler}
                    onStop={eventHandler}
                  >
                    <Paper
                      style={{
                        padding: (12, 12),
                        width: 100,
                        margin: (12, 12),
                        border: "2px solid",
                      }}
                    >
                      <Input
                        placeholder={
                          tag.value === "" ? "button name" : tag.value
                        }
                        onChange={(e) => handleInput(e, tag)}
                      />
                    </Paper>
                  </Draggable>
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
                  <InputComponent tag={tag} id={tagId} />
                ) : tag.item.tag === "p" ? (
                  <ParagraphComponent tag={tag} id={tagId} />
                ) : (
                  tag.item.tag === "button" && (
                    <ButtonComponent tag={tag} id={tagId} />
                  )
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
