import { useState, useEffect } from 'react';

import { FlatList } from 'react-native';
import { CardHorizontalFood } from './food';

/*
  id: "1";
  name: "Frango assado";
  price: 39.9;
  time: "50-60 min";
  delivery: 5.99;
  rating: 4.8;
  image: "https://i.imgur.com/CEVUdju.png";
  restaurantId: "1";


*/


export interface FoodProps {
  id: string;
  name: string;
  price: number;
  time: string;
  delivery: number;
  rating: number;
  image: string;
  restaurantId: string;
}


export  function TrendingFood() {
  const [food, settFood] = useState<FoodProps[]>([]);

  useEffect(() => {
    async function getFood(){
      const response = await fetch("http://192.168.1.175:3000/foods");
      const data = await response.json()
      
      settFood(data);
     
    }
    getFood();

  }, [])


 return (
   <FlatList
   data={food}
   renderItem={({item}) =><CardHorizontalFood food={item}/>}
    horizontal={true}
    contentContainerStyle={{gap: 14, paddingLeft:16, paddingRight:16}}
    showsHorizontalScrollIndicator={false}
   
   />
  );
}