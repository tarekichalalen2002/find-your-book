import {BrowserRouter as Router,Navigate ,Routes,Route} from "react-router-dom"
import {useMemo} from "react";
import { useSelector } from "react-redux";
import LoginPage from "./scenes/LoginPage/LoginPage"
import ExplorePage from './scenes/Dashboard/ExplorePage';
import HomePage from "./scenes/Dashboard/HomePage";
import CategoriesPage from "./scenes/Dashboard/CategoriesPage";
import SavedPage from "./scenes/Dashboard/SavedPage";
import BookPlansPage from "./scenes/Dashboard/BookPlansPage";
import PreferencesPage from "./scenes/Dashboard/PreferencesPage";
import BookPage from "./scenes/Dashboard/BookPage";
import { useDispatch } from "react-redux"
import { setLogin, setLogout, setMode } from "./state";
import {useEffect} from "react";


function App() {
  const state = useSelector((state) => state);
  const darkMode = (state.mode === "dark");
  console.log(state);
  useEffect(() => {
    darkMode ? document.body.style.backgroundColor = "#1e293b" : document.body.style.backgroundColor = "#f1f5f9";
  }, [darkMode]);
  return (
    <div
    
    >
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/users/:id/explore' element={<ExplorePage/>} />
          <Route path="/users/:id/home" element={<HomePage/>}/>
          <Route path="/users/:id/categories" element={<CategoriesPage/>}/>
          <Route path="/users/:id/saved" element={<SavedPage/>}/>
          <Route path="/users/:id/bookplans" element={<BookPlansPage/>}/>
          <Route path="/users/:id/preferences" element={<PreferencesPage/>}/>
          <Route path="/books/:id" element={<BookPage/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;