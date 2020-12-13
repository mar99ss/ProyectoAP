import Header from "./HeaderComponent";
import UserInformation from './UserInformationComponent';
import ListaTutoria from './ListaTutoriasComponent';
class Main extends Component {
  render() {
    const HomePage = () => {
      return (
        <div>
          <Header />
          <Home />
        </div>
      );
    };

    const LoginPage = () => {
        return(
            <Login />
        );
      } 
    const UserInformationPage = () => {
      return(
          <UserInformation/>
      );
    } 
    const ListaTutoriaPage = () => {
      return(
          <ListaTutoria/>
      );
    } 

    return (
      <div>  
          <Switch>
              <Route path='/home' component={HomePage} />
              <Route path='/login' component={LoginPage} />
              <Route path='/userinformation' component={UserInformationPage}/>
              <Route path='/listatutoria' component={ListaTutoriaPage}/>
              <Redirect to="/login" />
          </Switch>
        </div>  
    );
  }
}

export default withRouter(Main);
