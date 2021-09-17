import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import PhotoModal from "./modal";
import styles from "../styles/photo.module.css";

const Photo = ({ photos = [] }) => {
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");

  const handleOpen = (desc, img, imageName) => {
    setDescription(desc);
    setImage(img);
    setOpen(true);
    setName(imageName);
  };

  return (
    <>
      <div className={styles.root}>
        <div className={styles.albumContainer}>
          {photos.length &&
            photos.map((photo) => (
              <>
                <div
                  className={styles.singleCard}
                  onClick={() =>
                    handleOpen(photo.description, photo.img, photo.title)
                  }
                >
                  <img
                    className={styles.image}
                    src={photo.img}
                    width="300"
                    height="150"
                  />
                  <div className={styles.lowerCard}>
                    <p className={styles.cardText}>{photo.description}</p>
                    <div className="footer-items">
                      {photo.featured ? (
                        <p className="heart">&hearts;</p>
                      ) : (
                        <span></span>
                      )}
                      <p className="date">{photo.date}</p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          <PhotoModal
            setOpen={setOpen}
            open={open}
            description={description}
            image={image}
            name={name}
          />
        </div>
      </div>
    </>
  );
};

export default Photo;
