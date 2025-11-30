"use client"

import React, { useEffect, useRef } from "react"

type RevealProps = {
  children: React.ReactNode
  className?: string
  animationClass?: string
  stagger?: boolean
  delayStep?: number // ms
}

export default function Reveal({
  children,
  className = "",
  animationClass = "animate-fade-up",
  stagger = true,
  delayStep = 90,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // add animation class to children marked with data-reveal
          const nodes = Array.from(el.querySelectorAll<HTMLElement>("[data-reveal]"))
          if (stagger) {
            nodes.forEach((node, i) => {
              node.style.animationDelay = `${i * delayStep}ms`
              node.classList.add(animationClass)
            })
          } else {
            nodes.forEach((node) => node.classList.add(animationClass))
          }

          // also apply to the container if it was meant to animate
          if (el.dataset.revealContainer === "true") {
            el.classList.add(animationClass)
          }

          observer.disconnect()
        }
      })
    }

    const observer = new IntersectionObserver(onIntersect, {
      threshold: 0.12,
    })
    observer.observe(el)

    return () => observer.disconnect()
  }, [animationClass, stagger, delayStep])

  return (
    <div ref={ref} className={className} data-reveal-container={true}>
      {children}
    </div>
  )
}
