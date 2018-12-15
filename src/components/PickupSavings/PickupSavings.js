import React, { Component } from "react";
import { Container, Row, Col, Tooltip } from "reactstrap";

export default class PickupSavings extends Component {
  // constructor(props) {
  //   super(props);

  // this.toggle = this.toggle.bind(this);
  // this.state = {
  //   tooltipOpen: false
  // };
  // }

  // toggle() {
  //   this.setState({
  //     tooltipOpen: !this.state.tooltipOpen
  //   });
  // }

  state = {
    tooltipOpen: false
  };

  toggle = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col xs="6">
            <p
              style={{ textDecoration: "underline", color: "blue" }}
              href="#"
              id="TooltipExample"
            >
              Pickup Savings
            </p>
            <Tooltip
              placement="top"
              isOpen={this.state.tooltipOpen}
              autohide={false}
              target="TooltipExample"
              toggle={this.toggle}
            >
              Picking up your order in the store help cut costs, and we pass the
              savings on to you.
            </Tooltip>
          </Col>
          <Col xs="6">{`$${this.props.price}`}</Col>
        </Row>
      </Container>
    );
  }
}
