
//4 WAYS TO DEFINE AN OBJECT:


//1) keyword new
/*let Book = new Object();{
    Book.title = "To Kill A Mocking bird",
    Book.price = "$20.17",
    Book.author = "That One gUY",
    Book.description = "it's a good read. I fuck with it.";

    Book.getInfo = function(){
        return this.title + "-" + "$" +this.price + " " + this.author
    }


}*/

//2) object literal

let book = {
    title: "The Secret",
    price: "17.99",
    authors: ["Lisa Nicols", "Brad Shaw", "Traci Vullinishi", "Dante Bowen"],
    description: "self help",
    "publication date": "August 17, 2001",

    getInfo: function(){
        return this.title + "-" + "$" +this.price + " " + this.author
    }
}



//FUNCTION

function Book(title){
    //properties
    this.title = "Why Men Love Bitches",
    this.authors = ["Sherry Argov", "Evelyn Mendoza", "CardiB"],
    this.description = "A book filling womens heads with complete and utter trash",
    this.price = "21.50"

    //method (external function)
    this.getInfo = getBookInfo();


    //method 

    function getBookInfo(){
        return this.title + "-" + "$" +this.price + " " + this.author
    }

}




//FACTORY FUNCTION (return)








//CONSTRUCTOR FUNCTION (this & new)






//OBJECT LITERAL

























/*function createCircle(radius){
    return{
        radius,
        draw: function(){
            console.log('sup')
        }
    };
}

const circle = createCircle(1)*/



/*function Circle(radius){
    this.radius = radius
    this.draw = function(){
        console.log('draw');
    }
}

const another = new Circle(1);*/





























/*const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function(){
        console.log('draw');
    }
}

circle.draw();*/

/*const employee = {
    baseSalary: 3000,
    overtime: 10,
    rate: 20,
    getWage: function(){
        return this.baseSalary + (this.overtime * this.rate)
    }
    
};

console.log(employee.getWage());*/



