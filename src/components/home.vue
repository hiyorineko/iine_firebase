<template>
    <div class="home">
        <input v-model="text" type="text">
        <button @click="input">登録</button>
        <div class="user-list" v-for="(text, index) in texts" :key='index'>
            <p>{{text.text}}</p>
        </div>
    </div>
</template>
<script>
import firebase from '@firebase/app'
export default {
  name: 'home',
  data(){
    return{
      text: '',
      texts: [],
      showMessage: false
    }
  },
  methods:{
        input(){
            firebase.firestore().collection('text').doc().set({
                text: this.text,
            })
            this.showInput()
            this.text = ""
        },
        showInput(){
            firebase.firestore().collection('text').get().then((querySnapshot) => {
                this.loading = false
                querySnapshot.forEach((doc) => {
                    let data = {
                        'text': doc.data().text
                    }
                    this.texts.push(data)
                })
           })
        }
    },
  created () {
       this.showInput()
   }
}
</script>

<style scoped>
</style>