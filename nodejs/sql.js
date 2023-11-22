var pg = require('pg');

var connection = new pg.Pool({
  host     : 'w-uat-shop-pub-pgsql.cloud.bz',
  port     : '5432',
  database : 'db_uatw_uat',
  user     : 'user_ua_uat',
  password : 'user_ua_uat1234'
});

connection.connect();

connection.query('SELECT * FROM public.t_sys_send_message_log ORDER BY id DESC limit 2', function (error, results) {
  if (error) throw error;
  console.log('The solution is: ', results.rows);
});