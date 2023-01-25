import React from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";
import { CardImage } from "../../components/CardImage";
import { MyColors } from "../../theme/AppTheme";
import { MyButtonOutSession } from "../../components/OutSessionButton";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigator/Navigator";
import { VehicleDetailsViewModel } from "./VehicleDetailsViewModel";
const vehicle = {
  brand: "Volkswagen",
  fuel: "Electric",
  id: 78371,
  image: "http://loremflickr.com/1280/720/transport?4378",
  model: "XC90wdewdfewfdewfdwefwefew",
  type: "Wagon",
  vin: "GCLNHW7XF5DA30360",
};

interface Props
  extends StackScreenProps<RootStackParamList, "VehicleDetails"> {}
export const VehicleDetails = ({ navigation, route }: Props) => {
  const IdSelection = route.params?.id;
  const { height, width } = useWindowDimensions();
  const { vehicleDinamic, closeUserSession } = VehicleDetailsViewModel({
    IdSelection,
  });

  function outSession() {
    closeUserSession();
  }

  return (
    <SafeAreaView
      style={{ height: height, backgroundColor: MyColors.background }}
    >
      <CardImage
        styleImage={{ width: width, height: 300 }}
        name={`${vehicleDinamic.brand} -- ${vehicleDinamic.model}`}
        imgURL={vehicle.image}
        styleContainer={null}
      />
      <View
        style={[
          styles.card,
          {
            alignContent: "center",
            height: height / 2,
          },
        ]}
      >
        <Text style={styles.label}>Marca</Text>
        <Text style={styles.info}>{vehicleDinamic.brand}</Text>
        <Text style={styles.label}>modell</Text>
        <Text style={styles.info}>{vehicleDinamic.model}</Text>
        <Text style={styles.label}>Tipo</Text>
        <Text style={styles.info}>{vehicleDinamic.type}</Text>
        <Text style={styles.label}>Numero de vastidor</Text>
        <Text style={styles.info}>{vehicleDinamic.vin}</Text>
        <Text style={styles.label}>Fuel</Text>
        <Text style={styles.info}>{vehicleDinamic.fuel}</Text>
      </View>
      <MyButtonOutSession text={"out"} onPress={outSession} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    paddingHorizontal: 10,
  },
  info: {
    color: "white",
    paddingHorizontal: 15,
  },
  card: {
    alignSelf: "center",
    alignContent: "center",
    width: 250,
    backgroundColor: MyColors.primary,
  },
});
