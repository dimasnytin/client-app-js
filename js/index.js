import { createClientsHeader } from "./createHeader.js";
import { createClientsSection } from "./createClientsSection.js";




// вызываем все приложение
const createApp = () => {
  const header = createClientsHeader();
  const clientsSection = createClientsSection();
  document.body.append(header, clientsSection);
}

createApp();