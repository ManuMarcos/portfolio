
import type { Tags } from "../components/ProjectCard.astro";
import Java from "../icons/Java.astro";
import Next from "../icons/Next.astro";
import React from "../icons/React.astro";
import Spring from "../icons/Spring.astro";

export const TAGS = {
  REACT: {
    name: "React.js",
    class: "bg-black text-white",
    icon: React,
  },
  SPRING: {
    name: "Spring",
    class: "bg-white text-black",
    icon: Spring,
  },
  JAVA_SWING : {
    name: "Swing",
    class: "bg-white text-black",
    icon: Java,
  },
  NEXT: {
    name: "Next.js",
    class: "bg-black text-white",
    icon: Next
  }
} as const;

export type TagName = keyof typeof TAGS;