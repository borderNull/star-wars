import { useState } from "react";
import { DateTime } from "luxon";

import { Controller, Control } from "react-hook-form"

import TextField from '@mui/material/TextField';
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import {
  PROPS_TO_EXCLUDE,
  DATE_PROPS,
  READ_ONLY_FIELDS,
  DATE_FORMAT,
  NUMBER_FIEDS,
} from "../../constants";

import { normalizeName, arrayOrUrl } from "../../helpers";
import { ValueTypes } from "../../../../types";

import { ProfileSublist } from "../profile-sublist";

import {
  PersonDetailsRow,
  PersonDetailsTitle,
  PersonDetailsText,
  PersonDetailItemWrap,
} from "./styles";

interface IProfileDetails {
  name: string;
  value: ValueTypes;
  editMode?: boolean;
  control?: Control;
}

export const ProfileDetails = ({
  name,
  value,
  editMode,
  control,
}: IProfileDetails) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded((prevState) => !prevState);
  };

  const renderDetailsContent = (name: string, value: ValueTypes) => {
    if (!arrayOrUrl(value)) {
      if (editMode && !READ_ONLY_FIELDS.includes(name)) {
        return (
          <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => {
              return (
                <TextField
                  size="small"
                  type={NUMBER_FIEDS.includes(name) ? "number" : "text"}
                  error={!!fieldState.error}
                  helperText={fieldState?.error?.message}
                  {...field}
                />
              )
            }
            }
          />
        );
      } else {
        const normalizedValue = DATE_PROPS.includes(name)
          ? DateTime.fromISO(value as string).toFormat(DATE_FORMAT)
          : value;
        return <PersonDetailsText>{normalizedValue}</PersonDetailsText>;
      }
    }

    if (arrayOrUrl(value) && value.length) {
      return (
        <IconButton onClick={handleToggleExpand}>
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      );
    }

    if (!value.length) {
      return <PersonDetailsText>n/a</PersonDetailsText>;
    }

    return null;
  };

  const renderSubList = (value: ValueTypes) => {
    const normalizedSource = Array.isArray(value) ? value : [value];
    return normalizedSource.map((src, index) => {
      return <ProfileSublist key={`${index}_array_level`} source={src} />;
    });
  };

  if (PROPS_TO_EXCLUDE.includes(name) || (!value?.length)) return;

  return (
    <PersonDetailItemWrap fullwidth={Number(arrayOrUrl(value))} >
      <PersonDetailsRow>
        <PersonDetailsTitle variant="subtitle1">
          {normalizeName(name)}
        </PersonDetailsTitle>
        {renderDetailsContent(name, value)}
      </PersonDetailsRow>
      {expanded && arrayOrUrl(value) && renderSubList(value)}
    </PersonDetailItemWrap >
  );
};

