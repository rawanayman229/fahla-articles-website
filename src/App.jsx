import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AuthorProfile from "./page/AuthorProfile";
import Authors from "./page/AuthorsList"; // تأكد أن هذا الاستيراد موجود وصحيح

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/authors" element={<Authors />} />
            <Route path="/author/:id" element={<AuthorProfile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
