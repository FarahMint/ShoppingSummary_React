import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

export default class EstimatedTotal extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="6">
            <h2>Estimated Total</h2>
          </Col>
          <Col xs="6">{`$${this.props.price}`}</Col>
        </Row>
      </Container>
    );
  }
}
