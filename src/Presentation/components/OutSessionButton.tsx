import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { MyColors } from "../theme/AppTheme";

interface Props {
  text: string;
  disabled?: boolean;
  onPress: () => void;
}

export const MyButtonOutSession = ({ text, onPress, disabled }: Props) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.roundedButton,
        disabled ? { backgroundColor: "#4d0d7071" } : null,
      ]}
      onPress={() => onPress()}
    >
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  roundedButton: {
    width: 50,
    height: 50,
    bottom: 50,
    backgroundColor: "black",
    borderColor: MyColors.secondary,
    borderWidth: 4,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    position: "absolute",
    right: 10,
    top: 10,
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
  },
});
