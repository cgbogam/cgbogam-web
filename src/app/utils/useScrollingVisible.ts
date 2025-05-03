import { useEffect, useRef, useState } from 'react'

interface Props {
  offset?: number
  delay?: number
}

export const useScrollingVisible = (props: Props) => {
  const { offset = 0, delay = 20 } = props
  const [isShow, setIsShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleScroll = () => {
    const currentScrollY = window.scrollY
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight

    // 최하단에 도달했는지 체크
    const isBottom = windowHeight + currentScrollY >= documentHeight

    // 타임아웃이 설정되어 있으면 클리어 (연속 스크롤 방지)
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      if (isBottom) {
        // 최하단에서는 항상 보이게
        setIsShow(true)
      } else if (currentScrollY <= offset) {
        // 스크롤이 최상단이거나 offset 값보다 작을때(스크롤이 도달전)
        setIsShow(true)
      } else if (currentScrollY > lastScrollY) {
        // 스크롤을 내릴 때: hide
        setIsShow(false)
      } else {
        // 스크롤을 올릴 때: show
        setIsShow(true)
      }

      // 마지막 스크롤 위치 저장
      setLastScrollY(currentScrollY)
    }, delay) // 딜레이 (원하는 대로 조정 가능)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    // 컴포넌트가 unmount될 때 이벤트 제거
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return { isShow, isTop: lastScrollY <= 0 }
}
