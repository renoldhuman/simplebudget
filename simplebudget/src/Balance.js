import React, { Component } from 'react';
import "./Balance.css";


class Balance extends Component {

  render() {
    return (
      <div className="BalanceCategory" id={this.props.id}>
        <div className="BalanceBox">
          <h1 className="BalanceTotal">{this.props.balance}</h1>
        </div>
        <p className="BalanceName">{this.props.categoryName}</p>
      </div>
    );
  }
}

export default Balance;