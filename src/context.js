import React, {Component} from "react";
import {states,locations} from './data'

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    states: states,
    locations:locations,
    products: [],
    modalOpen: false,
  };

  componentDidMount() {
    console.log(this.state.states)
  }



  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          openModal: this.openModal,
          closeModal: this.closeModal
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };