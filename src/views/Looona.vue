<template>
  <div class="looona">
    <Accordion></Accordion>
    <ul class="looona__list">
      <li class="looona__list-item">
        <b-button @click="speech()" variant="primary">Ask Looona</b-button>
      </li>
      <li class="looona__list-item">
        <b-button @click="talk()" variant="success">Utter by Looona</b-button>
      </li>
      <li class="looona__list-item">
        <b-button @click="stop()" variant="danger">Stop Looona</b-button>
      </li>
      <li class="looona__list-item">
        <b-button @click="$router.push({ name: 'MainPage' })" variant="dark"
          >To main</b-button
        >
      </li>
    </ul>
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
    this.recognizer = new webkitSpeechRecognition()
    this.recognizer.interimResults = true
    this.recognizer.lang = 'ru-Ru'
    this.recognizer.onresult = function(event) {
      this.result = event.results[event.resultIndex]
      this.arr = this.result[0].transcript.split(' ')
      this.lastIndex = this.arr[this.arr.length - 1]
      window.location = `https://${this.lastIndex}/`
      this.arr = null
      this.lastIndex = null
      this.result = null
    }
  },
  methods: {
    speech() {
      this.recognizer.start()
    },
    talk() {
      recognizer.start()
      this.recognizer.onresult = function(event) {
        this.result = event.results[event.resultIndex]
        if (this.result.isFinal && this.result[0].transcript == 'Луна Привет') {
          this.synth = window.speechSynthesis
          this.utterance = new SpeechSynthesisUtterance('Привет, джиэликсмайнд')
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
            'Всё супер, спасибо, как твои дела'
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
.looona {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('~@/assets/bg.jpg');
  &__list {
    padding-left: 5px;
    position: fixed;
    bottom: 0;
    display: block;
  }
  &__list-item {
    list-style-type: none;
    margin-bottom: 20px;
  }
  #content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media (max-width: 530px) {
      width: 300px;
      margin: 0 auto;
    }
  }
}
</style>
