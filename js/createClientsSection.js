export const createClientsSection = () => {

  // создаем html 
  const section = document.createElement('section');
  const container = document.createElement('div');
  const main = document.createElement('main');
  const h1 = document.createElement('h1');   
  const sortingDisplay = document.createElement('thead');
  const theadTr = document.createElement('tr');
  const sortingDisplayId = document.createElement('td');
  const sortingDisplayName = document.createElement('td');
  const sortingDisplayCreate = document.createElement('td');
  const sortingDisplayEdit = document.createElement('td');
  const sortingDisplayContacts = document.createElement('td');
  const sortingDisplayActions = document.createElement('');
  const sortingDisplaySpan = document.createElement('span');
  const addUserBtm = document.createElement('button');
  const addUserSvgBtm = document.createElement('span');
  const tableWrapper = document.createElement('div');
  const clientsTable = document.createElement('table');
  const tbody = document.createElement('tbody');
  const createSpan = document.createElement('span');
  const edditSpan = document.createElement('span');

  // добавляем стили к html
  section.classList.add('clients');
  tableWrapper.classList.add('clients__wrapper');
  h1.classList.add('clients_heading');
  tbody.classList.add('clients__tbody');
  sortingDisplay.classList.add('clients__display', 'display__info');
  sortingDisplayId.classList.add('display-info__item', 'display-info__item--id', 'sort-up');
  sortingDisplayName.classList.add('display-info__item', 'display-info__item--name', 'sort-down');
  sortingDisplayCreate.classList.add('display-info__item', 'display-info__item--create', 'sort-up');
  sortingDisplayEdit.classList.add('display-info__item', 'display-info__item--change', 'sort-up');
  sortingDisplayContacts.classList.add('display-info__item', 'display-info__item--contacts');
  sortingDisplayActions.classList.add('display-info__item', 'display-info__item--actions');
  sortingDisplaySpan.classList.add('display-info__sorting');
  addUserBtm.classList.add('clients__btn', 'btn-reset');
  addUserSvgBtm.classList.add('clients__svg');
  container.classList.add('container');
  main.classList.add('main');
  clientsTable.classList.add('clients__table');
  createSpan.classList.add('create__span');
  edditSpan.classList.add('change__span');

  // наполняем html контентом
  h1.textContent = 'Клиенты';
}