// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

Ti.include(	'app/ultimas.js',
			'app/multar.js',
			'app/perfil.js',
			'app/data/db.js',
			'app/data/usuario.js');


Ti.API.info("Starting Database....");
startDatabase();
insertDefaultData_Demo();
Ti.API.info("....done!");


// create tab group
var tabGroup = Titanium.UI.createTabGroup();
 
tabGroup.addTab(createTabUltimas());

var _multar = multar.createTabMultar();
tabGroup.addTab(_multar.tab);

var _perfil = perfil.createTabPerfil();
tabGroup.addTab(_perfil.tab);


tabGroup.addEventListener('focus', function(event) {
	Ti.API.info('tab changed to ' + tabGroup.activeTab.title);
	
	title = tabGroup.activeTab.title;
	
	if (title == "Perfil") {
		perfil.loadPerfilForm();
	}
	
	
});


tabGroup.open();








function insertDefaultData_Demo() {
	var count = usuario_count();
	if (count == 0) {
		var db = getDB();	
		db.execute('INSERT INTO usuario (nome, email) VALUES (?, ?)', 'Marcio Garcia', 'marcio@marciogarcia.com');
	}	
}
