<template>
    <div>
        <carousel
                class="regular-expenses-carousel"
                :items="3"
                :nav="false"
                :dots="false"
                :margin="15"
                :center="true"
                :autoWidth="true">
            <div class="regular-expense"
                 v-for="(expense, index) in data"
                 :key="index"
                 @click="addAmount(expense.amount)"
                 :style="{
                   'border-top-color': 'rgb(' + expense.backgroundColor + ')',
                   'border-radius': '5px',
                   'box-shadow': '0 11 12 -12 rgba(' + expense.backgroundColor + ', 0.2)'
                   }">
                <div class="content">
                    <h6>{{ expense.text }}</h6>
                    <p>RM {{ expense.amount }}</p>
                </div>
            </div>
        </carousel>
    </div>
</template>

<script>
    export default {
        name: "RegularExpenses",
        props: {
            data: null
        }
    }
</script>

<style lang="scss" scoped>
    .regular-expenses-carousel {

        .regular-expense {
            margin-bottom: 5px;
            width: 75px;
            height: 75px;
            position: relative;
            border-top: 3px solid;
            box-shadow: 0 5px 10px rgba(117,117,117,0.1);
            background-color: white;

            .content {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                text-align: center;

                h6 {
                    font-family: 'Nunito', sans-serif;
                    font-size: 12px;
                }

                p {
                    font-size: 9px;
                    color: rgba(173, 173, 173, 1);
                    margin-bottom: 0;
                }
            }
        }
    }

    @media (min-width: 375px) {
        .regular-expenses-carousel {

            .regular-expense {
                width: 100px;
                height: 100px;

                .content {

                    h6 {
                        font-size: 15px;
                    }

                    p {
                        font-size: 12px;
                    }
                }
            }
        }
    }
</style>
