'use strict';
const AWS = require('aws-sdk')
const uuid = require('uuid');

module.exports.roll = async (event) => {

  const dice = parseInt(event.pathParameters.dice) || 5
  const rolls = []

  try {
    for (let i = 0; i < dice; i++) {
      rolls[i] = {
        "roll":i+1,
        "value":Math.floor(Math.random() * 6)+1
      }
    }

    const newDiceParams = {
      TableName: process.env.DYNAMODB_DICE_TABLE,
      Item: {
        pk: uuid.v1(),
        rolls: JSON.stringify(rolls)
      }
    }
    const dynamodb = new AWS.DynamoDB.DocumentClient()
    const putResult = await dynamodb.put(newDiceParams).promise()

    return {
      statusCode: 200,
      body: JSON.stringify(rolls,
        null,
        2
      ),
    };
  } catch(error) {
    return new Error('Error saving to DB')
  }
};
