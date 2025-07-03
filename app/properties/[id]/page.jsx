import PropertyDetails from "@/components/PropertyDetails";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import PropertyImages from "@/components/PropertyImages";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { convertToSerializeableObject } from "@/utils/convertToObject";


const PropertyPage = async ({ params }) => {
  await connectDB();
    const propertyDoc = await Property.findById(params.id).lean();
    const property = convertToSerializeableObject(propertyDoc);

    if (!property) {
      return (
        <h1 className="text-center text-2xl font-bold mt-10">
          Property Not Found
        </h1>
      );
    }
  return (
    <>
      <PropertyHeaderImage image={property.images[0]} />
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/properties"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Properties
          </Link>
        </div>
      </section>

      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <PropertyDetails property={property} />
          </div>
        </div>
      </section>

      <section>
        <div className="container m-auto py-10 px-6">
          <h2 className="text-2xl mb-4">Property Images</h2>
          <PropertyImages images={property.images} />
        </div>
      </section>
    </>
  );
};

export default PropertyPage;
