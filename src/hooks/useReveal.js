import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to a container and adds the
 * `in-view` class to any descendant carrying the `reveal` class
 * once it scrolls into the viewport. Elements only animate in once.
 */
export default function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const targets = root.classList.contains('reveal')
      ? [root, ...root.querySelectorAll('.reveal')]
      : Array.from(root.querySelectorAll('.reveal'))

    if (targets.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )

    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return ref
}
