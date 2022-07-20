const mysql = require('mysql2');

const mysqlConfig = {
  host: process.env.CLEARDB_HOST,
  user: process.env.CLEARDB_USER,
  password: process.env.CLEARDB_PASS,
  database: process.env.CLEARDB_DB
};

exports.game = (req, res) => {
  res.render('04_snake.ejs', null);
};

exports.postScore = (req, res) => {
  const con = mysql.createConnection(mysqlConfig);
  let data = req.body;

  con.connect(function(err) {
    if (err) throw err;

    let sql = `INSERT INTO snake_highscore (Player, Score, Speed)
               VALUES('` + data.player + `', '` + data.score + `', '` + data.speed +`');`;     
    con.query(sql, function (err, result) {
      if (err) throw err;
      res.send("Score inserted to database");;
    });
  });
};

exports.getScore = (req, res) => {
  const con = mysql.createConnection(mysqlConfig);

  con.connect(function(err) {
    if (err) throw err;

    let sql = "SELECT * FROM snake_highscore ORDER BY Score DESC, Speed DESC, ID DESC LIMIT 10;";
    con.query(sql, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  });
}