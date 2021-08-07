import React, { useState, useEffect } from "react";

// https://stackoverflow.com/a/54114180/9162948

function useDelayUnmount(isMounted: boolean, delayTime: number) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeoutId: number;
    if (isMounted && !shouldRender) {
      setShouldRender(true);
    } else if (!isMounted && shouldRender) {
      timeoutId = window.setTimeout(() => setShouldRender(false), delayTime);
    }
    return () => clearTimeout(timeoutId);
  }, [isMounted, delayTime, shouldRender]);
  return shouldRender;
}

type Props = {
  children: React.ReactNode,
  isMounted: boolean,
  className: string,
}

const Animator = ({ isMounted, children, className }: Props) => {
  const shouldRenderChild = useDelayUnmount(isMounted, 200);
  const animationClassName = isMounted ? `${className}--mounted` : `${className}--unmounted`

  return (
    <div
      className={`${className} ${animationClassName}`}
    >
      {shouldRenderChild && children}
    </div>
  );
};

export default Animator;