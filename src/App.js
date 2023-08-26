import Error404 from 'containers/errors/Error404';
import store from './store';
import { Provider } from 'react-redux';

import Home from 'containers/pages/Home';
import Casos from 'containers/pages/Casos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Carreras from 'containers/pages/Carreras';
import Contacto from 'containers/pages/Contacto';
import Services from 'containers/pages/Services';
import Blog from 'containers/pages/Blog';
import Nosotros from 'containers/pages/Nosotros';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='*' element= { <Error404/>} />
          <Route path='/' element= { <Home/>} />
          <Route path='/casos' element= { <Casos/>} />
          <Route path='/services' element= { <Services/>} />
          <Route path='/nosotros' element= { <Nosotros/>} />
          <Route path='/carreras' element= { <Carreras/>} />
          <Route path='/blog' element= { <Blog/>} />
          <Route path='/contacto' element= { <Contacto/>} />
        </Routes>
      </Router>
    </Provider>

  );
}

export default App;
