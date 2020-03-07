<template>
    <div class="pagination">
        <span @click="changeBtn(1)">
            «
        </span>
        <span v-if="this.currentPage >= 4">
            ...
        </span>
        <span v-for="(page,index) in pagebtns"
              :key="index"
              :class="[{currentPage:page === currentPage}]"
              @click="changeBtn(page)"
        >
            {{page}}
        </span>
        <span>
            ...
        </span>
        <span>
            »
        </span>
    </div>
</template>

<script>
    export default {
        name: "",
        data(){
            return {
                pagebtns: [1,2,3,4,5],
                currentPage: 1
            }
        },
        methods: {
            changeBtn(page){
                this.currentPage = page;
                if(page >= this.pagebtns[3])
                {
                    this.pagebtns.shift()
                    this.pagebtns.splice(4,0,this.pagebtns[3]+1)
                }else if (this.pagebtns[0] !== 1)
                {
                    this.pagebtns.unshift(this.pagebtns[0] - 1)
                    this.pagebtns.pop()
                }
                this.$emit('changePage',page)
            }
        }
    }
</script>

<style scoped lang="less">
    .pagination {
        margin-top: 14px;
        margin-left: 10px;
        float: left;
        .currentPage {
            color: #80bd01;
        }
        span {
            font-size:14px;
            cursor: pointer;
            color: #778087;
            padding: 4px 12px;
            line-height: 20px;
            background-color: #fff;
            border: 1px solid #ddd;
            border-left: none;
            &:first-child {
                border-left: 1px solid #ddd;
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
            }
            &:last-child {
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
            }
            &:hover {
                background-color: #f5f5f5;
            }
        }

    }
</style>