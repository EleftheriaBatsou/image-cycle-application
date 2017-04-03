window.addEventListener("load", function(){
	var items_container = document.getElementById("items_container");
	var thumbtimer, ti=0
	var obj1 = { name:"Calendar", pics:["http://i1356.photobucket.com/albums/q729/eleftheria_b/dailycssimages/9.calendar_zps15jzrnxs.png",
                                    "http://i1356.photobucket.com/albums/q729/eleftheria_b/dailycssimages/calendar-3_zpsag9p8xhz.png",
                                      "http://i1356.photobucket.com/albums/q729/eleftheria_b/dailycssimages/calendar-2_zpsb04km53h.png"] };
  
	var obj2 = { name:"Notepad", pics:["http://i1356.photobucket.com/albums/q729/eleftheria_b/dailycssimages/8.nodepad_zpsnbjaevq1.png",
                                     
 "http://i1356.photobucket.com/albums/q729/eleftheria_b/dailycssimages/notepad-3_zpskzuks0ao.png",                                    
                                     "http://i1356.photobucket.com/albums/q729/eleftheria_b/dailycssimages/notepad-2_zps2biwmgtd.png"] };
  
	var obj3 = { name:"Tiger", pics:[
  "http://i1356.photobucket.com/albums/q729/eleftheria_b/dailycssimages/4.tiger_zpsd7sm9sck.png",
   "http://i1356.photobucket.com/albums/q729/eleftheria_b/dailycssimages/tiger-2_zpsvv4cbuvf.png",
   "http://i1356.photobucket.com/albums/q729/eleftheria_b/dailycssimages/tiger-3_zpse6drkmjm.png"] };
  
  
	var ary = [obj1,obj2,obj3];
	for(var i=0; i < ary.length; i++){
		var div = document.createElement("div");
		var img = document.createElement("img");
		var span = document.createElement("span");
		div.className = "item";
		img.oi = i;
		img.src = ary[i].pics[0];
		span.innerHTML = ary[i].name;
		items_container.appendChild(div);
		div.appendChild(img);
		div.appendChild(span);
		img.addEventListener("mouseover", function(event){
		    thumbtimer = setInterval(function(){
			    ti++;
			    if(ti == ary[event.target.oi].pics.length){
				    ti = 0;
			    }
			    event.target.src = ary[event.target.oi].pics[ti];
		    }, 700);
        });
		img.addEventListener("mouseout", function(event){
			clearInterval(thumbtimer);
			ti = 0;
			event.target.src = ary[event.target.oi].pics[ti];
		});
	}
});