<template>
    <div class="new-note">
        <label>Title</label>
        <div class="note-title">
          <input class="input-title" v-model="note.title" type="text"/> 
          <select v-model="note.priority">
            <option>
                low priority
            </option>
            <option>
                middle priority
            </option>
            <option>
                high priority
            </option>
          </select>
        </div>
        
        <label>Discription</label>
        <textarea v-model="note.description"/>
        <button class="btn btnPrimary"
         @click="addNote">New note</button>
    </div>
</template>

<script>
export default{
    data(){
        return{
            options:[
                {
                    title: 'low priority'
                },
                {
                    title: 'middle priority'
                },
                {
                    title: 'high priority'
                }
            ]
        }
    },
    props:{
        note:{
            type: Object,
            required: true
        }
    },
    methods:{
        addNote(){
            this.$emit('addNote')
        }
    }
}
</script>

<style lang="scss">
select{
    padding: 15.3px 26px;
  margin-bottom: 30px;
  border-radius: 20px;
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
}
.input-title{
    border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
}
.new-note{
    text-align: center;
}
</style> 