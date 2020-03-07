<template>
<div class="pageContainer">
    <div class="articleWrap">
        <div class="articleHeader">
            <h3>
                <span class="articleType">{{article | tabFormatter}}</span>　{{article.title}}
            </h3>
            <div class="articleInformation">
                <span>发布于{{changeTime(article.create_at)}}</span>
                <router-link :to="{name:'userInfo',params:{name:article.author && article.author.loginname}}">
                    <span>作者 {{ article.author && article.author.loginname}}</span>
                </router-link>

                <span>{{article.visit_count}}　次浏览</span>
                <span>来自{{article | tabFormatter}}</span>

            </div>
        </div>
        <div class="articleContentWrap">
            <div v-html="article.content"></div>
        </div>



    </div>
    <div class="comment">
        <div class="commentNumber">
            {{article.replies && article.replies.length}}回复
        </div>
        <div class="commentInfo">
            <ul>
                <li v-for="(list,index) in article.replies" :key="list.id">
                    <div class="replyUserInfo">
                        <router-link :to="{name:'userInfo',params:{name: list.author && list.author.loginname}}">
                            <img :src="list.author.avatar_url" alt="reply_image">
                            <span class="reply_name">{{list.author.loginname}}　</span>
                            <span>　{{index+1}}楼 • {{changeTime(list.create_at)}}</span>
                        </router-link>

                    </div>
                    <p class="replyContentInfo" v-html="list.content">

                    </p>
                </li>
            </ul>
        </div>
    </div>

</div>


</template>

