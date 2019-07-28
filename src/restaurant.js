class Restaurant{

}

class RestaurantRecord{
    constructor(record){
        this.name = '';
        this._geoloc = {
            lat: 0,
            lng: 0,
        };
        this.address = '';
        this.average_cost = 0;
        this.founder = [];
        this.reliability = {
            score: 0,
            number: 0
        };
        this.recommended_dishes = [];
        this.customize = {};
        this.objectID = 0;
    }
}

module.exports= {
    Restaurant,
    RestaurantRecord
}