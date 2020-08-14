<template>
    <div class="app">
        <div class="order-info">
            <ul>
                <li>
                    <span>确认信息：</span>
                    <div class="fr">
                        <p>asdfasdfas6d4f65s4</p>
                    </div>
                </li>
            </ul>
            <div class="pub-upload">
                <input @change="upload_two" type="file" accept="image/gif, image/jpeg">
                <img :src="img2" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {

            }
        },
        methods: {

        }
    }
</script>

<style>

</style>