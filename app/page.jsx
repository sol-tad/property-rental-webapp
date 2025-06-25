import Link from "next/link";

const HomePage = () => {
  return (
    <div className=" bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">welcome</h1>
      
      <Link href='/properties'> Go to Properties</Link>
    </div>
  );
};

export default HomePage;
