import { BiSolidDoorOpen } from "react-icons/bi";
import { navSections } from "../../constans";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";


const Nav = ({ user }) => {
  return (
    <nav className="flex flex-col justify-between items-end px-2 py-4">
      <div>
        <img src="/x-logo.webp" alt="" className="w-14 mb-4" />
        {navSections.map((i, key) => (
          <div
            key={key}
            className="flex items-center gap-3 text-2xl max-md:text-xl p-3 cursor-pointer 
         rounded-lg justify-center transition hover:bg-[#505050b7] 
         "
          >
            {i.icon}
            <span className="whitespace-nowrap max-md:hidden">{i.title}</span>
          </div>
        ))}
      </div>
      <div >
        {!user ? (
          <div className="w-12 h-12 bg-gray-400 rounded-full animate-bounce">
            {" "}
          </div>
        ) : (
         
            <div className="flex flex-col gap-5">
              <div className="flex flex-col items-center gap-2 ">
                <img
                  className="rounded-full max-w-[45px]"
                  src={user.photoURL}
                  alt=""
                />
                <p className="max-md:hidden">{user.displayName}</p>
              </div>
              <button onClick={()=>signOut(auth)}
                className="flex justify-center items-center gap-2 md:text-[15px] p-1
             bg-zinc-700 rounded text-xl  transition hover:bg-zinc-900"
              >
                <BiSolidDoorOpen />
                <span className="max-md:hidden">Çıkış Yap</span>
              </button>
            </div>
         
        )}
      </div>
    </nav>
  );
};

export default Nav;
