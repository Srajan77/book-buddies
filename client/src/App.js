import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import BookOrder from "./pages/BookOrder";
import CreateBook from "./pages/CreateBook";
import  ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import OrderDetails from "./pages/OrderDetails";
import SavedBook from "./pages/SavedBook";
import Navbar from "./components/Navbar";
import ClgStudyMaterial from './pages/ClgStudyMaterial';
import Page1 from "./pages/SubPages/Page1";
import Page2 from './pages/SubPages/Page2';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/saved-book" element={<SavedBook />} />
          <Route path="/create-book" element={<CreateBook />} />
          <Route path="/order" element={<BookOrder />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/order-details" element={<OrderDetails />} />
          <Route path="/study-material" element={<ClgStudyMaterial />} />
          <Route path="study-material/study-material-page1" element={<Page1 />} />
          <Route path="/study-material-page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
