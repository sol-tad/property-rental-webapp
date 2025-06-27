const PropertyPage = async ({ params }) => {
  const propertyId = params.id;
  return (
    <>
      <div>Property page {propertyId}</div>
      <div></div>
    </>
  );
};

export default PropertyPage;
