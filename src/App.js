import Error404 from 'containers/errors/Error404';
import store from './store';
import { Provider } from 'react-redux';

import Home from 'containers/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='*' element= { <Error404/>} />
          <Route path='/' element= { <Home/>} />
        </Routes>
      </Router>
    </Provider>

  );
}

export default App;
