// Создаем распознаватель
var recognizer = new webkitSpeechRecognition()

// Ставим опцию, чтобы распознавание началось ещё до того, как пользователь закончит говорить
recognizer.interimResults = true

// Какой язык будем распознавать?
recognizer.lang = 'ru-Ru'

// Используем колбек для обработки результатов
recognizer.onresult = function(event) {
  var result = event.results[event.resultIndex]
  /*if (result.isFinal) {
    alert('Вы сказали: ' + result[0].transcript);
  } else {
    console.log('Промежуточный результат: ', result[0].transcript);
  }*/
  if (result[0].transcript == 'Луна Перейди на мой сайт') {
    window.location = 'mainpage/authorized.html'
  } else if (result[0].transcript == 'Луна Перейди на мой VK') {
    window.location = 'https://vk.com/moon_24kkl'
  } else if (result[0].transcript == 'Луна Перейди на мой Instagram') {
    window.location = 'https://instagram.com/elena.kavaeva?igshid=1rdasbs5sk9qu'
  } else if (result[0].transcript == 'Луна Открой калькулятор') {
    window.location = 'mainpage/calculator.html'
  } else if (result[0].transcript == 'луна я устал') {
    window.location = 'mainpage/helpCard.html'
  } else if (result[0].transcript == 'Луна Перейди на VK автора') {
    window.location = 'https://vk.com/id270930310'
  } else if (result[0].transcript == 'Луна Перейди на Instagram автора') {
    window.location = 'https://instagram.com/undg3p?igshid=k41rzt4phfho'
  } else if (result[0].transcript == 'Луна Перейди на WhatsApp автора') {
    window.location = 'https://wa.me/79054475215'
  } else if (result[0].transcript == 'Луна Перейди на почту автора') {
    window.location = 'mailto:baskakov.11111@mail.ru'
  } else if (result[0].transcript == 'Луна Перейди на finviz.com') {
    window.location = 'https://finviz.com/'
  } else if (result[0].transcript == 'Луна Перейди на Сбербанк онлайн') {
    window.location = 'https://online.sberbank.ru/CSAFront/index.do#/'
  } else if (result[0].transcript == 'Луна Перейди на gosuslugi.ru') {
    window.location = 'https://www.gosuslugi.ru/'
  } else if (result[0].transcript == 'Луна Перейди на ecampus ncfu') {
    window.location = 'https://ecampus.ncfu.ru/'
  } else if (result[0].transcript == 'Луна Покажи котировки валют') {
    window.location = 'https://www.profinance.ru/quote_show.php'
  } else if (result[0].transcript == 'Луна Перейди на YouTube') {
    window.location = 'https://www.youtube.com/'
  } else if (result[0].transcript == 'Луна Покажи топ 250 IMDb') {
    window.location = 'https://www.imdb.com/chart/top'
  } else if (result[0].transcript == 'Луна хочу смотреть пингвинёнка Лоло') {
    window.location = 'https://www.youtube.com/watch?v=6YO4Pwyq7hA'
  } else if (
    result[0].transcript == 'Луна Покажи мою самую любимую фотографию'
  ) {
    window.location = 'mainpage/photo.html'
  }
}

function speech() {
  // Начинаем слушать микрофон и распознавать голос
  recognizer.start()
}

var synth = window.speechSynthesis
var utterance = new SpeechSynthesisUtterance(
  'Привет, я Лууна. Меня создал иксашэйтвэлв, для того, чтобы я помогала тебе. Ещё, кстати, я люблю пингвинёнка лоло'
)

function talk() {
  function speech() {
    // Начинаем слушать микрофон и распознавать голос
    recognizer.start()
  }
  recognizer.onresult = function(event) {
    var result = event.results[event.resultIndex]
    if (result.isFinal && result[0].transcript == 'Луна Привет') {
      var synth = window.speechSynthesis
      var utterance = new SpeechSynthesisUtterance('Привет, иксашэйтвэлв')
      synth.speak(utterance)
    } else {
      console.log('Промежуточный результат: ', result[0].transcript)
    }
    if (result.isFinal && result[0].transcript == 'Как дела луна') {
      var synth = window.speechSynthesis
      var utterance = new SpeechSynthesisUtterance(
        'Всё супер, спасибо, как твои дела, юшка'
      )
      synth.speak(utterance)
    } else {
      console.log('Промежуточный результат: ', result[0].transcript)
    }
    if (result.isFinal && result[0].transcript == 'Чем занимаешься луна') {
      var synth = window.speechSynthesis
      var utterance = new SpeechSynthesisUtterance(
        'Преисполняюсь в собственном сознании и иду любоваться прекрасным блять осенним закатом'
      )
      synth.speak(utterance)
    } else {
      console.log('Промежуточный результат: ', result[0].transcript)
    }
    /*synth.speak ('Привет, иксашэйтвэлв');*/
    /*synth.speak (utterance);*/
  }
}

function stop() {
  synth.pause()
}
