<template>
    <div class="login-page">
        <div class="login-card">
        <h2>Iniciar Sesión</h2>

        <form @submit.prevent="handleLogin">
            <div class="input-group">
            <input
                v-model="username"
                type="text"
                placeholder=" "
                required
            />
            <label>Usuario</label>
            </div>

            <div class="input-group">
            <input
                v-model="password"
                type="password"
                placeholder=" "
                required
            />
            <label>Contraseña</label>
            </div>

            <button type="submit">Entrar</button>
        </form>

        <p v-if="error" class="error-msg">
            {{ error }}
        </p>
        </div>
    </div>
</template>

<script>
import { login } from '@/clients/MatriculaClient';

export default {
    data() {
        return {
        username: '',
        password: '',
        error: null
        }
    },
    methods: {
        async handleLogin() {
        try {
            await login(this.username, this.password);
            this.$router.push('/about');
        } catch (err) {
            this.error = "Usuario o contraseña incorrectos";
        }
        }
    }
    }
</script>

<style scoped>
/* Fondo */
.login-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #42b983, #35495e);
}

/* Tarjeta */
.login-card {
    background: #ffffff;
    padding: 40px;
    width: 100%;
    max-width: 360px;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    text-align: center;
}

/* Título */
.login-card h2 {
    margin-bottom: 30px;
    color: #2c3e50;
}

/* Inputs */
.input-group {
    position: relative;
    margin-bottom: 25px;
}

.input-group input {
    width: 100%;
    padding: 12px 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
    outline: none;
    font-size: 15px;
    background: none;
}

.input-group label {
    position: absolute;
    left: 10px;
    top: 50%;
    color: #999;
    font-size: 14px;
    transform: translateY(-50%);
    pointer-events: none;
    transition: 0.3s;
    background: #fff;
    padding: 0 5px;
}

/* Animación del label */
.input-group input:focus + label,
.input-group input:not(:placeholder-shown) + label {
    top: -8px;
    font-size: 12px;
    color: #42b983;
}

/* Botón */
button {
    width: 100%;
    padding: 12px;
    background: #42b983;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s, transform 0.1s;
}

button:hover {
    background: #369b6f;
}

button:active {
    transform: scale(0.98);
}

/* Error */
.error-msg {
    margin-top: 15px;
    color: #e74c3c;
    font-size: 14px;
}
</style>
