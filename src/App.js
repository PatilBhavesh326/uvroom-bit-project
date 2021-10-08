import './App.css';
import HomePage from './pages/home-page/home-page.component';
import ShopPage from './pages/shop-page/shop-page.component';
//attaching application with router

import { Switch, Route } from 'react-router-dom';
import BookPage from './components/books/BookPage';

function App() {
  return (
    <div className='App'>
  
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/book' component={BookPage} />

    </div>
  )
}

export default App;
