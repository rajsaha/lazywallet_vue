<template>
    <div class="home">
        <div class="container-fluid">
            <div class="row">
                <div class="col no-padding">
                    <h5 class="text-center page-title">Regular Expenses</h5>
                    <p class="section-title">
                        Add a Regular Expense
                    </p>
                    <div class="enter-amount text-center container">
                        <!-- Input amount -->
                        <b-form-input type="text" class="custom-input mb-3 w-100" placeholder="Enter Title For Your Expense"></b-form-input>
                        <b-form-input type="text" class="custom-input mb-3 w-100" placeholder="Enter Amount Spend"></b-form-input>
                        <b-button v-ripple class="btn btn-custom">Add Expense</b-button>
                    </div>
                    <search-regular-expenses :data="regular_expenses"></search-regular-expenses>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  name: "Regulars",
  props: {
    data: null
  },
  data() {
      return {
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
                    },
                    {
                        text: 'Movie',
                        amount: 36,
                        backgroundColor: '117, 117, 117',
                        textColor: '#FFFFFF'
                    }
                ],
      }
  }
};
</script>
