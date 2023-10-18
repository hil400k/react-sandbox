import styles from './Chip.module.scss';
import React from 'react';

type Props = {
  text: string;
}
const Chip: React.FC<Props> = (props) => {
  return (
    <div className={styles.chip}>
      {props.text}
    </div>
  )
}

export default Chip;
