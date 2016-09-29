import React from 'react';
import boardActions from '../board_actions';

class Dialog extends React.Component{
  constructor(props){
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({value: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    if(!this.state.value) {return}
    boardActions.submitName(this.state.value);
    this.state.value = '';
  }

  render(){
    return (
      <div className={'dialog' + (this.props.message ? '' : ' hide')}>
        <div className='dialog_box'>
          <form onSubmit={this.handleSubmit}>
            <label className='dialog_message'>{this.props.message}</label>
            <input
              className='dialog_input' name='value' type='text' value={this.state.value} onChange={this.handleChange}
              ref={function(input){
                if(input !== null){input.focus()}
              }} />
            <button type="submit" className='dialog_btn'>OK</button>
          </form>
        </div>
      </div>
    )
  }
}

module.exports = Dialog;