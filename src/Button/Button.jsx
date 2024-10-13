import styles from "./Button.module.css"
import PropTypes from 'prop-types'

function Button(props) {

    const link = "https://www.linkedin.com/in/" + props.username

    return (
        <a href={link} target="_blank"><button className={styles.btn}>linkedIn</button></a>
    );
}

Button.propTypes = {
    username: PropTypes.string
}

export default Button