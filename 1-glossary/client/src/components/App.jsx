import React from "react";
import GlossaryList from './GlossaryList.jsx';
import Search from './Search.jsx';
import AddWord from './AddWord.jsx';
import axios from 'axios';

const url = 'http://localhost:3000/home';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      glossaryList: [{ word: 'chad', definition: 'Awesome', editView: false}]
    }
  };

  handleSearchSubmit(query) {
    console.log('You Clicked the Search Button!!')
  }

  handleEditClick(e) {
    let word = e.target.parentElement.children[0].innerText;
    let glossary = this.state.glossaryList;

    for (let i = 0; i < glossary.length; i++) {
      if (glossary[i].word === word) {
        glossary[i].editView = !glossary[i].editView;
        break;
      }
    }

    this.setState({ glossaryList: glossary});
  }

  handleDeleteClick(e) {
    let wordToDelete = e.target.parentElement.children[0].innerText;
    //Will need to refractor to update state upon delete
    axios.delete(url, { data: { word: wordToDelete } })
    .then((res) => console.log('Delete Connection Was Successful!'))
    .catch((err) => console.error('Delete Connection Failed'))
  }

  handleUpdateClick() {
    console.log('Will Update with POOP!');
  }

  handleAddWordSubmit(word, definition) {
    var description = definition
    if (description.length === 0) {
      description = 'Definition Unavailable';
    }

    let body = {
      word: word,
      definition: description
    };

    axios.post(url, body)
    .then((res) => console.log('POST REQUEST THAT ADDS SUCCESS!'))
    .catch((err) => console.error(err))
  }

  handleHomeButtonClick() {
    axios.get(url)
    .then((res) => console.log('GET REQUEST SUCCESS!!'))
    .catch((err) => console.log('GET REQUEST FAILED!'))
  }

  componentDidMount() {
    //Will need to refractor where state is set to all words and defintions
    axios.get(url)
    .then((res) => console.log('GET REQUEST SUCCESS!!'))
    .catch((err) => console.log('GET REQUEST FAILED!'))
  }

  render() {
    let handlers = [this.handleEditClick.bind(this), this.handleDeleteClick.bind(this), this.handleUpdateClick.bind(this)];
    return (
      <div>
      <h1>Welcome to the Urban Glossary!!</h1>
      <div>
        <button onClick={this.handleHomeButtonClick.bind(this)}>Home</button>
        <Search handleSearchSubmit={this.handleSearchSubmit.bind(this)}/>
        <AddWord handleAddWordSubmit={this.handleAddWordSubmit.bind(this)}/>
       </div>
        <GlossaryList list={this.state.glossaryList} handlers={handlers} />
      </div>
    )
  }
}

export default App;