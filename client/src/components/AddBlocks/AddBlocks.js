import React, { useEffect } from "react";
import "./AddBlocks.css";
import useStore from "../../store/store";

const AddBlocks = () => {
  const { currentBlock, blocks, startAnimation } = useStore();

  useEffect(() => {
    const cleanup = startAnimation();
    return cleanup;
  }, [startAnimation]);

  return (
    <div className="ad-container">
      <div className="ad-block">
        {blocks[currentBlock].images.map((image, index) => (
          <img key={index} src={image} alt={`Ad ${index + 1}`} />
        ))}
        {blocks[currentBlock].images.map((image, index) => (
          <img key={index} src={image} alt={`Ad ${index + 1}`} />
        ))}
       
      </div>
    </div>
  );
};

export default AddBlocks;