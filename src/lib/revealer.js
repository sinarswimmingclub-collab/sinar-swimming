/**
 * ----------------------------------------------------------------------
 * `revealer()`
 *
 * Attaches an IntersectionObserver to the document that adds the
 * `in-view` class to any descendant carrying the `data-reveal`
 * attribute once it scrolls into the viewport.
 *
 * Elements only animate in once.
 * ----------------------------------------------------------------------
 */
export function revealer() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')

          const delay = entry.target.dataset.revealDelay
          if (delay) {
            entry.target.style.transitionDelay = `${delay * 100}ms`
          }

          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  )

  const targets = document.querySelectorAll('[data-reveal]')
  targets.forEach((el) => observer.observe(el))

  // We're not returning a disconnect function here because this
  // is meant to be a global, fire-and-forget observer for the
  // entire lifecycle of the page.
}
