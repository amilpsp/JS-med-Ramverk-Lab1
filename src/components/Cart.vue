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
        <td class="text-center">{{ item.price }}</td>
        <td class="text-center">{{ item.amount }}</td>
        <td class="text-right">{{ item.sum }}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td></td>
        <td></td>
        <th class="text-right">Order total</th>
        <td class="text-right">SEK 999</td>
      </tr>
    </tfoot>
  </v-table>
</template>
<script>
export default {
  data() {
    return {
      desserts: [
        {
          name: "D20 table lamp",
          price: 159,
          amount: 1,
          sum: 159,
        },
        {
          name: "Beholder miniature",
          price: 159,
          amount: 3,
          sum: 159,
        },
        {
          name: "Monsters Manual",
          price: 159,
          amount: 1,
          sum: 159,
        },
        {
          name: "Custom PS5 Controller",
          price: 159,
          amount: 2,
          sum: 159,
        },
      ],
    };
  },
};
</script>
