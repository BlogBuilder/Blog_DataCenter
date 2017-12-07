/**
 * Created by qulongjun on 2017/11/16.
 */

"use strict";
import avatar from '../img/notification.png';

const alert = function (message) {
    $('body').pgNotification({
        "message": message,
        "style": "flip",
        "type": "success"
    }).show();
};

const error = function (message) {
    $('body').pgNotification({
        "message": message,
        "style": "flip",
        "type": "danger"
    }).show();
};

const codeState = function (code, handle) {
    switch (code) {
        case 200:
            (typeof handle['200'] === 'function') && handle['200']();
            (typeof handle['200'] === 'string') && alert(handle['200']);
            break;

        default:
            error("服务器出小差了，请稍后尝试！");
    }
};

const serviceError = function () {
    error("服务器出小差了，请稍后尝试！");
};
window.alert = alert;
window.error = error;
window.codeState = codeState;
window.serviceError = serviceError;