<template>

    <div class="articleListWrap">
        <div class="list_type">
            <div @click="changeTab('all')" :class="{active: tab==='all'}" class="type">
                <router-link to="/">全部</router-link>
            </div>
            <div @click="changeTab('good')" :class="{active: tab==='good'}" class="type">
                <router-link to="/">精华</router-link>
            </div>
            <div @click="changeTab('share')" :class="{active: tab==='share'}" class="type">
                <router-link to="/">分享</router-link>
            </div>
            <div @click="changeTab('ask')" :class="{active: tab==='ask'}" class="type">
                <router-link to="/">问答</router-link>
            </div>
            <div @click="changeTab('job')" :class="{active: tab==='job'}" class="type">
                <router-link to="/">招聘</router-link>
            </div>
        </div>

        <div class="articleList">
            <div class="cell" v-for="list in articleList" :key="list.id">
                <a>
                    <img :src="list.author.avatar_url" alt="user_image"/>
                </a>
                <span class="list_info_number">
                <span class="reply_count">{{list.reply_count}}</span>
                    <span>/</span>
                    <span class="like_count">{{list.visit_count}}</span>
                </span>
                <span class="list_tag" :class="{special: list.top || list.good}">
                  {{ list | tabFormatter}}
                </span>
                <router-link class="list_title" :to="{name:'article',params:{id:list.id,name:list.author.loginname}}">
                    {{list.title}}
                </router-link>

                <a href="#" class="cell_time">{{changeTime(list.create_at)}}</a>
            </div>
            <div class="loadImage" v-if="loading">
                <img src="../assets/ajax_loader.gif" alt="loader">
            </div>
            <pagination @changePage="changePage"></pagination>
        </div>
    </div>


</template>
<script>
    import Pagination from './Pagination'

    export default {
        name: "ArticleList",
        props: {},
        components: {
            'pagination': Pagination
        },
        data() {
            return {
                isLoading: true,
                articleList: [],
                tab: 'all',
                loading: true,
            };
        },
        methods: {
            changePage(page){
                this.loading = true
                this.articleList = []
                this.getData(page,this.tab)
            },
            changeTab(type, page = 1) {
                this.tab = type
                this.articleList = []
                this.loading = true
                this.getData(page,type)
            },
            getData(page,type = '') {
                this.$http
                    .get(`https://cnodejs.org/api/v1/topics?page=${page}&limit=20&tab=${type}`)
                    .then(result => result.data.data)
                    .then(articleList => {
                        this.articleList = articleList;
                        this.loading = false
                    });
            }
        },
        created() {
            this.getData()
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .loadImage img {
        margin-top: 80px;
        margin-bottom: 80px;
        width: 60px;
        height: 60px
    }

    .articleListWrap {
        width: 80%;
        margin: auto;
        padding-bottom: 16px;

        .list_type {
            display: flex;
            justify-content: flex-start;
            padding: 10px;
            background-color: #f6f6f6;
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;

            .type > a {
                margin-left: 10px;
                margin-right: 10px;
                font-size: 14px;
                padding: 3px 4px;
                color: #80bd01;
            }

            .active > a {
                background-color: #80bd01;
                color: #fff;
                border-radius: 3px;
            }
        }

        .articleList {
            background-color: #fff;
            padding-bottom: 50px;

            .cell {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                padding: 10px 0 10px 10px;

                &:hover {
                    background-color: #f6f6f6;
                }

                .cell_time {
                    margin-left: auto;
                    margin-right: 10px;
                    padding-left: 30px;
                    color: #778087;
                    font-size: 13px;
                    white-space: nowrap;
                }

                .list_info_number {
                    width: 70px;
                    padding: 0 5px;

                    .reply_count {
                        color: #9e78c0;
                        font-size: 14px;
                    }

                    .like_count {
                        color: #b4b4b4;
                        font-size: 10px;
                    }
                }

                .list_tag {
                    background-color: #e5e5e5;
                    font-size: 12px;
                    color: #999;
                    padding: 2px 4px;
                    border-radius: 3px;
                    white-space: nowrap;
                }

                .special {
                    background-color: #80bd01;
                    color: white;
                }

                .list_title {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    margin-left: 10px;
                    width: 90%;
                    text-align: left;

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }

            .cell > a > img {
                width: 30px;
                height: 30px;
                border-radius: 3px;
            }
        }
    }
</style>
