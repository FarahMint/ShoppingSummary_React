import React, { Component } from "react";

import { Col, Row, Collapse, Button, Form, FormGroup, Input } from "reactstrap";

import { connect } from "react-redux";
import { handleChange } from "../../actions/promoCodeActions";

//Redux

class PromoCode extends Component {
  state = {
    open: false,
    value: ""
  };

  handleChange = e => {
    // the setState below will be sent to redux
    // this.setState({ value: e.target.value });
    this.props.handleChange(e);
  };

  render() {
    return (
      <div>
        <Button
          color="link"
          style={{
            textTransform: "uppercase"
          }}
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `Use your ` : `Hide `} promocode
          {this.state.open === false ? ` +` : ` -`}
        </Button>

        <Collapse isOpen={this.state.open}>
          <Row>
            <Col>
              <Form>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
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

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(
  mapStateToProps,
  { handleChange }
)(PromoCode);
