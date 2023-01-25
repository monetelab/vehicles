import React, { useState } from "react";
import { Text, StyleSheet, View, useWindowDimensions } from "react-native";
import { MyColors } from "../../theme/AppTheme";
import { MyButton } from "../MyButton";
import { MyTextInput } from "../MyTexInput";
import { useForm } from "../../hooks/useForm";
import LoginViewModel from "../../views/Login/ViewModel";
interface Props {
  navigation: any;
}

export const LoginForm = ({ navigation }: Props) => {
  const { login, errorMessage, Token } = LoginViewModel();
  const { height, width } = useWindowDimensions();
  const [isActiveButton, setIsActiveButton] = useState(false);
  const { username, password, onChange } = useForm({
    username: "",
    password: "",
  });

  const verificationEmpptyInputs = (
    username: string,
    password: string
  ): boolean => {
    if (username !== "" && password !== "") {
      return true;
    }
    return false;
  };

  React.useEffect(() => {
    setIsActiveButton(verificationEmpptyInputs(username, password));
  }, [username, password]);

  async function sendLogin() {
    if (errorMessage === "") {
      await login(username, password);
      await navigation.replace("VehicleList");
    } else {
      console.log("errorMessage ===>", errorMessage);
    }
  }

  return (
    <View
      style={{
        height: height / 4,
        width: width,
        paddingHorizontal: width / 20,
      }}
    >
      <MyTextInput
        image={require("../../../../assets/user.png")}
        placeholder="User"
        keyboardType="default"
        property="username"
        onChangeText={(value) => onChange(value, "username")}
        value={username}
        externalStyle={{ paddingHorizontal: width / 2 }}
      />
      <MyTextInput
        image={require("../../../../assets/password.png")}
        placeholder="Password"
        keyboardType="default"
        property="password"
        secureTextEntry
        onChangeText={(value) => onChange(value, "password")}
        value={password}
        externalStyle={{ paddingHorizontal: width / 2 }}
      />
      <MyButton text={"login"} disabled={!isActiveButton} onPress={sendLogin} />
      {errorMessage && (
        <View>
          <Text
            style={{
              color: "red",
              fontWeight: "bold",
              fontSize: 20,
              backgroundColor: "white",
              paddingHorizontal: 10,
            }}
          >
            {errorMessage}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  roundedButton: {
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
