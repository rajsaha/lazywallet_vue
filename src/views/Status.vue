<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <h5 class="text-center page-title">Expenses Status</h5>
        <div class="expense-status shadow">
          <h6 class="text-center pt-3 text-uppercase font-weight-bold">{{current_date | moment("MMMM")}}</h6>
          <p class="text-center">{{current_date | moment("Do YYYY")}}</p>

          <div class="p-ab-vc total-expense">RM {{total_expense}}</div>

          <div class="budget">
            <h6>Budget</h6>
            <p>RM {{budget}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Doughtnut } from "vue-chartjs";

export default {
  name: "Status",
  data() {
    return {
      expense_categories: ["Food", "Transport", "Grocery"],
      total_expense: 0,
      budget: 1200,
      current_date: new Date()
    };
  },
  computed: {
    ...mapState(["total_expense"])
  },
  mounted() {
    this.renderChart({
      labels: this.expense_categories,
      datasets: [{}]
    });
  }
};
</script>

<style lang="scss" scoped>
.expense-status {
  width: 100%;
  height: 250px;
  background-color: white;
  position: relative;

  .total-expense {
    font-size: 54px;
    color: rgb(83, 211, 245);
    font-weight: bold;
  }

  .budget {
    position: absolute;
    bottom: 0;
    right: 25px;

    h6 {
      font-weight: 300;
    }

    p {
      font-weight: bold;
      color: rgb(83, 211, 245);
    }
  }
}
</style>
