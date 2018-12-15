import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

export default class Subtotal extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="6">Subtotal</Col>
          <Col xs="6" style={{ textAlign: "end" }}>{`$${
            this.props.price
          }`}</Col>
        </Row>
      </Container>
    );
  }
}
