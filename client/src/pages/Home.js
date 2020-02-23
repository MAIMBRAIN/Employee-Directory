import React from 'react';
import API from "../utils/API";
import Jumbotron from '../components/Jumbotron';
import Table from '../components/Table';

class Home extends React.Component {

  state = {
    people: [],
    filtered: [],
    search: ""
  }

  componentDidMount() 
  {
    API.getPeople()
    .then(res => {
      console.log(res.data.results);
      
      this.setState({people: res.data.results, filtered: res.data.results})
    })
  }

  searchByFirstName = () => 
  {
    let sorted = this.state.people.filter((person) => 
    {
      return this.state.people.results.name.first.indexOf(this.state.search) !== -1
    })
    this.setState({filtered: [sorted]})
  }

  // Whenver a user types a character in the search box, we update our state
  onChangeHandler = e => 
  {
    const search = e.target.search;
    const value = e.target.value;
    this.setState({[search]: value});
    e.getPeople(search)
  }

  render() 
  {
    return (
      <div className= "container">
        <Jumbotron>
          search={this.state.search}
          onChangeHandler={this.onChangeHandler}
        </Jumbotron>
        <Table
          onClick={this.sortByFirstName}
          filtered={this.state.filtered}
        />
      </div>
    )
  }
}

export default Home;