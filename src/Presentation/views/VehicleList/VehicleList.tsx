import React, { useContext } from "react";
import {
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
  SafeAreaView,
} from "react-native";
import { CardImage } from "../../components/CardImage";
import { MyButtonOutSession } from "../../components/OutSessionButton";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigator/Navigator";
import VehicleListViewModel from "./VehiclesListViewModel";

interface Props extends StackScreenProps<RootStackParamList, "VehicleList"> {}
export const VehicleList = ({ navigation }: Props) => {
  const { vehicles, closeUserSession } = VehicleListViewModel();
  const { height, width } = useWindowDimensions();

  function outSession() {
    closeUserSession();
  }

  return (
    <SafeAreaView style={{ height: height }}>
      {vehicles && (
        <FlatList
          ListHeaderComponent={
            <MyButtonOutSession text={"out"} onPress={outSession} />
          }
          ListHeaderComponentStyle={{ marginBottom: 40, paddingBottom: 20 }}
          data={vehicles}
          renderItem={({ item }) => VehicleCard(item)}
          keyExtractor={(item) => item.id}
        />
      )}
    </SafeAreaView>
  );

  function VehicleCard(item: {
    name: string;
    id: number;
    image: string;
  }): React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  > | null {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate({
            name: "VehicleDetails",
            params: { id: item?.id },
          })
        }
        style={{
          marginVertical: 10,

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardImage
          styleImage={{ width: width, height: 120 }}
          name={item?.name}
          imgURL={item?.image}
          styleContainer={undefined}
        />
      </TouchableOpacity>
    );
  }
};
