/**
 * desc：终端分析容器
 * author：young
 * date： 2018/10/16
 */
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TerminalAnalysis from '../presenter/TerminalAnalysis';
import { Actions } from 'react-native-router-flux';
import * as routeNames from '../../../constants/routeNames';

class TerminalAnalysisContainer extends Component {
    static componentName = 'TerminalAnalysisContainer';

    componentDidMount() {}

    render() {
        return <TerminalAnalysis {...this.props} />;
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TerminalAnalysisContainer);
