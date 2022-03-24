import React from "react"

class EditForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    let currentWord = e.nativeEvent.path[2].children[0].innerText
    this.props.handlers[2](this.state.value, currentWord);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="update defintion..." value={this.state.value} onChange={this.handleChange.bind(this)}/>
        <input type="submit" value="update defintion" />
      </form>
    )
  }
};

export default EditForm;