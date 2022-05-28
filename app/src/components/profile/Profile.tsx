import React from "react";
import { profileProps } from "./profile.types";

const Profile: React.FC<profileProps> = ({ foo }) => {
  return(
      <div>
        {foo}
      </div>
  );
}

export default Profile;
