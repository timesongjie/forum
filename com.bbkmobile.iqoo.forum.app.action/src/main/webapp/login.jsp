<%@ page language="java" pageEncoding="UTF-8"
contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c"%>
<%@ taglib uri="/common-tags" prefix="m"%>

<c:set var="ctx" value="${pageContext.request.contextPath}"></c:set>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>VIVO应用商店运营管理后台</title>

<script src="${ctx}/script/jquery-1.4.min.js" type="text/javascript"></script>
<script src="${ctx}/script/common.js" type="text/javascript"></script>
		<style>
		<!--
		td{ font-size: 14px; font-family: 宋体; text-decoration: none }
		.STYLE2 {color: #041833}
		-->
		</style>
		<script type="text/javascript">

			function checkName(){
				var pattern = /^\w{3,}$/;
				var val = $("#user_name").val();
				if(!pattern.exec(val)){
					$("#user_name").focus();
					warn($("#user_name"),"用户名格式错误。");

					return false;
				}

				return true;
			}

			function checkPwd(){
				var pattern = /^\w{3,}$/;
				var val = $("#user_pwd").val();
				if(!pattern.exec(val)){
					$("#user_pwd").focus();
					warn($("#user_pwd"),"密码格式错误。");
					return false;
				}

				return true;
			}

			function warn(obj, msg){
				alert(msg);
			}

			function sub(){

				if(checkName() && checkPwd()){
					return true;
				}
				return false;
			}
		</script>
	</head>
	<body >
		<div align="center">
			<div style="height: 80px"></div>
			<table border="0" width="528" id="table1" cellspacing="0" cellpadding="0" height="369">
				<tr>
					<td  valign="top" align="right">
						<form action="mvc/login.action" method="post">
							<input name="name" ><br>
							<input name="age" ><br>
							<button type="submit" >登录</button>
						</form>
					</td>
				</tr>
			</table>
			<div align="center"></div>
			<span class="STYLE2"></span>
		</div>

	</body>
</html>
