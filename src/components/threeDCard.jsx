"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Link } from "react-router-dom"; // Using react-router-dom's Link for routing
import college from "../assets/college.jpeg";
import shrinik from "../assets/shrinik.jpeg";
import skills from "../assets/skills.webp";
import stellar from "../assets/stellarCode.png";
import { Typography } from "@mui/material";

const imageMap = {
  college: college,
  skills: skills,
  stellar: stellar,
};

// eslint-disable-next-line react/prop-types
export function ThreeDCardDemo({ heading, subheading, image, body }) {
  return (
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[29rem] h-[43rem] rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {heading}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {subheading}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4 bg-white">
            <img
              src={imageMap[image]}
              alt={`${image} Image`}
              height="240"
              width="400"
              className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
            />
          </CardItem>
          <CardItem>
            {body?.map((point, index) => (
              <Typography
                key={index}
                variant="body2"
                align="center"
                sx={{
                  display: "block",
                  margin: "1em 0",
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
            ))}
          </CardItem>
          {/* <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            to="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div> */}
        </CardBody>
      </CardContainer>
  );
}
