import React from 'react';
import { FlatList, View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import styles from './style';

function SubjectsList(){
    const navigation = useNavigation();
    const lista = [
        {
            id: 1,
            name: 'Subject1',
            description: 'A quick description for subject1',
            media: 7,
        },
        {
            id: 2,
            name: 'Subject2',
            description: 'A quick description for subject2',
            media: 7.5,
        },
        {
            id: 3,
            name: 'Subject3',
            description: 'A quick description for subject3',
            media: 8,
        },
        {
            id: 4,
            name: 'Subject5',
            description: 'A quick description for subject5',
            media: 8.5,
        },
        {
            id: 5,
            name: 'Subject5',
            description: 'A quick description for subject5',
            media: 9,
        },
    ];

    function toDetail(){
        navigation.navigate('Detail');
    }

    return(
        <FlatList style={styles.list}
        data={lista}
        keyExtractor={subject => subject.id}
        showsHorizontalScrollIndicator={false}
        renderItem={(subject) => {
            return((
                <TouchableOpacity onPress={toDetail}>
                    <View style={styles.container}>
                        <Text style={styles.Propriety}>Nome:</Text>
                        <Text style={styles.Value}>{subject.item.name}</Text>
                        <Text style={styles.Propriety}>Description:</Text>
                        <Text style={styles.Value}>{subject.item.description}</Text>
                        <Text style={styles.Propriety}>Media:</Text>
                        <Text style={styles.Value}>{subject.item.media}</Text>
                    </View>
                </TouchableOpacity>
            ))
        }}
    />
    );
}

export default SubjectsList;
