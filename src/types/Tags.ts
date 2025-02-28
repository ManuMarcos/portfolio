
import type { Tags } from "../components/ProjectCard.astro";
import Css from "../icons/Css.astro";
import DesignPattern from "../icons/DesignPattern.astro";
import Html from "../icons/Html.astro";
import Java from "../icons/Java.astro";
import Javascript from "../icons/Javascript.astro";
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
  },
  DESSIGN_PATTERN:{
    name: "Dessign Patterns",
    class: "bg-black text-white font-semibold border border-gray-600 shadow-md",
    icon: DesignPattern
  },
  JAVASCRIPT:{
    name: "Javascript",
    class: "bg-black text-white font-semibold border border-gray-600 shadow-md",
    icon: Javascript
  },
  HTML:{
    name: "HTML",
    class: "bg-black text-white font-semibold border border-gray-600 shadow-md",
    icon: Html
  },
  CSS:{
    name: "CSS",
    class: "bg-black text-white font-semibold border border-gray-600 shadow-md",
    icon: Css
  }
} as const;

export type TagName = keyof typeof TAGS;