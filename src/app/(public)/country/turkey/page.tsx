import Link from "next/link";
export default function Turkey() {
    return (
        <div className="w-max h-max bg-gray-300 shadow-2xl shadow-red-400 py-8 px-14 m-auto mt-60  rounded-3xl font-bold">
        <h1 className="text-4xl  flex justify-center py-2 px-50 mb-2 text-gray-600 ease duration-300 hover:text-blue-600  cursor-pointer font-bold">Details about Turkey </h1>


        <div className="text-2xl py-2 "><span className="text-3xl">Name:</span>Turkey</div>
       <div className="text-2xl py-2"><span className="text-3xl">Capital:</span>Ankara</div>
       <div className="text-2xl py-2"><span className="text-3xl">Population:</span>31736367294</div>
        <button className="bg-blue-800 ml-36 mt-10 px-4 py-1 rounded-full duration-100 text-white hover:ease-linear hover:scale-110 ">
        <Link href={"/country"}> Back</Link>
    </button>
    </div>
    );
}