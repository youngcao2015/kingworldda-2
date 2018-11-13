/**
 * Auth Scenes
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import { Scene, ActionConst, Stack } from 'react-native-router-flux';
// Consts and Libs

// Scenes
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import LoginContainer from '../pages/auth/container/LoginContainer';

const scenes = (
    <Stack
        key="authStack"
        transitionConfig={() => ({
            screenInterpolator: props => {
                const { scene } = props;
                switch (scene.route.routeName) {
                    default:
                        return CardStackStyleInterpolator.forHorizontal(props);
                }
            },
        })}
    >
        <Scene
            hideNavBar
            key={'login'}
            component={LoginContainer}
            type={ActionConst.RESET}
            initial
            analyticsDesc={'LoginContainer'}
        />
    </Stack>
);

export default scenes;
