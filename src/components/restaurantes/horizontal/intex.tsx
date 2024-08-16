import { View, Pressable , Text, Image} from 'react-native';
import { RestaurantesProps } from '..';

export  function HorizontalRestauranteItem({ item }: {item: RestaurantesProps}) {
 return (
   <Pressable
     className="flex flex-col 
   items-center justify-center"
     onPress={() => console.log(`clicou na restaurante id: ${item.id} - nome ${item.name}`)}
   >
     <Image source={{ uri: item.image }} className="w-20 h-20 rounded-full" />

     <Text
       className="text-sm mt-2 w-20 text-center leading-4 text-black"
       numberOfLines={2}
     >
       {item.name}
     </Text>
   </Pressable>
 );
}

// nesse arquivo tenho codigo para desenvolver futuramente(quando clicar numa restaurante levar para pagina de detalhes ou outra funcionalidade)

/*
 onPress={() => console.log(`clicou na restaurante id: ${item.id} - nome ${item.name}`)}

*/