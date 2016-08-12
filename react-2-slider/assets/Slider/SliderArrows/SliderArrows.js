import React, { Component } from 'react';

/**
 * 左右轮播 控制按钮;
 */
export default class SliderArrows extends Component {

  constructor(props) {
    super(props);
  }

  handleArrowClick(option) {
    this.props.turn(option);
  }

  render() {

    return (
      <div>
        <span
          className="slider-arrows slider-arrows-left"
          onClick={this.handleArrowClick.bind(this, -1)}>
          &lt;
        </span>
        <span
          className="slider-arrows slider-arrows-right"
          onClick={this.handleArrowClick.bind(this, 1)}>
          &gt;
        </span>
      </div>
    );
  }

}
