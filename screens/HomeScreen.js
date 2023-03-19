import React from "react";
import { Image, SafeAreaView, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavigationOptions from "../components/NavigationOptions";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <NavigationOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
