const express = require('express');
const app = express();
app.use(express.static(__dirname));
app.get('/', function (req, res) {
  //   res.send('여기는 나의 작업용 페이지입니다.');
  res.sendFile(__dirname + '/index.html');
});

app.listen(8000, function () {
  console.log('Listening at 8000');
});
