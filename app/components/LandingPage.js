import Image from "next/image";
import Services from "./Services";
export default function LandingPage() {
  return (
    <div className="">
      <h1 className="text-6xl font-semibold font-Ubuntu text-center text-gray-800 py-16 border-b-[1px] border-black">
        DECENTRALIZED PASSPORT<br />VERIFICATION SYSTEM
      </h1>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="border-r-[1px] text-center border-black p-4 border-b-[1px]  ">
            
            <h3 className="text-xl font-semibold text-gray-800">
              Decentra provides a secure, <br />tamper-proof system by utilizing
              blockchain's immutable ledger, ensuring passport data cannot be
              altered or forged.
            </h3>
          </div>

          <div
            className="border-r-[1px] text-center border-black p-4 bg-cover bg-center border-b-[1px]"
            
          >
            <p>‎ </p>
            <p>‎ </p>
            <p>‎ </p>
            <p>‎ </p>
            <p>‎ </p>
            <p>‎ </p>
            <p>‎ </p>
            <p>‎ </p>
            <p>‎ </p>
            <p>‎ </p>
            <p>‎ </p>
            <p>‎ </p>
            <p>‎ </p>
            <p>‎ </p>
            <p>‎ </p>
            <p>‎ </p>
            <p>‎ </p>
            <p>‎ </p>

            <h3 className="text-xl font-semibold text-gray-800">
              By decentralizing passport verification, Decentra eliminates
              reliance on centralized databases, reducing the risk of data
              breaches and enhancing privacy.
            </h3>
          </div>

          <div className="text-center border-black p-4 border-b-[1px]">
            <p>‎ </p>
            <p>‎ </p>
            <p>‎ </p>
            <p>‎ </p>
            <p>‎ </p>
            <p>‎ </p>
            <p>‎ </p>
            <p>‎ </p>
            <p>‎ </p>
            <h3 className="text-xl font-semibold text-gray-800">
              Decentra offers a cost-effective solution for governments and
              agencies, automating passport verification processes while
              minimizing human error and operational costs.
            </h3>
          </div>
        </div>
      </div>
      <Services />
    </div>
  );
}
