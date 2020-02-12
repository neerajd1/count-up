
function count () {
	var intArr=[68,102,150,98];
	var element=document.getElementsByClassName('block-no');
	var interval1=setcount(intArr[0],element[0]);
	var interval2=setcount(intArr[1],element[1]);
	var interval3=setcount(intArr[2],element[2]);
	var interval4=setcount(intArr[3],element[3]);
	
}

function setcount (endval,element) {
	 
	var interval=setInterval(function (endval,element, interval) {
		var value = parseInt(element.innerHTML);
		
		if(value<endval){
			value++;
			element.innerHTML=value;
		}
	}, 10, endval,element);
	return interval; 
}
count();