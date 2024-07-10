import { ChangeEvent } from 'react';
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

import { SearchBox, ProfileSearch } from "./styles"


interface ProfileListSearchProps {
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  searchInput: string;
  isFetching: boolean;
  onClear: () => void;
}

export const ProfileListSearch = ({ onSearch, searchInput, isFetching, onClear }: ProfileListSearchProps) => {


  return (
    <SearchBox>
      <ProfileSearch
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={onSearch}
        value={searchInput}
        disabled={isFetching}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="clear search input"
                onClick={searchInput ? onClear : () => { }}
              >
                {searchInput ? <ClearIcon /> : <SearchIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </SearchBox>
  )
}