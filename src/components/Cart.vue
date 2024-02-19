<template>
  <v-table fixed-header fixed-footer theme="dark">
    <thead>
      <tr>
        <th class="text-left">Product Name</th>
        <th class="text-center">Price</th>
        <th class="text-center">Amount</th>
        <th class="text-right">Sum</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in desserts" :key="item.name">
        <td class="text-left">{{ item.name }}</td>
        <td class="text-center">{{ item.calories }}</td>
        <td class="text-center">{{ item.amount }}</td>
        <td class="text-right">{{ item.sum }}</td>
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
