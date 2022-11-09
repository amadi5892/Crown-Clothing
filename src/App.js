import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';

import Home from './routes/home/home.component';

const Shop = () => {
  return (
    <div>
      <h1>I am the shop now page</h1>
    </div>
  );
}

const App = () => {
  return ( 
  <Routes>
    <Route path='/' element={<Navigation />} >
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
    </Route>
</Routes>
  );
};

export default App;
