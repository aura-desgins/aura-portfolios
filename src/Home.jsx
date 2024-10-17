import { Link } from "react-router-dom";
import Portfolio1 from "./Portfolios/Portfolio1/Portfolio1";

const Home = () => {
  return (
    <div className="text-white bg-black h-screen">
      <div>
        <h1 className="text-center pt-[100px] text-5xl mb-10 font-bold">
          Aura Designs Portfolios
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="container gap-6  ">
          <Link to="/portfolio1" className="flex items-center justify-center">
            <div className="h-[600px] w-[75%] border border-white/30 rounded-xl overflow-hidden hide-scrollbar">
              <Portfolio1 />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
