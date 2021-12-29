import {Routes,Route} from 'react-router-dom'
import CheckoutPage from './components/CheckoutPage.jsx'
import HomePage from './components/HomePage.jsx';
function App() {
  return (
    <Routes>
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
}

export default App;
