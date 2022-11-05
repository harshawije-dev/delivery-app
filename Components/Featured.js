import { ScrollView, Text, View } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import FeatureCard from "./FeatureCard";

const FeatureRow = ({ id, title, description }) => {
  // Dishes List
  const dishList = [
    {
      Id: "D555C275-0FE3-45BA-A8EE-1F68DD16B7FB",
      Name: "Purple Dragon",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas tristique tellus",
      PreviewImage:
        "https://api.lorem.space/image/drink?w=150&h=150&hash=225E6693",
      Price: 25,
    },
    {
      Id: "6B5356FD-04D8-47D3-B061-24A385BEE7A0",
      Name: "Vodka Sun",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas tristique tellus",
      PreviewImage:
        "https://api.lorem.space/image/drink?w=150&h=150&hash=9D9539E7",
      Price: 30,
    },
    {
      Id: "19C58033-A097-4773-804C-4C020581B822",
      Name: "Red Strawnerry Rum",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas tristique tellus",
      PreviewImage:
        "https://api.lorem.space/image/drink?w=150&h=150&hash=4F32C4CF",
      Price: 35.5,
    },
    {
      Id: "B8600DD2-ECEA-47BC-9F02-DF17EDCA655E",
      Name: "New Halloween Jungle Juice",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas tristique tellus",
      PreviewImage:
        "https://api.lorem.space/image/drink?w=150&h=150&hash=A89D0DE6",
      Price: 40,
    },
  ];
  return (
    <View key={id}>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="text-xl font-bold">{title}</Text>
        <ArrowRightIcon size={19} color="#34d399" />
      </View>
      <Text className="text-xs text-gray-400 px-4">{description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 3,
        }}
        className="mt-3"
      >
        <FeatureCard
          id={5001}
          preview={"https://api.lorem.space/image/drink?w=256&h=144&hash=9D9539E7"}
          title={"Nando"}
          location={"Colombo 07"}
          rating={4.5}
          dishes={dishList}
          lat={20}
          long={0}
        />
        <FeatureCard
          id={5002}
          preview="https://api.lorem.space/image/burger?w=256&h=144&hash=500B67FB"
          title="Sushi Yo!"
          location={"Wattala"}
          rating={4.0}
          dishes={dishList}
          lat={20}
          long={0}
        />
        <FeatureCard
          id={5003}
          preview="https://api.lorem.space/image/pizza?w=256&h=144&hash=A89D0DE6"
          title="Author's Pizza"
          location={"Colombo 06"}
          rating={4.8}
          dishes={dishList}
          lat={20}
          long={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
