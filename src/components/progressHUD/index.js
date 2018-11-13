const { NativeModules } = require('react-native');

const { ProgressHUDManager } = NativeModules;

module.exports = {
    ...ProgressHUDManager,
    showMessage: function showMessage(message, interval) {
        return ProgressHUDManager.showMessage(message, interval);
    },
    showSuccess: function showSuccess(success) {
        return ProgressHUDManager.showSuccess(success);
    },
    showError: function showError(error) {
        return ProgressHUDManager.showError(error);
    },
    showIndeterminate: function showIndeterminate() {
        return ProgressHUDManager.showIndeterminate();
    },
    removeHUD: function removeHUD() {
        return ProgressHUDManager.removeHUD();
    },
};
