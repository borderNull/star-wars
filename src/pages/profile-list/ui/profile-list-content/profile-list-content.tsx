import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import SearchOffIcon from '@mui/icons-material/SearchOff';
import { ProfileListCard } from "../profile-list-card";
import Spinner from "../../../../shared/spinner";

import {
  ListWrap,
  NoResults,
  NoResultsText
} from "./styles";

interface ProfileListContentProps {
  isFetching: boolean;
  results: IPerson[];
  clearSearch: () => void;
}

interface IPerson {
  name: string;
  url: string;
}


export const ProfileListContent = ({ isFetching, results, clearSearch }: ProfileListContentProps) => {

  if (isFetching) {
    return <Spinner />
  } else if (!isFetching && results.length) {
    return (
      <ListWrap>
        <Grid container spacing={{ xs: 2, sm: 2, md: 3 }} >
          {results.map((person: IPerson) => {
            const originalId = person.url.replace(/\D+/g, "");
            return (
              <Grid item key={originalId} xs={12} sm={6} md={3} >
                <ProfileListCard id={originalId} profileName={person.name} />
              </Grid>
            )
          })
          }
        </Grid>
      </ListWrap>
    )
  } else if (!isFetching && !results.length) {
    return (<NoResults>
      <NoResultsText variant="h1">No results, try to clear search</NoResultsText>
      <Button startIcon={<SearchOffIcon />} variant="outlined" color="primary" onClick={clearSearch}>Clear search</Button>
    </NoResults>)
  }

  return null;

}