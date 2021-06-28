import './App.css';
import CocktailsList from './Components/CocktailsList'
import {Switch,Route} from 'react-router-dom'
import Details from './Components/Details';

function App() {
  return (
    <div className="App">
      
      <Switch>  
        <Route exact path="/" component={CocktailsList} />
    <Route path="/cocktail/:id" component={Details}/>
    </Switch>     
    </div>
  );
}

export default App;
