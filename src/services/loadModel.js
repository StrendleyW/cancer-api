const tf = require("@tensorflow/tfjs-node");
const MODEL_URL =
  "https://storage.googleapis.com/ai-model-cancer/submissions-model/model.json";

async function loadModel() {
  return tf.loadGraphModel(process.env.MODEL_URL);
}
module.exports = loadModel;
