var vue = new Vue({
    el:'#resume',
    data() {
        return {
            text:"resume",
            runtime:0,//0：移动端  1：PC端            
        }
    },
    beforeCreate() {
    },
    created() {
        
        // console.log(11)
        var pc = new PC()
        this.runtime = pc.judgeRuntime();
    },
    mounted() {
        // var pc = new PC()
        // pc.judgeRuntime();
    },
    methods: {

    },
})