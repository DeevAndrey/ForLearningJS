<template>
    <div class="notes">
        <div class="note" :class="{full:!grid}" v-for="(note,index) in notes" :key="index">
            <div class="note-header">
                <div class="note-title">
                    <input class="input-edit" 
                    v-show="note.edit" 
                    v-model="value" 
                    @change="sendEdit(index)"
                    ref="title-input">
                    <p v-show="!note.edit" @dblclick="editNoteStatus(index)">{{ note.title }}</p>
                        <svg >
                            <circle :style="{fill: note.priority}" cx="10" cy="10" r="5" stroke="gray" stroke-width="1"/>
                        </svg>
                </div>
                
                <p style="cursor: pointer;" @click=removeNote(index)>x</p>
            </div>
            <div class="note-body">
                <p>{{ note.description }}</p>
                <span>{{ note.date }}</span>
            </div>
        </div>
    </div>

</template>

<script>
export default{
    data(){
        return{
            value: ''
        }
    },
    props:{
        notes:{
            type: Array,
            required: true
        },
        grid:{
            type:Boolean,
            required: true
        }
    },
    methods:{
        removeNote(index){
            console.log(`Node id ${index} remove` )
            this.$emit('remove',index)
        },
        editNoteStatus(index){
            this.value=this.notes[index].title
            this.$emit('edit',index,'Title')
        },
        sendEdit(index){
            console.log('Exit')
            this.$emit('sendEdit',index,this.value)
        }
    },
    watch:{
        EditTitle(val){
            this.$emit('remove',index)
            console.log(val)
        }
    }
}
</script>

<style lang="scss">
.notes{
    display:  flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap:wrap;
    padding: 40px 0;
}
.note.highPriority
{
    fill: red;
}
.note-title{
    display:  flex;
    align-items: flex-start;
    height: min-content;
}
.note{
    width: 48%;
    padding: 18px 20px;
    margin-bottom: 20px;
    background-color: white;
    &.full{
        width: 100%;
    }
}
.note-header{
    h1{
        font-size: 32px;
    }
    display:  flex;
    align-items: center;
    justify-content: space-between;
    p{
        font-size: 22px;
        color: blue
    }
    svg{
        margin-right: 12px;
        color: gray;
        &:last-child{
            margin-right: 0;
        }
        &.active{
            color:rgb(119, 189, 13)
        }
        height: 40px;
    }
}
.note-body{

    p{
        margin: 20px 0;
    }
    span{
        font-size: 14px;
        color: gray
    }
}
.input-edit{
border-radius: 0px;
padding: 0px;
height: min-content;
color: blue;
margin-bottom: 0px;
font-size: 22px;
}
.input-edit:active{
    border-color: greenyellow;
}
</style>