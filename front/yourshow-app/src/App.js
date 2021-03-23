import logo from './logo.svg';
import './App.css';
import loginForm from "./components/loginform"
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import UserFormPage from "./screen/login/userlogin";
import AdminFormPage from "./screen/login/adminlogin";
import RegisterFormPage from "./screen/login/register";
import Home from "./screen/home/home";
import AHome from "./screen/home/ahome";
import Movies from "./screen/movies/movies";
import Payment from "./screen/movies/payment";
import Rent from "./screen/movies/rent";
import Profile from "./screen/profile/profile";
import AProfile from "./screen/profile/aprofile";
import AMovies from "./screen/movies/amovies";
import MovieFormPage from "./screen/movies/addmovie";
import TvSeries from "./screen/tvseries/tvseries";
import Movie from "./screen/movies/movie";
import AMovie from "./screen/movies/amovie";
import MoviesBought from "./screen/profile/moviesbought";
import MoviesRent from "./screen/profile/moviesrent";

function App() {
  return (
  	<Router>
  		<Switch>
  			<Route exact path={"/"} component={UserFormPage} />
			<Route path={"/admin/login"} component={AdminFormPage} />
			<Route path={"/register"} component={RegisterFormPage} />
			<Route path={"/home"} component={Home} />
			<Route path={"/profile/bought_movies"} component={MoviesBought} />
			<Route path={"/profile/rented_movies"} component={MoviesRent} />
			<Route path={"/admin/movies/register"} component={MovieFormPage} />
			<Route path={"/admin/movies/:id"} component={AMovie} />
			<Route path={"/movies/:id/payment"} component={Payment} />
			<Route path={"/movies/:id/rent"} component={Rent} />
			<Route path={"/movies/:id"} component={Movie} />
			<Route path={"/movies"} component={Movies} />
			<Route path={"/tvseries"} component={TvSeries} />
			<Route path={"/admin/movies"} component={AMovies} />
			<Route path={"/admin/home"} component={AHome} />
			<Route path={"/profile"} component={Profile} />
			<Route path={"/admin/profile"} component={AProfile} />
		</Switch>
  	</Router>
  );
}

export default App;
