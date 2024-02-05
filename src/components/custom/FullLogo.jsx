import styles from './FullLogo.module.css';
import { Logo } from '@/svg';

export default function FullLogo({ size = '2.5rem' }) {
  
  return (
    <div className={`${styles.main}`}>
      <a href='#hero'>
        <Logo size={size} />
        <strong>alil</strong>
      </a>
    </div>
  );
}
