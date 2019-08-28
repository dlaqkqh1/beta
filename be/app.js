const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!\n');
 });

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

app.use('/api', require('./routes/api'));

const mongoose = require('mysql')

// const User = require('./models/users')
//
// mongoose.connect('mongodb://localhost:27017/beta', { useCreateIndex: true,
//   useNewUrlParser: true }, (err) => {
//    if (err) return console.error(err)
//    console.log('mongoose connected!')

   //쓰기
   // User.create({ name: '하하' })
   //     .then(r => console.log(r))
   //      .catch(e => console.error(e))

   //읽기
   // User.find()
   //      .then(r => console.log(r))
   //      .catch(e => console.error(e))

  // 업데이트(수정)
  // User.updateOne({ _id: '5cbd50967c00ec110c8d7912' }, { $set: { age: 27 } })
  //
  // .then(r => {
  //   console.log(r)
  //   console.log('updated')
  //   return User.find()
  // })
  //
  // .then(r => console.log(r))
  // .catch(e => console.error(e))

  //삭제
  // User.remove({})
  // User.deleteMany({})

  // User.deleteOne({ name: '하하' })
  //     .then(r => console.log(r))
  //     .catch(e => console.error(e))

// })
