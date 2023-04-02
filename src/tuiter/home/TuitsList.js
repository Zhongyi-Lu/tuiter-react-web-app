import React, {useEffect} from "react";
import TuitItem from "./TuitItem.js";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk}
  from "../../services/tuits-thunks";


const TuitsList = () => {
  const {tuits, loading} = useSelector(
    state => state.tuitsData)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk())
  }, []);

  return <div className="wd-home-great-container">

    {loading
      ? <div>Loading...</div>
      : tuits.map((item) => <TuitItem item={item}/>)
    }
  </div>
}

export default TuitsList;
