import React, { Component } from "react";

import {
  Container,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

import SubTotal from "./components/Subtotal/Subtotal";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 100
    };
  }

  render() {
    return (
      <Container>
        <div>
          <Card className="card">
            <CardBody>
              <CardTitle>Shopping Card</CardTitle>
              <CardSubtitle>Review your Shopping Card</CardSubtitle>
              <SubTotal price={this.state.total.toFixed(2)} />
              <CardText />
              <Button color="dark" block>
                Button
              </Button>
            </CardBody>
          </Card>
        </div>
      </Container>
    );
  }
}

export default App;
