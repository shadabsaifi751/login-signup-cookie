import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from 'next/image';

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);

  useEffect(() => {
    const isLoggedIn =
      typeof window !== "undefined" && Cookies.get("isLoggedIn");

    // const isLoggedIn =
    //   typeof window !== "undefined" && sessionStorage?.getItem("isLoggedIn");

    if (isLoggedIn) {
      router.push("/");
    }
  }, []);

  const handleLogin = () => {
    if (username && password) {
      //   sessionStorage.setItem("isLoggedIn", "true");
      //   sessionStorage.setItem("username", username);

      Cookies.set("isLoggedIn", "true");
      Cookies.set("username", username);
      router.push("/");
    }
  };

  return (
    <>
      <section className="h-screen">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="w-full md:w-8/12 lg:w-1/3">
              <Image
                src="https://turnkeytix.com/images/logo.png"
                className="block mx-auto mb-10"
                alt="logo"
                width="200"
                height="100"
              />
              <div>
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-md font-normal text-orange-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-orange-700 focus:bg-white focus:border-orange-600 focus:outline-none"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className="mb-6">
                  <input
                    type={check ? "text" : "password"}
                    className="form-control block w-full px-4 py-2 text-md font-normal text-orange-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-orange-700 focus:bg-white focus:border-orange-600 focus:outline-none"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="flex justify-between flex-wrap items-center mb-6">
                  <div className="form-group form-check">
                    <label className="form-check-label inline-block text-black cursor-pointer">
                      <input
                        type="checkbox"
                        className=" h-4 w-4 border border-gray-300 rounded-sm transition duration-200 mt-1 align-top bg-no-repeat bg-center float-left mr-2 cursor-pointer"
                        // id="exampleCheck3"
                        // checked
                        onClick={() => setCheck(!check)}
                      />
                      Remember me
                    </label>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleLogin}
                  className="inline-block px-7 py-3 bg-orange-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-orange-400 hover:shadow-lg focus:bg-orange-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-500 active:shadow-lg transition duration-150 ease-in-out w-full"
                >
                  Login
                </button>
                {/* <Link to="/signup" className="text-sm mt-5 pb-1 block text-center text-gray-200 underline">Create account</Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
