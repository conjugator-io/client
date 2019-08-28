import React from 'react'
import { Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import HomePage from './components/HomePage'
// import UserProfilePage from './components/UserProfilePage'
// import MyProfilePage from './components/MyProfilePage'
import Navbar from './components/Navbar'
import Axios from 'axios'
import Facebook from "./components/FacebookLogin"

class App extends React.Component {

  state = {
    users: [],
  }

  componentDidMount(){
    Axios.get('https://sp-conjugator-be.herokuapp.com/api/users')
    .then(result => {
      // If successful, load users array with profile data
      this.setState({
        users: result.data
      })
    })
    .catch(error => {
        console.log('ERROR: ', error)
      })
  }

  render(){
    const { users } = this.state;
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={(props) => <HomePage users={users}/>} />
          {/* <Route path="/users/:id" component={UserProfilePage} />
          <Route exact path="/profile" component={MyProfilePage} /> */}
        </Switch>
      </>
    )
  }
}

export default App;