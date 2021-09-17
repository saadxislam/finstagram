import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";

import User from "../comps/user";
import Photo from "../comps/photo";
import SimpleModal from "../comps/modal";
// import { getHomePage } from "./api";

export default function Home() {
  // getHomePage().then((x) => console.log(x)).catch(error => console.log(error));

  const [user, setUser] = useState({});
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000").then((res) => {
      setUser(res.data);
    });

    axios.get("http://localhost:5000/photos").then((res) => {
      // console.log(res.data);
      setPhotos(res.data);
    });
  }, []);

  return (
    <div className={styles.index}>
      {/* <img /> */}
      <User user={user} />
      <Photo photos={photos} />
      <SimpleModal />
    </div>
  );
}
