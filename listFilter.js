function listFilter(element) {
      var list = $(element).find("li");

	  //insert search box before element
	  $('<input type="text" placeholder="Search">').insertBefore( element );

	  var searchBoxCss = {"background-image":"url('searchicon.png')",
							"background-repeat":"no-repeat",
							"background-position":"95% 50%",
							"border":0,
							"padding":"0.3%",
							"border":"1px solid #ddd"
						}

	  //get the search box closest to the element
	  var searchbox = $( element ).prev();

	  searchbox.css(searchBoxCss);
  	  
  	  searchbox.bind( "keyup", function() {
	  	  if( searchbox.val().length > 0 ){
		    list.filter(":not(:contains('"+ searchbox.val() +"'))").fadeOut();
		    list.filter(":not(:visible):contains('" + searchbox.val() + "')").fadeIn();
		  }else{
		    list.fadeIn();
		  }
	  });

}