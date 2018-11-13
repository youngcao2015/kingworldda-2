import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Image } from 'react-native';
import types from 'prop-types';

export default class Item extends Component {
    static propTypes = {
        ...View.propTypes,
        children: types.any,
        showLine: types.bool,
        height: types.number,
        onPress: types.func,
    };

    static defaultProps = {
        showLine: true,
    };

    render() {
        return (
            <TouchableHighlight
                {...this.props}
                underlayColor="#E6E6E6"
                onPress={this.props.onPress}
            >
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <View
                        style={[
                            styles.content,
                            this.props.style,
                            { height: this.props.height },
                        ]}
                    >
                        {this.props.children}
                    </View>
                    {this.props.showLine ? (
                        <View style={styles.underline} />
                    ) : null}
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    underline: {
        height: 0.5,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#D8D8D8',
    },
});
