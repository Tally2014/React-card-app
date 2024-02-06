import PropTypes from 'prop-types';
import styles from "./Pokemon.module.css";

const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

export default function Pokemon(props) {
  return (
    <div className={styles.card}>
        <img className={styles.cardImage} src={baseUrl+props.number+'.png'} alt="Profile Picture" />
        <h2 className="card-title">#{props.number}</h2>
    </div>
  )
}

Pokemon.prototypes = {
    number: PropTypes.number,
}

Pokemon.defaultProps = {
    number: 1,
}
