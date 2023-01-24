import { Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import Page2 from "./components/page2";
import Nav from "./components/Nav";
import { AuthContextProvider } from "./context/auth";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <div className="w-full font-chivo border-0 outline-0 box-border list-none no-underline">
          <div className="flex justify-items-center">
            <Nav />
          </div>

          <Routes>
            <Route>
              <Route path="/" element={<Auth />} />
              <Route path="/page2" element={<Page2 />} />
            </Route>
          </Routes>
        </div>
      </AuthContextProvider>
    </div>
  );
}

export default App;
