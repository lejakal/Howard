export interface Task {
    id:string;
    name:string;
    species:string;
    gender:string;
    house:string;
    dateOfBirth:string;
    yearOfBirth:number;
    ancestry:string;
    eyeColour:string;
    hairColour:string;
    actor: string;
alive: boolean;
hogwartsStaff: boolean;
hogwartsStudent: boolean;
image: string;
patronus:string;


    wand:ReadonlyArray<string>;
}
export interface Aspirantes {
    id:number;
    nombre:string;
    apellido:string;
    identificacion:number;
    edad:number;
    casa:string;
}
export interface casa{
    name :string;
}

