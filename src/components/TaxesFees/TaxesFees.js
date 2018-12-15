import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

export default class TaxesFees extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="6">Estimated Taxes &amp; fees</Col>

          <Col xs="6">{`$${this.props.taxes}`}</Col>
        </Row>
      </Container>
    );
  }
}
