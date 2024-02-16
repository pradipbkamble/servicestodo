import { Injectable} from '@angular/core';
import { Ipassenger } from './interface';

@Injectable({
  providedIn: 'root'
})
export class Todoservice1Service{

  constructor() { }
  passengerarray:Array<Ipassenger>=[
    {
      name:"johna",
      id:"1",
    },
    {
      name:"johnv",
      id:"2"
    },
    {
      name:"johni",
      id:"3"
    }
  ]
    //fetch get data from backend or array
  fetchpassenger():Array<Ipassenger>{
    return this.passengerarray
  }
  //send data from input to backend
  addtodo(toobj:Ipassenger){
    this.passengerarray.push(toobj)
  }
removetodo(id:string){
  let getIndex=this.passengerarray.findIndex(todo=>todo.id===id)
  console.log(getIndex)
  this.passengerarray.splice(getIndex,1)
  
}

}
