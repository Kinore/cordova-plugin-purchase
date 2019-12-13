module.exports = function (ctx) {
    var fs = ctx.requireCordovaModule('fs');
    var path = ctx.requireCordovaModule('path');
    var platformRoot = path.join(ctx.opts.projectRoot,
        'platforms' + path.sep + 'android');

    // Ref #742: https://github.com/j3k0/cordova-plugin-purchase/issues/742
    // Cordova failed to remove this file when uninstalling the plugin, which in
    // turn prevents the plugin from re-installing. Work-around below:
    fs.unlinkSync(path.join(platformRoot, 'app', 'src', 'main', 'aidl', 'com', 'android', 'vending', 'billing', 'IInAppBillingService.aidl'));
    fs.unlinkSync(path.join(platformRoot, 'src', 'com', 'android', 'vending', 'billing', 'IInAppBillingService.aidl'));

};
