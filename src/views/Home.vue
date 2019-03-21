<template>
  <div v-loading=isLoading>
    <el-collapse-transition>
      <InfoPane id="info-pane" :item=selectedKeyword v-show="paneOpen" :closeFn=callbackClose />
    </el-collapse-transition>
    <el-row :gutter="20">
      <el-col :key=data.id v-for="data of result.data" :span="6">
        <div :id=data.id v-on:click=openKeyword($event) class="grid-content keyword-div">
          <el-card :shadow=isSelected(data.id)>
            <div >
              #{{ data.value }}
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style>
.keyword-div{
  margin-bottom: 30px;
}
.keyword-div:hover{
  cursor: pointer;
}
</style>

<script>

import InfoPane from '@/components/InfoPane.vue';
import axios from 'axios';

export default {
  name: 'home',

  data() {
    return {
      result: null,
      errors: [],
      isLoading: false,
      selectedKeyword: null,
      selectedKeywordValue: null,
      paneOpen: false,
    };
  },

  components: {
    InfoPane,
  },

  methods: {
    openKeyword(event) {
      if (event) {
        this.selectedKeyword = event.currentTarget.id;
        this.openWord();
      }
    },
    openWord() {
      this.paneOpen = true;
    },
    closeWord() {
      this.paneOpen = false;
    },
    callbackClose(event) {
      if (event) {
        this.paneOpen = this.paneOpen !== true;
      }
    },
    isSelected(id) {
      if (id === this.selectedKeyword) {
        return 'always';
      }
      return 'hover';
    },
  },

  created() {
    this.isLoading = true;
    return axios.get('http://localhost:8080/api/words').then((res) => {
      this.result = res.data;
      this.isLoading = false;
    });
  },
};
</script>
