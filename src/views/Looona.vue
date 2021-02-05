<template>
  <div id="main">
    <Accordion></Accordion>
    <ul>
      <li>
        <b-button @click="speech()" variant="primary">Ask Looona</b-button>
      </li>
      <li>
        <b-button @click="talk()" variant="success">Utter by Looona</b-button>
      </li>
      <li><b-button @click="stop()" variant="danger">Stop Looona</b-button></li>
    </ul>
    <b-button
      @click="$router.push({ name: 'MainPage' })"
      variant="dark"
      id="btn"
      >To main</b-button
    >
  </div>
</template>

<script>
import Accordion from '@/components/Accordion.vue'
export default {
  data() {
    return {
      recognizer: null,
      result: null,
      synth: null,
      utterance: null,
      arr: null,
      lastIndex: null,
    }
  },
  components: {
    Accordion,
  },
  created() {
    // this.recognizer = new webkitSpeechRecognition()
    // this.recognizer.interimResults = true
    // this.recognizer.lang = 'ru-Ru'
    // this.recognizer.onresult = function(event) {
    //   this.result = event.results[event.resultIndex]
    //   this.arr = this.result[0].transcript.split(' ')
    //   this.lastIndex = this.arr[this.arr.length - 1]
    //   window.location = `https://${this.lastIndex}/`
    //   this.arr = null
    //   this.lastIndex = null
    //   this.result = null
    // }
  },
  methods: {
    // speech() {
    //   this.recognizer.start()
    // },
    // talk() {
    //   recognizer.start()
    //   this.recognizer.onresult = function(event) {
    //     this.result = event.results[event.resultIndex]
    //     if (this.result.isFinal && this.result[0].transcript == 'Луна Привет') {
    //       this.synth = window.speechSynthesis
    //       this.utterance = new SpeechSynthesisUtterance('Привет, иксашэйтвэлв')
    //       this.synth.speak(this.utterance)
    //     } else {
    //       console.log('Промежуточный результат: ', this.result[0].transcript)
    //     }
    //     if (
    //       this.result.isFinal &&
    //       this.result[0].transcript == 'Как дела луна'
    //     ) {
    //       this.synth = window.speechSynthesis
    //       this.utterance = new SpeechSynthesisUtterance(
    //         'Всё супер, спасибо, как твои дела, юшка'
    //       )
    //       this.synth.speak(this.utterance)
    //     } else {
    //       console.log('Промежуточный результат: ', this.result[0].transcript)
    //     }
    //     if (
    //       this.result.isFinal &&
    //       this.result[0].transcript == 'Чем занимаешься луна'
    //     ) {
    //       this.synth = window.speechSynthesis
    //       this.utterance = new SpeechSynthesisUtterance(
    //         'Преисполняюсь в собственном сознании и иду любоваться прекрасным блять осенним закатом'
    //       )
    //       this.synth.speak(this.utterance)
    //     } else {
    //       console.log('Промежуточный результат: ', this.result[0].transcript)
    //     }
    //   }
    // },
    // stop() {
    //   this.synth.pause()
    // },
  },
}
</script>

<style lang="scss" scoped>
#main {
  background: url(../assets/zVoFEF.jpg) 50% 0 no-repeat;
  -webkit-background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  #btn {
    position: fixed;
    bottom: 10px;
    left: 10px;
  }
  ul {
    padding-left: 5px;
    position: fixed;
    bottom: 100px;
    display: block;
    li {
      list-style-type: none;
      margin-bottom: 20px;
    }
  }
}
</style>
