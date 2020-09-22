import React, { Component, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadData } from '../../actions/Order';
import ProductCard from '../ProductCard/ProductCard'
import './ProductTable.scss'
const ProductTable = ({ loadData, orderData}) => {
    const [loading, setLoading] = useState(true)
    const [completeData, setCompleteData] = useState([])
    const [processData, setProcessData] = useState([])

    useEffect(() => {
        loadData();
        setLoading(false)
    }, [loadData])
    
    useEffect(() => {
        const progress = orderData.filter( order => order.status.code === 1 || order.status.code === 2 )
        const complete = orderData.filter( order => order.status.code === 3 || order.status.code === 4 )
        setCompleteData(complete);
        setProcessData(progress)
    },[orderData])


    console.log('order data', processData)
    return (
        <div className="container"> 
            <div>
                <div  className="table-head">進行中</div>
                {loading?<div>runn</div>: (
                    processData.map(data => (
                        <ProductCard order={data}/>)
                    )
                )}
            </div>
            
            <div >
                <div className="table-head">已完成</div>
                {loading?<div>runn</div>: (
                    completeData.map(data => (
                        <ProductCard order={data}/>)
                    )
                )}
            </div>
        </div>
    );
}

ProductTable.propTypes = {
    loadData: PropTypes.func.isRequired,
    orderData: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    orderData: state.orderData.orderData
});

export default connect(mapStateToProps, { loadData })(ProductTable);