/**
 * desc：片区
 * author：young
 * date： 2018/8/22
 */
import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    processColor,
    SafeAreaView,
    ScrollView,
    Dimensions
} from "react-native";

import { Toast } from "../../../utils/Toast";
import DefaultItem from "../../../components/DefaultItem";
import PropTypes from "prop-types";
import { http } from "../../../utils/request";
import * as routeNames from "../../../constants/routeNames";
import * as api from "../../../constants/api";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import AreaQuery from "./AreaQuery";

export default class Area extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    componentDidMount() {
    }

    static propTypes = {
        goAreaSalesStatistics: PropTypes.func,
        goAreaSalesData: PropTypes.func,
        goAreaSalesChart: PropTypes.func
    };

    _goAreaSalesStatistics = () => {
        this.props.goAreaSalesStatistics();
    };

    _goAreaSalesChart = () => {
        this.props.goAreaSalesChart();
    };

    render() {
        return (
          <SafeAreaView style={styles.container}>
              <ItemContent
                title={"总销售额"}
                number={1472008.91}
                percent={22.68}
                status={"+"}
              />
              <ItemContent
                title={"经销商销售数量"}
                number={64296}
                percent={18.17}
                status={"+"}
              />
              <ItemContent
                title={"终端销售数量"}
                number={61572}
                percent={18.57}
                status={"+"}
              />

              <ScrollView style={{ marginTop: 20 }}>
                  <DefaultItem
                    item={{
                        leftTitle: "销售分析",
                        leftImage: require("../img/chart_small.png")
                    }}
                    onPressItem={this._goAreaSalesChart}
                  />
              </ScrollView>

              <ActionButton buttonColor="rgba(231,76,60,1)">
                  <ActionButton.Item buttonColor='#9b59b6' title="查询" onPress={() => this.queryModal.showModal()}>
                      <Icon name="md-search" style={styles.actionButtonIcon} />
                  </ActionButton.Item>
              </ActionButton>

              <AreaQuery
                  ref={queryModal => {
                      this.queryModal = queryModal;
                  }}
              />
          </SafeAreaView>
        );
    }
}

const ItemContent = ({ title, number, percent, status = "+" }) => (
  <View style={{ backgroundColor: "white" }}>
      <View style={styles.item_content}>
          <Text>{title}</Text>
          <View style={{ flexDirection: "row" }}>
              <Text>{number}</Text>
              <Text> (</Text>
              <Text style={{ color: "green" }}>{`${status}${percent}%`}</Text>
              <Text>)</Text>
          </View>
      </View>
      <View style={styles.item_underline}/>
  </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    },
    item_content: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 10,
        padding: 5
    },
    item_underline: {
        height: 0.5,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: "#D8D8D8"
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: "white"
    }
});
