import React from "react"

class AddWord extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      word: '',
      definition: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAddWordSubmit(this.state.word, this.state.definition);
  }

  handleWordChange(e) {
    this.setState({ word: e.target.value });
  }

  handleDefChange(e) {
    this.setState({ definition: e.target.value });
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Word:
            <input type="text" value={this.state.word} onChange={this.handleWordChange.bind(this)} />
          </label>
          <label>
            Definition:
            <input type="text" value={this.state.defintion} onChange={this.handleDefChange.bind(this)} />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

export default AddWord;