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
                <expense-categories :data="expense_categories" :amount="amount" :animation="add_expense_animation_occuring"></expense-categories>
            </div>
            <div class="row">
                <div class="col">
                    <div class="enter-amount text-center">
                        <!-- Input amount -->
                        <b-form-input type="number" v-model="amount" class="custom-input mb-3" placeholder="Enter amount"></b-form-input>
                        <b-button v-ripple class="btn btn-custom" @click="addAmount">Add Expense</b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                amount: null,
                expense_categories: [
                    {
                        icon: 'utensils',
                        text: 'Food',
                        backgroundColor: '118,255,3',
                        textColor: 'rgba(0,0,0,0.8)'
                    },
                    {
                        icon: 'car',
                        text: 'Transport',
                        backgroundColor: '255,209,73',
                        textColor: 'rgba(0,0,0,0.8)'
                    },
                    {
                        icon: 'shopping-cart',
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
                add_expense_animation_occuring: false
            }
        },
        methods: {
            addAmount() {
                this.$store.dispatch('add_to_total_expense', this.amount);
                this.add_expense_animation_occuring = true;
                setTimeout(() => {
                    this.add_expense_animation_occuring = false;
                }, 1500);
            }
        }
    }
</script>

<style lang="scss">
    body {
        background-image: url("../assets/homebg.svg");
        background-size: cover;
        background-repeat: no-repeat;
    }

    .p-ab-vc {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .phone-viewport {
        width: 100%;
        overflow: hidden;
        position: fixed;
        bottom: 0;
        left: 0;
    }

    .enter-amount {
        .input-group {
            margin-bottom: 15px;
            input {
                border-radius: 5px;
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
