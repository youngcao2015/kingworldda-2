package com.kingworldda;

import android.app.Activity;
import android.content.res.Resources;
import android.graphics.Point;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.util.Log;

import com.facebook.react.ReactActivity;

import org.devio.rn.splashscreen.SplashScreen;


public class MainActivity extends ReactActivity {
    private static final int PORTRAIT = 0;
    private static final int LANDSCAPE = 1;
    @NonNull
    private volatile static Point[] mRealSizes = new Point[2];


    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "kingworldda";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);

//        this.getStatusBarHeight(this);
//        getNavigationBarHeight(this);

    }

    /**
     * 获取虚拟功能键高度
     *
     * @param .
     */
    public static void getNavigationBarHeight(Activity activity) {
        Resources resources = activity.getResources();
        int resourceId = resources.getIdentifier("navigation_bar_height",
                "dimen", "android");
        // 获取NavigationBar的高度
        int height = resources.getDimensionPixelSize(resourceId);
        Log.d("navigation bar", "getNavigationBarHeight: " + height);
    }

    // 直接读取系统里状态栏高度的值，但是无法判断状态栏是否显示
    private void getStatusBarHeight(Activity activity) {
        int height = 0;
        Resources resources = activity.getResources();
        int resourceId = resources.getIdentifier("status_bar_height", "dimen", "android");
        if (resourceId > 0) {
            height = getResources().getDimensionPixelSize(resourceId);
            Log.d("status bar", "getStatusBarHeight: " + height);
        }

        int length = resources.getDisplayMetrics().heightPixels;
        Log.d("length", "getStatusBarHeight: " + length);
    }


}

