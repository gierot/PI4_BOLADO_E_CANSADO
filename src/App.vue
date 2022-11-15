<template>
  <loginComponent v-if="0 > 1" class="h-full"/>
  <div v-else>
    <div 
      class="text-white bg-neutral-800 text-center py-8 text-2xl font-semibold" 
      name="title_page"
      >
        Os vascainos
    </div>
    <div class="w-full absolute inline-flex h-full">
      <div class="w-96 bg-red-900 font-avenir">
        <div class="flex justify-center items-center">
          <div class="w-full block text-center">
            <button type="submit" @click="choiceSensor(1)" class="text-white font-semibold text-2xl mx-16 my-8">Umidade e Temp.</button>
            <button type="submit" @click="choiceSensor(2)" class="text-white font-semibold text-2xl mx-16 my-8">Leitor-rfid</button>
            <button type="submit" @click="choiceSensor(3)" class="text-white font-semibold text-2xl mx-16 my-8">Infravermelho</button>
            <button type="submit" @click="choiceSensor(4)" class="text-white font-semibold text-2xl mx-16 my-8">Sensor de fumaça</button>
            <button type="submit" @click="choiceSensor(5)" class="text-white font-semibold text-2xl mx-16 my-8">Sensor de tensão</button>
          </div>
        </div>
      </div>
      <div class="bg-black block w-full">
        <div class="w-full flex mt-8 justify-center items-center">
          <div class="rounded-lg h-64 w-9/12 inline-flex">
            <div class="w-full rounded-r-lg text-white text-center flex justify-center items-center">
              <div class="bg-violet-900 w-40 h-40 rounded-full flex justify-center items-center">
                <div class="bg-violet-800 w-32 h-32 rounded-full flex justify-center items-center">
                  <div class="bg-violet-700 rounded-full w-24 h-24 flex justify-center items-center text-xl">
                    10
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full rounded-l-lg text-white text-center flex justify-center items-center">este</div>
          </div>
        </div>

        <div class="w-full flex mt-8 justify-center items-center">
          <div class="inline-flex h-64 w-9/12">
            <div class="w-full mx-2 rounded flex justify-center items-center">
              <div v-if="sensor.image ">
                <img id="style_all_images" :src="sensor.image" class="w-full h-full">
              </div>
            </div>
            <div class="w-full mx-5 rounded text-white flex justify-center items-center text-center font-semibold">
              {{sensor.description}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import loginComponent from './components/loginComponent.vue';

export default {
  components: {
    loginComponent
  },
  data() {
    return {
      header: {
        'Authorization': 'Bearer my-token',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS, DELETE, POST, PUTCH',
        'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
      }, 
      sensor: {
        image: '',
        alt: '',
        description:''
      },
      style_image:'',
    }
  },
  methods: {
    captureValues() {
      let data = {
        username: 'gierot',
        password: '12345678'
      }
      axios.post('http://localhost:5000/user/create', data,{headers: this.header})
      axios.get('http://localhost:5000/user', { headers: this.header } )
      .then(res => {
        console.log(res);
      })
    },
    choiceSensor(param) {
      this.sensor.image = this.choiceImage(param)
      this.sensor.description = this.choiceDescription(param)
    },
    choiceDescription(param) {
      switch(param) {
        case 1:
          return 'A umidade representa a quantidade de água em forma de vapor presente na atmosfera. Em geral, quanto mais úmida está uma determinada localidade, menores são as variações de temperatura, pois a água possui a propriedade de receber e armazenar o calor por ela recebido.'
        case 2:
          return 'Um leitor de RFID, às vezes também chamado de “interrogador”, lê os dados armazenados em uma etiqueta de RFID e os repassa a um computador para processamento. Um leitor é essencialmente uma caixinha de componentes eletrônicos conectada a uma ou mais antenas.'
        case 3:
          return 'O infravermelho é um tipo de radiação eletromagnética que apresenta frequência menor que a da luz vermelha e, por isso, não está dentro do espectro eletromagnético visível. Por esse motivo, essa radiação não pode ser percebida pelo olho humano.'
        case 4:
          return 'Os detectores de fumaça são dispositivos que identificam quando há presença sinal de fumaça no ambiente desde seu estágio inicial e transferem esta informação para a central de detecção de incêndio que é responsável pela ativação dos alarmes da edificação.'
        case 5:
          return 'O Sensor de Tensão AC 0 a 250V Voltímetro ZMPT101K é um módulo que permite identificar a presença de tensão alternada. Devido à sua alta precisão, é possível utilizá-lo como um medidor, garantindo assim ótimas leituras dos valores de tensão alternada em sua rede elétrica.'
      }
    },
    choiceImage(param) {
      switch (param) {
        case 1:
          return '/images/umidade.gif'
        case 2:
          return '/images/aproximacao.jpg'
        case 3:
          return '/images/infravermelho.jpg'
        case 4:
          return '/images/2h8251c.webp'
        case 5:
          return '/images/tensao.jpg'
      }
    },
  },
  mounted() {
  }
}
</script>

<style>
#style_all_images {
  width: 100%;
  background-size: cover;
}
</style>