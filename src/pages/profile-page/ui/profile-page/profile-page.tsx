import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { DateTime } from "luxon";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";

import { ProfileDetails } from "../profile-details";
import { ErrorOffline } from '../../../../shared/offline-error';
import Spinner from "../../../../shared/spinner";


import { api } from "../../api";
import { ROUTES } from '../../../../app/routes'

import { ValueTypes } from "../../../../types";

import {
  PersonPaper,
  PersonCardWrap,
  PersonDetails,
  PersonAction,
  PersonActionButtons,
  PersonForm,
  ProfileBackButton,
  SubmitForm
} from "./styles";

const schema = yup.object({
  name: yup.string().required().min(2, 'minimum length is 2'),
  height: yup.string().required(),
  mass: yup.string().required(),
  hair_color: yup.string().required().min(2, 'minimum length is 3'),
  skin_color: yup.string().required().min(2, 'minimum length is 3'),
  eye_color: yup.string().required().min(2, 'minimum length is 3'),
  birth_year: yup.string().required(),
  gender: yup.string().required().min(2, 'minimum length is 3'),
})

export const ProfilePage = () => {
  const { profileId } = useParams();
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  const { data, isFetching, isPaused } = useQuery({
    queryKey: [api.person.key, profileId],
    queryFn: () => api.person.fn(profileId),
  });

  const { control, reset, handleSubmit } = useForm({
    defaultValues: { ...data },
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: object) => {
    setPerson({ ...data, edited: DateTime.now() })
    setEditMode(false)
  }

  const [person, setPerson] = useState<typeof data | null>(null);

  const toggleEditPerson = () => {
    setEditMode((prevState) => !prevState);
  };

  const handleCancelEditPerson = () => {
    setEditMode(false);
  };

  const handleNavigateToList = () => {
    navigate(ROUTES.LIST);
  };


  useEffect(() => {
    setPerson(data);
    reset(data)
  }, [data, reset]);

  if (isPaused) {
    return <ErrorOffline />
  }

  if (isFetching) {
    return <Spinner />;
  }

  return (
    <PersonCardWrap>
      <PersonPaper elevation={3}>
        <PersonAction>
          <ProfileBackButton
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={handleNavigateToList}
          >
            back
          </ProfileBackButton>
          <PersonActionButtons>
            {!editMode && (<Button
              variant="outlined"
              startIcon={<EditIcon />}
              onClick={toggleEditPerson}
            >
              Edit profile
            </Button>)}
            {editMode && (
              <Button
                variant="outlined"
                startIcon={<ClearIcon />}
                onClick={handleCancelEditPerson}
              >
                Cancel
              </Button>
            )}
          </PersonActionButtons>
        </PersonAction>
        <PersonForm onSubmit={handleSubmit(onSubmit)}>
          {editMode && <SubmitForm variant="contained" type="submit">Save</SubmitForm>}
          <PersonDetails>
            {!!person && Object.entries(person).map((entry) => {
              const [key, value] = entry;
              return (
                <ProfileDetails
                  key={`${key}_first_level`}
                  name={key}
                  value={value as ValueTypes}
                  editMode={editMode}
                  control={control}
                />
              );
            })}
          </PersonDetails>
        </PersonForm>
      </PersonPaper>
    </PersonCardWrap>
  );
};


