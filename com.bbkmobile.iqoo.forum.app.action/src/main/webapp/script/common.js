function trimLeft(str) {
	return str.replace(/^(\s+)/, "");
}

function trimRight(str) {
	return str.replace(/(\s+)$/, "");
}

function trim(str) {
	return trimRight(trimLeft(str));
}

function firstPage(formID) {
	$("#page_currentPageNum").val(1);
	$("#" + formID).submit();
}

function nextPage(formID) {
	var currentPageNum = $("#page_currentPageNum").val();

	var nextPageNum = parseInt(currentPageNum) + 1;

	$("#page_currentPageNum").val(nextPageNum);
	$("#" + formID).submit();
}

function prePage(formID) {

	var currentPageNum = $("#page_currentPageNum").val();

	var prePageNum = currentPageNum - 1;

	$("#page_currentPageNum").val(prePageNum);
	$("#" + formID).submit();

}

function changePage(formID) {

	var turnPage = $("#turnPage").val();

	$("#page_currentPageNum").val(turnPage);
	$("#" + formID).submit();
}

function lastPage(formID) {
	var pageCount = $("#page_pageCount").val();
	$("#page_currentPageNum").val(pageCount);
	$("#" + formID).submit();
}

//按回车键提交
function  subCheck()
{
if(event.keyCode==13)
{
document.autoForm.submit();
}
}