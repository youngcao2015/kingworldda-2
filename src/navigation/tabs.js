/**
 * Tabs Scenes
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from "react";
import {
    Image,
    Text,
    View,
    Platform,
    StatusBar,
    TouchableOpacity
} from "react-native";
import { Scene, Tabs, Stack, Drawer } from "react-native-router-flux";
import { connect } from "react-redux";

// constants and Libs
import { AppStyles, AppSizes, AppColors } from "../theme";
import { store } from "../root";
import { scaleSize } from "../utils/ScreenUtil";
import { Toast } from "../utils/Toast";

// Components
import { TabIcon } from "../components/TabIcon";

import * as routeNames from "../constants/routeNames";

// Scenes
import CardStackStyleInterpolator from "react-navigation/src/views/CardStack/CardStackStyleInterpolator";
import ImageButton from "../components/ImageButton";
import AreaContainer from "../pages/area/container/AreaContainer";
import MineContainer from "../pages/mine/container/MineContainer";
import TerminalContainer from "../pages/terminal/container/TerminalContainer";
import AreaSalesChartContainer from "../pages/area/container/AreaSalesChartContainer";
import MineSalesChartContainer from "../pages/mine/container/MineSalesChartContainer";
import InventorySaleRatioContainer from "../pages/terminal/container/InventorySaleRatioContainer";
import TerminalAnalysisContainer from "../pages/terminal/container/TerminalAnalysisContainer";
import TerminalSalesDataContainer from "../pages/terminal/container/TerminalSalesDataContainer";

const defaultNavBarProps = {
    borderBottomWidth: scaleSize(6),
    borderBottomColor: AppColors.blue,
    height: scaleSize(138),
    paddingTop: StatusBar.currentHeight
};

/* Routes ==================================================================== */
const scenes = (
    <Tabs
        key="tabBar"
        showLabel={false}
        tabBarPosition="bottom"
        swipeEnabled={false}
        lazy
        // hideTabBar
        pressOpacity={0.95}
        tabBarStyle={{
            paddingBottom: AppSizes.isIphoneXTabSafeHeight,
            backgroundColor: AppColors.tabBar.background,
            height: 49
        }}
    >
        <Stack
            key="area"
            title={"片区"}
            icon={props =>
                TabIcon({
                    ...props,
                    icon: props.focused
                        ? require("./img/area_selected.png")
                        : require("./img/area.png")
                })
            }
            // tabBarOnPress={(data) => {
            //     console.log('------------');
            //     console.log(data);
            //     data.defaultHandler(data.navigation.state.index);
            //     console.log('------------');
            // }}
            transitionConfig={() => ({
                screenInterpolator: props => {
                    const { scene } = props;
                    switch (scene.route.routeName) {
                        default:
                            return CardStackStyleInterpolator.forHorizontal(
                                props
                            );
                    }
                }
            })}
        >
            <Scene
                key={"area-content"}
                component={AreaContainer}
                title={"片区"}
                initial
                analyticsDesc={"展示片区内容"}
                navigationBarStyle={defaultNavBarProps}
            />
            <Scene
                key={"area-sales-chart"}
                hideTabBar
                component={AreaSalesChartContainer}
                title={"销售分析"}
                analyticsDesc={"销售分析"}
                navigationBarStyle={defaultNavBarProps}
            />
        </Stack>

        <Stack
            key="terminal"
            title={"终端"}
            icon={props =>
                TabIcon({
                    ...props,
                    icon: props.focused
                        ? require("./img/terminal_selected.png")
                        : require("./img/terminal.png")
                })
            }
            // tabBarOnPress={(data) => {
            //   data.defaultHandler(data.navigation.state.index);
            // }}
        >
            <Scene
                key={"terminal-content"}
                title={"终端"}
                component={TerminalContainer}
                analyticsDesc={"销售终端"}
                navigationBarStyle={defaultNavBarProps}
            />
            <Scene
                key={"inventory-sale-ratio"}
                title={"存销比"}
                component={InventorySaleRatioContainer}
                analyticsDesc={"存销比"}
                navigationBarStyle={defaultNavBarProps}
            />
            <Scene
                key={"terminal-analysis"}
                title={"终端分析"}
                hideTabBar
                component={TerminalAnalysisContainer}
                analyticsDesc={"终端分析"}
                navigationBarStyle={defaultNavBarProps}
            />
            <Scene
                key={"terminal-sales-data"}
                title={"终端销售数据"}
                hideTabBar
                component={TerminalSalesDataContainer}
                analyticsDesc={"终端销售数据"}
                navigationBarStyle={defaultNavBarProps}
            />
        </Stack>

        <Stack
            key="mine"
            title={"我的"}
            icon={props =>
                TabIcon({
                    ...props,
                    icon: props.focused
                        ? require("./img/mine_selected.png")
                        : require("./img/mine.png")
                })
            }
            transitionConfig={() => ({
                screenInterpolator: props => {
                    const { scene } = props;
                    switch (scene.route.routeName) {
                        default:
                            return CardStackStyleInterpolator.forHorizontal(
                                props
                            );
                    }
                }
            })}
            // tabBarOnPress={(data) => {
            //   console.log('------------');
            //   console.log(data);
            //   data.defaultHandler(data.navigation.state.index);
            //   console.log('------------');
            // }}
        >
            <Scene
                key={"mine-content"}
                title={"我的"}
                component={MineContainer}
                navigationBarStyle={defaultNavBarProps}
                analyticsDesc={"个人账户、设置等"}
            />
            <Scene
                key={"mine-sales-chart"}
                hideTabBar
                component={MineSalesChartContainer}
                title={"我的销售"}
                analyticsDesc={"我的销售"}
                navigationBarStyle={defaultNavBarProps}
            />
        </Stack>
    </Tabs>
);

export default scenes;
