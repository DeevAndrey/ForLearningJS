<template>
    <div class="new-note">
        <label>Title</label>
        <input v-model="note.title" type="text">
        <label>Discription</label>
        <textarea v-model="note.description"/>
        <button class="btn btnPrimary"
         @click="addNote">New note</button>
    </div>
</template>

<script>
export default{
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
.new-note{
    text-align: center;
}
</style> 