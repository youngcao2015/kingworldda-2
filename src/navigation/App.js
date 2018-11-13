/**
 * App Navigation
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import { Platform, View, Text, StatusBar } from 'react-native';
import {
    Scene,
    Router,
    Reducer,
    Modal,
    Overlay,
    Stack,
    Lightbox,
    Drawer,
} from 'react-native-router-flux';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

// constants and libs
import { AppStyles } from '../theme/styles';

// Components

// Scenes
import AuthScenes from './auth';
import TabsScenes from './tabs';

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => defaultReducer(state, action);
};

// on Android, the URI prefix typically contains a host in addition to scheme
const prefix = Platform.OS === 'android' ? 'mychat://mychat/' : 'mychat://';
const App = () => (
    <Router
        createReducer={reducerCreate}
        style={AppStyles.appContainer}
        // uriPrefix={prefix}
    >
        <Overlay key="overlay">
            <Lightbox key="modal">
                <Stack
                    key="root"
                    hideNavBar
                    headerLayoutPreset={'center'}
                    // titleStyle={{ alignSelf: "center", }}
                    transitionConfig={() => ({
                        screenInterpolator: props => {
                            const { scene } = props;
                            switch (scene.route.routeName) {
                                case 'tradeOrder':
                                    return CardStackStyleInterpolator.forVertical(
                                        props
                                    );
                                default:
                                    return CardStackStyleInterpolator.forHorizontal(
                                        props
                                    );
                            }
                        },
                    })}
                >
                    {/* Auth */}
                    <Stack key="auth" hideNavBar initial>
                        {AuthScenes}
                    </Stack>

                    {/* TabsScenes */}
                    {TabsScenes}
                </Stack>
            </Lightbox>
        </Overlay>
    </Router>
);

export default App;
