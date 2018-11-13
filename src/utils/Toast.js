import { Platform, ToastAndroid } from 'react-native';
import ProgressHUD from '../components/progressHUD';

const Toast = {
    showMessage: (msg, duration) => {
        if (Platform.OS === 'ios') {
            duration /= 1000;
            ProgressHUD.showMessage(msg, duration);
        } else {
            ToastAndroid.show(msg, duration);
        }
    },
};

module.exports = {
    Toast,
};
