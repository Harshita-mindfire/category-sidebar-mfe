import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import axios from "axios";
import Sidebar from "./components/Sidebar/Sidebar";
import { sortCategories } from "./utility";
import { ErrorBoundary } from "./components/ErrorBoundary";
import Fallback from "./components/Fallback/Fallback";
import Styles from "./App.styles";

function App() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const url = "http://localhost:3001/api/v1/category";

  useEffect(() => {
    const getAllCategories = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(url);
        const categoryArr = response.data.data.map((item) => item.title);
        if (categoryArr.length > 0) {
          const sortedCategories = sortCategories(categoryArr);
          setCategories(sortedCategories);
        }
      } catch (err) {
        setCategories([]);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getAllCategories();
  }, []);

  return (
    <Drawer variant="permanent" sx={Styles.drawer}>
      <Toolbar sx={Styles.toolbar} />
      {isError ? (
        <Fallback />
      ) : isLoading ? (
        <Box sx={Styles.box}>
          <CircularProgress />
        </Box>
      ) : (
        <Sidebar categories={categories} />
      )}
    </Drawer>
  );
}
ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById("app")
);

export default App;
