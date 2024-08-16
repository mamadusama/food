import { View, Text, FlatList } from "react-native";
import { useState, useEffect } from 'react';
import { HorizontalRestauranteItem } from "./horizontal/intex";

export interface RestaurantesProps{
    id: string;
    name: string;
    image: string;
    
}
//192.168.1.175

export function Restaurantes() {
    const [restaurantes, setRestaurantes] = useState<RestaurantesProps[]>([]);

     useEffect(() => {
       async function getFood() {
         const response = await fetch("http://192.168.1.175:3000/restaurants");
         const data = await response.json();

         setRestaurantes(data);
       }
       getFood();
     }, []);


 return (
   <FlatList
     data={restaurantes}
     renderItem={({ item }) => <HorizontalRestauranteItem item={item} />}
     horizontal={true}
     contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
     showsHorizontalScrollIndicator={false}
   />
 );
}