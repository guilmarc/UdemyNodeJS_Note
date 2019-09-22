//Object property shorthand

const name = 'Marco';
const userAge = 41;

const user = {
    name,
    age: userAge,
    location : "Granby"
};

console.log( user )


// ************************************
// *      Object destructuring
// ************************************
const product = {

    label: 'Red notebook',
    price: 3.90,
    stock: 201,
    salePrice: undefined

};

const {label:productLabel, stock, rating = 5} = product; // = 5  --> Sert à placer une valeur par défaut.

console.log( productLabel );
console.log( stock );
console.log( rating ); //Ne crash pas :)

const transaction = (type, { label, stock } )=> {  //Destructuring
    console.log(type, label, stock);
};

transaction("order", product);