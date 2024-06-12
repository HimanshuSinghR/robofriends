import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { robots } from '../robots';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
class App extends Component{

    constructor(){
        super();
        this.state = {
            robots: [],
            searchField : ""
        }

        // console.log("constructor")
    }


    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>this.setState({robots: users}));
   
        // this.setState({robots:robots});
        // console.log('componentdidMount');
    }
    onSearchChange =(event)=>{
        this.setState({searchField:event.target.value});
        // console.log(event.target.value);
      
    }

    render(){
        {console.log(this.state.robots,"robots")};
        // console.log('render');
        const filteredRobots = this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })

        if(this.state.robots.length == 0){
            return <h1>Loading...</h1>
        }
        // console.log(filteredRobots);
        return (
            <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundary>
            </Scroll>
            </div>
    
    
        )
    }
  
}

export default App;