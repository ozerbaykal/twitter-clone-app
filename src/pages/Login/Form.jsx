import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ResetButton from "./ResetButton";
const Form = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isError, setIsError] = useState(false);

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      //kullanıcı hesabı oluştur
      createUserWithEmailAndPassword(auth, email, pass)
        .then(() => {
          toast.success("hesabınız oluşturuldu");
          navigate("/feed");
        })
        .catch((err) => toast.error("hata! :" + err.code));
    } else {
      //var olan hesaba giriş yap
      signInWithEmailAndPassword(auth, email, pass)
        .then(() => {
          toast.success("Hesaba giriş yapıldı");
          navigate("/feed");
        })
        .catch((err) => {
          toast.error("hata! :" + err.code);
          if (err.code === "auth/invalid-credential") {
            setIsError(true);
          }
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col ">
        <label>Email</label>
        <input
          type="text"
          required
          className=" text-black rounded mt-1 p-2 outline-none shadow-lg focus:shadow-[gray]"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="mt-5">Şifre</label>
        <input
          type="text"
          required
          className=" text-black rounded mt-1 p-2 outline-none shadow-lg focus:shadow-[gray]"
          onChange={(e) => setPass(e.target.value)}
        />
        <button className="mt-10 bg-white text-black rounded-full p-1 font-bold hover:bg-gray-300 transition">
          {isSignUp ? "Kaydol" : " Giriş Yap"}
        </button>
      </form>
      <p className="mt-5">
        <span className="text-gray-500">
          {isSignUp ? "Hesabınız varsa" : "Hesabınız yoksa"}
        </span>
        <span
          onClick={() => setIsSignUp(!isSignUp)}
          className="text-blue-500 ms-2 cursor-pointer"
        >
          {isSignUp ? "Giriş Yapın" : "Kaydolun"}
        </span>
      </p>

      {isError && <ResetButton email={email} />}
    </>
  );
};

export default Form;
