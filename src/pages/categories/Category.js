import React from "react";
import { View, FlatList } from "react-native";
import UseFetch from "../../hooks/useFetch/UseFetch";

import CategoryButton from "../../components/CategoryButton/CategoryButton";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";
import styles from "./Category.style";

function Category({ navigation }) {
  const { loading, error, data } = UseFetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  const handleCategorySelect = (categoryName) => {
    navigation.navigate("MealPage", { categoryName });
  };

  const renderCategory = ({ item }) => (
    <CategoryButton item={item} onPressButton={() => handleCategorySelect(item.strCategory)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data.categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.idCategory.toString()}
      />
    </View>
  );
}

export default Category;
