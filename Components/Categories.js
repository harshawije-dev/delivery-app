import { ScrollView, Text, View } from "react-native";
import Card from "./Card";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 10, paddingTop: 10 }}
    >
      <Card
        imageUrl="https://api.lorem.space/image/pizza?w=150&h=150&hash=8B7BCDC2"
        title="Pizza"
      />
      <Card
        imageUrl="https://api.lorem.space/image/burger?w=150&h=150"
        title="Burgers"
      />
      <Card
        imageUrl="https://api.lorem.space/image/drink?w=150&h=150"
        title="Drinks"
      />
      <Card
        imageUrl="https://api.lorem.space/image/pizza?w=150&h=150&&hash=A89D0DE6"
        title="Pizza"
      />
      <Card
        imageUrl="https://api.lorem.space/image/burger?w=150&h=150&hash=225E6693"
        title="Burgers"
      />
      <Card
        imageUrl="https://api.lorem.space/image/drink?w=150&h=150&hash=7F5AE56A"
        title="Drinks"
      />
    </ScrollView>
  );
};

export default Categories;
