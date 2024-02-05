import styles from './ContactBox.module.css';
import SocialIcons from './SocialIcons'
import { contacts } from '@/utils/data';

export default function ContactBox() {
  return (
    <div className={`${styles.main}`}>
      <a href={`mailto:${contacts[0]}`}><span>{contacts[0]}</span></a>
      <a href="#"><span>{contacts[1]}</span></a>
      <SocialIcons />
    </div>
  )
}
