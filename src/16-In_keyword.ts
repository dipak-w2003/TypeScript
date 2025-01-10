
// ? Keyword "in" checks key 
type client = {
    name: string,
    age?: number
}
const client0: client = {
    name: "Samurai DK"
}
const client1: client = {
    name: "Dipak Tamang",
    age: 23
}
function PrintAge(client: client) {
    // ? in checks if obj contains that 'key'
    if ("age" in client) console.log(`${client.name} your age : ${client.age}`)
    if ("age"! in client) console.log(`${client.name}, info unvailable `)
}

PrintAge(client0)
PrintAge(client1)



