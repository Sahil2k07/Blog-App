import { Outlet, createBrowserRouter } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import AuthContextProvider from "./context/AuthContext";
import VerifyEmail from "./pages/VerifyEmail";
import { Toaster } from "react-hot-toast";
import Blogs from "./pages/Blogs";
import PrivateRoute from "./components/Auth/PrivateRoute";
import ActiveRoute from "./components/Auth/ActiveRoute";
import UserBlogs from "./pages/UserBlogs";
import FullBlog from "./pages/FullBlog";
import UserFullBlog from "./pages/UserFullBlog";
import Publish from "./pages/Publish";
import UpdateBlog from "./pages/UpdateBlog";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <AuthContextProvider>
      <Navbar />

      <Outlet />

      <Toaster />
    </AuthContextProvider>
  );
}

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <ActiveRoute>
            <Login />
          </ActiveRoute>
        ),
      },
      { path: "signup", element: <Signup /> },
      { path: "verify-email", element: <VerifyEmail /> },
      {
        path: "blogs",
        element: (
          <PrivateRoute>
            <Blogs />
          </PrivateRoute>
        ),
      },
      {
        path: "my-blogs",
        element: (
          <PrivateRoute>
            <UserBlogs />
          </PrivateRoute>
        ),
      },
      {
        path: "blogs/:id",
        element: (
          <PrivateRoute>
            <FullBlog />
          </PrivateRoute>
        ),
      },
      {
        path: "myBlogs/:id",
        element: (
          <PrivateRoute>
            <UserFullBlog />
          </PrivateRoute>
        ),
      },
      {
        path: "publish",
        element: (
          <PrivateRoute>
            <Publish />
          </PrivateRoute>
        ),
      },
      {
        path: "updateBlog/:id",
        element: (
          <PrivateRoute>
            <UpdateBlog />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "*", element: <ErrorPage /> },
]);

export default AppRouter;
