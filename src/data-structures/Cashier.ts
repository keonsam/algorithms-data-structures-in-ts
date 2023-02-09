import { Queue } from "./Queue";

class Customer {
  name: string;
  order: string;
  constructor(name: string, order: string) {
    this.name = name;
    this.order = order;
  }
}

export class Cashier {
  customers: Queue<Customer>;
  constructor() {
    this.customers = new Queue();
  }

  addOrder(customer: Customer) {
    this.customers.enqueue(customer);
  }

  deliverOrder() {
    const finishedCustomer =  this.customers.dequeue();

    if (!finishedCustomer) {
        throw new Error("no Customer is available.")
    }
    console.log(`${finishedCustomer.name}, your ${finishedCustomer.order} is ready`);
  }
}


const cashier = new Cashier();
const customer1 = new Customer('Jim',"Fries");
const customer2 = new Customer('Sammie',"Burger");
const customer3 = new Customer('Peter',"Drink");
cashier.addOrder(customer1);
cashier.addOrder(customer2);
cashier.addOrder(customer3);

cashier.deliverOrder();
cashier.deliverOrder();
cashier.deliverOrder();