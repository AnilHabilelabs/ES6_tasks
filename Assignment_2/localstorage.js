class localstorage{
    constructor(){
        this.map  = new Map();
    }
    setItem(key,value){
        if(typeof value == 'string'){
            this.map.set(key,value);
        }
        else{
            console.error("value is not in string format");
        }
    }
    getItem(key){
        return this.map.get(key);
    }
    removeItem(key){
        this.map.delete(key);
    }
    clear(){
        this.map.clear();
    }
    get length(){
        return this.map.size;
    }
}

localstorage = new localstorage();
localstorage.setItem('name','Anil');
localstorage.setItem('age','21');
localstorage.setItem('arr',JSON.stringify({arr:[1,2,3,4,5,6]}));
console.log(JSON.parse(localstorage.getItem('arr')));