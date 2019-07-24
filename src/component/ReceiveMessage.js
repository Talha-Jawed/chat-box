import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment'

export default class ReceiveMessage extends React.Component {
    render() {
        const { text, time } = this.props
        return (
            <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start', paddingLeft: 8, paddingTop: 4 }}>
                <View style={{ backgroundColor: 'white', maxWidth: 270, minWidth: 80, borderRadius: 12, overflow: 'hidden', }}>
                    <Text style={{ fontSize: 18, padding: 1, fontWeight: '400', marginTop: 5, marginLeft: 6, marginRight: 6 }}>
                        {text}
                    </Text>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={{ fontSize: 12, marginBottom: 5, marginHorizontal: 5, color: 'gray' }}>
                            {moment((time)).format(" h:mm: A")}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

