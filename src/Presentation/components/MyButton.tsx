import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { MyColors } from "../theme/AppTheme";

interface Props {
  text: string;
  disabled?: boolean;
  onPress: () => void;
}

export const MyButton = ({ text, onPress, disabled }: Props) => {
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
    width: "100%",
    height: 50,
    backgroundColor: MyColors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
  },
});
