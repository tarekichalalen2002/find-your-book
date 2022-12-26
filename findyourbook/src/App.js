import {BrowserRouter as Router,Navigate ,Routes,Route} from "react-router-dom"
import { useSelector } from "react-redux";
import LoginPage from "./scenes/LoginPage/LoginPage"
import ExplorePage from './scenes/Dashboard/ExplorePage';
import HomePage from "./scenes/Dashboard/HomePage";
import GlobalStatisticsPage from "./scenes/Dashboard/GlobalStatisticsPage";
import SavedPage from "./scenes/Dashboard/SavedPage";
import PersonalStatisticsPage from "./scenes/Dashboard/PersonalStatisticsPage";
import PreferencesPage from "./scenes/Dashboard/PreferencesPage";
import BookPage from "./scenes/Dashboard/BookPage";
import {useEffect} from "react";
import AuthorPage from "./scenes/Dashboard/AuthorPage"

function App() {
  const state = useSelector((state) => state);
  const darkMode = (state.mode === "dark");
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
          <Route path="/authors/:id" element={<AuthorPage/>} />
          <Route path="/users/:id/home" element={<HomePage/>}/>
          <Route path="/users/:id/globalStatistics" element={<GlobalStatisticsPage/>}/>
          <Route path="/users/:id/personalStatistics" element={<PersonalStatisticsPage/>}/>
          <Route path="/users/:id/saved" element={<SavedPage/>}/>
          <Route path="/users/:id/preferences" element={<PreferencesPage/>}/>
          <Route path="/books/:id" element={<BookPage/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
