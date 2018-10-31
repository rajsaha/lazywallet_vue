<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <p class="section-title">
            Regular Expenses
          </p>
          <!-- Regular Expenses-->
          <carousel class="regular-expenses-carousel" :items="3" :loop="false" :nav="false" :dots="false" :autoWidth="true" :margin="10">
            <md-chip
            v-for="expense in regular_expenses"
            @click="addAmount(expense.expense)"
            :style="{ 'background-color': expense.backgroundColor, color: expense.textColor }">
            {{ expense.text }}
            </md-chip>
            <md-chip><md-icon>add</md-icon></md-chip>
          </carousel>

          <p class="section-title">
            Add an Expense
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
          :margin="50"
          :autoWidth="true"
          :autoHeight="true">
            <div
            class="expense-category"
            v-for="(expense, index) in expense_categories"
            :key="index"
            :style="{
              'background-color': expense.backgroundColor,
              'box-shadow': '0px 10px 25px -10px ' + expense.backgroundColor
              }">
              <div class="icon-and-text">
                <md-icon :style="{ color: expense.textColor }">{{ expense.icon }}</md-icon>
                <p class="text-center">{{ expense.text }}</p>
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
            <b-button class="btn" @click="addAmount">Add</b-button>
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
          backgroundColor: '#76ff03',
          textColor: 'rgba(0,0,0,0.8)'
        },
        {
          icon: 'directions_car',
          text: 'Transport',
          backgroundColor: '#ffd149',
          textColor: 'rgba(0,0,0,0.8)'
        },
        {
          icon: 'shopping_cart',
          text: 'Grocery',
          backgroundColor: '#80d6ff',
          textColor: 'rgba(0,0,0,0.8)'
        }
      ],
      regular_expenses: [
        {
          text: 'Lunch',
          amount: 15,
          backgroundColor: '#4b636e',
          textColor: '#FFFFFF'
        },
        {
          text: 'Weekly Grocery',
          amount: 60,
          backgroundColor: '#a7c0cd',
          textColor: '#FFFFFF',

        },
        {
          text: 'Dinner',
          amount: 15,
          backgroundColor: '#757575',
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

.regular-expenses-carousel {
  margin-bottom: 25px;
}

.expense-category-carousel {
  margin-bottom: 25px;

  .owl-stage-outer {
    padding-top: 50px;
    padding-bottom: 25px;
  }
}

.expense-category {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  text-align: center;
  position: relative;
  margin-bottom: 15px;
  transition: all 0.2s ease-in-out;

  .icon-and-text {
    position: absolute;
    left: 50%;
    top: 55%;
    transform: translate(-50%, -50%);

    p {
      font-size: 12px;
    }
  }
}

.owl-item {
  transform: scale(1.0);
  transition: all 0.2s ease-in-out;
}

.owl-item.active.center {
  transform: scale(1.5);
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
    box-shadow: 0px 10px 25px -10px #00e676;
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
