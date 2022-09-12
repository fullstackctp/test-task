import { Button, Dialog, Grid, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import Paper from "@mui/material/Paper";
import { Fragment, useState } from "react";
import SelectedComponent from "../components";
const HomeScreen = () => {
  const chooseFromArray = [
    { tag: "input", name: "Input" },
    { tag: "button", name: "Button" },
    { tag: "p", name: "Paragraph" },
  ];
  const [selectedTag, setSelectedTag] = useState({});
  const [allTag, setAllTag] = useState([]);
  const [showPreview, setShowPreview] = useState(false);
  const settingAlltag = (item) => {
    setSelectedTag(item);
    const data = allTag;
    data.push({ item, id: nanoid(), value: "" });
    setAllTag(data);
  };
  return (
    <>
      <h1>React App</h1>
      <Typography>Choose layout</Typography>
      <Button onClick={() => setShowPreview((prv) => !prv)}>Preview</Button>
      <Button onClick={() => setAllTag([])}>Reset</Button>
      <Grid container>
        <Grid
          item
          xs={10}
          style={{
            margin: (12, 12),
            border: "1px solid",
            padding: (12, 12),
            height: window.innerHeight,
          }}
        >
          <SelectedComponent tagType={allTag} check={showPreview} />
        </Grid>
        <Grid item xs={1}>
          <Typography>Choose</Typography>
          {chooseFromArray.map((item) => (
            <Fragment key={item.tag}>
              <Paper style={{ padding: (12, 12), marginTop: 12 }}>
                <Button onClick={() => settingAlltag(item)}>{item.name}</Button>
              </Paper>
            </Fragment>
          ))}
        </Grid>
      </Grid>
      <Dialog
        fullScreen
        open={showPreview}
        onClose={() => setShowPreview(false)}
        style={{ margin: (12, 12), border: "1px solid" }}
      >
        <Button onClick={() => setShowPreview(false)}>Close</Button>
        <SelectedComponent tagType={allTag} check={showPreview} />
      </Dialog>
    </>
  );
};
export default HomeScreen;
