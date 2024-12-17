<template>
    <div class="header">
        <nav>
            <span>Pasantias 2024</span>
            <div class="btn-container">
                <button class="btn-navbar">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
                    Ejercicios
                </button>
                <button class="btn-navbar">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
                    Mas ejercicios
                </button>
            </div>
        </nav>
    </div>
</template>
<script></script>
<style>
    .header{
        position: relative;
        width: 100%;
        padding: 0px;
        display: flex;
        justify-content: center;
        height: 20vh;
        max-height: 120px;
    }
    nav{
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        position: sticky;
        background-color: #460e5f;
    }
    nav>span{
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        background-color: #460e5f;
    }
    .btn-container{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 60%;
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
    }
    .btn-navbar{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 20px auto;
        background-color: transparent;
        border-bottom: 2px solid transparent;
        border-top: 0;
        border-left: 0;
        border-right: 0;
        transition: all 1s ease;
        background-color: #460e5f;
    }
    .btn-navbar:hover{
        background-image: 
            linear-gradient(#460e5f, #460e5f),
            linear-gradient(90deg, #ffcc00, #ff6f00)
        ;
        background-origin: border-box;
        background-clip: padding-box,border-box;
    }
</style>