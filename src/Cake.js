({
  extend: {'Goodies/Pastry': Pastry},
  use: {
    'Kitchen/Oven': Oven,
    'Kitchen/Refrigerator': Refrigerator
  },

  classProperties: {
    icingColors: {
      blue: '#00f'
    }
  },

  constructor: function () {
    Pastry.apply(this, arguments);
  }
})
