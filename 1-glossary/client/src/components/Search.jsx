import React from "react"

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    let userInput = this.state.value
    this.props.handleSearchSubmit(userInput);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
        <input type="submit" value="Search" />
      </form>
    )
  }
}

export default Search;