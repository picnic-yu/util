let common = { 
    /*
     * js克隆
     * ---------------------------------------------------------------
     * @obj    {任何类型}    需要克隆的对象
     */
    "clone" : function(obj) {
        var o;
        switch (typeof obj) {
            case 'undefined':
                break;
            case 'string':
                o = obj + '';
                break;
            case 'number':
                o = obj - 0;
                break;
            case 'boolean':
                o = obj;
                break;
            case 'object':
                if (obj === null) {
                    o = null;
                }
                else {
                    o = JSON.parse(JSON.stringify(obj));
                }
                break;
            default:
                o = obj;
                break;
        }
        return o;
    },

    /*
     * 阻止事件冒泡
     * ---------------------------------------------------------------
     */
    "stopEventPropagation" : function() {
        if (event.stopPropagation) {
            // this code is for Mozilla and Opera 
            event.stopPropagation();
        }
        else if (window.event) {
            // this code is for IE 
            window.event.cancelBubble = true;
        }
    },

    /*
     * 新建一个GUID（唯一标识）
     * ---------------------------------------------------------------
     */
    "newGuid" : function() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    },

    /*
     * 获取设备系统类型，主要区分ios与android
     * ---------------------------------------------------------------
     */
    "getDeviceOSType" : function() {
        var _return = "pc";

        var ua = navigator.userAgent.toLowerCase();
        if (/iphone|ipad|ipod/.test(ua)) {
            _return = "ios"
        }
        else if (/android/.test(ua)) {
            _return = "android"
        }

        return _return;
    },

    /*
     * 将字符串转换为UTF-8编码
     * ---------------------------------------------------------------
     * @text    {string}    原始字符串
     */
    "strToUtf8" : function(text) {
        var out, i, len, c;
        out = "";
        len = text.length;
        for (i = 0; i < len; i++) {
            c = text.charCodeAt(i);
            if ((c >= 0x0001) && (c <= 0x007F)) {
                out += text.charAt(i);
            }
            else if (c > 0x07FF) {
                out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
            }
            else {
                out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
            }
        }
        return out;
    },
    /**
     * 获取url中指定的参数
     * @param name 参数名
     * @returns {null}
     */
    "getUrlName": function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    },
    /**
     * 判断是否有值
     * @param a 参数
     * @returns {boolean}
     */
    "IsUndefined":function(a){
        return (a==undefined || a===undefined || a.toString()=='undefined' || typeof(a)=='undefined' || a==null)
    },
    /**
     * 判断是否空
     * @param a
     * @returns {*}
     */
    "IsBlank":function(a){
        if(IsUndefined(a)){//未定义
            return true;
        }else if(a.toString()==""){//空
            return true;
        }else if(IsObj(a)){
            return jQuery.isEmptyObject(a);//空对象
        }else{
            return false;
        }
    },
    /**
     * 获取localStorage
     * @param parms localStorage key名
     * @returns {*}
     */
    "getLocalstorage":function(parms){
        if(IsBlank(localStorage.getItem(parms)))
            return null;
        else
            return JSON.parse(localStorage.getItem(parms));
    },
    /**
     *设置localStorage
     * @param parms localStorage key 名
     * @param data 数据
     */
    "setLocalstorage":function(parms,data){
        localStorage.setItem(parms,JSON.stringify(data));
    },
    /**
     * 移除localStorage
     * @param parms localStorage key名
     */
    "removeLocalstorage":function(parms){
        localStorage.removeItem(parms);
    }


};
export default common;
