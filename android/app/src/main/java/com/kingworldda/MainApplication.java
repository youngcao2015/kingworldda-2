package com.kingworldda;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.ReadableNativeArray;
import com.facebook.react.bridge.ReadableNativeMap;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.github.wuxudong.rncharts.MPAndroidChartPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.oblador.keychain.KeychainPackage;

import org.devio.rn.splashscreen.SplashScreenReactPackage;

import java.util.Arrays;
import java.util.List;

import android_upgrade.UpgradePackage;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
            new VectorIconsPackage(),
                    new KeychainPackage(),
                    new RNDeviceInfo(),
                    new MPAndroidChartPackage(),
                    new SplashScreenReactPackage(),
                    new UpgradePackage()

            );
        }

        @Override
        protected String getJSMainModuleName() {
            return "index";
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
        ReadableNativeArray.setUseNativeAccessor(true);
        ReadableNativeMap.setUseNativeAccessor(true);
    }
}
