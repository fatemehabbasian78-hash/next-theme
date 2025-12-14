let num: number = 12
let username: string = "ali alavi"

username = '110'

console.log(num);

let user_info: string[] = ['ali', 'alavi', 'qom']

let product: {
    title: string,
    price: number,
    desc: string,
    quantity: number
} = {
    title: 'apple',
    price: 12334515,
    desc: 'for test description',
    quantity: 25
}

function sum_numbers(a: number, b?: number): number {
    console.log(132156);
    let c = b || 0

    return a + c

}

sum_numbers(num)
