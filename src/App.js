// import logo from './logo.svg';
import classes from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import Topbar from './Topbar/Topbar';
import React, { Component } from 'react';
import ProductData from './Utils/ProductData';

class App extends Component {
  state = {
    productData: ProductData,
    // currentPreviewImage : 'https://imgur.com/iOeUBV7.png',
    currentPreviewImagePos: 0,
    showHeartBeatSection: 0,
  }

  onColorOptionClick = (pos) => {
    // const updatedPreviewImage = this.state.productData.colorOptions[pos].imageUrl;
    // console.log(updatedPreviewImage);
    this.setState({ currentPreviewImagePos: pos });
  }

  OnFeatureItemClick = (pos) => {
    this.setState({ showHeartBeatSection: pos })
  }

  render() {
    return (
      <div className="App">
        <Topbar />
        <div className={classes.MainContainer}>
          <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl}
            showHeartBeatSection={this.state.showHeartBeatSection} />
          <ProductDetails data={this.state.productData}
            onColorOptionClick={this.onColorOptionClick}
            currentPreviewImagePos={this.state.currentPreviewImagePos}
            showHeartBeatSection={this.state.showHeartBeatSection}
            OnFeatureItemClick={this.OnFeatureItemClick} />
        </div>
      </div>
    );
  }
}

export default App;
