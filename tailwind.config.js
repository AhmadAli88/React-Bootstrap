export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /^p-(0|1|2|3|4|5|6|8|10|12|16|20|24|32|40|48|56|72)$/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
