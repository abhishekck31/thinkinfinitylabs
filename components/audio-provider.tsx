"use client"

import type React from "react"

import { createContext, useContext, useRef, useEffect } from "react"

type AudioContextType = {
  playButtonClick: () => void
  playHover: () => void
  playSuccess: () => void
  playError: () => void
  playSwitch: () => void
}

const AudioContext = createContext<AudioContextType | null>(null)

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const buttonClickRef = useRef<HTMLAudioElement | null>(null)
  const hoverRef = useRef<HTMLAudioElement | null>(null)
  const successRef = useRef<HTMLAudioElement | null>(null)
  const errorRef = useRef<HTMLAudioElement | null>(null)
  const switchRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    buttonClickRef.current = new Audio("/sounds/button-click.mp3")
    hoverRef.current = new Audio("/sounds/hover.mp3")
    successRef.current = new Audio("/sounds/success.mp3")
    errorRef.current = new Audio("/sounds/error.mp3")
    switchRef.current = new Audio("/sounds/switch.mp3")

    // Preload audio
    buttonClickRef.current.load()
    hoverRef.current.load()
    successRef.current.load()
    errorRef.current.load()
    switchRef.current.load()

    // Set volume
    if (buttonClickRef.current) buttonClickRef.current.volume = 0.3
    if (hoverRef.current) hoverRef.current.volume = 0.1
    if (successRef.current) successRef.current.volume = 0.3
    if (errorRef.current) errorRef.current.volume = 0.3
    if (switchRef.current) switchRef.current.volume = 0.3

    return () => {
      buttonClickRef.current = null
      hoverRef.current = null
      successRef.current = null
      errorRef.current = null
      switchRef.current = null
    }
  }, [])

  const playButtonClick = () => {
    if (buttonClickRef.current) {
      buttonClickRef.current.currentTime = 0
      buttonClickRef.current.play().catch((e) => console.error("Error playing sound:", e))
    }
  }

  const playHover = () => {
    if (hoverRef.current) {
      hoverRef.current.currentTime = 0
      hoverRef.current.play().catch((e) => console.error("Error playing sound:", e))
    }
  }

  const playSuccess = () => {
    if (successRef.current) {
      successRef.current.currentTime = 0
      successRef.current.play().catch((e) => console.error("Error playing sound:", e))
    }
  }

  const playError = () => {
    if (errorRef.current) {
      errorRef.current.currentTime = 0
      errorRef.current.play().catch((e) => console.error("Error playing sound:", e))
    }
  }

  const playSwitch = () => {
    if (switchRef.current) {
      switchRef.current.currentTime = 0
      switchRef.current.play().catch((e) => console.error("Error playing sound:", e))
    }
  }

  return (
    <AudioContext.Provider
      value={{
        playButtonClick,
        playHover,
        playSuccess,
        playError,
        playSwitch,
      }}
    >
      {children}
    </AudioContext.Provider>
  )
}

export function useAudio() {
  const context = useContext(AudioContext)
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider")
  }
  return context
}
