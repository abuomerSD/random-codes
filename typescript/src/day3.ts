function printId(id: number | string) {
    console.log(id);
}

printId(10);
printId("10");

type Product = {
    id: string,
    name: string,
    price: number
}

function printProductInfo(product: Product){
    console.log(product);
}

printProductInfo({
    id: "rfdeh-edhtr-nhyfd-apfrv",
    name: "product 1",
    price: 10,
})

interface Blog {
    id: string,
    title: string,
    snippet: string,
    body: string,
}

let blog : Blog = {
    id: "wsawd-jygbj-fstqx-brdfg-lokqz-becgd",
    title: "Blog1",
    snippet: "Test Blog",
    body: "body"
}
console.log(blog);

// the different between type and interface is that the interface is extendable

interface Vihecle {
    speed: number,
}

interface Car extends Vihecle{
    model: string
}

const car : Car = {
    model: "Nissan 2020",
    speed: 180
}

console.log(car);