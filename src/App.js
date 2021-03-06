import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Card, CardText, CardBody, CardTitle } from "reactstrap";

import SubTotal from "./components/Subtotal/Subtotal";
import PickupSavings from "./components/PickupSavings/PickupSavings";
import TaxesFees from "./components/TaxesFees/TaxesFees";
import EstimatedTotal from "./components/EstimatedTotal/EstimatedTotal";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import PromoCode from "./components/PromoCode/PromoCode";

import { connect } from "react-redux";
import { handleChange } from "./actions/promoCodeActions";

import "./App.css";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     total: 100
  //   };
  // }

  state = {
    total: 100,
    pickupSaving: -3.85,
    taxes: 0,
    estimatedTotal: 0,
    disablePromoBtn: false
  };

  componentDidMount = () => {
    this.setState(
      {
        taxes: (this.state.total + this.state.pickupSaving) * 0.0875
      },
      function() {
        this.setState({
          estimatedTotal:
            this.state.total + this.state.pickupSaving + this.state.taxes
        });
      }
    );
  };

  giveDiscountHandler = () => {
    if (
      this.props.promoCode === "DISCOUNT" ||
      this.props.promoCode === "discount"
    ) {
      this.setState(
        {
          estimatedTotal: this.state.estimatedTotal * 0.9
        },
        function() {
          this.setState({
            disablePromoBtn: true
          });
        }
      );
    }
  };

  render() {
    return (
      <Container>
        <Card className="card">
          <CardBody>
            <CardTitle
              style={{
                textAlign: "center",
                marginBottom: "3rem",
                textTransform: "uppercase"
              }}
            >
              Shopping Card
            </CardTitle>
            <hr />
            <SubTotal price={this.state.total.toFixed(2)} />
            <PickupSavings price={this.state.pickupSaving} />
            <TaxesFees taxes={this.state.taxes.toFixed(2)} />
            <hr />
            <PromoCode
              giveDiscount={() => this.giveDiscountHandler()}
              isDisabled={this.state.disablePromoBtn}
            />

            <ItemDetails price={this.state.estimatedTotal.toFixed(2)} />
            <hr />
            <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
            <CardText />
          </CardBody>
        </Card>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(
  mapStateToProps,
  { handleChange }
)(App);
