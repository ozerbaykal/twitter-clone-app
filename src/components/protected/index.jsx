import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../../firebase"
import { useEffect,useState } from "react"
import { Outlet, Navigate} from "react-router-dom"



const Protected = () => {
    const [isAuth , setIsAuth]=useState();

    //kullanıcının oturum verilerini al 
    useEffect(()=>{
        //bu method kullanıcı oturumunu izler
        onAuthStateChanged(auth,(user)=>{
            setIsAuth(user ? true:false);
        })
    },[]);

 



    //eğer kullanıcının oturumu kapalıysa logine yönlendir
    if( isAuth===false ){
        return <Navigate  to="/" replace/>
    }
  return (
    //oturum açıksa alt route' un bileşenlerini ekrana bas
  <Outlet/>
  )
}

export default Protected