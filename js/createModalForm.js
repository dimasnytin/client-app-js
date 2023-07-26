export const createClientsForm = () => {
    const modalTitle = document.createElement('h2');
    const modalClose = document.createElement('button');
    const form = document.createElement('form');
    const inputName = document.createElement('input');
    const labelName = document.createElement('label');
    const inputSurname = document.createElement('input');
    const labelSurname = document.createElement('label');
    const inputLastName = document.createElement('input');
    const labelLastName = document.createElement('label');
    const requiredName = document.createElement('span');
    const requiredSurname = document.createElement('span');
    const addContactBtn = document.createElement('button');
    const contactBtnSvgDefault = document.createElement('span');
    const contactBtnSvgHover = document.createElement('span');
    const saveBtn = document.createElement('button');
    const cancelBtn = document.createElement('button');
    const contactsBlock = document.createElement('div');
    const formFloatingName = document.createElement('div');
    const formFloatingSurname = document.createElement('div');
    const formFloatingLastName = document.createElement('div');



    modalTitle.classList.add('modal__title');
    modalClose.classList.add('modal__close', 'btn-reset');
    form.classList.add('modal__form');

    inputName.classList.add('modal__input');
    labelName.classList.add('modal__label');
    inputSurname.classList.add('modal__input');
    labelSurname.classList.add('modal__label');
    inputLastName.classList.add('modal__input');
    labelLastName.classList.add('modal__label');

    requiredName.classList.add('modal__label');
    requiredSurname.classList.add('modal__label');

    addContactBtn.classList.add('modal__btn-contact', 'modal__btn-contact--active');

    contactBtnSvgDefault.classList.add('btn-contact__svg', 'btn-contact__svg--default', 'btn-contact__svg--active');
    contactBtnSvgHover.classList.add('btn-contact__svg', 'btn-contact__svg--hover');

    saveBtn.classList.add('modal__btn-save', 'btn-reset', 'site-btn');
    cancelBtn.classList.add('modal__btn-back','btn-reset');

    contactsBlock.classList.add('modal__contact');

    formFloatingName.classList.add('form__floating');
    formFloatingSurname.classList.add('form__floating');
    formFloatingLastName.classList.add('form__floating');

    inputName.type = 'text';
    inputSurname.type = 'text';
    inputLastName.type = 'text';

    inputName.placeholder = 'Имя';
    inputSurname.placeholder = 'Фамилия';
    inputLastName.placeholder = 'Отчество';


    // определяем атрибут
    labelName.for = 'floatingName';
    labelSurname.for = 'floatingSurname';
    labelLastName.for = 'floatingLastName';

    // добавляем ID
    inputName.id = 'floatingName';
    inputSurname.id = 'floatingName';
    inputLastName.id = 'floatingName';

    // добавляем контент
    modalTitle.textContent = 'Новый клиент';
    labelName.textContent = 'Имя';
    labelSurname.textContent = 'Фамилия';
    labelLastName.textContent = 'Отчество';

    // кнопки
    addContactBtn.textContent = 'Добавить контакт';
    saveBtn.textContent = 'Сохранить';
    cancelBtn.textContent = 'Отмена';
    requiredName.textContent = '*';
    requiredSurname.textContent = '*';

    // иконки svg добавляем 
    contactBtnSvgDefault.innerHTML = svgContactDefault;
    contactBtnSvgHover.innerHTML = svgContactHover;
    
    labelName.append(requiredName);
    labelSurname.append(requiredSurname);
    formFloatingName.append(inputName, labelName);
    formFloatingSurname.append(inputName, labelSurname);
    formFloatingLastName.append(inputLastName, labelLastName);
    contactsBlock.append(addContactBtn);
    form.append(
        formFloatingName,
        formFloatingSurname,
        formFloatingLastName,
        saveBtn,
        cancelBtn,
    );
    addContactBtn.append(contactBtnSvgDefault, contactBtnSvgHover);

    return {
        form,
        modalClose,
        modalTitle,
        cancelBtn,
        inputName,
        inputSurname,
        inputLastName,
        labelName,
        labelSurname,
        labelLastName,
        contactsBlock,
        addContactBtn
    };
}

