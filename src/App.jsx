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
      <RouterProvider router={portfolioRouter} />
    </>
  );
}

export default App;
