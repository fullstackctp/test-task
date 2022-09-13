import { Input, Paper } from "@mui/material";
import { useContext, useEffect } from "react";
import { StyleContxt } from "../../Context/styleContext";
const InputComponent = ({ tag, id }) => {
  const { input, setPosition, position } = useContext(StyleContxt);
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
          <Input
            placeholder={tag.value}
            style={{
              width: 200,
              margin: (12, 12),
            }}
          />
        ))}
      </Paper>
    </>
  );
};
export default InputComponent;
