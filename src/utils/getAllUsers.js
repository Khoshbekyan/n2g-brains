import { strToJson } from "./strToJson";

export const  getAllUsers = () => {

    const values = []
    const keys = Object.keys(localStorage)
        
  
    for(let i = 0; i < keys.length; i++) {
        values.push(strToJson(localStorage.getItem(keys[i])));
    }
  
    return values;
  }