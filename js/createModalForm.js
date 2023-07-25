export const createClientsForm = () => {
    const modalTitle = document.createElement('h2');
    const modalClose = document.createElement('button');
    const form = document.createElement('form');
    const inputName = document.createElement('input');
    const labelName = document.createElement('label');
    const inputSurname = document.createElement('input');
    const labelSurname = document.createElement('label');
    const inputLastname = document.createElement('input');
    const labelLastname = document.createElement('label');
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
    modalClose.classList.add('modal__close');
    form.classList.add('modal__form');

    inputName.classList.add('modal__input');
    labelName.classList.add('modal__label');
    inputSurname.classList.add('modal__input');
    labelSurname.classList.add('modal__label');
    inputLastname.classList.add('modal__input');
    labelLastname.classList.add('modal__label');

    requiredName.classList.add('modal__label');
    requiredSurname.classList.add('modal__label');

    addContactBtn.classList.add('modal__btn-contact', 'modal__btn-contact--active');

    contactBtnSvgDefault.classList.add('btn-contact__svg', 'btn-contact__svg--default', 'btn-contact__svg--active');
    contactBtnSvgHover.classList.add('modal__');

    saveBtn.classList.add('modal__btn-save', 'btn-reset', 'site-btn');
    cancelBtn.classList.add('modal__btn-back','btn-reset');

    contactsBlock.classList.add('modal__');

    formFloatingName.classList.add('form__floating');
    formFloatingSurname.classList.add('form__floating');
    formFloatingLastName.classList.add('form__floating');

    // https://youtu.be/Xe3gaz_0qFQ?list=PLktakr6XMkP-FBr68wgI8xzMsXzE-ZqZF&t=1155

}

