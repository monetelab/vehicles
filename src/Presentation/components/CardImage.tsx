import React from "react";
import { Image, Text, StyleSheet, View } from "react-native";
import { MyColors } from "../theme/AppTheme";

interface Props {
  title: string;
  imgURL: string;
}

export const CardImage = ({ name, imgURL, styleContainer, styleImage }) => {
  return (
    <View style={styleContainer}>
      <Image
        style={[styles?.tinyLogo, styleImage]}
        resizeMode="cover"
        source={{
          uri: imgURL,
        }}
      />
      <Text style={styles.title}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  roundedButton: {
    width: "100%",
    height: 150,
  },
  smallImage: {
    height: 50,
    width: "100%",
  },
  bigllImage: {
    height: 350,
    width: "100%",
  },

  title: {
    backgroundColor: MyColors.primary,
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
});
