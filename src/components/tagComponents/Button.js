import { Button } from "@mui/material";
import { useContext } from "react";
import { StyleContxt } from "../../Context/styleContext";
const ButtonComponent = () => {
  const { button } = useContext(StyleContxt);
  return (
    <Button
      style={{ color: "red", width: 100 }}
      onClick={() => alert("button clicked")}
    >
      {button}
    </Button>
  );
};
export default ButtonComponent;
