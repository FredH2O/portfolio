import MainLayout from "./layout/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const portfolioRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{}],
  },
]);

function App() {
  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;
