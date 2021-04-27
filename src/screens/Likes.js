import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import UserRow from "../components/UserRow";
import { USER_FRAGMENT } from "../core/fragments";
import ScreenLayout from "../shared/ScreenLayout";

const LIKES_QUERY = gql`
  query seePhotoLikes($id: Int!) {
    seePhotoLikes(id: $id) {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`;

export default function Likes({ route }) {
  const [refreshing, setRefreshing] = useState(false);
  const { data, loading, refetch } = useQuery(LIKES_QUERY, {
    variables: {
      id: route?.params?.photoId,
    },
    skip: !route?.params?.photoId,
  });
  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };
  const rederUser = ({ item: user }) => {
    return <UserRow {...user} />;
  };
  return (
    <ScreenLayout loading={loading}>
      <FlatList
        style={{ width: "100%" }}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              }}
            ></View>
          );
        }}
        data={data?.seePhotoLikes}
        keyExtractor={(item) => "" + item.id}
        renderItem={rederUser}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </ScreenLayout>
  );
}
