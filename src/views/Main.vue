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
      <div>{{ xml }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import axios from "axios"

interface Detail {
  ID: string;
  title: string;
  time: string;
  name: string;
  headline: string;
}

export default Vue.extend({
  name: "Main",
  data: () => ({
    no: 0,
    urls: [""],
    xmls: [""],
    xml: ""
  }),
  async mounted() {
    const json = await (async () =>
      (await axios.get<Detail[]>("https://api.vjmx.me/lists.json")).data)()
    json.forEach(x => {
      if (x.title === "大雨危険度通知") return
      this.urls.push(`https://xml.jmaxml.me/?ID=${x.ID}`)
      this.xmls.push(`${x.title === x.name ? x.title : x.name} (${x.time}発表)<br>${x.headline}`)
    })
    if (this.xmls.length === 0) this.xmls.push("データなし")
    this.urls = this.urls.filter(x => x)
    this.xmls = this.xmls.filter(x => x)
  },
  methods: {
    async ViewDetail(k: number) {
      const xml = await axios.get<string>(this.urls[k])
      this.xml = xml.data
    }
  }
})
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  width: 100vw;
  height: calc(100vh - 64px);
  z-index: 1;

  &_list {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    overflow: auto;
  }
}
</style>
