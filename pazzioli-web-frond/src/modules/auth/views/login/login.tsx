import { Formlogin } from "./components/formlogin";

export function Login() {

    return (
        <>
            <div className="flex   bg-white flex-wrap-reverse"  >
                <div className=" flex   justify-center  min-h-screen  lg:items-center md:items-center bg-white  flex-1/2 "> <Formlogin/></div>
                <div className="flex-1/2">
                  <img src="/imgs/pazzioli.png" className="imagen-login-pazzioli"/>
                </div>
              
            </div>
        </>
      );
}

  ;