import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { LoginForm } from "../../components/formLogin/LoginForm";
import { MyColors } from "../../theme/AppTheme";
import { useWindowDimensions } from "react-native";
import { RootStackParamList } from "../../navigator/Navigator";
import { StackScreenProps } from "@react-navigation/stack";
import LoginViewModel from "./ViewModel";

interface Props extends StackScreenProps<RootStackParamList, "Login"> {}

export const Login = ({ navigation, route }: Props) => {
  const { height, width } = useWindowDimensions();
  const { Token } = LoginViewModel();

  React.useEffect(() => {
    if (Token?.token !== undefined && Token?.token !== "") {
      navigation.replace("VehicleList");
    }
  }, [Token]);

  return (
    <SafeAreaView style={{ backgroundColor: MyColors.background }}>
      <View
        style={{
          width: width,
          height: height,
          alignItems: "center",
          paddingTop: height / 15,
        }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "white",
              height: height / 10,
              width: height / 10,
              borderRadius: height / 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.title}>🛻</Text>
          </View>
          <Text style={[styles.title, { fontSize: 40, margin: 20 }]}>
            Vehicles
          </Text>
        </View>
        <LoginForm navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  title: {
    fontSize: 55,
    fontWeight: "bold",
    color: MyColors.primary,
  },
});
