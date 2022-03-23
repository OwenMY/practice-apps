import React from "react";
import GlossaryList from './GlossaryList.jsx';
import Search from './Search.jsx';
import AddWord from './AddWord.jsx';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      glossaryList: [{ word: 'chad', definition: 'Awesome'}]
    }
  };

  render() {
    return (
      <div>
      <h1>Welcome to the Urban Glossary!!</h1>
      <div>
        <Search />
        <AddWord />
       </div>
        <GlossaryList list={this.state.glossaryList}/>
      </div>
    )
  }
}

export default App;