import { calcPossibleSecurityContexts } from "@angular/compiler/src/template_parser/binding_parser";

export class Article {
    id:number;
    nom:string;
    prix:number;
    img:string;
    description:string;
    categorie:string;
    sousCategorie:string;
    fabricant:string;
    version:number;
    quantite:number;
    prixtotal:number

    calcultt(){
     this.prix*this.quantite;

        
            }
}
