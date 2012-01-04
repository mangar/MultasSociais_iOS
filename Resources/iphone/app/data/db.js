var DB_NAME = "multas_sociaisDB";

function getDB() {
	return Ti.Database.open(DB_NAME);
}

function getRS(selectStatement) {
	var db = getDB(); 
	var rs = db.execute(selectStatement);
	return rs;	
}


function startDatabase() {
	var db = getDB();
	
	var sqlCreateUsuario = 'CREATE TABLE IF NOT EXISTS usuario (' + 
							' id INTEGER PRIMARY KEY, ' + 
							' nome VARCHAR(255) NOT NULL, ' +
							' twitter_account VARCHAR(140), ' + 
							' email VARCHAR(255), ' + 
							' facebook_id VARCHAR(255),' + 
							' twitter_id VARCHAR(255)' + 
							')';
	
	db.execute(sqlCreateUsuario);	
}


