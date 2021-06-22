<template>
    <div class="card" v-if="filmInfo">
        <img src="" class="card-img-top" :alt="filmInfo.name">
        <div class="card-body">
            <h5 class="card-title">{{ filmInfo.name }}</h5>
            <p class="card-text">{{ filmInfo.descr }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'filmItem',
    props: {
        filmInfo: {
            type: Object,
            required: true,
            default: () => {}
        }
    }
}
</script>