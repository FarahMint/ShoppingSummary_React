import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

export default class EstimatedTotal extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="6">
            <h4>Estimated Total</h4>
          </Col>
          <Col xs="6" style={{ textAlign: "end" }}>{`$${
            this.props.price
          }`}</Col>
        </Row>
      </Container>
    );
  }
}
