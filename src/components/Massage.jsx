import image2 from "../assets/image2.png";
const Massage = () => {
  return (
    <div className="mt-12 text-center">
      <h3 className="text-3xl font-bold ">A message from our CEO</h3>
      <p className="text-sm text-gray-500 w-4/12 mx-auto mt-6">
        With years of experience in the real estate industry, we are dedicated
        to helping individuals and families discover the perfect property that
        aligns with their lifestyle and needs.
      </p>
      <div
        style={{
          backgroundImage: `url(${image2})`,
          backgroundRepeat:"no-repeat",
          backgroundPosition: "center",
          height: "700px",
        }}
        className="flex items-end justify-start relative h-[100px]"
      >
        <p className="absolute  text-white text-2xl font-bold z-20 bg-black bg-opacity-40 px-4 py-2 rounded">
  kausar ahammed
</p>
      </div>
    </div>
  );
};

export default Massage;
