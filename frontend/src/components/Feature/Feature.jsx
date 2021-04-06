import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFeature } from "@store/feature";

const Feature = () => {
  const dispatch = useDispatch();
  const feature = useSelector(getFeature);

  useEffect(() => {
    dispatch(loadFeature());
  }, []);

  return (
    <ul>
      {feature.map((f) => (
        <li key={f.id}>
          {f}
        </li>
      ))}
    </ul>
  );
};

export default Feature;
