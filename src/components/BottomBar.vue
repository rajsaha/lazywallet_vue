<template>
    <div class="bottom-bar-container text-center">
        <div class="row">
            <div class="col">
                <router-link :to="{name: 'home'}">
                    <div class="bottom-bar-link">
                        <font-awesome-icon icon="home" />
                    </div>
                </router-link>
            </div>
            <div class="col">
                <router-link :to="{name: 'regulars'}">
                    <div class="bottom-bar-link">
                        <font-awesome-icon icon="redo" />
                    </div>
                </router-link>
            </div>
            <div class="col">
                <router-link :to="{name: 'status'}">
                    <div class="bottom-bar-link">
                        <font-awesome-icon icon="chart-bar" />
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BottomBar"
    }
</script>

<style scoped lang="scss">
    a {
        color: inherit;
    }
    .bottom-bar-container {
        padding: 25px;
        .bottom-bar-link {
            transition: all 0.2s ease-in-out;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            position: relative;
            margin-left: auto;
            margin-right: auto;
            svg {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }

        .router-link-active  {
            .bottom-bar-link {
                box-shadow: 0 10px 25px -10px rgb(152, 185, 252);
                color: rgb(165, 229, 220) !important;
            }
        }
    }
</style>
