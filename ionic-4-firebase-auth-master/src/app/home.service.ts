import { Injectable } from '@angular/core';
import 'rxjs/add/operator/filter';  


@Injectable()
export class Data {

    nada: any;
    jsonData: any;
    jsonData2: any;
 
    constructor() {
 
        this.jsonData=[
            {"id":1,"label":"Entradas","name":"Entradas","url":"entradas" }, 
            {"id":3,"label":"Tablas","name":"Tablas","url":"tablas" },
            {"id":3,"label":"Platos","name":"Platos","url":"platos" },
            {"id":3,"label":"Pastas","name":"Pastas","url":"pastas" },
            {"id":3,"label":"Minutas","name":"Minutas","url":"minuta" },
            {"id":3,"label":"Pizzas","name":"Pizzas","url":"pizzas" },
            {"id":3,"label":"Hamburguesas","name":"Hamburguesas","url":"burger" },
            {"id":3,"label":"Lomitos","name":"Lomitos","url":"lomos"},
            {"id":3,"label":"Parrillada","name":"Parrillada","url":"parrilla"},
            {"id":3,"label":"Tacos","name":"Tacos","url":"tacos" },
            {"id":3,"label":"Fajitas","name":"Fajitas","url":"fajitas" },
            {"id":3,"label":"Fried Chicken","name":"Fried Chicken","url":"fchicken" },
            {"id":3,"label":"Sandwiches","name":"Sandwiches","url":"sandwichs" },
            {"id":3,"label":"Ensaladas","name":"Ensaladas","url":"ensaladas" },
            {"id":3,"label":"Rock Kids","name":"Rock Kids","url":"rkids" },
            {"id":3,"label":"Postres","name":"Postres","url":"postres" }
    
            ];
        this.jsonData2=[
      {"id":1,"label":"Misiles Tank","name":"Misiles Tank","url":"misilestank" },
      {"id":2,"label":"Cervezas Tiradas","name":"Cervezas Tiradas","url":"cervezatirada" },
      {"id":3,"label":"Super Balòn","name":"Super Balòn","url":"superbalon" },
      {"id":3,"label":"Cocteleria","name":"Cocteleria","url":"cocteleria" },
      {"id":3,"label":"De Autor","name":"De Autor","url":"deautor" },
      {"id":3,"label":"Clàsicos","name":"Clàsicos","url":"csabor" },
      {"id":3,"label":"Gin Tonic","name":"Gin Tonic","url":"gintonic" },
      {"id":3,"label":"Whiskys","name":"Whiskys","url":"whiskys"},
      {"id":3,"label":"Espirituosos","name":"Espirituosos","url":"espirituosos" },
      {"id":3,"label":"Energizantes","name":"Energizantes","url":"energizantes" },
      {"id":3,"label":"Espumantes","name":"Espumantes","url":"espumantes" },
      {"id":3,"label":"Otros","name":"Otros","url":"other" }

      ];
 
    }
 

    
    filterItems(searchTerm){
 
        return this.jsonData.filter((item) => {
   
             return item.name.toLowerCase().includes(searchTerm.toLowerCase());
            });  
     } 
     filterItems2(searchTerm2){
  
        return this.jsonData2.filter((item) => {
             return item.name.toLowerCase().includes(searchTerm2.toLowerCase());
         });  
     }
}