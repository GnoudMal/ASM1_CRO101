import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { favourites } from '../data/data';

const { width } = Dimensions.get('window');

const FavouriteFood = () => {
    const renderItem = ({ item }) => (
        <View style={styles.shadowContainer}>
            <ImageBackground style={styles.container} source={item.image} resizeMode='cover'>
                <View style={{ justifyContent: 'flex-end', marginTop: 10, flexDirection: 'row', marginHorizontal: 15 }}>
                    <Icon name='heart' size={30} color='white' />
                </View>
                <View style={styles.contentBox}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    {item.sale && <Text style={styles.saleText}>Sale</Text>}
                    <Text style={styles.itemCategory}>{item.category}</Text>
                    <View style={{ height: 100 }}>
                        <Text style={styles.itemDescription}>{item.description}</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );

    return (
        <FlatList
            data={favourites}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    );
};

export default FavouriteFood;

const styles = StyleSheet.create({
    shadowContainer: {
        marginVertical: 20,
        marginHorizontal: 10,
        shadowColor: 'white',
        elevation: 8,
        borderRadius: 20,
    },
    container: {
        flex: 1,
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#D17842',
    },
    contentBox: {
        flex: 1,
        marginTop: 275,
        borderTopLeftRadius: 55,
        borderTopRightRadius: 55,
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        overflow: 'hidden',
        backgroundColor: 'rgba(2, 2, 2, 0.5)',
        width: '100%',
    },
    itemName: {
        fontSize: 45,
        fontFamily: 'FS Harabara',
        color: '#fff',
        marginTop: 20,
    },
    itemCategory: {
        fontSize: 18,
        color: '#000000',
        marginTop: 5,
        fontWeight: '700',
        backgroundColor: 'rgba(234, 221, 228, 0.8)',
        padding: 5,
        borderRadius: 10,
    },
    itemDescription: {
        fontSize: 16,
        color: '#fff',
        marginTop: 10,
        textAlign: 'auto',
        letterSpacing: 1,
    },
    saleText: {
        position: 'absolute',
        right: 0,
        backgroundColor: '#f5272799',
        color: '#FFFFFF',
        width: 100,
        height: 35,
        textAlign: 'center',
        borderBottomLeftRadius: 22,
        zIndex: 1,
        fontWeight: 'bold',
        fontSize: 20,
    },
});
