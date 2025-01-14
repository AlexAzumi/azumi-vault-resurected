import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

interface ScrollForMoreProps {
  show: boolean;
}

const ScrollForMore: FC<ScrollForMoreProps> = ({ show }) => {
  return (
    <div className={`text-center scroll-for-more ${show ? 'show' : ''}`}>
      <FontAwesomeIcon icon={faArrowDown} /> Desliza para más información{' '}
      <FontAwesomeIcon icon={faArrowDown} />
    </div>
  );
};

export default ScrollForMore;
