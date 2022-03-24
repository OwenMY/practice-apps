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
    console.log('We will update your definition to:', this.state.value)
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