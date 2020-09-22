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
        console.log('order data', orderData)

        const sortData = orderData.sort((a, b) => {
            var dateA = new Date(a.date);
            var dateB = new Date(b.date);
            console.log('date', dateA, dateB)
            return dateB - dateA;
        })
        console.log('sort data', sortData)

        const progress = sortData.filter( sort => sort.status.code === 1 || sort.status.code === 2 )
        const complete = sortData.filter( sort => sort.status.code === 3 || sort.status.code === 4 )
        setCompleteData(complete);
        setProcessData(progress)
    },[orderData])

    

    return (
        <div className="container"> 
            <div>
                <div className="table-head"><span>進行中</span></div>
                {loading?<div>runn</div>: (
                    processData.map((data, i) => (
                        <ProductCard key={i} order={data}/>)
                    )
                )}
            </div>
            <div >
                <div className="table-head"><span>已完成</span></div>
                {loading?<div>runn</div>: (
                    completeData.map((data, i) => (
                        <ProductCard key={i} order={data}/>)
                    )
                )}
            </div>
        </div>
    );
}

ProductTable.propTypes = {
    loadData: PropTypes.func.isRequired,
    orderData: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    orderData: state.orderData.orderData
});

export default connect(mapStateToProps, { loadData })(ProductTable);