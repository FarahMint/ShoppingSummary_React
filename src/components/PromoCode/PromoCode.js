import React, { Component } from "react";

import {
  Col,
  Row,
  Collapse,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

//Redux

class PromoCode extends Component {
  state = {
    open: false,
    value: ""
  };

  render() {
    return (
      <div>
        <Button
          color="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `Apply ` : `Hide `} Promo Code
          {this.state.open === false ? ` +` : ` -`}
        </Button>

        <Collapse isOpen={this.state.open}>
          <Row>
            <Col>
              <Form>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label for="promoCode" className="mr-sm-2">
                    Promo Code
                  </Label>
                  <Input
                    type="text"
                    name="promoCode"
                    id="promoCode"
                    placeholder="Enter promo code"
                    value={this.props.promoCode}
                    onChange={this.handleChange}
                  />
                </FormGroup>

                <Button
                  block
                  color="success"
                  className="btn-round"
                  disabled={this.props.isDisabled}
                  onClick={this.props.giveDiscount}
                >
                  Apply
                </Button>
              </Form>
            </Col>
          </Row>
        </Collapse>
      </div>
    );
  }
}

export default PromoCode;
