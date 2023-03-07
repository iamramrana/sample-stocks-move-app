import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import MovedStocks from "./containers/moved-stocks/MovedStocks";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyStocks from "./containers/my-stocks/MyStocks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyStocks />,
  },
  {
    path: "/moved-stocks",
    element: <MovedStocks />,
  },
]);
function App() {
  return (
    <div className="">
      <Header />
      <main style={{ marginTop: "20px" }}>
        <Container>
          <RouterProvider router={router} />
        </Container>
      </main>
    </div>
  );
}

export default App;
