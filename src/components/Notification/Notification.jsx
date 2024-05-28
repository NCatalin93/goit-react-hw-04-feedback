import PropTypes from 'prop-types';
import styles from './Notification.module.css';

export const Notification = () => {
  return <h2 className={styles.notification}>There is no feedback</h2>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
