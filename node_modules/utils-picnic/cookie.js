// 读取coolie
function getCookie(name){
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr = document.cookie.match(reg)){
		return unescape(arr[2]);
	}else{
		return null;
	}
}
// 删除coolie
function delCookie(name){
	var exp = new Date(); 
    exp.setTime(exp.getTime() - 1); 
    var cval=getCookie(name); 
    if(cval!=null) 
        document.cookie= name + "="+cval+";expires="+exp.toGMTString(); 
}
//添加cookie
function addCookie(objName,objValue,objHours){      
    var str = objName + "=" + escape(objValue);
    if(objHours > 0){                               //为时不设定过期时间，浏览器关闭时cookie自动消失
        var date = new Date();
        var ms = objHours*3600*1000;
        date.setTime(date.getTime() + ms);
        str += "; expires=" + date.toGMTString();
   }
   document.cookie = str;
}
