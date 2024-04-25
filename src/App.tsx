import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { PostsProvider } from "./context";

function App() {
  return (
    <PostsProvider>
      <RouterProvider router={router} />
    </PostsProvider>
  );
}

export default App;
