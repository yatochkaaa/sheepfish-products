import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import AppRouter from "./components/AppRouter";
import { useAppDispatch } from "./store/hooks";
import { getAllCategories, getAllProducts } from "./store/action-creators/products";
const App: React.FC = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
