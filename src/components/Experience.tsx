import React, { useEffect, useRef, useState } from 'react';

import styles from './Experience.module.scss';

type Props = {

};

export const Experience: React.FC<Props> = (props: Props) => {
  const expValueRef = useRef(100);
  const intervalId = useRef<any>();
  const [ currentExpVal, setCurrentExpVal ] = useState(0);

  useEffect(() => {
    intervalId.current = setInterval(() => {
        setCurrentExpVal((prev) => {
          return prev + 1;
        });
    }, 100);

    return () => clearInterval(intervalId.current);
  }, [intervalId]);

  useEffect(() => {
    if (currentExpVal >= expValueRef.current) {
      clearInterval(intervalId.current);
    }
  }, [currentExpVal]);


  // currentExpVal is not updated within if (currentExpVal < expValueRef.current) {


  return (
    <div className={styles['exp-wrapper']}>
      { currentExpVal }
    </div>
  );
}
