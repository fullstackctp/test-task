import { Input, Paper } from "@mui/material";
import { useContext } from "react";
import { StyleContxt } from "../../Context/styleContext";
const InputComponent = ({ tag }) => {
  const { input } = useContext(StyleContxt);
  const arrayOfTags = [];
  arrayOfTags.push(tag);
  return (
    <>
      <Paper
        style={{
          width: 300,
          // padding: (12, 12),
          margin: 12,
        }}
      >
        {arrayOfTags.map((tag) => (
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
