import { Link } from "expo-router";
import React from "react";
import { Text, View, Image, ImageBackground, ScrollView} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function Page() {
  return (
  <ScrollView>
    <ImageBackground source={require("../assets/background.jpg")} resizeMode="cover">
    <View className="w-screen h-screen">
      <View className="py-10">
        <Image className="mx-auto" style={{width: 250, height: 310}} source={require('../assets/svelte.png')}/>
      </View>
      <View className="pt-10 rounded-2xl bg-black h-screen">
        <Text className="mx-auto font-semibold text-7xl text-white">SvelteKit</Text>
        <Text className="px-2 pt-3 text-white text-center font-regular text-2xl">Svelte es el framework mas chad existente en este planeta</Text>
      </View>
    </View>
    </ImageBackground>
  </ScrollView>
  );
}

export default Page;