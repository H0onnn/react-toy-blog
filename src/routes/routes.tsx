import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { PageLayout } from "../shared/components/layout";
import { NotFound } from "@/shared/components/fallback";

const Home = lazy(() => import("@/pages/Home/Home"));
const PostDetail = lazy(() => import("@/pages/Post/PostDetail"));
const New = lazy(() => import("@/pages/Post/New"));
const Edit = lazy(() => import("@/pages/Post/Edit"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "post",
        children: [
          {
            path: ":id",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <PostDetail />
              </Suspense>
            ),
          },
          {
            path: "new",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <New />
              </Suspense>
            ),
          },
          {
            path: ":id/edit",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <Edit />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);
