

multar = new Object();
obj = multar;

obj.createTabMultar = function createTabMultar() {

	// create base UI tabs and  windows
	var multarWindow = Titanium.UI.createWindow({  
	    title:'Multar',
	    backgroundColor:'stripped',
		orientationModes: [Ti.UI.PORTRAIT]      
	});
	
	var multarTab = Titanium.UI.createTab({  
	    title:'Multar',
	    window: multarWindow
	});
	
	
	obj.window = multarWindow;
	obj.tab = multarTab;
	
	obj.createForm(multarWindow);
	
	 
	return obj;
	
}


obj.createForm = function _createForm() {
	obj.createPhotoView();	
}


obj.createPhotoView = function _createPhotoView() {
	
	var win = obj.window;

	var view = Titanium.UI.createScrollView({
	    contentHeight: '1',
	    top: 20,
	    height: 150,
	    // bottom: 10,
	   	borderRadius:10,
	   	backgroundColor:'white',
	   	left: 10,
	   	width: 300,	    
	    showVerticalScrollIndicator: true,
	    showHorizontalScrollIndicator: false,
	});
	win.add(view);	

		
	obj.btnFotoGallery = Ti.UI.createButton({
		top:10,
		left:10,
		title: "Selecionar na Minha Biblioteca",
		height: 40,
		width: 280,
		
	});
	view.add(obj.btnFotoGallery);
	
	obj.btnFotoGallery.addEventListener('click', function(event) {
		Ti.Media.openPhotoGallery();
	});
	
	
	obj.btnFoto = Ti.UI.createButton({
		top:70,
		left:10,
		title: "Tirar Foto",
		height: 40,
		width: 280,
		
	});
	view.add(obj.btnFoto);
	
	obj.btnFoto.addEventListener('click', function(event) {
		Ti.API.info("1");
		
		var pictureWindow = Titanium.UI.createWindow({  
		    title:'Multar',
		    backgroundColor:'stripped',
			orientationModes: [Ti.UI.PORTRAIT]      
		});		
		
		
		var scanner = Titanium.UI.createView({
		        width:260,
		        height:200,
		        borderColor:'red',
		        borderWidth:5,
		        borderRadius:15
		});
		
		var button = Titanium.UI.createButton({
		        color:'#999',
		        bottom:10,
		        width:301,
		        height:57,
		        font:{fontSize:20,fontWeight:'bold',fontFamily:'Helvetica Neue'},
		        title:'Take Picture'
		});
		
		var messageView = Titanium.UI.createView({
		        height:30,
		        width:250,
		        visible:false
		});
		
		var indView = Titanium.UI.createView({
		        height:30,
		        width:250,
		        backgroundColor:'#000',
		        borderRadius:10,
		        opacity:0.7
		});
		messageView.add(indView);
		
		// message
		var message = Titanium.UI.createLabel({
		        text:'Picture Taken',
		        color:'#fff',
		        font:{fontSize:20,fontWeight:'bold',fontFamily:'Helvetica Neue'},
		        width:'auto',
		        height:'auto'
		});
		messageView.add(message);		
				
		var overlayView = Titanium.UI.createView();
		overlayView.add(scanner);
		overlayView.add(button);
		overlayView.add(messageView);
		overlayView.hide();
		
		button.addEventListener('click',function(){
				// só funciona no próprio iphone.... 			
		        // scanner.borderColor = 'blue';
		        // Ti.Media.takePicture();
		        // messageView.animate({visible:true});
		        // setTimeout(function(){
		                // scanner.borderColor = 'red';
		                // messageView.animate({visible:false});
		        // },500);
		        
		        Ti.API.info("1.1");
		        pictureWindow.close();
		        Ti.API.info("1.2");
		        
		});
		
		pictureWindow.add(overlayView);
		pictureWindow.open({
			modal:true,
    		modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL,
    		modalStyle: Ti.UI.iPhone.MODAL_PRESENTATION_FORMSHEET,
		});
		overlayView.show();
		
		
		// Titanium.Media.showCamera({
		        // success:function(event){
		                // var imageView = Ti.UI.createImageView({image:event.media});
		                // win.add(imageView);
		                // Ti.Media.hideCamera();
		        // },
		        // cancel:function(){
		        // },
		        // error:function(error){
		                // var a = Titanium.UI.createAlertDialog({title:'Camera'});
		                // if (error.code == Titanium.Media.NO_CAMERA){
		                        // a.setMessage('Please run this test on device');
		                // }
		                // else{
		                        // a.setMessage('Unexpected error: ' + error.code);
		                // }
		                // a.show();
		        // },
		        // overlay: overlayView,
		        // showControls: false,
		        // mediaTypes: Ti.Media.MEDIA_TYPE_PHOTO,
		        // autohide: false
		// });	
	
		
// Titanium.Media.showCamera({
    // success:function(event)
    // {
        // var image = event.media;
        // if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO)
        // {
//  
            // var imageView = Ti.UI.createImageView({width:148,height:148,image:event.media,top:200,left:70});
            // win.add(imageView);  
        // }
        // else
        // {
            // // alert user that video is not supported
        // }
    // },
    // cancel:function()
    // {
               // // do nothing
    // },
    // error:function(error)
    // {
        // // create alert
        // var a = Titanium.UI.createAlertDialog({title:'Camera'});
//  
        // // set message
        // if (error.code == Titanium.Media.NO_CAMERA)
        // {
            // a.setMessage('Camera Not Found .. ' + error.code);
        // }
        // else
        // {
            // a.setMessage('Unexpected error: ' + error.code);
        // }
        // a.show();
    // },
    // saveToPhotoGallery:true,
    // allowEditing:true,
    // mediaTypes:[Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO]
    // });
		
		// var cameraWindow = Titanium.UI.createWindow({
  			// backgroundColor:'#FFF'
		// });
//  
		// var startVideoButton = Titanium.UI.createButton({
  			// bottom:10, width:120, height:40,
  			// title:'Start Video'
		// });
// 		
		// var overlay = Titanium.UI.createView();
		// overlay.add(startVideoButton);
// 
// 
		// Ti.Media.showCamera({
	    	// success: function(event) { alert('success!'); },
	    	// cancel: function(event) { alert('cancel ... ' + event); },
		    // error: function(event) { alert('error ... ' + event); },
		    // // saveToPhotoGallery: false,
		    // // allowEditing: false,
		    // overlay: overlay,
		    // // transform: overylayBugFix,
		    // // autohide: false,
		    // showControls: false,
		// });
// 
		// Ti.API.info("2");
// 
		// Ti.Media.takePicture();
		
		// Ti.Media.showCamera({
			// success: 
			// error: function(e) { alert('error ... ' + e.toString()); },
			// saveToPhotoGallery: true,
			// allowEditing: true,
		// });
		Ti.API.info("3");
	});
		
	
}


