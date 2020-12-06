import React from 'react';
import {FlatList, View, Text} from 'react-native';
import styles from './style';

function DetailsList(){
    const lista = [
        {
            id: 1,
            title: 'titulo1',
            description: 'description1'
        },
        {
            id: 2,
            title: 'titulo2',
            description: 'description2'
        },
        {
            id: 3,
            title: 'titulo3',
            description: 'description'
        },
    ]

    return(
        <FlatList
            style={styles.list}
            data={lista}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={(item) => {
                return(
                    <View style={styles.container}>
                        <View style={styles.line}>
                            <Text style={styles.Propriety}>Note title:</Text>
                            <Text style={styles.Value}>{item.item.id}</Text>
                        </View>
                        <View style={styles.line}>
                            <Text style={styles.Propriety}>Node description:</Text>
                            <Text style={styles.Value}>{item.item.description}</Text>
                        </View>
                    </View>
                );
            }}
        />
    );
}

export default DetailsList;
