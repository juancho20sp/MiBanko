import {React,useState} from "react";
import MenuUsuario from "../../components/menuUsuario";
import {MenuAdmin} from "../../components/menuAdmin";

const Home = () => {
    const [currentUser,setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')));
    return (
       <div>
           { currentUser && currentUser.rol=="ADMIN"?<MenuAdmin/>:<MenuUsuario/>}
       </div>
    )
}
export default Home
