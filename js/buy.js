// Елки закажи модал - buy
  const btnCloseBuyZ = document.querySelector('.buy__modal-close_js');
  const modalBuyZ = document.querySelector('.buy__сhristmasTree_js');
  if (modalBuyZ) {
    btnCloseBuyZ.addEventListener('click', function () {
      document.querySelector('.buy__сhristmasTree_js').classList.toggle('buy__сhristmasTree_js_active');
    });
    modalBuyZ.addEventListener('click', function (event) {
      if (event._notClick) return;
      modalBuyZ.classList.remove('buy__сhristmasTree_js_active');
      document.querySelector('.buy__сhristmasTree-sps_js').classList.remove('buy__сhristmasTree-sps_js_active');
    });    
  }


  // inputmask - Телефон/d-31
  const formJsZ = document.querySelector('.buy__form_js');
  if (formJsZ) { // Обёртка if. Спасение Gulp-а от null в браузере
    const telSelector = formJsZ.querySelector('input[type="tel"]');
    const inputMask = new Inputmask('+7 (999) 999-99-99');
    inputMask.mask(telSelector);

    new window.JustValidate('.buy__form_js', {
      rules: {
        name: {
          required: true,
          minLength: 2,
          maxLenght: 10,
          strength: {
            custom: '^[А-яёЁ\s-]' //только по русски текст
            //custom: '^[а-яёЁ\s]+$'только по русски и маленькими буквами
            //custom: '^[a-yeO\s]+$'только по английски текст
          }
        },
        tel: {
          required: true,
          function: () => {
            const phone = telSelector.inputmask.unmaskedvalue();
            return Number(phone) && phone.length === 10;
          }
        },
        /*checkbox: { // Обязательная галка
          required: true
        }*/
      },
      colorWrong: 'red',

      messages: {
        name: {
          required: 'Введите ваше имя',
          minLength: 'Введите 3 и более символов',
          maxLength: 'Запрещено вводить более 15 символов',
          strength: 'Текст только по русски'
          //strength: 'Текст только по русски и маленькими буквами'
          //strength: 'Текст только по английски'
        },
        // email: {
        //   email: 'Недопустимый формат',
        //   required: 'Введите email'
        // },
        tel: {
          required: 'Введите ваш телефон',
          function: 'Здесь должно быть 11 симв..'
        }
        //, checkbox: {
        //   required: 'Поставьте галочку',
        //   function: 'Здесь должна быть галка'
        // }
      },

      //*отправка формы*/
      submitHandler: function (thisForm) {
        let formData = new FormData(thisForm);
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Отправлено');
            } //if xhr
          }
        }

        xhr.open('POST', 'mail.php', 'list.php', true);
        xhr.send(formData);
        thisForm.reset();
        document.querySelector('.buy__сhristmasTree_js').classList.toggle('buy__сhristmasTree_js_active');
        document.querySelector('.buy__сhristmasTree-sps_js').classList.toggle('buy__сhristmasTree-sps_js_active');
      }
    })
  }