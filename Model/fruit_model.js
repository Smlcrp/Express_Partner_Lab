class Collection {
    #Model
    #currentId
    #items
    constructor(model, startingData) {
        this.#Model = model;
        this.#currentId = 0;
        this.#items = this.#populateItems( startingData );
    }
    #populateItems( startingData ) {
        return startingData.reduce(( acc, item, idx ) => {
            this.#currentId = idx;
            acc[this.#currentId] = new this.#Model(item, idx)
            return acc;
        }, {});
    }
};
class Fruit {
    constructor( data, id ) {
        this.id = id;
        this.name = data.name;
        this.price = data.price;
        this.image = data.image;
    }
};

module.exports = new Collection(Fruit, [
    {
        name: "Pineapple",
        price: 6,
        image: "https://www.dole.com/-/media/project/dole/produce-images/fruit/pineapple_cut_web.png?rev=77f42516c642431eac65057385324af7&hash=144F30EB89D58879E70528F52E169238",
    },
    {
        name: "Mango",
        price: 5,
        image: "https://media.istockphoto.com/photos/mango-picture-id529964085",
    },
    {
        name: "Watermelon",
        price: 3,
        image: "https://www.gardeningknowhow.com/wp-content/uploads/2021/05/whole-and-slices-watermelon-400x300.jpg",
    }
]);