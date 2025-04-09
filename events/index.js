const { EventEmitter } = require('events'); // TODO 2: Import EventEmitter

const myEventEmitter = new EventEmitter(); // TODO 3: Buat instance EventEmitter

const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
};

myEventEmitter.on('birthday', birthdayEventListener); // TODO 4: Daftarkan listener untuk event 'birthday'

myEventEmitter.emit('birthday', 'Wira'); // Memicu event 'birthday' dengan nama
