class Users {
    constructor() {
        this.users = [];
    }

    addUser(id, name, room) {
        var user = {
            id: id,
            name: name,
            room: room
        };

        this.users.push(user);
        return user;
    }


    removeUser(id) {
        let user = this.getUser(id);
        if(user){
            this.users = this.users.filter((user) => user.id !== id);
        }

        return user;
    }


    getUser(id) {
       return this.users.filter((user) => user.id === id)[0] // if true return first user in users[]
    }


    getUserList(room){
        let users = this.users.filter((user) => {
            return user.room === room;
        });
        let namesArray = users.map((user) => {
            return user.name;
        });

        return namesArray;
    }
}


module.exports = {Users};
