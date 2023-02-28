import React, {useState} from "react";
import "./edit-profile.css"
import {useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const InputComponent = ({item}) => {
    const handleChange = (event) => {
        item.setTextareaValue(event.target.value);
    };

    return (
        <fieldset className="wd-edit-profile-input-filedset">
            <legend className="wd-edit-profile-input-title">{item.title}</legend>
            <textarea
                id="textarea"
                name="textarea"
                rows={item.rows !== undefined ? item.rows : 3}
                value={item.textareaValue}
                onChange={handleChange}
                className="wd-edit-profile-input-textarea"
            />
        </fieldset>
    );

}



const EditProfileComponent = () => {
    const user = useSelector((state) => state.user);

    const [name, setName] = useState(`${user.firstName} ${user.lastName}`);

    const onClickSaveButton = () => {
        user.firstName = name.split(" ")[0];
        user.lastName = name.split(" ")[1];
    }

    const nameItem = {
        textareaValue: name,
        setTextareaValue: setName,
        title: "Name",
        rows: 1,
    }


    const [bio, setBio] = useState(user.bio);
    const bioItem = {
        textareaValue: bio,
        setTextareaValue: setBio,
        title: "Bio",
        rows: 3,
    }

    const [location, setLocation] = useState(user.location);
    const locationItem = {
        textareaValue: location,
        setTextareaValue: setLocation,
        title: "Location",
        rows: 1,
    }


    const [website, setWebsite] = useState(`${user.website}`)

    return <div>
        <div className="wd-edit-profile-top-bar">
            <div className="wd-edit-profile-arrow">
                <a href="./profile" className="wd-edit-profile-arrow-href"><FontAwesomeIcon
                    icon="fa-solid fa-xmark"/></a>
            </div>
            <div>
                <div className="wd-edit-profile-large-username">
                    Edit profile
                </div>
            </div>
            <input type="button" value="Save" className="wd-edit-profile-save-button"
                   onClick={() => onClickSaveButton()}/>

        </div>

        <div>
            <div className="wd-edit-profile-banner-container">
                <img src={user.profilePicture} style={{width: '100%', overflow: "clip"}}/>
                <div className="wd-edit-profile-centered-text">
                    {/*camera icon*/}
                    <div className="wd-edit-profile-icon-container" role="button">
                        <FontAwesomeIcon icon="fa-solid fa-camera"/>
                    </div>

                    <div style={{paddingRight: 20}}/>

                    {/*x mark icon*/}
                    <div className="wd-edit-profile-icon-container" role="button">
                        <FontAwesomeIcon icon="fa-solid fa-xmark"/>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className="wd-edit-profile-avatar-bar">
                <div className="wd-edit-profile-avatar">
                    <img src={user.bannerPicture} style={{width: '100%'}}/>
                    <div className="wd-edit-profile-centered-text">
                        <div className="wd-edit-profile-icon-container" role="button">
                            <FontAwesomeIcon icon="fa-solid fa-camera"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="wd-edit-profile-input-container">
            <InputComponent item={nameItem}/>
        </div>

        <div className="wd-edit-profile-input-container">
            <InputComponent item={bioItem}/>
        </div>

        <div className="wd-edit-profile-input-container">
            <InputComponent item={locationItem}/>
        </div>

        <div className="wd-edit-profile-input-container">
            <input
                type="text"
                value={website}
                onChange={(event) => setWebsite(event.target.value)}
                placeholder="Website"
                className="wd-edit-profile-website-input"
            />
        </div>

        <div className="wd-edit-profile-input-container">

            <div className="wd-edit-profile-birthdate-text">
                <span>Birth Date · </span>
                <span><a href="#" className="wd-edit-profile-href-without-underline">Edit</a></span>
            </div>
            <div className="wd-edit-profile-dateofbirth">
                {user.dateOfBirth}
            </div>
        </div>

        <div className="wd-edit-profile-professional">
            <a href="#" className="wd-edit-profile-href-without-underline-and-black">Switch to professional</a>
        </div>
    </div>
}

export default EditProfileComponent;
