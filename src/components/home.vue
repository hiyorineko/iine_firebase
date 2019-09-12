<template>
    <div class="home">
        <input v-model="text" type="text">
        <button @click="input">登録</button>
    </div>
</template>
<script>
import firebase from '@firebase/app'
export default {
  name: 'home',
  data(){
    return{
      text: '',
    }
  },
  methods:{
        input(){
            firebase.firestore().collection('text').doc().set({
                text: this.text,
            })
        }
    }
}
</script>

<style scoped>
</style>