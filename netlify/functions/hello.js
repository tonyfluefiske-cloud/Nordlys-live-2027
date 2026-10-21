
exports.handler = async function () {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      status: "OK",
      melding: "Nordlys Live 2027 fungerer!"
    })
  };
};
