<template>
  <v-table fixed-header fixed-footer theme="dark">
    <thead>
      <tr>
        <th class="text-left">Product Name</th>
        <th class="text-left">Price</th>
        <th class="text-left">Amount</th>
        <th class="text-left">Sum</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in desserts" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
        <td>{{ item.amount }}</td>
        <td>{{ item.sum }}</td>
      </tr>
    </tbody>
  </v-table>
</template>
<script>
export default {
  data() {
    return {
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          amount: 159,
          sum: 159,
        },
        {
          name: "Frozen Yogurt",
          calories: 159,
          amount: 159,
          sum: 159,
        },
        {
          name: "Frozen Yogurt",
          calories: 159,
          amount: 159,
          sum: 159,
        },
        {
          name: "Frozen Yogurt",
          calories: 159,
          amount: 159,
          sum: 159,
        },
      ],
    };
  },
};
</script>
