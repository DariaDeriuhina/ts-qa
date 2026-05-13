const user = {
    profile: {
        firstName: 'Daria',
        lastName: 'Deruigina',
        age: 24
    },

    get fullName() {
        return `${this.profile.firstName} ${this.profile.lastName}`;
    },

    set fullName(value) {
        const parts = value.split(" ");
        this.profile.firstName = parts[0];
        this.profile.lastName = parts[1];
    },

    getSummary() {
        return `User: ${this.fullName}, Age: ${this.profile.age}`;
    }
};

console.log(user.fullName);

user.fullName = 'Anna Ivanova';

console.log(user.fullName);
console.log(user.getSummary());
