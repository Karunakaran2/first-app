import React from "react";
import classes from './ProductPreview.module.css';

const ProductPreview = (props) => {
    const currentHour = new Date().getHours() % 12 || 12;
    const currentMinute = new Date().getMinutes().toString().padStart(2, '0');
    const amPm = new Date().getHours() >= 12 ? 'PM' : 'AM';
    return (
        <div className={classes.ProductPreview}>
            <img src={props.currentPreviewImage} alt="Product Preview">
            </img>

            {
                props.showHeartBeatSection === 1 ?

                    <div className={classes.HeartSection}>
                        <p className={`${classes.HeartRateTitle} mb-0`}> Heart Rate</p>
                        <p>78</p>
                    </div>
                    :
                    <div className={classes.TimeSection}>
                        <p>{`${currentHour}:${currentMinute} ${amPm}`}</p>
                    </div>
            }
        </div>
    );
}

export default ProductPreview;