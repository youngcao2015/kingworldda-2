/**
 * desc：TerminalContainer
 * author：young
 * date： 2018/8/23
 */
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Terminal from '../presenter/Terminal';
import { Actions } from 'react-native-router-flux';
import * as routeNames from '../../../constants/routeNames';

class TerminalContainer extends Component {
    static componentName = 'TerminalContainer';

    componentDidMount() {}

    _goInventorySaleRatio = () => {
        Actions.push(routeNames.Inventory_Sale_Ratio);
    };

    _goTerminalAnalysis = () => {
        Actions.push(routeNames.Terminal_Analysis);
    };

    _goTerminalSalesData = () => {
        Actions.push(routeNames.Terminal_Sales_Data);
    };

    render() {
        return (
            <Terminal
                {...this.props}
                goInventorySaleRatio={this._goInventorySaleRatio}
                goTerminalAnalysis={this._goTerminalAnalysis}
                goTerminalSalesData={this._goTerminalSalesData}
            />
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TerminalContainer);
