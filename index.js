//英文名验证
$(function(){
	
	//选择出生日期（因为chrome,360 禁用本地文件协议,导致控件的部分文件无法加载; 必须放到服务器才会生效，使用ie浏览器打开）
	$(".birthday").click(function(){
		WdatePicker({dateFmt:'yyyy-MM-dd',maxDate:'%y-%M-%d'}); //当前时间以后不可选
		//WdatePicker({dateFmt:'yyyy-MM-dd HH:mm',maxDate:'%y-%M-%d'}); //当前时间以后不可选（包含时分）
		//WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss',minDate:'%y-%M-%d'}); //当前时间以前不可选（包含时分秒）
        //WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:00',minDate:'%y-%M-%d'}); //当前时间以前不可选（包含时分秒）且可选范围内的秒也不可选
		//WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss',minDate:'%y-%M-%d 00:00:00'}); //当前时间以前不可选（不包含时分秒）
	});
	
})