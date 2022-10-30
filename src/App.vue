<template>
  <div class="title_page font-avenir" name="title_page">
    Os vascainos
  </div>
  <div class="father-of-all height-100">
    <div class="operations-center font-avenir">
      <div style="display:flex; justify-content:center; align-items:center">
        <div style="width:100%; display: block;">
          <!--
            <div v-for="sensor in sensores" :key="sensor">
              {{sensor.name}}
            </div>
          -->
          <input type="submit" @click="choiceSensor()" class="font-avenir sensores">
          <input @change="choiceSensor()" class="font-avenir sensores">
          <input @change="choiceSensor()" class="font-avenir sensores">
          <input @change="choiceSensor()" class="font-avenir sensores">
          <input @change="choiceSensor()" class="font-avenir sensores">
        </div>
      </div>
    </div>
    <div class="informations_and_actions font-avenir">
      <div id="grafic">
        <div class="center_object" id="" style="width:100%;height:100%; font-size:80px">10</div>
        <div class="center_object" id="last_data">
          <p style="border-bottom:2px solid black">
            teste
          </p>
        </div>
      </div>
      <div id="description_and_action">
        <div class="blocks">
          teste
        </div>
        <div class="blocks" id="description">
          {{all_components}}
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
      sensores: [],
      options: {},
      all_components: {}
    }
  },
  methods: {
    captureValues() {
      axios.get('https://api.hgbrasil.com/weather', {
        headers: {
          "Access-Control-Allow-Origin": "*",
          }
      }).then(res => {
        console.log(res);
      })
    },
    choiceSensor() {
       console.log('hoje é domingo')
    },
    loadComponents() {
      axios.get('').then((response) => {
        this.all_components = response.data
      })
    },
    getSensores() {
      axios.get('').then((response) => {
        this.sensores = response.data
      })
    }
  },
  mounted() {
    this.captureValues()
    this.loadComponents()
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

.sensores {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: white;
  float: left;
  margin: 32px;
  font-size: 28px;
  font-weight: bold;
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