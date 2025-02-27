
import type { Tags } from "../components/ProjectCard.astro";
import Java from "../icons/Java.astro";
import Mongo from "../icons/Mongo.astro";
import MySQL from "../icons/MySQL.astro";
import Next from "../icons/Next.astro";
import React from "../icons/React.astro";
import Spring from "../icons/Spring.astro";

export const TAGS = {
  REACT: {
    name: "React.js",
    class: "bg-black text-white font-semibold border border-gray-600 shadow-md",
    icon: React,
  },
  SPRING: {
    name: "Spring",
    class: "bg-white text-black font-semibold border border-gray-300 shadow-md",
    icon: Spring,
  },
  JAVA_SWING : {
    name: "Swing",
    class: "bg-white text-black font-semibold border border-gray-300 shadow-md",
    icon: Java,
  },
  NEXT: {
    name: "Next.js",
    class: "bg-black text-white font-semibold border border-gray-600 shadow-md",
    icon: Next
  },
  MY_SQL: {
    name: "MySQL",
    class: "bg-white text-black font-semibold border border-gray-300 shadow-md",
    icon: MySQL
  },
  MONGO:{
    name: "MongoDB",
    class: "bg-[#081d2a] text-green font-semibold border border-green-800 shadow-md",
    icon: Mongo
  }
} as const;

export type TagName = keyof typeof TAGS;