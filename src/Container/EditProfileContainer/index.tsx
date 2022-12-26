import FormLabel from "../../Components/Common Component/Form  Label";
import FormInputBox from "../../Components/Common Component/Form Input Field";
import Btn from "../../Components/Common Component/Form button";
import "../EditProfileContainer/style.css";
import imageIcon from "../../Components/images/imageIcon.png";
import DashboradNavbarcontainer from "../Dashboard navbar container";

function EditProfileContainer() {
  let emaillabel = "Email Address";
  let companynameLabel = "Company Name";

  let oldPasswordlabel = "Old Password";
  let NewPasswordlabel = "New Password";
  let ConfirmPasslabel = "Confirm Password";

  let btnTitle = "Update";

  return (
    <div className="Edit-profile-container">
      <DashboradNavbarcontainer />
      <div className="Edit-profile-title">Edit Profile</div>

      <div className="outer-border-img">
        <div className="inner-border-img">
          <img className="image-icon" src={imageIcon}></img>
        </div>
        <div className="Browse-img-border">
          <div className="Browse-img-title">Browse Image</div>
        </div>
      </div>
      <FormLabel formlabel={companynameLabel} />

      <FormInputBox
        placeholder="Enter Email"
        name="email"
        type="email"
        value=""
        onChange=" "
      />
      <FormLabel formlabel={emaillabel} />
      <FormInputBox
        placeholder="Enter password"
        name="password"
        type="password"
        value=""
        onChange=" "
      />
      <FormLabel formlabel={oldPasswordlabel} />
      <FormInputBox
        placeholder="Enter New password"
        name="password"
        type="password"
        value=""
        onChange=" "
      />
      <FormLabel formlabel={NewPasswordlabel} />
      <FormInputBox
        placeholder="Enter Old password"
        name="password"
        type="password"
        value=""
        onChange=""
      />

      <FormLabel formlabel={ConfirmPasslabel} />
      <FormInputBox
        placeholder="confirm  password"
        name="password"
        type="password"
        value=""
        onChange=" "
      />
      <Btn btnTitle={btnTitle} />
    </div>
  );
}

export default EditProfileContainer;
