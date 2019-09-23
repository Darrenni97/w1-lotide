const assertEqual = require('../assertEqual');
const head = require('../head');
assertEqual(head([4,5,6]), 4);
assertEqual(head(["hello", "lighthouse", "labs"],"hello"));