import React, { Component, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './ProductCard.scss'
const ProductTable = ({ order: {name, logo, status, date} }) => {
    console.log('order data', name, date,)
    return (
        <div className="card">
            <div className="logo">
                <img src={logo}></img>
            </div>
            <div className="detail">
                <div>
                    <div>{status.type}</div>
                    {(status.code===1||status.code===2)&&<span>預計出貨日: {date}</span>}
                </div>
                <div>
                    {name}
                </div>
            </div>
            <div className="arrow"></div>

        </div>
    );
}

ProductTable.propTypes = {
    order: PropTypes.object.isRequired,
}


export default ProductTable;