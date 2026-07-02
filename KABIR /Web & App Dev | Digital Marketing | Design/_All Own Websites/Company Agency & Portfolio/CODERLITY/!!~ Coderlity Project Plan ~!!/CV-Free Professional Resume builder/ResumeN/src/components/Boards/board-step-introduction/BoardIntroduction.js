import React, { Component } from 'react';
import './BoardIntroduction.scss';
import PortfolioImage from '../../../assets/portfolio.png';
class BoardIntroduction extends Component {
  /// This  class have nextStep passed to it in props so we be able to navigate between steps 
  render() {
    return (
      <div className="board">
        <div className="introWrapper">
          <img className="introductionImage" src={PortfolioImage} alt="Portolio Img" />
          <button onClick={this.props.nextStep} className="btn-default">Select Template</button>
        </div>
        <div className="introFooter">
          All Rights Reserved.
            </div>
      </div>);
  };
}
export default BoardIntroduction;
