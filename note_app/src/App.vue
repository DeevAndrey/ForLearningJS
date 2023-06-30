<template>
  <div class="wrapper">
      <div class="wrapper-content">
          <section>
            <div class="container">

              <message v-if="message" :message="message"/>

              <newNote
                :note="note"
                @addNote="addNote"/>
                <div class="note-header">
                  <h1>{{ title }}</h1>
                  <p>{{ search }}</p>
                  <search 
                  :value="search"
                   placeholder="Find your note"
                   @search="search =$event"/>
                  <div class="icons">
                    <svg :class="{active:grid}" @click="grid = true" style="cursor:pointer;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                    <svg :class="{active:!grid}" @click="grid = false" style="cursor:pointer;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
                  </div>
                </div>
                
              <notes :notes="notesFilter" :grid="grid"  @remove="removeNote" @edit="editNoteStatus" @sendEdit="newData"
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
import search from './components/Search.vue'
export default {
  name: 'App',
  components: {
    message,
    newNote,
    notes,
    search
  },
  data(){
    return{
      title: 'Notes App',
      search: '',
      grid: true,
      message: null,
      note:{
        title:'',
        description:'',
        priority: '',
      },
      notes: [
        {
          title: 'First Note',
          description: 'Description for first note',
          date: new Date(Date.now()).toLocaleString(),
          priority: "green",
          edit: false
        },
        {
          title: 'Second Note',
          description: 'Description for second note',
          date: new Date(Date.now()).toLocaleString(),
          priority: "yellow",
          edit: false
        },
        {
          title: 'Thrid Note',
          description: 'Description for third note',
          date: new Date(Date.now()).toLocaleString(),
          priority: "red",
          edit: false
        }
      ]
    }
  },
  methods: {
    addNote(){
      let {title,description,priority} = this.note
      if (priority == "high priority"){
        priority = 'red'
        console.log('red')
      }else if (priority == "middle priority"){
        priority = 'yellow'
        console.log('yellow')
      }else {
        priority = 'green'
        console.log('red')
      }
      if (title ===''){
        this.message = 'title cant be empty!'
        return false;
      }

      this.notes.push({
        title,
        description,
        date: Date(Date.now()).toLocaleString(),
        priority})
    },
    removeNote(index){
      this.notes.splice(index,1)
    },
    editNoteStatus(index,object){
      if (object == 'Title'){
        this.notes[index].edit = true
      }
    },
    newData(index,data){
      console.log(data)
      this.notes[index].title=data
      this.notes[index].edit = false
    }
  },
  computed:{
    notesFilter(){
      console.log(111)
      let array = this.notes,
          search = this.search
        if (!search) return array
        //Small
        search = search.trim().toLowerCase()
        //Filter
        
        array = array.filter(function(item){
          if (item.title.toLowerCase().indexOf(search) !== -1){
            
            return item
          }
        })
        return array
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
