import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getVinListFetch } from "../Store/Reducer/vinSlice";

import VinCards from "./VinCards";

function VinList() {
  const state = useSelector((data) => data);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getVinListFetch());
  }, [dispatch]);

  return state.loaded ? (
    <>
      <VinCards/>
    </>
  ) : (
    <>
      <h3>loading...</h3>
    </>
  );
}

export default VinList;
