<template>
    <div class="home">
        <div class="container-fluid">
            <div class="row">
                <div class="col no-padding">
                    <h5 class="text-center page-title">Daily Expense</h5>
                    <p class="section-title">
                        Regular Expenses
                    </p>
                    <!-- Regular Expenses-->
                    <regular-expenses :data="regular_expenses"></regular-expenses>

                    <p class="section-title">
                        Add Expense
                    </p>
                </div>
            </div>
            <div class="row no-padding">
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
                            v-for="(expense, index) in expense_categories"
                            :key="index"
                            :style="{
              'background-color': 'rgba(' + expense.backgroundColor + ', 0.5)',
              'box-shadow': '0px 10px 25px -10px ' + expense.backgroundColor}">
                            <div
                                class="expense-category p-ab-vc"
                                :style="{'background-color': 'rgba(' + expense.backgroundColor + ', 0.7)'}">
                                <div class="icon-and-text p-ab-vc"
                                    :style="{'background-color': 'rgba(' + expense.backgroundColor + ', 1)',}">
                                    <md-icon class="p-ab-vc" :style="{ color: expense.textColor }">{{ expense.icon }}</md-icon>
                                    <p class="text-center p-ab-vc">{{ expense.text }}</p>
                                </div>
                            </div>
                        </div>
                    </carousel>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="enter-amount text-center">
                        <!-- Input amount -->
                        <b-input-group>
                            <b-form-input type="number" v-model="amount"></b-form-input>
                        </b-input-group>
                        <b-button class="btn btn-custom" @click="addAmount">Add</b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import JQuery from 'jquery'
    let $ = JQuery

    export default {
        name: 'home',
        data() {
            return {
                amount: null,
                expense_categories: [
                    {
                        icon: 'fastfood',
                        text: 'Food',
                        backgroundColor: '118,255,3',
                        textColor: 'rgba(0,0,0,0.8)'
                    },
                    {
                        icon: 'directions_car',
                        text: 'Transport',
                        backgroundColor: '255,209,73',
                        textColor: 'rgba(0,0,0,0.8)'
                    },
                    {
                        icon: 'shopping_cart',
                        text: 'Grocery',
                        backgroundColor: '128,214,255',
                        textColor: 'rgba(0,0,0,0.8)'
                    }
                ],
                regular_expenses: [
                    {
                        text: 'Lunch',
                        amount: 15,
                        backgroundColor: '75, 99, 110',
                        textColor: '#FFFFFF'
                    },
                    {
                        text: 'Grocery',
                        amount: 60,
                        backgroundColor: '167, 192, 205',
                        textColor: '#FFFFFF',

                    },
                    {
                        text: 'Dinner',
                        amount: 15,
                        backgroundColor: '117, 117, 117',
                        textColor: '#FFFFFF'
                    },
                    {
                        text: 'Grab',
                        amount: 6,
                        backgroundColor: '117, 117, 117',
                        textColor: '#FFFFFF'
                    }
                ],
            }
        },
        methods: {
            addAmount() {
                this.$store.dispatch('add_to_total_expense', this.amount)
            }
        }
    }
</script>

<style lang="scss">
    body {
        background-image: url("../assets/homebg.svg");
    }

    .p-ab-vc {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .phone-viewport {
        width: 100%;
        display: inline-flex;
        align-items: flex-end;
        overflow: hidden;
        border: 1px solid rgba(#000, .26);
        position: fixed;
        bottom: 0;
        left: 0;
    }

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

                i {
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

    .enter-amount {
        .input-group {
            margin-bottom: 15px;
            input {
                border-radius: 25px;
            }
        }

        .btn {
            border: none;
            background-color: #00e676;
            box-shadow: 0px 10px 25px -10px rgb(152, 185, 252);
            text-transform: uppercase;
            border-radius: 25px;
            padding: 10px 75px;
            font-weight: 600;

            :hover {
                background-color: #00e676 !important;
                outline: none !important;
            }

            :focus {
                background-color: #00e676 !important;
                outline: none !important;
            }

            :active {
                background-color: #00e676 !important;
                outline: none !important;
            }
        }
    }
</style>
