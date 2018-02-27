<template>
  <div class="list">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>单词类型-{{type}}</span>
      </div>
      <div class="text item" @click="play">
        {{word}}
      </div>
      <div class="bottom clearfix">
        <div class="prev btn" @click="prev">
          <i class="el-icon-caret-left"></i>
        </div>
        <div class="next btn" @click="next">
          <i class="el-icon-caret-right"></i>
        </div>
      </div>
    </el-card>
    <audio
      :src="src"
      @play="play"
      ref="audio">
    </audio>
  </div>
</template>

<script>
import { getWords, getImage, getWord } from 'api/api'
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      src: ''
    }
  },
  computed: {
    word () {
      return this.currentWordsList.length > 0 ? this.currentWordsList[this.currentIndex].word : ''
    },
    type () {
      return this.currentWordsList.length > 0 ? this.currentWordsList[this.currentIndex].type.toUpperCase() : ''
    },
    ...mapGetters([
      'currentIndex', 'currentWordsList', 'sequenceWordsList', 'currentWord'
    ])
  },
  created () {
    this.getAudioSrc()
    this.words()
  },
  methods: {
    ...mapMutations({
      'setCurrentIndex': 'SET_CURRENT_INDEX',
      'setCurrentWordsList': 'SET_CURRENT_WORDS__LIST',
      'setSequenceWordsList': 'SET_SEQUENCE_WORDS_LIST'
    }),
    words () {
      getWords().then((res) => {
        const data = res.data
        this.setCurrentWordsList(data)
        this.setSequenceWordsList(data)
      })
    },
    getAudioSrc () {
      this.src = `http://fanyi.baidu.com/gettts?lan=en&text=${this.word}&spd=3&source=web`
    },
    selectWord () {
      getWord(this.word).then((res) => {
        console.log(res)
      })
    },
    selectImage () {
      getImage(`${this.word} ${this.currentWordsList[this.currentIndex].type}`).then((res) => {
        console.log(res)
      })
    },
    play () {
      this.$refs.audio.play()
    },
    next () {
      let currentIndex = this.currentIndex
      if (++currentIndex >= this.currentWordsList.length) {
        currentIndex = 0
      }
      this.setCurrentIndex(currentIndex)
      this.getAudioSrc()
    },
    prev () {
      let currentIndex = this.currentIndex
      if (--currentIndex < 0) {
        currentIndex = this.currentWordsList.length - 1
      }
      this.setCurrentIndex(currentIndex)
      this.getAudioSrc()
    }
  },
  watch: {
    src () {
      this.getAudioSrc()
    },
    word (newVal) {
      console.log('word')
      this.selectWord()
    }
  }
}
</script>

<style scoped lang="scss">
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .list {
    .text {
      margin: 0 0 20px;
    }
    .bottom  {
      margin: 0 -20px;
      border-top: 1px solid #ebeef5;
      .btn {
        text-align: center;
        font-size: 3em;
        padding: 10px 0;
      }
      .prev {
        width: calc(50% - 1px);
        float: left;
      }
      .next {
        border-left: 1px solid #ebeef5;
        width: 50%;
        float: right;
      }
    }
  }
</style>
