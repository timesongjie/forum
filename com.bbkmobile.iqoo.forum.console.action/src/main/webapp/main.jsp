<%@page language="java" pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c"%>
<%@ taglib uri="/common-tags" prefix="m"%>

<c:set var="ctx" value="${pageContext.request.contextPath}"></c:set>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>VIVO应用商店运营管理后台</title>
<link href="${ctx}/css/main.css" rel="stylesheet" type="text/css" />
<script src="${ctx}/script/jquery-1.4.min.js" type="text/javascript"></script>
<script src="${ctx}/script/left_open_close.js" type="text/javascript"></script>

</head>

<body style="overflow:hidden; background:#FFF;">
<table class="maintab" border="0" cellspacing="0" cellpadding="0" height="100%" width="100%">
	<tbody>
		<tr>
			<td valign="top" width="182" id="leftTd" height="100%"><iframe src="${ctx}/getMenu.action" id="leftFrame" name="leftFrame" height="100%" width="100%"  frameborder="0"></iframe></td>
			<td valign="top" width="10" class="accordionbar" height="100%"><div class="accordion"><a class="open" id="closeLink">a</a></div></td>
			<td valign="top" height="100%"><iframe src="${ctx}/welcome.jsp" id="rightFrame" name="rightFrame" height="100%" width="100%"  frameborder="0"></iframe></td>
		</tr>
	</tbody>
</table>
</body>
</html>
