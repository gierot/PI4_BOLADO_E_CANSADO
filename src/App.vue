<template>
  <div class="w-full h-full">
    <div 
      v-if="!choice" 
      class="h-screen flex items-center justify-center"
    >
        <div class="w-full flex justify-center items-center">
          <div class="block px-4 py-8">
            <p 
              class="text-center text-white w-full text-2xl my-4" 
              v-text="'Os vascainos'" 
            />
            <div class=" w-full inline-flex justify-center items-center">
              <button
                v-text="'Entrar'"
                class="rounded text-white bg-violet-900 py-2 mx-1 px-8 font-semibold"
                @click="choiceMetod(1)"
              />
              <button 
                v-text="'Registre-se'" 
                class="rounded text-white bg-green-900 py-2 mx-1 px-4 font-semibold" 
                @click="choiceMetod(2)" 
              />
            </div>
          </div>
        </div>
    </div>
    <div v-else-if="choice === 1">
      <div class="w-full h-screen flex justify-center items-center">
        <div class="block w-[300px] h-96 flex justify-center items-center rounded bg-neutral-900">
          <div class="block">
            <div class="w-full">
              <p 
                class="text-violet-900 font-semibold my-2 text-center text-xl" 
                v-text="'Login'"
              />
              <div class="w-full flex items-center justify-center mb-4">
                <input 
                  class="rounded text-center no-underline" 
                  v-model="user.login" 
                  type="text"
                >
              </div>
            </div>
            <div class="w-full ">
              <p 
                class="text-violet-900 font-semibold text-center my-2 text-xl" 
                v-text="'Senha'"
              />
              <div class="flex items-center justify-center mb-4">
                <input 
                  class="rounded text-center no-underline" 
                  v-model="user.senha" 
                  type="password"
                >
              </div>
            </div>
            <div class="w-full block">
              <div class="inline-flex items-center w-full justify-center">
                <button 
                  v-text="'Entrar'" 
                  class="rounded bg-violet-900 py-2 mx-1 px-9 text-white font-semibold"
                  @click="registerUser(2)" 
                />
              </div>
              <p v-if="info" class="text-white w-full my-2 text-center rounded bg-red-700">{{info}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div 
      v-else-if="choice === 2"
      class="w-full h-screen flex justify-center items-center" 
    >
    <div class="flex items-center w-[320px] rounded bg-neutral-900 h-[450px] justify-center">
      <div class="block">
          <p 
            class="text-center w-full text-white mb-8 italic text-2xl" 
            v-text="'Cadastro'" 
          />
          <p 
            class="w-full text-center text-white" 
            v-text="'Nome'" 
          />
          <div class="w-full flex justify-center items-center">
            <input 
              v-model="register.nome" 
              class="m-2 px-4 text-center rounded" 
              type="text"
            >
          </div>
          <p class="w-full text-center text-white" v-text="'Email'" />
          <div class="w-full flex justify-center items-center">
            <input 
              v-model="register.email" 
              class="m-2 px-4 text-center rounded" 
              type="text"
            >
          </div>
          <p class="w-full text-center text-white" v-text="'Login'" />
          <div class="w-full flex justify-center items-center">
            <input 
              v-model="register.login" 
              class="m-2 px-4 text-center rounded" 
              type="text"
            >
          </div>
          <p class="w-full text-center text-white" v-text="'Senha'" />
          <div class="w-full flex justify-center items-center">
            <input 
              v-model="register.senha" 
              class="m-2 px-4 text-center rounded" 
              type="password"
            >
          </div>
          <div class="w-full flex justify-center items-center">
            <button
              v-text="'Registrar'"
              class="rounded text-white bg-violet-900 p-2" 
              @click="registerUser(1)"
            />
          </div>
          <p v-if="info" class="text-white w-full my-2 text-center rounded bg-red-700">{{info}}</p>
        </div>
      </div>
    </div>
    <div v-else>
      <div 
        class="text-white bg-neutral-800 flex justify-center items-center text-center py-8 text-2xl font-semibold" 
        name="title_page"
        >
          <div class="flex justify-center items-center float-right w-[90%]">
            <hr size="10" width="30%" noshade>
            <p class="mx-5">Os vascainos</p>
            <hr size="10" width="30%" noshade>
          </div>
          <div class="w-auto float-right text-2xl">
            <button class="text-white" type="submit" v-text="'Sair'" @click="logouUser()"/>
          </div>
      </div>
      <div class="w-full absolute inline-flex h-full">
        <div class="w-96 h-screen bg-red-900 font-avenir">
          <div class="flex justify-center items-center">
            <div class="w-full block text-center">
              <button 
                type="submit" 
                @click="choiceSensor(1), getValues('/temperatura-umidade')" 
                class="text-white font-semibold text-2xl mx-16 my-6"
                v-text="'Umidade e Temp.'"
              />
              <button 
                type="submit" 
                @click="choiceSensor(2), getValues('/leitor-rfid/')" 
                class="text-white font-semibold text-2xl mx-16 my-6"
                v-text="'Leitor-rfid'"
              />
              <button 
                type="submit" 
                @click="choiceSensor(3), getValues('/sensor-infravermelho')" 
                class="text-white font-semibold text-2xl mx-16 my-6"
                v-text="'Infravermelho'"
              />
              <button 
                type="submit" 
                @click="choiceSensor(4), getValues('/sensor-gas')" 
                class="text-white font-semibold text-2xl mx-16 my-6"
                v-text="'Sensor de fumaça'"
              />
              <button 
                type="submit" 
                @click="choiceSensor(5), getValues('/sensor-voltagem')" 
                class="text-white font-semibold text-2xl mx-16 my-6"
                v-text="'Sensor de voltagem'"
              />
              <button 
                type="submit" 
                @click="choiceSensor(6), getValues('/sensor-amperagem')"
                class="text-white font-semibold text-2xl mx-16 my-6" 
                v-text="'Sensor de amperagem'" />
            </div>
          </div>
        </div>
        <div 
          v-if="value_choice === 0" 
          class="bg-black w-full h-full text-center italic text-white flex justify-center items-center text-4xl"
          v-text="'Por favor, escolha um sensor para averiguar seus valores...'">
  
        </div>
        <div v-else class="bg-black block w-full">
          <div v-if="value_choice === 2">
            <div class="h-[320px] my-4 w-full flex justify-center items-center text-white">
              <img v-if="value_one" src="/images/escuro.gif" class="w-auto bg-cover rounded h-full">
              <div v-else class="text-center text-white text-4xl mx-2" v-text="'...Ops parece que seu cartão não esta cadastrado... Cadastre-o e veja a mágica!!!'"/>
            </div>
          </div>
          <div v-else>
            <div class="inline-flex w-full">
              <div class="w-full flex mt-8 justify-center items-center">
                <div class="rounded-lg h-64 w-9/12 inline-flex">
                  <div class="w-full rounded-r-lg text-white text-center flex justify-center items-center">
                    <div class="bg-violet-900 w-40 h-40 rounded-full flex justify-center items-center">
                      <div class="bg-violet-800 w-32 h-32 rounded-full flex justify-center items-center">
                        <div class="bg-violet-700 rounded-full text-white w-24 h-24 flex justify-center items-center">
                          {{ value_one }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="value_choice === 1" class="w-full flex mt-8 justify-center items-center">
                <div class="rounded-lg h-64 w-9/12 inline-flex">
                  <div class="w-full rounded-r-lg text-white text-center flex justify-center items-center">
                    <div class="bg-violet-900 w-40 h-40 rounded-full flex justify-center items-center">
                      <div class="bg-violet-800 w-32 h-32 rounded-full flex justify-center items-center">
                        <div class="bg-violet-700 rounded-full text-white w-24 h-24 flex justify-center items-center">
                          {{value_two}}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full flex mt-8 justify-center items-center">
            <div class="inline-flex h-64 w-full">
              <div class="w-full mx-2 rounded flex justify-center items-center">
                <div class="flex justify-center items-center" v-if="sensor.image ">
                  <img id="style_all_images" :src="sensor.image" class="w-full rounded h-full">
                </div>
              </div>
              <div class="w-full mx-5 rounded text-white flex justify-center items-center text-center font-semibold">
                <div class="block w-full">
                  <p class="text-center w-full">{{sensor.description}}</p>
                  <button 
                    v-if="value_choice === 2 && !value_one" 
                    class="bg-violet-800 p-2 my-2 rounded" 
                    v-text="'Cadastrar cartão'"
                    @click="registerCard('/cadastro/leitor-rfid')"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info:false,
      choice:0,
      value_choice: 0,
      value_one: 0.0,
      value_two: 0,
      clear:0,
      user: {
        login: '',
        senha:'',
      },
      register: {
        nome: '',
        email: '',
        senha: '',
        login:''
      },
      sensor: {
        image: '',
        description:''
      },
    }
  },
  methods: {
    logouUser() {
      this.choice = 0
      this.info = ''
    },
    choiceMetod(param) {this.choice = param},
    dataprocessing(param) {
      switch (this.value_choice) {
        case 1:
          this.value_one = param.temperatura
          this.value_two = param.umidade
          break;
        case 2:
          this.value_one = param.permitido
          break;
        case 3:
          this.value_one = param.encontrado_item
          break;
        case 4:
        case 5:
        case 6:
          this.value_one = param.valor
          break;
      }
    },
    registerUser(param) {
      switch (param) {
        case 1:
          if (!this.register.nome || !this.register.login || !this.register.senha || !this.register.email) {
            this.info = 'Preencha todos os dados por favor!!!!'
          } else {
            this.info = ''
            this.$store.dispatch('registerUser', this.register)
            .then((response) => {
              response ? this.choice = 4 : this.info = 'Não foi possivel cadastrar o usuario ' + this.register.login +', por favor tente novamente!'
            })
          }
          break;
          case 2:
          if (!this.user.login || !this.user.senha ) {
            this.info = 'Preencha todos os dados por favor!!!!'
          } else {
            this.info = ''
            this.$store.dispatch('verifyAccontUser', this.user)
            .then((response) => {
              response ? this.choice = 4 : this.info = 'Não foi possivel logar com o usuario ' +this.user.login+ ', por favor tente novamente!'
            })
          }
          break;
      }
    },
    registerCard(param) {
      this.$store.dispatch('registerCard', param)
    },
    getValues(param) {
      clearInterval(this.clear)
      this.$store.dispatch('getSensorChoice', param)
        .then((response) => {
        this.dataprocessing(response)
      })
      param === '/leitor-rfid/' ? '' : this.clear = setTimeout(function () { this.getValues(param) }.bind(this), 4000);
    },
    choiceSensor(param) {
      this.value_one = null
      this.value_choice = param
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
          return 'Tensão elétrica, também conhecida como diferença de potencial, é a diferença de potencial elétrico entre dois pontos ou a diferença em energia potencial elétrica por unidade de carga elétrica entre dois pontos. Sua unidade de medida é o volt – homenagem ao físico italiano Alessandro Volta.'
        case 6:
          return 'Este sensor é comumente aplicado em projetos de automação residencial, onde é necessário monitorar o consumo de um equipamento elétrico (dentro das especificações do sensor), por exemplo. Para isto, o mesmo deve ser aliado a um Sensor de Tensão AC de forma que seja possível fazer o cálculo de potência.'
      }
    },
    choiceImage(param) {
      switch (param) {
        case 1:
          return '/images/umidade.gif'
        case 2:
          return '/images/aproximacao.gif'
        case 3:
          return '/images/infravermelho.jpg'
        case 4:
          return '/images/2h8251c.webp'
        case 5:
          return '/images/voltagem.gif'
        case 6:
          return '/images/amper.gif'
      }
    }
  },
  mounted() {
  },
}
</script>

<style>
#style_all_images {
  width: 100%;
  background-size: cover;
}
</style>