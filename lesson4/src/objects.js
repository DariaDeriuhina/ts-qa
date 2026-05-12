const user = {
    name: 'Daria',
    age: 24,

    address: {
        city: 'Kyiv',
        street: 'Central'
    },

    hobbies: ['reading', 'sports', 'coding'],

    printInfo: function () {
        console.log(`Name: ${this.name}`);
        console.log(`City: ${this.address.city}`);
        console.log('Hobbies:');

        this.hobbies.forEach(hobby => {
            console.log('- ' + hobby);
        });
    }
};

user.printInfo();
