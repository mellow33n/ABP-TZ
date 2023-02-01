import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";


import { getVinListFetch } from "../../components/Store/Reducer/vinSlice";

import VinIdCard from "./VinIdCard";

function VinIdInfo() {
  const dispatch = useDispatch();
  const state = useSelector((data) => data);
  const params = useParams();

  const card = state.vinList.filter((value) => value.ID === Number(params.id))[0];

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
