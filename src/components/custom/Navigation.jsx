import styles from './Navigation.module.css';

export default function Navigation({ CEIV }) {

  const onPress = (e) => {
    e.preventDefault();
    const target = window.document.getElementById(e.currentTarget.href.split('#')[1]);
    if(target) {target.scrollIntoView({ behavior: 'smooth' });}
  };
  
  return (
    <nav className={`${styles.main}`}>
      <ul data-cy='nav-wrapper'>
        <li data-cy={`nav-item`} className={(CEIV === 0)? 'active-scroll-spy' : ''}><a onClick={(e) => onPress(e)} href='#home'>Heim</a></li>
        <li data-cy={`nav-item`} className={(CEIV === 1)? 'active-scroll-spy' : ''}><a onClick={(e) => onPress(e)} href='#services'>Dienstleistungen</a></li>
        <li data-cy={`nav-item`} className={(CEIV === 2)? 'active-scroll-spy' : ''}><a onClick={(e) => onPress(e)} href='#staff'>Personal</a></li>
        <li data-cy={`nav-item`} className={(CEIV === 3)? 'active-scroll-spy' : ''}><a onClick={(e) => onPress(e)} href='#gallery'>Galerie</a></li>
      </ul>
    </nav>
  );
}
