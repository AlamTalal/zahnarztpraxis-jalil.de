import styles from './Arrow.module.css';

// { classes, size = '16px' }
export default function Arrow() {
  return (
    // className={`${classes} ${styles.icon}`} 
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
    </svg>
  )
}
