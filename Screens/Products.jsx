import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'


export default function Products() {
    const [data, setData] = useState([]);

    useEffect(()=> {
      getProduct();
  },[])

    const getProduct = async() => {
      try{
        const response = await fetch('https://fakestoreapi.com/products/').then(
          res => res.json(),
        );
        setData(response)
      }catch{
        console.log("error")
      }
    }
  return (
    <ScrollView>
      <View>
        {data.map((e,i) => {
           return (
            <View style={{margin: 10}} key={i}>
              <Card_Section
                title={e.title}
                desc={e.description}
                img={e.image}
              />
            </View>
          );
        })}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})