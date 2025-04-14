type Role = "admin" | "user" | "guest";
interface Product{
    readonly id:number,
    name: string,

}
interface User{
    firstName: string,
    lastName: string,
    age: number,
    produit:Product[],
   
}

let user: User = {
    firstName: "John",
    lastName: "Doe",
    age: 24 ,
    produit: [
        {
            id:1,
            name: "produit 1",
        }
    ]
    
}
