import { Paper } from "@mui/material";
import { useContext } from "react";
import { TextareaAutosize } from "@mui/material";
import { StyleContxt } from "../../Context/styleContext";
const ParagraphComponent = () => {
  const { title, paragraph } = useContext(StyleContxt);
  return (
    <>
      <Paper>{title}</Paper>
      <TextareaAutosize style={{ width: 800, height: 100 }}>
        {paragraph}
      </TextareaAutosize>
    </>
  );
};
export default ParagraphComponent;
