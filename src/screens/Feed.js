import { useQuery, gql } from "@apollo/client";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import Photo from "../components/Photo";
import { userLogout } from "../core/apollo";
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from "../core/fragments";
import ScreenLayout from "../shared/ScreenLayout";

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      ...PhotoFragment
      user {
        username
        avatar
      }
      caption
      comments {
        ...CommentFragment
      }
      createdAt
      isMine
    }
  }
  ${PHOTO_FRAGMENT}
  ${COMMENT_FRAGMENT}
`;

export default function Feed() {
  const { data, loading } = useQuery(FEED_QUERY);
  const renderFeed = ({ item: photo }) => {
    return <Photo {...photo} />;
  };
  return (
    <ScreenLayout loading={loading}>
      <FlatList
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
        data={data?.seeFeed}
        keyExtractor={(item) => "" + item.id}
        renderItem={renderFeed}
      />
    </ScreenLayout>
  );
}
