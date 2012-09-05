define([
  'Goodies/Pastry',
  'Kitchen/Oven',
  'Kitchen/Refrigerator'
], function (
  GoodNoms,
  BakeyThing,
  MisterChilly
) {
  function Cake (s) {
    GoodNoms.apply(this, arguments);
    s != GoodNoms && this.initialize.apply(this, arguments);
  }

  Cake.prototype = new GoodNoms(GoodNoms);
  Cake.prototype.constructor = Cake;
  Cake.prototype.superclass = GoodNoms;

  Cake.icingColors = {
    blue: '#00f'
  };

  return Cake;
});
