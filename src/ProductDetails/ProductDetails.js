import React from "react";
import classes from './ProductDetails.module.css';

const ProductDetails = (props) => {
    // console.log(props.data);
    const colorOptions = props.data.colorOptions.map((item, pos) => {

        const classArr = [classes.ProductImage]
        if (pos === props.currentPreviewImagePos) {
            classArr.push(classes.SelectedProductImage)
        }
        return (
            <img key={pos} className={`${classArr.join(' ')} mx-1`} src={item.imageUrl} alt={item.styleName}
        onClick={() => props.onColorOptionClick(pos)}></img>
        );
    })

    const featureList = props.data.featureList.map((item, pos) => {

        const featureArr = [classes.FeatureItem]
        if (pos === props.showHeartBeatSection) {
            featureArr.push(classes.SelectedFeatureItem)
        }
        return (
            <button key={pos} className={`${featureArr.join(' ')} mx-1`} 
            onClick={() => props.OnFeatureItemClick(pos)}>{item}</button>
        );
    })

    return (
        <div className={classes.ProductData}>
            <h1 className={`${classes.ProductTitle} mt-5`}>{props.data.title}</h1>
            <p className={classes.ProductDescription}>{props.data.description}</p>

            <h3 className={classes.SectionHeading}> Select Color</h3>
            <div>
                {colorOptions}
            </div>
            <h3 className={`${classes.SectionHeading1} mb-3 mt-5`}> Features</h3>
            <div>{featureList}</div>
            <button className={`${classes.PrimaryButton} bg-success mt-5 mx-1`}>Buy Now</button>
        </div>
    );
}

export default ProductDetails;