/* eslint-disable react/prop-types */
import ChevronUp from "../chevronup/ChevronUp";
import { useScrollToTop } from "../../hooks/hooks";

const ProgresBar = ({ position, sPercentage }) => {
  const {topOfPage, handleScroll} = useScrollToTop(position);
  return (
    <>
      <div
        id="progress"
        onClick={handleScroll}
        style={{
          display: `${!topOfPage ? "none" : "grid"}`,
          backgroundImage: `conic-gradient(#194eb9 ${sPercentage}%, #67ccff ${sPercentage}%)`,
        }}
      >
        <span className="progress-value">
          <ChevronUp />
        </span>
      </div>
    </>
  );
};

export default ProgresBar;
