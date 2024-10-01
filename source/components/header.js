import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({ headerText, headerIcon }) => {
    return (
        <View style={{ flexDirection: 'row', marginVertical: 7, marginEnd: 10 }}>
            <Text style={{ color: 'black', flex: 1, paddingHorizontal: 15, fontSize: 25, fontWeight: 'bold' }}>{headerText}</Text>
            <Icon name={headerIcon} size={26} color='black' />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})