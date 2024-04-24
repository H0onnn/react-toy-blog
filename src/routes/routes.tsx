import { createBrowserRouter } from "react-router-dom";
import { PageLayout } from "../shared/components/layout";

import { Home } from "@/pages/Home";
import { New, PostDetail } from "@/pages/Post";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "post",
        children: [
          {
            path: ":id",
            element: <PostDetail />,
          },
          {
            path: "new",
            element: <New />,
          },
        ],
      },
    ],
  },
]);
