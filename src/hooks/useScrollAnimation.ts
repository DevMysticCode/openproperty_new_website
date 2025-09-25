import { useState, useEffect, useRef } from 'react'

interface UseScrollAnimationProps {
  threshold?: number
  rootMargin?: string
}

interface UseScrollAnimationReturn {
  isVisible: boolean
  scrollDirection: 'up' | 'down'
  elementRef: React.RefObject<HTMLDivElement>
}

export const useScrollAnimation = ({
  threshold = 0.3,
  rootMargin = '-50px 0px -50px 0px',
}: UseScrollAnimationProps = {}): UseScrollAnimationReturn => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down')
  const elementRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef<number>(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollDirection(currentScrollY > lastScrollY.current ? 'down' : 'up')
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold,
        rootMargin,
      }
    )

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [threshold, rootMargin])

  return { isVisible, scrollDirection, elementRef }
}
