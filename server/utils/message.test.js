var expect = require('expect');

var {generateMessage} = require('./message');
var {generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var from = 'Test Username';
        var text = 'Test message.';
        var message = generateMessage(from, text);


        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});

describe('generateLocationMessage', () => {
   it('should generate correct location object', () => {
       var from = 'Test Username';
       var latitude = 10;
       var longitude = 20;
       var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
       var locationMessage = generateLocationMessage(from, latitude, longitude);


       expect(locationMessage.createdAt).toBeA('number');
       expect(locationMessage).toInclude({from, url});
   });
});