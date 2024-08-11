import React from "react";
import { View, FlatList } from "react-native";
import UseFetch from "../../hooks/useFetch/UseFetch";
import styles from "./Meal.style";
import MealCard from "../../components/mealsCard/MealCard";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";

function Meal(props) {
  const { categoryName } = props.route.params;

  const { data, loading, error } = UseFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
  );

  function navigateToPage(mealName) {
    props.navigation.navigate("MealDetailPage", { mealName });
  }

  const renderMeal = ({ item }) => (
    <MealCard item={item} onPressButton={() => navigateToPage(item.strMeal)} />
  );

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data.meals}
        renderItem={renderMeal}
        keyExtractor={(item) => item.idMeal.toString()}
      />
    </View>
  );
}

export default Meal;
