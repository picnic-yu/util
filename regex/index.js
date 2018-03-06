let regex = {
	
};
/**
 * 判断是否小数
 * @param c 参数
 * @returns {boolean}
 */
regex.isFloat = (c) => {
    var r= /^[+-]?[1-9]?[0-9]*\.[0-9]*$/;
    return r.test(c);
}
/**
 * 格式化货币格式
 * @param s 数字
 * @param n 位数
 * @returns {string}
 */
regex.formatMoney = (s, n) => {
    n = n > 0 && n <= 20 ? n : 0;
    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
    var l = s.split(".")[0].split("").reverse(),
        r = s.split(".")[1];
    t = "";
    for(i = 0; i < l.length; i ++ ){
        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
    }
    return t.split("").reverse().join("") + "." + r;
}
/**
 * 判断是否是数字
 * @param p 参数
 * @returns {boolean}
 */
regex.isNum = (p) => {
    var idReg=/^(-?\d+)(\.\d+)?$/;
    return idReg.test(p);
}
/**
 * 检测是否手机号码
 * @param str 手机号
 * @returns {boolean}
 */
 regex.isphone = (str) => {
    var partten = /^1[3,5,8]\d{9}$/;
    var fl=false;
    if(partten.test(str)){
        return true;
    }else{
        return false;
    }
}
/**
 * 判断是否是电话号码
 * @param str 电话号码
 * @returns {boolean}
 */
regex.istel = (str) => {
    var partten = /^0(([1,2]\d)|([3-9]\d{2}))\d{7,8}$/;
    if(partten.test(str)) {
        return true;
    }else{
        return false;
    }
}
/**
 * 检测邮箱格式是否正确
 * @param str 邮箱
 * @returns {boolean}
 */
regex.checkEmail = (str) => {
    var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    var isok= reg.test(str);
    if (isok){
        return true;
    }else {
        return false;
    }
}
//校验登录名：只能输入5-20个以字母开头、可带数字、“_”、“.”的字串 
regex.isRegisterUserName = (s) => { 
    var patrn=/^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/; 
    if (!patrn.exec(s)) return false 
    return true 
}

//校验用户姓名：只能输入1-30个以字母开头的字串 
regex.isTrueName = (s) => { 
    var patrn=/^[a-zA-Z]{1,30}$/; 
    if (!patrn.exec(s)) return false 
    return true 
}

//校验密码：只能输入6-20个字母、数字、下划线 
regex.isPasswd = (s) => { 
    var patrn=/^(\w){6,20}$/; 
    if (!patrn.exec(s)) return false 
    return true 
}

//校验普通电话、传真号码：可以“+”开头，除数字外，可含有“-” 
regex.isTel = (s) => { 
    //var patrn=/^[+]{0,1}(\d){1,3}[ ]?([-]?(\d){1,12})+$/; 
    var patrn=/^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/; 
    if (!patrn.exec(s)) return false 
    return true 
}

//校验手机号码：必须以数字开头，除数字外，可含有“-” 
regex.isMobil = (s) =>{ 
    var patrn=/^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/; 
    if (!patrn.exec(s)) return false 
    return true 
}

//校验邮政编码 
regex.isPostalCode = (s) => { 
    //var patrn=/^[a-zA-Z0-9]{3,12}$/; 
    var patrn=/^[a-zA-Z0-9 ]{3,12}$/; 
    if (!patrn.exec(s)) return false 
    return true 
}

//校验搜索关键字 
regex.isSearch = (s) => { 

    var patrn=/^[^`~!@#$%^&*()+=|\\\][\]\{\}:;'\,.<>/?]{1}[^`~!@$%^&()+=|\\\][\]\{\}:;'\,.<>?]{0,19}$/;

    if (!patrn.exec(s)) return false 
        
    return true 
}

regex.isIP = (s) => {  
    var patrn=/^[0-9.]{1,20}$/; 
    if (!patrn.exec(s)) return false 
    return true 
} 
//校验是否全由数字组成 
regex.isDigit = (s) => { 
    var patrn=/^[0-9]{1,20}$/; 
    if (!patrn.exec(s)) return false 
    return true 
}
//清除左边空格 
regex.js_ltrim = (deststr) => { 
    if(deststr==null)return ""; 
    
    var pos=0; 
    var retStr=new String(deststr); 
    
    if (retStr.lenght==0) return retStr; 
    
    while (retStr.substring(pos,pos+1)==" ") pos++; 
    
    retStr=retStr.substring(pos); 
    
    return(retStr); 
} 
//清除右边空格 
regex.js_rtrim = (deststr) => { 
    if(deststr==null)return ""; 

    var retStr=new String(deststr); 
    var pos=retStr.length; 

    if (pos==0) return retStr; 

    while (pos && retStr.substring(pos-1,pos)==" " ) pos--; 

    retStr=retStr.substring(0,pos); 

    return(retStr); 
} 
//清除左边和右边空格 
regex.js_trim = (deststr) => { 
    if(deststr==null) return ""; 

    var retStr=new String(deststr); 
    var pos=retStr.length; 

    if (pos==0) return retStr; 

    retStr=js_ltrim(retStr); 
    retStr=js_rtrim(retStr); 

    return retStr; 
} 
export default regex;
