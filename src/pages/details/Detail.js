import React from "react";
import { View, Text, Image, FlatList, Linking, Pressable } from "react-native";
import UseFetch from "../../hooks/useFetch/UseFetch";
import styles from "./Detail.style";
import Loading from '../../components/loading/Loading'
import Error from '../../components/error/Error';

function Detail(props) {
  const { mealName } = props.route.params;

  const { data, loading, error } = UseFetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
  );

  const renderMealDetail = ({ item }) => (
    <View>
      <Image style={styles.image} source={{ uri: item.strMealThumb }} />
      <Text style={styles.mealName}>{item.strMeal}</Text>
      <Text style={styles.mealArea}>{item.strArea}</Text>

      <Text style={styles.mealDetail}>{item.strInstructions}</Text>
      <Pressable
        style={styles.youtubeButton}
        title={item.strMeal}
        onPress={() => {
          Linking.openURL(item.strYoutube);
        }}
      >
        <Text style={styles.youtubeText}>Watch on Youtube</Text>
      </Pressable>
    </View>
  );

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  return (
    <View>
      <FlatList
        data={data.meals}
        renderItem={renderMealDetail}
        keyExtractor={(item) => item.idMeal}
      />
    </View>
  );
}

export default Detail;
