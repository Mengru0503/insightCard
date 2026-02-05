import { RouterProvider } from "react-router-dom";
import router from "./router";
import { TableProvider } from "./context/TableContext";

function App() {
  return (
    <TableProvider>
      <RouterProvider router={router} />
    </TableProvider>
  );
}

export default App;