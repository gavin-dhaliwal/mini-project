const axios = require("axios");

exports.firestoreTrigger = async (data, context) => {
  const dataValue = data.oldValue.fields.name.stringValue;
  console.log(`Pokemon Name deleted: ${dataValue}`);

  try {
    await axios.get(
      `https://us-central1-dpduk-developer-gavin-dhaliwal.cloudfunctions.net/deleteCloudSQL?name=${dataValue}`
    );
    await axios.get(
      `https://us-central1-dpduk-developer-gavin-dhaliwal.cloudfunctions.net/deleteCloudStorage?name=${dataValue}`
    );
  } catch (e) {
    console.log(e);
  }
};

//gcloud functions deploy firestoreTrigger --runtime nodejs10 --trigger-event providers/cloud.firestore/eventTypes/document.delete --trigger-resource projects/dpduk-developer-gavin-dhaliwal/databases/{database}/documents/pokemonsV2/{pokemon}

// https://us-central1-dpduk-developer-gavin-dhaliwal.cloudfunctions.net/deleteCloudSQL?name=
// https://us-central1-dpduk-developer-gavin-dhaliwal.cloudfunctions.net/deleteCloudStorage?name=
