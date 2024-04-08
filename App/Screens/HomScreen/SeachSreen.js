// import React, { useState } from 'react'
// // import { useQuery } from 'hygraph';
// import { StyleSheet, TextInput, View, FlatList } from 'react-native';


// export default function SeachSreen() {
//     const [query, setQuery] = useState('');

//     const { data, loading, error } = useQuery(
//       `query {
//         posts(where: {title_contains: "${query}"}) {
//           id
//           title
//           content
//         }
//       }`
//     );
  
//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error.message}</p>;
  
//     return (
//       <View>
//         <TextInput
//           style={styles.input}
//           value={query}
//           onChangeText={(e) => setQuery(e.target.value)}
//         />
//         <FlatList
//           data={data.posts}
//           renderItem={({ item }) => (
//             <View style={styles.item}>
//               <Text style={styles.title}>{item.title}</Text>
//               <Text style={styles.content}>{item.content}</Text>
//             </View>
//           )}
//         />
//       </View>
//     );
//   };
  
//   const styles = StyleSheet.create({
//     input: {
//       height: 40,
//       borderColor: 'gray',
//       borderWidth: 1,
//       padding: 10,
//     },
//     item: {
//       padding: 10,
//       borderColor: 'gray',
//       borderWidth: 1,
//       borderRadius: 5,
//       margin: 5,
//     },
//     title: {
//       fontSize: 18,
//       fontWeight: 'bold',
//     },
//     content: {
//       fontSize: 16,
//     },
//   });
  