class hashMap{

    constructor(size){
        if(size){
            this.hashGrid = new Array(size);
        }
        else{
            this.hashGrid = new Array(100);
            this.size = 100;
        }
    }

    key2Hash = (key) => {
        const regExp_Email = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        let hash = 0;
        if(key.match(regExp_Email) === null){
            console.log("wrong input!");
            return ;
        }
        else{
            for(let i=0; i <key.length; ++i){
                if(key[i] === '@') break;
                else{
                    hash += key.charCodeAt(i);
                }
            }
        }
        return hash;
    }

    hash2Index = (hash) => {
        let index = hash % (this.size + 1);
        return index;
    }

    key2Index = (key) =>{
        let hash = this.key2Hash(key);
        return this.hash2Index(hash);
    }

    put = (key,value) => {
        let index = this.key2Index(key);
        if(this.hashGrid[index] === undefined){
            this.hashGrid[index]=[[key, value]];
        }
        else{
            this.hashGrid[index].push([key, value]);
        }
    }

    remove = (key) =>{
        let index = this.key2Index(key);
        for(let i =0; i <this.hashGrid[index].length; ++i){
            if(this.hashGrid[index][i][0] === key) this.hashGrid[index][i][1] = 0;
        }
    }
    
    get = (key) =>{
        let index = this.key2Index(key);
        for(let i =0; i <this.hashGrid[index].length; ++i){
            if(this.hashGrid[index][i][0] === key) console.log(this.hashGrid[index][i][1]);
        }
    }

    contatinsKey = (key) => {
        let index = this.key2Index(key);
        for(let i =0; i <this.hashGrid[index].length; ++i){
            if(this.hashGrid[index][i][0] === key) console.log(true);
        }
    }

    clear = () =>{
        this.hashGrid.length = 0;
    }

    isEmpty = () => {
        let flag = 0;
        this.hashGrid.forEach(element => {
            if(element !== undefined) flag = 1;
        });

        if(flag === 0) return false;
        else return true;
    }
    keys = () =>{
        let keyLocation = [];
        this.hashGrid.forEach((element,index) => {
            if(element !== undefined) for(let i=0; i<element.length; ++i) keyLocation.push(this.hashGrid[index][i][0]);
        });
        return keyLocation;
    }

}

//////////////////////////////////////////////// test case ////////////////////////////////////////////////////////////////////

let newGrid1 = new hashMap;
newGrid1.put('limjunhyuk97@gmail.com', '330000');
newGrid1.put('i@gmail.com', '3300000');
newGrid1.get('i@gmail.com');
newGrid1.remove('limjunhyuk97@gmail.com');
console.log(newGrid1.keys());
