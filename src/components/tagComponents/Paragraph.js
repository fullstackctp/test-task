import { Paper } from "@mui/material";
import { useContext, useEffect } from "react";
import { TextareaAutosize } from "@mui/material";
import { StyleContxt } from "../../Context/styleContext";
const ParagraphComponent = ({ tag, id }) => {
  const { position } = useContext(StyleContxt);
  const arrayOfTags = [];
  console.log("sukvv", tag.x, "and", tag.value, "also", tag);
  useEffect(() => {
    arrayOfTags.push(tag);
    arrayOfTags
      ?.filter((t) => t.id === id)
      .map((t) => {
        tag.x = Number(position.x) - 80;
        tag.y = Number(position.y) - 200;
      });
    console.log("tag", tag);
  }, [tag]);
  return (
    <>
      <Paper
        style={{
          width: 300,
          position: "absolute",
          marginLeft: tag.x,
          marginTop: tag.y,
        }}
      >
        {[tag].map((tag) => (
          <TextareaAutosize style={{ width: 800, height: 100 }}>
            {tag.value === "" ? "PARAGRAPH..." : tag.value}
          </TextareaAutosize>
        ))}
      </Paper>
    </>
  );
};
export default ParagraphComponent;
