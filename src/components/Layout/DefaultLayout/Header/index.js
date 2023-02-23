import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import img from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx('wapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={img.logo} alt="tiltok" />
        </div>
        <div className={cx('search')}>
          <input placeholder="Seach taij ddaay" spellCheck="false" />
          <button className={cx('button-clear')}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

          <button className={cx('button-search')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={cx('actions')}></div>
      </div>
    </header>
  );
}

export default Header;
