$(document).ready(function(){

	$("a.switcher").bind("click", function(e){
		e.preventDefault();
		
		//alert("clicked..");
		var theid = $(this).attr("id");
		var theproducts = $("ul#products");
		var classNames = $(this).attr('class').split(' ');
		
		//alert("id: " + theid + ", theproducts: " + theproducts + ", classNames: " + classNames);
		var gridthumb = "images/products/grid-default-thumb.png";
		var listthumb = "images/products/list-default-thumb.png";
		
		if($(this).hasClass("active")) {
			// if currently clicked button has the active class
			// then we do nothing!
			return false;
		} else {
			// otherwise we are clicking on the inactive button
			// and in the process of switching views!

  			if(theid == "gridview") {
				//alert("gridview clicked..");
				$(this).addClass("active");
				$("#listview").removeClass("active");
			
				$("#listview img").attr("src","images/list-view.png");
			    
				var theimg = $("#gridview img");
				theimg.attr("src","images/grid-view-active.png");
				console.log(theimg);
			
				// remove the list class and change to grid
				theproducts.removeClass("list");
				theproducts.addClass("grid");
			
				// update all thumbnails to larger size
				$("img.thumb").attr("src",gridthumb);
			}
			
			else if(theid == "listview") {
				$(this).addClass("active");
				$("#gridview").removeClass("active");
					
				$("#gridview img").attr("src","images/grid-view.png");
					
				var theimg = $("#listview img");
				theimg.attr("src","images/list-view-active.png");
					
				// remove the grid view and change to list
				theproducts.removeClass("grid")
				theproducts.addClass("list");
				// update all thumbnails to smaller size
				$("img.thumb").attr("src",listthumb);
			} 
		}

	});
});