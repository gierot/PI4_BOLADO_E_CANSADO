<template>
    <div class="w-full h-96 bg-black">
        <div class="flex justify-center h-full h-screen items-center w-full">
            <div class="block w-1/4 h-96 rounded bg-neutral-900">
                <div class="block">
                    <div class="w-full mt-24">
                        <p class="text-violet-900 font-semibold text-center text-xl">Login</p>
                        <div class="w-full flex items-center justify-center mb-5">
                            <input 
                                class="rounded"
                                v-model="user.username" 
                                type="text"
                            >
                        </div>
                    </div>
                    <div class="w-full">
                        <p class="text-violet-900 font-semibold text-center text-xl">Senha</p>
                        <div class="flex items-center justify-center mb-5">
                            <input
                                class="rounded"
                                v-model="user.password" 
                                type="text"
                            >
                        </div>
                    </div>
                    <div class="w-full">
                        <div class="flex items-center justify-center">
                            <button
                                v-text="'Entrar'"
                                class="rounded bg-violet-900 py-2 px-8 text-white font-semibold"
                                @click="login()"
                            />
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'loginComponent',
    data() {
        return {
            user: {
                username: '',
                password:'' 
            }
        }
    },
    methods: {
        login() {
            axios.post('', { dados: this.user })
            .then((response) => {
                console.log(response.data)    
            })            
        }
    }
}
</script>