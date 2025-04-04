/* eslint-disable react/prop-types */
"use client";
import { Box, Typography } from "@mui/material";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/animated-modal";
import { motion } from "framer-motion";
import blood1 from "../assets/bloodbank/image1.webp";
import blood2 from "../assets/bloodbank/image2.webp";
import blood3 from "../assets/bloodbank/image3.webp";
import chat1 from "../assets/ChatApp/image1.webp";
import chat2 from "../assets/ChatApp/image2.webp";
import chat3 from "../assets/ChatApp/image3.webp";
import image1 from "../assets/imageVue/image1.webp";
import image2 from "../assets/imageVue/image2.webp";
import image3 from "../assets/imageVue/image3.webp";
import video1 from "../assets/videoBee/image1.webp";
import video2 from "../assets/videoBee/image2.webp";
import video3 from "../assets/videoBee/image3.webp";
import mi1 from "../assets/miStore/image1.webp";
import mi2 from "../assets/miStore/image2.webp";
import mi3 from "../assets/miStore/image3.webp";
import peakly1 from "../assets/peakly/image1.webp";
import peakly2 from "../assets/peakly/image2.webp";
import peakly3 from "../assets/peakly/image3.webp";

export function AnimatedModalDemo({ data }) {
  const imageMap = {
    Boond: [blood1, blood2, blood3],
    "Chit Chat": [chat1, chat2, chat3],
    ImageVue: [image1, image2, image3],
    VideoBee: [video1, video2, video3],
    "Mi Store Clone": [mi1, mi2, mi3],
    Peakly: [peakly1, peakly2, peakly3],
  };
  return (
    <div style={{ zIndex: 100000 }}>
      <Modal>
        <ModalTrigger>
          <Typography
            variant="contained"
            style={{
              backgroundColor: "#374151",
              color: "white",
              padding: "1rem",
            }}
          >
            LEARN MORE!
          </Typography>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <Box
              sx={{
                overflowY: "auto",
                overflowX: "hidden",
                maxHeight: "450px",
              }}
            >
              {data?.data.map((point, idx) => (
                <div key={idx}>
                  {idx === 2 && (
                    <div className="flex justify-center items-center">
                      {imageMap[data?.name].map((image, idx) => (
                        <motion.div
                          key={"images" + idx}
                          style={{
                            rotate: Math.random() * 20 - 10,
                          }}
                          whileHover={{
                            scale: 1.1,
                            rotate: 0,
                            zIndex: 100,
                          }}
                          whileTap={{
                            scale: 1.1,
                            rotate: 0,
                            zIndex: 100,
                          }}
                          className="rounded-xl -mr-4 mt-4 p-1 bg-white  border border-neutral-100 flex-shrink-0 overflow-hidden"
                        >
                          <img
                            src={image}
                            alt="bali images"
                            width="500"
                            height="500"
                            className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0 border-2 border-black"
                          />
                        </motion.div>
                      ))}
                    </div>
                  )}
                  <Typography
                    variant="body2"
                    sx={{
                      display: "block",
                      marginTop: "1rem",
                      marginBottom: "0.2rem",
                      color: "rgb(94, 94, 94)",
                      fontWeight: "400",
                      lineHeight: "1.5",
                      wordWrap: "break-word",
                      fontSize: {
                        xs: "15px",
                        sm: "17px",
                      },
                      fontFamily: "'Josefin Sans', Arial, sans-serif",
                    }}
                  >
                    {point}
                  </Typography>
                </div>
              ))}
            </Box>
          </ModalContent>
          <ModalFooter className="gap-4">
            {data?.live && (
              <a href={data?.live}>
                <button className="px-2 py-1 bg-blue-500 rounded-md text-sm w-28 text-white">
                  VIEW PROJECT
                </button>
              </a>
            )}
            <a href={data?.github}>
              <button className="bg-black text-white  text-sm px-2 py-1 rounded-md border border-black w-28">
                GITHUB
              </button>
            </a>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
