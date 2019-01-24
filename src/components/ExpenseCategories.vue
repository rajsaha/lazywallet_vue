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

        .owl-item.active.center .category-parent {
            transform: scale(1.2);
        }
    }

    .category-parent {
        border-radius: 50%;
        width: 6em;
        height: 6em;
        margin-bottom: 25px;
        margin-top: 25px;
        transition: all 0.2s ease-in-out;

        .expense-category {
            width: 5em;
            height: 5em;
            border-radius: 50%;
            text-align: center;
            position: relative;

            .icon-and-text {
                border-radius: 50%;
                width: 4em;
                height: 4em;

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

    @media (min-width: 375px) {
        .category-parent {
            width:9em;
            height: 9em;

            .expense-category {
                width: 8em;
                height: 8em;

                .icon-and-text {
                    width: 7em;
                    height: 7em;

                    svg {
                        width: 30px;
                        height: 30px;
                    }

                    p {
                        font-size: 15px;
                    }
                }
            }
        }
    }

    @media (min-height: 800px) {
        .category-parent {
            width:10em;
            height: 10em;

            .expense-category {
                width: 9em;
                height: 9em;

                .icon-and-text {
                    width: 8em;
                    height: 8em;

                    svg {
                        width: 35px;
                        height: 35px;
                    }

                    p {
                        font-size: 18px;
                    }
                }
            }
        }
    }
</style>
