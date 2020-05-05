<template>
  <div class="main">
    <div class="main_list">
      <v-card class="mx-auto" width="400" max-width="400" min-width="400" tile>
        <v-list dense>
          <v-list-item-group v-model="no" color="primary" :mandatory="true">
            <v-list-item v-for="(v, k) in xmls" :key="k" @click="ViewDetail(k)">
              <v-list-item-content>
                <v-list-item-title v-html="v" />
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </div>
    <div class="main_cnt">
      <Loading />
      <div :class="isInfo ? '' : 'main_cnt-box-hidden'" class="main_cnt-box">
        <h1 class="main_cnt-title">気象庁防災情報 XML ビューア</h1>
        <p class="main_cnt-description">
          本サービスはベータ版です。ベータ版のためデータの欠損や処理の遅延、配信の停止等が発生する場合があります。<br>
          本サービスを利用することによって生ずるいかなる損害に対しても一切責任を負いません。<br>
          本サービスに対して短時間・高頻度のアクセスによる電文の取得等はお控えください。
        </p>
        <p class="main_cnt-cl">
          Copyright &copy; 2017-2020 iedred7584 All Rights Reserved. /
          <a
            href="https://twitter.com/intent/user?user_id=769399284772896768"
            target="blank"
          >@iedred7584</a>
          /
          <a href="https://www.iedred7584.com" target="blank">iedred7584.com</a>
        </p>
      </div>
      <pre :class="isShow ? 'main_cnt-pre-show' : ''" class="main_cnt-pre">
        <code class="main_cnt-code xml" v-text="xml" />
      </pre>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import axios from "axios"
import window from "@/plugins/window"
import Loading from "@/components/Loading.vue"

async function wait(ms: number) {
  return new Promise(x => setTimeout(x, ms))
}

interface Detail {
  ID: string;
  title: string;
  time: string;
  name: string;
  headline: string;
}

function FormatXml(xml: string) {
  let formatted = ""
  xml = xml.replace(/(>)\s(<)/g, "><").replace(/(>)(<)(\/*)/g, "$1\r\n$2$3")
  let pad = 0
  window.jQuery.each(xml.split("\r\n"), function(index: number, node: string) {
    let indent = 0
    if (node.match(/.+<\/\w[^>]*>$/)) {
      indent = 0
    } else if (node.match(/^<\/\w/)) {
      if (pad != 0) {
        pad -= 1
      }
    } else if (node.match(/^<\w[^>]*[^\\/]>.*$/)) {
      indent = 1
    } else {
      indent = 0
    }

    let padding = ""
    for (let i = 0; i < pad; i++) {
      padding += "  "
    }

    formatted += padding + node + "\r\n"
    pad += indent
  })

  return formatted
}

export default Vue.extend({
  name: "Main",
  components: {
    Loading
  },
  props: {
    title: {
      type: String,
      default: "すべて"
    }
  },
  data: () => ({
    no: 0,
    urls: [""],
    xmls: [""],
    xml: "",
    isShow: false,
    isInfo: true
  }),
  mounted() {
    this.LoadList("すべて")
  },
  updated: function() {
    this.$emit("")
  },
  methods: {
    async LoadList(t: string) {
      const json = await (async () =>
        (
          await axios.get<Detail[]>(
            `https://api.vjmx.me/lists.json?${t !== "すべて" ? `title=${t}` : ""}`
          )
        ).data)()
      const urls = [""]
      const xmls = [""]
      if (json[0].ID !== "")
        json.forEach(x => {
          urls.push(`https://xml.jmaxml.me/?ID=${x.ID}`)
          xmls.push(`${x.title === x.name ? x.title : x.name} (${x.time}発表)<br>${x.headline}`)
        })
      else xmls.push("データなし")
      this.urls = urls.filter(x => x)
      this.xmls = xmls.filter(x => x)
      await wait(1000)
      this.$emit("UpdateRefreshState", false)
    },
    async ViewDetail(k: number) {
      this.isShow = false
      this.isInfo = false
      await wait(300)
      if (this.urls.length === 0) return
      const xml = await axios.get<string>(this.urls[k])
      this.xml = FormatXml(xml.data)
      await wait(500)
      window.hljs.highlightBlock(document.querySelector(".xml"))
      this.isShow = true
    }
  }
})
</script>

<style lang="scss">
.main_list .v-sheet {
  padding: 0 !important;
  min-height: 100%;
}

.v-list-item {
  border-bottom: 1px solid #cdcdcd;

  &:first-of-type {
    border-top: 1px solid #cdcdcd;
  }

  &__title {
    line-height: 1.5em !important;
  }
}

.v-application code {
  font-size: 100%;
  font-weight: normal;
  color: #a31515;
  background-color: #ffffff !important;
  word-break: break-all;
}
</style>

<style lang="scss" scoped>
.main {
  position: relative;
  width: 100vw;
  height: calc(100vh - 64px);
  z-index: 1;

  &_list {
    box-sizing: border-box;
    position: absolute;
    width: 400px;
    height: 100%;
    top: 0;
    left: 0;
    overflow: auto;
    overflow-x: hidden;
  }

  &_cnt {
    position: absolute;
    width: calc(100vw - 400px);
    height: 100%;
    top: 0;
    left: 400px;
    overflow: auto;

    &-box {
      display: flex;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      justify-content: center;
      align-items: center;
      flex-flow: column;
      background-color: #ffffff;
      transition: 0.3s all;

      &-hidden {
        opacity: 0;
      }
    }

    &-title {
      font-size: 36px;
      letter-spacing: 0.17em;
    }

    &-description {
      margin-top: 30px;
      line-height: 2;
    }

    &-cl {
      margin-top: 30px;
    }

    &-pre {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0;
      transition: 0.3s all;
      z-index: 10;

      &-show {
        opacity: 1;
      }
    }

    &-code {
      position: absolute;
      width: 100%;
      min-width: 100%;
      height: 100%;
      min-height: 100%;
      top: 0;
      left: 0;
      overflow: auto;
    }
  }
}
</style>
