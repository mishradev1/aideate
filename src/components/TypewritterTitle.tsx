"use client"
import Typewritter from "typewriter-effect";

const TypewritterTitle = () => {
  return (
    <Typewritter
    options = {{
        loop: true,
    }}
    onInit={(typewriter) => {
        typewriter.typeString("🤖 AI Powered Insights")
        .pauseFor(1000)
        .deleteAll()
        .typeString("🚀 Effortless Note Taking")
        .start();
    }}
    />
  )
}

export default TypewritterTitle