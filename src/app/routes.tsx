import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Tracker } from "./pages/Tracker";
import { Documents } from "./pages/Documents";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "tracker", Component: Tracker },
      { path: "documents", Component: Documents },
    ],
  },
]);