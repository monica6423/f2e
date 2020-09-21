import React, { Component, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadData } from '../../actions/Order';

const ProductDetail = ({ loadData, orderData}) => {

    useEffect(() => {
        loadData();
    }, [loadData])

    return (
         <> 
        </>
    );
}

ProductDetail.propTypes = {
    loadData: PropTypes.func.isRequired,
    orderData: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    orderData: state.orderData
});

export default connect(mapStateToProps, { loadData })(ProductDetail);