import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import Layout from "./components/layout";
import Page1 from "./components/page1";
import Page2 from "./components/page2";

function App() {
    return (
        <div className="App">
            {/* React, Materiel ui, react-html2pdg*/}

            {/* colone de gauche*/}
            {/* détails perso - User */}
            {/* competences - skills */}
            {/* langues - skills */}
            {/* interest */}

            {/* colone de droite */}
            {/* profil */}
            {/* formations */}
            {/* exp */}
            {/* light/dark mode */}
            {/* pdf */}
            <Routes>
                <Route>
                    <Route path="/page1" element={<Page1 />} />
                    <Route path="/page2" element={<Page2 />} />

                </Route>
            </Routes>
            <div className="font-chivo text-3xl italic bg-amber-600">TEST</div>
        </div>
    );
}

export default App;
