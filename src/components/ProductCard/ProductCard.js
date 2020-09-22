import React from 'react'
import PropTypes from 'prop-types'
import { BsChevronRight } from 'react-icons/bs'
import './ProductCard.scss'
const ProductTable = ({ order: {name, logo, status, date}}) => {

    const progress = status.code===1||status.code===2;

    return (
        <div className="card">
            <div className="logo">
                <img alt="product" className={(!progress)?'complete-img':''} src={logo}></img>
            </div>
            <div className="detail">
                <div>
                    <div className={(progress)?'progress-font':''}>{status.type}</div>
                    {(progress)&&<span>預計出貨日: {date}</span>}
                </div>
                <div>
                    {name}
                </div>
            </div>
            <div className="arrow">
                <BsChevronRight/>
            </div>
        </div>
    );
}

ProductTable.propTypes = {
    order: PropTypes.object.isRequired,
}


export default ProductTable;