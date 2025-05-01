// lib/textClassification.js
import * as tf from '@tensorflow/tfjs';

const model = tf.sequential();
model.add(tf.layers.embedding({ inputShape: [100], outputShape: [128] }));
model.add(tf.layers.flatten());
model.add(tf.layers.dense({ units: 8, activation: 'softmax' }));

model.compile({ optimizer: tf.optimizers.adam(), loss: 'categoricalCrossentropy', metrics: ['accuracy'] });

export async function classifyText(text) {
  const input = tf.tensor([text]);
  const output = model.predict(input);
  const classification = output.arraySync()[0];
  return classification;
}
