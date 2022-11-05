import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { MapPinIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";

const FeatureCard = ({
  id,
  preview,
  title,
  rating,
  location,
  dishes,
  lat,
  long,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          title,
          location,
          rating,
          preview,
          dishes,
          lat,
          long,
        });
      }}
      key={id}
      className="bg-slate-50 mr-3 shadow"
    >
      <Image
        source={{
          uri: preview,
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="pb-4 px-3">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1 pt-2">
          <StarIcon size={21} color="green" opacity={0.5} />
          <Text className="text-xs text-gray-600">{rating} Ratings</Text>
        </View>
        <View className="flex-row items-center space-x-1 pt-1">
          <MapPinIcon size={21} color="gray" opacity={0.6} />
          <Text className="text-xs text-gray-600">Nearby . {location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FeatureCard;
