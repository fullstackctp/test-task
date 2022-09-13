import { Button, Paper } from "@mui/material";
import { useContext, useEffect } from "react";
import { StyleContxt } from "../../Context/styleContext";
const ButtonComponent = ({ tag, id }) => {
  const { position } = useContext(StyleContxt);
  const arrayOfTags = [];
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
          // width: 300,
          position: "absolute",
          marginLeft: tag.x,
          marginTop: tag.y,
        }}
      >
        {[tag]?.map((tag) => (
          <Button
            style={{
              width: 100,
              heigth: 150,
              border: "2px solid",
            }}
            onClick={() => alert("button clicked")}
          >
            {tag.value === "" ? "Button" : tag.value}
          </Button>
        ))}
      </Paper>
    </>
  );
};
export default ButtonComponent;
