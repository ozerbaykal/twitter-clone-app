
import { ref, uploadBytes,getDownloadURL} from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";



//bu fonksiyondan beklentimiz dosyayı alıp firebase storage'a yükleyip storage'daki url'i return etmek

const upload = async(file)=>{
    
    //1)dosya resim değilse ve dosya yoksa fon durdur
if(!file.type.startsWith("image") || !file) return null;
  

    //2)dosyanın yükleneceği konumun referansını al
 const imageRef = ref(storage,v4() + file.name);

    //3)referansını olışturduğumuz konuma  dosya yükle
await uploadBytes(imageRef,file);


    //4)yüklenen dosyanın url'ini al ve return et
const url = await getDownloadURL(imageRef);

return url;


}
export default upload;
