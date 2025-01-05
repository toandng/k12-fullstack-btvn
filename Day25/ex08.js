const user = {
    name: "toan",
    sayHello() {
        console.log("Hello");
        
    },
};

const client = Object.create(user, {
    name: { value: "duc toan", writable:true, enumerable:true, configurable:true},
    age: { value: 20, writable:false, enumerable:false, configurable: false},
    address: {value: "HN", writable:true},
    email: {value: "toan@gmail.com"},
    sayGoobye: {value: function() {
        console.log("sayGoobye");
        
    }}
});

console.log(client);

console.log(client.name);
client.sayHello();
client.name = "F8";
client.age = 3;
console.log(client);
client.sayGoobye();

for(let key in client) {
    console.log(`${key} : ${client[key]}`);
}



