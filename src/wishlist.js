import Car from "./car";

class Wishlist{
constructor(list = [], nextId = 0){
    this.list = list;
    this.nextId = nextId;
}
add(make, model, year){
    let car = new Car(this.nextId++, make, model, year);
    this.list.push(car);
}
remove(carId){
    this.list = this.list.filter((car) => car.id != carId);
};
};
export default Wishlist;