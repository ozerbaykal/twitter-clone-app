import { updateDoc, doc ,arrayRemove,arrayUnion} from "firebase/firestore";
import { CiShare2 } from "react-icons/ci";
import { FaRegHeart, FaRetweet ,FaHeart} from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";
import { auth, db } from "../../firebase";


const Buttons = ({ tweet }) => {
  //oturumu açık olan kullanıcı bu tweet'İ likeladı mı?
  const isLiked= tweet.likes.includes(auth.currentUser.uid)
  //like butonuna tıklanınca :
  const toogleLike = async() => {
    
    //güncellenecek dökümanın referansını al
    const tweetRef = doc(db, "tweets", tweet.id);

 //kullanıcı likeladıysa
 //user idsini likes dizinden kaldır
 //likeladıysa user idsini likes dizisine ekle
    await updateDoc(tweetRef ,{
      likes: isLiked? 
      arrayRemove(auth.currentUser.uid)
      :arrayUnion(auth.currentUser.uid),
    });
  };
  return (
    <div className="flex justify-between items-center">
      <div className="p-3 rounded-full cursor-pointer  transition hover:bg-[#0000ff6d]">
        <LuMessageCircle />
      </div>
      <div className="p-3 rounded-full cursor-pointer  transition hover:bg-[#0080006e]">
        <FaRetweet />
      </div>
      <div  onClick={toogleLike} className="p-3 rounded-full cursor-pointer  transition hover:bg-[#e2607694] flex items-center gap-2">
       {isLiked ?<FaHeart className="text-red-500"/>: <FaRegHeart/>} 
        {tweet.likes.length}
      </div>
      <div className="p-3 rounded-full cursor-pointer  transition hover:bg-[#8080808c]">
        <CiShare2 />
      </div>
    </div>
  );
};

export default Buttons;
