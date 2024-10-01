import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/header';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchFilter from '../components/SearchFilter';
import CategoriesList from '../components/Categories';
import FoodCard from '../components/FoodCard';
import { NavigationContainer } from '@react-navigation/native';


const Home = () => {
    return (
        <SafeAreaView style={styles.bgHome}>
            <Header headerText={"Hello, Bro ✌"} headerIcon={'bell-o'} />
            <SearchFilter hint={'Bạn muốn uống gì nào?'} icon={'search'} />
            <CategoriesList />
            <FoodCard />
        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    bgHome: {
        flex: 1,
        backgroundColor: 'rgba(227, 223, 225, 0.8)',
    }
});
