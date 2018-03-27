var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var from = 'Some User';
        var text = 'some text message';
        var message = generateMessage(from, text);


        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});