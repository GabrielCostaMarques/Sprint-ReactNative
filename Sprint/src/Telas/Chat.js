import React, { memo, useEffect, useState } from 'react';
import {
   FlatList,
   StyleSheet,
   Text,
   TextInput,
   View,
   Image,
   TouchableOpacity,} from 'react-native';

import imagemIA from './assets/IconIa.png'
import seta from './assets/seta.png'
import { AntDesign } from '@expo/vector-icons'; 

export default function Chat() {
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState('');
    useEffect(() => {
        setTimeout(() => setMessages(msgs => ([{ id: new Date().getTime(), type: 'receive', text: 'Olá, como podemos te ajudar?' }, ...msgs])), 1000);
    }, [])
    const sendMsg = () => { setMessages([{ id: new Date().getTime(), type: 'send', text: message }, ...messages]); setMessage('') };
    //Linha para testar a reposta
    const receiveMsg = () => { setMessages([{ id: new Date().getTime(), type: 'receive', text: message }, ...messages]); setMessage('') };
    return ( 
        <View style={styles.container}>

            <View className="topo" style={styles.topo}><Image source={seta}/></View>
            <FlatList data={messages} keyExtractor={x => x.id} renderItem={({ item, index }) => <ChatItemMemo {...{ item, index }} />} inverted contentContainerStyle={styles.listStyle} />
            <View style={styles.bottom}>
                
                <TextInput style={styles.input} value={message} placeholder='Type your message' onChangeText={setMessage} />
                <TouchableOpacity style={styles.button} onPress={sendMsg}disabled={message.length===0}>
                  <Text style={styles.bottomText}><AntDesign name="right" size={24} color="black" /></Text>
                </TouchableOpacity>
            </View>
          
        </View>
    )
}
  function ChatItem({ item }) {
    const validarImage = () => {  
      if (item.type === 'receive') {
        return (
          <View style={[styles.chatItemCommon, styles.receive]}> 
            <Image source={imagemIA}/> 
            <Text style={styles.msgtxt_receive}>{item.text}</Text>
          </View>
        );
      } else {
        return (
          <View style={[styles.chatItemCommon, styles.send]}> 
            <Text style={styles.msgtxt_send}>{item.text}</Text>
          </View>
        );
      }
    };
  
    return (
      <View>
        {validarImage()}
      </View>
    );
  }
  


const ChatItemMemo = memo(ChatItem, (prevProps, nextProps) => true)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    topo:{
        backgroundColor: '#ef4023',
        borderBottomEndRadius:250,
        borderBottomStartRadius:250,
        alignItems:"center",
        justifyContent:"center",
        padding:0
    },

    bottomText:{
      padding:15,
      borderRadius: 32,
      margin:10,
      backgroundColor: '#ef4023',
      justifyContent: 'center',
      alignItems: 'center', 

    },

    bottom: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
      flex:2,
      margin:10,
      padding: 0,
      fontSize: 18,
      paddingVertical: 10,
      paddingHorizontal: 15,
      backgroundColor:"#ef4023",
      borderRadius:20
    },
    chatItemCommon: {
        marginBottom: 2
    },
    send: {
        alignSelf: 'flex-end',
        marginTop:15,
    },
    receive: {
        alignSelf: 'flex-start',
    },
    msgtxt_send: {
        backgroundColor: '#ef4023',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 10,
        maxWidth: '75%'
    },
    msgtxt_receive: {
      backgroundColor: 'lightgrey',
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderRadius: 10,
      maxWidth: '75%'
  },
    listStyle: {
        paddingHorizontal: 10,
        paddingBottom: 20
    }
})