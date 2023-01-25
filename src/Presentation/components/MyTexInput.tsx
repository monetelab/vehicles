import React from "react";
import { View, Image, TextInput, StyleSheet, KeyboardType } from "react-native";
import { MyColors } from "../theme/AppTheme";

interface Props {
  externalStyle: any;
  image: any;
  placeholder: string;
  value: string;
  keyboardType: KeyboardType;
  secureTextEntry?: boolean;
  property: string;
  editable?: boolean;
  onChangeText: (property: string, value: any) => void;
}

export const MyTextInput = ({
  externalStyle,
  image,
  placeholder,
  value,
  keyboardType,
  secureTextEntry = false,
  property,
  editable = true,
  onChangeText,
}: Props) => {
  return (
    <View style={styles.formInput}>
      <Image style={styles.formIcon} source={image} />
      <TextInput
        style={styles.formTextInput}
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={value}
        autoCapitalize={"none"}
        placeholderTextColor={"#fabada"}
        autoCorrect={false}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={editable}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formIcon: {
    width: 25,
    height: 25,
    marginTop: 5,
    tintColor: MyColors.primary,
  },
  formInput: {
    flexDirection: "row",
    marginVertical: 20,
    width: "100%",
  },
  formTextInput: {
    width: "90%",
    borderBottomWidth: 1,
    borderBottomColor: MyColors.primary,
    color: "white",
    paddingHorizontal: 10,
  },
});
