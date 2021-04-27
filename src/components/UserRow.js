import { useNavigation } from "@react-navigation/native";
import React from "react";
import styled from "styled-components/native";
import theme from "../shared/styles/theme";

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;
`;

const Column = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 25px;
  margin-right: 10px;
`;

const Username = styled.Text`
  color: white;
  font-weight: 600;
`;

const FollowBtton = styled.TouchableOpacity`
  background-color: ${theme.colors.blue};
  justify-content: center;
  padding: 5px 10px;
  border-radius: 4px;
`;

const FollowBttonText = styled.Text`
  color: white;
  font-weight: 600;
`;

export default function UserRow({ id, avatar, username, isFollowing, isMe }) {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <Column
        onPress={() =>
          navigation.navigate("Profile", {
            id,
            username,
          })
        }
      >
        <Avatar source={{ uri: avatar }} />
        <Username>{username}</Username>
      </Column>
      {!isMe ? (
        <FollowBtton>
          <FollowBttonText>
            {isFollowing ? "UnFollow" : "Follow"}
          </FollowBttonText>
        </FollowBtton>
      ) : null}
    </Wrapper>
  );
}
