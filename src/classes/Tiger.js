import Dog from "./Dog";

class Tiger extends Dog{
    constructor(){
        super();

    }
    colorOfAnimal=()=>{
        console.log("Yellow with block lines ");
    }
    foodHabits=()=>{
        console.log("Hunt animals and drink blood");
    }
    facingHumans=()=>{
        console.log("When tiger facing humans,humans will ran away from tiger");
    }
    functionOverloading=()=> {
        console.log("Overloading doesn't support in JavaScript");
    }
    functionOverloading=(a)=>{
        console.log("function with 1 parameter");
    }
    functionOverloading=(a,b)=>{
        console.log("function with 2 parameters");
    }
}export default Tiger