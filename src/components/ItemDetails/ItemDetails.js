import React, { Component } from "react";

import { Button, Collapse, Media, Row, Col } from "reactstrap";

export default class ItemDetails extends Component {
  state = {
    open: false
  };

  render() {
    return (
      <div>
        <Button
          color="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See` : `Hide `} item details
          {this.state.open === false ? ` -` : ` +`}
        </Button>
        <Collapse isOpen={this.state.open}>
          <div>
            <Media>
              <Media left href="#">
                <Media
                  image
                  width={100}
                  height={100}
                  src="https://i5.walmartimages.com/asr/58ed28c8-42fa-4966-902c-292940257bb1_1.ef2b733f30c41bfa79d99303e6a11627.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff/"
                  alt="thumbnail image"
                />
              </Media>
              <Media body>
                <Media heading>
                  OFM Essentials Racecar-Style Leather Gaming Chair, Red
                </Media>
                <Row>
                  <Col xs="6">
                    <strong>{`$${this.props.price}`}</strong>
                    <br />
                    <strong className="price-strike">{`$${
                      this.props.price
                    }`}</strong>
                  </Col>
                  <Col xs="6">
                    <p>Quantity:1</p>
                  </Col>
                </Row>
              </Media>
            </Media>
          </div>
        </Collapse>
      </div>
    );
  }
}
