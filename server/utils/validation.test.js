const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString()', () => {
    it('should reject non-string values',  () => {
        var roomName = 1 ;
        var userName = {"non-string-value-test":{}};
        var response = isRealString(roomName, userName);

        expect(response).toBe(false);
    });

    it('should reject string with only spaces',  () => {
        var roomName = '    ' ;
        var userName = '   ';
        var response = isRealString(roomName, userName);

        expect(response).toBe(false);
    });

    it('should allow string with non-space characters',  () => {
        var roomName = ' Team Collab Room ' ;
        var userName = 'Test Name';
        var response = isRealString(roomName, userName);

        expect(response).toBe(true);
    });
});