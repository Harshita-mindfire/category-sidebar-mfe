const DRAWER_WIDTH = 240;

const style = {
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
    [`& .MuiDrawer-paper`]: {
      width: DRAWER_WIDTH,
      boxSizing: "border-box",
    },
  },
  primaryTypographyProps: {
    align: "center",
    fontSize: "0.9rem",
  },
};

export default style;
