/**
  * desc：片区查询
  * author：young
  * date： 2018/11/13
  */
import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Modal, Text, TouchableOpacity,
    Button,
} from "react-native";
import Spacer from "../../../components/Spacer";
import PropTypes from "prop-types";

export default class AreaQuery extends Component {

    static propTypes = {
        queryData: PropTypes.func,
    };

    static defaultProps = {
        queryData: () => {},
    };

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    showModal = () => {
        this.setState({
            visible: true
        });
    };

    dismissModal = () => {
        this.setState({
            visible: false
        });
    };

    queryData = () => {
        this.dismissModal();
        this.props.queryData();
    };

    render() {
        return (
            <Modal
                transparent
                visible={this.state.visible}
                onRequestClose={() => {
                    this.dismissModal();
                }}
            >
                <View
                    style={styles.container}
                >
                    <View style={styles.content}>
                        <Text style={{ marginLeft: 10, fontSize: 20 }}>日期</Text>
                        <View style={styles.underline}/>

                        <Spacer/>
                        <Text style={{ marginLeft: 10, fontSize: 20 }}>日期</Text>
                        <View style={styles.underline} />

                        <Button title={'查询'} color={'white'} fontSize={24} style={styles.queryButton} onPress={() => this.queryData()}/>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.6)"
    },
    content: {
        backgroundColor: "white",
        margin: 20
    },
    underline: {
        height: 0.5,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: "#D8D8D8"
    },
    queryButton: {
        backgroundColor: '#1eade5',
        borderRadius: 3,
        margin: 20,
    },
});
