import { gql, useQuery, useReactiveVar } from "@apollo/client";
import { useEffect } from "react";
import { isLoggedInVar, userLogOut } from "../core/apollo";

const IDENTIFY_USER = gql`
  query me {
    me {
      username
      avatar
    }
  }
`;

// Make sure fake token (user)
export default function useMe() {
  const hasToken = useReactiveVar(isLoggedInVar);
  const { data, error } = useQuery(IDENTIFY_USER, {
    skip: !hasToken,
  });
  // console.log(data); // data = response IDENTIFY_USER me {username, avatar}
  useEffect(() => {
    if (data?.me === null) {
      userLogOut();
    }
  }, [data]);

  return { data };
}
