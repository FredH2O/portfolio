import MainLayout from "./layout/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OtherProjectsPage from "./pages/OtherProjectsPage";
import HomePage from "./pages/HomePage";

const portfolioRouter = createBrowserRouter(
  [
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "Other-Projects",
          element: <OtherProjectsPage />,
        },
      ],
    },
  ],
  { basename: "/portfolio" }
);

function App() {
  return (
    <>
      <RouterProvider router={portfolioRouter} />
    </>
  );
}

export default App;
