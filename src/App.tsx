import GlobalStyle from "./components/Common.styled";
import "./assets/fonts.css";

import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom";

import { ActsPage, Components, DesignSystemTest, Error404, Home, List, Register, SelectPage, Test } from "./pages";
import Layout from "./layout/Layout";

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/acts" element={<ActsPage />} />
    <Route path="/ds" element={<DesignSystemTest />} />
    <Route path="/components" element={<Components />} />
    <Route path="/list" element={<List />} />
    <Route path="/form" element={<Register />} />
    <Route path="/select" element={<SelectPage />} />
    <Route path="/test" element={<Test />} />
    <Route path="*" element={<Error404 />} />
  </Route>,
);
const router = createBrowserRouter(routes);

const App = () => (
  <>
    <GlobalStyle />
    <RouterProvider router={router} />
  </>
);

export default App;
