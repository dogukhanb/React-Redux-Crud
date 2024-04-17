import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Header from "./components/Header";
import { Provider } from "react-redux";
import { store } from "./redux/store"; // Adjust the path

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route index path="/" element={<Product />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
