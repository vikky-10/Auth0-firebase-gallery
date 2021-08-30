import React, { useEffect } from "react";
import useStorage from "../Hooks/useStorage";
import { motion } from "framer-motion";

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);

  // remove progress bar when file is uploaded full
  // we know that we get url when file is fully uploaded and
  // progress bar show when file is not null
  //so set setFile(null) to remove progress bar

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
};

export default ProgressBar;
