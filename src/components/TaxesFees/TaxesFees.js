import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

export default class TaxesFees extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="6">Taxes &amp; Fees</Col>

          <Col xs="6" style={{ textAlign: "end" }}>{`$${
            this.props.taxes
          }`}</Col>
        </Row>
      </Container>
    );
  }
}
