import { createBrowserRouter } from  "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import ListItems from "./pages/items/ListItems";
import CreateItem from "./pages/items/CreateItem";
import ShowItem from "./pages/items/ShowItem";
import UpdateItem from "./pages/items/UpdateItem";
import ItemsLayout from "./pages/items/ItemsLayout";


const router = createBrowserRouter([{
  path: "/", // localhost: 3000/
  element: <RootLayout />,
  children: [
    {index: true, element: <Home />},
    {
      path: "items", // localhost: 3000/items
      element: <ItemsLayout />,
      children: [
        {index: true, element: <ListItems />},
        {path: "new", element: <CreateItem />},
        {path: ":id", element: <ShowItem />},
        {path: ":id/update", element: <UpdateItem />}
      ]
    }
  ]
}])

export default router