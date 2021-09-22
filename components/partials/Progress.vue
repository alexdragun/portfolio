<template>
    <div class="progress">
        <div class="progress__content">
            <slot />
            <p>{{ percentage }}%</p>
        </div>
        <div class="progress__bar">
            <span class="progress__bar--filled" :style="`width: ${percentage}%`" />
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            percentage: {
                type: Number,
                required: true,
                default: 0,
            }
        }
    }
</script>

<style lang="scss" scoped>
.progress {
    &__content {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &__bar {
        margin-top: 20px;
        width: 100%;
        height: 5px;
        border-radius: 5px;
        background-color: $black;
        overflow: hidden;
        &--filled {
            display: block;
            height: 100%;
            background-color: $secondary_color;
            border-radius: 5px;
        }
    }
}
</style>