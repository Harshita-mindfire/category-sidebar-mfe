import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import React, { useEffect } from "react";
import Styles from "./Sidebar.styles";
import PubSub from "news_layout/PubSub";

const USER_CAT_PREFERENCE = "userCategoryPreference";

export default function Sidebar({ categories }) {
  const [selectedItems, setSelectedItems] = React.useState(
    localStorage.getItem(USER_CAT_PREFERENCE) ||
      categories.filter((category) => category === "Top Stories")
  );
  useEffect(() => {
    const userPreference = localStorage.getItem(USER_CAT_PREFERENCE);
    if (userPreference) {
      setSelectedItems(userPreference.split(","));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(USER_CAT_PREFERENCE, selectedItems);
    PubSub.fire("agency-category-filter", selectedItems);
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
    <Box sx={Styles.box}>
      <List>
        {categories.map((text) => (
          <ListItem key={text} disablePadding sx={Styles.listItem}>
            <ListItemButton
              sx={Styles.listItemButton}
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
  );
}
