<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <p class="section-title">
            Total Expense
          </p>
          <p class="total_expense">
            {{ total_expense }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Doughtnut } from 'vue-chartjs'

export default {
  name: 'Status',
  data() {
    return {
      expense_categories: ['Food', 'Transport', 'Grocery']
    }
  },
  computed: {
    ...mapState([
      'total_expense',
    ])
  },
  mounted() {
    this.renderChart({
      labels: this.expense_categories,
      datasets: [
        {

        }
      ]
    })
  }
}
</script>

<style lang="scss">
  .total_expense {
    font-size: 25px;
  }
</style>
