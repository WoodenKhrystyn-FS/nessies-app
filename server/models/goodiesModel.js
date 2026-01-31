//Model for goodies:
//set up an arrray for mock data

class Goodie {
    constructor({id, name, price, description, category, available = true}) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.category = category;
        this.available = available;
    }
}
module.exports = Goodie;
