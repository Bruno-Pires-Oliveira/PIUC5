
import {Login} from "./Login.js"
class DataUser{
    constructor(){
        this.listaUser = []
    }
    login(usuario, senha) {
      this.listaUser.push(new Login(usuario,senha))
    }
}
export {DataUser}