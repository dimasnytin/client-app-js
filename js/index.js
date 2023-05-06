import { createClientsHeader } from "./createHeader.js"

// вызываем все приложение
const createApp = () => {
  const header = createClientsHeader();
  document.body.append(header)
}

createApp();