Ti.include(	'data/db.js',
		   	'data/usuario.js');

perfil = new Object();

perfil.createTabPerfil = function createTabPerfil() {

	var perfilWindow = Titanium.UI.createWindow({  
	    title:'Perfil',
	    backgroundColor:'stripped',
		orientationModes: [Ti.UI.PORTRAIT]    
	});
	
	var perfilTab = Titanium.UI.createTab({  
	    title:'Perfil',
	    window: perfilWindow
	});

	perfil.window = perfilWindow;
	perfil.tab = perfilTab;
		
	return perfil;
}


perfil.loadPerfilForm = function loadPerfilForm() {
	var data = user_data();
	var win = perfil.window;
	
	var view = Titanium.UI.createScrollView({
	    contentHeight: '1',
	    top: 10,
	    bottom: 10,
	   	borderRadius:10,
	   	backgroundColor:'white',
	   	left: 10,
	   	width: 300,	    
	    showVerticalScrollIndicator: true,
	    showHorizontalScrollIndicator: false,
	});
	win.add(view);


	var labelNome = Titanium.UI.createLabel({
		left: 10,
		top: 10,
		color:'#000',
		text: 'Nome',
		font:{fontSize:15},
		width:300,
		height: 'auto',
		
	});
	view.add(labelNome);
	
	
	var fieldNome = Titanium.UI.createTextField({
		color:'#336699',
	    hintText:'nome',
	    height:40,
	    top:35,
	    left:10,
	    width:280,
    	keyboardType:Ti.UI.KEYBOARD_DEFAULT,  	    
	    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	fieldNome.value = data.nome;
	
	view.add(fieldNome);
	
	var btnSalvar = Titanium.UI.createButton({
		title:'Salvar',
		width:250,
		height:35,
		top:120,
		bottom: 5,
		align: 'center'
	});
	view.add(btnSalvar);
	
	btnSalvar.addEventListener('click', function(event) {
		user = usuario_update(fieldNome.value);
		Ti.API.info(user);
		alert('Dados atualizados!');
	});
	
}

