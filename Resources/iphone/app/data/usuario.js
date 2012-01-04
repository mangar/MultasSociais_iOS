Ti.include(	'db.js');


function usuario_count() {
	var db = getDB();
	var rs = getRS('SELECT count(*) as count FROM usuario');

	var count = 0;	
	while (rs.isValidRow()) {
  		count = rs.fieldByName('count');
  		rs.next();
	}
	rs.close();	
		
	Ti.API.info('Usuarios encontrados: ' + count);
		
	return count;
	
}

function usuario_update(nome) {
	
	var db = getDB();
	
	var stmt = "UPDATE usuario SET nome = ?";
	db.execute(stmt, nome);
	
	return user_data();
	
}


function user_data() {
	
	var data = new Object();
	
	var db = getDB();
	var rs = getRS('SELECT id, nome, email FROM usuario');

	while (rs.isValidRow()) {
  		data['id'] = rs.fieldByName('id');
  		data['nome'] = rs.fieldByName('nome');
  		data['email'] = rs.fieldByName('email');
  		
  		data['data'] = data.id + ' ' + data.nome + ' ' + data.email;
  		Ti.API.info(data);
  		rs.next();
	}
	rs.close();	

	return data; 
}


