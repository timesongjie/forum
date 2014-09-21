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
	<body background="<s:url value='/images/login_bg.jpg' />">
		<div align="center">
			<div style="height: 80px"></div>
			<table border="0" width="528" id="table1" cellspacing="0" cellpadding="0" height="369">
				<tr>
					<td background="<s:url value='/images/login_image.jpg'/>" valign="top" align="right">
						<table border="0" width="400" id="table3" height="162" cellspacing="0" cellpadding="3">
							<s:form action="login.action" namespace="/"  method="post" onsubmit="return sub();" name="autoForm">
								<tr height="180" valign="bottom" align="right" >
									<td width="456" align="right">
										用户帐号：
									</td>
									<td width="456" colspan="2" align="left">
										<s:textfield name="user.name" id="user_name" size="20" tabindex="1" cssStyle="width:150px" onkeydown="subCheck()"></s:textfield>
									</td>
								</tr>
								<tr align="right" height="50" valign="middle">
									<td width="456" align="right">
										用户密码：
									</td>
									<td width="456" colspan="2" align="left">
										<s:password name="user.pwd" id="user_pwd" size="20" tabindex="2" cssStyle="width:150px" onkeydown="subCheck()"></s:password>
									</td>
								</tr>
								<!-- <tr>
									<td align="right">
										验证码：
									</td>
									<td>
										<input type="text" name="UserCode" size="9" tabindex="3">
									</td>
									<td width="210">
										<img height="18"
											alt="验证码，看不清楚？请点击刷新验证码！" style="cursor: pointer;"
											onClick=this.src = 'Login/getcode.asp'; />
									</td>
								</tr>  -->

								<tr align="left">
									<td width="456">
									</td>
									<td width="456" colspan="2">
										<s:submit name="B1" tabindex="4" value="登 陆"></s:submit>
										<s:reset name="B2" tabindex="5" value="清 除"></s:reset>
										&nbsp;
										<font color="#FF0000"><span style="font-size: 12px"></span>
										</font>
									</td>
								</tr>
								<tr align="left" valign="bottom" height="100">
									<td width="528" colspan="3">
											<font face="Georgia">CopyRight &copy;2012-2-23</font>
											步步高通信科技有限公司
									</td>
								</tr>
							</s:form>
						</table>
					</td>
				</tr>
			</table>
			<div align="center"></div>
			<span><s:actionerror /></span>
			<span class="STYLE2"></span>
		</div>

	</body>
</html>
