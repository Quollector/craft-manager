import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Dashboard from "./Pages/Home/Dashboard/Dashboard"
import ItemsList from './Pages/ItemsList/ItemsList';
import Ressources from './Pages/Ressources/Ressources';
import Cart from './Pages/Cart/Cart';
import Options from './Pages/Options/Options';

function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/items" element={<ItemsList />}/>
            <Route path="/ressources" element={<Ressources />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/options" element={<Options />}/>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
