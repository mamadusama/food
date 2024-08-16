import { useState, useEffect } from 'react';

import { View, Text } from 'react-native';
import { RestauranteItem } from "./item"

export interface RestaurantesProps {
  id: string;
  name: string;
  image: string;
}

export  function RestauranteVerticalList() {

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
   <View className="px-4 flex-1 w-full h-full mb-11 gap-4">
     {restaurantes.map((item) => (
       <RestauranteItem key={item.id} item={item} />
     ))}
   </View>
 );
}