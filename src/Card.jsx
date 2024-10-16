import PropTypes from 'prop-types'
import profilePic from "./assets/suvamnaskar.jpeg"
import defaultProfilePic from "./assets/user-profile.jpg"
import Button from "./Button/Button";

function Card(props) {

    let pic;
    if (props.username === "suvamnaskar") pic = profilePic
    else pic = defaultProfilePic
    return (
        <div className="card">
            <img src={pic} alt="profile picture" className="card-img" />
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