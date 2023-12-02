import { useRouter } from "next/router";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import Cookies from "js-cookie";
const UserData = dynamic(() => import("../components/userData"), {
  ssr: false, // Disable server-side rendering
});

const Home = () => {
  const router = useRouter();
  const data = typeof window !== "undefined" && Cookies.get("username");

  // const data =
  //   typeof window !== "undefined" && sessionStorage?.getItem("username");
  useEffect(() => {
    const isLoggedIn =
      typeof window !== "undefined" && Cookies.get("isLoggedIn");

    // const isLoggedIn =
    //   typeof window !== "undefined" && sessionStorage?.getItem("isLoggedIn");

    if (!isLoggedIn) {
      router.push("/login");
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove("isLoggedIn");
    Cookies.remove("username");
    // sessionStorage.removeItem("isLoggedIn");
    router.push("/login");
  };

  return (
    <div className="flex items-center justify-center flex-col gap-4 mt-40">
      {/* {data ? <h2>Welcome, {data}!</h2> : null} */}
      {data && <UserData data={data} />}
      <button
        type="button"
        onClick={handleLogout}
        className="inline-block md:w-1/6 px-7 py-3 bg-orange-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-orange-400 hover:shadow-lg focus:bg-orange-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-500 active:shadow-lg transition duration-150 ease-in-out w-full"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
