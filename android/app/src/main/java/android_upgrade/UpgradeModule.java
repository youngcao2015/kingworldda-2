package android_upgrade;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;

/**
 * Created by Song on 2017/7/10.
 */
public class UpgradeModule extends ReactContextBaseJavaModule {

    private static ReactApplicationContext context;
    private static final String EVENT_NAME = "LOAD_PROGRESS";

    public UpgradeModule(ReactApplicationContext reactContext) {
        super(reactContext);
        context = reactContext;
    }

    @Override
    public String getName() {
        return "upgrade";
    }

    @ReactMethod
    public void upgrade(String apkUrl) {
//        UpdateDialog.show(context, "该应用目前有新版本，是否下载？", apkUrl);
        UpdateDialog.goToDownload(context, apkUrl);
    }
    
    public static void sendProgress(int msg) {
        context.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(EVENT_NAME, msg);
    }

}
