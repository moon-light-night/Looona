<template>
  <div>
    <ul>
      <li><b-button @click="speech()" variant="dark">Ask Looona</b-button></li>
      <li>
        <b-button @click="talk()" variant="dark">Utter by Looona</b-button>
      </li>
      <li><b-button @click="stop()" variant="danger">Stop Looona</b-button></li>
    </ul>
  </div>
</template>

<script>
import '../speech.js'
export default {
  data() {
    return {
      recognizer: null,
      result: null,
      synth: null,
      utterance: null,
    }
  },
  created() {
    this.recognizer = new webkitSpeechRecognition()
    this.recognizer.interimResults = true
    this.recognizer.lang = 'ru-Ru'
    this.recognizer.onresult = function(event) {
      this.result = event.results[event.resultIndex]
      if (this.result[0].transcript == 'Луна Перейди на finviz.com') {
        window.location = 'https://finviz.com/'
      } else {
        console.log(this.result[0].transcript)
      }
    }
  },
  methods: {
    speech() {
      // Начинаем слушать микрофон и распознавать голос
      this.recognizer.start()
    },
    talk() {
      function speech() {
        // Начинаем слушать микрофон и распознавать голос
        recognizer.start()
      }
      this.recognizer.onresult = function(event) {
        this.result = event.results[event.resultIndex]
        if (this.result.isFinal && this.result[0].transcript == 'Луна Привет') {
          this.synth = window.speechSynthesis
          this.utterance = new SpeechSynthesisUtterance('Привет, иксашэйтвэлв')
          this.synth.speak(this.utterance)
        } else {
          console.log('Промежуточный результат: ', this.result[0].transcript)
        }
        if (
          this.result.isFinal &&
          this.result[0].transcript == 'Как дела луна'
        ) {
          this.synth = window.speechSynthesis
          this.utterance = new SpeechSynthesisUtterance(
            'Всё супер, спасибо, как твои дела, юшка'
          )
          this.synth.speak(this.utterance)
        } else {
          console.log('Промежуточный результат: ', this.result[0].transcript)
        }
        if (
          this.result.isFinal &&
          this.result[0].transcript == 'Чем занимаешься луна'
        ) {
          this.synth = window.speechSynthesis
          this.utterance = new SpeechSynthesisUtterance(
            'Преисполняюсь в собственном сознании и иду любоваться прекрасным блять осенним закатом'
          )
          this.synth.speak(this.utterance)
        } else {
          console.log('Промежуточный результат: ', this.result[0].transcript)
        }
      }
    },
    stop() {
      this.synth.pause()
    },
  },
}
</script>

<style lang="scss" scoped>
div {
  background: url(../assets/zVoFEF.jpg) 50% 0 no-repeat;
  -webkit-background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  ul {
    padding-left: 0px;
    position: fixed;
    bottom: 100px;
    li {
      list-style-type: none;
    }
  }
}
</style>
