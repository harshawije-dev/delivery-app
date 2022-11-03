import { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import {
  ArrowSmallLeftIcon,
  ChevronRightIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import { MapPinIcon, StarIcon } from "react-native-heroicons/solid";
import Dishes from "../Components/DishRow";
import FloatingBasket from "../Components/CardFloat";

const Restaurant = () => {
  const {
    params: { title, location, rating, preview, dishes, lat, long },
  } = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <FloatingBasket />
      <ScrollView
        className="bg-white"
        contentContainerStyle={{
          paddingBottom: 118,
        }}
      >
        <View className="relative">
          <Image
            source={{
              uri: preview,
            }}
            className="w-full h-56 bg-slate-500 pb-4"
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-12 left-3 p-1 bg-gray-100 rounded-full"
          >
            <ArrowSmallLeftIcon size={24} color="#34d399" />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <Text className="font-bold text-3xl pt-4 px-4">{title}</Text>
          <View className="flex-row items-center space-x-1 p-1">
            <Text>
              <StarIcon size={20} color="#d4d4d4" />
              {rating}. Offers
            </Text>
            <Text>
              <MapPinIcon size={20} color="#d4d4d4" /> {location}
            </Text>
          </View>
          <Text className="text-zinc-500 text-sm py-3 px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            vehicula euismod sodales.
          </Text>
          <View className="flex-row p-4 items-center space-x-2 border-y border-gray-100">
            <QuestionMarkCircleIcon size={20} color="#d4d4d4" />
            <Text className="pl-2 flex-1 font-bold text-base">
              Have food aleargy
            </Text>
            <TouchableOpacity>
              <ChevronRightIcon size={20} color="#34d399" />
            </TouchableOpacity>
          </View>
        </View>
        <Text className="text-black font-bold text-lg mx-4 py-3">Menu</Text>
        <View className="bg-white p-4">
          {/* dishrow */}
          {dishes.map((e) => (
            <Dishes
              key={e.Id}
              id={e.Id}
              name={e.Name}
              price={e.Price}
              description={e.Description}
              dishPreview={e.PreviewImage}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default Restaurant;
