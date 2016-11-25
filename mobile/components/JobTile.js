import React from 'react';
import BlueJobTile from './BlueJobTile';
import WhiteJobTile from './WhiteJobTile';


export default class JobTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    function isEven(n) {
      return n % 2 === 0;
    }
    if (isEven(this.props.job.id)) {
      return (
        <BlueJobTile job={this.props.job} pressJob={this.props.pressJob} />
      );
    } else {
      return (
        <WhiteJobTile job={this.props.job} pressJob={this.props.pressJob} />
      );
    }
  }
}
