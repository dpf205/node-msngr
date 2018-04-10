const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'User 1',
            room: 'Room One'
        }, {
            id: '2',
            name: 'User 2',
            room: 'Room 2'
        }, {
            id: '3',
            name: 'a username',
            room: 'Room One'
        }];
    });

    it(' should add new user', () => {
        let users = new Users();
        let user = {
            id: '123456789',
            name: 'some username',
            room: ' The Dev team'
        };
        let resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        let userId = '1';
        let user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        let userId = '99';
        let user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        let userId = '2';
        let user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        let userId = '99';
        let user = users.getUser(userId);

        expect(user).toNotExist();
    });

    it('should return names for Room One', () => {
        let userList = users.getUserList('Room One');

        expect(userList).toEqual(['User 1', 'a username']);
    });

    it('should return names for Room 2', () => {
        let userList = users.getUserList('Room 2');

        expect(userList).toEqual(['User 2']);
    });
});