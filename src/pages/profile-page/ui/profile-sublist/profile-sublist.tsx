import { useQuery } from "@tanstack/react-query";

import { ProfileDetails } from "../profile-details";
import { ValueTypes } from "../../../../types";

import { api } from "../../api";

import { PersonDetails, PersonSubItemWrap } from "./styles";
import { ErrorOffline } from "../../../../shared/offline-error";
import Spinner from "../../../../shared/spinner";

interface IPresonDetailsSubList {
  source: string;
}

export const ProfileSublist = ({ source }: IPresonDetailsSubList) => {
  const {
    isFetching,
    isPaused,
    data = {},
  } = useQuery({
    queryKey: [api.subList.key, source],
    queryFn: () => api.subList.fn(source),
  });

  if (isFetching) {
    return <Spinner size={20} />;
  }


  if (isPaused) {
    return <ErrorOffline />
  }

  return (
    <PersonSubItemWrap>
      <PersonDetails>
        {Object.entries(data as Record<string, ValueTypes>).map((entry) => {
          const [key, value] = entry;
          return (
            <ProfileDetails
              key={`${key}_second_level`}
              name={key}
              value={value}
            />
          );
        })}
      </PersonDetails>
    </PersonSubItemWrap>
  );
};

