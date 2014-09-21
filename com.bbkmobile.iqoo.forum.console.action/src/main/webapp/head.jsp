<%@page language="java" pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>

<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c"%>
<%@ taglib uri="/common-tags" prefix="m"%>

<c:set var="ctx" value="${pageContext.request.contextPath}"></c:set>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>VIVO应用商店运营管理后台</title>
<link href="${ctx}/css/main.css" rel="stylesheet" type="text/css" />
</head>

<body>
<div class="top">
<div class="top_logo"><img src="${ctx}/images/logo.jpg" width="310" height="38" /></div>
<div class="top_link"><ul><li class="name">HI <strong>${session_auth_user.name}</strong> 欢迎您！ </li><li><a class="back" target="rightFrame" href="welcome.jsp">返回主页</a></li><li><a class="quit" target="_top" href="<s:url value='/logout.action' />">退出</a></li></ul></div>
</div>
</body>
</html>
