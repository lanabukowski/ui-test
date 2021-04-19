
const fetch = require('node-fetch');

export class ApiClient {

    createNewUser(email = `test+${Date.now()}@test.com`, password = '11112222') {
        browser.call(async () => {
            await fetch("http://93.126.97.71:10082/index.php?route=account/register", {
                "headers": {
                  "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                  "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
                  "cache-control": "max-age=0",
                  "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryLAAGyXBeKcmYQ3yl",
                  "upgrade-insecure-requests": "1",
                },
                "referrer": "http://93.126.97.71:10082/index.php?route=account/register",
                "body": `------WebKitFormBoundaryLAAGyXBeKcmYQ3yl\r\nContent-Disposition: form-data; name=\"customer_group_id\"\r\n\r\n1\r\n------WebKitFormBoundaryLAAGyXBeKcmYQ3yl\r\nContent-Disposition: form-data; name=\"firstname\"\r\n\r\ntestetstt\r\n------WebKitFormBoundaryLAAGyXBeKcmYQ3yl\r\nContent-Disposition: form-data; name=\"lastname\"\r\n\r\ntedstetedt\r\n------WebKitFormBoundaryLAAGyXBeKcmYQ3yl\r\nContent-Disposition: form-data; name=\"email\"\r\n\r\n${email}\r\n------WebKitFormBoundaryLAAGyXBeKcmYQ3yl\r\nContent-Disposition: form-data; name=\"telephone\"\r\n\r\n4234234242342\r\n------WebKitFormBoundaryLAAGyXBeKcmYQ3yl\r\nContent-Disposition: form-data; name=\"password\"\r\n\r\n${password}\r\n------WebKitFormBoundaryLAAGyXBeKcmYQ3yl\r\nContent-Disposition: form-data; name=\"confirm\"\r\n\r\n11112222\r\n------WebKitFormBoundaryLAAGyXBeKcmYQ3yl\r\nContent-Disposition: form-data; name=\"newsletter\"\r\n\r\n0\r\n------WebKitFormBoundaryLAAGyXBeKcmYQ3yl\r\nContent-Disposition: form-data; name=\"agree\"\r\n\r\n1\r\n------WebKitFormBoundaryLAAGyXBeKcmYQ3yl--\r\n`,
                "method": "POST",
              });
        })

        return { email: email, password: password }
    }
}