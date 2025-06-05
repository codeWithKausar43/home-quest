const Card = ({value}) => {
    console.log(value)
    const {image, bad, bath, price, title, address,sqft} = value;
  return (
    <div>
      <div className="bg-base-100">
        <div className="relative">
          <img
            className="rounded-2xl"
            src={image}
            alt="Shoes"
          />
          <span className="absolute inset-0  mt-3 ml-3 bg-white w-[60px] h-[20px] flex justify-center items-center rounded-lg text-sm">
            For Sale
          </span>
        </div>

        <div className="mt-6 px-3">
          <p>
           {price}
          </p>
          <h3>{title}</h3>
          <p>{address}</p>
          <div className="flex justify-between items-center">
            <p>{sqft}</p>
            <p>{bad}</p>
            <p>{bath}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
