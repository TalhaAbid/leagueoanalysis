import React from "react";

const Champion = (): JSX.Element => {
  console.log("test");
  return (
    <div className="bg-gray-600 w-[306px] h-[1056px] border-solid border-2 border-black">
      <img
        src="https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/8/8a/Skin_Loading_Screen_Classic_Senna.jpg"
        alt="senna loading screen art"
      />
      <h3>Senna</h3>
    </div>
  );
};

export default Champion;
