// #id
// attr
// .class

//TODO: fix _blank non opening new tab

/* TITLE */
function createTitle(mainTitleStr,subTitleStr) {
	$(	'<div class="col align-self-center">' +
		'	<h1 class="display-1">' + mainTitleStr + '</h1>' +
		'	<h3 class="display-4 text-muted">'+ subTitleStr + '</h3>' +
		'</div>').appendTo('#Title');
	
	//$('<h1 class="display-1">Raymond Hruby II</h1>').appendTo('
	
	//$( "#Title > div" )
	//$('#parent').append('<div>hello</div>');    
	// or
	//$('<div>hello</div>').appendTo('#parent');
}




/* NAVIGATION BAR */
//nav bar use from html template
function setActiveNav(navBarItemNameStr){
	$('.nav-link:contains(' +navBarItemNameStr+ ')').addClass('active');
}




/* MODAL */
//modal-header | modal-body | modal-footer to go inside modal-content
function initiateModal(newModalID){
	$(	'<div class="modal fade" id='+newModalID+' tabindex="-1" role="dialog"> '+
		'	<div class = "modal-dialog" role="document"> '+
		'		<div class="modal-content"> '+
		'		</div> '+
		'	</div> '+
		'</div>').appendTo('#Column_Main .row');
}
//add_() inserted into modal-content,   insert_() inserted into modal-body
function addModalHeader(modalID, headerName){
	$(	'<div class="modal-header"> '+
		'	<h5 class="modal-title">' + headerName + '</h5> '+
		'	<button type="button" class="close" data-dismiss="modal" aria-label="Close"> '+
		'		<span aria-hidden="true">&times;</span> '+
		'	</button> '+
		'</div> ').appendTo('#'+modalID+' .modal-content');
}

function addModalBody(modalID, htmlSection){
	$(	'<div class="modal-body">'+htmlSection+'</div>').appendTo('#'+modalID+' .modal-content');
}

//param: <str>modalID | <str>videoEmbedLink
function insertModalBodyVideo(modalID, videoEmbedLink){
	$(	'<div class="embed-responsive embed-responsive-16by9">'+
		'	<iframe src='+videoEmbedLink+' frameborder="0" allow="encrypted-media" allowfullscreen style="border: solid 4px #323232;"></iframe> '+
		'</div>').appendTo('#'+modalID+' .modal-body');
}

function insertModalBodyDocumentation(modalID, docLink, description){
	if(arguments.length == 3){
		$( 	'<a href='+docLink+' style="padding:5px 0px 5px 0px;">'+description+'</a>' ).appendTo('#'+modalID+' .modal-body');
	}else {
		$( 	'<a href='+docLink+' style="padding:5px 0px 5px 0px;" target="_blank" rel="noopener noreferrer">Link to Full Documentation</a>' ).appendTo('#'+modalID+' .modal-body');
	}
}

function addModalFooter(modalID){
	$(	'<div class="modal-footer">' +
		'	<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>' +
		'</div>').appendTo('#'+modalID+' .modal-content');
}




/* CARD */
//UNTESTED, ***add card ID
function initiateCard(newCardID){
	$(	'<div id='+newCardID+' class="col-sm-6 col-md-6 col-lg-4 col-xl-4">'+
		'	<div class="card mb-3 shadow" style="max-width: 30rem;">'+
		'	</div>'+
		'</div>').appendTo('#Column_Main .row');
}

function addCardImage(cardID,source){
	$(	'<img src='+source+' class="card-img-top img-fluid" alt="err">').appendTo('#'+cardID+' .card');
}

function addCardHeader(cardID,subtitle){
	$(	'<div class="card-header">'+subtitle+'</div>').appendTo('#'+cardID+' .card');
}

function addCardBody(cardID,modalID,title,htmlTextSection){
	$(	'<div class="card-body">'+
		'	<h4 class="card-title">'+title+'</h4>'+
			htmlTextSection+
		'	<a href="#'+modalID+'" class="stretched-link" data-toggle="modal">Click for more information.</a>'+
		'</div>').appendTo('#'+cardID+' .card');
}


