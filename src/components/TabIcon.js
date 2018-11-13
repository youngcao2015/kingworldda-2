import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image } from 'react-native';

import { AppColors, AppStyles } from '../theme/index';

const TabIcon = ({ icon, title, focused }) => {
    const activeStyle = focused
        ? AppColors.tabBar.iconSelected
        : AppColors.tabBar.iconDefault;
    return (
        <View style={[AppStyles.centerAligned, { flex: 1 }]}>
            <Image
                source={icon}
                resizeMode={'contain'}
                style={{ height: 24, padding: 0 }}
            />

            <Text style={[{ color: activeStyle, fontSize: 12, marginTop: 3 }]}>
                {title}
            </Text>
        </View>
    );
};

TabIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    focused: PropTypes.bool,
};
TabIcon.defaultProps = { icon: 'search', focused: false };

module.exports = {
    TabIcon,
};
