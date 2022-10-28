const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

let sql = `
select single.id, "シングル名", "初日売上げ", "初週売上げ", "名前","生年月日" from single inner join center on single.center_id=center.id;
`

db.serialize( () => {
	db.all( sql, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		for( let data of row ) {
			console.log( data.id + ' : ' + data.シングル名 + ' : ' + + data.初日売上げ + ' : ' + data.初週売上げ + ' : ' + data.名前 + ' : ' + data.生年月日);
		}
	});
});
