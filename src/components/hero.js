import React from "react"

import content from "../../content/home-hero.json"

export default function Hero() {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${content.background})` }}
    />
  )
}
