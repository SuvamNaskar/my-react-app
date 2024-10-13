import PropTypes from 'prop-types'
import profilePic from "./assets/suvamnaskar.jpeg"
import Button from "./Button/Button";

function Card(props) {

    return (
        <div className="card">
            <img src={profilePic} alt="profile picture" className="card-img" />
            <h2 className="card-title">{props.name}</h2>
            <p className="card-text">{props.about}</p>
            <Button username={props.username} />
        </div>
    );
}

Card.propTypes = {
    name: PropTypes.string,
    about: PropTypes.string
}

Card.defaultProps = {
    name: "Guest",
    about: "N.A."
}

export default Card