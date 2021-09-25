import { useEffect, useState, useRef } from 'react';


export default function useNearScreen({ distance = '100px', externalRef, once = true } = {}) {
    const [isNearScreen, setShow] = useState(false);
    const fromRef = useRef();
  
    useEffect(() => {
      let observer

      const el = externalRef ? externalRef.current : fromRef.current

      const onChange = (entries, observer) => {
        const element = entries[0];
        if (element.isIntersecting) {
          setShow(true);
          once && observer.disconnect();
        }else{
          !once && setShow(false)
        }
      }
  
      Promise.resolve(
        typeof IntersectionObserver !== "undefined"
          ? IntersectionObserver
          : import("intersection-observer")
      ).then(() => {
        observer = new IntersectionObserver(onChange, {
          rootMargin: distance
        });
  
        if(el) observer.observe(el)
      })
  
      return () => observer && observer.disconnect();
    })
  
    return { isNearScreen, fromRef }
  }