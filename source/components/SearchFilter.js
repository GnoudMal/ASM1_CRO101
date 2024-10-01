import { StyleSheet, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react'

const SearchFilter = ({ icon, hint }) => {
    return (
        <View style={styles.edtField}>
            <Icon name={icon} size={26} color='gray' />
            <TextInput
                style={styles.textInput}
                placeholder={hint}
                placeholderTextColor='gray'
            />
        </View>
    )
}

export default SearchFilter

const styles = StyleSheet.create({
    edtField: {
        flexDirection: 'row',
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
        elevation: 3,
    },
    textInput: {
        paddingLeft: 10,
        fontSize: 16,
        fontWeight: '500',
        flex: 1,
        color: 'black',
    }
})
