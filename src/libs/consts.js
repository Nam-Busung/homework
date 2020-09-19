
// const baseUrl = 'http://192.168.31.139';
const baseUrl = 'https://canvas-api-upload-image.azurewebsites.net/v1'//'https://canvas-api-stage.azurewebsites.net/v1';
const adminUrl = 'https://trustverse.file.core.windows.net/canvasproducts/admin/';
const tamsUrl = 'https://trv-users.trustverse.io';

export default {
  apiBasicUrl: `${baseUrl}`,
  resourceBaseUrl: baseUrl,
  paymentUrl: `${baseUrl}/payment/payments/credit_card.php`,
  resourceUrl: `${adminUrl}`,
  loginUrl: `${tamsUrl}`,
};


