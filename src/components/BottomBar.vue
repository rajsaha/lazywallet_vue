<template>
    <div class="bottom-bar-container">
        <div class="row">
            <div class="col">
                <div class="text-center bottom-bar-link active-link">
                    <font-awesome-icon icon="home" />
                </div>
            </div>
            <div class="col">
                <div class="text-center bottom-bar-link">
                    <font-awesome-icon icon="redo" />
                </div>
            </div>
            <div class="col">
                <div class="text-center bottom-bar-link">
                    <font-awesome-icon icon="chart-bar" />
                </div>
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
    .bottom-bar-container {
        padding: 25px;
        .bottom-bar-link {
            border-radius: 50%;
            width: 50px;
            height: 50px;
            margin-left: auto;
            margin-right: auto;
            position: relative;

            svg {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }

        .active-link  {
            /*border: 1px solid rgba(0,0,0,0.1);*/
            box-shadow: 0px 10px 25px -10px rgb(152, 185, 252);
            color: rgb(165, 229, 220) !important;
        }
    }
</style>
