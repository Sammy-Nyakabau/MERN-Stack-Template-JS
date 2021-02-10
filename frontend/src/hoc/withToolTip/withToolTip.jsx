import React, {useState} from "react";

const withTooltip = (WrappedComponent) => {
  return  WithTooltip = () => {
    const [showTooltip, setShowTooltip] = useState(false)

    mouseOver = () => setShowTooltip(true);

    mouseOut = () => setShowTooltip(false);

      return (
        <div onMouseOver={mouseOver} onMouseOut={mouseOut}>
          <WrappedComponent {...props} showTooltip={showTooltip} />
        </div>
      );
    
  };
}

export default withTooltip;
