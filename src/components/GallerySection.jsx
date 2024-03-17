import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { ProjectsData } from "../data";
import { Pagination } from "swiper/modules";
import ProjectCard from "./ProjectCard";
import ModalVideo from "react-modal-video";

const GallerySection = () => {
  const { title, images } = ProjectsData;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const openModal = (src) => {
    setIsModalOpen(true);
    setVideoSrc(src);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoSrc("");
  };

  return (
    <section className="section relative mt-[40px] lg:mt-0">
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
        className="mb-8 lg-mb-20 xl:max-w-[1000px] xl:absolute right-0 top-0"
      >
        <Swiper
          className="h-[480px]"
          slidesPerView={1}
          breakpoints={{
            1024: {
              slidesPerView: 2,
            },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          {images.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard project={project} openModal={openModal} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      <ModalVideo
        channel="custom"
        autoplay
        isOpen={isModalOpen}
        url={videoSrc}
        onClose={closeModal}
      />
    </section>
  );
};

export default GallerySection;
