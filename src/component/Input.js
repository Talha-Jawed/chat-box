import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import VoiceRecord from '../../assets/MENU-AUDIO.png';
import MenuIcon from '../../assets/MENU-INFERIOR.png';
import Emoji from '../../assets/EMOJI.png';
import AddIcon from '../../assets/MORE-ACTION.png';
import CameraIcon from '../../assets/CAMERA-CONVERSAS.png';
import ImageIcon from '../../assets/IMAGE-CONVERSAS.png';
import VideoIcon from '../../assets/VIDEOS-CONVERSAS.png';
import FigurinesIcon from '../../assets/FIGURINES-CONVERSAS.png';
import LocationIcon from '../../assets/LOCATION-CONVERSAS.png';
import AttechmentIcon from '../../assets/ATTACHMENT-CONVERSAS.png';
import ContactIcon from '../../assets/CONTACTS-CONVERSAS.png';
import CloseIcon from '../../assets/CLOSE-ACTION.png';


export default class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            more: false,
            inputText: '',
            inputActive: false,
        }
    }

    Send() {
        const { text } = this.props
        const { inputText } = this.state
        text(inputText)
        this.setState({ inputText: '', inputActive: false })
    }

    Add() {
        this.setState({ more: true })
    }

    close() {
        this.setState({ more: false })
    }

    render() {
        const { inputText, more, inputActive } = this.state
        return (
            <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', backgroundColor: '#f2f3f4', alignItems: 'center', marginVertical: 5 }}>
                {more
                    ?
                    <View style={{ width: '75%', height: 32, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#800080', alignItems: 'center', borderRadius: 18, marginHorizontal: 10 }}>
                        <TouchableOpacity style={{ marginLeft: 5 }} onPress={console.log('emoji')}>
                            <Image
                                style={{ height: 20, width: 20, }}
                                source={CameraIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={console.log('emoji')}>
                            <Image
                                style={{ height: 16, width: 16, }}
                                source={ImageIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={console.log('emoji')}>
                            <Image
                                style={{ height: 14, width: 20, }}
                                source={VideoIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={console.log('emoji')}>
                            <Image
                                style={{ height: 16, width: 16, }}
                                source={FigurinesIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={console.log('emoji')}>
                            <Image
                                style={{ height: 18, width: 12, }}
                                source={LocationIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={console.log('emoji')}>
                            <Image
                                style={{ height: 16, width: 12, }}
                                source={AttechmentIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={console.log('emoji')}>
                            <Image
                                style={{ height: 16, width: 18, }}
                                source={ContactIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginRight: 10 }} onPress={() => this.close()}>
                            <Image
                                style={{ height: 20, width: 20, }}
                                source={CloseIcon}
                            />
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={{ width: '75%', minHeight: 32, maxHeight: 100, justifyContent: 'space-evenly', flexDirection: 'row', backgroundColor: 'white', alignItems: 'center', borderRadius: 18, borderColor: 'gray', borderWidth: 1, marginHorizontal: 10 }}>
                        {
                            !inputActive &&
                            <TouchableOpacity onPress={console.log('emoji')}>
                                < Image
                                    style={{ height: 20, width: 20, }}
                                    source={Emoji}
                                />
                            </TouchableOpacity>
                        }
                        <TextInput
                            style={[inputActive ? styles.activeInput : styles.input]}
                            onChangeText={(e) => {
                                this.setState({ inputText: e })
                                if (e) {
                                    this.setState({ inputActive: true })
                                } else {
                                    this.setState({ inputActive: false })
                                }
                            }}
                            value={inputText}
                            placeholder={'Type a Message ...'}
                            placeholderTextColor='rgba(255,255,255,0.7)'
                            multiline
                        />
                        {
                            !inputActive &&
                            <TouchableOpacity onPress={() => this.Add()}>
                                <Image
                                    style={{ height: 20, width: 20, }}
                                    source={AddIcon}
                                />
                            </TouchableOpacity>
                        }
                    </View>

                }
                <TouchableOpacity onPress={() => this.Send()}>
                    <Image
                        style={{ height: 20, width: 20, }}
                        source={MenuIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={console.log('emoji')}>
                    <Image
                        style={{ height: 26, width: 26, }}
                        source={VoiceRecord}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        color: 'black',
        height: 30,
        width: '70%',
        fontSize: 18,
        borderRadius: 18
    },
    activeInput: {
        backgroundColor: 'white',
        color: 'black',
        minHeight: 30,
        maxHeight: 100,
        width: '99.5%',
        paddingHorizontal: 8,
        paddingVertical: 4,
        fontSize: 18,
        borderRadius: 18,
        overflow: 'hidden',
    }
})