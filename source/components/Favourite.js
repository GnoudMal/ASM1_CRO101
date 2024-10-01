import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './header'
import FavouriteFood from './FavouriteFood'
import { SafeAreaView } from 'react-native-safe-area-context'

const Favourite = () => {
    return (
        <SafeAreaView>
            <Header headerText={"Favourite"} headerIcon={'bell'} />
            <FavouriteFood />
        </SafeAreaView>
    )
}

export default Favourite

const styles = StyleSheet.create({})