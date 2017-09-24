//前一个节点
function prev(obj) {
	var prevElt = obj.previousElementSibling || obj.previousSibling;
	if(prevElt && prevElt.nodeType == 1) {
		return prevElt;
	} else {
		return null;
	}
}

//后一个节点
function next(obj) {
	var nextElt = obj.nextElementSibling || obj.nextSibling;
	if(nextElt && nextElt.nodeType == 1) {
		return nextElt;
	} else {
		return null;
	}
}

//当前第一个节点
function first(obj) {
	var firstElt = obj.firstElementChild || obj.firstChild;
	if(firstElt && firstElt.nodeType == 1) {
		return firstElt;
	} else {
		return null;
	}
}

//最后一个节点
function last(obj) {
	var lastEle = obj.lastElementChild || obj.lastChild;
	if(lastEle && lastEle.nodeType == 1) {
		return lastEle;
	} else {
		return null;
	}
}

//绑定事件
function bind(obj, evType, evTn) {
	if(obj.addEventListener) {
		obj.addEventListener(evType, evTn, false);
	} else if(obj.attachEvent) {
		obj.attachEvent('on' + evType, evTn, false);
	} else {
		obj['on' + evType] = evTn;
	}
}

//解绑事件
function unbind(obj, evType, evTn) {
	if(obj.removeEventListener) {
		obj.removeEventListener(evType, evTn, false);
	} else if(obj.detachEvent) {
		obj.detachEvent('on' + evType, evTn, false);
	} else {
		obj['on' + evType] = null;
	}
}

//获取ID名和tagName
function $(selector,parent) {
	if(selector.charAt(0) == '#') {
		return document.getElementById(selector.substring(1));
	} else if(selector.charAt(0) == '.') {
		return document.getElementsByClassName(selector.substring(1));
	} else {
		parent = parent || document;
		return parent.getElementsByTagName(selector);
	}
}