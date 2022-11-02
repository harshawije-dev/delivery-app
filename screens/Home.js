import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon as SearchIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../Components/Categories";
import FeatureRow from "../Components/Featured";

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  
  return (
    <SafeAreaView style={styleSheet.container}>
      <View>
        {/* Navbar */}
        <View className="flex justify-start">
          {/* Image View */}
          <View className="pt-3 px-3 flex-row items-center space-x-2">
            <Image
              source={{
                uri: "https://picsum.photos/id/292/500/500",
              }}
              className="h-10 w-10 bg-slate-200 rounded-full"
            />
            <View className="flex-1">
              <Text className=" font-bold text-xs text-gray-400">
                Deliver Now !
              </Text>

              <Text className="font-bold text-xl">
                Current Location
                <ChevronDownIcon size={20} color="#34d399" />
              </Text>
            </View>

            <UserIcon size={35} color="#34d399" />
          </View>
        </View>
        {/* Search bar */}
        <View className="flex-row space-x-2 pt-4 pb-2 mx-4 items-center">
          <View className="flex-row flex-1 items-center space-x-2 bg-gray-200 p-2">
            <SearchIcon size={20} color="#64748b" />
            <TextInput placeholder="Search Here" keyboardType="default" />
          </View>
          <AdjustmentsHorizontalIcon size={25} color="#34d399" />
        </View>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 300,
          }}
        >
          <Categories />
          <FeatureRow
            id={2002}
            title={"Featured"}
            description="Lorem ipsum dolor sit ametersd rewsetm"
          />
          <FeatureRow
            id={2003}
            title={"Tasty Discounts"}
            description="Lorem ipsum dolor sit ametersd rewsetm"
          />
          <FeatureRow
            id={2004}
            title={"Offers Near You"}
            description="Lorem ipsum dolor sit ametersd rewsetm"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styleSheet = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
  },
  logo: {
    width: 25,
    height: 25,
  },
});

export default Home;