<script>
export default {
  name: "topicDetail",
  props: {},
  data() {
    return {
      article: '',

    };
  },
  methods: {
    getData(){
      this.$http.get(
              "https://cnodejs.org/api/v1/topic/" + this.$route.params.id
      ).then(article => this.article = article.data.data)
              .then(article => {
                this.article = article
              })
              .catch(error => console.log(error))
    }
  },
  beforeMount(){
   this.getData()
  },
  created() {
    console.log(2)
  },
    watch:{
        '$route'(to,from){
            this.getData()
        }
    }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.pageContainer {
    width: 79%;
}

.comment {
    margin-top: 14px;
    text-align: left;
    .commentNumber{
        background-color:#f6f6f6;
        padding: 10px;
        border-top-right-radius: 3px;
        border-top-left-radius: 3px;
        font-size: 14px;
        color: #444;
    }
    .commentInfo{
        li {
            background-color: #fff;
            list-style: none;
            border-top: 1px solid #f0f0f0;
            padding: 10px;
            .replyUserInfo {

                a {
                    display: flex;
                    align-items: center;
                    img {
                        width: 30px;
                        height: 30px;
                        border-radius: 3px;
                    }
                    .reply_name {
                        font-size: 12px;
                        color: #666;
                        font-weight: 700;
                        margin-left: 5px;
                        margin-right: 3px;
                    }
                    >span:last-child {
                        font-size: 11px;
                        color: #08c;
                    }
                }


            }
            p {
                margin: 0;
                padding: 0;
            }
            > p {
                padding-top: .4em;
                padding-bottom: .6em;
                font-size: 15px;
                line-height: 25px;
            }
        }


    }
}
.articleWrap {
  background-color: #fff;
  width: 100%;
  border-radius: 3px;
  text-align: left;
  margin: 0 auto;


  .articleHeader {
    padding: 10px 10px 25px 12px;
    font-size: 20px;
    border-bottom: 1px solid #e5e5e5;
    h3 {
      margin: 14px 0;
    }
    .articleInformation {
      color: #838383;
      font-size: 13px;
        a {
            color: #838383;
        }
        a::before{
            content:" • ";
        }
    }
    .articleInformation > span::before {
      content: " • ";
    }
  }
  .articleContentWrap {
    padding: 15px 0 30px 21px;
  }

}
.articleType {
  padding: 2px 4px;
  color: #fff;
  background-color: #80bd01;
  font-size: 12px;
  border-radius: 3px;
}

.markdown-text {
  a {
    color: #0645ad;
    text-decoration: none;
  }

  a:visited {
    color: #0b0080;
  }

  a:hover {
    color: #06e;
  }

  a:active {
    color: #faa700;
  }

  a:focus {
    outline: thin dotted;
  }

  a:hover,
  a:active {
    outline: 0;
  }

  ::-moz-selection {
    background: rgba(255, 255, 0, 0.3);
    color: #000;
  }

  ::selection {
    background: rgba(255, 255, 0, 0.3);
    color: #000;
  }

  a::-moz-selection {
    background: rgba(255, 255, 0, 0.3);
    color: #0645ad;
  }

  a::selection {
    background: rgba(255, 255, 0, 0.3);
    color: #0645ad;
  }

  p {
    margin: 1em 0;
  }

  img {
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
    color: #111;
    line-height: 1em;
  }

  h4,
  h5,
  h6 {
    font-weight: bold;
  }

  h1 {
    font-size: 2.5em;
  }

  h2 {
    font-size: 2em;
  }

  h3 {
    font-size: 1.5em;
  }

  h4 {
    font-size: 1.2em;
  }

  h5 {
    font-size: 1em;
  }

  h6 {
    font-size: 0.9em;
  }

  blockquote {
    color: #666666;
    margin: 0;
    padding-left: 3em;
    border-left: 0.5em #eee solid;
  }

  hr {
    display: block;
    border: 0;
    border-top: 1px solid #aaa;
    border-bottom: 1px solid #eee;
    margin: 1em 0;
    padding: 0;
  }

  pre,
  code,
  kbd,
  samp {
    color: #000;
    font-family: monospace, monospace;
    _font-family: 'courier new', monospace;
    font-size: 0.98em;
  }

  pre {
    white-space: pre;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  b,
  strong {
    font-weight: bold;
  }

  dfn {
    font-style: italic;
  }

  ins {
    background: #ff9;
    color: #000;
    text-decoration: none;
  }

  mark {
    background: #ff0;
    color: #000;
    font-style: italic;
    font-weight: bold;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sup {
    top: -0.5em;
  }

  sub {
    bottom: -0.25em;
  }

  ul,
  ol {
    margin: 1em 0;
    padding: 0 0 0 2em;
  }

  li p:last-child {
    margin: 0;
  }

  dd {
    margin: 0 0 0 2em;
  }

  img {
    border: 0;
    -ms-interpolation-mode: bicubic;
    vertical-align: middle;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td {
    vertical-align: top;
  }

  @media only screen and (min-width: 480px) {
    body {
      font-size: 14px;
    }
  }

  @media only screen and (min-width: 768px) {
    body {
      font-size: 16px;
    }
  }

  @media print {
    * {
      background: transparent !important;
      color: black !important;
      filter: none !important;
      -ms-filter: none !important;
    }

    body {
      font-size: 12pt;
      max-width: 100%;
    }

    a,
    a:visited {
      text-decoration: underline;
    }

    hr {
      height: 1px;
      border: 0;
      border-bottom: 1px solid black;
    }

    a[href]:after {
      content: " (" attr(href) ")";
    }

    abbr[title]:after {
      content: " (" attr(title) ")";
    }

    .ir a:after,
    a[href^="javascript:"]:after,
    a[href^="#"]:after {
      content: "";
    }

    pre,
    blockquote {
      border: 1px solid #999;
      padding-right: 1em;
      page-break-inside: avoid;
    }

    tr,
    img {
      page-break-inside: avoid;
    }

    img {
      max-width: 100% !important;
    }

    @page :left {
      margin: 15mm 20mm 15mm 10mm;
    }

    @page :right {
      margin: 15mm 10mm 15mm 20mm;
    }

    p,
    h2,
    h3 {
      orphans: 3;
      widows: 3;
    }

    h2,
    h3 {
      page-break-after: avoid;
    }
  }
}



</style>
