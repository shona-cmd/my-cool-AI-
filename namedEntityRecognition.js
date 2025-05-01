// lib/namedEntityRecognition.js
import * as tf from '@tensorflow/tfjs';

const model = tf.sequential();
model.add(tf.layers.embedding({ inputShape: [100], outputShape: [128] }));
model.add(tf.layers.bidirectional({ layer: tf.layers.lstm({ units: 128 }) }));
model.add(tf.layers.dense({ units: 8, activation: 'softmax' }));

model.compile({ optimizer: tf.optimizers.adam(), loss: 'categoricalCrossentropy', metrics: ['accuracy'] });

export async function recognizeEntities(text) {
  const input = tf.tensor([text]);
  const output = model.predict(input);
  const entities = output.arraySync()[0];
  return entities;
}
