/**
 * desc：存销比容器
 * author：young
 * date： 2018/10/16
 */
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import InventorySaleRatio from '../presenter/InventorySaleRatio';
import { Actions } from 'react-native-router-flux';
import * as routeNames from '../../../constants/routeNames';

class InventorySaleRatioContainer extends Component {
    static componentName = 'InventorySaleRatioContainer';

    componentDidMount() {

    }

    render() {
        return <InventorySaleRatio {...this.props} />;
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InventorySaleRatioContainer);


