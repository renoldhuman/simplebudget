import React, { Component } from 'react';
import Balance from './Balance';
// import "./BalanceContainer.css"


class BalanceContainer extends Component {


  render() {
    return (
      <div className="AllBalancesContainer">
      <Balance balance={this.props.userBalance.total} categoryName="Total" id="total" /> 
      <Balance balance={this.props.userBalance.tiedUp} categoryName="Tied Up" id="tiedUp" />
      <Balance balance={this.props.userBalance.disc} categoryName="Discretionary" id="discretionary" />
      </div>
    );
  }
}

export default BalanceContainer;