// Importa las dependencias
import Sheets from '@google/api-client/googleapis/sheets/v4';


// Crea una instancia de la API
const sheets = new Sheets();

// Autentica la aplicación
sheets.setCredentials('-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDPu50EiouwD9x3\nBj74FtJAz+eXQESb9jZ4iogsV8ueij5qI1JLUSyRjvUCzTQZ0osiroxu1PvYbGc0\nZMAu0tDuBiQKYTNLECZH65cGtgPoF3uoANbCm9s22JcV89nqnhiWkXmFUvx9LVdh\n7E/1gXTwcwuySRB9qCfMZ4M853fUi/iEkHRR33q5se4Eu18kuj/4wv2SgW07+D8R\nFomoIM7CYHlLjIOmkXGxi2qN/hRoDJF3ktwfsK7J7MHZnfumxPbb4ElmGSD4y4ak\nKM6onjqQAEXvgR8Lnj2n6B5gyMAARrW7mo+lgFE7fdg+78d+ZeW4W92gEo/wNBz/\nJ81BObJBAgMBAAECggEAMUZN+QlKGDGy+HK9VgjHx8LpKtn+TEZrZk1p/qa2sH0X\nUALf3ui62y4fVRJK1QM5qLjhq9qOgKg6FNX/Njwgfg1r2CB1U81ZXz71XIypQZDs\nbo4AYzooFgrrT7Q/kST+LR0Fx8fHB4RNUXeGAfS6wdxwPlKRfFT6V8SH/1bieEJr\n6/1Z3AO4hVS66XmF5wOgBKKWvCwd3Z6e0AXxjDYWg4/0Po4Vj6DR8lwL2eQvlsYe\n9IgmUuQiz0JEkvPBGrpFg/+XUgVS8PMjpAxfhMJeM9B0qkqAhtvPd1c0QkVrMOFS\nQi1RQzJTh2n/KOhrdsFIcmZ4APz7reK7yW+xVauJ3wKBgQDv+LBRtfGY5iQILucA\nn+OFCYSRAnSsbvDqgUVSQVl78bRY28afxrmIZXgyAzZdvwT+IEIXRqN8Hkep3eLT\n8atRq7lQXLfRyOrrq+6pyaVKNWsB7oV42G0D3EHvFoKjyoVLCUNb9pP/FqOrBOqa\nId6DPsTkCpVEqM+kla01poojOwKBgQDdm6wAKz8/t3TDkhcjz4UOxIyhuYKJ0b0Y\nOsxOztHiRZPlxRymFXCVPACstxPvXAoKvP5/jPzNCpBfKWYp9rwOCLfmip3vpQcj\nc5qDLglAODhtx09f3C/6IwQl9idKlip+1jbmvMEuBrDqWCN0kLYRSSaw3wKU4kHJ\nTqc3J5gwswKBgQDC/BwwWJkVdrKCX7HdhQ02tRQdS5SH46EnuqAcBPNzzWKP7QwI\nGU35sREn+go7xBGHd6icBw6htGzgbmV3d1+P/euWi6/k6s9PbSWAmlMO6DapnCih\nl6GEyHxei7jc45rI7J7p44I/fCLCvDzvvmNx2xfaf2roHg6SGfhipo6JrwKBgQC/\nPw9K/geRh1NfS/5oSzj7K6hqEVyUb8sO0/9pq5b5/S3LxzYYJryILcYvR7gOg5Gu\n/rdrgFLS6OD7HxEp+eMFAYUjklEGdZcZgzS/LMWTBHG+W5kmkzFcX0e/MxVpivqV\nh2zN5+uXOvMG6pV+jTxy4nxfe7YQoso/Xn90W9k9fQKBgHk9ffyDHG4lLyvBV9O3\n+e15OSZg3sFn1OskzvnQjzphAGwv1NT2RV9hEmLAApzok1A+F6x9G+7yTDawpbiR\nzHNC8XFSIPwXovF2WQq7Gg/GoQzkv426ISg1h4Pozd3327LRjtLNw1sYTdAd/E/g\nMVgha1yyUPt6U5u+m++iRgj0\n-----END PRIVATE KEY-----\n');

// Lee los datos de una hoja de cálculo
const sheet = sheets.spreadsheets().get({
  spreadsheetId: '1CeGTujn8TpLaybJU8asO5NvE8-Rh5QsahCIX7E8D7z4',
  range: 'productosOnline!A:F'
}).execute();

// Imprime los datos
console.log(sheet.getDataRange().getValues());
