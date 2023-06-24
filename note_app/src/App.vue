<template>
  <div class="wrapper">
      <div class="wrapper-content">
          <section>
            <div class="container">
              <h1>{{ title }}</h1>
              <message v-if="message" :message="message"/>

              <newNote
                :note="note"
                @addNote="addNote"/>

              <notes 
              :notes="notes"
              @remove="removeNote"
              />
            </div>
          </section>
      </div>
  </div>
</template>

<script>
import message from './components/Message.vue'
import newNote from './components/NewNote.vue'
import notes from './components/Notes.vue'
export default {
  name: 'App',
  components: {
    message,
    newNote,
    notes
  },
  data(){
    return{
      title: 'Notes App',
      message: null,
      note:{
        title:'',
        description:''
      },
      notes: [
        {
          title: 'First Note',
          description: 'Description for first note',
          date: new Date(Date.now()).toLocaleString()
        },
        {
          title: 'Second Note',
          description: 'Description for second note',
          date: new Date(Date.now()).toLocaleString()
        },
        {
          title: 'Thrid Note',
          description: 'Description for third note',
          date: new Date(Date.now()).toLocaleString()
        }
      ]
    }
  },
  methods: {
    addNote(){
      let {title,description} = this.note
      if (title ===''){
        this.message = 'title cant be empty!'
        return false;
      }

      this.notes.push({
        title,
        description,
        date: Date(Date.now()).toLocaleString()})
    },
    removeNote(index){
      this.notes.splice(index,1)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
