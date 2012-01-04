
function createTabUltimas() {

	// create base UI tabs and  windows
	var ultimasWindow = Titanium.UI.createWindow({  
	    title:'Últimas',
	    backgroundColor:'#fff',
		orientationModes: [Ti.UI.PORTRAIT]    
	});
	
	var ultimasTab = Titanium.UI.createTab({  
	    title:'Últimas',
	    window: ultimasWindow
	});
	 

	var label1 = Titanium.UI.createLabel({
		color:'#999',
		text:'Últimas Multas',
		font:{fontSize:20,fontFamily:'Helvetica Neue'},
		textAlign:'center',
		width:'auto'
	});
	
	ultimasWindow.add(label1);

	
	return ultimasTab;
	
}



