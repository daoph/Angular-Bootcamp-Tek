class Product {
    title: string;
    price: number;
    id: number;

    constructor(id: number) {
        this.id = id
    }

    printDetails() {
        console.log(`Title: ${this.title}`)
        console.log(`ID: ${this.id}`)
        console.log(`Price: ${this.price}`)
    }
}

class Tour extends Product implements Bookable, Cancelable {
    duration: string;
    availableDates: [Date]
    cancelationFee: number

    constructor(id: number, duration: string) {
        super(id);

        this.duration = duration

    }

    printDetails() {
        super.printDetails()

        console.log(`Duration: ${this.duration}`)
    }
}


class Dining extends Product {
    cuisine: string;
    childPrice: number;

    constructor(id: number, cuisine: string, childPrice: number){
        super(id);

        this.cuisine = cuisine
        this.childPrice = childPrice
    }

    printDetails(){
        super.printDetails()

        console.log(`Cuisine: ${this.cuisine}`)
        console.log(`Child Price: ${this.childPrice}`)
    }
}


interface Bookable {
    availableDates: [Date]
}

interface Cancelable{
    cancelationFee: number
}

interface ConfigOption {
    directory: string
    file: string
    maxSize?: number
}

function configSomething(op: ConfigOption){
    op.maxSize = op.maxSize || 1024

    console.log("Directory: %s", op.directory)
    console.log("File: %s", op.file)
    console.log("Max size: %s", op.maxSize)
}

function cancelBooking<T extends Cancelable & Product> (c:T){
    // console.log("Canceling booking. Charges: %d", c.cancelationFee)
console.log("Canceling: %s (%d)", c.title, c.id)
console.log("Price: %d", c.price)
console.log("Cancelation fee: %d", c.cancelationFee)
console.log("Total refund: %d", c.price - c.cancelationFee)

}



function test(p: Product){
    p.printDetails()
}

var t = new Tour (1, "8 hours")
t.title = "Trip to the Taj Mahal"
t.price = 1200.00
t.cancelationFee = 100.00

// cancelBooking(t)

configSomething({
    directory: "/dir1",
    file: "persons.json"
})


var d = new Dining(1, "curry", 50)
d.title = "Indian Takeout"
d.price = 50.00
d.cuisine = "Saag Paneer"
d.childPrice = 30.00

// test(t)
test(d)