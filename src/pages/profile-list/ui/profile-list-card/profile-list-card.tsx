import { useNavigate } from "react-router-dom";
import CardContent from "@mui/material/CardContent";

import { ProfileCard, ProfileCardActions, ProfileCardButton, ProfileCardName, ProfileCardArea, ProfileLink } from "./styles";

interface ProfileProps {
  profileName: string;
  id: string;
}

export const ProfileListCard = ({ profileName, id }: ProfileProps) => {
  const navigate = useNavigate();
  const handleNavigateToProfile = () => {
    navigate("profile/" + id);
  };
  return (
    <ProfileCard>
      <ProfileCardArea onClick={handleNavigateToProfile}>
        <CardContent>
          <ProfileCardName>{profileName}</ProfileCardName>
        </CardContent>
      </ProfileCardArea>
      <ProfileCardActions>
        <ProfileLink to={`/profile/${id}`}>
          <ProfileCardButton color="primary" variant="contained">
            view profile
          </ProfileCardButton>
        </ProfileLink>
      </ProfileCardActions>
    </ProfileCard>
  );
};

