import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch } from 'react-router';
import Homepage from './Pages/Homepage';
import NavbarMovies from './components/NavbarMovies';
import SearchPage from './Pages/SearchPage';
import GenrePage from './Pages/GenrePage';

function App() {
  return (
    <div className="App">
      <NavbarMovies/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/search/:search" component={SearchPage} />
        <Route path="/genre" component={GenrePage} />
      </Switch>
    </div>
  );
}

export default App;
