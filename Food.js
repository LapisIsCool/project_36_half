class Food {
    constructor() {
        this.foodStock = 0;
        this.lastFed;
    }

    // display(){

    //     if(){

    //     } else {

    //     }
    // }

    getFoodStock(){
        var getFoodRef = database.ref("Food");
        getFoodRef.on("value", function(data){
            gameState = data.val();
        });
        // console.log("hi");
    }

    updateFoodStock(foodStock){
        database.ref('/').update({
            gamestate: foodStock
        });
        // console.log("hi");
    }

    deductFood(){

    }

}