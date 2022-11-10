<template>
  <div class="title_page font-avenir" name="title_page">
    Os vascainos
  </div>
  <div class="father-of-all height-100">
    <div class="operations-center font-avenir">
      <div style="display:flex; justify-content:center; align-items:center">
        <div style="width:100%; display: block;">
          <button type="submit" @click="choiceSensor(1)" class="font-avenir sensores">Umidade e Temp.</button>
          <button type="submit" @click="choiceSensor(2)" class="font-avenir sensores">Leitor-rfid</button>
          <button type="submit" @click="choiceSensor(3)" class="font-avenir sensores">Infravermelho</button>
          <button type="submit" @click="choiceSensor(4)" class="font-avenir sensores">Sensor de fumaça</button>
          <button type="submit" @click="choiceSensor(5)" class="font-avenir sensores">Sensor de tensão</button>
        </div>
      </div>
    </div>
    <div class="informations_and_actions font-avenir">
      <div id="grafic">
        <div 
          class="center_object" 
          style="width:100%; height:100%; font-size:80px"
        >
          10
        </div>
        <div class="center_object" id="last_data">
          <p style="border-bottom:2px solid black">
            teste
          </p>
        </div>
      </div>
      <div id="description_and_action">
        <div class="blocks" style="margin:0 8px">
          <img v-if="sensor.image" 
            style="background-size:cover; width:100%; height: 100%; border-radius:10px" 
            :src="sensor.image"
          >
        </div>
        <div class="blocks" id="description">
          {{sensor.description}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
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

.visualization-components {
  height: 100%;
  display: inline-flexbox;
  background-color: white;
  position: relative;
}

#style_all_images{
  width:100%;
  background-size: cover;
  padding: 80px 100px ;
}

.sensores {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  float: left;
  margin: 32px;
  font-size: 28px;
  font-weight: bold;
  border-radius:10px;
  border:none;
}
.center_object{
  display: flex;
  justify-content: center;
  align-items: center;
}

.title_page {
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  font-size: 20px;
  background-color: #3C3C3C;
  padding: 30px;
  color: white;
}

.informations_and_actions {
  height: 100%;
  width: 100%;
  display: block;
  justify-content: center;
}

.father-of-all {
  display: inline-flex;
  position: absolute;
  width: 100%;
}
.operations-center {
  background-color: #451531;
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: center;
  text-align: center;
}

.font-avenir {font-family: Avenir, Helvetica, Arial, sans-serif;}
.position-absolute {position: absolute;}
.jus-con-cen {justify-content: center;}
.height-100 {height: 100%;}
.margin-0 {margin: 0;}

.blocks {
  text-align: center;
  width: 100%;
  height: 300px;
}

#last_data{
  width:100%;
  height:100%;
  border:1px solid black;
  border-radius: 10px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top: 0;
  border-bottom: 0;
  border-right:0;
}

#chartdiv {
  display: inline-flex;
  width: 100%;
  height: 400px;
}

#description {
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

#description_and_action {
  display: inline-flex;
  justify-content: center;
  width: 100%;
  justify-content: center;
  height:200px;
}

#grafic {
  display: inline-flex;
  width: 100%;
  border-radius: 10px;
  text-align: center;
  height: 300px;
  margin: 20px 5px;
  border: 1px solid;
}

#box_actions {
  padding: 60px 40px;
  border-radius: 5px;
  border: 1px solid black;
}
</style>