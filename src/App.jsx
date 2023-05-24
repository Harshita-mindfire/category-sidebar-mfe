import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import axios from "axios";

function App() {
  const [categories, setCategories] = useState([
    "Top Stories",
    "Sports",
    "Business",
    "Science",
  ]);
  useEffect(() => {
    // const getAllCategories = async () => {
    //   const categories = await axios.get(
    //     "https://jsonplaceholder.typicode.com/users"
    //   );
    //   setCategories(categories.data);
    // };
    // getAllCategories();
  }, []);
  return <Sidebar categories={categories} />;
}
ReactDOM.render(<App />, document.getElementById("app"));
export default App;
