import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";

const options = [
  {
    id: 1,
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "Map",
  },
  {
    id: 2,
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "Food",
  },
];

const NavigationOptions = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(item.screen)}
        style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 `}
      >
        <View>
          <Image
            style={{ height: 120, width: 120, resizeMode: "contain" }}
            source={{ uri: item.image }}
          />
          <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
          <Icon
            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
            type="antdesign"
            color="white"
            name="arrowright"
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={options}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};

export default NavigationOptions;
