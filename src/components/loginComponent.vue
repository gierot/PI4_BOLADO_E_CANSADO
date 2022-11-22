<template>
    <div class="w-full h-96 bg-black">
        <div class="flex justify-center h-full h-screen items-center w-full">
            <div class="block w-1/4 h-96 rounded bg-neutral-900">
                <div class="block">
                    <div class="w-full mt-24">
                        <p class="text-violet-900 font-semibold text-center text-xl">Login</p>
                        <div class="w-full flex items-center justify-center mb-5">
                            <input 
                                class="rounded text-center no-underline"
                                v-model="user.username" 
                                type="text"
                            >
                        </div>
                    </div>
                    <div class="w-full">
                        <p class="text-violet-900 font-semibold text-center text-xl">Senha</p>
                        <div class="flex items-center justify-center mb-5">
                            <input
                                class="rounded text-center no-underline"
                                v-model="user.password" 
                                type="text"
                            >
                        </div>
                    </div>
                    <div class="w-full block">
                        <div class="inline-flex items-center w-full justify-center">
                            <button
                                v-text="'Entrar'"
                                class="rounded bg-violet-900 py-2 mx-1 px-9 text-white font-semibold"
                                @click="login()"
                            />
                            <button 
                                v-text="'Registre-se'" 
                                class="rounded bg-green-900 py-2 mx-1 px-4 text-white font-semibold" 
                                @click="login()" />
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
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
            this.$store.dispatch('verifyAccontUser', this.user)
            
        }  
    }
}
</script>