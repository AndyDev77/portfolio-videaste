import { useState } from "react";
import { galleryData } from "../data";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import PhotoAlbum from "react-photo-album";

const GallerySection = () => {
  const [index, setIndex] = useState(-1);
  const [hoveredPhoto, setHoveredPhoto] = useState(null);

  const { title, btnText, btnIcon, images } = galleryData;
  const photoData = images.map(({ src, width, height }) => ({
    src,
    width,
    height,
  }));

  return (
    <section className="bg-[#f9f9f9] section relative mt-[40px] lg:mt-0">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="h2 max-w-[370px] lg:mb-20"
        >
          {title}
        </motion.h2>
      </div>
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="mb-8 lg-mb-20 relative" // Ajouter une position relative ici
      >
        <PhotoAlbum
          onClick={(event, photo, index) => setIndex(index)}
          layout="rows"
          photos={photoData}
          onMouseEnter={(event, photo) => setHoveredPhoto(photo)}
          onMouseLeave={() => setHoveredPhoto(null)}
        />
        <Lightbox
          slides={photoData}
          styles={{ container: { backgroundColor: "rgba(0,0,0,.9)" } }}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
        {/* Afficher le bouton sur la photo survolée */}
        {hoveredPhoto && (
          <div
            style={{
              position: "absolute",
              top: hoveredPhoto.y, // Utiliser les coordonnées y de la photo
              left: hoveredPhoto.x, // Utiliser les coordonnées x de la photo
            }}
          >
            <div className="w-[70px] h-[70px] lg:w-[91px] lg:h-[91px] border border-white/40 rounded-full text-dark p-[5px] lg:p-[8px]">
              <div className="bg-white w-full h-full rounded-full flex justify-center items-center">
                <div className="pl-1">{btnIcon}</div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="flex justify-center"
      >
        <button className="btn btn-lg btn-dark">
          {btnText} <div className="text-xl">{btnIcon}</div>
        </button>
      </motion.div>
    </section>
  );
};

export default GallerySection;
