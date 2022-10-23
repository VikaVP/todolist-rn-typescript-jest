import React from "react";
import { TouchableOpacityProps } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { ButtonContainer } from "./styles";

type IAddButton = TouchableOpacityProps;

export function AddButton({ onPress }: IAddButton) {
  return (
    <ButtonContainer onPress={onPress}>
      <Icon name="add-outline" size={40} color="#FFF" />
    </ButtonContainer>
  );
}
