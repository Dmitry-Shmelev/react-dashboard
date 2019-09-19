import React from 'react'
import { connect } from 'react-redux';
import Calendar from 'react-calendar';
 

class CalendarBox extends React.Component {

  onChange(date){
    console.log(date);
  }

  render(){
    let date = new Date();

    return (
      <div>
        <Calendar
          onChange={this.onChange(this)}
          value={date}
        />
      </div>
    )
  }
}


function getState(state){

  return {
    state: state
  };
}

export default connect(getState)(CalendarBox);

