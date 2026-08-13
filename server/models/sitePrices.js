const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  name: String,
  tier: String,
  price: String,
  desc: String,
  services: [String],
  features: [String]
});

// ንነፍሲ ወከፍ ፔኬጅ (premium, gold, silver, standard) ክንጥቀመሉ ኢና
module.exports = mongoose.model('Package', packageSchema);