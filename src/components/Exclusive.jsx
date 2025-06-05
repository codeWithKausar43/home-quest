import houseData from "../../public/houseData.json";

import Card from "./Card";

const Exclusive = () => {
  return (
    <div className="xl:w-10/12 mx-auto w-11/12 ">
      <h3 className="text-4xl font-bold text-center my-12">
        Exclusive properties by HomeQuest
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {
            houseData.map(data =><Card key={data.id} value={data}></Card> )
        }
        
      </div>
    </div>
  );
};

export default Exclusive;
