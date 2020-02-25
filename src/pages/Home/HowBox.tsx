import React from "react";
import How1 from "../../svg/How1";
import How2 from "../../svg/How2";
import How3 from "../../svg/How3";
import How4 from "../../svg/How4";
import How5 from "../../svg/How5";

export interface IHowBox {
  index: number;
  stateIndex: number;
  heightIcon?: string;
  widthIcon?: string;
  setStateIndex: (index: number) => void
}
// TODO: onHover 
const HowBox: React.FC<IHowBox> = ({ index, widthIcon, heightIcon, setStateIndex, stateIndex }) => {
  return (
    <div
      style={{
        boxShadow:
          stateIndex === index ? "rgba(0, 0, 0, 0.05) 0px 10px 50px 0px, rgba(0, 0, 0, 0.16) 0px 10px 20px 0px" : 'unset',
        height: "220px",
        width: '140px',
        padding: "8px 16px 8px 16px",
        borderRadius: "12px",
        display: "grid",
        justifyContent: "center",
        textTransform: "uppercase"
      }}
      onClick = {() => setStateIndex(index)}
    >
      <div style={{ justifyContent: 'center', display: "grid", alignItems: 'center' }}>
        {index === 1 && <How1 width={widthIcon} height={heightIcon} />}
        {index === 2 && <How2 width={widthIcon} height={heightIcon} />}
        {index === 3 && <How3 width={widthIcon} height={heightIcon} />}
        {index === 4 && <How4 width={widthIcon} height={heightIcon} />}
        {index === 5 && <How5 width={widthIcon} height={heightIcon} />}
      </div>
      {index === 1 && <div style={{textAlign: 'center', display: 'grid', justifyContent: 'center', alignItems: 'center'}} >How it works</div>}
      {index === 2 && <div style={{textAlign: 'center', display: 'grid', justifyContent: 'center', alignItems: 'center'}}>Resource Scheduling</div>}
      {index === 3 && <div style={{textAlign: 'center', display: 'grid', justifyContent: 'center', alignItems: 'center'}}>Management</div>}
      {index === 4 && <div style={{textAlign: 'center', display: 'grid', justifyContent: 'center', alignItems: 'center'}}>Multi-Project Planning</div>}
      {index === 5 && <div style={{textAlign: 'center', display: 'grid', justifyContent: 'center', alignItems: 'center'}}>Forecasting & Reports</div>}
    </div>
  );
};

export default React.memo(HowBox);
