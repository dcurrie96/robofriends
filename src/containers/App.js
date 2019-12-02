import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { robots } from '../robots';


class App extends React.Component{
  constructor(){
    super();
    this.state={
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response =>response.json())
    //   .then(users => this.setState({robots: users}));
    this.setState({
      robots: robots,
    });
  }
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});

    console.log(event.target.value);
    //console.log(filteredBots)
  }

  filterTheBots = (robot) => { //Filter returns based on username OR name (Mark's idea)
   return ((robot.name.toLowerCase().includes(this.state.searchfield) || robot.username.toLowerCase().includes(this.state.searchfield)) ? true : false);
  }
  render(){
    const filteredBots = this.state.robots.filter((robot) => {
      return this.filterTheBots(robot);
    });
    if (this.state.robots.length === 0){
      return <h1>Loading</h1>
    }else {
    return(
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll><CardList robots={filteredBots}/></Scroll>
      </div>
    );
  }
  }


}

export default App;
