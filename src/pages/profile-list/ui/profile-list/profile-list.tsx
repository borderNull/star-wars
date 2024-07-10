import { useState, ChangeEvent, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import Pagination from "@mui/material/Pagination";

import { ProfileListContent } from '../profile-list-content'
import { ProfileListSearch } from "../profile-list-search";

import { api } from "../../api";
import { DEFAULT_PAGE_SIZE } from "../../constants";
import { ErrorOffline } from '../../../../shared/offline-error';
import useDebounce from "../../../../hooks/useDebounce";

import {
  ProfileListWrap,
} from "./styles";


export const ProfileList = () => {
  const [params, setParams] = useSearchParams()
  const pageParams = params.get('page');
  const searchParams = params.get('search');
  const [searchInput, setSearchInput] = useState(searchParams ? searchParams : '');
  const [page, setPage] = useState(pageParams ? +pageParams : 1);
  const debouncedSearch = useDebounce(searchInput, 400);

  const {
    isFetching,
    isPaused,
    data: { results = [], count = 0 } = {},
  } = useQuery({
    queryKey: [api.key, page, debouncedSearch],
    queryFn: () => api.fn(page, debouncedSearch),
  });


  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchInput(value);
    const newParams = { page: '1', search: value };
    setParams(newParams)
  };

  const clearSearch = () => {
    setSearchInput("");
    setParams('')
  };

  const handlePageChange = (e: ChangeEvent<unknown>, value: number) => {
    e.preventDefault();
    const newParams = { page: value.toString(), search: '' };
    if (searchParams) {
      newParams.search = searchParams;
    }

    setParams(newParams)
  };


  useEffect(() => {
    setPage(pageParams ? +pageParams : 1)
  }, [pageParams])


  const pageCount = count ? Math.ceil(count / DEFAULT_PAGE_SIZE) : 0;

  if (isPaused) {
    return <ErrorOffline />
  }

  return (

    <ProfileListWrap>
      <ProfileListSearch isFetching={isFetching} onSearch={handleSearch} searchInput={searchInput} onClear={clearSearch} />
      <ProfileListContent isFetching={isFetching} results={results} clearSearch={clearSearch} />
      {pageCount > 1 && (
        <Pagination count={pageCount} page={+page} onChange={handlePageChange} />
      )}
    </ProfileListWrap>

  );
};



