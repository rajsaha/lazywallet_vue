<template>
  <div>
    <p class="section-title">Existing Regular Expenses</p>
    <div class="enter-amount text-center container">
      <b-input-group>
        <b-form-input type="text" class="custom-input mb-1 w-100" placeholder="Search..."></b-form-input>
        <div class="append-icon-to-input">
          <font-awesome-icon icon="search"></font-awesome-icon>
        </div>
      </b-input-group>
    </div>
    <carousel
      class="regular-expenses-carousel"
      :items="3"
      :nav="false"
      :dots="false"
      :margin="15"
      :center="true"
      :autoWidth="true"
    >
      <!-- Carousel Start -->
      <div
        class="regular-expense"
        v-ripple="'rgba(' + expense.backgroundColor + ', 0.2)'"
        v-for="(expense, index) in data"
        :key="index"
        @click="addAmount(expense.amount)"
        :style="{
                   'border-top-color': 'rgb(' + expense.backgroundColor + ')',
                   'border-radius': '5px',
                   'box-shadow': '0 11 12 -12 rgba(' + expense.backgroundColor + ', 0.2)'
                   }"
      >
        <!-- Carousel Item -->
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
  name: "SearchRegularExpenses",
  props: {
    data: null
  }
};
</script>

<style lang="scss" scoped>
.regular-expenses-carousel {
  .regular-expense {
    margin-bottom: 5px;
    width: 75px;
    height: 75px;
    position: relative;
    border-top: 3px solid;
    box-shadow: 0 5px 10px rgba(117, 117, 117, 0.1);
    background-color: white;

    .content {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      text-align: center;

      h6 {
        font-family: "Nunito", sans-serif;
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

.append-icon-to-input {
  position: absolute;
  right: 10px;
  top: 8px;

  svg {
    color: #98b9fc;
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
