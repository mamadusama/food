import { Text, View, ScrollView } from "react-native";
import { Header } from "../components/header";
import { Search } from "../components/search";
import { Banner } from "../components/banner";
import { TrendingFood } from "../components/trending";
import { Section } from "../components/section";
import { RestauranteVerticalList } from "../components/restauraList";

import  Constants  from "expo-constants";
import { Restaurantes } from "../components/restaurantes";

const statusBarHeigth = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4 " style={{ marginTop: statusBarHeigth + 8 }}>
        <Header />

        <Banner />

        <Search />
      </View>

      <Section
        name="Comidas em alta"
        size="text-2xl"
        label="Ver todas"
        action={() => {}}
      />

      <TrendingFood />

      <Section
        name="Mais Populares"
        size="text-xl"
        label="Ver todos"
        action={() => console.log("clicou no restaurante")}
      />

      <Restaurantes />

      <Section
        name="Restaurantes"
        size="text-xl"
        label="Ver todos"
        action={() => {}}
      />

      <RestauranteVerticalList />
    </ScrollView>
  );
}
