
class DataCarousel{
    constructor(size,data){
        this.data = data;
        this.size = size;
        this.pointer = 0;
    }

    nextElement() {
        if (this.pointer < this.data.length - 1) {
            this.pointer += 1;
        }
        console.log("Next:"+ this.pointer);
        return this.data[this.pointer];  // Always return the current element after moving forward
    }

    prevElement() {
        if (this.pointer > 0) {
            this.pointer -= 1;
        }
        console.log("Prev:"+ this.pointer);
        return this.data[this.pointer];  // Always return the current element after moving backward
        
    }

    currentElement(){
        if(this.data.length===0){
            return "No Content";
        }
        console.log("Current:"+ this.pointer);
        return this.data[this.pointer];
    }

    currentElementPosition(){
        return this.pointer;
    }

    getElementCount(){
        return this.size;
    }

}


export default DataCarousel;