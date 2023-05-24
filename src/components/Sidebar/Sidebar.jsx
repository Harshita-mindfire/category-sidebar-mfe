import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import React, { useEffect } from "react";
import Styles from "./Sidebar.styles";

const USER_CAT_PREFERENCE = "userCategoryPreference";

export default function Sidebar({ categories }) {
  const [selectedItems, setSelectedItems] = React.useState(
    categories.slice(0, 1)
  );

  useEffect(() => {
    const userPreference = localStorage.getItem(USER_CAT_PREFERENCE);
    if (userPreference) {
      setSelectedItems(userPreference.split(","));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(USER_CAT_PREFERENCE, selectedItems);
  }, [selectedItems]);

  const handleItemClick = (text) => {
    if (selectedItems.includes(text)) {
      setSelectedItems(selectedItems.filter((item) => item !== text));
    } else {
      setSelectedItems((prevItems) => [...prevItems, text]);
    }
  };

  const isItemSelected = (text) => selectedItems.includes(text);

  return (
    <Drawer variant="permanent" sx={Styles.drawer}>
      <Toolbar sx={{ paddingTop: "2rem" }} />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {categories.map((text) => (
            <ListItem
              key={text}
              disablePadding
              sx={{ paddingBottom: "0.5rem" }}
            >
              <ListItemButton
                sx={{ paddingBottom: "1rem" }}
                selected={isItemSelected(text)}
                onClick={() => handleItemClick(text)}
              >
                <ListItemText
                  primary={text}
                  primaryTypographyProps={Styles.primaryTypographyProps}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
