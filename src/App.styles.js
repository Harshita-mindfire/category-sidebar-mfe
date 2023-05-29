const DRAWER_WIDTH = 240;

const Styles = {
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
    [`& .MuiDrawer-paper`]: {
      width: DRAWER_WIDTH,
      boxSizing: "border-box",
    },
  },
  toolbar: { paddingTop: "2rem" },
  box: {
    width: DRAWER_WIDTH,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "6.5rem",
  },
};

export default Styles;
