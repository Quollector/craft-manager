import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Dashboard from "./Pages/Home/Dashboard"
import ItemsList from './Pages/ItemsList/ItemsList';
import Resources from './Pages/Resources/Resources';
import Cart from './Pages/Cart/Cart';
import Options from './Pages/Options/Options';
import "./App.css"

function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/items" element={<ItemsList />}/>
            <Route path="/resources" element={<Resources />}/>
            {/* <Route path="/cart" element={<Cart />}/>
            <Route path="/options" element={<Options />}/> */}
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
