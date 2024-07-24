import React, { createContext, useContext, useState } from "react";
import work_data from "../Work/workdata";

const WorkContext = createContext();

const Provider = ({children}) => {
  const [workData, setWorkData] = useState();
  const [id, setId] = useState(work_data[0].name);
  const getData = () => {
    setWorkData(work_data);
  };
  const findDataById = (name) => {
    Object.entries(workData).map((itm) => {
      if (itm.name === name) return itm;
    });
  };
  const setWorkId = (id) => {
    setId(id);
  };
  const valueToShare = {
    workData,
    id,
    getData,
    findDataById,
    setWorkId,
  };
  return <WorkContext.Provider value={valueToShare}>{children}</WorkContext.Provider>
};
export {Provider};
export default WorkContext;
