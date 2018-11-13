import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ViewPropTypes, Image, TouchableOpacity } from 'react-native';

class ImageButton extends Component {
    static propTypes = {
        onPress: PropTypes.func,
        disabled: PropTypes.bool,
        // source: PropTypes.object,
        style: ViewPropTypes.style,
        containerStyle: ViewPropTypes.style,
    };

    static defaultProps = {
        onPress() {},
        disabled: false,
    };

    state = {
        source: null,
    };

    componentDidMount() {}

    updateSource = source => {
        this.setState({
            source: source,
        });
    };

    render() {
        const {
            onPress,
            disabled,
            source,
            style,
            containerStyle,
            activeOpacity,
            resizeMode,
        } = this.props;

        return (
            <TouchableOpacity
                style={containerStyle}
                activeOpacity={activeOpacity}
                onPress={onPress}
                disabled={disabled}
            >
                <Image
                    style={style}
                    source={this.state.source ? this.state.source : source}
                    resizeMode={resizeMode}
                />
            </TouchableOpacity>
        );
    }
}

export default ImageButton;
