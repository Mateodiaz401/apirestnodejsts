//un interface es como un contrasto no tiene lógica de programación, es  solo una declaración propiedad y tipo de dato


export interface Car {
    name: string,
    color: string,
    gas: "Gasoline" | "electric",
    year: number,
    description: string,
    price: number
}