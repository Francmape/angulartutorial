export class Recipe {
     public name: string;
     public description: string;
     public imageUrl: string;

     constructor(name:string,descrition: string, imageUrl:string){
        this.name = name,
        this.description = descrition,
        this.imageUrl = imageUrl
     }
}