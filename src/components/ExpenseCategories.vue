<template>
    <div class="col no-padding expense-category-carousel">
        <!-- Categories carousel -->
        <carousel
                :items="3"
                :center="true"
                :loop="true"
                :nav="false"
                :margin="100"
                :autoWidth="true"
                :autoHeight="true">
            <div class="category-parent"
                 v-for="(expense, index) in data"
                 :key="index"
                 :style="{
              'background-color': 'rgba(' + expense.backgroundColor + ', 0.5)',
              'box-shadow': '0px 10px 25px -10px ' + expense.backgroundColor}">
                <div
                        class="expense-category p-ab-vc"
                        :style="{'background-color': 'rgba(' + expense.backgroundColor + ', 0.7)'}">
                    <div class="icon-and-text p-ab-vc"
                         :style="{'background-color': 'rgba(' + expense.backgroundColor + ', 1)',}">
                        <font-awesome-icon class="p-ab-vc" :style="{ color: expense.textColor }" :icon="expense.icon"/>
                        <!--<md-icon class="p-ab-vc" :style="{ color: expense.textColor }">{{ expense.icon }}</md-icon>-->
                        <p class="text-center p-ab-vc">{{ expense.text }}</p>
                    </div>
                </div>
            </div>
        </carousel>
    </div>
</template>

<script>
    export default {
        name: "ExpenseCategories",
        props: {
            data: null
        }
    }
</script>

<style scoped lang="scss">
    .expense-category-carousel {
        margin-bottom: 25px;

        .owl-stage-outer {
            padding-top: 25px;
        }

        .owl-item {
            transform: scale(1.0);
            transition: all 0.2s ease-in-out;
        }

        .owl-item.active.center {
            transform: scale(1.3);
        }
    }

    .category-parent {
        border-radius: 50%;
        width: 100px;
        height: 100px;
        margin-bottom: 15px;

        .expense-category {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            text-align: center;
            position: relative;
            transition: all 0.2s ease-in-out;

            .icon-and-text {
                border-radius: 50%;
                width: 60px;
                height: 60px;

                svg {
                    top: 40%;
                    color: white !important;
                }

                p {
                    font-size: 9px;
                    top: 70%;
                    color: white;
                }
            }
        }
    }
</style>
