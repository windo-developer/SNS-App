import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { Image, TouchableOpacity, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Container = styled.View``;
const Header = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px;
  align-items: center;
`;
const UserAvatar = styled.Image`
  margin-right: 10px;
  width: 25px;
  height: 25px;
  border-radius: 12.5px;
`;
const Username = styled.Text`
  color: white;
  font-weight: 600;
`;
const File = styled.Image``;
const Actions = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Action = styled.TouchableOpacity`
  margin-right: 10px;
`;
const Caption = styled.View`
  flex-direction: row;
`;
const CaptionText = styled.Text`
  color: white;
  margin-left: 5px;
`;
const Likes = styled.Text`
  color: white;
  margin: 7px 0px;
  font-weight: 600;
`;

const SubContainer = styled.View`
  padding: 10px;
`;

export default function Photo({
  id,
  user,
  avatar,
  username,
  caption,
  file,
  isLiked,
  likes,
}) {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  const [imageHeight, setImageHeight] = useState(height - 500);

  useEffect(() => {
    Image.getSize(file, (width, height) => {
      setImageHeight(height / 4);
    });
  }, [file]);

  return (
    <Container>
      <Header onPress={() => navigation.navigate("Profile")}>
        <UserAvatar source={{ uri: user.avatar }} resizeMode="cover" />
        <Username>{user.username}</Username>
      </Header>
      <File
        source={{ uri: file }}
        style={{ width, height: imageHeight }}
        resizeMode="cover"
      />
      <SubContainer>
        <Actions>
          <Action>
            <Ionicons
              name={isLiked ? "heart" : "heart-outline"}
              color={isLiked ? "tomato" : "white"}
              size={22}
            />
          </Action>
          <Action onPress={() => navigation.navigate("Comments")}>
            <Ionicons name={"chatbox-outline"} color="white" size={22} />
          </Action>
        </Actions>
        <TouchableOpacity onPress={() => navigation.navigate("Likes")}>
          <Likes>{likes === 1 ? "1 like" : `${likes} likes`}</Likes>
        </TouchableOpacity>
        <Caption>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Username>{user.username}</Username>
          </TouchableOpacity>
          <CaptionText>{caption}</CaptionText>
        </Caption>
      </SubContainer>
    </Container>
  );
}

Photo.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({
    avatar: PropTypes.string,
    username: PropTypes.string.isRequired,
  }),
  caption: PropTypes.string,
  file: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  commentNumber: PropTypes.number.isRequired,
};
