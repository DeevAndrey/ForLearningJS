<template>
    <div class="notes">
        <div class="note" :class="{full:!grid}" v-for="(note,index) in notes" :key="index">
            <div class="note-header">
                <p>{{ note.title }}</p>
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
            console.log(`Node id ${index} remove`)
            this.$emit('remove',index)
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
</style>