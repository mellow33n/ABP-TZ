import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import { getVinListFetch } from "../Store/Reducer/vinSlice";

import VinIdCard from "./VinIdCard";

function VinIdInfo() {
  const dispatch = useDispatch();
  const state = useSelector((data) => data);

  const card_id = +(window.location.pathname + "").replace(/[^0-9]/g, "");
  const card = state.vinList.filter((value) => value.ID === card_id)[0];

  useEffect(() => {
    dispatch(getVinListFetch());
  }, [dispatch]);

  return state.loaded ? (
    <VinIdCard card={card} />
  ) : (
    <>
      <h3>loading...</h3>
    </>
  );
}

export default VinIdInfo;
