import styles from './SocialIcons.module.css';
import { Facebook, Instagram, Tiktok } from '@/svg'
import { socials } from '@/utils/data';

export default function SocialIcons() {
  return (
    <div className={`${styles.main}`}>
      <a href={socials[0]}><Instagram size={'28px'} /></a>
      <a href={socials[0]}><Facebook size={'24.5px'} /></a>
      <a href={socials[0]}><Tiktok size={'27.5px'} /></a>
    </div>
  )
}
